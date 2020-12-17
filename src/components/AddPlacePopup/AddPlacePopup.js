import { useRef } from "react";
import PopupWithForm from "../PopupWithForm/PopupWithForm";

function AddPlacePopup({ isOpen, onClose, onAddPlace }) {
  const placeName = useRef();
  const placeLink = useRef();

  function handleSubmit(e) {
    e.preventDefault();
    onAddPlace({
      name: placeName.current.value,
      link: placeLink.current.value,
    });
    onClose();
  }

  return (
    <PopupWithForm
      name="adding"
      onSubmit={handleSubmit}
      isOpen={isOpen}
      onClose={onClose}
      title="Новое место"
      buttonText="Добавить"
    >
      <div className="form__input-container">
        <input
          ref={placeName}
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
          ref={placeLink}
          name="link-address"
          type="url"
          className="form__textinput form__textinput_type_adding-link-address"
          placeholder="Ссылка на картинку"
          required
        />
        <span className="form__error" id="link-address-error"></span>
      </div>
    </PopupWithForm>
  );
}

export default AddPlacePopup;
