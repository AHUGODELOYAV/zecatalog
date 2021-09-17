import { sendEmailToAdmin } from "./../graphql/mutations";
import { Auth, API, graphqlOperation } from "aws-amplify";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AdminThunk } from "../index";
import {
  setError,
  setErrorMessage,
  setLoading,
  setWasUpdated,
} from "./FlagSlice";

export interface AdminState {
  admins: AdminObject[];
}

export interface AdminObject {
  userID: string;
  name: string;
  family_name: string;
  email: string;
  enabled: boolean;
}

const initialState: AdminState = {
  admins: [],
};

const admin = createSlice({
  name: "admin",
  initialState,
  reducers: {
    addAdmin(state, { payload }: PayloadAction<AdminObject>) {
      state.admins = [...state.admins, payload];
      //state.admins.push(payload);
    },
    resetAdmin(state) {
      state.admins = [];
    },
  },
});

export const { addAdmin, resetAdmin } = admin.actions;

export default admin.reducer;

export const adminSelector = (state: { adminStore: AdminState }) =>
  state.adminStore;

export const getAdmins = (): AdminThunk => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    let apiName = "AdminQueries";
    let path = "/listUsersInGroup";
    let myInit = {
      queryStringParameters: {
        groupname: "Admin",
      },
      headers: {
        "Content-Type": "application/json",
        Authorization: `${(await Auth.currentSession())
          .getAccessToken()
          .getJwtToken()}`,
      },
    };
    const rest = await API.get(apiName, path, myInit);
    rest.Users.map((user: any) => {
      let adminInfo = {
        userID: user.Attributes[0].Value,
        name: user.Attributes[2].Value,
        family_name: user.Attributes[3].Value,
        email: user.Attributes[4].Value,
        enabled: user.Enabled,
      };
      dispatch(addAdmin(adminInfo));
    });
    dispatch(setLoading(false));
  } catch (error: any) {
    dispatch(setLoading(false));
    dispatch(setErrorMessage(error.message));
    dispatch(setError(true));
  }
};

export const disableAdmin =
  (input: { userID: string }): AdminThunk =>
  async (dispatch: any) => {
    try {
      dispatch(setLoading(true));
      let apiName = "AdminQueries";
      let path = "/disableUser";
      let myInit = {
        body: {
          username: input.userID,
        },
        headers: {
          "Content-Type": "application/json",
          Authorization: `${(await Auth.currentSession())
            .getAccessToken()
            .getJwtToken()}`,
        },
      };
      await API.post(apiName, path, myInit);
      dispatch(setWasUpdated(true));
      dispatch(setLoading(false));
    } catch (error: any) {
      dispatch(setLoading(false));
      dispatch(setErrorMessage(error.message));
      dispatch(setError(true));
    }
  };

export const enableAdmin =
  (input: { userID: string }): AdminThunk =>
  async (dispatch: any) => {
    try {
      dispatch(setLoading(true));
      let apiName = "AdminQueries";
      let path = "/enableUser";
      let myInit = {
        body: {
          username: input.userID,
        },
        headers: {
          "Content-Type": "application/json",
          Authorization: `${(await Auth.currentSession())
            .getAccessToken()
            .getJwtToken()}`,
        },
      };
      await API.post(apiName, path, myInit);
      dispatch(setWasUpdated(true));
      dispatch(setLoading(false));
    } catch (error: any) {
      dispatch(setLoading(false));
      dispatch(setErrorMessage(error.message));
      dispatch(setError(true));
    }
  };

export const sendNotificationToAdmin = (input: any): AdminThunk => {
  return async (dispatch: any) => {
    try {
      dispatch(setLoading(true));
      let apiName = "AdminQueries";
      let path = "/listUsersInGroup";
      let myInit = {
        queryStringParameters: {
          groupname: "Admin",
        },
        headers: {
          "Content-Type": "application/json",
          Authorization: `${(await Auth.currentSession())
            .getAccessToken()
            .getJwtToken()}`,
        },
      };
      const rest = await API.get(apiName, path, myInit);
      let adminsEmail = "";
      rest.Users.map((user: any) => {
        adminsEmail = adminsEmail + user.Attributes[4].Value + ";";
      });
      const emailData = {
        toemail: adminsEmail,
        subject: input.subject,
        message: input.message,
      };
      await API.graphql(graphqlOperation(sendEmailToAdmin, emailData));
      dispatch(setLoading(false));
    } catch (error: any) {
      dispatch(setLoading(false));
      dispatch(setErrorMessage(error.errors[0].message));
      dispatch(setError(true));
    }
  };
};
