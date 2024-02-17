"use client";
import React, { useEffect, useState, FormEvent } from "react";
import Image from "next/image";
import { Objects } from "@/component/module/cia/login/Objects";
import { Form } from "@/component/module/cia/login/Form";

export default function Login() {
   
    return (
        <main className=" w-full max-[385px]:h-[180vh] h-[140vh] md:h-[100vh] bg-[#058369] font-sans overflow-x-hidden">
            <nav className="fixed w-full flex z-50 justify-between items-center h-16  bg-[#02745D]  text-white  shadow-sm ">
                <div className="pl-8">CIA</div>
                <div className="pr-8">Register</div>
            </nav>
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

            <div className=" w-full md:fixed  max-[385px]:h-[160vh] h-[120vh] md:h-[100vh] hero absolute top-0 mt-20  z-0">
                <Image
                    src="/bgform.png"
                    alt="form"
                    width={500}
                    height={500}
                    className="hidden md:flex w-[45%] absolute right-0 top-10 md:top-20 h-[70%] md:h-[56%] lg:h-[60%] xl:h-[64%] "
                />
                <Image
                    src="/bgFormMobile.png"
                    alt="form"
                    width={500}
                    height={500}
                    className="z-20 md:hidden absolute bottom-0 right-5 left-5 max-[385px]:h-[45%] h-[53%] sm:h-[48%]  w-[92vw]"
                />

                
                <Form />
                <Objects />
            </div>
        </main>
    );
}
