function Card({card, onClickCard}) {

  function handleClick() {
    onClickCard(card);
  }

  return (
    <li className="gallery-item">
              <button type="button" className="gallery-item__trash-button"></button>
              <img onClick={handleClick}  src={card.link} alt={card.name} className="gallery-item__image" />
              <div className="gallery-item__content">
                <h2 className="gallery-item__title">{card.name}</h2>
                <div className="gallery-item__like-container">
                  <button
                    type="button"
                    className="gallery-item__heart-button"
                  ></button>
                  <p className="gallery-item__like-counter">{card.likes.length}</p>
                </div>
              </div>
            </li>
  )
}

export default Card;