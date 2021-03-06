import { IonPage } from "@ionic/react";
import { useHistory } from "react-router";

import icon from "../logos/frameIcon.svg";
import lotus from "../logos/lotus.svg";
import playIcon from "../logos/playIcon.svg";

import "./ExercisePage.css";

const ExercisePage: React.FC = () => {
  const history = useHistory();

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

       
        <div className="saying">here is a tailored workout</div>
        
        <div className="steps">
          <div className="card-left">
            <h4 className="step-desc">1. bridge pose 30s</h4>
          </div>
          <div className="card-right">
            <h4 className="step-desc">2. downward dog 30s</h4>
          </div>
          <div className="card-left">
            <h4 className="step-desc">3. seated bend 30s</h4>
          </div>
          <div className="card-right">
            <h4 className="step-desc">4. standing bend 30s</h4>
          </div>
          <div className="card-left">
            <h4 className="step-desc">5. cobra 30s</h4>
          </div>
          <img className="card-right-right"src={playIcon} alt='playIcon'/>
          

        
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

export default ExercisePage;
