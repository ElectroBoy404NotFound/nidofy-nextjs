// import { Geist, Geist_Mono } from "next/font/google";

import "./globals.css";

import DottedBackground from "@/components/DottedBackground";
import ThemeRegistry from "@/theme/ThemeRegistry";
import Footer from "@/components/Footer";

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
    >
      <body>
        <ThemeRegistry>
            <DottedBackground />
            {children}
            <Footer />
        </ThemeRegistry>
      </body>
    </html>
  );
}
