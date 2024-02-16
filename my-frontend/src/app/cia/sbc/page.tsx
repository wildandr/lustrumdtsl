"use client";

import { Form } from "@/component/module/sbc/Form";
import { Hero } from "@/component/module/sbc/Hero";

export default function sbc() {
    const backgroundImage = {
        backgroundImage: `url(/assets/cia/bg_texture_cia.png)`,
        backgroundSize: "contain",
        backgroundPosition: "center",
        backgroundRepeat: "repeat",
    };

    return (
        <div className=" bg-chiasGreen-500" style={backgroundImage}>
            {/* <Hero /> */}
            <Form />
        </div>
    );
}
