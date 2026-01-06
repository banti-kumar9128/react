import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { AppContextProvider } from "./context/AppContext.jsx";

// Handle GitHub Pages SPA routing
if (window.location.pathname.startsWith("/?")) {
  window.history.replaceState(null, "", window.location.pathname.slice(1));
}

createRoot(document.getElementById("root")).render(
  <BrowserRouter basename="/ham">
    <AppContextProvider>
      <App />
    </AppContextProvider>
  </BrowserRouter>
);
