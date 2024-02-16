"use client";
import React, { useEffect, useState, FormEvent } from "react";
import Image from "next/image";
import { Form } from "@/component/module/cia/login/Form";
import { Objects } from "@/component/module/cia/login/Objects";

export default function Login() {
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
    <main className=" w-full max-[385px]:h-[180vh] h-[140vh] md:h-[100vh] bg-[#058369] font-sans overflow-x-hidden">
      <Image
        src="/bgciamobile.png"
        alt="bgcia"
        width={1000}
        height={1000}
        className="fixed sm:hidden w-full h-full object-cover z-10"
      />
      <Image
        src="/bgcia.png"
        alt="bgcia"
        width={1000}
        height={1000}
        className="hidden sm:flex w-full h-full object-cover z-50"
      />

      <div className=" w-full md:fixed  max-[385px]:h-[160vh] h-[120vh] md:h-[100vh] hero absolute top-0 mt-20  z-0">
        <Image
          src="/bgform.png"
          alt="form"
          width={500}
          height={500}
          className="hidden md:flex w-[45%] absolute right-0 top-10 md:top-20 h-[70%] md:h-[56%] lg:h-[65%] xl:h-[70%] "
        />
        <Image
          src="/bgFormMobile.png"
          alt="form"
          width={500}
          height={500}
          className="z-20 md:hidden absolute bottom-0 right-5 left-5 max-[385px]:h-[45%] h-[53%] sm:h-[48%]  w-[92vw]"
        />

        <Form />
        <Objects />

        
      </div>
    </main>
  );
}
