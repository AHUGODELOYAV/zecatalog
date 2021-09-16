import { IonButton, IonCard, IonIcon, IonItem, IonLabel, useIonPopover } from "@ionic/react";
import {
  cubeOutline,
  ellipsisHorizontal,
  ellipsisVertical,
} from "ionicons/icons";
import React, { useState } from "react";
import ProductMenu from "./ProductsMenu";

const ProductsCard: React.FC = () => {
    const [viewMore, setViewMore] = useState(false);
    const [present, dismiss] = useIonPopover(ProductMenu, { onHide: () => dismiss() });

    const viewMoreHandler = () => {
        if(viewMore){
            setViewMore(false)
        }else{
            setViewMore(true)
        }
    }
  return (
    <IonCard>
      <IonItem>
        <IonIcon icon={cubeOutline} slot="start" />
        <IonLabel>Product name </IonLabel>
        <IonButton fill="outline" slot="end" onClick={viewMoreHandler}>
          View
        </IonButton>
        <IonButton fill="clear" slot="end" onClick={(e) =>
            present({
              event: e.nativeEvent,
            })
          }>
          <IonIcon ios={ellipsisHorizontal} md={ellipsisVertical} />
        </IonButton>
      </IonItem>
      {viewMore && <IonItem>
        <small>
          <i><strong>SKU:</strong> 123456 <strong>Brand:</strong> Zebrands <strong>Price:</strong> $100</i>
        </small>
      </IonItem>}
    </IonCard>
  );
};

export default ProductsCard;
