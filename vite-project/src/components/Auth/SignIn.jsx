import { Link } from "react-router-dom";
import { paths } from "../../lib/const";
import { useState } from "react";
import { postLogin } from "../../lib/api";

function SignIn({ userLogin }) {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const onClickLogin = async () => {
    await postLogin(login, password).then((responseData) => {
      userLogin(responseData.user);
    });
  };

  return (
    <div className="wrapper">
      <div className="container-signin">
        <div className="modal">
          <div className="modal__block">
            <div className="modal__ttl">
              <h2>Вход</h2>
            </div>
            <form className="modal__form-login" id="formLogIn" action="#">
              <input
                className="modal__input"
                type="text"
                name="login"
                id="formlogin"
                placeholder="Эл. почта"
                value={login}
                onChange={(e) => setLogin(e.target.value)}
              />
              <input
                className="modal__input"
                type="password"
                name="password"
                id="formpassword"
                placeholder="Пароль"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                className="modal__btn-enter _hover01"
                id="btnEnter"
                onClick={onClickLogin}
              >
                Войти
              </button>
              <div className="modal__form-group">
                <p>Нужно зарегистрироваться?</p>
                <Link to={paths.REGISTER}>Регистрируйтесь здесь</Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
