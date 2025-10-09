import { BrowserRouter, Routes, Route } from "react-router";
import HomePage from "./pages/HomePage";
import SchedaPage from "./pages/SchedaPage";
import SchedaForm from "./pages/SchedaForm";
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
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
