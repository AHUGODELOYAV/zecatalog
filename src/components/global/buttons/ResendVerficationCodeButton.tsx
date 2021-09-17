import React from "react";
import { IonButton, IonCol, IonRow } from "@ionic/react";
import { useDispatch, useSelector } from "react-redux";
import { flagSelector, setCodeSended } from "../../../store/FlagSlice";

const ResendVerificationCodeButton: React.FC = () => {
  const dispatch = useDispatch();
  const {codeSended} = useSelector(flagSelector)
  return (
    <IonRow>
      <IonCol>
        {codeSended && (
          <IonButton
            color="secondary"
            fill="clear"
            onClick={() => dispatch(setCodeSended(false))}
          >
            Resend Verification Code
          </IonButton>
        )}
      </IonCol>
    </IonRow>
  );
};

export default ResendVerificationCodeButton;
