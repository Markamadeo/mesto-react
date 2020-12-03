function PopupWithForm(props) {
  return (
    <section
      className={
        props.isOpen && props.onClose
          ? `form form_type_${props.name} form_status_active`
          : `form form_type_${props.name}`
      }
    >
      <form
        className="form__container form__container_type_submit-form"
        name={`${props.name}Popup`}
        noValidate
      >
        <button
          onClick={props.closePopup}
          type="button"
          className="form__close-button"
        ></button>
        <h2 className="form__title">{props.title}</h2>
        {props.children}
        <button
          name={`${props.name}Submit`}
          type="submit"
          className="form__submit-button"
        >
          {props.buttonText}
        </button>
      </form>
    </section>
  );
}

export default PopupWithForm;
