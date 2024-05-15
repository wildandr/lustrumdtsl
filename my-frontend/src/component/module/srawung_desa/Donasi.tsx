"use client";

import Link from "next/link";
import Image from "next/image";

export default function Donasi() {
  const backgroundImage = {
    backgroundImage: "url(/assets/srawung/bg_donasi.png)",
    backgroundSize: "cover",
    backgroundPosition: "top",
    backgroundRepeat: "no-repeat",
  };

  return (
    <div className="flex flex-col min-h-[50vh] justify-center items-center bg-creamSrawung-500 p-[5%]">
      <div
        style={backgroundImage}
        className="relative overflow-clip flex flex-col w-full h-full py-[15%] lg:py-[5%] rounded-3xl justify-center items-center text-center"
      >
        <Image
          src={`/assets/srawung/ornamen_donasi.svg`}
          alt=""
          width={1000}
          height={1000}
          className="absolute w-full h-auto bottom-0"
        />
        <p className="text-creamSrawung-500 lg:text-2xl font-bold font-sf_pro_display ">
          Srawung Desa 2024
        </p>
        <p className="text-creamSrawung-500 text-5xl lg:text-7xl font-bold font-Jawa_Palsu py-6">
          Open Donation
        </p>
        <Link
          className="text-creamSrawung-500 text-base lg:text-2xl font-bold font-sf_pro_display underline mb-6"
          href="https://bit.ly/OPENDONASIBARANG2024"
        >
          https://bit.ly/OPENDONASIBARANG2024
        </Link>
        <Link
          href={
            "https://www.instagram.com/srawungdesa_kmtsl?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
          }
          className="text-creamSrawung-500 lg:text-base font-bold font-sf_pro_display hover:underline"
        >
          Instagram = @srawungdesa_kmtsl
        </Link>
        <Link
          href={
            "https://www.tiktok.com/@srawungdesa_kmtsl?is_from_webapp=1&sender_device=pc"
          }
          className="text-creamSrawung-500 lg:text-base font-bold font-sf_pro_display hover:underline"
        >
          tiktok = @srawungdesa_kmtsl
        </Link>
      </div>
    </div>
  );
}
