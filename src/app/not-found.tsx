import { Metadata } from "next";

export const metadata: Metadata = {
  title: "404",
  description: "Something went wrong",
};

export default function NotFound() {
  return (
    <div className="flex flex-col gap-4 items-center justify-center min-h-[calc(100vh-64px)]">
      <h1 className="text-2xl-semi text-ui-fg-base">Página no encontrada</h1>
      <p className="text-small-regular text-ui-fg-base">
        La página que estás buscando no existe o ha sido eliminada.
      </p>
    </div>
  );
}
