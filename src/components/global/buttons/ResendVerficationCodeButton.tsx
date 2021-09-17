import React from "react";
import { IonButton, IonCol, IonRow } from "@ionic/react";
import { useDispatch, useSelector } from "react-redux";
import { flagSelector, setSentCode } from "../../../store/FlagSlice";

const ResendVerificationCodeButton: React.FC = () => {
  const dispatch = useDispatch();
  const { sentCode } = useSelector(flagSelector);
  return (
    <IonRow>
      <IonCol>
        {sentCode && (
          <IonButton
            color="secondary"
            fill="clear"
            onClick={() => dispatch(setSentCode(false))}
          >
            Resend Verification Code
          </IonButton>
        )}
      </IonCol>
    </IonRow>
  );
};

export default ResendVerificationCodeButton;
