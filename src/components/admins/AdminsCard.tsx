import {
  IonButton,
  IonCard,
  IonIcon,
  IonItem,
  IonLabel,
  useIonPopover,
} from "@ionic/react";
import {
  ellipsisHorizontal,
  ellipsisVertical,
  personCircleOutline,
} from "ionicons/icons";
import React from "react";
import AdminsMenu from "./AdminsMenu";

const AdminsCard: React.FC = () => {
  const [present, dismiss] = useIonPopover(AdminsMenu, {
    onHide: () => dismiss(),
  });
  return (
    <IonCard>
      <IonItem>
        <IonIcon icon={personCircleOutline} slot="start" />
        <IonLabel>
          Hugo Deloya{" "}
          <br/>
          <small>
            <i>alberto.deloya@gmail.com</i>
          </small>{" "}
        </IonLabel>
        <IonButton
          fill="clear"
          slot="end"
          onClick={(e) =>
            present({
              event: e.nativeEvent,
            })
          }
        >
          <IonIcon ios={ellipsisHorizontal} md={ellipsisVertical} />
        </IonButton>
      </IonItem>
    </IonCard>
  );
};

export default AdminsCard;
