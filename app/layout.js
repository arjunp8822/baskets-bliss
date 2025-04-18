import { Jost } from "next/font/google";
import Navbar from "@/components/Navbar";
import "./globals.css";
import TopBar from "@/components/TopBar";
import Footer from "@/components/Footer";

const jost = Jost({ subsets: ["latin"] });

export const metadata = {
  title: "Baskets Bliss",
  description:
    "Discover beautifully curated gift hampers for every occasion, from celebrations to relaxation, crafted with love and delivered with care.",
  icons: "/favicon.ico",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${jost.className}`}>
        <TopBar />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
