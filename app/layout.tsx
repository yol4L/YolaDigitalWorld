import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { DarkModeProvider } from "./components/DarkMode/darkModeContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Yola Liang - Web Developer & Software Engineer",
  description:
    "Discover Yola Liang's innovative web and software engineering work. Expert in full-stack development, app creation, and modern tech solutions.",
  openGraph: {
    title: "Yola Liang - Web Developer & Software Engineer",
    description:
      "Discover Yola Liang's innovative web and software engineering work.",
    url: "",
    siteName: "Yola's digital world",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  metadataBase: new URL("https://yolaliang.me"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <DarkModeProvider>
          <>{children}</>
        </DarkModeProvider>
      </body>
    </html>
  );
}
