import { configureStore } from "@reduxjs/toolkit";
import productosReducer from "../stores/productos/slice";

const persistanceLocalStorageMiddleware = (store) => (next) => (action) => {
  next(action);
  localStorage.setItem("__redux__state__", JSON.stringify(store.getState()));
}

export const store = configureStore({
  reducer: {
    productos: productosReducer, 
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(persistanceLocalStorageMiddleware)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch