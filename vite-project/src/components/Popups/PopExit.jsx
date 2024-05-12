import { Link } from "react-router-dom";
import { paths } from "../../lib/const";
import { useUserContext } from "../../contexts/hooks/useUser";

export default function PopExit() {
  const { logout } = useUserContext();
  return (
    <div className="pop-exit" id="popExit">
      <div className="pop-exit__container">
        <div className="pop-exit__block">
          <div className="pop-exit__ttl">
            <h2>Выйти из аккаунта?</h2>
          </div>
          <form className="pop-exit__form" id="formExit" action="#">
            <div className="pop-exit__form-group">
              <button
                className="pop-exit__exit-yes _hover01"
                id="exitYes"
                onClick={logout}
              >
                <Link to={paths.LOGIN}>Да, выйти</Link>{" "}
              </button>
              <button className="pop-exit__exit-no _hover03" id="exitNo">
                <Link to={paths.MAIN}>Нет, остаться</Link>{" "}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
