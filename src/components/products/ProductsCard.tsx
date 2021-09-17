import { IonButton, IonCard, IonIcon, IonItem, IonLabel } from "@ionic/react";
import { createOutline, cubeOutline } from "ionicons/icons";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { authSelector } from "../../store/AuthSlice";
import { postProductLog, ProductObject, setActualProduct } from "../../store/ProductSlice";

const ProductsCard: React.FC<{
  product: ProductObject;
}> = (props) => {
  const [viewMore, setViewMore] = useState(false);
  const history = useHistory();
  const dispatch = useDispatch();
  const { isAuthed } = useSelector(authSelector);
  const viewMoreHandler = () => {
    if (viewMore) {
      setViewMore(false);
    } else {
      dispatch(postProductLog({productSKU:props.product.sku}))
      setViewMore(true);
    }
  };
  return (
    <IonCard>
      <IonItem>
        <IonIcon icon={cubeOutline} slot="start" />
        <IonLabel>{props.product.name}</IonLabel>
        {!isAuthed && (
          <IonButton fill="outline" slot="end" onClick={viewMoreHandler}>
            View
          </IonButton>
        )}
        {isAuthed && (
          <IonButton
            fill="clear"
            slot="end"
            onClick={() => {
              dispatch(setActualProduct(props.product));
              history.push("/productedit/" + props.product.sku);
            }}
          >
            <IonIcon icon={createOutline} />
          </IonButton>
        )}
      </IonItem>
      {(viewMore || isAuthed) && (
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
