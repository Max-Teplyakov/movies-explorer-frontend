import { Routes, Route, useNavigate, useLocation } from "react-router-dom";

import { useState, useEffect } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Login from "../Login/Login";
import Register from "../Register/Register";
import Profile from "../Profile/Profile";
import NotFoundPage from "../NotFoundPage/NotFoundPage";
import * as auth from "../../utils/auth";
import { mainApi } from "../../utils/MainApi";
import { moviesApi } from "../../utils/MoviesApi";
import ProtectedRouteElement from "../ProtectedRoute/ProtectedRoute";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [isMovies, setIsMovies] = useState([]);
  const [isSaveMovies, setIsSaveMovies] = useState([]);
  const [isPreloader, setIsPreloader] = useState(false);
  const [isShortsFilms, setIsShortsFilms] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();

  // проверка токена, запрос к сохраненым карточкам
  useEffect(() => {
    handleTokenCheck();
    mainApi.getSavedMovies().then((SavedMovies) => {
      setIsSaveMovies(SavedMovies);
    });
  }, [loggedIn]);

  useEffect(() => {
    if (loggedIn) {
      if (location.pathname === "/signin" || location.pathname === "/signup") {
        navigate("/movies");
      }
    }
  }, [location.pathname, loggedIn]);
  //проверка jwt токена
  const handleTokenCheck = () => {
    const token = localStorage.getItem("token");
    if (token) {
      auth
        .checkToken(token)
        .then((res) => {
          if (res) {
            setCurrentUser(res);
            setLoggedIn(true);
            navigate(location.pathname, { replace: true });
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
  // Регистрация
  function handleRegistration(password, email, name) {
    auth
      .register(password, email, name)
      .then(() => {
        handleLogin(password, email);
      })
      .then((res) => {
        if (res) {
          navigate("/signin", { replace: true });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  // вход в акаунт
  function handleLogin(email, password) {
    auth
      .login(email, password)
      .then((data) => {
        if (data.token) {
          handleTokenCheck();
          setLoggedIn(true);
          navigate("/movies", { replace: true });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }
  // выход из акаунта
  function signOut() {
    localStorage.clear();
    navigate("/");
    setLoggedIn(false);
  }
  // редактирование имени и емэйла
  function handleUpdateUser(data) {
    mainApi
      .replaceUserData(data)
      .then((userData) => {
        setCurrentUser(userData);
      })
      .catch((err) => console.log(err));
  }
  // поиск фильмов
  function handleSearchMovies(string) {
    localStorage.setItem("SearchForm", JSON.stringify(string));
    setIsPreloader(true);
    moviesApi
      .getInitialMovies()
      .then((dataMovies) => {
        localStorage.setItem("moviesFromMoviesApi", JSON.stringify(dataMovies));
      })
      .then(() => {
        const searchFilms = JSON.parse(
          localStorage.getItem("moviesFromMoviesApi")
        );
        const searchFilter = searchFilms.filter((movie) => {
          return movie.nameRU.toLowerCase().includes(string);
        });
        setIsPreloader(false);
        localStorage.setItem("moviesSearchResult", JSON.stringify(searchFilter));
        setIsMovies(searchFilter);
      });
  }

  // сохранение фильма
  function moviesSave(film) {
    mainApi.addMovie(film).then((res) => {
      setIsSaveMovies((state) => [res, ...state]);
    });
  }

  // удаление фильма
  function deleteMovies(movie) {
    console.log(movie);
    mainApi.deleteMovie(movie._id).then((res) => {
      const deletedMovieId = isSaveMovies.findIndex((i) => i._id === movie._id);
      let newSaveMovies = [...isSaveMovies];
      newSaveMovies.splice(deletedMovieId, 1);
      setIsSaveMovies(newSaveMovies);
    });
  }

  function checkboxToggle(checkboxState) {
    localStorage.setItem("checkboxState", checkboxState);
    if (checkboxState) {
      setIsShortsFilms(isMovies.filter((c) => c.duration < 40));
    } else {
      setIsShortsFilms(isMovies);
    }
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <Routes>
        <Route path="/" element={<Main loggedIn={loggedIn} />} />
        <Route
          path="/movies"
          element={
            <ProtectedRouteElement
              element={Movies}
              loggedIn={loggedIn}
              isMovies={isMovies}
              handleSearchMovies={handleSearchMovies}
              moviesSave={moviesSave}
              isPreloader={isPreloader}
              checkboxToggle={checkboxToggle}
            />
          }
        />
        <Route
          path="/saved-movies"
          element={
            <ProtectedRouteElement
              element={SavedMovies}
              loggedIn={loggedIn}
              isSaveMovies={isSaveMovies}
              deleteMovies={deleteMovies}
            />
          }
        />
        <Route
          path="/profile"
          element={
            <ProtectedRouteElement
              element={Profile}
              signOut={signOut}
              loggedIn={loggedIn}
              handleUpdateUser={handleUpdateUser}
            />
          }
        />
        <Route path="/signin" element={<Login handleLogin={handleLogin} />} />
        <Route
          path="/signup"
          element={<Register handleRegistration={handleRegistration} />}
        />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </CurrentUserContext.Provider>
  );
}

export default App;
