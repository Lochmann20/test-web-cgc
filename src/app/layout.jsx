import { Inter } from "next/font/google";
import "./globals.css";
import Menu from "./components/Menu";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "CGC Wargaming",
  description: "Welcome to CGC Wargaming",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Menu />
        {children}
      </body>
    </html>
  );
}
