"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import { NextUIProvider } from "@nextui-org/react";
import Nav from "../component/layout/Nav";


const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <head>
                <link rel="icon" href="/assets/lustrum/logo_kmtsl_vektor.svg" />
            </head>
            <body className={inter.className}>
                <NextUIProvider>

                    <Nav />
                    {children}
            
                </NextUIProvider>
            </body>
        </html>
    );
}
