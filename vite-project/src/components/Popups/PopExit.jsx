import { Link } from "react-router-dom";
import { paths } from "../../lib/const";
import { useUserContext } from "../../contexts/hooks/useUser";
import * as E from "./PopBrowse.styled";

export default function PopExit() {
  const { logout } = useUserContext();
  return (
    <E.PopExit id="popExit">
      <E.PopExitContainer>
        <E.PopExitBlock>
          <E.PopExitTtl>
            <h2>Выйти из аккаунта?</h2>
          </E.PopExitTtl>
          <form className="pop-exit__form" id="formExit" action="#">
            <E.PopExitFormGroup>
              <E.PopExitExitYes id="exitYes" onClick={logout}>
                <Link to={paths.LOGIN}>Да, выйти</Link>{" "}
              </E.PopExitExitYes>
              <E.PopExitExitNo id="exitNo">
                <Link to={paths.MAIN}>Нет, остаться</Link>{" "}
              </E.PopExitExitNo>
            </E.PopExitFormGroup>
          </form>
        </E.PopExitBlock>
      </E.PopExitContainer>
    </E.PopExit>
  );
}
