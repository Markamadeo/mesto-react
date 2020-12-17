import { useState, useContext, useEffect } from "react";
import PopupWithForm from "../PopupWithForm/PopupWithForm";
import CurrentUserContext from "../../contexts/CurrentUserContext";

function EditProfilePopup({ isOpen, onClose, onUpdateUser }) {
  const currentUser = useContext(CurrentUserContext);
  const [name, setName] = useState(currentUser.name);
  const [description, setDescription] = useState(currentUser.about);

  useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser]);

  function handleSubmit(e) {
    e.preventDefault();
    onUpdateUser({
      name: name,
      about: description
    });
  }

  return (
    <PopupWithForm
      onSubmit={handleSubmit}
      name="edit"
      isOpen={isOpen}
      onClose={onClose}
      title="Редактировать профиль"
      buttonText="Сохранить"
    >
      <div className="form__input-container">
        <input
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
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
          value={description}
          onChange={(e) => {
            setDescription(e.target.value);
          }}
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
  );
}

export default EditProfilePopup;
