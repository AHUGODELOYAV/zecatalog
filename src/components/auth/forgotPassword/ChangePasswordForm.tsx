import { IonButton, IonCol, IonGrid, IonRow } from "@ionic/react";
import React from "react";
import Field, { FieldObject } from "../../global/field/Field";
import ChangePasswordInstructions from "./ChangePasswordInstructions";

const ChangePasswordForm: React.FC<{
  fieldVerCode: FieldObject;
  fieldPass: FieldObject;
  fieldPassConfirm: FieldObject;
  changePasswordHandler: () => void;
}> = (props) => {
  return (
    <IonGrid className="ion-no-padding ion-text-left">
      <ChangePasswordInstructions />
      <IonRow className="ion-margin-top">
        <IonCol>
          <Field dataField={props.fieldVerCode} />
        </IonCol>
      </IonRow>
      <IonRow>
        <IonCol>
          <Field dataField={props.fieldPass} />
        </IonCol>
      </IonRow>
      <IonRow>
        <IonCol>
          <Field dataField={props.fieldPassConfirm} />
        </IonCol>
      </IonRow>
      <IonRow>
        <IonCol>
          <IonButton className="ion-margin-top" expand="block" onClick={props.changePasswordHandler}>
            Accept
          </IonButton>
        </IonCol>
      </IonRow>
    </IonGrid>
  );
};

export default ChangePasswordForm;
