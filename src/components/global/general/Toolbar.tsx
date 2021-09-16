import React from "react";
import { IonToolbar, IonTitle, IonButtons } from "@ionic/react";
import { useSelector } from "react-redux";
import { flagSelector } from "../../../store/FlagSlice";
import SignOutButton from "../buttons/SignOutButton";
import SignInButton from "../buttons/SignInButton";
import AdminsButton from "../buttons/AdminsButton";

const Toolbar: React.FC = () => {
  const { isAuthed } = useSelector(flagSelector);
  return (
    <React.Fragment>
      <IonToolbar mode="ios" color="dark">
        {isAuthed && (
          <IonButtons slot="start">
            <AdminsButton />
          </IonButtons>
        )}
        <IonTitle>ZeCatalog</IonTitle>
        <IonButtons slot="end">
          {isAuthed ? <SignOutButton /> : <SignInButton />}
        </IonButtons>
      </IonToolbar>
    </React.Fragment>
  );
};

export default Toolbar;
