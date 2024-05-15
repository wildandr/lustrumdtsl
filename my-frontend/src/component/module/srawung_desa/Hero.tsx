"use client";
import Image from "next/image";
import Link from "next/link";
import localFont from "next/font/local";

const backgroundImage = {
  backgroundImage: "url(/assets/srawung/bg_hero_foto.png)",
  backgroundSize: "cover",
  backgroundPosition: "top",
  backgroundRepeat: "no-repeat",
};

export function Hero() {
  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-lightGreenSrawung-500 relative">
      <div className="h-full w-full absolute p-[3%] pt-[20%] md:pt-[10%] lg:p-[1.5%] lg:pt-[5.75%]">
        <div
          style={backgroundImage}
          className="bg-lightGreenSrawung-500 w-full h-full rounded-3xl bg-blend-multiply"
        >
          <div className="w-full h-full relative overflow-clip">
            <Image
              src={`/assets/srawung/ornamen_atas_srawung.svg`}
              alt=""
              height={1000}
              width={1000}
              className="absolute top-0 left-0 w-[50%] lg:w-[30%] rounded-s-3xl h-auto"
            />
            <Image
              src={`/assets/srawung/ornamen_bawah_srawung.svg`}
              alt=""
              height={1000}
              width={1000}
              className="absolute bottom-0 right-0 w-[50%] lg:w-[20%] rounded-ee-3xl h-auto"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col w-[80%] lg:w-[70%] items-center justify-center gap-4 z-50">
        <div className="w-[70%] flex flex-row justify-center items-center gap-4">
          <Image
            src={`/assets/srawung/logo_lustrum_cream.png`}
            alt=""
            height={1000}
            width={1000}
            className="h-[5rem] md:h-[5.5rem] 2xl:h-[6rem] w-auto"
          />
          <Image
            src={`/assets/srawung/logo_srawung_cream.svg`}
            alt=""
            height={1000}
            width={1000}
            className="h-[5rem] md:h-[5.5rem] 2xl:h-[6rem] w-auto"
          />
        </div>
        <p
          className={`text-4xl lg:text-7xl 2xl:text-7xl font-Jawa_Palsu text-creamSrawung-500 font-bold text-center`}
        >
          Srawung Desa
        </p>
        <p
          className={`text-xs md:text-lg 2xl:text-xl font-sf_pro_display text-creamSrawung-500 text-center px-[5%] lg:px-[10%]`}
        >
          Terinspirasi oleh Tri Dharma Perguruan, Tinggi, Srawung Desa 2024
          merupakan kolaborasi antara mahasiswa dan dosen Teknik Sipil dan
          Lingkungan UGM untuk menyumbangkan pemikiran dan solusi konstruktif
          dalam mendukung kemajuan masyarakat pedesaan, menjadikan pengabdian
          pada masyarakat sebagai fokus utama.
        </p>
        <div className="flex flex-col lg:flex-row w-[70%] gap-4 mt-5 justify-center items-center">
          <Link
            href={`/lustrum#sponsor_lustrum`}
            className="flex flex-row w-full lg:w-[40%] justify-center bg-creamSrawung-500 text-lightGreenSrawung-500 px-4 py-2 rounded-lg font-bold text-xs lg:text-base hover:opacity-50 items-center z-50"
          >
            Donasi KMTSL Berbagi
          </Link>
          <Link
            href={`#tema_claproyex`}
            className="flex flex-row w-full lg:w-[40%] justify-center border border-creamSrawung-500 text-creamSrawung-500 px-4 py-2 rounded-lg font-bold text-xs lg:text-base hover:opacity-50 items-center z-50"
          >
            Explore Event
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="20"
                height="100"
                viewBox="0 0 24 24"
                className="fill-current text-creamSrawung-500 h-5"
              >
                <path d="M11.109,3L11.109,3C9.78,3,8.988,4.481,9.725,5.587L14,12l-4.275,6.413C8.988,19.519,9.78,21,11.109,21h0 c0.556,0,1.076-0.278,1.385-0.741l4.766-7.15c0.448-0.672,0.448-1.547,0-2.219l-4.766-7.15C12.185,3.278,11.666,3,11.109,3z"></path>
              </svg>
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Hero;
