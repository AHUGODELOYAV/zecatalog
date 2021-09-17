import React from "react";
import { IonAlert } from "@ionic/react";
import { useDispatch, useSelector } from "react-redux";
import { flagSelector, setWasUpdated } from "../../store/FlagSlice";
import { useHistory } from "react-router";

const UpdateProductAlert: React.FC = () => {
  const dispatch = useDispatch();
  const { wasUpdated } = useSelector(flagSelector);
  const history = useHistory();

  return (
    <IonAlert
      mode="ios"
      isOpen={wasUpdated}
      header={"Success"}
      message={"Product updated!"}
      backdropDismiss={false}
      buttons={[
        {
          text: "Accept",
          handler: () => {
            dispatch(setWasUpdated(false));
            history.push("/");
          },
        },
      ]}
    />
  );
};

export default UpdateProductAlert;
