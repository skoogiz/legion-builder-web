import {PageLayout} from "./components/PageLayout";
import {PageFooter} from "./components/PageFooter";
import {AppHero} from "./components/AppHero";
import {Navigate, Outlet, Route, Routes, useLocation} from "react-router-dom";
import {CardsPage, SettingsPage, StartPage} from "./pages";

function AppLayout() {
  const {pathname} = useLocation();
  return (
    <PageLayout hero={pathname === "/" ? <AppHero /> : undefined} footer={<PageFooter />}>
      <Outlet />
    </PageLayout>
  );
}

export function App() {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<StartPage />} />
        <Route path="settings" element={<SettingsPage />} />
        <Route path="cards" element={<CardsPage />} />
        {/* default redirect to home page */}
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
}
