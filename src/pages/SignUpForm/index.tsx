import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonCheckbox,
  IonContent,
  IonHeader,
  IonInput,
  IonInputPasswordToggle,
  IonItem,
  IonList,
  IonPage,
  IonSpinner,
  IonTitle,
  IonToolbar,
  useIonRouter,
} from "@ionic/react";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

interface ISignUpForm {
  name: string;
  email: string;
  phoneNumber: string;
  password: string;
  confirmPassword: string;
  keepLoggedIn: boolean;
}

export function SignUpForm() {
  const { register, handleSubmit, formState, setValue } =
    useForm<ISignUpForm>();
  const [busy, setBusy] = useState(false);
  const { push } = useIonRouter();

  const onSubmit: SubmitHandler<ISignUpForm> = (data) => {
    setBusy(true);

    setTimeout(() => {
      // Faking a delay for login then navigate to the home page
      push("/sign-up-success");
    }, 1500);
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/login" />
          </IonButtons>
          <IonTitle>Sign up</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <div className="flex flex-col justify-center mt-4">
          <img src="/assets/login-form/graphic.svg" aria-hidden="true" />
        </div>

        <h1 className="ion-heading-1 font-semibold ion-text-color ion-color-primary ion-padding-horizontal mt-10 mb-4">
          Sign up
        </h1>

        <form onSubmit={handleSubmit(onSubmit)}>
          <IonList>
            <IonItem lines="none">
              <IonInput
                {...register("email", { required: true })}
                label="Name"
                labelPlacement="stacked"
                placeholder="John Doe"
                onIonInput={(ev) => setValue("name", ev.detail.value!)}
              ></IonInput>
            </IonItem>
            <IonItem lines="none">
              <IonInput
                {...register("email", { required: true })}
                label="Email"
                labelPlacement="stacked"
                type="email"
                placeholder="example@example.com"
                onIonInput={(ev) => setValue("email", ev.detail.value!)}
              ></IonInput>
            </IonItem>
            <IonItem lines="none">
              <IonInput
                {...register("phoneNumber", { required: true })}
                label="Phone number"
                labelPlacement="stacked"
                placeholder="(000) 000 0000"
                onIonInput={(ev) => setValue("phoneNumber", ev.detail.value!)}
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
                clearInput={true}
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
              <IonInput
                {...register("confirmPassword", { required: true })}
                className="mt-2"
                label="Confirm Password"
                labelPlacement="stacked"
                type="password"
                placeholder="Enter your password"
                helperText="Both passwords must match."
                clearInput={true}
                onIonInput={(ev) =>
                  setValue("confirmPassword", ev.detail.value!, {
                    shouldValidate: true,
                  })
                }
              >
                <IonInputPasswordToggle slot="end" />
              </IonInput>
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
            {busy ? <IonSpinner name="crescent" /> : "Sign up"}
          </IonButton>
        </form>
      </IonContent>
    </IonPage>
  );
}
