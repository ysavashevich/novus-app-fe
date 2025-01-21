import { configureStore, combineSlices } from "@reduxjs/toolkit";
import { apiSlice } from "./apiSlice";
import { registerSlice } from "./registerSlice";
import { userSlice } from "./userSlice";
import { setupListeners } from "@reduxjs/toolkit/query";

const rootReducer = combineSlices(registerSlice, userSlice, apiSlice);

export type RootState = ReturnType<typeof rootReducer>;

export const makeStore = (preloadedState?: Partial<RootState>) => {
  const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => {
      return getDefaultMiddleware().concat(apiSlice.middleware);
    },
    preloadedState,
  });

  setupListeners(store.dispatch);
  return store;
};

export const store = makeStore();

export type AppStore = typeof store;
export type AppDispatch = AppStore["dispatch"];
