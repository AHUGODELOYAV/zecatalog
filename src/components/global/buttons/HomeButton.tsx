import React from "react";
import { IonButton, IonIcon, IonLabel } from "@ionic/react";
import { homeOutline } from "ionicons/icons";
import { useHistory } from "react-router";

const HomeButton: React.FC = () => {
  const history = useHistory();
  return (
    <IonButton color="secondary">
      <IonIcon icon={homeOutline} />
      <IonLabel
        className="ion-margin-start"
        onClick={() => history.push("/")}
      >
        Admins
      </IonLabel>
    </IonButton>
  );
};

export default HomeButton;
