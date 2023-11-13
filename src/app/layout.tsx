import type { Metadata } from "next";
import { Inria_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inriaSans = Inria_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});

export const metadata: Metadata = {
  title: "Design Flow - Web Design",
  description: "Modern website design for interior designers and home stagers",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inriaSans.className} relative grainy`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
