import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Home.css';
import lotus from '../logos/lotus.svg';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
        <div className="mainScreen">
          <div className="title">
            <div>Zensation</div>
            <div>release your emotions</div>
            
          </div>
          <img src={lotus} alt="lotus" />
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Home;
