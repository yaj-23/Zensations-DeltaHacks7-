import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Question1.css';
import lotus from '../logos/lotus.svg';
import icon from '../logos/frameIcon.svg';
import nextBtn from '../logos/nextButton.svg';
import sad from '../logos/sad.svg';
import crying from '../logos/crying.svg';
import irritated from '../logos/irritated.svg';
import angry from '../logos/angry.svg';
import happy from '../logos/sad.svg';
import lovely from '../logos/lovely.svg';

const Question1: React.FC = () => {
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

          <div className="question-title">
              how do you feel right now?
          </div>

          <div className="emoji-icon-row1">
            <img  className='emoji-btn' src={sad} alt="nextBtn" onClick={()=> console.log("You are sad")} />
            <img  className='emoji-btn' src={crying} alt="nextBtn" onClick={()=> console.log("You are crying")} />
            <img  className='emoji-btn' src={irritated} alt="nextBtn" onClick={()=> console.log("You are irritated")} />

          </div>
          
          <div className="emoji-icon-row2">
            <img  className='emoji-btn' src={angry} alt="nextBtn" onClick={()=> console.log("You are angry")} />
            <img  className='emoji-btn' src={happy} alt="nextBtn" onClick={()=> console.log("You are happy")} />
            <img  className='emoji-btn' src={lovely} alt="nextBtn" onClick={()=> console.log("You are feeling lovely")} />

          </div>


          <div className='next-btns'>
            <img  className='next-button-background' src={nextBtn} alt="nextBtn" onClick={()=> console.log("MOVE ME TO NEXT Question PAGE")} />
          </div>
         
          <img className="lotus" src={lotus} alt="lotus" />
          
        </div>
     
    </IonPage>
  );
};

export default Question1;
