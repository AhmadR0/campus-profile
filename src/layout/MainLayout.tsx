// import type { ReactNode } from "react";
import { HeaderMain } from "../components/Headers";
import Footers from "../components/Footers";
import MainContents from "../components/MainContents";



export default function MainLayout() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      {/* Header */}
        <HeaderMain />

      {/* Content */}

      <MainContents />

      {/* Footer */}
      <Footers />
    </div>
  );
}