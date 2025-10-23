import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import { ModalProvider } from "./providers/modalProviders";
import * as serviceWorker from "./utils/serviceWorker";
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

// Register service worker for offline support and caching
// Change to serviceWorker.unregister() if you don't want service worker
serviceWorker.register({
  onSuccess: () => {
    console.log('✓ Service Worker: App is ready for offline use');
  },
  onUpdate: () => {
    console.log('✓ Service Worker: New content is available, please refresh');
  }
});
