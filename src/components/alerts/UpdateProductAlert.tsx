import React from "react";
import { IonAlert } from "@ionic/react";
import { useDispatch, useSelector } from "react-redux";
import { flagSelector, setWasCreated } from "../../store/FlagSlice";
import { useHistory } from "react-router";

const CreateProductAlert: React.FC = () => {
  const dispatch = useDispatch();
  const { wasCreated } = useSelector(flagSelector);
  const history = useHistory();

  return (
    <IonAlert
      mode="ios"
      isOpen={wasCreated}
      header={"Success"}
      message={"Product updated!"}
      backdropDismiss={false}
      buttons={[
        {
          text: "Accept",
          handler: () => {
            dispatch(setWasCreated(false));
            history.push("/");
          },
        },
      ]}
    />
  );
};

export default CreateProductAlert;
