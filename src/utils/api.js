export default class Api {
  constructor({ baseUrl }) {
    this._baseUrl = baseUrl;
  }

  _getResponseData(res) {
    if (!res.ok) {
      return Promise.reject(`Ошибка: ${res.status}`);
    }
    return res.json();
  }
  //получить список всех фильмов в виде массива
  getInitialMovies() {
    const jwt = localStorage.getItem('token');
    return fetch(`${this._baseUrl}/movies`, {
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${jwt}`,
      },
    }).then((res) => this._getResponseData(res));
  }
  //сохранить фильм
  addMovie({ name, link }) {
    const jwt = localStorage.getItem('token');
    return fetch(`${this._baseUrl}/movies`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${jwt}`,
      },
      body: JSON.stringify({
        name,
        link,
      }),
    }).then((res) => this._getResponseData(res));
  }
  //удалить фильм
  deleteMovie(_id) {
    const jwt = localStorage.getItem('token');
    return fetch(`${this._baseUrl}/movies/${_id}`, {
      method: "DELETE",
      headers: {
        authorization: `Bearer ${jwt}`,
      },
    }).then((res) => this._getResponseData(res));
  }
  //получить данные пользователя
  getUserData() {
    const jwt = localStorage.getItem('token');
    return fetch(`${this._baseUrl}/users/me`, {
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${jwt}`,
      },
    }).then((res) => this._getResponseData(res));
  }
  //заменить данные пользователя
  replaceUserData({ name, email }) {
    const jwt = localStorage.getItem('token');
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

  // changeLikeCardStatus(_id, isLiked) {
  //   if (isLiked) {
  //     return this.deleteLikeCard(_id);
  //   }
  //   return this.likeCard(_id);
  // }
}

export const api = new Api({
  baseUrl: "https://api.kinomax.nomoredomains.xyz",
  });
