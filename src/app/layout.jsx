import "./globals.css";
import Menu from "../components/Menu";

export const metadata = {
  title: "CGC Wargaming",
  description: "Welcome to CGC Wargaming",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <main className="max-w-6xl mx-auto">
          <Menu />
          {children}
        </main>
      </body>
    </html>
  );
}
