import { Redirect, Route } from "react-router-dom";
import { IonApp, IonRouterOutlet } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";

/* Pages */
import SignUpPage from "./pages/auth/SignUpPage";
import HomePage from "./pages/home/HomePage";
import AdminsPage from "./pages/admins/AdminsPage";
import SignInPage from "./pages/auth/SignInPage";
import ForgotPasswordPage from "./pages/auth/ForgotPasswordPage";
import { useDispatch, useSelector } from "react-redux";
import { authSelector, setIsAuthed, setUserProfile } from "./store/AuthSlice";
import { useEffect } from "react";
import { Auth } from "aws-amplify";
import ProductsEditPage from "./pages/products/ProductsEditPage";

const App: React.FC = () => {
  const dispatch = useDispatch();
  const { isAuthed } = useSelector(authSelector);

  useEffect(() => {
    getUser().then(async (userData) => {
      if (userData) {
        const userProfile = {
          name: userData.attributes.name,
          lastname: userData.attributes.family_name,
          email: userData.attributes.email,
        };
        dispatch(setUserProfile(userProfile));
        dispatch(setIsAuthed(true));
      }
    });
  }, []);

  function getUser() {
    return Auth.currentAuthenticatedUser().then((userData) => userData);
  }

  return (
    <IonApp>
      <IonReactRouter>
        <IonRouterOutlet>
          <Route
            exact
            path="/signup"
            render={() => {
              return isAuthed ? <SignUpPage /> : <Redirect to="/" />;
            }}
          />
          <Route
            exact
            path="/admins"
            render={() => {
              return isAuthed ? <AdminsPage /> : <Redirect to="/" />;
            }}
          />
          <Route
            exact
            path="/productedit/:productID"
            render={() => {
              return isAuthed ? <ProductsEditPage /> : <Redirect to="/" />;
            }}
          />
          <Route
            exact
            path="/signin"
            render={() => {
              return !isAuthed ? <SignInPage /> : <Redirect to="/" />;
            }}
          />
          <Route
            exact
            path="/forgotpassword"
            render={() => {
              return !isAuthed ? <ForgotPasswordPage /> : <Redirect to="/" />;
            }}
          />
          <Route exact path="/home" component={HomePage} />
          <Route exact path="/">
            <Redirect to="/home" />
          </Route>
        </IonRouterOutlet>
      </IonReactRouter>
    </IonApp>
  );
};
export default App;
