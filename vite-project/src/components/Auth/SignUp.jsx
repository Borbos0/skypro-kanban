import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { paths } from "../../lib/const";
import { postRegister } from "../../lib/api";
import * as U from "./SignUp.Styled";
import { useUserContext } from "../../contexts/hooks/useUser";

function SignUp() {
  const { userLogin } = useUserContext();
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const onClickRegister = async (e) => {
    e.preventDefault();
    try {
      await postRegister(name, login, password).then((responseData) => {
        userLogin(responseData.user);
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <U.Wrapper>
      <U.ContainerSignup>
        <U.Modal>
          <U.ModalBlock>
            <U.ModalTtl>
              <h2>Регистрация</h2>
            </U.ModalTtl>
            <U.ModalFormLogin id="formLogUp" action="#">
              <U.FirstName
                className="first-name"
                type="text"
                name="first-name"
                id="first-name"
                placeholder="Имя"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <U.Login
                className="login"
                type="text"
                name="login"
                id="loginReg"
                placeholder="Эл. почта"
                value={login}
                onChange={(e) => setLogin(e.target.value)}
              />
              <U.PasswordFirst
                className="password-first"
                type="password"
                name="password"
                id="passwordFirst"
                placeholder="Пароль"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <U.ModalBtntnSignupEnt
                id="SignUpEnter"
                onClick={onClickRegister}
                type="button"
              >
                Зарегистрироваться{" "}
              </U.ModalBtntnSignupEnt>
              <div className="modal__form-group">
                <p>
                  Уже есть аккаунт? <Link to={paths.LOGIN}>Войдите здесь</Link>
                </p>
              </div>
            </U.ModalFormLogin>
          </U.ModalBlock>
        </U.Modal>
      </U.ContainerSignup>
    </U.Wrapper>
  );
}

export default SignUp;
