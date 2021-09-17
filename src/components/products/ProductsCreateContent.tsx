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
import { postProduct } from "../../store/ProductSlice";
import { fieldValidations } from "../../validations/FieldValidations";
import CreateProductAlert from "../alerts/CreateProductAlert";
import ErrorAlert from "../alerts/ErrorAlert";
import SignUpAlert from "../alerts/SignUpAlert";
import { TextFieldTypes } from "../global/field/Field";
import FormTitle from "../global/general/FormTitle";
import Loading from "../global/general/Loading";
import Toast from "../global/general/Toast";
import Toolbar from "../global/general/Toolbar";
import ProductsCreateForm from "./ProductsCreateForm";

const ProductsCreateContent: React.FC = () => {
  const { loading } = useSelector(flagSelector);
  const [toastMessage, setToastMessage] = useState("");
  const dispatch = useDispatch();

  const fieldSku = {
    label: "SKU",
    type: "text" as TextFieldTypes,
    value: useState(""),
    placeholder: "1234",
    error: useState(false),
    errorMessage: useState(""),
    isRequired: true,
    validationType: "text",
  };

  const fieldName = {
    label: "Name",
    type: "text" as TextFieldTypes,
    value: useState(""),
    placeholder: "Mattress",
    error: useState(false),
    errorMessage: useState(""),
    isRequired: true,
    validationType: "text",
  };

  const fieldPrice = {
    label: "Price",
    type: "number" as TextFieldTypes,
    value: useState(""),
    placeholder: "100",
    error: useState(false),
    errorMessage: useState(""),
    isRequired: true,
    validationType: "text",
  };

  const fieldBrand = {
    label: "Brand",
    type: "text" as TextFieldTypes,
    value: useState(""),
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
        postProduct({
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

  return (
    <IonPage>
      <Loading show={loading} />
      <Toast toastMessage={[toastMessage, setToastMessage]} />
      <ErrorAlert />
      <CreateProductAlert />
      <IonHeader>
        <Toolbar />
      </IonHeader>
      <IonContent className="ion-padding ion-text-center">
        <IonGrid fixed>
          <IonRow className="ion-align-items-center">
            <IonCol>
              <FormTitle title="Create Product" />
              <ProductsCreateForm
                fieldSku={fieldSku}
                fieldName={fieldName}
                fieldPrice={fieldPrice}
                fieldBrand={fieldBrand}
                isEdit={true}
                saveHandler={saveHandler}
                deleteHandler={()=>{}}                
              />
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default ProductsCreateContent;
