import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./";
import { User } from "./apiSlice";

export type UserType = string;

export interface RegisterSliceState {
  user: User | null;
  token: string | null;
}

const token = localStorage.getItem("token")
  ? localStorage.getItem("token")
  : null;

const initialState: RegisterSliceState = {
  user: null,
  token: token,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<{ user: User; token: string }>) {
      const user = action.payload.user;
      const token = action.payload.token;
      localStorage.setItem("user", JSON.stringify(user));
      localStorage.setItem("token", token);
      state.user = user;
      state.token = token;
    },
    clearUser(state) {
      localStorage.removeItem("user");
      localStorage.removeItem("token");
      state.user = null;
      state.token = null;
    },
  },
});

export const { setUser } = userSlice.actions;

export const selectUserObject = (state: RootState) => state.user.user;

export default userSlice.reducer;
