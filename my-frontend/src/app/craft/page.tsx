"use client";

import { Form } from "@/component/module/craft/Form";
import { Hero } from "@/component/module/craft/Hero";
import Image from "next/image";

export default function sbc() {
   

    return (
        <div className=" bg-craft" >
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
