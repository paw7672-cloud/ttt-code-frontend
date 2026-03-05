import { BrowserRouter, Routes, Route } from "react-router-dom";

import AboutPage from "./component/about/aboutpage";

function HeaderRoutes() {
  return (
    <BrowserRouter>

      <Routes>

        <Route path="/aboutus/introduction" element={<AboutPage />} />
        <Route path="/aboutus/vision" element={<AboutPage />} />

      </Routes>

    </BrowserRouter>
  );
}

export default HeaderRoutes;