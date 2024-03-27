import {
  IonButton,
  IonCheckbox,
  IonContent,
  IonInput,
  IonInputPasswordToggle,
  IonItem,
  IonList,
  IonPage,
  IonSpinner,
  useIonRouter,
} from "@ionic/react";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

interface ILoginForm {
  email: string;
  password: string;
  keepLoggedIn: boolean;
}

export function LoginForm() {
  const { register, handleSubmit, formState, setValue } = useForm<ILoginForm>();
  const [busy, setBusy] = useState(false);
  const { push } = useIonRouter();

  const onSubmit: SubmitHandler<ILoginForm> = (data) => {
    setBusy(true);

    setTimeout(() => {
      // Faking a delay for login then navigate to the home page
      push("/");
    }, 1500);
  };

  return (
    <IonPage>
      <IonContent>
        <div className="flex flex-col justify-center mt-4">
          <img src="/assets/login-form/graphic.svg" aria-hidden="true" />
        </div>

        <h1 className="ion-heading-1 font-semibold ion-text-color ion-color-primary ion-padding-horizontal mt-10 mb-4">
          Login
        </h1>

        <form onSubmit={handleSubmit(onSubmit)}>
          <IonList>
            <IonItem lines="none">
              <IonInput
                {...register("email", { required: true })}
                label="Email"
                labelPlacement="stacked"
                type="email"
                placeholder="example@example.com"
                onIonInput={(ev) => setValue("email", ev.detail.value!, {
                  shouldValidate: true
                })}
              ></IonInput>
            </IonItem>
            <IonItem lines="none">
              <IonInput
                {...register("password", { required: true })}
                className="mt-2"
                label="Password"
                labelPlacement="stacked"
                type="password"
                placeholder="Enter your password"
                onIonInput={(ev) =>
                  setValue("password", ev.detail.value!, {
                    shouldValidate: true,
                  })
                }
              >
                <IonInputPasswordToggle slot="end" />
              </IonInput>
            </IonItem>
            <IonItem lines="none">
              <IonCheckbox
                {...register("keepLoggedIn")}
                className="my-4"
                labelPlacement="start"
                justify="space-between"
              >
                Keep me logged in
              </IonCheckbox>
            </IonItem>
          </IonList>

          <IonButton
            className="mt-4 ion-padding-horizontal"
            disabled={formState.isValid === false}
            size="large"
            shape="round"
            expand="block"
            type="submit"
          >
            {busy ? <IonSpinner name="crescent" /> : "Log in"}
          </IonButton>
        </form>
      </IonContent>
    </IonPage>
  );
}
