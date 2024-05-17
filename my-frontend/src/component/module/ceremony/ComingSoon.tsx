"use client";
import Image from "next/image";
import Marquee from "react-fast-marquee";

export default function ComingSoon() {
  const backgroundImage = {
    backgroundImage: `url(/assets/ceremony/bg_renjana.png)`,
    backgroundSize: "cover",
    backgroundPosition: "25%",
    backgroundRepeat: "no-repeat",
  };

  return (
    <>
      <div
        style={backgroundImage}
        className="min-h-screen relative flex flex-col justify-center items-center"
      >
        <div className="flex absolute w-full top-0 h-[12%] lg:h-[18%] items-center justify-start overflow-clip py-4 ps-[10%] bg-creamCeremony-500 ">
          <Image
            src={`/assets/ceremony/logo_renjana.svg`}
            alt=""
            width={1000}
            height={1000}
            className="w-[30%] bg-creamCeremony-500 h-auto z-[9999999999999999999]"
          />
        </div>
        <Image
          src={`/assets/ceremony/coming_soon.svg`}
          alt=""
          width={1000}
          height={1000}
          className="w-[80%] lg:w-[40%] h-auto me-[5%]"
        />

        <div className="w-full bg-redCeremony-500 py-2 px-9 absolute bottom-[8%]">
          <Marquee gradient={false} speed={40} autoFill={true}>
            <p className="font-mudstone text-white text-[2.5rem]">ENJANA - R</p>
          </Marquee>
        </div>
      </div>
    </>
  );
}
