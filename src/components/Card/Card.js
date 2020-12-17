import CurrentUserContext from "../../contexts/CurrentUserContext";
import {useContext} from "react";

function Card({ card, onClickCard, onCardLike }) {
  const currentUser = useContext(CurrentUserContext);
  const isLiked = card.likes.some(i => i._id === currentUser._id);
  const cardLikeButtonClassName = `gallery-item__heart-button ${isLiked && 'gallery-item__heart-button_type_active'}`;
  const isOwn = card.owner._id === currentUser._id;
  function handleClick() {
    onClickCard(card);
  }
  function handleLikeClick() {
    onCardLike(card);
  }

  return (
    <li className="gallery-item">
      {isOwn && (<button type="button" className="gallery-item__trash-button"></button>)}
      <img
        onClick={handleClick}
        src={card.link}
        alt={card.name}
        className="gallery-item__image"
      />
      <div className="gallery-item__content">
        <h2 className="gallery-item__title">{card.name}</h2>
        <div className="gallery-item__like-container">
          <button onClick={handleLikeClick} type="button" className={cardLikeButtonClassName}></button>
          <p className="gallery-item__like-counter">{card.likes.length}</p>
        </div>
      </div>
    </li>
  );
}

export default Card;
