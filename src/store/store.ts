import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "@/slices/CartSlice";

export function makeStore() {
  return configureStore({
    reducer: {
      cart: CartSlice,
    },
  });
}

export const store = makeStore();

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
