import { useRef } from "react";
import PopupWithForm from "../PopupWithForm/PopupWithForm";

function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar }) {
  const avatarLink = useRef();

  function handleSubmit(e) {
    e.preventDefault();
    onUpdateAvatar(avatarLink.current.value);
  }

  return (
    <PopupWithForm
      onSubmit={handleSubmit}
      isOpen={isOpen}
      onClose={onClose}
      name="change-avatar"
      title="Обновить Аватар"
      buttonText="Сохранить"
    >
      <div className="form__input-container">
        <input
          ref={avatarLink}
          name="avatar"
          type="url"
          className="form__textinput form__textinput_type_change-avatar"
          placeholder="Ссылка на Аватар"
          required
        />
        <span className="form__error" id="avatar-error"></span>
      </div>
    </PopupWithForm>
  );
}

export default EditAvatarPopup;
