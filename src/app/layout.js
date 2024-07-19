import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import brandLogo from "../assets/svg/brandlogo.svg";
import StoreProvider from "./StoreProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "WhatsUpLife",
  description: "Generated by WhatsUpLife",
  icons: [{ rel: "icon", url: brandLogo.src }],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Sen:wght@400..800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={inter.className}>
        <StoreProvider>
          <Navbar />
          <div className="mx-auto 2xl:container px-2">
            {children}

            <Footer />
          </div>
        </StoreProvider>
      </body>
    </html>
  );
}
