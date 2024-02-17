"use client";

import { Form } from "@/component/module/sbc/Form";
import { Hero } from "@/component/module/sbc/Hero";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function SBC() {
    const backgroundImage = {
        backgroundImage: `url(/assets/cia/bg_texture_cia.png)`,
        backgroundSize: "contain",
        backgroundPosition: "center",
        backgroundRepeat: "repeat",
    };

    const router = useRouter();

    useEffect(() => {
        const token = localStorage.getItem("token");
        const userId = localStorage.getItem("user_id");

        if (!token || !userId) {
            router.push("/cia/login");
        }
    }, []);

    return (
        <div className=" bg-sbc-orange" style={backgroundImage}>
            <Hero />
            <Form />
        </div>
    );
}
