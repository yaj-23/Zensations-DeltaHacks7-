import { IonPage } from "@ionic/react";
import { useHistory } from "react-router";

import icon from "../logos/frameIcon.svg";
import lotus from "../logos/lotus.svg";
import bridge from "../logos/bridge1.svg";
import { CountdownCircleTimer } from "react-countdown-circle-timer";

import "./Exercise.css";

const Exercise: React.FC = () => {
  const history = useHistory();

  const renderTime = ({ remainingTime }: { remainingTime: number }) => {
    if (remainingTime === 0) {
      return <div className="timer">Too late...</div>;
    }

    return (
      <div className="timer">
        <div className="value">{remainingTime}</div>
      </div>
    );
  };

  return (
    <IonPage>
      <div className="mainScreen" id="Exercise">
        <div className="header">
          <div className="appicon">
            <img className="green-background" src={icon} />
          </div>

          <div className="title-header">
            <div className="app-title-header">Zensations</div>
            <div className="app-slogan-header">release your emotions</div>
          </div>
        </div>

        <div className="infoo">
          <div className="card-auto">
            <h4 className="step-desc">1. bridge pose 30s</h4>
          </div>
          <img className="pic" src={bridge} alt="bridge" />
          <div className="level up">Level: Insane</div>
          <div className="benefits up">
            <div>This is one benefit</div>
            <div>This is another befnefit that is so long </div>
            <div>This is last befnefit</div>
          </div>
        </div>

        <div className="timer-wrapper">
          <CountdownCircleTimer
            isPlaying
            duration={60}
            colors={"#A30000"}
            onComplete={() => [true, 1000]}
          >
            {renderTime}
          </CountdownCircleTimer>
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

export default Exercise;
