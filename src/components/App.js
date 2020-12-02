import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import Main from "./Main/Main";

function App() {
  return (
    <div className="App">
      <main className="page">
        <Header />
        <Main />
        <Footer />
      </main>
      <section className="form form_type_change-avatar">
        <form
          className="form__container form__container_type_submit-form form__container_type_change-avatar"
          name="avatarForm"
          noValidate
        >
          <button
            type="button"
            className="form__close-button form__close-button_type_change-avatar"
          ></button>
          <h2 className="form__title form__title_type_change-avatar">
            Обновить Аватар
          </h2>
          <div className="form__input-container">
            <input
              name="avatar"
              type="url"
              className="form__textinput form__textinput_type_change-avatar"
              placeholder="Ссылка на Аватар"
              required
            />
            <span className="form__error" id="avatar-error"></span>
          </div>
          <button
            name="avatarSubmit"
            type="submit"
            className="form__submit-button form__submit-button_type_change-avatar"
          >
            Сохранить
          </button>
        </form>
      </section>

      <section className="form form_type_delete-card">
        <form
          className="form__container form__container_type_submit-form form__container_type_delete"
          name="deleteForm"
          noValidate
        >
          <button
            type="button"
            className="form__close-button form__close-button_type_delete"
          ></button>
          <h2 className="form__title form__title_type_delete">Вы уверены?</h2>
          <button
            name="deleteSubmit"
            type="submit"
            className="form__submit-button form__submit-button_type_delete-button"
          >
            Да
          </button>
        </form>
      </section>

      <section className="form form_type_edit">
        <form
          className="form__container form__container_type_submit-form form__container_type_edit"
          name="editForm"
          noValidate
        >
          <button
            type="button"
            className="form__close-button form__close-button_type_edit"
          ></button>
          <h2 className="form__title form__title_type_edit">
            Редактировать профиль
          </h2>
          <div className="form__input-container">
            <input
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
              name="description"
              type="text"
              className="form__textinput form__textinput_type_edit-description"
              required
              minLength="2"
              maxLength="200"
            />
            <span className="form__error" id="description-error"></span>
          </div>
          <button
            name="editSubmit"
            type="submit"
            className="form__submit-button form__submit-button_type_edit-save-button"
          >
            Сохранить
          </button>
        </form>
      </section>

      <section className="form form_type_adding">
        <form
          className="form__container form__container_type_submit-form form__container_type_adding"
          name="addingForm"
          noValidate
        >
          <button
            type="button"
            className="form__close-button form__close-button_type_adding"
          ></button>
          <h2 className="form__title form__title_type_adding">Новое место</h2>
          <div className="form__input-container">
            <input
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
              name="link-address"
              type="url"
              className="form__textinput form__textinput_type_adding-link-address"
              placeholder="Ссылка на картинку"
              required
            />
            <span className="form__error" id="link-address-error"></span>
          </div>
          <button
            name="addingSubmit"
            type="submit"
            className="form__submit-button form__submit-button_type_adding-add-button"
          >
            Добавить
          </button>
        </form>
      </section>

      <section className="form form_type_foto-viewer">
        <figure className="form__container form__container_type_foto-viewer">
          <button
            type="button"
            className="form__close-button form__close-button_type_foto-viewer-close-button"
          ></button>
          <img className="form__foto-viewer-img" />
          <figcaption className="form__foto-viewer-description"></figcaption>
        </figure>
      </section>
      <template id="gallery-item">
        <li className="gallery-item">
          <button type="button" className="gallery-item__trash-button"></button>
          <img className="gallery-item__image" />
          <div className="gallery-item__content">
            <h2 className="gallery-item__title"></h2>
            <div className="gallery-item__like-container">
              <button
                type="button"
                className="gallery-item__heart-button"
              ></button>
              <p className="gallery-item__like-counter"></p>
            </div>
          </div>
        </li>
      </template>
    </div>
  );
}

export default App;
