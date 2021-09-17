import React from "react";
import { IonButton, IonIcon } from "@ionic/react";
import { exitOutline } from "ionicons/icons";
import { useDispatch } from "react-redux";
import { signOutAuth } from "../../../store/AuthSlice";

const SignOutButton: React.FC = () => {
  const dispatch = useDispatch();
  return (
    <IonButton color="secondary" onClick={() => dispatch(signOutAuth())}>
      <IonIcon slot="icon-only" icon={exitOutline} />
    </IonButton>
  );
};

export default SignOutButton;
