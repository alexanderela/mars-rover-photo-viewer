import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "../styles/theme.ts";
import { setupStore } from "./store.ts";
import { RouterProvider } from "react-router-dom";
import { router } from "./router.tsx";
import "../index.css";
import "../reset.css";

createRoot(document.getElementById("root")!).render(
  <Provider store={setupStore()}>
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  </Provider>,
);
