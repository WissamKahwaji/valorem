import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {
  const [showWhatsAppButton, setShowWhatsAppButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowWhatsAppButton(true);
      } else {
        setShowWhatsAppButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const openWhatsApp = () => {
    // Replace the number with your WhatsApp number
    window.open("https://wa.me/+971542451874", "_blank");
  };

  return (
    <motion.button
      initial={{ opacity: 0, scale: 0 }}
      animate={{
        opacity: showWhatsAppButton ? 1 : 0,
        scale: showWhatsAppButton ? 1 : 0,
      }}
      transition={{ duration: 0.3 }}
      className={`fixed bottom-24 right-3 h-12 w-12 rounded-full bg-primary text-white flex items-center justify-center ${
        showWhatsAppButton ? "block" : "hidden"
      }`}
      onClick={openWhatsApp}
    >
      <FaWhatsapp className="text-2xl" />
    </motion.button>
  );
};

export default WhatsAppButton;
