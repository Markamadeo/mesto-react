function Main() {
  return (
    <div className="page__container">
      <section className="profile profile_shift_down">
        <div className="profile__avatar-container">
          <img alt="Аватар" className="profile__image" />
          <button className="profile__avatar-button"></button>
        </div>
        <div className="profile__info-container">
          <div className="profile__info-container-item">
            <h1 className="profile__full-name"></h1>
            <button type="button" className="profile__edit-botton"></button>
          </div>
          <div className="profile__info-container-item">
            <p className="profile__description"></p>
          </div>
        </div>
        <button type="button" className="profile__add-botton"></button>
      </section>
      <ul className="gallery gallery_shift_down"></ul>
    </div>
  );
}

export default Main;
