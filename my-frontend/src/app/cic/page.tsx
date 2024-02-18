"use client";

import { Form } from "@/component/module/cic/Form";
import { Hero } from "@/component/module/cic/Hero";
import Image from "next/image";

export default function sbc() {
    const backgroundImage = {
        backgroundImage: `url(/assets/cia/bg_texture_cia.png)`,
        backgroundSize: "contain",
        backgroundPosition: "center",
        backgroundRepeat: "repeat",
    };

    return (
        <div className=" bg-cic md:h-[260vh] min-[820px]:h-[260vh] lg:h-[300vh] xl:h-[300vh] 2xl:h-[280vh]" >
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
