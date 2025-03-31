import "./globals.css";

import Providers from "@/store/Provider";
import { Loader } from "@/components/loader";

interface RootLayoutProps {
  children: React.ReactNode;
}
export const metadata = {
  title: "Tienda GA Instalaciones Comerciales",
  description: "Descubre nuestra tienda de GA Instalaciones Comerciales, donde encontrarás una amplia variedad de productos y servicios para satisfacer todas tus necesidades comerciales. Desde equipos de refrigeración hasta soluciones de instalación, tenemos todo lo que necesitas para llevar tu negocio al siguiente nivel.",


  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body style={{ background: "none" }}>
        <Loader>
          <Providers>
            <div>{children}</div>
          </Providers>
        </Loader>
      </body>
    </html>
  );
}
