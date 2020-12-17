class Api {
  constructor(config) {
    this.baseUrl = config.baseUrl;
    this.headers = config.headers;
  }

  getUserInfo() {
    return fetch(this.baseUrl + "/users/me", { headers: this.headers })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }

        return Promise.reject(
          `Ошибка: не удалось загрузить данные пользователя, статус ${res.status}`
        );
      })
      .catch((err) => alert(err));
  }

  initialCards() {
    return fetch(this.baseUrl + "/cards", { headers: this.headers })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }

        return Promise.reject(
          `Ошибка: не удалось загрузить данные галереи, статус ${res.status}`
        );
      })
      .catch((err) => alert(err));
  }

  sendProfileInfo({ value0: name, value1: about }) {
    return fetch(this.baseUrl + "/users/me", {
      method: "PATCH",
      headers: this.headers,
      body: JSON.stringify({
        name: name,
        about: about,
      }),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }

        return Promise.reject(
          `Ошибка: не удалось отправить данные пользователя на сервер, статус ${res.status}`
        );
      })
      .catch((err) => alert(err));
  }

  sendNewCard(data) {
    return fetch(this.baseUrl + "/cards", {
      method: "POST",
      headers: this.headers,
      body: JSON.stringify({
        name: data.name,
        link: data.link,
      }),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }

        return Promise.reject(
          `Ошибка: не удалось отправить данные карточки на сервер, статус ${res.status}`
        );
      })
      .catch((err) => alert(err));
  }

  deleteCard(id) {
    return fetch(this.baseUrl + `/cards/${id}`, {
      method: "DELETE",
      headers: this.headers,
    })
      .then((res) => {
        if (res.ok) {
          console.log("Карточка удалена!");
        } else {
          return Promise.reject(
            `Ошибка: не удалось удалить карточку на сервере, статус ${res.status}`
          );
        }
      })
      .catch((err) => alert(err));
  }

  changeLikeCardStatus(id, status) {
    if (status) {
      return fetch(this.baseUrl + `/cards/likes/${id}`, {
        method: "PUT",
        headers: this.headers,
      })
        .then((res) => {
          if (res.ok) {
            return res.json();
          } else {
            return Promise.reject(
              `Ошибка: не удалось поставить like, статус ${res.status}`
            );
          }
        })
        .catch((err) => alert(err));
    } 
    else if (!status){
      return fetch(this.baseUrl + `/cards/likes/${id}`, {
        method: "DELETE",
        headers: this.headers,
      })
        .then((res) => {
          if (res.ok) {
            return res.json();
          } else {
            return Promise.reject(
              `Ошибка: не удалось снять like, статус ${res.status}`
            );
          }
        })
        .catch((err) => alert(err));
    }
    
  }

  changeAvatar(link) {
    return fetch(this.baseUrl + "/users/me/avatar", {
      method: "PATCH",
      headers: this.headers,
      body: JSON.stringify({
        avatar: link.value0,
      }),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }

        return Promise.reject(
          `Ошибка: не удалось отправить аватар пользователя на сервер, статус ${res.status}`
        );
      })
      .catch((err) => alert(err));
  }
}

const api = new Api({
  baseUrl: "https://mesto.nomoreparties.co/v1/cohort-17",
  headers: {
    authorization: "ce46bc36-f433-488f-bf62-df1955cfcd45",
    "Content-Type": "application/json",
  },
});

export default api;
