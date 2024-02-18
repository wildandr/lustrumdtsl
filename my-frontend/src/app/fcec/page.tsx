"use client";

import { Form } from "@/component/module/fcec/Form";
import { Hero } from "@/component/module/fcec/Hero";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function FCEC() {
    const router = useRouter();

    useEffect(() => {
        const token = localStorage.getItem("token");
        const userId = localStorage.getItem("user_Id");

        if (!token || !userId) {
            router.push("/cia/login");
        }
    }, []);

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
