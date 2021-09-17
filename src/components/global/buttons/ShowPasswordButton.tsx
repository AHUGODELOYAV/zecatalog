import React, { Dispatch, SetStateAction } from "react";
import { IonButton, IonIcon } from "@ionic/react";
import { eyeOffOutline, eyeOutline } from "ionicons/icons";

const ShowPasswordButton: React.FC<{
  showPass: [boolean, Dispatch<SetStateAction<boolean>>];
}> = (props) => {
  return (
    <IonButton
      fill="clear"
      onClick={() => {
        props.showPass[0] ? props.showPass[1](false) : props.showPass[1](true);
      }}
    >
      <IonIcon
        slot="icon-only"
        icon={props.showPass[0] ? eyeOffOutline : eyeOutline}
      />
    </IonButton>
  );
};

export default ShowPasswordButton;
