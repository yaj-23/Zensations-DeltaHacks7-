import { IonPage } from "@ionic/react";
import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { useQuiz } from "../components/QuizProvider";
import release from "../logos/continueBtn.svg";
import icon from "../logos/frameIcon.svg";
import lotus from "../logos/lotus.svg";
import happy from "../logos/happy.svg";
import sad from "../logos/sad.svg";
import angry from "../logos/angry.svg";
import Typist from "react-typist";
import "./ClientState.css";
import { useExercises } from "../components/ExerciseProvider";

const ClientState: React.FC = () => {
  const history = useHistory();
  const [score, setScore] = useState<number[]>([]);
  const { getData } = useQuiz();
  const [left, setLeft] = useState(0);
  const [middle, setMiddle] = useState(0);
  const [right, setRight] = useState(0);
  const {setEmotion} = useExercises();

  const items: Record<string, string> = {
    0: happy,
    1: sad,
    2: angry,
  };

  const emotions: Record<number, string> = {
    0: "HAPPY",
    1: "SAD",
    2: "ANGRY"
  }

  const backGround: Record<string, string> = {
    0: "#e6ffe6",
    1: "#e6ffff",
    2: "#ffe6e6",
  };

  const getResult = (data: number[]) => {
    let middleNum: number = data.indexOf(Math.max(...data));
    let lowestNum: number = data.indexOf(Math.min(...data));

    setLeft(lowestNum);
    setMiddle(middleNum);
    setRight([0, 1, 2].filter((f) => ![lowestNum, middleNum].includes(f))[0]);
    setEmotion(emotions[middleNum]);
  };

  useEffect(() => {
    (async () => {
      const data = await getData();
      setScore(data);
      getResult(data);
    })();
  }, []);

  return (
    <IonPage>
      <div
        className="mainScreen"
        style={{ backgroundColor: backGround[middle] }}
      >
        <div className="header">
          <div className="appicon">
            <img className="green-background" src={icon} />
          </div>

          <div className="title-header">
            <div className="app-title-header">Zensations</div>
            <div className="app-slogan-header">release your emotions</div>
          </div>
        </div>

        <Typist className="dash-title"> You're Experiencing</Typist>

        <div className="side">
          <div className="picandpercent">
            <img className="k" src={items[left]} alt="nextBtn" />
            <div>{score[left]} %</div>
          </div>
          <div className="picandpercent">
            <img className="k" src={items[right]} alt="nextBtn" />
            <div>{score[right]} %</div>
          </div>
        </div>
        <div className="main">
          <div className="picandpercent fat">
            <img className="kk" src={items[middle]} alt="nextBtn" />
            <div>{score[middle]} %</div>
          </div>
        </div>

        <div className="dash-btns">
          <img
            className="dash-button-background"
            src={release}
            alt="continueBtn"
            onClick={() => history.replace("/home/ExercisePage")}
          />
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

export default ClientState;
