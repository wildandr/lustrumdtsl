"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import { NextUIProvider } from "@nextui-org/react";
import Nav from "../component/layout/Nav";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <head>
                <link rel="icon" href="/assets/lustrum/logo_lustrum_vektor.svg" />
            </head>
            <body className={inter.className}>
                <NextUIProvider>
                    <Toaster position="top-center" />
                    <Nav />
                    {children}
                </NextUIProvider>
            </body>
        </html>
    );
}
