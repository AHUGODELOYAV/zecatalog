import { IonCol, IonRow, IonText } from "@ionic/react";
import React from "react";

const ForgotPasswordInstructions: React.FC = () => {
  return (
    <IonRow>
      <IonCol className="ion-text-left">
        <IonText color="medium">
          Don't worry! Just fill in your email and we'll send you a verification
          code to reset your password.
        </IonText>
      </IonCol>
    </IonRow>
  );
};

export default ForgotPasswordInstructions;
