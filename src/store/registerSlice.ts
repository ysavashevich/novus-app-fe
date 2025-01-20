import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./";

export type UserType = string;

export interface RegisterSliceState {
  userType: UserType | null;
  didRegister: boolean;
}

const initialState: RegisterSliceState = {
  userType: null,
  didRegister: false,
};

export const registerSlice = createSlice({
  name: "register",
  initialState,
  reducers: {
    userTypeChosen(state, action: PayloadAction<UserType>) {
      state.userType = action.payload;
    },
    userRegistered(state) {
      state.userType = null;
      state.didRegister = true;
    },
  },
});

export const { userTypeChosen, userRegistered } = registerSlice.actions;

export const selectUserType = (state: RootState) => state.register.userType;

export const selectDidRegister = (state: RootState) =>
  state.register.didRegister;

export default registerSlice.reducer;
