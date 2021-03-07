import { IonPage } from "@ionic/react";
import { useHistory } from "react-router";

import icon from "../logos/frameIcon.svg";
import lotus from "../logos/lotus.svg";
import playIcon from "../logos/playIcon.svg";
import { CountdownCircleTimer } from "react-countdown-circle-timer";

import "./ExercisePage.css";
import { Exercise, useExercises } from "../components/ExerciseProvider";
import { useEffect } from "react";

const ExercisePage: React.FC = () => {
  const history = useHistory();
  const { exercises, getExercises, setExercises } = useExercises();

  useEffect(() => {
    (async () => {
      await getExercises();
    })()
  }, []);

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

        <div className="saying tailored-workout">here is your tailored workout</div>

        <div className="steps">
          {(exercises.length ? exercises : []).map((exercise: Exercise, index: number) => (
            <div key={index} className={index % 2 ? "card-right" : "card-left"}>
              <div className="step-desc">{index + 1}. {exercise.name.trim().slice(0, 28)}{exercise.name.length > 28 && "..."}</div><div className="step-desc">[30s]</div>
            </div>
          ))}
          <img
            className="card-right-right"
            src={playIcon}
            alt="playIcon"
            onClick={() => history.replace("/home/Exercise")}
          />
        </div>

        <img
          className="lotus"
          src={lotus}
          alt="lotus"
          onClick={() => {
            setExercises([]);
            history.replace("/home");
          }}
        />
      </div>
    </IonPage>
  );
};

export default ExercisePage;
