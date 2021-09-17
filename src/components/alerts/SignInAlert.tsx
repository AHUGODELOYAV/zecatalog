import React from "react";
import { IonAlert } from "@ionic/react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import { authSelector } from "../../store/AuthSlice";

const SignInAlert: React.FC = () => {
  const { isAuthed, userProfile } = useSelector(authSelector);
  const history = useHistory();

  return (
    <IonAlert
      mode="ios"
      isOpen={isAuthed}
      header={"Success"}
      message={"Welcome " + userProfile.name + "!"}
      backdropDismiss={false}
      buttons={[
        {
          text: "Accept",
          handler: () => {
            history.push("/");
          },
        },
      ]}
    />
  );
};

export default SignInAlert;
