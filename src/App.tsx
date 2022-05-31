import React from "react";
import { Provider } from "react-redux";

// routes
import { Router } from "routers/routes";
import { PersistGate } from "redux-persist/integration/react";
import storage from "./reduxs/store";
const { store, persistor } = storage;

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Router />
      </PersistGate>
    </Provider>
  );
}

export default App;
