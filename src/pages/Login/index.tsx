import { IonButton, IonContent, IonPage, IonText } from "@ionic/react";

import "./style.css";

export function Login() {
  return (
    <IonPage>
      <IonContent>
        <div className="hero">
          <img className="hero-logo" src="/logo.svg" height="36" alt="Logo" />
          <IonText color="light">
            <h1 className="ion-heading-1 text-center">
              Keep everything
              <br />
              in one place.
            </h1>
          </IonText>
          <div className="vector-3"></div>
          <div className="vector-2"></div>
        </div>

        <div className="ion-padding-horizontal">
          <IonButton
            shape="round"
            fill="solid"
            expand="block"
            size="large"
            color="primary"
            routerLink="/login-form"
          >
            Log in
          </IonButton>
          <IonButton
            className="mt-2"
            shape="round"
            fill="solid"
            expand="block"
            size="large"
            color="primary-light"
          >
            Sign up
          </IonButton>
          <div className="separator"></div>
          <IonButton
            className="social-btn"
            expand="block"
            fill="outline"
            shape="round"
            size="large"
            color="primary-light"
          >
            <img className="mr-2" src="/assets/google.svg" alt="Google Logo" />
            Continue with Google
          </IonButton>
          <IonButton
            className="mt-2 social-btn"
            expand="block"
            fill="outline"
            shape="round"
            size="large"
            color="primary-light"
          >
            <img
              className="mr-2"
              src="/assets/facebook.svg"
              alt="Facebook Logo"
            />
            Continue with Facebook
          </IonButton>
          <div className="flex flex-row justify-center mt-5">
            <IonButton fill="clear">Log in as Sample User</IonButton>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
}
