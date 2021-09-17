import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import Amplify from "aws-amplify";
import aws_exports from "./aws-exports";
import { ThunkAction } from "redux-thunk";
import { Action, configureStore } from "@reduxjs/toolkit";
import flagSliceReducer from "./store/FlagSlice";
import authSliceReducer, { AuthState } from "./store/AuthSlice";
import productSliceReducer, { ProductState } from "./store/ProductSlice";
import adminSliceReducer, { AdminState } from "./store/AdminSlice";

Amplify.configure(aws_exports);

export type AuthThunk = ThunkAction<void, AuthState, unknown, Action<string>>;
export type AdminThunk = ThunkAction<void, AdminState, unknown, Action<string>>;
export type ProductThunk = ThunkAction<
  void,
  ProductState,
  unknown,
  Action<string>
>;

const store = configureStore({
  reducer: {
    flagStore: flagSliceReducer,
    authStore: authSliceReducer,
    productStore: productSliceReducer,
    adminStore: adminSliceReducer,
  },
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
