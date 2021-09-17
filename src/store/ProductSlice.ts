import { API, graphqlOperation } from "aws-amplify";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProductThunk } from "../index";
import {
  setError,
  setErrorMessage,
  setLoading,
  setWasCreated,
  setWasDeleted,
  setWasUpdated,
} from "./FlagSlice";
import {
  createProduct,
  deleteProduct,
  updateProduct,
} from "../graphql/mutations";
import { listProducts } from "../graphql/queries";

export interface ProductState {
  product: ProductObject[];
  actualProduct: ProductObject;
}

export interface ProductObject {
  sku: string;
  name: string;
  price: number;
  brand: string;
}

const initialState: ProductState = {
  product: [],
  actualProduct: {
    sku: "",
    name: "",
    price: 0.0,
    brand: "",
  },
};

const product = createSlice({
  name: "product",
  initialState,
  reducers: {
    setProducts(state, { payload }: PayloadAction<ProductObject[]>) {
      state.product = payload;
    },
    setActualProduct(state, { payload }: PayloadAction<ProductObject>) {
      state.actualProduct = payload;
    },
    cleanProduct(state) {
      state.product = [];
    },
  },
});

export const { setProducts, setActualProduct, cleanProduct } = product.actions;

export default product.reducer;

export const productSelector = (state: { productStore: ProductState }) =>
  state.productStore;

export const postProduct = (input: any): ProductThunk => {
  return async (dispatch: any) => {
    try {
      dispatch(setLoading(true));
      await API.graphql(graphqlOperation(createProduct, { input }));
      dispatch(setWasCreated(true));
      dispatch(setLoading(false));
    } catch (error) {
      dispatch(setLoading(false));
      dispatch(setErrorMessage(String(error)));
      dispatch(setError(true));
    }
  };
};

export const getAllProducts = (): ProductThunk => async (dispatch: any) => {
  try {
    dispatch(setLoading(true));
    const res: any = await API.graphql(graphqlOperation(listProducts, {}));
    dispatch(setProducts(res.data.listProducts.items));
    dispatch(setLoading(false));
  } catch (error) {
    dispatch(setLoading(false));
    dispatch(setErrorMessage(String(error)));
    dispatch(setError(true));
  }
};

export const editProduct = (input: any): ProductThunk => {
  return async (dispatch: any) => {
    try {
      dispatch(setLoading(true));
      await API.graphql(graphqlOperation(updateProduct, { input }));
      dispatch(setLoading(false));
      dispatch(setWasUpdated(true));
    } catch (error) {
      dispatch(setLoading(false));
      dispatch(setErrorMessage(String(error)));
      dispatch(setError(true));
    }
  };
};

export const removeProduct = (input: any): ProductThunk => {
  return async (dispatch: any) => {
    try {
      dispatch(setLoading(true));
      await API.graphql(graphqlOperation(deleteProduct, { input }));
      dispatch(setLoading(false));
      dispatch(setWasDeleted(true));
    } catch (error) {
      dispatch(setLoading(false));
      dispatch(setErrorMessage(String(error)));
      dispatch(setError(true));
    }
  };
};
