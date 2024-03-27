import { Redirect, Route } from "react-router-dom";
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { square } from "ionicons/icons";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";

import "./App.css";
import Login from "./pages/Login";
import LoginForm from "./pages/LoginForm";
import SignUpForm from "./pages/SignUpForm";
import SignUpSuccess from "./pages/SignUpSuccess";

import Home from "./pages/Home";
import Claims from "./pages/Claims";
import Policies from "./pages/Policies";
import Settings from "./pages/Settings";

setupIonicReact({
  theme: "ionic",
});

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        <Route exact path="/">
          <IonTabs>
            <IonRouterOutlet>
              <Route exact path="/">
                <Home />
              </Route>
              <Route exact path="/claims">
                <Claims />
              </Route>
              <Route path="/policies">
                <Policies />
              </Route>
              <Route path="/settings">
                <Settings />
              </Route>
            </IonRouterOutlet>
            <IonTabBar slot="bottom">
              <IonTabButton tab="home" href="/home">
                <IonIcon aria-hidden="true" icon={square} />
                <IonLabel>Home</IonLabel>
              </IonTabButton>
              <IonTabButton tab="claims" href="/claims">
                <IonIcon aria-hidden="true" icon={square} />
                <IonLabel>Claims</IonLabel>
              </IonTabButton>
              <IonTabButton tab="policies" href="/policies">
                <IonIcon aria-hidden="true" icon={square} />
                <IonLabel>Policies</IonLabel>
              </IonTabButton>
              <IonTabButton tab="settings" href="/settings">
                <IonIcon aria-hidden="true" icon={square} />
                <IonLabel>Settings</IonLabel>
              </IonTabButton>
            </IonTabBar>
          </IonTabs>
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/login-form">
          <LoginForm />
        </Route>
        <Route exact path="/sign-up">
          <SignUpForm />
        </Route>
        <Route exact path="/sign-up-success">
          <SignUpSuccess />
        </Route>
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;
