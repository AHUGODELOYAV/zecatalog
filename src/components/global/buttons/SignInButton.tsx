import React from "react";
import { IonButton, IonIcon, IonLabel } from "@ionic/react";
import { personCircle } from "ionicons/icons";
import { useHistory } from "react-router";

const SignInButton: React.FC = () => {
  const history = useHistory();
  return (
    <IonButton color="secondary">
      <IonIcon icon={personCircle} />
      <IonLabel
        className="ion-margin-start"
        onClick={() => history.push("/signin")}
      >
        Sign In
      </IonLabel>
    </IonButton>
  );
};

export default SignInButton;
