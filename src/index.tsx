import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import Amplify from "aws-amplify";
import aws_exports from "./aws-exports";
import { configureStore } from "@reduxjs/toolkit";
import flagSliceReducer from "./store/FlagSlice"

Amplify.configure(aws_exports);

const store = configureStore({
  reducer: {
    flagStore: flagSliceReducer,
  },
});

ReactDOM.render(
  <Provider store={store}>
  <App />
</Provider>,
document.getElementById("root")
);