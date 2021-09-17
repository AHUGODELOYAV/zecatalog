import { IonInput, IonItem } from "@ionic/react";
import React, { useState } from "react";
import ShowPasswordButton from "../buttons/ShowPasswordButton";
import { FieldObject } from "./Field";

const FieldItem: React.FC<{ dataField: FieldObject }> = (props) => {
  const [showPass, setShowPass] = useState(false);

  return (
    <IonItem
      className={props.dataField.error[0] ? "error-field-style" : "field-style"}
      lines="full"
      mode="md"
    >
      <IonInput
        type={
          props.dataField.type === "password" && showPass
            ? "text"
            : props.dataField.type
        }
        value={props.dataField.value[0]}
        onIonChange={(e) => props.dataField.value[1](e.detail.value as string)}
        placeholder={props.dataField.placeholder}
      />
      {props.dataField.type === "password" && (
        <ShowPasswordButton showPass={[showPass, setShowPass]} />
      )}
    </IonItem>
  );
};

export default FieldItem;
