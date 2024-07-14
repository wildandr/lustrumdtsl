"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Marquee from "react-fast-marquee";

export default function LineUp() {
  const backgroundImage = {
    backgroundImage: `url(/assets/ceremony/bg_lineup.png)`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  };

  const lineupRef = useRef(null);
  const lineupMobileRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ repeat: -1, yoyo: true });
    const tlMobile = gsap.timeline({ repeat: -1, yoyo: true });
    tl.to(lineupRef.current, {
      duration: 10,
      right: "0%",
      ease: "linear",
    }).to(lineupRef.current, {
      duration: 10,
      right: "-60%",
      ease: "linear",
    });

    tlMobile
      .to(lineupMobileRef.current, {
        duration: 10,
        objectPosition: "100%",
        ease: "linear",
      })
      .to(lineupMobileRef.current, {
        duration: 10,
        objectPosition: "0%",
        ease: "linear",
      });
  }, []);

  return (
    <div
      style={backgroundImage}
      className="min-h-screen flex flex-col bg-darkGreyCeremony-500 items-center px-[10%] pt-[20%] lg:pt-[5%] relative overflow-x-hidden"
    >
      <p className="w-full text-lightCreamCeremony-500 font-bold font-times_new_rowman italic text-7xl md:text-8xl xl:text-9xl text-center md:text-left">
        Line Up
      </p>
      <Image
        src="/assets/ceremony/lineup.png"
        ref={lineupRef}
        width={1920}
        height={1080}
        alt="lineup"
        objectFit="cover"
        className="absolute h-full w-full top-[-5%] object-cover object-left lg:right-[-60%] hidden lg:flex"
      />
      <Image
        src="/assets/ceremony/lineup.png"
        ref={lineupMobileRef}
        width={1920}
        height={1080}
        alt="lineup"
        objectFit="cover"
        className="absolute h-[80%] w-full top-0 object-cover lg:hidden"
      />

      <div className="w-full bg-redCeremony-500 py-2 absolute bottom-[0] z-10">
        <Marquee gradient={false} speed={40} autoFill={true}>
          <p className="font-mudstone text-white text-3xl lg:text-[2.5rem] overflow-hidden">
            ENJANA - R
          </p>
        </Marquee>
      </div>
    </div>
  );
}
