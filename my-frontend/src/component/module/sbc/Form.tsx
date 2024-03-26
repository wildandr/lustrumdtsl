"use client";

import React, { useState, FormEvent, useEffect } from "react";
import { Tabs, Tab, Input } from "@nextui-org/react";
import axios from "axios";
import Image from "next/image";
import Cookies from "js-cookie";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

export function Form() {
    const router = useRouter();

    const userIdFromLocalStorage = Cookies.get("user_Id");
    const token = Cookies.get("token");

    useEffect(() => {
        if (!userIdFromLocalStorage || !token) {
            router.push("/cia/login");
        }
    }, []);

    const backgroundHeading = {
        backgroundImage: `url(/assets/sbc/bg_heading_sbc.png)`,
        backgroundSize: "cover",
    };

    const [rotation, setRotation] = useState(0);
    const [direction, setDirection] = useState(1);

    useEffect(() => {
        const interval = setInterval(() => {
            // Jika rotasi mencapai 30 atau 330 derajat, balik arah
            if (rotation >= 30 || rotation <= 1) {
                setDirection((prevDirection) => -prevDirection);
            }
            // Perbarui rotasi sesuai arah pergerakan
            setRotation((prevRotation) => prevRotation + 30 * direction);
        }, 500);

        return () => clearInterval(interval);
    }, [rotation, direction]);

    return (
        <div className="relative px-[5%] lg:px-[13%]  pt-4 pb-28 flex flex-col overflow-hidden sm:overflow-scroll ">
            <div className="flex flex-col lg:justify-center items-center relative min-w-full mt-[2%] lg:mt-[2%]">
                <Image
                    src="/assets/sbc/bg_form_sbc.png"
                    alt="bgcia"
                    width={1000}
                    height={1000}
                    className="absolute sm:flex w-auto lg:h-[105%] h-[1950px]  z-0 pt-[6%] hidden"
                />
                <Image
                    src="/assets/sbc/bg_form_sbc_mobile.png"
                    alt="bgcia"
                    width={1000}
                    height={1000}
                    className="absolute sm:hidden w-full max-[385px]:h-[2200px] left-1 h-[2150px]  min-[480px]:h-[103%] "
                />

                <div className="lg:mt-[5%] 2xl:mt-[4%] mt-[8%] min-[530px]:mt-6 sm:mt-[8%] min-h-screen z-50 flex flex-col">
                    <Image
                        src="/assets/sbc/cia_logo.png"
                        alt="cia"
                        width={1000}
                        height={1000}
                        className="lg:h-32 lg:w-32 absolute lg:left-[10%] 2xl:h-36 2xl:w-36 2xl:left-[20%] 2xl:mt-4 h-14 w-14 sm:w-20 sm:h-20 sm:left-[20%] left-[6%] min-[530px]:left-[17%] lg:flex"
                        style={{ transform: `rotate(${rotation}deg)` }}
                    />
                    <div
                        className="font-LibreBaskerville font-bold lg:text-2xl text-[0.7rem]  lg:py-6 py-2 w-[185px] lg:w-[406px] lg:h-[80px] h-auto text-center mt-[5%] left-0 right-0 mx-auto"
                        style={backgroundHeading}
                    >
                        Formulir Pendaftaran SBC
                    </div>
                    <Image
                        src="/assets/sbc/sbc_logo.png"
                        alt="cia"
                        width={1000}
                        height={1000}
                        className="lg:h-28 lg:w-28 absolute lg:right-[10%] 2xl:h-32 2xl:w-32 2xl:right-[20%] 2xl:mt-4  h-14 w-14 right-[6%] min-[530px]:right-[17%] sm:right-[20%] sm:mt-2 lg:flex"
                        style={{ transform: `rotate(${rotation}deg)` }}
                    />

                    <div className="font-LibreBaskerville text-cia-green lg:mx-[15%] mt-[3%] lg:mb-[1%] lg:text-lg text-[0.7rem] min-w-screen mx-[17%] text-center">
                        Formulir Pendaftaran SBC Sudah Ditutup
                    </div>
                </div>
            </div>
        </div>
    );
}
