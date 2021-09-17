import {
  useIonViewDidEnter,
  useIonViewDidLeave,
  useIonViewWillEnter,
} from "@ionic/react";
import React from "react";
import { useDispatch } from "react-redux";
import HomeContent from "../../components/home/HomeContent";
import { getAllProducts } from "../../store/ProductSlice";
import { API, graphqlOperation } from "aws-amplify";
import {
  onCreateProduct,
  onDeleteProduct,
  onUpdateProduct,
} from "../../graphql/subscriptions";
import { Observable } from "zen-observable-ts";

const HomePage: React.FC = () => {
  const dispatch = useDispatch();
  let createProductListener: any;
  let updateProductListener: any;
  let deleteProductListener: any;

  useIonViewWillEnter(() => {
    dispatch(getAllProducts());
  });

  useIonViewDidEnter(() => {
    const onCreateSubClient = API.graphql(
      graphqlOperation(onCreateProduct)
    ) as Observable<object>;

    createProductListener = onCreateSubClient.subscribe({
      next: () => {
        dispatch(getAllProducts());
      },
      error: (error) => console.warn(error),
    });

    const onUpdateSubClient = API.graphql(
      graphqlOperation(onUpdateProduct)
    ) as Observable<object>;

    updateProductListener = onUpdateSubClient.subscribe({
      next: () => {
        dispatch(getAllProducts());
      },
    });

    const onDeleteSubClient = API.graphql(
      graphqlOperation(onDeleteProduct)
    ) as Observable<object>;

    deleteProductListener = onDeleteSubClient.subscribe({
      next: () => {
        dispatch(getAllProducts());
      },
    });
  });

  useIonViewDidLeave(() => {
    createProductListener.unsubscribe();
    updateProductListener.unsubscribe();
    deleteProductListener.unsubscribe();
  });
  return <HomeContent />;
};

export default HomePage;
