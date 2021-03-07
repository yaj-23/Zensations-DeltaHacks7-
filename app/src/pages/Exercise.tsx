import { IonPage } from "@ionic/react";
import { useHistory } from "react-router";

import icon from "../logos/frameIcon.svg";
import lotus from "../logos/lotus.svg";
import bridge from "../logos/bridge1.svg";

import "./Exercise.css";

const Exercise: React.FC = () => {
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

       
       
        
            <div className="card-auto">
                <h4 className="step-desc">1. bridge pose 30s</h4>
            </div>

            <img src={bridge} alt='bridge'/>
        
 
        

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
