"use client";

import { mix } from "framer-motion";
import Image from "next/image";

export default function Rangkaian() {
  return (
    <div className="p-[5%] bg-creamSrawung-500 flex justify-center items-center">
      <div className="relative overflow-clip w-full justify-center items-center flex flex-col rounded-3xl border-5 border-[#0A4C0E] bg-lightGreenSrawung-500 gap-6 py-[2rem] lg:py-[4rem]">
        <Image
          src={`/assets/srawung/bg_rangkaian.png`}
          alt=""
          height={1000}
          width={1000}
          className="absolute h-full w-full hidden lg:block mix-blend-multiply"
        />
        <Image
          src={`/assets/srawung/bg_rangkaian_mobile.png`}
          alt=""
          height={1000}
          width={1000}
          className="absolute h-full w-full lg:hidden mix-blend-multiply"
        />
        <div className="flex flex-row justify-center items-center gap-5 p-4">
          <Image
            src={`/assets/srawung/rangkaian_kiri.svg`}
            alt=""
            height={1000}
            width={1000}
            className="h-full w-auto object-contain hidden lg:block"
          />
          <div className="flex flex-col items-center justify-center text-creamSrawung-500">
            <p className=" font-sf_pro_display font-bold text-xl xl:text-2xl">
              Rangkaian Kegiatan
            </p>
            <p className="text-center font-Jawa_Palsu text-3xl xl:text-[3.5rem] lg:mt-6">
              Srawung Desa
            </p>
          </div>
          <Image
            src={`/assets/srawung/rangkaian_kanan.svg`}
            alt=""
            height={1000}
            width={1000}
            className="h-full w-auto object-contain hidden lg:block"
          />
        </div>
        <div className="flex flex-col lg:flex-row justify-center w-[90%] gap-6">
          <div className="flex flex-col items-center lg:w-[50%] text-creamSrawung-500 gap-4 justify-center">
            <p className=" font-Jawa_Palsu text-2xl xl:text-4xl self-start">
              1. Sipil Mengajar
            </p>
            <p className=" font-Montserrat text-xs xl:text-base text-justify">
              Sipil Mengajar adalah bentuk pengabdian mahasiswa kepada
              masyarakat antara mahasiswa dengan anak-anak di Dusun Watukangsi.
              Tujuan dari Sipil Mengajar ini adalah untuk meningkatkan
              kreativitas dan mendorong keinginan untuk belajar anak-anak.
              Target dari Sipil Mengajar tahun ini adalah anak-anak sekolah
              dasar yang berada di Dusun Watukangsi. Untuk kegiatan yang
              dilakukan akan bervariasi, meliputi bidang ketekniksipilan,
              kesehatan, dan juga pelajaran umum di tingkatan terkait. Tentunya
              hal ini selaras dengan poin SDGs ke- 4 yaitu Pendidikan
              berkualitas
            </p>
          </div>
          <div className="lg:w-[50%] self-center">
            <Image
              src={`/assets/srawung/sipil_mengajar.png`}
              alt=""
              height={1000}
              width={1000}
              className="h-full w-auto lg:w-full lg:h-auto p-[5%]"
            />
          </div>
        </div>
        <div className="flex flex-col lg:flex-row-reverse justify-center w-[90%] gap-6">
          <div className="flex flex-col items-center lg:w-[50%] text-creamSrawung-500 gap-4 justify-center">
            <p className=" font-Jawa_Palsu text-2xl xl:text-4xl self-start">
              2. KMTSL Berbagi
            </p>
            <p className=" font-Montserrat text-xs xl:text-base text-justify">
              KMTSL berbagi merupakan salah satu kegiatan pokok di Srawung Desa
              2024, sesuai dengan namanya KMTSL berbagi adalah bentuk pengabdian
              mahasiswa kepada masyarakat dengan cara berbagi baik dalam bentuk
              materialistik maupun non-materialistik. Target kami pada KMTSL
              Berbagi kali ini adalah seluruh warga Dusun Watukangsi, Desa
              Wukirharjo. Rencana program-program yang akan kami bawakan adalah
              pengecekan kesehatan dengan kolaborasi bersama puskesmas setempat,
              pembagian sembako yang akan dibersamakan dengan Festival Budaya,
              dan pasar murah. Hal ini selaras dengan poin SDGs ke- 2 yaitu No
              Hunger dan ke- 3 yaitu Good Health and Well Being
            </p>
          </div>
          <div className="lg:w-[50%] self-center">
            <Image
              src={`/assets/srawung/kmtsl_berbagi.png`}
              alt=""
              height={1000}
              width={1000}
              className="h-full w-auto lg:w-full lg:h-auto p-[5%]"
            />
          </div>
        </div>
        <div className="flex flex-col lg:flex-row justify-center w-[90%] gap-6">
          <div className="flex flex-col items-center lg:w-[50%] text-creamSrawung-500 gap-4 justify-center">
            <p className=" font-Jawa_Palsu text-2xl xl:text-4xl self-start">
              3. Survei dan Perencanaan
            </p>
            <p className=" font-Montserrat text-xs xl:text-base text-justify">
              Survei dan perencanaan adalah salah satu bentuk pengabdian
              mahasiswa teknik sipil dalam membangun kemajuan desa.
              Berkesesuaian dengan kebutuhan masyarakat desa, survei dan
              perencanaan akan hadir dalam membantu menyediakan fasilitas yang
              dibutuhkan oleh masyarakat. Pada tahun ini, berfokus pada
              pembangunan infrastruktur berupa balai dusun. Dengan pembangunan
              balai dusun ini kami harapkan dapat menjadi wadah yang bermanfaat
              bagi warga desa.
            </p>
          </div>
          <div className="lg:w-[50%] self-center">
            <Image
              src={`/assets/srawung/survei_dan_perencanaan.png`}
              alt=""
              height={1000}
              width={1000}
              className="h-full w-auto lg:w-full lg:h-auto p-[5%]"
            />
          </div>
        </div>
        <div className="flex flex-col lg:flex-row-reverse justify-center w-[90%] gap-6">
          <div className="flex flex-col items-center lg:w-[50%] text-creamSrawung-500 gap-4 justify-center">
            <p className=" font-Jawa_Palsu text-2xl xl:text-4xl self-start">
              4. Festival Budaya
            </p>
            <p className=" font-Montserrat text-xs xl:text-base text-justify">
              Festival budaya merupakan kegiatan yang dilakukan sebagai bentuk
              kolaborasi mahasiswa dengan warga Desa Wukirharjo untuk
              melestarikan serta dapat mengembangkan dan mengenalkan lebih jauh
              kebudayaan yang ada kepada masyarakat luas. Festival kebudayaan
              ini akan diadakan bagi seluruh warga Dusun Watukangsi untuk turut
              serta menyukseskan dan memeriahkan kegiatan festival ini. Kegiatan
              ini akan berlangsung menampilkan kebudayaan seperti jathilan,
              kegiatan rohani, berupa mawaris. Kegiatan ini merupakan kegiatan
              rutin Desa Wukirharjo dan pada tahun ini akan berkolaborasi dengan
              Srawung Desa dan berlangsung bertepatan dengan hari lahir
              pancasila sebagai perwujudan untuk mengamalkan nilai dan moral
              yang terkandung dalam butir-butir sila.
            </p>
          </div>
          <div className="lg:w-[50%] self-center">
            <Image
              src={`/assets/srawung/festival_budaya.png`}
              alt=""
              height={1000}
              width={1000}
              className="h-full w-auto lg:w-full lg:h-auto p-[5%]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
