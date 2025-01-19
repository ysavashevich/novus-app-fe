import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./";

export type UserType = string;

export interface RegisterSliceState {
  userType: UserType | null;
}

const initialState: RegisterSliceState = {
  userType: null,
};

export const registerSlice = createSlice({
  name: "register",
  initialState,
  reducers: {
    userTypeChosen(state, action: PayloadAction<UserType>) {
      state.userType = action.payload;
    },
  },
});

export const { userTypeChosen } = registerSlice.actions;

export const selectUserType = (state: RootState) => state.register.userType;

export default registerSlice.reducer;
