import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import "../index.css";
import "../reset.css";
import App from "../App.tsx";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "../styles/theme.ts";
import { store } from "./store.ts";

createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <StrictMode>
        <App />
      </StrictMode>
    </ThemeProvider>
  </Provider>,
);
