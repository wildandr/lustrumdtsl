"use client";
import Image from "next/image";

export default function Tema() {
  return (
    <div className="relative min-h-screen flex justify-center items-center bg-creamSrawung-500 overflow-x-clip">
      <Image
        src={`/assets/srawung/bg_tema.png`}
        alt=""
        width={1000}
        height={1000}
        className="absolute hidden lg:block bottom-0 left-0 w-full h-auto bg-blend-multiply opacity-25"
      />
      <Image
        src={`/assets/srawung/bg_tema_mobile.png`}
        alt=""
        width={1000}
        height={1000}
        className="absolute lg:hidden bottom-0 left-0 w-full h-auto bg-blend-multiply opacity-25"
      />

      <Image
        width={1000}
        height={1000}
        src={`/assets/srawung/logo_srawung_vektor.svg`}
        alt=""
        className="w-[20%] lg:w-[12%] h-auto absolute left-[-5%] lg:left-[5%] bottom-[-2%] lg:bottom-[10%] z-50 rotate-[-15deg]"
      />

      <Image
        width={1000}
        height={1000}
        src={`/assets/srawung/logo_srawung_vektor.svg`}
        alt=""
        className="w-[20%] lg:w-[12%] h-auto absolute right-[-5%] lg:right-[5%] top-[-2%] lg:top-[10%] z-50 rotate-[15deg]"
      />

      <div className="flex flex-col justify-center items-center py-[5%] mx-[5%] lg:mx-[20%] gap-4 text-lightGreenSrawung-500 z-50">
        <p
          style={{ textShadow: "1px 1px 0px rgba(0, 0, 0, 0.25)" }}
          className="text-center lg:text-left font-sf_pro_display text-lightGreenSrawung-500 xl:text-2xl"
        >
          Tema Umum Srawung Desa 2024
        </p>
        <p
          style={{ textShadow: "1.123px 2.538px 0px rgba(0, 0, 0, 0.25)" }}
          className=" text-center font-Jawa_Palsu text-lightGreenSrawung-500 text-xl xl:text-4xl mb-4"
        >
          “Kolaborasi Bersama Untuk Mewartakan Masa Depan Nusantara”
        </p>
        <p className=" font-Montserrat text-xs xl:text-base text-justify px-[5%]">
          Acara Srawung Desa 2024 kali ini mengangkat tema “Kolaborasi Bersama
          Untuk Mewartakan Masa Depan Nusantara” bermakna terciptanya lingkar
          harmoni kolaborasi untuk mewujudkan pemberdayaan yang tangguh dan
          eksklusif dalam pembangunan bagi masa depan bangsa. Kegiatan Srawung
          Desa 2024 bertujuan menyadarkan mahasiswa DTSL UGM dalam melihat dan
          mengembangkan potensi Dusun Watukangsi, Desa Wukirharjo dalam sektor
          pembangunan, pendidikan dan kebudayaan. Alasan memilih sektor
          kebudayaan hal tersebut sebab sektor ini menjadi konsentrasi utama
          dalam peningkatan yang perlu dilakukan untuk pelestarian budaya agar
          tetap terjaga dan pada pembangunan adalah perlu adanya stratifikasi
          pembangunan yang multiguna. Pada sektor pembangunan kali ini srawung
          desa akan membangun balai dusun sebagai tempat untuk berkumpulnya
          kegiatan formal dan menjadi ruang diskusi bagi masyarakat terhadap
          Dusun Watukangsi.
        </p>
      </div>
    </div>
  );
}
