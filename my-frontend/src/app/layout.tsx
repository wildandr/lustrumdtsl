"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import { NextUIProvider } from "@nextui-org/react";
import Nav from "../component/layout/Nav";
import { Toaster } from "react-hot-toast";
import localFont from "next/font/local";
import { League_Spartan, Montserrat } from "next/font/google";

const league_spartan = League_Spartan({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-league-spartan",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
});

const inter = Inter({ subsets: ["latin"] });

const jawa = localFont({
  src: [
    {
      path: "../../public/assets/font/jawa-palsu.ttf",
      weight: "400",
    },
    {
      path: "../../public/assets/font/jawa-palsu.ttf",
      weight: "700",
    },
  ],
  variable: "--font-jawa",
});

const SF_Pro_Display = localFont({
  src: [
    {
      path: "../../public/assets/font/SF-Pro-Display.otf",
      weight: "400",
    },
    {
      path: "../../public/assets/font/SF-Pro-Display-bold.otf",
      weight: "700",
    },
  ],
  variable: "--font-sf-pro-display",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      className={`
         ${jawa.variable} 
         ${league_spartan.variable} 
         ${montserrat.variable} 
         ${SF_Pro_Display.variable}
         `}
      lang="en"
    >
      <head>
        <link rel="icon" href="/assets/lustrum/logo_lustrum_vektor.svg" />
      </head>
      <body className={inter.className}>
        <NextUIProvider>
          <Toaster
            position="bottom-center"
            toastOptions={{
              className: "z-[20000]",
            }}
          />
          <Nav />
          {children}
        </NextUIProvider>
      </body>
    </html>
  );
}
