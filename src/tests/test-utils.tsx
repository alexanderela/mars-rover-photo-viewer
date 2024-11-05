import { PropsWithChildren, ReactElement } from "react";
import { render, RenderOptions } from "@testing-library/react";
import { Provider } from "react-redux";
import { ThemeProvider } from "@mui/material/styles";
import { AppStore, RootState, setupStore } from "../app/store";
import { theme } from "../styles/theme";
import { useLocation } from "react-router-dom";

export const LocationDisplay = () => {
  const location = useLocation();
  return <div data-testid="location-display">{location.pathname}</div>;
};

interface ExtendedRenderOptions extends Omit<RenderOptions, "queries"> {
  preloadedState?: Partial<RootState>;
  store?: AppStore;
}

const customRender = (
  ui: ReactElement,
  extendedRenderOptions: ExtendedRenderOptions = {},
) => {
  const {
    preloadedState = {},
    store = setupStore(preloadedState),
    ...renderOptions
  } = extendedRenderOptions;

  const wrapper = ({ children }: PropsWithChildren) => {
    return (
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          {children}
        </ThemeProvider>
      </Provider>
    );
  };

  return {
    store,
    ...render(ui, { wrapper, ...renderOptions })
  };
};

export * from "@testing-library/react";
export { customRender as render };
