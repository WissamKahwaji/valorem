import React, { useEffect } from "react";
import "./App.css";
import { Outlet, useLocation } from "react-router-dom";
import Nevbar from "./layout/header/Navbar";
import Footer from "./layout/footer/Footer";
import BackToTopButton from "./components/ui/BackToTopButton";
import WhatsAppButton from "./components/ui/WhatsAppButton";
import { useGetContactUsInfo } from "./api/contact_us/query";

function App() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  const { data: contactInfo } = useGetContactUsInfo();
  console.log(contactInfo?.content.whatsApp);
  return (
    <div className="App">
      <Nevbar />

      <main className="mt-[97px] md:mt-[185px] lg:mt-[156px] xl:mt-[156px]">
        <Outlet />
        <WhatsAppButton
          number={contactInfo?.content.whatsApp ?? "+971508889477"}
        />
        <BackToTopButton />
      </main>

      <Footer />
    </div>
  );
}

export default App;
