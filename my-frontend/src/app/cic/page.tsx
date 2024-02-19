"use client";

import { Form } from "@/component/module/cic/Form";
import { Hero } from "@/component/module/cic/Hero";
import Image from "next/image";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function CIC() {
    const router = useRouter();

    useEffect(() => {
        let token: string | null = null;
        let userId: string | null = null;
    
        if (typeof localStorage !== 'undefined') {
            token = localStorage.getItem("token");
            userId = localStorage.getItem("user_Id");
        } else if (typeof sessionStorage !== 'undefined') {
            // Fallback to sessionStorage if localStorage is not supported
            token = sessionStorage.getItem("token");
            userId = sessionStorage.getItem("user_Id");
        } else {
            // If neither localStorage nor sessionStorage is supported
            console.log('Web Storage is not supported in this environment.');
        }
    
        if (!token || !userId) {
            router.push("/cia/login");
        }
    }, []);

    return (
        <div className=" bg-cic md:h-[280vh] min-[820px]:h-[280vh] lg:h-[325vh] xl:h-[315vh] 2xl:h-[300vh] min-[1720px]:h-[310vh]">
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
