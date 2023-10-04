export default class MoviesApi {
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
    return fetch(this._baseUrl, {
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => this._getResponseData(res));
  }
}

export const moviesApi = new MoviesApi({
  baseUrl: "https://api.nomoreparties.co/beatfilm-movies",
});
