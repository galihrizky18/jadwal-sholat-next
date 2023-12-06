import type { Metadata } from "next";
import { Inter, Lora, Libre_Baskerville } from "next/font/google";
import "./globals.css";
import "@mantine/core/styles.css";
import "@mantine/carousel/styles.css";
import { MantineProvider, ColorSchemeScript } from "@mantine/core";

// Google Fonts
const inter = Inter({ subsets: ["latin"] });
const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora",
});
const libre = Libre_Baskerville({
  weight: "400",
  subsets: ["latin"],
  style: "normal",
  variable: "--font-libre",
});

// Meta Data
export const metadata: Metadata = {
  title: "Garix Jadwal Sholat",
  description: "Website jadwal Sholat Garix Terlengkap",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.className} ${lora.variable} ${libre.variable}`}
    >
      <head>
        <ColorSchemeScript />
      </head>
      <body>
        <MantineProvider>{children}</MantineProvider>
      </body>
    </html>
  );
}
