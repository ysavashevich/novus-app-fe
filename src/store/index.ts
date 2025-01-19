import { configureStore, combineSlices } from "@reduxjs/toolkit";
import { apiSlice } from "./apiSlice";
import { registerSlice } from "./registerSlice";

const rootReducer = combineSlices(registerSlice, apiSlice);

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(apiSlice.middleware);
  },
});

export type AppStore = typeof store;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
