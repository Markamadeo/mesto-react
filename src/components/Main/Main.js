import { useState, useEffect } from "react";
import api from "../../utils/Api";
import Card from "../Card/Card";

function Main(props) {
  const [userName, setUserName] = useState("");
  const [userDescription, setUserDescription] = useState("");
  const [userAvatar, setUserAvatar] = useState("");
  const [cards, setCards] = useState([]);

  useEffect(() => {
    api.getUserInfo().then((data) => {
      setUserName(data.name);
      setUserDescription(data.about);
      setUserAvatar(data.avatar);
    });
  }, [userName, userDescription, userAvatar]);

  useEffect(() => {
    api.initialCards().then((dataCards) => {
      setCards(dataCards);
    });
  }, []);

  return (
    <div className="page__container">
      <section className="profile profile_shift_down">
        <div className="profile__avatar-container">
          <img src={userAvatar} alt="Аватар" className="profile__image" />
          <button
            onClick={props.onEditAvatar}
            className="profile__avatar-button"
          ></button>
        </div>
        <div className="profile__info-container">
          <div className="profile__info-container-item">
            <h1 className="profile__full-name">{userName}</h1>
            <button
              onClick={props.onEditProfile}
              type="button"
              className="profile__edit-botton"
            ></button>
          </div>
          <div className="profile__info-container-item">
            <p className="profile__description">{userDescription}</p>
          </div>
        </div>
        <button
          onClick={props.onAddPlace}
          type="button"
          className="profile__add-botton"
        ></button>
      </section>
      <ul className="gallery gallery_shift_down">
        {cards.map((card, index) => {
          return (
            <Card
              key={index}
              card={card}
            />
          );
        })}
      </ul>
    </div>
  );
}

export default Main;
