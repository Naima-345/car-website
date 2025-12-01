import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

// Components
import Header from "@/components/frontend/layout/Header";
import Footer from "@/components/frontend/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const poppins = Poppins({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "AL Qawsa Imports | Premium Japanese Cars",
  description:
    "AL Qawsa Imports – Import the highest-quality Japanese cars with trusted service and transparent pricing.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body className={`${inter.className} bg-[#F2E9D8] text-[#1B1A17]`}>
        
        <Header />

        <main className="min-h-screen px-4 md:px-6 lg:px-10">
          {children}
        </main>

        <Footer />

      </body>
    </html>
  );
}
