import React from 'react';
import {
  IonItem,
  IonList,
} from '@ionic/react';

const ProductsMenu: React.FC<{
  onHide: () => void;
}> = ({ onHide }) => (
  <IonList mode="ios">
    <IonItem button>Edit</IonItem>
    <IonItem button>Delete</IonItem>
    <IonItem lines="none" detail={false} button onClick={onHide}>
      Close
    </IonItem>
  </IonList>
);

export default ProductsMenu