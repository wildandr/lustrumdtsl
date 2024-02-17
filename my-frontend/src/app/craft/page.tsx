"use client";

import { Form } from "@/component/module/craft/Form";
import { Hero } from "@/component/module/craft/Hero";

export default function sbc() {
    const backgroundImage = {
        backgroundImage: `url(/assets/cia/bg_texture_cia.png)`,
        backgroundSize: "contain",
        backgroundPosition: "center",
        backgroundRepeat: "repeat",
    };

    return (
        <div className=" bg-craft" style={backgroundImage}>
            <Hero />
            <Form />
        </div>
    );
}
