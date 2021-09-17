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
import { adminSelector } from "../../store/AdminSlice";
import { flagSelector } from "../../store/FlagSlice";
import ErrorAlert from "../alerts/ErrorAlert";
import UpdateAdminAlert from "../alerts/UpdateAdminAlert";
import Loading from "../global/general/Loading";
import Toolbar from "../global/general/Toolbar";
import AdminsCard from "./AdminsCard";

const AdminsContent: React.FC = () => {
  const [searchText, setSearchText] = useState("");
  const { loading } = useSelector(flagSelector);
  const { admins } = useSelector(adminSelector);
  return (
    <IonPage>
      <Loading show={loading} />
      <UpdateAdminAlert />
      <ErrorAlert />
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
                placeholder="Email"
                class="search-bar-color"
              />
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              {admins
                .filter((admin) =>
                  admin.email
                    .toLowerCase()
                    .includes(searchText.toLowerCase())
                )
                .map((admin) => (
                  <AdminsCard
                    key={admin.userID}
                    admin={admin}
                  />
                ))}
            </IonCol>
          </IonRow>
        </IonGrid>
        <IonFab vertical="bottom" horizontal="end" slot="fixed">
          <IonFabButton color="secondary" routerLink={"/signup"}>
            <IonIcon icon={addOutline} />
          </IonFabButton>
        </IonFab>
      </IonContent>
    </IonPage>
  );
};

export default AdminsContent;
