import React, { useState } from "react";
import { Link } from "react-router-dom";
import { paths } from "../../lib/const";
import { postRegister } from "../../lib/api";

const SignUp = (userLogin) => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const onClickRegister = async () => {
    await postRegister(name, login, password).then((responseData) => {
      userLogin(responseData.user.token);
    });
  };

  return (
    <div className="wrapper">
      <div className="container-signup">
        <div className="modal">
          <div className="modal__block">
            <div className="modal__ttl">
              <h2>Регистрация</h2>
            </div>
            <form className="modal__form-login" id="formLogUp" action="#">
              <input
                className="modal__input first-name"
                type="text"
                name="first-name"
                id="first-name"
                placeholder="Имя"
                onChange={(e) => setName(e.target.value)}
              />
              <input
                className="modal__input login"
                type="text"
                name="login"
                id="loginReg"
                placeholder="Эл. почта"
                onChange={(e) => setLogin(e.target.value)}
              />
              <input
                className="modal__input password-first"
                type="password"
                name="password"
                id="passwordFirst"
                placeholder="Пароль"
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                className="modal__btn-signup-ent _hover01"
                id="SignUpEnter"
                onClick={onClickRegister}
              >
                <Link to={paths.MAIN}>Зарегистрироваться</Link>{" "}
              </button>
              <div className="modal__form-group">
                <p>
                  Уже есть аккаунт? <Link to={paths.LOGIN}>Войдите здесь</Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
