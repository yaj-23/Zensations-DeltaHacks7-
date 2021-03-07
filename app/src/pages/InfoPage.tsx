import { IonPage } from "@ionic/react";
import { useHistory } from "react-router";
import { useExercises } from "../components/ExerciseProvider";
import card1 from "../logos/card1.svg";
import card2 from "../logos/card2.svg";
import icon from "../logos/frameIcon.svg";
import lotus from "../logos/lotus.svg";
import "./InfoPage.css";

const InfoPage: React.FC = () => {
  const history = useHistory();
  const { exercises } = useExercises();

  return (
    <IonPage>
      <div className="mainScreen">
        <div className="header">
          <div className="appicon">
            <img className="green-background" src={icon} />
          </div>

          <div className="title-header">
            <div className="app-title-header">Zensations</div>
            <div className="app-slogan-header">release your emotions</div>
          </div>
        </div>

        <div className="info-heading">next steps</div>
        {exercises && exercises.length ? (
          <div style={{ fontFamily: "Comic Neue" }}>
            Congrats on finishing the exercises!
          </div>
        ) : (
          <></>
        )}

        <div className="card-rows">
          <a href="https://www.heartandstroke.ca/" target="_blank">
            <img className="info-card" src={card1} alt="card1" />
          </a>
          <a
            target="_blank"
            href="https://www.heartandstroke.ca/stroke/signs-of-stroke/fast-signs-of-stroke-are-there-other-signs"
          >
            <img className="info-card" src={card2} alt="card2" />
          </a>
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

export default InfoPage;
