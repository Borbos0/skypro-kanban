import { Link } from "react-router-dom";
import { paths } from "../../lib/const";
import { useState } from "react";
import { postLogin } from "../../lib/api";
import * as I from "./SignInStyled";
import { useUserContext } from "../../contexts/hooks/useUser";

function SignIn() {
  const { userLogin } = useUserContext();
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const onClickLogin = async (e) => {
    e.preventDefault();
    try {
      await postLogin(login, password).then((responseData) => {
        userLogin(responseData.user);
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <I.Wrapper>
      <I.ContainerSignin>
        <I.Modal>
          <I.ModalBlock>
            <I.ModalTtl>
              <h2>Вход</h2>
            </I.ModalTtl>
            <I.ModalFormLogin id="formLogIn" action="#">
              <input
                type="text"
                name="login"
                id="formlogin"
                placeholder="Эл. почта"
                value={login}
                onChange={(e) => setLogin(e.target.value)}
              />
              <input
                type="password"
                name="password"
                id="formpassword"
                placeholder="Пароль"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <I.ModalBtnEnter
                className="modal__btn-enter _hover01"
                id="btnEnter"
                onClick={onClickLogin}
              >
                Войти
              </I.ModalBtnEnter>
              <div className="modal__form-group">
                <p>Нужно зарегистрироваться?</p>
                <Link to={paths.REGISTER}>Регистрируйтесь здесь</Link>
              </div>
            </I.ModalFormLogin>
          </I.ModalBlock>
        </I.Modal>
      </I.ContainerSignin>
    </I.Wrapper>
  );
}

export default SignIn;
