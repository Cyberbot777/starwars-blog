import React from "react";
import './index.css'; 
import ReactDOM from "react-dom/client";
import App from "./App";
import { FavoritesProvider } from "./context/FavoritesContext";


ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <FavoritesProvider>
      <App />
    </FavoritesProvider>
  </React.StrictMode>
);
