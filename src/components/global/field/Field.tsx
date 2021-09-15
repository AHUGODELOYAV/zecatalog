import {
  IonButton,
  IonCol,
  IonIcon,
  IonInput,
  IonItem,
  IonLabel,
  IonRow,
} from "@ionic/react";
import {
  eyeOffOutline,
  eyeOutline,
  informationCircleOutline,
} from "ionicons/icons";
import React, { Dispatch, SetStateAction, useState } from "react";
import "./Field.css";
export type TextFieldTypes =
  | "date"
  | "email"
  | "number"
  | "password"
  | "search"
  | "tel"
  | "text"
  | "url"
  | "time"
  | "week"
  | "month"
  | "datetime-local";

const Field: React.FC<{
  dataField: {
    label: string;
    type: TextFieldTypes;
    placeholder: string;
    value: [string, Dispatch<SetStateAction<string>>];
    error: [boolean, Dispatch<SetStateAction<boolean>>];
    errorMessage: [string, Dispatch<SetStateAction<string>>];
    isRequired: boolean;
    validationType: string;
  };
}> = (props) => {
  const [showPass, setShowPass] = useState(false);

  return (
    <React.Fragment>
      <IonLabel
        className=""
        color={props.dataField.error[0] ? "danger" : "primary"}
      >
        {props.dataField.label}
        {props.dataField.isRequired ? "*" : ""}
      </IonLabel>
      <IonItem
        className={
          props.dataField.error[0] ? "error-field-style" : "field-style"
        }
        lines="full"
        mode="md"
      >
        <IonInput
          type={
            props.dataField.type == "password" && showPass
              ? "text"
              : props.dataField.type
          }
          value={props.dataField.value[0]}
          onIonChange={(e) =>
            props.dataField.value[1](e.detail.value as string)
          }
          placeholder={props.dataField.placeholder}
        />

        {props.dataField.type == "password" && !showPass && (
          <IonButton
            fill="clear"
            onClick={() => {
              setShowPass(true);
            }}
          >
            <IonIcon slot="icon-only" icon={eyeOutline} />
          </IonButton>
        )}
        {props.dataField.type == "password" && showPass && (
          <IonButton
            fill="clear"
            onClick={() => {
              setShowPass(false);
            }}
          >
            <IonIcon slot="icon-only" icon={eyeOffOutline} />
          </IonButton>
        )}
      </IonItem>

      {props.dataField.error[0] && (
        <IonRow>
          <IonCol>
            <IonIcon
              className="error-labels"
              icon={informationCircleOutline}
              color="danger"
            />
            <IonLabel color="danger">
              <small>{props.dataField.errorMessage[0]}</small>
            </IonLabel>
          </IonCol>
        </IonRow>
      )}
    </React.Fragment>
  );
};

export default Field;
