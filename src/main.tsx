import {StrictMode} from "react";
import {createRoot} from "react-dom/client";
import {BrowserRouter as Router} from "react-router-dom";
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
  assets: {
    playerCardsUrl: "/data/2.6.0/SWQ_PlayerCards_JanuaryUpdate",
  },
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Router>
      <AppContextProvider pageConfig={pageConfig}>
        <AppThemeProvider>
          <App />
        </AppThemeProvider>
      </AppContextProvider>
    </Router>
  </StrictMode>,
);
