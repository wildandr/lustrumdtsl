"use client";

import { Form } from "@/component/module/fcec/Form";
import { Hero } from "@/component/module/fcec/Hero";

export default function sbc() {
    const backgroundImage = {
        backgroundImage: `url(/assets/cia/bg_texture_cia.png)`,
        backgroundSize: "contain",
        backgroundPosition: "center",
        backgroundRepeat: "repeat",
    };

    return (
        <div className=" bg-fcec" style={backgroundImage}>
            <Hero />
            <Form />
        </div>
    );
}
