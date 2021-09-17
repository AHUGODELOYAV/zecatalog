import React from "react";
import { IonAlert } from "@ionic/react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { flagSelector, setIsAdminsPage, setWasUpdated } from "../../store/FlagSlice";

const UpdateAdminAlert: React.FC = () => {
  const { wasUpdated } = useSelector(flagSelector);
  const history = useHistory();
  const dispatch = useDispatch();

  return (
    <IonAlert
      mode="ios"
      isOpen={wasUpdated}
      header={"Success"}
      message={"Admin status updated"}
      backdropDismiss={false}
      buttons={[
        {
          text: "Accept",
          handler: () => {
            dispatch(setWasUpdated(false));
            dispatch(setIsAdminsPage(false))
            history.push("/");
          },
        },
      ]}
    />
  );
};

export default UpdateAdminAlert;
