import { IonApp, IonRouterOutlet } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";
import "@ionic/react/css/display.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/float-elements.css";
/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/typography.css";
import React from "react";
import { Redirect, Route } from "react-router-dom";
import { QuizProvider } from "./components/QuizProvider";
import ClientState from "./pages/ClientState";
import Home from "./pages/Home";
import Question1 from "./pages/Question1";
import ExercisePage from "./pages/ExercisePage";
import Exercise from "./pages/Exercise";
import InfoPage from "./pages/InfoPage";
/* Theme variables */
import "./theme/variables.css";
import { ExerciseProvider } from "./components/ExerciseProvider";

const App: React.FC = () => (
  <IonApp>
    <QuizProvider>
      <ExerciseProvider>
        <IonReactRouter>
          <IonRouterOutlet>
            <Route exact path="/home">
              <Home />
            </Route>
            <Route exact path="/home/Question1">
              <Question1 />
            </Route>
            <Route exact path="/home/ClientState">
              <ClientState />
            </Route>

            <Route exact path="/home/ExercisePage">
              <ExercisePage />
            </Route>

            <Route exact path="/home/Exercise">
              <Exercise />
            </Route>
            <Route exact path="/home/InfoPage">
              <InfoPage />
            </Route>

            <Route exact path="/">
              <Redirect to="/home" />
            </Route>
          </IonRouterOutlet>
        </IonReactRouter>
      </ExerciseProvider>
    </QuizProvider>
  </IonApp>
);

export default App;
