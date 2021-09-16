import React, { useState } from "react";
import { IonButton, IonIcon, IonLabel } from "@ionic/react";
import { homeOutline, peopleCircleOutline } from "ionicons/icons";
import { useHistory } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { flagSelector, setIsAdminsPage } from "../../../store/FlagSlice";

const AdminsButton: React.FC = () => {
  const history = useHistory();
  const {adminsPage} = useSelector(flagSelector)
  const dispatch = useDispatch();
  const onClickHandler = () => {
    if (adminsPage) {
      dispatch(setIsAdminsPage(false));
      history.push("/home");
    } else {
      dispatch(setIsAdminsPage(true));
      history.push("/admins");
    }
  };
  return (
    <IonButton color="secondary" onClick={onClickHandler}>
      <IonIcon icon={adminsPage ? homeOutline : peopleCircleOutline} />
      <IonLabel className="ion-margin-start">
        {adminsPage ? "" : "Admins"}
      </IonLabel>
    </IonButton>
  );
};

export default AdminsButton;
