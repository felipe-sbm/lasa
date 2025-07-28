"use client";
import { usePathname } from "next/navigation";

export default function BackgroundWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isPostPage = /^\/posts\/[^/]+$/.test(pathname);

  return (
    <div className={isPostPage ? "bg-white min-h-screen" : ""}>
      {children}
    </div>
  );
}