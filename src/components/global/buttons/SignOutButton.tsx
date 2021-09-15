import React from "react";
import { IonButton, IonIcon } from "@ionic/react";
import { exitOutline } from "ionicons/icons";
import { Auth } from "aws-amplify";

const SignOutButton: React.FC = () => {
  return (
    <IonButton color="secondary" onClick={() => Auth.signOut()}>
      <IonIcon slot="icon-only" icon={exitOutline} />
    </IonButton>
  );
};

export default SignOutButton;
