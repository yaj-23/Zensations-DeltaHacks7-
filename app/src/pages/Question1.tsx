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
import React, { useState } from "react";
import dashboard from "../logos/dashboard.svg";

const Question1: React.FC = () => {
  const history = useHistory();
  const [count, setCount] = useState(0);

  const questions: String[] = [
    "how do you feel today?",
    "how stressed have you been lately",
    "descrive your day with one emoji:",
    "how anxious do you feel?",
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
            setCount(count + 1);
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
            history.replace("/home/ClientState");
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
            onClick={() => console.log("You are sad")}
          />
          <img
            className="emoji-btn"
            src={crying}
            alt="nextBtn"
            onClick={() => console.log("You are crying")}
          />
          <img
            className="emoji-btn"
            src={irritated}
            alt="nextBtn"
            onClick={() => console.log("You are irritated")}
          />
        </div>

        <div className="emoji-icon-row2">
          <img
            className="emoji-btn"
            src={angry}
            alt="nextBtn"
            onClick={() => console.log("You are angry")}
          />
          <img
            className="emoji-btn"
            src={happy}
            alt="nextBtn"
            onClick={() => console.log("You are happy")}
          />
          <img
            className="emoji-btn"
            src={lovely}
            alt="nextBtn"
            onClick={() => console.log("You are feeling lovely")}
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
            onClick={() => console.log("You are sad")}
          />
          <img
            className="emoji-btn"
            src={crying}
            alt="nextBtn"
            onClick={() => console.log("You are crying")}
          />
          <img
            className="emoji-btn"
            src={irritated}
            alt="nextBtn"
            onClick={() => console.log("You are irritated")}
          />
        </div>

        <div className="emoji-icon-row2">
          <img
            className="emoji-btn"
            src={angry}
            alt="nextBtn"
            onClick={() => console.log("You are angry")}
          />
          <img
            className="emoji-btn"
            src={happy}
            alt="nextBtn"
            onClick={() => console.log("You are happy")}
          />
          <img
            className="emoji-btn"
            src={lovely}
            alt="nextBtn"
            onClick={() => console.log("You are feeling lovely")}
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
            onClick={() => console.log("You are sad")}
          />
          <img
            className="emoji-btn"
            src={two}
            alt="nextBtn"
            onClick={() => console.log("You are crying")}
          />
          <img
            className="emoji-btn"
            src={three}
            alt="nextBtn"
            onClick={() => console.log("You are irritated")}
          />
        </div>

        <div className="emoji-icon-row2">
          <img
            className="emoji-btn"
            src={four}
            alt="nextBtn"
            onClick={() => console.log("You are angry")}
          />
          <img
            className="emoji-btn"
            src={five}
            alt="nextBtn"
            onClick={() => console.log("You are happy")}
          />
          <img
            className="emoji-btn"
            src={six}
            alt="nextBtn"
            onClick={() => console.log("You are feeling lovely")}
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
