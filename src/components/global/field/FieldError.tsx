import { IonCol, IonIcon, IonLabel, IonRow } from "@ionic/react";
import { informationCircleOutline } from "ionicons/icons";
import React from "react";

const FieldError: React.FC<{ message: string }> = (props) => {
  return (
    <IonRow>
      <IonCol>
        <IonIcon
          className="error-labels"
          icon={informationCircleOutline}
          color="danger"
        />
        <IonLabel color="danger">
          <small>{props.message}</small>
        </IonLabel>
      </IonCol>
    </IonRow>
  );
};

export default FieldError;
