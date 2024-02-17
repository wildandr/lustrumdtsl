"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export function Hero() {
    const [rotation, setRotation] = useState(0);
    const [direction, setDirection] = useState(1);

    useEffect(() => {
        const interval = setInterval(() => {
            if (rotation >= 30 || rotation <= 1) {
                setDirection((prevDirection) => -prevDirection);
            }

            setRotation((prevRotation) => prevRotation + 30 * direction);
        }, 1000);

        return () => clearInterval(interval);
    }, [rotation, direction]);

    return (
        <>
            <Image
                src={`/assets/sbc/helm.png`}
                className="h-28 w-auto absolute top-[30%] left-[15%]"
                width={1000}
                height={1000}
                style={{ transform: `rotate(${rotation}deg)` }}
                alt={""}
            />
            <Image
                src={`/assets/sbc/lustrum_logo.png`}
                className="h-28 w-auto absolute top-[15%] left-[30%]"
                width={1000}
                height={1000}
                style={{ transform: `rotate(${rotation}deg)` }}
                alt={""}
            />
            <Image
                src={`/assets/sbc/craft_logo.png`}
                className="h-28 w-auto absolute top-[15%] right-[30%]"
                width={1000}
                height={1000}
                style={{ transform: `rotate(${rotation}deg)` }}
                alt={""}
            />
            <Image
                src={`/assets/sbc/screw_key.png`}
                className="h-28 w-auto absolute top-[30%] right-[15%]"
                width={1000}
                height={1000}
                style={{ transform: `rotate(${rotation}deg)` }}
                alt={""}
            />
            <div className="flex flex-col w-full items-center justify-center">
                <div className="flex flex-col items-center text-center flex-grow flex-shrink">
                    <Image
                        src="/assets/sbc/title.png"
                        className="w-[769px] h-auto justify-center z-50 pb-8"
                        width={1000}
                        height={1000}
                        alt=""
                    />
                </div>
            </div>
        </>
    );
}