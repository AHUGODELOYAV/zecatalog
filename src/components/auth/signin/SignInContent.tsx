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
import { signInAuth } from "../../../store/AuthSlice";
import { flagSelector } from "../../../store/FlagSlice";
import { fieldValidations } from "../../../validations/FieldValidations";
import ErrorAlert from "../../alerts/ErrorAlert";
import SignInAlert from "../../alerts/SignInAlert";
import { TextFieldTypes } from "../../global/field/Field";
import FormTitle from "../../global/general/FormTitle";
import Loading from "../../global/general/Loading";
import Toast from "../../global/general/Toast";
import Toolbar from "../../global/general/Toolbar";
import "./SignInContent.css";
import SignInForm from "./SignInForm";

const SignInContent: React.FC = () => {
  const { loading } = useSelector(flagSelector);
  const [toastMessage, setToastMessage] = useState("");
  const dispatch = useDispatch();

  const fieldEmail = {
    label: "Email",
    type: "email" as TextFieldTypes,
    value: useState(""),
    valueType: "string",
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
    valueType: "string",
    placeholder: "",
    error: useState(false),
    errorMessage: useState(""),
    isRequired: true,
    validationType: "password",
  };

  const signInHandler = () => {
    const fieldValidation = [
      fieldValidations(fieldEmail),
      fieldValidations(fieldPass),
      ,
    ];
    if (!fieldValidation.includes(true)) {
      dispatch(
        signInAuth({
          userEmail: fieldEmail.value[0].toString(),
          userPass: fieldPass.value[0].toString(),
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
      <SignInAlert />
      <ErrorAlert />
      <IonHeader>
        <Toolbar />
      </IonHeader>
      <IonContent className="ion-padding ion-text-center">
        <IonGrid fixed>
          <IonRow className="ion-align-items-center">
            <IonCol>
              <FormTitle title="Sign In" />
              <SignInForm
                fieldEmail={fieldEmail}
                fieldPass={fieldPass}
                signInHandler={signInHandler}
              />
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default SignInContent;
