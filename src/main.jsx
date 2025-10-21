import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import { ModalProvider } from "./providers/modalProviders";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ModalProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ModalProvider>
  </StrictMode>
);
