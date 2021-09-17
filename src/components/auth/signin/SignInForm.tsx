import {
  IonButton,
  IonCol,
  IonGrid,
  IonRouterLink,
  IonRow,
  IonText,
} from "@ionic/react";
import React from "react";
import Field, { FieldObject } from "../../global/field/Field";

const SignInForm: React.FC<{
  fieldEmail: FieldObject;
  fieldPass: FieldObject;
  signInHandler: () => void;
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
              <Field dataField={props.fieldEmail} />
            </IonCol>
          </IonRow>
          <IonRow className="ion-margin-bottom">
            <IonCol>
              <Field dataField={props.fieldPass} />
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol className="ion-text-end">
              <IonRouterLink routerLink="/forgotpassword">
                <IonText className="forgot-pass">Forgot Password?</IonText>
              </IonRouterLink>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonButton expand="block" onClick={props.signInHandler}>
                Sign In
              </IonButton>
            </IonCol>
          </IonRow>
        </IonCol>
      </IonRow>
    </IonGrid>
  );
};

export default SignInForm;
