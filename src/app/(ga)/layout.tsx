"use client";

import LayoutFour from "@/components/layout/layout-four";
import WhatsAppButton from "@/components/WhatsAppButton"; // Import the WhatsAppButton component

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <LayoutFour>{children}</LayoutFour>
      <WhatsAppButton /> 
    </>
  );
}
