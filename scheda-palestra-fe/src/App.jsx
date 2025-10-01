import { BrowserRouter, Routes, Route } from "react-router";
import HomePage from "./pages/HomePage";
import SchedaPage from "./pages/SchedaPage";
import DefaultLayout from "./layouts/DefaultLayout";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/scheda/:id" element={<SchedaPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
