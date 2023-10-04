export default class MainApi {
  constructor({ baseUrl }) {
    this._baseUrl = baseUrl;
  }

  _getResponseData(res) {
    if (!res.ok) {
      return Promise.reject(`Ошибка: ${res.status}`);
    }
    return res.json();
  }
  //получить список сохраненых фильмов в виде массива
  getSavedMovies() {
    const jwt = localStorage.getItem("token");
    return fetch(`${this._baseUrl}/movies`, {
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${jwt}`,
      },
    }).then((res) => this._getResponseData(res));
  }
  //сохранить фильм
  addMovie(
    {
      country,
      director,
      duration,
      year,
      description,
      image,
      trailerLink,
      nameRU,
      nameEN,
      id,
    },
    userId
  ) {
    const jwt = localStorage.getItem("token");
    return fetch(`${this._baseUrl}/movies`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${jwt}`,
      },
      body: JSON.stringify({
        country,
        director,
        duration,
        year,
        description,
        image: `https://api.nomoreparties.co${image.url}`,
        trailerLink,
        thumbnail: `https://api.nomoreparties.co${image.formats.thumbnail.url}`,
        owner: userId,
        movieId: id,
        nameRU,
        nameEN,
      }),
    }).then((res) => this._getResponseData(res));
  }
  //удалить фильм
  deleteMovie(_id) {
    const jwt = localStorage.getItem("token");
    return fetch(`${this._baseUrl}/movies/${_id}`, {
      method: "DELETE",
      headers: {
        authorization: `Bearer ${jwt}`,
      },
    }).then((res) => this._getResponseData(res));
  }
  //получить данные пользователя
  getUserData() {
    const jwt = localStorage.getItem("token");
    return fetch(`${this._baseUrl}/users/me`, {
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${jwt}`,
      },
    }).then((res) => this._getResponseData(res));
  }
  //заменить данные пользователя
  replaceUserData({ name, email }) {
    const jwt = localStorage.getItem("token");
    return fetch(`${this._baseUrl}/users/me`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${jwt}`,
      },
      body: JSON.stringify({
        name,
        email,
      }),
    }).then((res) => this._getResponseData(res));
  }
}

export const mainApi = new MainApi({
  baseUrl: "https://api.kinomax.nomoredomains.xyz",
});
