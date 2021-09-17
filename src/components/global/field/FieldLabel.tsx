import { IonLabel } from "@ionic/react";
import React from "react";

const FieldLabel: React.FC<{
  error: boolean;
  label: string;
  isRequired: boolean;
}> = (props) => {
  return (
    <IonLabel className="" color={props.error ? "danger" : "primary"}>
      {props.label}
      {props.isRequired ? "*" : ""}
    </IonLabel>
  );
};

export default FieldLabel;
