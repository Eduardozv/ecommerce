"use client";

import LayoutFour from "@/components/layout/layout-four";
import WhatsAppButton from "@/components/WhatsAppButton";
import { ProductProvider } from "@/context/ProductContext";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ProductProvider>
      <LayoutFour>{children}</LayoutFour>
      <WhatsAppButton />
    </ProductProvider>
  );
}
