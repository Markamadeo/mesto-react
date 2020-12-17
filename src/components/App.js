import { useState, useEffect } from "react";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import ImagePopup from "./ImagePopup/ImagePopup";
import Main from "./Main/Main";
import api from "../utils/api";
import CurrentUserContext from "../contexts/CurrentUserContext";
import EditProfilePopup from "../components/EditProfilePopup/EditProfilePopup";
import EditAvatarPopup from "../components/EditAvatarPopup/EditAvatarPopup";
import AddPlacePopup from "../components/AddPlacePopup/AddPlacePopup";

function App() {
  const [cards, setCards] = useState([]);

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
    api.initialCards().then((dataCards) => {
      setCards(dataCards);
    });
  }, []);

  useEffect(() => {
    api.getUserInfo().then((data) => {
      setCurrentUser(data);
    });
  }, []);

  function handleCardLike(card) {
    const isLiked = card.likes.some((i) => i._id === currentUser._id);
    api.changeLikeCardStatus(card._id, !isLiked).then((newCard) => {
      const newCards = cards.map((c) => (c._id === card._id ? newCard : c));
      setCards(newCards);
    });
  }

  function handleCardDelete(card) {
    api.deleteCard(card._id).then((newCard) => {
      const newCards = cards.filter((c) => (c._id === card._id ? newCard : c));
      setCards(newCards);
    });
  }

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
      setCurrentUser(data);
    });
    closeAllPopups();
  }

  function handleAddPlaceSubmit(data) {
    api.sendNewCard(data).then((newCard) => {
      setCards([newCard, ...cards]);
    });
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
            cards={cards}
            onCardLike={handleCardLike}
            onCardDelete={handleCardDelete}
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

        <AddPlacePopup
          onAddPlace={handleAddPlaceSubmit}
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
        />

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
