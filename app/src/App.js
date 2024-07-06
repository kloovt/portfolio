import React from "react";
import Home from "./components/Home";
import IntProject from "./pages/IntProject";
import HomeServer from "./pages/HomeServer";
import GoogleScripts from "./pages/GoogleScripts";
import GlobalActing from "./pages/GlobalActing";
import PortfolioSite from "./pages/PortfolioSite";
import QRCode from "./pages/QR-code";

import {Routes , Route} from "react-router-dom" 

export default function App() {
  return (
    <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/international_project" element={<IntProject />} />
          <Route path="/home_server" element={<HomeServer />} />
          <Route path="/google_scripts" element={<GoogleScripts />} />
          <Route path="/global_acting" element={<GlobalActing />} />
          <Route path="/portfolio_website" element={<PortfolioSite />} />
          <Route path="/qr-code" element={<QRCode />} />
          <Route path="*" element={<Home />} />
        </Routes>
    </main>
  );
}
