import { IonPage } from "@ionic/react";
import { useHistory } from "react-router";
import { useQuiz } from "../components/QuizProvider";
import continueBtn from "../logos/continueBtn.svg";
import icon from "../logos/frameIcon.svg";
import lotus from "../logos/lotus.svg";
import "./ClientState.css";

const ClientState: React.FC = () => {
  const history = useHistory();
  const { getData } = useQuiz();

  return (
    <IonPage>
      <div className="mainScreen">
        <div className="header">
          <div className="appicon">
            <img className="green-background" src={icon} />
          </div>

          <div className="title-header">
            <div className="app-title-header">Zensation</div>
            <div className="app-slogan-header">release your emotions</div>
          </div>
        </div>

        <div className="dash-title">you are feeling :</div>

        <div className="dash-title">idk</div>

        <div className="dash-btns">
          <img
            className="dash-button-background"
            src={continueBtn}
            alt="continueBtn"
            onClick={() => getData()}
          />
        </div>

        <img
          className="lotus"
          src={lotus}
          alt="lotus"
          onClick={() => history.replace("/home")}
        />
      </div>
    </IonPage>
  );
};

export default ClientState;
