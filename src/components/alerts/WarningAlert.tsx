import React, { Dispatch, SetStateAction } from "react";
import { IonAlert } from "@ionic/react";

const WarningAlert: React.FC<{
  show: [boolean, Dispatch<SetStateAction<boolean>>];
  action: string;
  name: string;
  accept: () => void;
  cancel: () => void;
}> = (props) => {
  return (
    <IonAlert
      mode="ios"
      isOpen={props.show[0]}
      onDidDismiss={() => props.show[1](false)}
      header={"Warning"}
      message={"Are you sure of " + props.action + " " + props.name + "?"}
      backdropDismiss={false}
      buttons={[
        {
          text: "Accept",
          handler: props.accept,
        },
        {
          text: "Cancel",
          role: "cancel",
          cssClass: "secondary",
          handler: props.cancel,
        },
      ]}
    />
  );
};

export default WarningAlert;
