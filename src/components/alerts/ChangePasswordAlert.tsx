import React from "react";
import { IonAlert } from "@ionic/react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { flagSelector, setPasswordChanged } from "../../store/FlagSlice";

const ChangePasswordAlert: React.FC = () => {
  const { passwordChanged } = useSelector(flagSelector);
  const history = useHistory();
  const dispatch = useDispatch();

  return (
    <IonAlert
      mode="ios"
      isOpen={passwordChanged}
      header={"Success"}
      message={"Password has been changed"}
      backdropDismiss={false}
      buttons={[
        {
          text: "Accept",
          handler: () => {
            history.push("/signin");
            dispatch(setPasswordChanged(false));
          },
        },
      ]}
    />
  );
};

export default ChangePasswordAlert;
