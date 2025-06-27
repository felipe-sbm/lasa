"use client";
import { usePathname } from "next/navigation";

export default function BackgroundWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isPostPage = /^\/posts\/[^/]+$/.test(pathname);

  return (
    <div className={isPostPage ? "bg-amber-50 min-h-screen" : ""}>
      {children}
    </div>
  );
}