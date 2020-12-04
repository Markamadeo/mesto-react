import { useState } from "react";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import ImagePopup from "./ImagePopup/ImagePopup";
import Main from "./Main/Main";
import PopupWithForm from "./PopupWithForm/PopupWithForm";

function App() {
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isPhotoViewerOpen, setIsPhotoViewer] = useState(false);
  const [selectedCard, setSelectedCard] = useState({
    link: "#",
    name: "",
  });

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }
  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }
  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function handleCardPhotoClick(card) {
    setIsPhotoViewer(true);
    setSelectedCard(card);
  }

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsPhotoViewer(false);
    setSelectedCard({ clicked: false, card: { link: "#", name: "" } });
  }
  return (
    <div className="App">
      <main className="page">
        <Header />
        <Main
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onEditAvatar={handleEditAvatarClick}
          onClickCard={handleCardPhotoClick}
        />
        <Footer />
      </main>

      <PopupWithForm
        name="change-avatar"
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
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
        onClose={closeAllPopups}
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
        onClose={closeAllPopups}
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

      <ImagePopup
        isOpen={isPhotoViewerOpen}
        onClose={closeAllPopups}
        card={selectedCard}
      ></ImagePopup>
    </div>
  );
}

export default App;
