import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Question1.css';
import lotus from '../logos/lotus.svg';
import icon from '../logos/frameIcon.svg';
import getStartedBtn from '../logos/getStarted_Btn.svg';
import learnmoreBtn from '../logos/learnMore_Btn.svg';

const Question1: React.FC = () => {
  return (
    <IonPage>

        
        <div className="mainScreen">
          
            <div className="header">
                <div className='icon'>
                    <img className="green-background" src={icon}/>
                </div>

                <div className="title">
                    <div className="app-title">Zensation</div>
                    <div className="app-slogan">release your emotions</div>
                </div>   
            </div>


          <img src={lotus} alt="lotus" />
          <div className='btns'>
            <img  className='button-background' src={getStartedBtn} alt="getStartedBtn" onClick={()=> console.log("MOVE ME TO NEXT SCREEN PAGE")} />
            <img className='button-background' src={learnmoreBtn} alt="learnmoreBtn" onClick={()=> console.log("MOVE ME TO DEVPOST PAGE")} />
          </div>
         

        </div>
     
    </IonPage>
  );
};

export default Question1;
