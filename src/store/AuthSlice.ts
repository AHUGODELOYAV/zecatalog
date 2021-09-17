import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Auth } from "aws-amplify";
import { AuthThunk } from "./../index";
import {
  setCodeSended,
  setError,
  setErrorMessage,
  setLoading,
  setPasswordChanged,
  setWasCreated,
} from "./FlagSlice";

export interface AuthState {
  isAuthed: boolean;
  userProfile: UserProfileObject;
}

export interface UserProfileObject {
  name: string;
  lastname: string;
  email: string;
}

export interface SignUpFields {
  username: string;
  password: string;
  attributes: {
    email: string;
    name: string;
    family_name: string;
  };
}

const initialState: AuthState = {
  isAuthed: false,
  userProfile: {
    name: "",
    lastname: "",
    email: "",
  },
};

const auth = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setIsAuthed(state, { payload }: PayloadAction<boolean>) {
      state.isAuthed = payload;
    },
    setUserProfile(state, { payload }: PayloadAction<UserProfileObject>) {
      state.userProfile = payload;
    },
    resetAuth(state) {
      state.isAuthed = false;
      state.userProfile = {
        name: "",
        lastname: "",
        email: "",
      };
    },
  },
});

export const { setIsAuthed, setUserProfile, resetAuth } = auth.actions;

export default auth.reducer;

export const authSelector = (state: { authStore: AuthState }) =>
  state.authStore;

export const signInAuth =
  (input: { userEmail: string; userPass: string }): AuthThunk =>
  async (dispatch: any) => {
    try {
      dispatch(setLoading(true));
      const userInfo = await Auth.signIn(input.userEmail, input.userPass);
      const userProfile = {
        name: userInfo.attributes.name,
        lastname: userInfo.attributes.family_name,
        email: userInfo.attributes.email,
      };
      dispatch(setUserProfile(userProfile));
      dispatch(setIsAuthed(true));
      dispatch(setLoading(false));
    } catch (error: any) {
      dispatch(setLoading(false));
      dispatch(setErrorMessage(error.message));
      dispatch(setError(true));
    }
  };

export const signUpAuth =
  (input: SignUpFields): AuthThunk =>
  async (dispatch: any) => {
    try {
      dispatch(setLoading(true));
      await Auth.signUp(input);
      dispatch(setWasCreated(true));
      dispatch(setLoading(false));
    } catch (error: any) {
      dispatch(setLoading(false));
      dispatch(setErrorMessage(error.message));
      dispatch(setError(true));
    }
  };

export const signOutAuth = (): AuthThunk => async (dispatch: any) => {
  try {
    dispatch(setLoading(true));
    await Auth.signOut();
    dispatch(setIsAuthed(false));
    dispatch(resetAuth());
    dispatch(setLoading(false));
  } catch (error: any) {
    dispatch(setLoading(false));
    dispatch(setErrorMessage(error.message));
    dispatch(setError(true));
  }
};

export const forgotPass =
  (input: any): AuthThunk =>
  async (dispatch: any) => {
    try {
      dispatch(setLoading(true));
      await Auth.forgotPassword(input);
      dispatch(setCodeSended(true));
      dispatch(setLoading(false));
    } catch (error: any) {
      dispatch(setLoading(false));
      dispatch(setErrorMessage(error.message));
      dispatch(setError(true));
    }
  };

export const confirmNewPass =
  (input: any): AuthThunk =>
  async (dispatch: any) => {
    try {
      dispatch(setLoading(true));
      await Auth.forgotPasswordSubmit(input.username, input.code, input.pass);
      dispatch(setPasswordChanged(true));
      dispatch(setLoading(false));
    } catch (error: any) {
      dispatch(setLoading(false));
      dispatch(setErrorMessage(error.message));
      dispatch(setError(true));
    }
  };

export const updateUser =
  (input: any): AuthThunk =>
  async (dispatch: any) => {
    try {
      dispatch(setLoading(true));
      await Auth.updateUserAttributes(input.username, input.attributes);
      dispatch(setLoading(false));
    } catch (error: any) {
      dispatch(setLoading(false));
      dispatch(setErrorMessage(error.message));
      dispatch(setError(true));
    }
  };
