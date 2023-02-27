import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { WebProvider } from "./contexts/webContext";
import { AddressProvider } from "./contexts/AddressContext";
import { ModalProvider } from "./contexts/ModalContext";
import { ShipDetailProvider } from "./contexts/ShipDetailContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <WebProvider>
      <ModalProvider>
        <AddressProvider>
          <ShipDetailProvider>
            <App />
          </ShipDetailProvider>
        </AddressProvider>
      </ModalProvider>
    </WebProvider>
  </React.StrictMode>
);
