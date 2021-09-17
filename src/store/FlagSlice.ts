import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface FlagState {
  adminsPage: boolean;
  wasCreated: boolean;
  wasDeleted: boolean;
  wasUpdated: boolean;
  loading: boolean;
  error: boolean;
  errorMessage: string;
  codeSended: boolean;
  passwordChanged: boolean;
}

const initialState: FlagState = {
  adminsPage: false,
  wasCreated: false,
  wasDeleted: false,
  wasUpdated: false,
  loading: false,
  error: false,
  errorMessage: "",
  codeSended: false,
  passwordChanged: false,
};

const flag = createSlice({
  name: "flag",
  initialState,
  reducers: {
    setIsAdminsPage(state, { payload }: PayloadAction<boolean>) {
      state.adminsPage = payload;
    },
    setWasCreated(state, { payload }: PayloadAction<boolean>) {
      state.wasCreated = payload;
    },
    setWasDeleted(state, { payload }: PayloadAction<boolean>) {
      state.wasDeleted = payload;
    },
    setWasUpdated(state, { payload }: PayloadAction<boolean>) {
      state.wasUpdated = payload;
    },
    setLoading(state, { payload }: PayloadAction<boolean>) {
      state.loading = payload;
    },
    setError(state, { payload }: PayloadAction<boolean>) {
      state.error = payload;
    },
    setErrorMessage(state, { payload }: PayloadAction<string>) {
      state.errorMessage = payload;
    },
    setCodeSended(state, { payload }: PayloadAction<boolean>) {
      state.codeSended = payload;
    },
    setPasswordChanged(state, { payload }: PayloadAction<boolean>) {
      state.passwordChanged = payload;
    },
  },
});

export const {
  setIsAdminsPage,
  setWasCreated,
  setWasDeleted,
  setWasUpdated,
  setLoading,
  setError,
  setErrorMessage,
  setCodeSended,
  setPasswordChanged,
} = flag.actions;

export default flag.reducer;
export const flagSelector = (state: { flagStore: FlagState }) =>
  state.flagStore;
