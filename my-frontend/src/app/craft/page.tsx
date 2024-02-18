"use client";

import { Form } from "@/component/module/craft/Form";
import { Hero } from "@/component/module/craft/Hero";
import Image from "next/image";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function CRAFT() {
    const router = useRouter();

    useEffect(() => {
        const token = localStorage.getItem("token");
        const userId = localStorage.getItem("user_Id");

        if (!token || !userId) {
            router.push("/cia/login");
        }
    }, []);
    return (
<div className=" bg-craft md:h-[200vh] lg:h-[250vh] xl:h-auto" >
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
