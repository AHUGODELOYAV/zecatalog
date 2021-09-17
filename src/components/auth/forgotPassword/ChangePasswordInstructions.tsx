import { IonCol, IonRow, IonText } from "@ionic/react";
import React from "react";

const ChangePasswordInstructions: React.FC = () => {
  return (
    <IonRow>
      <IonCol className="ion-text-left">
        <IonText color="medium">
          Please, enter the verification code that we send to your email
        </IonText>
      </IonCol>
    </IonRow>
  );
};

export default ChangePasswordInstructions;
