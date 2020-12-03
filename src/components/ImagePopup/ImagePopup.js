function ImagePopup(props) {
  return (
    <section
      className={
        props.card.clicked && props.onClose
          ? `form form_type_foto-viewer form_status_active`
          : `form form_type_foto-viewer`
      }
    >
      <figure className="form__container form__container_type_foto-viewer">
        <button
          type="button"
          onClick={props.onClosePopup}
          className="form__close-button form__close-button_type_foto-viewer-close-button"
        ></button>
        <img
          src={props.card.card.link}
          alt={props.card.name}
          className="form__foto-viewer-img"
        />
        <figcaption className="form__foto-viewer-description">
          {props.card.name}
        </figcaption>
      </figure>
    </section>
  );
}

export default ImagePopup;
