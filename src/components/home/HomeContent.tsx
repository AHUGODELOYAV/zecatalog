import {
  IonCol,
  IonContent,
  IonFab,
  IonFabButton,
  IonGrid,
  IonHeader,
  IonIcon,
  IonPage,
  IonRow,
  IonSearchbar,
} from "@ionic/react";
import { addOutline } from "ionicons/icons";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { authSelector } from "../../store/AuthSlice";
import { productSelector } from "../../store/ProductSlice";
import Toolbar from "../global/general/Toolbar";
import ProductsCard from "../products/ProductsCard";

const HomeContent: React.FC = () => {
  const { products } = useSelector(productSelector);
  const [searchText, setSearchText] = useState("");
  const { isAuthed } = useSelector(authSelector);

  return (
    <IonPage>
      <IonHeader>
        <Toolbar />
      </IonHeader>
      <IonContent>
        <IonGrid fixed>
          <IonRow>
            <IonCol>
              <IonSearchbar
                value={searchText}
                onIonChange={(e) => setSearchText(e.detail.value!)}
                placeholder="Product name"
                class="search-bar-color"
              />
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              {products
                .filter((product) =>
                  product.name.toLowerCase().includes(searchText.toLowerCase())
                )
                .map((product) => (
                  <ProductsCard key={product.sku} product={product} />
                ))}
            </IonCol>
          </IonRow>
        </IonGrid>
        {isAuthed && (
          <IonFab vertical="bottom" horizontal="end" slot="fixed">
            <IonFabButton color="secondary" routerLink="/productedit/0">
              <IonIcon icon={addOutline} />
            </IonFabButton>
          </IonFab>
        )}
      </IonContent>
    </IonPage>
  );
};

export default HomeContent;
