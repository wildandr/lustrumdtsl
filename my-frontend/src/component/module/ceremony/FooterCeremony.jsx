"use client";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const backgroundImage = {
    backgroundImage: `url(/assets/claproyex/texture.png)`,
    backgroundSize: "cover",
    backgroundPosition: "top",
    backgroundRepeat: "no-repeat",
  };

  return (
    <footer
      className={`relative overflow-x-clip max-[385px]:h-[112vh] h-[92vh] min-[450px]:h-[80vh] md:h-[55vh] lg:h-[60vh] xl:h-[48vh] lg:pb-[30%] md:pb-0 bg-darkRedCeremony-500`}
    >
      <div className="flex w-full md:px-8 lg:px-32">
        <div className="w-1/2 h-[0.1rem] bg-lightCreamCeremony-500 " />
      </div>
      <Image
        src="/assets/srawung/srawung_mobile.svg"
        width={1000}
        height={1000}
        alt="Lustrum Logo"
        className="h-full w-auto md:h-[100%] absolute top-0 right-[-30%] z-10 lg:hidden"
      />

      <Image
        src="/assets/srawung/logo_kmtsl_vektor_srawung.svg"
        width={1000}
        height={1000}
        alt="Lustrum Logo"
        className="w-[50%] h-auto absolute bottom-0 right-0 lg:flex hidden"
      />

      <div className="h-[100%] w-full z-20 absolute bottom-0 p-8 lg:px-32">
        <div className="md:flex md:flex-row md:gap-10 md:items-center md:justify-center lg:justify-start">
          <Image
            src="/assets/lustrum/logo.png"
            width={1000}
            height={1000}
            alt="Lustrum Logo"
            className="h-[12%] w-20 "
          />

          <div className="flex-col  flex items-start gap-4 mt-4 ">
            <p
              className={`  font-bold text-xl   text-lightCreamCeremony-500 z-30 `}
            >
              Event
            </p>
            <Link href="/cia" className="flex items-center gap-3">
              <p className="text-lightCreamCeremony-500 z-30">
                Civil in action
              </p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="12"
                height="12"
                viewBox="0 0 24 24"
                className="fill-lightCreamCeremony-500"
              >
                <path d="M11.109,3L11.109,3C9.78,3,8.988,4.481,9.725,5.587L14,12l-4.275,6.413C8.988,19.519,9.78,21,11.109,21h0 c0.556,0,1.076-0.278,1.385-0.741l4.766-7.15c0.448-0.672,0.448-1.547,0-2.219l-4.766-7.15C12.185,3.278,11.666,3,11.109,3z"></path>
              </svg>
            </Link>
            <Link href="#" className="flex items-center gap-3">
              <p className="text-lightCreamCeremony-500 z-30">Srawung Desa</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="12"
                height="12"
                viewBox="0 0 24 24"
                className="fill-lightCreamCeremony-500"
              >
                <path d="M11.109,3L11.109,3C9.78,3,8.988,4.481,9.725,5.587L14,12l-4.275,6.413C8.988,19.519,9.78,21,11.109,21h0 c0.556,0,1.076-0.278,1.385-0.741l4.766-7.15c0.448-0.672,0.448-1.547,0-2.219l-4.766-7.15C12.185,3.278,11.666,3,11.109,3z"></path>
              </svg>
            </Link>
            <Link href="#" className="flex items-center gap-3">
              <p className="text-lightCreamCeremony-500 z-30">Claproyex</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="12"
                height="12"
                viewBox="0 0 24 24"
                className="fill-lightCreamCeremony-500"
              >
                <path d="M11.109,3L11.109,3C9.78,3,8.988,4.481,9.725,5.587L14,12l-4.275,6.413C8.988,19.519,9.78,21,11.109,21h0 c0.556,0,1.076-0.278,1.385-0.741l4.766-7.15c0.448-0.672,0.448-1.547,0-2.219l-4.766-7.15C12.185,3.278,11.666,3,11.109,3z"></path>
              </svg>
            </Link>
            <Link href="#" className="flex items-center gap-3">
              <p className="text-lightCreamCeremony-500 z-30">Ceremony</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="12"
                height="12"
                viewBox="0 0 24 24"
                className="fill-lightCreamCeremony-500"
              >
                <path d="M11.109,3L11.109,3C9.78,3,8.988,4.481,9.725,5.587L14,12l-4.275,6.413C8.988,19.519,9.78,21,11.109,21h0 c0.556,0,1.076-0.278,1.385-0.741l4.766-7.15c0.448-0.672,0.448-1.547,0-2.219l-4.766-7.15C12.185,3.278,11.666,3,11.109,3z"></path>
              </svg>
            </Link>
          </div>
          <div className="flex-col flex items-start gap-4 mt-8  md:mt-4">
            <p
              className={`  font-bold text-xl  text-lightCreamCeremony-500 z-30  `}
            >
              Formulir
            </p>
            <Link href="/craft" className="flex items-center gap-3">
              <p className="text-lightCreamCeremony-500 z-30">
                Registrasi peserta CRAFT
              </p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="12"
                height="12"
                viewBox="0 0 24 24"
                className="fill-lightCreamCeremony-500"
              >
                <path d="M11.109,3L11.109,3C9.78,3,8.988,4.481,9.725,5.587L14,12l-4.275,6.413C8.988,19.519,9.78,21,11.109,21h0 c0.556,0,1.076-0.278,1.385-0.741l4.766-7.15c0.448-0.672,0.448-1.547,0-2.219l-4.766-7.15C12.185,3.278,11.666,3,11.109,3z"></path>
              </svg>
            </Link>
            <Link href="/cia" className="flex items-center gap-3">
              <p className="text-lightCreamCeremony-500 z-30">
                Registrasi peserta CIC
              </p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="12"
                height="12"
                viewBox="0 0 24 24"
                className="fill-lightCreamCeremony-500"
              >
                <path d="M11.109,3L11.109,3C9.78,3,8.988,4.481,9.725,5.587L14,12l-4.275,6.413C8.988,19.519,9.78,21,11.109,21h0 c0.556,0,1.076-0.278,1.385-0.741l4.766-7.15c0.448-0.672,0.448-1.547,0-2.219l-4.766-7.15C12.185,3.278,11.666,3,11.109,3z"></path>
              </svg>
            </Link>
            <Link href="/sbc" className="flex items-center gap-3">
              <p className="text-lightCreamCeremony-500 z-30">
                Registrasi peserta SBC
              </p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="12"
                height="12"
                viewBox="0 0 24 24"
                className="fill-lightCreamCeremony-500"
              >
                <path d="M11.109,3L11.109,3C9.78,3,8.988,4.481,9.725,5.587L14,12l-4.275,6.413C8.988,19.519,9.78,21,11.109,21h0 c0.556,0,1.076-0.278,1.385-0.741l4.766-7.15c0.448-0.672,0.448-1.547,0-2.219l-4.766-7.15C12.185,3.278,11.666,3,11.109,3z"></path>
              </svg>
            </Link>
            <Link href="/fcec" className="flex items-center gap-3">
              <p className="text-lightCreamCeremony-500 z-30">
                Registrasi peserta FCEC
              </p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="12"
                height="12"
                viewBox="0 0 24 24"
                className="fill-lightCreamCeremony-500"
              >
                <path d="M11.109,3L11.109,3C9.78,3,8.988,4.481,9.725,5.587L14,12l-4.275,6.413C8.988,19.519,9.78,21,11.109,21h0 c0.556,0,1.076-0.278,1.385-0.741l4.766-7.15c0.448-0.672,0.448-1.547,0-2.219l-4.766-7.15C12.185,3.278,11.666,3,11.109,3z"></path>
              </svg>
            </Link>
          </div>
        </div>
        <div className="mt-8 flex flex-col items-center gap-4 justify-center  w-full">
          <div className="w-full h-[0.1rem] bg-lightCreamCeremony-500" />
          <div className="lg:flex justify-center lg:items-center lg:justify-between w-full">
            <div className="flex items-center gap-4 justify-center lg:justify-start w-full">
              <Link
                href="#"
                className="border-2 rounded-full p-4 border-opacity-20 border-lightCreamCeremony-500 "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="100"
                  height="100"
                  viewBox="0 0 30 30"
                  className="h-6 w-6 fill-lightCreamCeremony-500"
                >
                  <path d="M28,6.937c-0.957,0.425-1.985,0.711-3.064,0.84c1.102-0.66,1.947-1.705,2.345-2.951c-1.03,0.611-2.172,1.055-3.388,1.295 c-0.973-1.037-2.359-1.685-3.893-1.685c-2.946,0-5.334,2.389-5.334,5.334c0,0.418,0.048,0.826,0.138,1.215 c-4.433-0.222-8.363-2.346-10.995-5.574C3.351,6.199,3.088,7.115,3.088,8.094c0,1.85,0.941,3.483,2.372,4.439 c-0.874-0.028-1.697-0.268-2.416-0.667c0,0.023,0,0.044,0,0.067c0,2.585,1.838,4.741,4.279,5.23 c-0.447,0.122-0.919,0.187-1.406,0.187c-0.343,0-0.678-0.034-1.003-0.095c0.679,2.119,2.649,3.662,4.983,3.705 c-1.825,1.431-4.125,2.284-6.625,2.284c-0.43,0-0.855-0.025-1.273-0.075c2.361,1.513,5.164,2.396,8.177,2.396 c9.812,0,15.176-8.128,15.176-15.177c0-0.231-0.005-0.461-0.015-0.69C26.38,8.945,27.285,8.006,28,6.937z"></path>
                </svg>
              </Link>
              <Link
                href="#"
                className="border-2 rounded-full p-4 border-opacity-20 border-lightCreamCeremony-500 "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="100"
                  height="100"
                  viewBox="0 0 50 50"
                  className="h-6 w-6 fill-lightCreamCeremony-500"
                >
                  <path d="M32,11h5c0.552,0,1-0.448,1-1V3.263c0-0.524-0.403-0.96-0.925-0.997C35.484,2.153,32.376,2,30.141,2C24,2,20,5.68,20,12.368 V19h-7c-0.552,0-1,0.448-1,1v7c0,0.552,0.448,1,1,1h7v19c0,0.552,0.448,1,1,1h7c0.552,0,1-0.448,1-1V28h7.222 c0.51,0,0.938-0.383,0.994-0.89l0.778-7C38.06,19.518,37.596,19,37,19h-8v-5C29,12.343,30.343,11,32,11z"></path>
                </svg>
              </Link>
              <Link
                href="#"
                className="border-2 rounded-full p-4 border-opacity-20 border-lightCreamCeremony-500 "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="100"
                  height="100"
                  viewBox="0 0 30 30"
                  className="h-6 w-6 fill-lightCreamCeremony-500"
                >
                  <path d="M9,25H4V10h5V25z M6.501,8C5.118,8,4,6.879,4,5.499S5.12,3,6.501,3C7.879,3,9,4.121,9,5.499C9,6.879,7.879,8,6.501,8z M27,25h-4.807v-7.3c0-1.741-0.033-3.98-2.499-3.98c-2.503,0-2.888,1.896-2.888,3.854V25H12V9.989h4.614v2.051h0.065 c0.642-1.18,2.211-2.424,4.551-2.424c4.87,0,5.77,3.109,5.77,7.151C27,16.767,27,25,27,25z"></path>
                </svg>
              </Link>
            </div>
            <p className="text-center font-bold w-full mt-4 lg:mt-0 lg:text-end text-sm lg:justify-end text-lightCreamCeremony-500 z-30">
              Copyright Lustrum-XI KMTSL 2024
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
