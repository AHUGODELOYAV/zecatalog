import { IonButton, IonCol, IonGrid, IonRow } from "@ionic/react";
import React from "react";
import Field, { FieldObject } from "../../global/field/Field";

const SignUpForm: React.FC<{
  fieldName: FieldObject;
  fieldLastName: FieldObject;
  fieldEmail: FieldObject;
  fieldPass: FieldObject;
  fieldPassConfirm: FieldObject;
  signUpHandler: () => void;
}> = (props) => {
  return (
    <IonGrid className="ion-no-padding ion-text-left">
      <IonRow>
        <IonCol
          size-xs="12"
          size-sm="10"
          offset-sm="1"
          size-md="6"
          offset-md="3"
          size-lg="5"
          offset-lg="3.5"
          size-xl="5"
          offset-xl="3.5"
        >
          <IonRow className="ion-margin-bottom">
            <IonCol>
              <Field dataField={props.fieldName} />
            </IonCol>
          </IonRow>
          <IonRow className="ion-margin-bottom">
            <IonCol>
              <Field dataField={props.fieldLastName} />
            </IonCol>
          </IonRow>
          <IonRow className="ion-margin-bottom">
            <IonCol>
              <Field dataField={props.fieldEmail} />
            </IonCol>
          </IonRow>
          <IonRow className="ion-margin-bottom">
            <IonCol>
              <Field dataField={props.fieldPass} />
            </IonCol>
          </IonRow>
          <IonRow className="ion-margin-bottom">
            <IonCol>
              <Field dataField={props.fieldPassConfirm} />
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonButton expand="block" onClick={props.signUpHandler}>
                Sign Up
              </IonButton>
            </IonCol>
          </IonRow>
        </IonCol>
      </IonRow>
    </IonGrid>
  );
};

export default SignUpForm;
