import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import LayoutPage from "@/layout/LayoutPage";
import HomePage from "@/Pages/Index";
import About from "@/Pages/About";
import Portfolio from "@/Pages/Portfolio/Portfolio";
import PortfolioDetail from "@/Pages/Portfolio/PortfolioDetail";
import AOS from 'aos';

const app = () => {
    useEffect(() => {
        AOS.init();
      }, []);
  return (
    <LayoutPage>
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/portfolio/:shortName" element={<PortfolioDetail />} />
            <Route path="/about" element={<About />} />
        </Routes>
    </LayoutPage>
  );
}

export default app;