import React, { useEffect } from "react";
import "./App.css";
import { Outlet, useLocation } from "react-router-dom";
import Nevbar from "./layout/header/Nevbar";
import Footer from "./layout/footer/Footer";
import BackToTopButton from "./components/ui/BackToTopButton";
import WhatsAppButton from "./components/ui/WhatsAppButton";

function App() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <div className="App">
      <Nevbar />

      <main className="mt-[128px] md:mt-[185px] lg:mt-[156px] xl:mt-[156px]">
        <Outlet />
        <WhatsAppButton />
        <BackToTopButton />
      </main>

      <Footer />
    </div>
  );
}

export default App;
