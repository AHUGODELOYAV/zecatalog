import { useIonViewWillEnter } from "@ionic/react";
import React from "react";
import { useDispatch } from "react-redux";
import AdminsContent from "../../components/admins/AdminsContent";
import { getAdmins, resetAdmin } from "../../store/AdminSlice";

const AdminsPage: React.FC = () => {
  const dispatch = useDispatch();
  useIonViewWillEnter(() => {
    dispatch(resetAdmin());
    dispatch(getAdmins());
  });
  return <AdminsContent />;
};

export default AdminsPage;
