import Styled from "./index.module.css";
import cancel from "../../../assets/images/cancel.png";
import modalLogo from "../../../assets/images/modal_logo.png";
import Button from "../../ui/Button";
import { useReducer } from "react";

const initialState = {
  name: "",
  organization: "",
  post: "",
  email: "",
  phone: "",
  checkbox: false,
};

function reducer(state, input) {
  switch (input.type) {
    case "name":
      return { ...state, name: input.value };
    case "organization":
      return { ...state, organization: input.value };
    case "post":
      return { ...state, post: input.value };
    case "email":
      return { ...state, email: input.value };
    case "phone":
      return { ...state, phone: input.value };
    case "checkbox":
      return { ...state, checkbox: input.value };
    default:
      return { ...state };
  }
}
function Modal({ closeModal }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const showData = (e) => {
    e.preventDefault();
    console.log(state);
  };
  return (
    <>
      <div className={Styled["modal"]}>
        <div className={Styled["modal-content"]}>
          <div className={Styled["modal-content__close"]}>
            <img
              src={cancel}
              className={Styled["modal-content__close-img"]}
              onClick={closeModal}
            />
          </div>
          <img src={modalLogo} className={Styled["modal-content__logo"]} />
          <form className={Styled["modal-content__form"] + " modal-form"}>
            <input
              type="text"
              className={Styled["modal-form__name"]}
              id="name"
              placeholder="Имя Фамилия"
              onBlur={(e) => dispatch({ type: "name", value: e.target.value })}
            />
            <label
              htmlFor="name"
              className={Styled["modal-form__name-label"]}
            ></label>
            <input
              type="text"
              className={Styled["modal-form__organization"]}
              id="organization"
              placeholder="Название организации"
              onBlur={(e) =>
                dispatch({ type: "organization", value: e.target.value })
              }
            />
            <label
              htmlFor="organization"
              className={Styled["modal-form__organization-label"]}
            ></label>
            <input
              type="text"
              className={Styled["modal-form__post"]}
              id="post"
              placeholder="Должность"
              onBlur={(e) => dispatch({ type: "post", value: e.target.value })}
            />
            <label
              htmlFor="post"
              className={Styled["modal-form__post-label"]}
            ></label>
            <input
              type="text"
              className={Styled["modal-form__email"]}
              id="email"
              placeholder="Email"
              onBlur={(e) => dispatch({ type: "email", value: e.target.value })}
            />
            <label
              htmlFor="email"
              className={Styled["modal-form__email-label"]}
            ></label>
            <input
              type="text"
              className={Styled["modal-form__phone"]}
              id="phone"
              placeholder="Телефон"
              onBlur={(e) => dispatch({ type: "phone", value: e.target.value })}
            />
            <label
              htmlFor="phone"
              className={Styled["modal-form__phone-label"]}
            ></label>
            <div className={Styled["modal-form__conf"]}>
              <input
                type="checkbox"
                className={Styled["modal-form__checkbox"]}
                onBlur={(e) =>
                  dispatch({ type: "checkbox", value: e.target.checked })
                }
                id="checkbox"
              />
              <label
                htmlFor="checkbox"
                className={Styled["modal-form__conf-label"] + " conf-label"}
              >
                <span>
                  Я согласен на обработку моих
                  <a href="/" className={Styled["conf-label__link"]}>
                    {" "}
                    персональных данных
                  </a>
                </span>
              </label>
            </div>
            <Button
              name="Отправить"
              className="button-modal"
              onClick={showData}
            />
          </form>
        </div>
      </div>
    </>
  );
}

export default Modal;
