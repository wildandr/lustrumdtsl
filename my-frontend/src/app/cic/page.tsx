"use client";

import { Form } from "@/component/module/cic/Form";
import { Hero } from "@/component/module/cic/Hero";

export default function sbc() {
    const backgroundImage = {
        backgroundImage: `url(/assets/cia/bg_texture_cia.png)`,
        backgroundSize: "contain",
        backgroundPosition: "center",
        backgroundRepeat: "repeat",
    };

    return (
        <div className=" bg-cic" style={backgroundImage}>
            <Hero />
            <Form />
        </div>
    );
}
