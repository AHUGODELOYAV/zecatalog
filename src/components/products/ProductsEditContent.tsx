import {
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonPage,
  IonRow,
} from "@ionic/react";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { flagSelector } from "../../store/FlagSlice";
import {
  editProduct,
  productSelector,
  removeProduct,
} from "../../store/ProductSlice";
import { fieldValidations } from "../../validations/FieldValidations";
import DeleteProductAlert from "../alerts/DeleteProductAlert";
import ErrorAlert from "../alerts/ErrorAlert";
import SignUpAlert from "../alerts/SignUpAlert";
import UpdateProductAlert from "../alerts/UpdateProductAlert";
import WarningAlert from "../alerts/WarningAlert";
import { TextFieldTypes } from "../global/field/Field";
import FormTitle from "../global/general/FormTitle";
import Loading from "../global/general/Loading";
import Toast from "../global/general/Toast";
import Toolbar from "../global/general/Toolbar";
import ProductsCreateForm from "./ProductsCreateForm";

const ProductsEditContent: React.FC = () => {
  const { loading } = useSelector(flagSelector);
  const [toastMessage, setToastMessage] = useState("");
  const dispatch = useDispatch();
  const { actualProduct } = useSelector(productSelector);
  const [deleteProduct, setDeleteProduct] = useState(false);

  const fieldSku = {
    label: "SKU",
    type: "text" as TextFieldTypes,
    value: useState(actualProduct.sku),
    placeholder: "1234",
    error: useState(false),
    errorMessage: useState(""),
    isRequired: true,
    validationType: "text",
  };

  const fieldName = {
    label: "Name",
    type: "text" as TextFieldTypes,
    value: useState(actualProduct.name),
    placeholder: "Mattress",
    error: useState(false),
    errorMessage: useState(""),
    isRequired: true,
    validationType: "text",
  };

  const fieldPrice = {
    label: "Price",
    type: "number" as TextFieldTypes,
    value: useState(actualProduct.price),
    placeholder: "100",
    error: useState(false),
    errorMessage: useState(""),
    isRequired: true,
    validationType: "text",
  };

  const fieldBrand = {
    label: "Brand",
    type: "text" as TextFieldTypes,
    value: useState(actualProduct.brand),
    placeholder: "Luuna",
    error: useState(false),
    errorMessage: useState(""),
    isRequired: true,
    validationType: "text",
  };

  const saveHandler = () => {
    const fieldValidation = [
      fieldValidations(fieldSku),
      fieldValidations(fieldName),
      fieldValidations(fieldPrice),
      fieldValidations(fieldBrand),
    ];
    if (!fieldValidation.includes(true)) {
      dispatch(
        editProduct({
          sku: fieldSku.value[0].toString(),
          name: fieldName.value[0].toString(),
          price: fieldPrice.value[0].toString(),
          brand: fieldBrand.value[0].toString(),
        })
      );
    } else {
      setToastMessage("Please review the highlighted fields");
    }
  };

  const deleteHandler = () => {
    setDeleteProduct(true);
  };
  const acceptHandler = () => {
    setDeleteProduct(false);
    dispatch(removeProduct({ sku: fieldSku.value[0].toString() }));
  };
  const cancelHandler = () => {
    setDeleteProduct(false);
  };
  return (
    <IonPage>
      <Loading show={loading} />
      <Toast toastMessage={[toastMessage, setToastMessage]} />
      <WarningAlert
        show={[deleteProduct, setDeleteProduct]}
        action="delete"
        name={"SKU: " + fieldSku.value[0]}
        accept={acceptHandler}
        cancel={cancelHandler}
      />
      <DeleteProductAlert />
      <ErrorAlert />
      <UpdateProductAlert />
      <IonHeader>
        <Toolbar />
      </IonHeader>
      <IonContent className="ion-padding ion-text-center">
        <IonGrid fixed>
          <IonRow className="ion-align-items-center">
            <IonCol>
              <FormTitle title="Edit Product" />
              <ProductsCreateForm
                fieldSku={fieldSku}
                fieldName={fieldName}
                fieldPrice={fieldPrice}
                fieldBrand={fieldBrand}
                isEdit={true}
                saveHandler={saveHandler}
                deleteHandler={deleteHandler}
              />
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default ProductsEditContent;
