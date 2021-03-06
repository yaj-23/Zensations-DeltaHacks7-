import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import "./Home.css";
import lotus from "../logos/lotus.svg";
import icon from "../logos/frameIcon.svg";
import getStartedBtn from "../logos/getStarted_Btn.svg";
import learnmoreBtn from "../logos/learnMore_Btn.svg";

const Home: React.FC = () => {
  return (
    <IonPage>
      <div className="mainScreen">
        <div className="icon">
          <img className="green-background" src={icon} />
        </div>

        <div className="title">
          <div className="app-title">Zensation</div>
          <div className="app-slogan">release your emotions</div>
        </div>
        <img src={lotus} alt="lotus" />
        <div className="btns">
          <img
            className="button-background"
            src={getStartedBtn}
            alt="getStartedBtn"
            onClick={() => console.log("MOVE ME TO NEXT PAGE")}
          />
          <img
            className="button-background"
            src={learnmoreBtn}
            alt="learnmoreBtn"
            onClick={() => console.log("MOVE ME TO NEXT PAGE")}
          />
        </div>
      </div>
    </IonPage>
  );
};

export default Home;
