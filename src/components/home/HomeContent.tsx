import {
  IonButton,
  IonButtons,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCol,
  IonContent,
  IonFab,
  IonFabButton,
  IonGrid,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonPage,
  IonRow,
} from "@ionic/react";
import {
    addOutline,
  createOutline,
  cubeOutline,
  ellipsisHorizontal,
  ellipsisVertical,
  pin,
  trashOutline,
  walk,
  warning,
  wifi,
  wine,
} from "ionicons/icons";
import React from "react";
import Toolbar from "../global/general/Toolbar";
import ProductsCard from "../products/ProductsCard";

const HomeContent: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <Toolbar />
      </IonHeader>
      <IonContent>
        <IonGrid fixed>
          <IonRow>
            <IonCol>
            <ProductsCard />
            <ProductsCard />
            </IonCol>
          </IonRow>
        </IonGrid>
        <IonFab vertical="bottom" horizontal="end" slot="fixed">
      <IonFabButton color="secondary"><IonIcon icon={addOutline} /></IonFabButton>
    </IonFab>
      </IonContent>
    </IonPage>
  );
};

export default HomeContent;
