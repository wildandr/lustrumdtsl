"use client";

import { Form } from "@/component/module/sbc/Form";
import { Hero } from "@/component/module/sbc/Hero";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function SBC() {
    const router = useRouter();

    useEffect(() => {
        let token: string | null = null;
        let userId: string | null = null;

        if (typeof localStorage !== "undefined") {
            token = localStorage.getItem("token");
            userId = localStorage.getItem("user_Id");
        } else if (typeof sessionStorage !== "undefined") {
            token = sessionStorage.getItem("token");
            userId = sessionStorage.getItem("user_Id");
        } else {
            console.log("Web Storage is not supported in this environment.");
        }

        if (!token || !userId) {
            router.push("/cia/login");
        }
    }, []);

    return (
        <div className=" bg-sbc-orange md:h-[290vh] min-[820px]:h-[300vh] lg:h-[340vh] xl:h-[330vh] 2xl:h-[305vh]">
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
