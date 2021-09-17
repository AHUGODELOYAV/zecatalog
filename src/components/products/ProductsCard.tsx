import { IonButton, IonCard, IonIcon, IonItem, IonLabel } from "@ionic/react";
import { createOutline, cubeOutline } from "ionicons/icons";
import React, { useState } from "react";
import { useHistory } from "react-router";
import { ProductObject } from "../../store/ProductSlice";

const ProductsCard: React.FC<{
  product: ProductObject;
}> = (props) => {
  const [viewMore, setViewMore] = useState(false);
  const history = useHistory();
  const viewMoreHandler = () => {
    if (viewMore) {
      setViewMore(false);
    } else {
      setViewMore(true);
    }
  };
  return (
    <IonCard>
      <IonItem>
        <IonIcon icon={cubeOutline} slot="start" />
        <IonLabel>{props.product.name}</IonLabel>
        <IonButton fill="outline" slot="end" onClick={viewMoreHandler}>
          View
        </IonButton>
        <IonButton
          fill="clear"
          slot="end"
          onClick={() => {
            history.push("/productedit/" + props.product.sku);
          }}
        >
          <IonIcon icon={createOutline} />
        </IonButton>
      </IonItem>
      {viewMore && (
        <IonItem>
          <small>
            <i>
              <strong>SKU:</strong>
              {" " + props.product.sku + " "}
              <strong>Brand:</strong>
              {" " + props.product.brand + " "}
              <strong>Price:</strong> ${props.product.price}
            </i>
          </small>
        </IonItem>
      )}
    </IonCard>
  );
};

export default ProductsCard;
