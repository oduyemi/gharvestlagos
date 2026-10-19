"use client";

import { usePathname } from "next/navigation";
import { Header } from "@/components/layout/Header";
import { ConditionalFooter } from "@/components/layout/ConditionalFooter";

export function LayoutShell({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const isNotFoundPage = pathname === "/not-found";

  return (
    <>
      {!isNotFoundPage && <Header />}

      {children}

      {!isNotFoundPage && <ConditionalFooter />}
    </>
  );
}