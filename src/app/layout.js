// import { Geist, Geist_Mono } from "next/font/google";

import "./globals.css";

import DottedBackground from "@/components/DottedBackground";
import ThemeRegistry from "./theme/ThemeRegistry";

export const metadata = {
  title: "Nidofy",
  description: "Nikunj Doke's portfolio and poems",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
    >
      <body>
        <ThemeRegistry>
            <DottedBackground />
            {children}
        </ThemeRegistry>
      </body>
    </html>
  );
}
