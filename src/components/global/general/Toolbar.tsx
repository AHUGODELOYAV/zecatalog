import React from "react";
import { IonToolbar, IonTitle, IonButtons } from "@ionic/react";
import { useSelector } from "react-redux";
import { flagSelector } from "../../../store/FlagSlice";
import SignOutButton from "../buttons/SignOutButton";
import SignInButton from "../buttons/SignInButton";

const Toolbar: React.FC = () => {
  const { isAuthed } = useSelector(flagSelector);
  return (
    <React.Fragment>
      <IonToolbar color="dark">
        <IonButtons slot="secondary">
          {isAuthed ? <SignOutButton /> : <SignInButton />}
        </IonButtons>
        <IonTitle>ZeCatalog</IonTitle>
      </IonToolbar>
    </React.Fragment>
  );
};

export default Toolbar;
