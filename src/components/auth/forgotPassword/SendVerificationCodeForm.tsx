import { IonButton, IonCol, IonGrid, IonRow } from "@ionic/react";
import React from "react";
import Field, { FieldObject } from "../../global/field/Field";
import ForgotPasswordInstructions from "./ForgotPasswordInstructions";

const SendVerificationCodeForm: React.FC<{
  fieldMail: FieldObject;
  sendVerificationCodeHandler: () => void;
}> = (props) => {
  return (
    <IonGrid className="ion-no-padding ion-text-left">
      <ForgotPasswordInstructions />
      <IonRow className="ion-margin-top">
        <IonCol>
          <Field dataField={props.fieldMail} />
        </IonCol>
      </IonRow>
      <IonRow>
        <IonCol>
          <IonButton className="ion-margin-top" expand="block" onClick={props.sendVerificationCodeHandler}>
            Recover password
          </IonButton>
        </IonCol>
      </IonRow>
    </IonGrid>
  );
};

export default SendVerificationCodeForm;
