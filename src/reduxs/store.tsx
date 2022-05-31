import { createStore, applyMiddleware } from "redux";
// =========================================================
import thunk from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";

import storage from "redux-persist/lib/storage";

import rootReducer from "reduxs";

const persistConfig: any = {
  key: "root",
  storage,
  whitelist: ["auth"],
};
const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = createStore(
  persistedReducer,

  applyMiddleware(thunk)
);

const persistor = persistStore(store);
// ========================================================
export default { store, persistor };
