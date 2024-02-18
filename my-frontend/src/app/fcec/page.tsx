"use client";

import { Form } from "@/component/module/fcec/Form";
import { Hero } from "@/component/module/fcec/Hero";
import Image from "next/image";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function FCEC() {
    const router = useRouter();

    useEffect(() => {
        const token = localStorage.getItem("token");
        const userId = localStorage.getItem("user_Id");

        if (!token || !userId) {
            router.push("/cia/login");
        }
    }, []);

    const backgroundImage = {
        backgroundImage: `url(/assets/cia/bg_texture_cia.png)`,
        backgroundSize: "contain",
        backgroundPosition: "center",
        backgroundRepeat: "repeat",
    };

    return (
        <div className=" bg-fcec md:h-[280vh] min-[820px]:h-[280vh] lg:h-[325vh] xl:h-[315vh] 2xl:h-[300vh] min-[1720px]:h-[310vh]" >
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
