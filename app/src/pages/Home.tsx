import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Home.css';
import lotus from '../logos/lotus.svg';
import icon from '../logos/frameIcon.svg';
import getStartedBtn from '../logos/getStarted_Btn.svg';
import learnmoreBtn from '../logos/learnMore_Btn.svg';

const Home: React.FC = () => {
  return (
    <IonPage>

        
        <div className="mainScreen">
          

          <div className='icon'>
            <img className="green-background" src={icon}/>
          </div>

          <div className="title">
            <div>Zensation</div>
            <div>release your emotions</div>
            
          </div>
          <img src={lotus} alt="lotus" />
          <div className='btns'>
            <img className='getStartedbtn' src={getStartedBtn} alt="getStartedBtn" />
            <img src={learnmoreBtn} alt="learnmoreBtn" />
          </div>
         

        </div>
     
    </IonPage>
  );
};

export default Home;
