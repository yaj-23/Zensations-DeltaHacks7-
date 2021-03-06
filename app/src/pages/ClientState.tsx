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

  const tempArray = [1,2,3,4]

  const getData = async () => {
    const data = await fetch('http://localhost:4000/api/quiz', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        values: [1,2,3,4]
      }),
    }).then((res) => res.json())
    
    console.log(data);

  };





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
            <img  className='dash-button-background' src={continueBtn} alt="continueBtn" onClick={()=> getData()} />
          </div>
         
          <img className="lotus" src={lotus} alt="lotus" onClick={()=> history.replace('/home')} />
          
        </div>
     
    </IonPage>
  );
};

export default ClientState;
