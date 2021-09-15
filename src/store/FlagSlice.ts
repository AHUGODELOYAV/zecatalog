import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface FlagState {
  isAuthed: boolean;
  wasCreated: boolean;
  wasDeleted: boolean;
  wasUpdated: boolean;
  loading: boolean;
  error: string;
}

const initialState: FlagState = {
  isAuthed: false,
  wasCreated: false,
  wasDeleted: false,
  wasUpdated: false,
  loading: false,
  error: "",
};

const flag = createSlice({
  name: "flag",
  initialState,
  reducers: {
    setIsAuthed(state, { payload }: PayloadAction<boolean>) {
      state.isAuthed = payload;
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
    setError(state, { payload }: PayloadAction<string>) {
      state.loading = false;
      switch (payload) {
        case "UserNotFoundException":
          state.error = "User Not Found";
          break;
        case "InvalidParameterException":
          state.error = "Invalid form value";
          break;
        case "UserNotConfirmedException":
          state.error = "User Not Confirmed, please check your email";
          break;
        case "NotAuthorizedException":
          state.error = "You have entered an invalid username or password";
          break;
        case "UsernameExistsException":
          state.error = "User already exists";
          break;
        case "NetworkError":
          state.error = "Network Error";
          break;
        default:
          console.log("Unexpected Error: ", payload);
          break;
      }
    },
  },
});

export const {
  setIsAuthed,
  setWasCreated,
  setWasDeleted,
  setWasUpdated,
  setLoading,
  setError,
} = flag.actions;

export default flag.reducer;
export const flagSelector = (state: { flagStore: FlagState }) =>
  state.flagStore;
