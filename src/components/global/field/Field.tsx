import React, { Dispatch, SetStateAction } from "react";
import "./Field.css";
import FieldError from "./FieldError";
import FieldItem from "./FieldItem";
import FieldLabel from "./FieldLabel";
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

export interface FieldObject {
  label: string;
  type: TextFieldTypes;
  placeholder: string;
  value: [string, Dispatch<SetStateAction<string>>];
  error: [boolean, Dispatch<SetStateAction<boolean>>];
  errorMessage: [string, Dispatch<SetStateAction<string>>];
  isRequired: boolean;
  validationType: string;
}

const Field: React.FC<{
  dataField: FieldObject;
}> = (props) => {
  return (
    <React.Fragment>
      <FieldLabel
        error={props.dataField.error[0]}
        label={props.dataField.label}
        isRequired={props.dataField.isRequired}
      />
      <FieldItem dataField={props.dataField} />
      {props.dataField.error[0] && (
        <FieldError message={props.dataField.errorMessage[0]} />
      )}
    </React.Fragment>
  );
};

export default Field;
