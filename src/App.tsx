import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout";
import { HomePage } from "./pages/HomePage";
import { MentionsLegalesPage } from "./pages/MentionsLegalesPage";
import { ServicesPage } from "./pages/ServicesPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="services" element={<ServicesPage />} />
          <Route path="mentions-legales" element={<MentionsLegalesPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
