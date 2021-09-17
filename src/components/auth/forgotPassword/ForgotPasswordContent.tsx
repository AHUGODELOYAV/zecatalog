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
import { confirmNewPass, forgotPass } from "../../../store/AuthSlice";
import { flagSelector } from "../../../store/FlagSlice";
import {
  fieldValidations,
  fieldValidationsCompare,
} from "../../../validations/FieldValidations";
import ChangePasswordAlert from "../../alerts/ChangePasswordAlert";
import ErrorAlert from "../../alerts/ErrorAlert";
import ResendVerificationCodeButton from "../../global/buttons/ResendVerficationCodeButton";
import { TextFieldTypes } from "../../global/field/Field";
import FormTitle from "../../global/general/FormTitle";
import Loading from "../../global/general/Loading";
import Toast from "../../global/general/Toast";
import Toolbar from "../../global/general/Toolbar";
import ChangePasswordForm from "./ChangePasswordForm";
import SendVerificationCodeForm from "./SendVerificationCodeForm";

const ForgotPasswordContent: React.FC = () => {
  const [toastMessage, setToastMessage] = useState("");
  const dispatch = useDispatch();
  const { loading, sentCode } = useSelector(flagSelector);

  const fieldMail = {
    label: "Email",
    type: "email" as TextFieldTypes,
    value: useState(""),
    valueType: "string",
    placeholder: "Ej: nombre@mail.com",
    error: useState(false),
    errorMessage: useState(""),
    isRequired: true,
    validationType: "email",
  };

  const fieldVerCode = {
    label: "Verification Code",
    type: "text" as TextFieldTypes,
    value: useState(""),
    valueType: "string",
    placeholder: "",
    error: useState(false),
    errorMessage: useState(""),
    isRequired: true,
    validationType: "text",
  };

  const fieldPass = {
    label: "New Password",
    type: "password" as TextFieldTypes,
    value: useState(""),
    valueType: "string",
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
    valueType: "string",
    placeholder: "",
    error: useState(false),
    errorMessage: useState(""),
    isRequired: true,
    validationType: "password",
  };

  const sendVerificationCodeHandler = () => {
    const fieldValidation = [fieldValidations(fieldMail)];
    if (!fieldValidation.includes(true)) {
      dispatch(forgotPass(fieldMail.value[0]));
    }
  };

  const changePasswordHandler = () => {
    const fieldValidation = [
      fieldValidations(fieldVerCode),
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
        confirmNewPass({
          username: fieldMail.value[0].toString(),
          code: fieldVerCode.value[0].toString(),
          pass: fieldPass.value[0].toString(),
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
      <ChangePasswordAlert />
      <ErrorAlert />
      <IonHeader>
        <Toolbar />
      </IonHeader>
      <IonContent className="ion-padding ion-text-center">
        <IonGrid id="auth-grid">
          <IonRow id="auth-row" className="ion-align-items-center">
            <IonCol
              size-xs="12"
              size-sm="10"
              offset-sm="1"
              size-md="8"
              offset-md="2"
              size-lg="6"
              offset-lg="3"
              size-xl="4"
              offset-xl="4"
            >
              <FormTitle title="Forgot your password?" />
              {sentCode ? (
                <ChangePasswordForm
                  fieldVerCode={fieldVerCode}
                  fieldPass={fieldPass}
                  fieldPassConfirm={fieldPassConfirm}
                  changePasswordHandler={changePasswordHandler}
                />
              ) : (
                <SendVerificationCodeForm
                  fieldMail={fieldMail}
                  sendVerificationCodeHandler={sendVerificationCodeHandler}
                />
              )}
              <ResendVerificationCodeButton />
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default ForgotPasswordContent;
