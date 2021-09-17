import React from "react";
import {IonLoading } from "@ionic/react";
import './Loading.css';

const Loading: React.FC<{
  show: boolean;
}> = (props) => {
  return (
    <IonLoading
      mode="ios"
      cssClass="loading-spinner"
      isOpen={props.show}
      message={"Loading... Please wait"}
    />
  );
};

export default Loading;
