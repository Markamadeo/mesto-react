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
  const [closePopup, setClosePopup] = useState();
  const [selectedCard, setSelectedCard] = useState({
    clicked: false,
    card: { link: "#", name: "" },
  });

  function handleCardClick(card) {
    setClosePopup(true);
    setSelectedCard({
      clicked: true,
      card,
    });
  }
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
          onClickCard={handleCardClick}
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

      <ImagePopup
        onClosePopup={closeAllPopups}
        onClose={closePopup}
        card={selectedCard}
      ></ImagePopup>
    </div>
  );
}

export default App;
