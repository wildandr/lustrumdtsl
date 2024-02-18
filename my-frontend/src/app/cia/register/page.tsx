"use client";
import React from "react";
import Image from "next/image";
import { Form } from "@/component/module/cia/register/Form";
import { Objects } from "@/component/module/cia/register/Objects";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Register() {
    const router = useRouter();

    useEffect(() => {
        const token = localStorage.getItem("token");
        const userId = localStorage.getItem("user_Id");

        if (token && userId) {
            router.push("/cia/dashboard/user");
        }
    }, []);
    return (
        <main className=" w-full max-[385px]:h-[180vh] h-[140vh] min-[475px]:h-[160vh] sm:h-[170vh] md:h-[100vh] lg:h-[100vh] bg-[#058369] font-sans overflow-x-hidden">
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
                className="hidden sm:flex w-full h-full object-cover z-0"
            />
            <div className=" w-full  max-[385px]:h-[160vh] h-[130vh] min-[475px]:h-[140vh] sm:h-[155vh] md:h-[100vh] mt-20 md:mt-0 hero absolute top-0  z-0 ">
                <Image
                    src="/bgform.png"
                    alt="form"
                    width={500}
                    height={500}
                    className="hidden md:flex w-[45%] absolute right-0 top-10 md:top-20  md:h-[650px] min-[800px]:h-[670px] lg:h-[640px] xl:h-[620px] 2xl:h-[78%] "
                />
                <Image
                    src="/bgFormMobile.png"
                    alt="form"
                    width={500}
                    height={500}
                    className="z-0 md:hidden absolute bottom-0 right-5 left-5 max-[385px]:h-[50%] h-[60%] min-[475px]:h-[53%]  sm:h-[50%]  w-[92vw]"
                />

                <Form />
                <Objects />
            </div>
        </main>
    );
}
