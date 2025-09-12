// import type { ReactNode } from "react";
import { Routes, Route } from "react-router-dom";

import { HeaderMain } from "../components/Headers";
import Footers from "../components/Footers";
import MainContents from "../components/MainContents";
import PimpinanPolchen from "../components/headers/profile/PimpinanPolchen";
// import { useState } from "react";


export default function MainLayout() {
  
  // const [activePage,setActivePage] = useState<string>



  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      {/* Header */}
        <HeaderMain />

      {/* Content */}
      <div className="flex-1">
        {/* <BrowserRouter> */}
          <Routes>
          <Route 
            path="/" 
            element={<MainContents />}
          />
          
          <Route 
            path="/profile/pimpinan-polchen" 
            element={<PimpinanPolchen />} 
          />
        </Routes>
        {/* </BrowserRouter> */}
      </div>
      {/* <MainContents /> */}

      {/* Footer */}
      <Footers />
    </div>
  );
}