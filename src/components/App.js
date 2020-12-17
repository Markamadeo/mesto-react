import { useState, useEffect } from "react";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import ImagePopup from "./ImagePopup/ImagePopup";
import Main from "./Main/Main";
import PopupWithForm from "./PopupWithForm/PopupWithForm";
import api from "../utils/api";
import CurrentUserContext from "../contexts/CurrentUserContext";
import EditProfilePopup from "../components/EditProfilePopup/EditProfilePopup";
import EditAvatarPopup from "../components/EditAvatarPopup/EditAvatarPopup";

function App() {
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isPhotoViewerOpen, setIsPhotoViewer] = useState(false);
  const [selectedCard, setSelectedCard] = useState({
    link: "#",
    name: "",
  });
  const [currentUser, setCurrentUser] = useState({
    name: "",
    about: "",
  });

  useEffect(() => {
    api.getUserInfo().then((data) => {
      setCurrentUser(data);
    });
  }, []);

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

  function handleUpdateUser(userInfo) {
    api.sendProfileInfo(userInfo).then((data) => {
      setCurrentUser(data);
    });
    closeAllPopups();
  }

  function handleUpdateAvatar(link) {
    api.changeAvatar(link).then((data) => {
      console.log(data);
      setCurrentUser(data);
    });
    closeAllPopups();
  }

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsPhotoViewer(false);
    setSelectedCard({
      link: "#",
      name: "",
    });
  }
  return (
    <CurrentUserContext.Provider value={currentUser}>
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

        <EditProfilePopup
          onUpdateUser={handleUpdateUser}
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
        />

        <EditAvatarPopup
          onUpdateAvatar={handleUpdateAvatar}
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
        />

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
    </CurrentUserContext.Provider>
  );
}

export default App;
