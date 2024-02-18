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
        className="max-[385px]:h-10 h-14 sm:h-20 md:h-24 lg:h-28 w-auto absolute mx-auto max-[385px]:top-[10%] top-[8%] sm:top-[10%] lg:top-[12%]  lg:left-[20%] lg:right-[80%] left-0 right-0  "
        width={1000}
        height={1000}
        style={{ transform: `rotate(${rotation}deg)` }}
        alt={""}
      />

      <Image
        src={`/assets/cia/craft_logo.png`}
        className="max-[385px]:h-10 max-[385px]:top-[15%] h-14 sm:h-20 md:h-24 lg:h-28 w-auto absolute right-[10%] lg:right-[20%]  top-[13%] sm:top-[18%] lg:top-[12%] md:flex"
        width={1000}
        height={1000}
        style={{ transform: `rotate(${rotation}deg)` }}
        alt={""}
      />

      <Image
        src={`/assets/cia/helm.png`}
        className="max-[385px]:h-8 max-[385px]:top-[15%] h-10 sm:h-[4rem] md:h-20 w-auto absolute top-[13%] sm:top-[18%] lg:top-[25%] left-[10%] lg:left-[5%] "
        width={1000}
        height={1000}
        style={{ transform: `rotate(${rotation}deg)` }}
        alt={""}
      />

      <Image
        src={`/assets/cia/screw_key.png`}
        className="max-[385px]:h-8 h-12 sm:h-[4rem] md:h-[4.5rem] lg:h-20 w-auto absolute max-[385px]:top-[35%] top-[30%] sm:top-[44%]  md:top-[50%] lg:bottom-[15%] left-[10%] md:hidden"
        width={1000}
        height={1000}
        style={{ transform: `rotate(${rotation}deg)` }}
        alt={""}
      />

      <Image
        src={`/assets/cia/chart_down.png`}
        className="max-[385px]:h-8 w-8 h-8 sm:h-[2.5rem] md:h-[3rem] sm:w-auto lg:h-24 lg:w-auto absolute max-[385px]:top-[35%]% top-[30%] sm:top-[44%] md:top-[50%] lg:bottom-[15%] right-[10%] md:hidden"
        width={1000}
        height={1000}
        style={{ transform: `rotate(${rotation}deg)` }}
        alt={""}
      />
      <Image
        src={`/assets/cia/screw_key.png`}
        className="h-24 w-auto absolute top-[25%]  right-[5%] lg:flex hidden"
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
                isDeviceGreaterThanLg ? `/logociaDesktop.png` : `/logocia.png`
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
