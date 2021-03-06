import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './ClientState.css';
import lotus from '../logos/lotus.svg';
import icon from '../logos/frameIcon.svg';
import continueBtn from '../logos/continueBtn.svg';
import sad from '../logos/sad.svg';
import crying from '../logos/crying.svg';
import irritated from '../logos/irritated.svg';
import angry from '../logos/angry.svg';
import happy from '../logos/sad.svg';
import lovely from '../logos/lovely.svg';
import { useHistory } from "react-router";

const ClientState: React.FC = () => {
  const history = useHistory();

  return (
    <IonPage>

        
        <div className="mainScreen">
          
          <div className="header">
              <div className='appicon'>
                  <img className="green-background" src={icon}/>
              </div>

              <div className="title-header">
                  <div className="app-title-header">Zensation</div>
                  <div className="app-slogan-header">release your emotions</div>
              </div>   
          </div>

          <div className="dash-title">
              you are feeling :
          </div>

          <div className="dash-title">
              idk
          </div>


          <div className='dash-btns'>
            <img  className='dash-button-background' src={continueBtn} alt="continueBtn" onClick={()=> console.log("MOVE ME TO NEXT Exercise PAGE")} />
          </div>
         
          <img className="lotus" src={lotus} alt="lotus" onClick={()=> history.replace('/home')} />
          
        </div>
     
    </IonPage>
  );
};

export default ClientState;
