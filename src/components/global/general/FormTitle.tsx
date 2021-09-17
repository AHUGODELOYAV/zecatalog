import { IonCol, IonRow, IonText } from "@ionic/react";
import React from "react";

const FormTitle: React.FC<{ title: string }> = (props) => {
  return (
    <IonRow>
      <IonCol>
        <IonText>
          <h1>{props.title}</h1>
        </IonText>
      </IonCol>
    </IonRow>
  );
};

export default FormTitle;
