import { useState } from "react";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import Main from "./Main/Main";
import PopupWithForm from "./PopupWithForm/PopupWithForm";

function App() {
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [closePopup, setClosePopup] = useState(true);

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(!isEditAvatarPopupOpen);
    setClosePopup(true);
  }
  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(!isEditProfilePopupOpen);
    setClosePopup(true);
  }
  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(!isAddPlacePopupOpen);
    setClosePopup(true);
  }
  function closeAllPopups() {
    setClosePopup(!closePopup);
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
  }
  return (
    <div className="App">
      <main className="page">
        <Header />
        <Main
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onEditAvatar={handleEditAvatarClick}
        />
        <Footer />
      </main>

      <PopupWithForm
        name="change-avatar"
        isOpen={isEditAvatarPopupOpen}
        onClose={closePopup}
        closePopup={closeAllPopups}
        title="Обновить Аватар"
        buttonText="Сохранить"
      >
        <div className="form__input-container">
          <input
            name="avatar"
            type="url"
            className="form__textinput form__textinput_type_change-avatar"
            placeholder="Ссылка на Аватар"
            required
          />
          <span className="form__error" id="avatar-error"></span>
        </div>
      </PopupWithForm>

      <PopupWithForm
        name="edit"
        isOpen={isEditProfilePopupOpen}
        onClose={closePopup}
        closePopup={closeAllPopups}
        title="Редактировать профиль"
        buttonText="Сохранить"
      >
        <div className="form__input-container">
          <input
            name="fullName"
            type="text"
            className="form__textinput form__textinput_type_edit-full-name"
            required
            minLength="2"
            maxLength="40"
          />
          <span className="form__error" id="fullName-error"></span>
        </div>
        <div className="form__input-container">
          <input
            name="description"
            type="text"
            className="form__textinput form__textinput_type_edit-description"
            required
            minLength="2"
            maxLength="200"
          />
          <span className="form__error" id="description-error"></span>
        </div>
      </PopupWithForm>

      <PopupWithForm
        name="adding"
        isOpen={isAddPlacePopupOpen}
        onClose={closePopup}
        closePopup={closeAllPopups}
        title="Новое место"
        buttonText="Добавить"
      >
        <div className="form__input-container">
          <input
            name="name"
            type="text"
            className="form__textinput form__textinput_type_adding-name"
            placeholder="Название"
            required
            minLength="2"
            maxLength="30"
          />
          <span className="form__error" id="name-error"></span>
        </div>
        <div className="form__input-container">
          <input
            name="link-address"
            type="url"
            className="form__textinput form__textinput_type_adding-link-address"
            placeholder="Ссылка на картинку"
            required
          />
          <span className="form__error" id="link-address-error"></span>
        </div>
      </PopupWithForm>

      <section className="form form_type_foto-viewer">
        <figure className="form__container form__container_type_foto-viewer">
          <button
            type="button"
            className="form__close-button form__close-button_type_foto-viewer-close-button"
          ></button>
          <img className="form__foto-viewer-img" />
          <figcaption className="form__foto-viewer-description"></figcaption>
        </figure>
      </section>
      <template id="gallery-item">
        <li className="gallery-item">
          <button type="button" className="gallery-item__trash-button"></button>
          <img className="gallery-item__image" />
          <div className="gallery-item__content">
            <h2 className="gallery-item__title"></h2>
            <div className="gallery-item__like-container">
              <button
                type="button"
                className="gallery-item__heart-button"
              ></button>
              <p className="gallery-item__like-counter"></p>
            </div>
          </div>
        </li>
      </template>
    </div>
  );
}

export default App;
