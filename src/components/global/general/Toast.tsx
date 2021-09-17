import React, { Dispatch, SetStateAction } from "react";
import { IonToast } from "@ionic/react";

const Toast: React.FC<{
  toastMessage: [string, Dispatch<SetStateAction<string>>];
}> = (props) => {
  return (
    <IonToast
      isOpen={!!props.toastMessage[0]}
      message={props.toastMessage[0]}
      duration={3000}
      onDidDismiss={() => props.toastMessage[1]("")}
      position="bottom"
    />
  );
};

export default Toast;
