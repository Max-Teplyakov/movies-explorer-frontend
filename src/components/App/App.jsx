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
  const [isSuccess, setIsSuccess] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [isMovies, setIsMovies] = useState([]);
  const [isSearchMovies, setIsSearchMovies] = useState(
    JSON.parse(localStorage.getItem("moviesSearchResult"))
  );
  const [isSearchSaveMovies, setIsSearchSaveMovies] = useState([]);
  const [isSaveMovies, setIsSaveMovies] = useState([]);
  const [isPreloader, setIsPreloader] = useState(false);
  const [isErrorMessage, setIsErrorMessage] = useState("");
  const [isSuccessMesage, setIsSuccessMesage] = useState("");
  const [checkbox, setCheckbox] = useState(
    JSON.parse(localStorage.getItem("checkboxState"))
  );
  const [checkboxSave, setCheckboxSave] = useState(
    JSON.parse(localStorage.getItem("checkboxStateSaveMovies"))
  );
  const [toggleMovies, setToggleMovies] = useState([]);
  const [toggleSaveMovies, setToggleSaveMovies] = useState([]);
  const [stateMovie, setStateMovie] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    handleTokenCheck();
    if (loggedIn) {
      mainApi
        .getSavedMovies()
        .then((SavedMovies) => {
          setIsSaveMovies(SavedMovies);
        })
        .catch((err) => {
          console.error(err);
        });
      if (!loggedIn) {
        setToggleMovies([]);
        setIsSearchMovies([]);
      }
    }
  }, [loggedIn]);

  useEffect(() => {
    if (loggedIn) {
      if (location.pathname === "/signin" || location.pathname === "/signup") {
        navigate("/movies");
      }
    }
  }, [location.pathname, loggedIn]);

  useEffect(() => {
    if (location.pathname === "/movies") {
      setCheckbox(JSON.parse(localStorage.getItem("checkboxState")));
    }
  }, [checkbox, setCheckbox]);

  useEffect(() => {
    setIsSearchSaveMovies(JSON.parse(localStorage.getItem("moviesSaved")));
  }, [isSaveMovies]);

  useEffect(() => {
    if (location.pathname === "/saved-movies") {
      setCheckboxSave(
        JSON.parse(localStorage.getItem("checkboxStateSaveMovies"))
      );
    }
  }, [checkboxSave, setCheckboxSave]);

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
          if (err.code === "Ошибка: 401") {
            console.log(err);
            setLoggedIn(false);
            localStorage.clear();
          }
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
      .then(() => {
        setIsSuccess(true);
        setIsSuccessMesage("Регистрация прошла успешно");
        setTimeout(() => {
          setIsSuccessMesage("");
        }, 2000);
      })
      .catch((err) => {
        if (err === "Ошибка: 409") {
          setIsErrorMessage("Попробуйте другой E-mail");
        } else {
          setIsErrorMessage("Произошла ошибка, попробуйте еще раз");
        }
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
          setIsSuccess(true);
        }
      })
      .catch((err) => {
        if (err === "Ошибка: 400") {
          setIsErrorMessage("Неправильный логин или пароль");
        } else {
          setIsErrorMessage("Произошла ошибка, попробуйте еще раз");
        }
        setTimeout(() => {
          setIsErrorMessage("");
        }, 2000);
      });
  }
  // выход из акаунта
  function signOut() {
    navigate("/");
    setLoggedIn(false);
    setCurrentUser({
      email: "",
      name: "",
    });
    setIsSaveMovies([]);
    setToggleSaveMovies([]);
    setIsSearchMovies([]);
    localStorage.clear();
    localStorage.removeItem("movies");
  }
  // редактирование имени и емэйла
  function handleUpdateUser(data) {
    mainApi
      .replaceUserData(data)
      .then((userData) => {
        setCurrentUser(userData);
        setIsSuccessMesage("Данные изменены");
        setTimeout(() => {
          setIsSuccessMesage("");
        }, 5000);
        setIsSuccess(true);
      })
      .catch((err) => {
        console.log(err);
        if (err === "Ошибка: 409") {
          setIsErrorMessage("Попробуйте другой E-mail");
        }
        setIsErrorMessage("Произошла ошибка, попробуйте еще раз");
      });
  }
  function serchQuery(string) {
    localStorage.setItem("SearchForm", JSON.stringify(string.toLowerCase()));
    const searchFilms = JSON.parse(localStorage.getItem("movies"));
    const searchFilter = searchFilms.filter((movie) =>
      movie.nameRU.toLowerCase().includes(string.toLowerCase())
    );
    localStorage.setItem("moviesSearchResult", JSON.stringify(searchFilter));
    setIsSearchMovies(searchFilter);
  }
  // Запрос к BeatFilm
  function serchOne(string) {
    setIsPreloader(true);
    moviesApi
      .getInitialMovies()
      .then((dataMovies) => {
        localStorage.setItem("movies", JSON.stringify(dataMovies));
        setIsMovies(dataMovies);
      })
      .then(() => {
        serchQuery(string);
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(() => {
        setIsPreloader(false);
      });
  }
  // поиск фильмов
  function handleSearchMovies(string) {
    if (
      location.pathname === "/movies" &&
      !JSON.parse(localStorage.getItem("movies"))
    ) {
      serchOne(string);
    } else {
      serchQuery(string);
    }
  }

  // поиск в сохраненых фильмах
  function handleSearchSavedMovies(string) {
    setStateMovie(true);
    const searchFilterSaveMovies = isSaveMovies.filter((saveMovie) =>
      saveMovie.nameRU.toLowerCase().includes(string.toLowerCase())
    );
    setIsSearchSaveMovies(searchFilterSaveMovies);
  }

  // сохранение фильма
  function moviesSave(film) {
    mainApi
      .addMovie(film)
      .then((res) => {
        setIsSaveMovies((state) => [res, ...state]);
      })
      .catch((err) => console.log(err));
  }

  // удаление фильма
  function deleteMovies(_id) {
    mainApi
      .deleteMovie(_id)
      .then(() => {
        const deletedMovieId = isSaveMovies.findIndex((i) => i._id === _id);
        let newSaveMovies = [...isSaveMovies];
        newSaveMovies.splice(deletedMovieId, 1);
        setIsSaveMovies(newSaveMovies);
      })
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    if (checkbox && isSearchMovies) {
      const shortMovies = isSearchMovies.filter(
        (movie) => movie.duration <= 40
      );
      setToggleMovies(shortMovies);
    }
    localStorage.setItem("checkboxState", JSON.stringify(checkbox));
    setCheckbox(JSON.parse(localStorage.getItem("checkboxState")));
  }, [checkbox, isSearchMovies, setToggleMovies]);

  useEffect(() => {
    if (checkboxSave && isSaveMovies) {
      console.log(isSaveMovies);
      const shortSavedMovies = isSaveMovies.filter(
        (movie) => movie.duration <= 40
      );
      setToggleSaveMovies(shortSavedMovies);
    }
    localStorage.setItem(
      "checkboxStateSaveMovies",
      JSON.stringify(checkboxSave)
    );
    setCheckboxSave(
      JSON.parse(localStorage.getItem("checkboxStateSaveMovies"))
    );
  }, [checkboxSave, isSaveMovies, setToggleSaveMovies]);

  function handleChecboxChange() {
    setCheckbox(!checkbox);
  }

  function handleChecboxSaveChange() {
    setCheckboxSave(!checkboxSave);
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
              isMovies={checkbox ? toggleMovies : isSearchMovies}
              checkbox={checkbox}
              isSaveMovies={isSaveMovies}
              loggedIn={loggedIn}
              moviesSave={moviesSave}
              deleteMovies={deleteMovies}
              handleSearchMovies={handleSearchMovies}
              isPreloader={isPreloader}
              handleChecboxChange={handleChecboxChange}
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
              isMovies={
                checkboxSave
                  ? toggleSaveMovies
                  : stateMovie
                  ? isSearchSaveMovies
                  : isSaveMovies
              }
              deleteMovies={deleteMovies}
              handleSearchSavedMovies={handleSearchSavedMovies}
              handleChecboxSaveChange={handleChecboxSaveChange}
              checkboxSave={checkboxSave}
            />
          }
        />
        <Route
          path="/profile"
          element={
            <ProtectedRouteElement
              element={Profile}
              isSuccess={isSuccess}
              signOut={signOut}
              loggedIn={loggedIn}
              handleUpdateUser={handleUpdateUser}
              isSuccessMesage={isSuccessMesage}
              isErrorMessage={isErrorMessage}
              checkboxSave={checkboxSave}
            />
          }
        />
        <Route
          path="/signin"
          element={
            <Login
              handleLogin={handleLogin}
              isSuccessMesage={isSuccessMesage}
              isErrorMessage={isErrorMessage}
              isSuccess={isSuccess}
            />
          }
        />
        <Route
          path="/signup"
          element={
            <Register
              handleRegistration={handleRegistration}
              isSuccessMesage={isSuccessMesage}
              isErrorMessage={isErrorMessage}
              isSuccess={isSuccess}
            />
          }
        />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </CurrentUserContext.Provider>
  );
}

export default App;
