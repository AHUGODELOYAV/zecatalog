import React from "react";
import { IonAlert } from "@ionic/react";
import { useDispatch, useSelector } from "react-redux";
import { flagSelector, setError, setErrorMessage } from "../../store/FlagSlice";

const ErrorAlert: React.FC = () => {
  const dispatch = useDispatch();
  const { error, errorMessage } = useSelector(flagSelector);

  return (
    <IonAlert
      mode="ios"
      isOpen={error}
      header={"Error"}
      message={errorMessage}
      backdropDismiss={false}
      buttons={[
        {
          text: "Accept",
          handler: () => {
            dispatch(setError(false));
            dispatch(setErrorMessage(""));
          },
        },
      ]}
    />
  );
};

export default ErrorAlert;
