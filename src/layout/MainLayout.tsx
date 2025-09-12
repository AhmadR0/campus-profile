import { Routes, Route } from "react-router-dom";

import { HeaderMain } from "../components/Headers";
import Footers from "../components/Footers";
import MainContents from "../components/MainContents";
import PimpinanPolchen from "../components/headers/profile/PimpinanPolchen";
import Sejarah from "../components/headers/profile/Sejarah";
import UnderConstruction from "../components/headers/profile/404";

export default function MainLayout() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      {/* Header */}
      <HeaderMain />

      {/* Content */}
      <div className="flex-1">
        <Routes>
          <Route path="/" element={<MainContents />} />

          <Route
            path="/profile/pimpinan-polchen"
            element={<PimpinanPolchen />}
          />

          <Route path="/profile/sejarah" element={<Sejarah />} />

          {/* Semua path yang tidak cocok → fallback */}
          <Route path="*" element={<UnderConstruction />} />
        </Routes>
      </div>

      {/* Footer */}
      <Footers />
    </div>
  );
}
