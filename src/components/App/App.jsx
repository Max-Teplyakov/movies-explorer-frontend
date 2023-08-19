import { Routes, Route, useNavigate, Navigate } from "react-router-dom";
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

  let navigate = useNavigate();

  useEffect(() => {
    handleTokenCheck();
  }, []);
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
            navigate("/movies", { replace: true });
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

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
    localStorage.removeItem("token");
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
  useEffect(() => {
    moviesApi.getInitialMovies().then((dataMovies) => {
      setIsMovies(dataMovies);
    });
  }, [loggedIn]);

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
            />
          }
        />
        <Route
          path="/saved-movies"
          element={
            <ProtectedRouteElement element={SavedMovies} loggedIn={loggedIn} />
          }
        />
        <Route path="/signin" element={<Login handleLogin={handleLogin} />} />
        <Route path="/signup" element={<Register />} />
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
        <Route path="/*" element={<NotFoundPage />} />
      </Routes>
    </CurrentUserContext.Provider>
  );
}

export default App;
