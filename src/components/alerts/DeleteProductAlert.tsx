import React from "react";
import { IonAlert } from "@ionic/react";
import { useDispatch, useSelector } from "react-redux";
import { flagSelector, setWasDeleted } from "../../store/FlagSlice";
import { useHistory } from "react-router";

const DeleteProductAlert: React.FC = () => {
  const dispatch = useDispatch();
  const { wasDeleted } = useSelector(flagSelector);
  const history = useHistory();

  return (
    <IonAlert
      mode="ios"
      isOpen={wasDeleted}
      header={"Success"}
      message={"Product deleted!"}
      backdropDismiss={false}
      buttons={[
        {
          text: "Accept",
          handler: () => {
            dispatch(setWasDeleted(false));
            history.push("/");
          },
        },
      ]}
    />
  );
};

export default DeleteProductAlert;
