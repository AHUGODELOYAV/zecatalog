import { IonButton, IonCol, IonGrid, IonRow, IonText } from "@ionic/react";
import React from "react";
import { useHistory } from "react-router";
import Field, { FieldObject } from "../global/field/Field";

const ProductsEditForm: React.FC<{
  fieldSku: FieldObject;
  fieldName: FieldObject;
  fieldPrice: FieldObject;
  fieldBrand: FieldObject;
  isEdit: boolean;
  saveHandler: () => void;
  deleteHandler: () => void;
}> = (props) => {
  const history = useHistory();
  return (
    <IonGrid className="ion-no-padding ion-text-left">
      <IonRow>
        <IonCol
          size-xs="12"
          size-sm="10"
          offset-sm="1"
          size-md="6"
          offset-md="3"
          size-lg="5"
          offset-lg="3.5"
          size-xl="5"
          offset-xl="3.5"
        >
          {props.isEdit ? (
            <IonRow className="ion-margin-bottom">
              <IonCol>
                <IonText color="primary">
                  <h4>
                    <i>{"SKU: " + props.fieldSku.value[0]}</i>
                  </h4>
                </IonText>
              </IonCol>
            </IonRow>
          ) : (
            <IonRow className="ion-margin-bottom">
              <IonCol>
                <Field dataField={props.fieldSku} />
              </IonCol>
            </IonRow>
          )}
          <IonRow className="ion-margin-bottom">
            <IonCol>
              <Field dataField={props.fieldName} />
            </IonCol>
          </IonRow>
          <IonRow className="ion-margin-bottom">
            <IonCol>
              <Field dataField={props.fieldPrice} />
            </IonCol>
          </IonRow>
          <IonRow className="ion-margin-bottom">
            <IonCol>
              <Field dataField={props.fieldBrand} />
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonButton expand="block" onClick={props.saveHandler}>
                Save
              </IonButton>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonButton
                fill="outline"
                expand="block"
                onClick={() => {
                  history.push("/");
                }}
              >
                Cancel
              </IonButton>
            </IonCol>
          </IonRow>
          {props.isEdit && (
            <IonRow>
              <IonCol>
                <IonButton
                  color="danger"
                  fill="clear"
                  expand="block"
                  onClick={props.deleteHandler}
                >
                  Delete
                </IonButton>
              </IonCol>
            </IonRow>
          )}
        </IonCol>
      </IonRow>
    </IonGrid>
  );
};

export default ProductsEditForm;
