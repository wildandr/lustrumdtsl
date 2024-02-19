import Image from "next/image";
import React, { useEffect, useState } from "react";

export function Objects() {
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
        <div className="flex justify-between items-center mb-48 mt-20 sm:mt-48 ">
            <Image
                src="/logocia.png"
                alt="cia"
                width={1000}
                height={1000}
                className="mx-auto w-[65%] h-[75%] md:w-[33%] md:h-[22%] min-[920px]:h-[28%]  lg:h-[23%] xl:w-[23%] xl:h-[30%] md:absolute md:top-[14rem] min-[920px]:top-[30%]  md:left-20 lg:top-64 lg:left-32 xl:top-64 xl:left-56 2xl:left-64"
            />

            <Image
                src="/ciaIcon1.png"
                alt="icon1"
                width={600}
                height={600}
                className="w-[70px] h-[70px] sm:w-[100px] sm:h-[100px] lg:w-[120px] lg:h-[120px] absolute top-0 left-[43%] sm:left-[18rem] md:left-[20%] md:top-[10%] lg:top-[5rem] lg:left-[22%]  xl:top-20 xl:left-[20rem] 2xl:left-[24rem] 2xl:top-20"
                style={{ transform: `rotate(${rotation}deg)` }}
            />
            <Image
                src="/ciaIcon2.png"
                alt="icon2"
                width={600}
                height={600}
                className="w-[60px] h-[60px] sm:w-[100px] sm:h-[100px] md:w-[80px]  md:h-[80px] lg:w-[100px] lg:h-[100px] xl:w-[120px] xl:h-[120px] absolute top-14 right-[5%] sm:top-20 md:top-[18%] md:left-[42%] lg:left-[26rem] xl:top-[12rem] xl:left-[42%]"
                style={{ transform: `rotate(${rotation}deg)` }}
            />
            <Image
                src="/ciaIcon3Mobile.png"
                alt="icon3"
                width={600}
                height={600}
                className="md:flex hidden w-[40px] h-[40px] sm:w-[100px] sm:h-[100px] md:w-[65px] md:h-[65px] lg:w-[80px] lg:h-[80px] xl:w-[100px] xl:h-[100px]  absolute top-16 left-8 md:top-[12rem] md:left-4 lg:top-[12rem] lg:left-[5rem]"
                style={{ transform: `rotate(${rotation}deg)` }}
            />
            <Image
                src="/ciaIcon3Mobile.png"
                alt="icon3"
                width={600}
                height={600}
                className="md:hidden w-[40px] h-[40px] sm:w-[80px] sm:h-[80px] md:w-[100px] md:h-[100px] absolute top-16 left-8 sm:top-32  md:top-[12rem] md:left-[5rem]"
                style={{ transform: `rotate(${rotation}deg)` }}
            />
            <Image
                src="/ciaIcon4.png"
                alt="icon4"
                width={600}
                height={600}
                className="sm:flex hidden w-[30px] h-[50px] sm:w-[80px] sm:h-[100px] md:w-[60px] md:h-[80px] xl:w-[80px] xl:h-[100px] absolute top-[18rem] left-20 sm:top-[32rem] 
            md:left-[4rem] md:top-[53%] min-[920px]:top-[60%] lg:top-[32rem] xl:top-[30rem]  xl:left-[8rem] 2xl:top-[35rem]"
                style={{ transform: `rotate(${rotation}deg)` }}
            />
            <Image
                src="/ciaIcon4Mobile.png"
                alt="icon4"
                width={600}
                height={600}
                className="sm:hidden w-[30px] h-[50px] sm:w-[50px] sm:h-[80px] md:w-[80px] md:h-[100px] absolute top-[20rem] left-20 sm:top-[30rem] sm:left-[8rem]"
                style={{ transform: `rotate(${rotation}deg)` }}
            />
            <Image
                src="/ciaIcon5.png"
                alt="icon5"
                width={600}
                height={600}
                className="hidden md:flex  sm:w-[50px] md:h-[70px] xl:w-[70px] xl:h-[90px] absolute md:top-[50%]  md:left-[42%] min-[920px]:top-[60%] lg:top-[34rem]
             lg:left-[28rem] xl:top-[30rem] xl:left-[42%] 2xl:top-[35rem]"
                style={{ transform: `rotate(${rotation}deg)` }}
            />
            <Image
                src="/ciaIcon5Mobile.png"
                alt="icon5"
                width={600}
                height={600}
                className="md:hidden w-[50px] h-[50px] sm:w-[80px]  md:w-[70px] md:h-[90px] absolute top-[20rem] right-20 sm:top-[32rem] sm:right-28 md:top-[30rem] md:left-[38rem]"
                style={{ transform: `rotate(${rotation}deg)` }}
            />
            <Image
                src="/ciaIcon6.png"
                alt="icon6"
                width={600}
                height={600}
                className="hidden md:flex md:w-[50px] md:h-[70px] xl:w-[70px] xl:h-[90px] absolute md:top-[60%]  min-[920px]:top-[68%] lg:top-auto lg:bottom-[15%]  xl:top-auto xl:bottom-[15%] md:left-[12rem] lg:left-[16rem] xl:left-[26%]"
                style={{ transform: `rotate(${rotation}deg)` }}
            />
        </div>
    );
}
