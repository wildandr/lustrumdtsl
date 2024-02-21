"use client";

import { Form } from "@/component/module/cic/Form";
import { Hero } from "@/component/module/cic/Hero";
import Image from "next/image";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";

export default function CIC() {
    const router = useRouter();

    useEffect(() => {
        const userIdFromLocalStorage = Cookies.get("user_Id");
        const token = Cookies.get("token");

        if (
            typeof window !== "undefined" &&
            (!userIdFromLocalStorage || !token)
        ) {
            router.push("/cia/login");
        }
    }, []);

    return (
        <div className=" bg-cic h-auto">
            <Image
                src="/bgciamobile.png"
                alt="bgcia"
                width={1000}
                height={1000}
                className="fixed sm:hidden w-full h-full object-cover z-0"
            />
            <Image
                src="/bgcia.png"
                alt="bgcia"
                width={1000}
                height={1000}
                className="hidden fixed sm:flex w-full h-full object-cover z-10"
            />
            <Hero />
            <Form />
        </div>
    );
}
