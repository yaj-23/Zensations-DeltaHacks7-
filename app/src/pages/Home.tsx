import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./Home.css";
import lotus from "../logos/lotus.svg";
import icon from "../logos/frameIcon.svg";
import getStartedBtn from "../logos/getStarted_Btn.svg";
import learnmoreBtn from "../logos/learnMore_Btn.svg";
import { useHistory } from "react-router";

const Home: React.FC = () => {
  const history = useHistory();

  return (
    <IonPage>
      <div className="mainScreen">
        <div className="icon">
          <img className="green-background" src={icon} />
        </div>

        <div className="title">
          <div className="app-title">Zensations</div>
          <div className="app-slogan">release your emotions</div>
        </div>
        <img src={lotus} alt="lotus" />
        <div className="btns">
          <img
            className="button-background"
            src={getStartedBtn}
            alt="getStartedBtn"
            onClick={() => history.replace("/home/Question1")}
          />
          <img
            className="button-background"
            src={learnmoreBtn}
            alt="learnmoreBtn"
            onClick={() => console.log("MOVE ME TO DEVPOST PAGE")}
          />
        </div>
      </div>
    </IonPage>
  );
};

export default Home;
