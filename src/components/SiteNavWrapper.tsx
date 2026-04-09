"use client";

import { usePathname } from "next/navigation";
import SiteNav from "@/components/SiteNav";

export default function SiteNavWrapper() {
  const pathname = usePathname();
  if (pathname === "/") return null;
  return <SiteNav />;
}
