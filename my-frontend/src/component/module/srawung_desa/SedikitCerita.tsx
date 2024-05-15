"use client";
import Image from "next/image";

export default function SedikitCerita() {
  return (
    <div className="flex justify-center items-center px-4 xl:px-24 bg-creamSrawung-500 py-[3rem]">
      <div
        style={{ boxShadow: "0px 10px 0px 0px #07390A" }}
        className="flex flex-col lg:flex-row justify-center items-center lg:px-[4.5rem] py-[1.5rem] lg:py-[2.25rem] rounded-3xl border-5 border-[#0A4C0E] bg-lightGreenSrawung-500"
      >
        <div className="w-[90%] lg:w-[30%] flex flex-row justify-center items-end pb-4">
          <div className="flex">
            <Image
              src={`/assets/srawung/gunungan_kiri.svg`}
              alt=""
              height={1000}
              width={1000}
              className="w-full h-auto lg:h-full lg:w-auto object-contain"
            />
          </div>
          <div className="flex">
            <Image
              src={`/assets/srawung/gunungan_kanan.svg`}
              alt=""
              height={1000}
              width={1000}
              className="w-full h-auto lg:h-full lg:w-auto object-contain"
            />
          </div>
        </div>
        <div className="w-[90%] lg:w-[70%] text-creamSrawung-500">
          <p
            style={{ textShadow: "1px 1px 0px rgba(0, 0, 0, 0.25)" }}
            className=" font-sf_pro_display font-bold xl:text-2xl"
          >
            Sedikit Cerita
          </p>
          <p
            style={{ textShadow: "2.123px 3.538px 0px rgba(0, 0, 0, 0.25)" }}
            className=" text-5xl lg:text-[3.5rem] 2xl:text-[3.5rem] font-Jawa_Palsu font-bold py-5 self-start"
          >
            Dusun Mitra
          </p>
          <p className=" font-Montserrat text-sm xl:text-base text-justify">
            Pada kegiatan Srawung Desa 2024 ini sasaran dusun mitra, yaitu Dusun
            Watukangsi, Desa Wukirharjo, Kecamatan Prambanan, Kabupaten Sleman,
            DIY. Dusun ini berpotensi pada sektor sosial masyarakat dan budaya.
            Dusun ini berpotensi pada sektor sosial masyarakat dikarenakan pada
            dusun tersebut belum memiliki balai dusun. Sedangkan, pada sektor
            budaya desa tersebut memiliki potensi meliputi beberapa kebudayaan
            yang berkarakteristik, seperti jatilan yang dapat dikembangkan.
            Keunggulan lain dari desa tersebut adalah memiliki pemuda karang
            taruna yang aktif, sehingga memudahkan kerjasama dan gotong royong
            dalam pengembangan desa.
          </p>
        </div>
      </div>
    </div>
  );
}
