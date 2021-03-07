import { IonPage } from "@ionic/react";
import { useHistory } from "react-router";

import icon from "../logos/frameIcon.svg";
import lotus from "../logos/lotus.svg";
import playIcon from "../logos/playIcon.svg";
import card1 from "../logos/card1.svg";
import card2 from "../logos/card2.svg";
import { CountdownCircleTimer } from "react-countdown-circle-timer";

import "./InfoPage.css";
import { Exercise, useExercises } from "../components/ExerciseProvider";
import { useEffect } from "react";

const InfoPage: React.FC = () => {
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

            <div className="info-heading">next steps</div>

            
            <div className="card-rows">
                <a href="https://www.heartandstroke.ca/">
                    <img className="info-card" src={card1} alt='card1'/>
                </a>
                <a href="https://www.heartandstroke.ca/stroke/signs-of-stroke/fast-signs-of-stroke-are-there-other-signs">
                    <img className="info-card" src={card2} alt='card2'/>
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
