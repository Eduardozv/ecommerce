import React, { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import constants from "@/utility/constants";
import { useProduct } from '@/context/ProductContext';

const WhatsAppButton = () => {

  const { productInfo } = useProduct();

  console.log("selectedProduct", productInfo);

  const baseMessage = "Hola, estoy interesado en ";
  const message = productInfo
    ? `${baseMessage}${productInfo.title} ${productInfo.pageUrl}`
    : "Hola, me gustaría obtener más información sobre sus productos";

  const whatsappUrl = `${constants.whatsapp}?text=${encodeURIComponent(
    message
  )}`;

  return (
      <a
        href={whatsappUrl} // Reemplaza con tu número de WhatsApp
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-button"
      >
        <FaWhatsapp size={30} />
      </a>
  );
};

export default WhatsAppButton;