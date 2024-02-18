"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

export function Hero() {
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

    const backgroundImage = {
        backgroundImage: `url(/assets/cia/bg_texture_cia.png)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
    };

    const [windowWidth, setWindowWidth] = useState(0);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const md_width = 768;
    const lg_width = 1024;

    const isDeviceGreaterThanLg = windowWidth >= lg_width;

    return (
        <>
            <Image
                src={`/assets/cia/lustrum_logo.png`}
                className="h-20 md:h-28 w-auto absolute top-[10%] lg:top-[10%] lg:left-[20%] lg:right-[80%] left-0 right-0 mx-auto md:left-[30%]"
                width={1000}
                height={1000}
                style={{ transform: `rotate(${rotation}deg)` }}
                alt={""}
            />

            <Image
                src={`/assets/cia/craft_logo.png`}
                className="h-20 md:h-28 w-auto absolute lg:top-[10%] right-[5%] top-[25%] md:right-[30%] md:flex"
                width={1000}
                height={1000}
                style={{ transform: `rotate(${rotation}deg)` }}
                alt={""}
            />

            <Image
                src={`/assets/cia/helm.png`}
                className="h-14 md:h-24 w-auto absolute top-[25%] lg:top-[35%] left-[5%]"
                width={1000}
                height={1000}
                style={{ transform: `rotate(${rotation}deg)` }}
                alt={""}
            />

            <Image
                src={`/assets/cia/screw_key.png`}
                className="h-14 lg:h-28 w-auto absolute bottom-[42%] lg:bottom-[15%] left-[14%] lg:hidden"
                width={1000}
                height={1000}
                style={{ transform: `rotate(${rotation}deg)` }}
                alt={""}
            />

            <Image
                src={`/assets/cia/chart_down.png`}
                className="h-10 lg:h-24 w-auto absolute bottom-[42%] lg:bottom-[15%] right-[10%] lg:hidden"
                width={1000}
                height={1000}
                style={{ transform: `rotate(${rotation}deg)` }}
                alt={""}
            />
            <Image
                src={`/assets/cia/screw_key.png`}
                className="h-20 md:h-28 w-auto absolute top-[25%] lg:top-[35%] right-[5%] lg:right-[10%] lg:flex hidden"
                width={1000}
                height={1000}
                style={{ transform: `rotate(${rotation}deg)` }}
                alt={""}
            />

            <div className="h-auto w-full">
            <div className="flex h-auto w-full  justify-center py-2 px-8">
                    <div className="flex flex-col items-center text-center  mt-[35%] sm:mt-[30%] lg:mt-[28%] xl:mt-[20%]">
                        <Image
                            src={
                                isDeviceGreaterThanLg
                                    ? `/logociaDesktop.png`
                                    : `/logocia.png`
                            }
                            className="max-[380px]:w-[180px] w-[220px] sm:w-[300px] md:w-[340px] lg:w-[580px] xl:w-[600px] 2xl:w-[640px] h-auto justify-center z-50"
                            width={1000}
                            height={1000}
                            alt={""}
                        />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Hero;
