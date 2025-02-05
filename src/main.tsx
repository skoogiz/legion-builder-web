import {StrictMode} from "react";
import {createRoot} from "react-dom/client";
import {AppContextProvider, AppThemeProvider} from "@legion-builder/context";
import "./index.css";
import {App} from "./App.tsx";
import {definePageConfig} from "./config/page.config.ts";

const pageConfig = definePageConfig({
  /*
  hero: {
    bgColor: {main: "#A1DD70"},
  },
  */
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AppContextProvider pageConfig={pageConfig}>
      <AppThemeProvider>
        <App />
      </AppThemeProvider>
    </AppContextProvider>
  </StrictMode>,
);
