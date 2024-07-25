import "./globals.css";
import Menu from "./components/Menu";
// import Footer from "./components/Footer";

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
          {/* <Footer /> */}
        </main>
      </body>
    </html>
  );
}
