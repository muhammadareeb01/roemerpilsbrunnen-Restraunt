import type { Metadata } from "next";
import { Playfair_Display, Plus_Jakarta_Sans, DM_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";

import { CartProvider } from "@/context/CartContext";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { OrderBar } from "@/components/order/OrderBar";

const headingFont = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
});

const sansFont = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-dm-sans",
});

const dmMono = DM_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-dm-mono",
});

export const metadata: Metadata = {
  title: "Römer Pils Brunnen | Frankfurter Spezialitäten & Gutbürgerliche Küche seit 1954",
  description: "Traditional Frankfurt specialties, draft pilsner beer, and warm hospitality since 1954 in the heart of Frankfurt, Germany.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${headingFont.variable} ${sansFont.variable} ${dmMono.variable}`}>
        <CartProvider>
          <Navbar />
          <main style={{ minHeight: '100vh' }}>
            {children}
          </main>
          <Footer />
          <OrderBar />
          <Toaster position="bottom-center" />
        </CartProvider>
      </body>
    </html>
  );
}
