import {
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonPage,
  IonRow,
} from "@ionic/react";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signUpAuth } from "../../../store/AuthSlice";
import { flagSelector } from "../../../store/FlagSlice";
import {
  fieldValidations,
  fieldValidationsCompare,
} from "../../../validations/FieldValidations";
import ErrorAlert from "../../alerts/ErrorAlert";
import SignUpAlert from "../../alerts/SignUpAlert";
import { TextFieldTypes } from "../../global/field/Field";
import FormTitle from "../../global/general/FormTitle";
import Loading from "../../global/general/Loading";
import Toast from "../../global/general/Toast";
import Toolbar from "../../global/general/Toolbar";
import SignUpForm from "./SignUpForm";

const SignUpContent: React.FC = () => {
  const { loading } = useSelector(flagSelector);
  const [toastMessage, setToastMessage] = useState("");
  const dispatch = useDispatch();

  const fieldName = {
    label: "Name",
    type: "text" as TextFieldTypes,
    value: useState(""),
    placeholder: "Adam",
    error: useState(false),
    errorMessage: useState(""),
    isRequired: true,
    validationType: "text",
  };

  const fieldLastName = {
    label: "Last Name",
    type: "text" as TextFieldTypes,
    value: useState(""),
    placeholder: "Smith",
    error: useState(false),
    errorMessage: useState(""),
    isRequired: true,
    validationType: "text",
  };

  const fieldEmail = {
    label: "Email",
    type: "email" as TextFieldTypes,
    value: useState(""),
    placeholder: "myname@mail.com",
    error: useState(false),
    errorMessage: useState(""),
    isRequired: true,
    validationType: "email",
  };

  const fieldPass = {
    label: "Password",
    type: "password" as TextFieldTypes,
    value: useState(""),
    placeholder: "",
    error: useState(false),
    errorMessage: useState(""),
    isRequired: true,
    validationType: "password",
  };

  const fieldPassConfirm = {
    label: "Confirm Password",
    type: "password" as TextFieldTypes,
    value: useState(""),
    placeholder: "",
    error: useState(false),
    errorMessage: useState(""),
    isRequired: true,
    validationType: "password",
  };

  const signUpHandler = () => {
    const fieldValidation = [
      fieldValidations(fieldName),
      fieldValidations(fieldLastName),
      fieldValidations(fieldEmail),
      fieldValidations(fieldPass),
      fieldValidations(fieldPassConfirm),
    ];
    if (
      !fieldValidation.includes(true) &&
      !fieldValidationsCompare(
        fieldPass,
        fieldPassConfirm,
        "Passwords do not match"
      )
    ) {
      dispatch(
        signUpAuth({
          username: fieldEmail.value[0].toString(),
          password: fieldPass.value[0].toString(),
          attributes: {
            email: fieldEmail.value[0].toString(),
            name: fieldName.value[0].toString(),
            family_name: fieldLastName.value[0].toString(),
          },
        })
      );
    } else {
      setToastMessage("Please review the highlighted fields");
    }
  };

  return (
    <IonPage>
      <Loading show={loading} />
      <Toast toastMessage={[toastMessage, setToastMessage]} />
      <ErrorAlert />
      <SignUpAlert />
      <IonHeader>
        <Toolbar />
      </IonHeader>
      <IonContent className="ion-padding ion-text-center">
        <IonGrid fixed>
          <IonRow className="ion-align-items-center">
            <IonCol>
              <FormTitle title="Create Admin" />
              <SignUpForm
                fieldName={fieldName}
                fieldLastName={fieldLastName}
                fieldEmail={fieldEmail}
                fieldPass={fieldPass}
                fieldPassConfirm={fieldPassConfirm}
                signUpHandler={signUpHandler}
              />
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default SignUpContent;
