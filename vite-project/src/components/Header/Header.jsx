import { useState } from "react";
import * as h from "./Header.styled";
import { Link } from "react-router-dom";
import { paths } from "../../lib/const";
import { useUserContext } from "../../contexts/hooks/useUser";

function Header() {
  const { user } = useUserContext();
  const [isOpen, setIsOpen] = useState(false);
  const showProfile = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <div>
      <h.Header>
        <div className="container">
          <h.HeaderBlock>
            <div className="header__logo _show _light">
              <Link to={paths.MAIN}>
                <img src="public/logo.png" alt="logo" />
              </Link>
            </div>
            <div className="header__logo _dark">
              <Link to={paths.MAIN}>
                <img src="public/logo_dark.png" alt="logo" />
              </Link>
            </div>
            <h.HeaderNav>
              {/* #popNewCard */}
              <h.HeaderButton id="btnMainNew">
                <Link to={paths.NEWCARD}>Создать новую задачу</Link>
              </h.HeaderButton>
              <a
                href="#user-set-target"
                className="header__user _hover02"
                onClick={showProfile}
              >
                {user.name}
              </a>
              {isOpen && (
                <div
                  className="header__pop-user-set pop-user-set"
                  id="user-set-target"
                >
                  {/* <!-- <a href="">x</a> --> */}
                  <p className="pop-user-set__name">{user.name}</p>
                  <p className="pop-user-set__mail">{user.login}</p>
                  <div className="pop-user-set__theme">
                    <p>Темная тема</p>
                    <input
                      type="checkbox"
                      className="checkbox"
                      name="checkbox"
                    />
                  </div>
                  <button type="button" className="_hover03">
                    <Link to={paths.EXIT}>Выйти</Link>
                  </button>
                </div>
              )}
            </h.HeaderNav>
          </h.HeaderBlock>
        </div>
      </h.Header>
    </div>
  );
}
export default Header;
