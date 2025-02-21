"use client";

import LayoutFour from "@/components/layout/layout-four";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <LayoutFour>{children}</LayoutFour>;
}
