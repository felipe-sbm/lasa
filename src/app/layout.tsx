import type { Metadata } from "next";
import { DM_Serif_Display, DM_Serif_Text } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.scss";

const dmSerifDisplay = DM_Serif_Display({
  variable: "--font-dm-serif-display",
  subsets: ["latin"],
  weight: "400",
});

const dmSerifText = DM_Serif_Text({
  variable: "--font-dm-serif-text",
  subsets: ["latin"],
  weight: "400",
});


export const metadata: Metadata = {
  title: "Laboratório de Soluções Ambientais",
  description:
    "O Laboratório de Soluções Ambientais (LaSA) na Escola de Ciências & Tecnologia da Universidade Federal do Rio Grande do Norte (UFRN).",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${dmSerifDisplay.variable} ${dmSerifText.variable} antialiased`}
      >
        <div>
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
