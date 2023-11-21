import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { DarkModeProvider } from "./components/darkModeContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Yola Liang - Web Developer & Software Engineer",
  description:
    "Discover Yola Liang's innovative web and software engineering work. Expert in full-stack development, app creation, and modern tech solutions.",
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
