import { useState } from "react";
import * as h from "./Header.styled";
import { Link } from "react-router-dom";
import { paths } from "../../lib/const";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const showProfile = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <div>
      <h.Header>
        <h.Container>
          <h.HeaderBlock>
            <h.HeaderLogo>
              <Link to={paths.MAIN}>
                <img src="/logo.png" alt="logo" />
              </Link>
            </h.HeaderLogo>
            <h.HeaderNav>
              {/* #popNewCard */}
              <h.HeaderButton id="btnMainNew">
                <Link to={paths.NEWCARD}>Создать новую задачу</Link>
              </h.HeaderButton>
              <h.HeaderUser href="#user-set-target" onClick={showProfile}>
                {JSON.parse(localStorage.getItem("name"))}
              </h.HeaderUser>
              {isOpen && (
                <h.HeaderPopUserSet id="user-set-target">
                  {/* <!-- <a href="">x</a> --> */}
                  <h.PopUserSetName>
                    {JSON.parse(localStorage.getItem("name"))}
                  </h.PopUserSetName>
                  <h.PopUserSetMail>
                    {JSON.parse(localStorage.getItem("login"))}
                  </h.PopUserSetMail>
                  <h.PopUserSetTheme>
                    <p>Темная тема</p>
                    <input type="checkbox" name="checkbox" />
                  </h.PopUserSetTheme>
                  <button type="button" className="_hover03">
                    <Link to={paths.EXIT}>Выйти</Link>
                  </button>
                </h.HeaderPopUserSet>
              )}
            </h.HeaderNav>
          </h.HeaderBlock>
        </h.Container>
      </h.Header>
    </div>
  );
}
export default Header;
