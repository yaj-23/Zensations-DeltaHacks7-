import {
  IonContent,
  IonHeader,
  IonRadio,
  IonRadioGroup,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import "./Question1.css";
import confused from "../logos/confused.svg";
import board from "../logos/board.svg";
import one from "../logos/one.svg";
import two from "../logos/two.svg";
import three from "../logos/three.svg";
import four from "../logos/four.svg";
import five from "../logos/five.svg";
import six from "../logos/six.svg";
import lotus from "../logos/lotus.svg";
import icon from "../logos/frameIcon.svg";
import nextBtn from "../logos/nextButton.svg";
import sad from "../logos/sad.svg";
import crying from "../logos/crying.svg";
import irritated from "../logos/irritated.svg";
import angry from "../logos/angry.svg";
import happy from "../logos/sad.svg";
import lovely from "../logos/lovely.svg";
import { useHistory } from "react-router";
import React, { useState, useEffect } from "react";
import dashboard from "../logos/dashboard.svg";
import { CountdownCircleTimer } from "react-countdown-circle-timer";

const Question1: React.FC = () => {
  const history = useHistory();
  const [count, setCount] = useState(0);
  const [result, setResult] = useState<number[]>([]);
  const [add, setAdd] = useState(-1);

  const renderTime = ({ remainingTime }) => {
    if (remainingTime === 0) {
      return <div className="timer">Too lale...</div>;
    }

    return (
      <div className="timer">
        <div className="value">{remainingTime}</div>
      </div>
    );
  };

  const addHandler = (newVal) => setAdd((a) => (a === -1 ? newVal : a));

  useEffect(() => {
    if (add !== -1) setResult((res) => [...res, add]);
  }, [add]);

  const questions: String[] = [
    "how do you feel today?",
    "how stressed have you been lately",
    "descrive your day with one emoji:",
    "how healthy are you?",
  ];

  // Display the dashboard once you have all the information filled out
  let nextButton;
  if (count < 3) {
    nextButton = (
      <div className="next-btns">
        <img
          className="next-button-background"
          src={nextBtn}
          alt="nextBtn"
          onClick={() => {
            setAdd(-1);
            setCount(count + 1);
            console.log(result);
          }}
        />
      </div>
    );
  } else {
    nextButton = (
      <div className="next-btns">
        <img
          className="next-button-background"
          src={dashboard}
          alt="nextBtn"
          onClick={() => {
            {
              console.log(result);
              history.push("/home/ClientState");
            }
          }}
        />
      </div>
    );
  }

  let emojiDisplay;
  if (count == 0) {
    emojiDisplay = (
      <div>
        <div className="emoji-icon-row1">
          <img
            className="emoji-btn"
            src={sad}
            alt="nextBtn"
            onClick={() => addHandler(1)}
          />
          <img
            className="emoji-btn"
            src={crying}
            alt="nextBtn"
            onClick={() => addHandler(0)}
          />
          <img
            className="emoji-btn"
            src={irritated}
            alt="nextBtn"
            onClick={() => addHandler(2)}
          />
        </div>

        <div className="emoji-icon-row2">
          <img
            className="emoji-btn"
            src={angry}
            alt="nextBtn"
            onClick={() => addHandler(3)}
          />
          <img
            className="emoji-btn"
            src={happy}
            alt="nextBtn"
            onClick={() => addHandler(4)}
          />
          <img
            className="emoji-btn"
            src={lovely}
            alt="nextBtn"
            onClick={() => addHandler(5)}
          />
        </div>
      </div>
    );
  } else if (count == 2) {
    emojiDisplay = (
      <div>
        <div className="emoji-icon-row1">
          <img
            className="emoji-btn"
            src={sad}
            alt="nextBtn"
            onClick={() => addHandler(1)}
          />
          <img
            className="emoji-btn"
            src={crying}
            alt="nextBtn"
            onClick={() => addHandler(0)}
          />
          <img
            className="emoji-btn"
            src={confused}
            alt="nextBtn"
            onClick={() => addHandler(6)}
          />
        </div>

        <div className="emoji-icon-row2">
          <img
            className="emoji-btn"
            src={angry}
            alt="nextBtn"
            onClick={() => addHandler(3)}
          />
          <img
            className="emoji-btn"
            src={happy}
            alt="nextBtn"
            onClick={() => addHandler(4)}
          />
          <img
            className="emoji-btn"
            src={board}
            alt="nextBtn"
            onClick={() => addHandler(7)}
          />
        </div>
      </div>
    );
  } else {
    emojiDisplay = (
      <div>
        <div className="emoji-icon-row1">
          <img
            className="emoji-btn"
            src={one}
            alt="nextBtn"
            onClick={() => addHandler(1)}
          />
          <img
            className="emoji-btn"
            src={two}
            alt="nextBtn"
            onClick={() => addHandler(2)}
          />
          <img
            className="emoji-btn"
            src={three}
            alt="nextBtn"
            onClick={() => addHandler(3)}
          />
        </div>

        <div className="emoji-icon-row2">
          <img
            className="emoji-btn"
            src={four}
            alt="nextBtn"
            onClick={() => addHandler(4)}
          />
          <img
            className="emoji-btn"
            src={five}
            alt="nextBtn"
            onClick={() => addHandler(5)}
          />
        </div>
      </div>
    );
  }

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

        <div className="question-title">{questions[count]}</div>

        {emojiDisplay}
        <div className="timer-wrapper">
          <CountdownCircleTimer
            isPlaying
            duration={10}
            colors={[
              ["#004777", 0.33],
              ["#F7B801", 0.33],
              ["#A30000", 0.33],
            ]}
            onComplete={() => [true, 1000]}
          >
            {renderTime}
          </CountdownCircleTimer>
        </div>
        {nextButton}

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

export default Question1;
