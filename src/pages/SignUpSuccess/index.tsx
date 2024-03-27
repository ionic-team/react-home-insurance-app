import {
  IonButton,
  IonContent,
  IonFooter,
  IonPage,
  IonToolbar,
} from "@ionic/react";

export function SignUpSuccess() {
  return (
    <IonPage>
      <IonContent className="text-center">
        <div className="flex flex-col items-center justify-center h-full">
          <img
            className="mx-auto"
            src="/assets/high-five-graphic.svg"
            aria-hidden="true"
          />

          <h1 className="ion-heading-1 ion-text-color ion-color-primary mt-10">
            You're all set!
          </h1>
          <p className="mt-2">
            You'll be receiving an email shortly with all the information you
            need.
          </p>
        </div>
      </IonContent>
      <IonFooter>
        <IonToolbar>
          <IonButton
            className="ion-padding-horizontal"
            shape="round"
            expand="block"
            size="large"
            routerLink="/"
          >
            Go to Dashboard
          </IonButton>
        </IonToolbar>
      </IonFooter>
    </IonPage>
  );
}
