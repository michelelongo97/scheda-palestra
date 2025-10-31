import { BrowserRouter, Routes, Route } from "react-router";
import HomePage from "./pages/HomePage";
import SchedaPage from "./pages/SchedaPage";
import SchedaForm from "./pages/SchedaForm";
import EditScheda from "./pages/EditScheda";
import SchedePage from "./pages/SchedePage";
import ChiSiamo from "./pages/ChiSiamo";
import DefaultLayout from "./layouts/DefaultLayout";
import PageNotFound from "./pages/PageNotFound";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/scheda/:id" element={<SchedaPage />} />
          <Route path="/nuova" element={<SchedaForm />} />
          <Route path="/schede" element={<SchedePage />} />
          <Route path="/chisiamo" element={<ChiSiamo />} />
          <Route path="/scheda/:id/edit" element={<EditScheda />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
