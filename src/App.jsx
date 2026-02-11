import React, { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import LayoutPage from "./layout/LayoutPage";
import HomePage from "./Pages/Index";
import About from "./Pages/About";
import Portfolio from "./Pages/Portfolio";
import AOS from "aos";

const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [location.pathname]);

  return null;
};

const app = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <LayoutPage>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </LayoutPage>
  );
}

export default app;