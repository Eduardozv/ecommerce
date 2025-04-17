import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import constants from "@/utility/constants";

const WhatsAppButton = () => {
  return (
      <a
        href={constants.whatsapp} // Reemplaza con tu número de WhatsApp
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-button"
      >
        <FaWhatsapp size={30} />
      </a>
  );
};

export default WhatsAppButton;