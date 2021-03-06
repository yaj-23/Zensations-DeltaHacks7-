import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Question1.css';
import lotus from '../logos/lotus.svg';
import icon from '../logos/frameIcon.svg';
import nextBtn from '../logos/nextButton.svg';
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

          <div className="question-title">
              how do you feel right now?
          </div>
          
          <div className='btns'>
            <img  className='button-background' src={nextBtn} alt="nextBtn" onClick={()=> console.log("MOVE ME TO NEXT Question PAGE")} />
          </div>
         
          <img className="lotus" src={lotus} alt="lotus" />
          
        </div>
     
    </IonPage>
  );
};

export default Question1;
