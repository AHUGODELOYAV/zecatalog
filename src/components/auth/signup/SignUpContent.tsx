import {
  IonButton,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonPage,
  IonRouterLink,
  IonRow,
  IonText,
} from "@ionic/react";
import React, { useState } from "react";
import Field, { TextFieldTypes } from "../../global/field/Field";
import Toolbar from "../../global/general/Toolbar";

const SignUpContent: React.FC = () => {
  const fieldName = {
    label: "Nombre(s)",
    type: "text" as TextFieldTypes, //"text" | "password" | "email" | "number" | "search" | "tel" | "url"
    value: useState(""),
    placeholder: "Ej: Luis Alejandro",
    error: useState(false),
    errorMessage: useState(""),
    isRequired: true,
    validationType: "text", //"email" | "password" | "text" | "tel"
  };

  const fieldLastName = {
    label: "Apellido(s)",
    type: "text" as TextFieldTypes, //"text" | "password" | "email" | "number" | "search" | "tel" | "url"
    value: useState(""),
    placeholder: "Ej: Mendoza Guevara",
    error: useState(false),
    errorMessage: useState(""),
    isRequired: true,
    validationType: "text", //"email" | "password" | "text" | "tel"
  };

  const fieldPhone = {
    label: "Teléfono celular (Clave de país + 10 dígitos)",
    type: "number" as TextFieldTypes, //"text" | "password" | "email" | "number" | "search" | "tel" | "url"
    value: useState(""),
    placeholder: "Ej: 522225636193",
    error: useState(false),
    errorMessage: useState(""),
    isRequired: true,
    validationType: "phone", //"email" | "password" | "text" | "tel"
  };

  const fieldEmail = {
    label: "Correo electrónico",
    type: "email" as TextFieldTypes, //"text" | "password" | "email" | "number" | "search" | "tel" | "url"
    value: useState(""),
    placeholder: "Ej: nombre@mail.com",
    error: useState(false),
    errorMessage: useState(""),
    isRequired: true,
    validationType: "email", //"email" | "password" | "text" | "tel"
  };

  const fieldPass = {
    label: "Contraseña",
    type: "password" as TextFieldTypes, //"text" | "password" | "email" | "number" | "search" | "tel" | "url"
    value: useState(""),
    placeholder: "",
    error: useState(false),
    errorMessage: useState(""),
    isRequired: true,
    validationType: "text", //"email" | "password" | "text" | "tel"
  };

  const fieldPassConfirm = {
    label: "Confirmar contraseña",
    type: "password" as TextFieldTypes, //"text" | "password" | "email" | "number" | "search" | "tel" | "url"
    value: useState(""),
    placeholder: "",
    error: useState(false),
    errorMessage: useState(""),
    isRequired: true,
    validationType: "password", //"email" | "password" | "text" | "tel"
  };

  const formHandler = () => {
    // const fieldValidation = [
    //   fieldValidations(fieldName),
    //   fieldValidations(fieldLastName),
    //   fieldValidations(fieldPhone),
    //   fieldValidations(fieldEmail),

    //   fieldValidationsCompare(
    //     fieldPass,
    //     fieldPassConfirm,
    //     "Las contraseñas no coinciden"
    //   ),
    //   fieldValidations(fieldPass),
    //   fieldValidations(fieldPassConfirm),
    // ];
    // if (fieldValidation.includes(true)) {
    //   setToastMessage("Hubo algún error en el formulario");
    //   setShowToast(true);
    // } else {


    //   const profileInfo = {
    //     name: fieldName.value[0].toString(),
    //     lastName: fieldLastName.value[0].toString(),
    //     phoneNumber: fieldPhone.value[0].toString(),
    //     email: fieldEmail.value[0].toString(),
    //     role: "Cliente",
    //     avatar: "avatar",
    //     status: "ACTIVO",
    //     termsandconditions: true,
    //   };


    //   dispatch(
    //     signUpAuth(
    //       {
    //         username: fieldEmail.value[0].toString(),
    //         password: fieldPass.value[0].toString(),
    //         attributes: {
    //           email: fieldEmail.value[0].toString(),
    //           phone_number: "+"+fieldPhone.value[0].toString(),
    //         },
    //       },
    //       profileInfo
    //     )
    //   );
    // }
  };

  return (
    <IonPage>
      <IonHeader>
        <Toolbar />
      </IonHeader>
      <IonContent className="ion-padding" id="theContent">
        <IonGrid fixed>
          <IonRow>
            <IonCol>
            <IonRow className="ion-margin-bottom">
                      <IonCol>
                        <Field dataField={fieldName} />
                      </IonCol>
                    </IonRow>
                    <IonRow className="ion-margin-bottom">
                      <IonCol>
                        <Field dataField={fieldLastName} />
                      </IonCol>
                    </IonRow>
                    <IonRow className="ion-margin-bottom">
                      <IonCol>
                        <Field dataField={fieldPhone} />
                      </IonCol>
                    </IonRow>
                    <IonRow className="ion-margin-bottom">
                      <IonCol>
                        <Field dataField={fieldEmail} />
                      </IonCol>
                    </IonRow>
                    <IonRow className="ion-margin-bottom">
                      <IonCol>
                        <Field dataField={fieldPass} />
                      </IonCol>
                    </IonRow>
                    <IonRow className="ion-margin-bottom">
                      <IonCol>
                        <Field dataField={fieldPassConfirm} />
                      </IonCol>
                    </IonRow>
                    <IonRow className="ion-margin-bottom">
                      <IonCol>
                        <IonText color="medium">
                          Al registrarte aceptas los
                          <IonRouterLink
                            className="cursor-pointer"
                            onClick={() => {
                              //setTermsAndConditions(true);
                            }}
                          >
                            {" "}
                            <u>Términos y Condiciones</u>{" "}
                          </IonRouterLink>
                          y la
                          <IonRouterLink
                            className="cursor-pointer"
                            onClick={() => {
                              //setPrivacyAndPolicy(true);
                            }}
                          >
                            {" "}
                            <u>Política de Privacidad</u>{" "}
                          </IonRouterLink>
                        </IonText>
                      </IonCol>
                    </IonRow>
                    <IonRow>
                      <IonCol>
                        <IonButton expand="block" onClick={formHandler}>
                          Crear cuenta
                        </IonButton>
                      </IonCol>
                    </IonRow>
                    <IonRow>
                      <IonCol className="ion-text-center">
                        <IonButton
                          mode="ios"
                          fill="clear"
                          color="medium"
                          routerLink="/signin"
                        >
                          <div className="link-bttn">Iniciar sesión</div>
                        </IonButton>
                      </IonCol>
                    </IonRow>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default SignUpContent;
