import { IonPage } from "@ionic/react";
import { useHistory } from "react-router";

import icon from "../logos/frameIcon.svg";
import lotus from "../logos/lotus.svg";
import bridge from "../logos/bridge1.svg";
import { CountdownCircleTimer } from "react-countdown-circle-timer";

import "./Exercise.css";
import { useExercises } from "../components/ExerciseProvider";
import playIcon from "../logos/playIcon.svg";
import { useState } from "react";

const Exercise: React.FC = () => {
  const history = useHistory();
  const { exercises } = useExercises();
  const [currentIndex, setCurrentIndex] = useState(0);

  const renderTime = ({ remainingTime }: { remainingTime: number }) => {
    if (remainingTime === 0 || currentIndex > 4) {
      return (
        <div className="timer">
          <img
            className="card-right-right finish-button"
            src={playIcon}
            alt="playIcon"
            onClick={() => history.replace("/home/InfoPage")}
          />
        </div>
      );
    }

    return (
      <div className="timer">
        <div className="text">Remaining</div>
        <div className="value">{remainingTime}</div>
        <div className="text">seconds</div>
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

        {exercises.length && (
          <div className="infoo">
            <div className="card-left">
              <div className="step-desc">
                {currentIndex + 1}.{" "}
                {exercises[currentIndex].name.trim().slice(0, 28)}
                {exercises[currentIndex].name.length > 28 && "..."}
              </div>
              <div className="step-desc">[30s]</div>
            </div>
            <img
              className="pic"
              src={exercises[currentIndex].img}
              alt="bridge"
            />
            <div className="level up">
              Level: {exercises[currentIndex].level}
            </div>
            <div className="benefits up">
              {exercises[currentIndex].benefits.map((benefit: string) => (
                <div key={benefit}>&#8226; {benefit}</div>
              ))}
            </div>
          </div>
        )}

        <div className="timer-wrapper">
          <CountdownCircleTimer
            isPlaying
            duration={5}
            colors={[
              ["#004777", 0.33],
              ["#F7B801", 0.33],
              ["#A30000", 0.33],
            ]}
            onComplete={() => {
              if (currentIndex < 4) {
                setCurrentIndex(currentIndex + 1);
              }
              return [currentIndex < 4, 10];
            }}
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
