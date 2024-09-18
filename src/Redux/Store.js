import { configureStore } from "@reduxjs/toolkit";
import countReducer from "./counter";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
const persistConfig = {
  key: "root",
  storage,
};
const persistedReducerCounter = persistReducer(persistConfig, countReducer);
export const store = configureStore({
  reducer: {
    counter: persistedReducerCounter,
  },
});


export const persistor = persistStore(store);