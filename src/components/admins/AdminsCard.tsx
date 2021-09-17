import { IonCard, IonIcon, IonItem, IonLabel, IonToggle } from "@ionic/react";
import { personCircleOutline } from "ionicons/icons";
import React from "react";
import { useDispatch } from "react-redux";
import { AdminObject, disableAdmin, enableAdmin } from "../../store/AdminSlice";

const AdminsCard: React.FC<{
  admin: AdminObject;
}> = (props) => {
  const dispatch = useDispatch();
  const enableDisableAdmin = () => {
    if (props.admin.enabled) {
      dispatch(disableAdmin({ userID: props.admin.userID }));
    } else {
      dispatch(enableAdmin({ userID: props.admin.userID }));
    }
  };
  return (
    <IonCard key={props.admin.userID.toString()}>
      <IonItem>
        <IonIcon icon={personCircleOutline} slot="start" />
        <IonLabel>
          {props.admin.name + " " + props.admin.family_name}
          <br />
          <small>
            <i>{props.admin.email}</i>
          </small>{" "}
        </IonLabel>
        <IonItem>
          <IonToggle
            color="secondary"
            checked={props.admin.enabled}
            onIonChange={() => enableDisableAdmin()}
          />
        </IonItem>
      </IonItem>
    </IonCard>
  );
};

export default AdminsCard;
