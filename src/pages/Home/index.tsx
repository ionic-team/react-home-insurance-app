import {
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";

import { chatbubble } from "ionicons/icons";

export default function Home() {
  return (
    <IonPage>
      <IonContent>
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="end">
              <IonButton>
                <IonIcon slot="icon-only" icon={chatbubble} />
              </IonButton>
            </IonButtons>
          </IonToolbar>
          <IonToolbar>
            <IonTitle size="large">Hello, Andrea</IonTitle>
          </IonToolbar>
        </IonHeader>
      </IonContent>
    </IonPage>
  );
}
