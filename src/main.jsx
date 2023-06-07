import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { SearchProvider } from "./context/SearchContext";
import ThemeProvider from "./context/ThemeContext";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
    <SearchProvider>
      <App />
    </SearchProvider>
    </ThemeProvider>
  </React.StrictMode>
);
