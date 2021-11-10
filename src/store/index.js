import { createStore, combineReducers } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { chatReducer } from "./Chat";

const persistConfig = {
  key: "root",
  storage,
};

const persistreducer = persistReducer(
  persistConfig,
  combineReducers({
    chat: chatReducer,
  }),
);

export const store = createStore(
  persistreducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export const persistor = persistStore(store);
