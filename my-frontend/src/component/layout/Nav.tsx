"use client";
import React, { useEffect, useState, useRef, cache } from "react";
import Link from "next/link";
import { useSelectedLayoutSegment, useRouter } from "next/navigation";
import Image from "next/image";
import Cookies from "js-cookie";
import Ceremony from "@/app/ceremony/page";
// import { motion } from 'framer-motion'

export default function Nav() {
  const [isVisible, setIsVisible] = useState(true);
  const [timerID, setTimerID] = useState<NodeJS.Timeout | undefined>(undefined);
  const router = useRouter();
  const logout = () => {
    // Remove the token from local storage or cookies
    Cookies.remove("token");
    Cookies.remove("user_Id");
    Cookies.remove("isAdmin");
    // Or if you're using cookies
    // document.cookie = 'token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';

    // Redirect the user to the login page
    router.push("/cia/login");
  };

  useEffect(() => {
    let prevScrollPos = window.scrollY;
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setIsVisible(prevScrollPos > currentScrollPos || currentScrollPos < 100);
      prevScrollPos = currentScrollPos;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timerID);
    };
  }, []);

  const activeSegment = useSelectedLayoutSegment();
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const toggleDropdown = () => {
    setIsDropdownVisible(!isDropdownVisible);
    clearTimeout(timerID); // Menghapus timer saat dropdown ditekan
    if (!isDropdownVisible) {
      // Setelah dropdown ditampilkan, atur timer untuk menutupnya setelah 3 detik
      const newTimerID = setTimeout(() => {
        setIsDropdownVisible(false);
      }, 3000);
      setTimerID(newTimerID);
    }
  };

  return (
    <div
      className={`${
        activeSegment === "lustrum" ? "bg-black text-yellow-400" : ""
      }
      ${
        activeSegment === "sbc"
          ? "bg-sbc text-white"
          : "bg-[#005A48] text-white"
      }
      ${activeSegment === "cic" ? "bg-cic text-white" : ""}
      ${activeSegment === "fcec" ? "bg-fcec text-white" : ""}
      ${activeSegment === "craft" ? "bg-craft text-white" : ""}
      ${activeSegment === "claproyex" ? "bg-clapBlue-500 text-white" : ""}
      ${
        activeSegment === "srawung-desa"
          ? "bg-darkGreenSrawung-500 text-white"
          : ""
      }
      ${
        activeSegment === "ceremony"
          ? "bg-creamCeremony-500 text-redCeremony-500"
          : ""
      }
         w-full z-[9999] fixed  justify-between transition-transform  lg:flex lg:px-10 items-center font-LibreBaskerville ${
           isVisible
             ? "transition-transform"
             : "-translate-y-[300%] transition-transform"
         }`}
    >
      <div
        className={`flex w-full flex-row  my-3 px-4 lg:px-16 justify-between items-center`}
      >
        <Link href="/lustrum">
          {activeSegment === "lustrum" ? (
            <Image
              className="h-10 w-auto"
              src="/assets/lustrum/logo.png"
              alt="Logo"
              width={100}
              height={100}
            />
          ) : activeSegment === "cia" ? (
            <div className="flex flex-row items-center">
              <Image
                className="h-10 w-auto"
                src="/ciaLogo.png"
                alt="Logo"
                width={100}
                height={100}
              />

              <Image
                className="h-10 w-auto"
                src="/assets/lustrum/logo_lustrum_vektor.svg"
                alt="Logo"
                width={100}
                height={100}
              />
            </div>
          ) : activeSegment == "claproyex" ? (
            <div className="flex flex-row items-center gap-3">
              <Image
                className="h-10 w-auto"
                src="/assets/claproyex/logo_lustrum_putih.png"
                alt="Logo"
                width={100}
                height={100}
              />

              <Image
                className="h-10 w-auto"
                src="/assets/claproyex/logo_claproyex_putih.svg"
                alt="Logo"
                width={100}
                height={100}
              />
            </div>
          ) : activeSegment == "srawung-desa" ? (
            <div className="flex flex-row items-center gap-3">
              <Image
                className="h-10 w-auto"
                src="/assets/claproyex/logo_lustrum_putih.png"
                alt="Logo"
                width={100}
                height={100}
              />

              <Image
                className="h-10 w-auto"
                src="/assets/srawung/logo_srawung_putih.svg"
                alt="Logo"
                width={100}
                height={100}
              />
            </div>
          ) : activeSegment == "ceremony" ? (
            <div className="flex flex-row items-center gap-3 text-creamCeremony-500">
              <Image
                className="h-10 w-auto"
                src="/assets/ceremony/logo_renjana.svg"
                alt="Logo"
                width={100}
                height={100}
              />
            </div>
          ) : (
            <div className="flex flex-row items-center">
              <Image
                className="h-10 w-auto"
                src="/ciaLogo.png"
                alt="Logo"
                width={100}
                height={100}
              />

              <Image
                className="h-10 w-auto"
                src="/assets/lustrum/logo_lustrum_vektor.svg"
                alt="Logo"
                width={100}
                height={100}
              />
            </div>
          )}
        </Link>
        <nav
          className={`hidden lg:flex flex-row gap-1 justify-center items-center`}
        >
          <Link
            className={
              activeSegment === "lustrum"
                ? "text-yellow-400"
                : activeSegment == "ceremony"
                ? "text-redCeremony-500"
                : "text-white"
            }
            href="/lustrum"
          >
            Home
          </Link>

          <div className={`group  menu1 `}>
            <button
              onClick={toggleDropdown}
              aria-haspopup="true"
              aria-controls="menu"
              className="outline-none focus:outline-none px-3 py-1 bg-transparent rounded-sm flex items-center min-w-32"
            >
              {/* Event */}
              <span
                className={`pr-1 flex-1 justify-center items-center ${
                  activeSegment === "lustrum"
                    ? "text-yellow-400"
                    : activeSegment == "ceremony"
                    ? "text-redCeremony-500"
                    : "text-white"
                }`}
              >
                Event
              </span>

              <svg
                className={`${
                  activeSegment === "lustrum"
                    ? "fill-yellow-400"
                    : activeSegment == "ceremony"
                    ? "fill-redCeremony-500"
                    : "fill-white"
                } h-4 w-4 transform transition duration-150 ease-in-out mr-6`}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </button>
            <ul
              className={`shadow-lg text-cia-green w-[55%] sm:w-[45%] md:w-[28%] p-3 ${
                isDropdownVisible ? "absolute top-16 right-0" : "hidden"
              }  ${activeSegment === "lustrum" ? "bg-black " : "bg-white "}  ${
                isVisible
                  ? "transition-transform"
                  : "-translate-y-[300%] transition-transform"
              }`}
            >
              <li
                className={`py-2 border-b ${
                  activeSegment === "lustrum"
                    ? "border-yellow-400"
                    : activeSegment == "claproyex"
                    ? "border-clapBlue-500"
                    : activeSegment == "ceremony"
                    ? "border-redCeremony-500"
                    : "border-cia-green"
                }`}
              >
                <Link href="/cia" className="flex items-center">
                  <span
                    className={`${
                      activeSegment === "lustrum"
                        ? "text-yellow-400"
                        : activeSegment == "claproyex"
                        ? "text-clapBlue-500"
                        : activeSegment == "srawung-desa"
                        ? "text-darkGreenSrawung-500"
                        : activeSegment == "ceremony"
                        ? "text-redCeremony-500"
                        : "text-cia-green"
                    }`}
                  >
                    Civil in Action{" "}
                  </span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    className={`ml-3 ${
                      activeSegment === "lustrum"
                        ? "fill-yellow-400"
                        : activeSegment == "claproyex"
                        ? "fill-clapBlue-500"
                        : activeSegment == "srawung-desa"
                        ? "fill-darkGreenSrawung-500"
                        : activeSegment == "ceremony"
                        ? "fill-redCeremony-500"
                        : "fill-cia-green"
                    }`}
                  >
                    <path d="M11.109,3L11.109,3C9.78,3,8.988,4.481,9.725,5.587L14,12l-4.275,6.413C8.988,19.519,9.78,21,11.109,21h0 c0.556,0,1.076-0.278,1.385-0.741l4.766-7.15c0.448-0.672,0.448-1.547,0-2.219l-4.766-7.15C12.185,3.278,11.666,3,11.109,3z"></path>
                  </svg>
                </Link>
                <ul className="pl-2 text-sm text-cia-green">
                  <li className="py-1 ">
                    <Link
                      href="/craft"
                      className="flex justify-between items-center"
                    >
                      <span
                        className={`${
                          activeSegment === "lustrum"
                            ? "text-yellow-400"
                            : activeSegment == "claproyex"
                            ? "text-clapBlue-500"
                            : activeSegment == "srawung-desa"
                            ? "text-darkGreenSrawung-500"
                            : activeSegment == "ceremony"
                            ? "text-redCeremony-500"
                            : "text-cia-green"
                        }`}
                      >
                        Registrasi Peserta CRAFT{" "}
                      </span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        x="0px"
                        y="0px"
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        className={` ${
                          activeSegment === "lustrum"
                            ? "fill-yellow-400"
                            : activeSegment == "claproyex"
                            ? "fill-clapBlue-500"
                            : activeSegment == "srawung-desa"
                            ? "fill-darkGreenSrawung-500"
                            : activeSegment == "ceremony"
                            ? "fill-redCeremony-500"
                            : "fill-cia-green"
                        }`}
                      >
                        <path d="M11.109,3L11.109,3C9.78,3,8.988,4.481,9.725,5.587L14,12l-4.275,6.413C8.988,19.519,9.78,21,11.109,21h0 c0.556,0,1.076-0.278,1.385-0.741l4.766-7.15c0.448-0.672,0.448-1.547,0-2.219l-4.766-7.15C12.185,3.278,11.666,3,11.109,3z"></path>
                      </svg>
                    </Link>
                  </li>
                  <li className="py-1 ">
                    <Link
                      href="/cic"
                      className="flex justify-between items-center"
                    >
                      <span
                        className={`${
                          activeSegment === "lustrum"
                            ? "text-yellow-400"
                            : activeSegment == "claproyex"
                            ? "text-clapBlue-500"
                            : activeSegment == "srawung-desa"
                            ? "text-darkGreenSrawung-500"
                            : activeSegment == "ceremony"
                            ? "text-redCeremony-500"
                            : "text-cia-green"
                        }`}
                      >
                        Registrasi Peserta CIC{" "}
                      </span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        x="0px"
                        y="0px"
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        className={` ${
                          activeSegment === "lustrum"
                            ? "fill-yellow-400"
                            : activeSegment == "claproyex"
                            ? "fill-clapBlue-500"
                            : activeSegment == "srawung-desa"
                            ? "fill-darkGreenSrawung-500"
                            : activeSegment == "ceremony"
                            ? "fill-redCeremony-500"
                            : "fill-cia-green"
                        }`}
                      >
                        <path d="M11.109,3L11.109,3C9.78,3,8.988,4.481,9.725,5.587L14,12l-4.275,6.413C8.988,19.519,9.78,21,11.109,21h0 c0.556,0,1.076-0.278,1.385-0.741l4.766-7.15c0.448-0.672,0.448-1.547,0-2.219l-4.766-7.15C12.185,3.278,11.666,3,11.109,3z"></path>
                      </svg>
                    </Link>
                  </li>
                  <li className="py-1 ">
                    <Link
                      href="/sbc"
                      className="flex justify-between items-center"
                    >
                      <span
                        className={`${
                          activeSegment === "lustrum"
                            ? "text-yellow-400"
                            : activeSegment == "claproyex"
                            ? "text-clapBlue-500"
                            : activeSegment == "srawung-desa"
                            ? "text-darkGreenSrawung-500"
                            : activeSegment == "ceremony"
                            ? "text-redCeremony-500"
                            : "text-cia-green"
                        }`}
                      >
                        Registrasi Peserta SBC{" "}
                      </span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        x="0px"
                        y="0px"
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        className={` ${
                          activeSegment === "lustrum"
                            ? "fill-yellow-400"
                            : activeSegment == "claproyex"
                            ? "fill-clapBlue-500"
                            : activeSegment == "srawung-desa"
                            ? "fill-darkGreenSrawung-500"
                            : activeSegment == "ceremony"
                            ? "fill-redCeremony-500"
                            : "fill-cia-green"
                        }`}
                      >
                        <path d="M11.109,3L11.109,3C9.78,3,8.988,4.481,9.725,5.587L14,12l-4.275,6.413C8.988,19.519,9.78,21,11.109,21h0 c0.556,0,1.076-0.278,1.385-0.741l4.766-7.15c0.448-0.672,0.448-1.547,0-2.219l-4.766-7.15C12.185,3.278,11.666,3,11.109,3z"></path>
                      </svg>
                    </Link>
                  </li>
                  <li className="py-1 ">
                    <Link
                      href="/fcec"
                      className="flex justify-between items-center"
                    >
                      <span
                        className={`${
                          activeSegment === "lustrum"
                            ? "text-yellow-400"
                            : activeSegment == "claproyex"
                            ? "text-clapBlue-500"
                            : activeSegment == "srawung-desa"
                            ? "text-darkGreenSrawung-500"
                            : activeSegment == "ceremony"
                            ? "text-redCeremony-500"
                            : "text-cia-green"
                        }`}
                      >
                        Registrasi Peserta FCEC{" "}
                      </span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        x="0px"
                        y="0px"
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        className={` ${
                          activeSegment === "lustrum"
                            ? "fill-yellow-400"
                            : activeSegment == "claproyex"
                            ? "fill-clapBlue-500"
                            : activeSegment == "srawung-desa"
                            ? "fill-darkGreenSrawung-500"
                            : activeSegment == "ceremony"
                            ? "fill-redCeremony-500"
                            : "fill-cia-green"
                        }`}
                      >
                        <path d="M11.109,3L11.109,3C9.78,3,8.988,4.481,9.725,5.587L14,12l-4.275,6.413C8.988,19.519,9.78,21,11.109,21h0 c0.556,0,1.076-0.278,1.385-0.741l4.766-7.15c0.448-0.672,0.448-1.547,0-2.219l-4.766-7.15C12.185,3.278,11.666,3,11.109,3z"></path>
                      </svg>
                    </Link>
                  </li>
                </ul>
              </li>
              <li
                className={`py-2 border-b ${
                  activeSegment === "lustrum"
                    ? "border-yellow-400"
                    : activeSegment == "claproyex"
                    ? "border-clapBlue-500"
                    : activeSegment == "ceremony"
                    ? "border-redCeremony-500"
                    : "border-cia-green"
                }`}
              >
                <Link href="/srawung-desa" className="flex items-center">
                  <span
                    className={`${
                      activeSegment === "lustrum"
                        ? "text-yellow-400"
                        : activeSegment == "claproyex"
                        ? "text-clapBlue-500"
                        : activeSegment == "srawung-desa"
                        ? "text-darkGreenSrawung-500"
                        : activeSegment == "ceremony"
                        ? "text-redCeremony-500"
                        : "text-cia-green "
                    }`}
                  >
                    Srawung Desa{" "}
                  </span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    className={`ml-3 ${
                      activeSegment === "lustrum"
                        ? "fill-yellow-400"
                        : activeSegment == "claproyex"
                        ? "fill-clapBlue-500"
                        : activeSegment == "srawung-desa"
                        ? "fill-darkGreenSrawung-500"
                        : activeSegment == "ceremony"
                        ? "fill-redCeremony-500"
                        : "fill-cia-green"
                    }`}
                  >
                    <path d="M11.109,3L11.109,3C9.78,3,8.988,4.481,9.725,5.587L14,12l-4.275,6.413C8.988,19.519,9.78,21,11.109,21h0 c0.556,0,1.076-0.278,1.385-0.741l4.766-7.15c0.448-0.672,0.448-1.547,0-2.219l-4.766-7.15C12.185,3.278,11.666,3,11.109,3z"></path>
                  </svg>
                </Link>
              </li>
              <li
                className={`py-2 border-b ${
                  activeSegment === "lustrum"
                    ? "border-yellow-400"
                    : activeSegment == "claproyex"
                    ? "border-clapBlue-500"
                    : activeSegment == "ceremony"
                    ? "border-redCeremony-500"
                    : "border-cia-green"
                }`}
              >
                <Link href="/claproyex" className="flex items-center">
                  <span
                    className={`${
                      activeSegment === "lustrum"
                        ? "text-yellow-400"
                        : activeSegment == "claproyex"
                        ? "text-clapBlue-500"
                        : activeSegment == "srawung-desa"
                        ? "text-darkGreenSrawung-500"
                        : activeSegment == "ceremony"
                        ? "text-redCeremony-500"
                        : "text-cia-green "
                    }`}
                  >
                    Claproyex{" "}
                  </span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    className={`ml-3 ${
                      activeSegment === "lustrum"
                        ? "fill-yellow-400"
                        : activeSegment == "claproyex"
                        ? "fill-clapBlue-500"
                        : activeSegment == "srawung-desa"
                        ? "fill-darkGreenSrawung-500"
                        : activeSegment == "ceremony"
                        ? "fill-redCeremony-500"
                        : "fill-cia-green"
                    }`}
                  >
                    <path d="M11.109,3L11.109,3C9.78,3,8.988,4.481,9.725,5.587L14,12l-4.275,6.413C8.988,19.519,9.78,21,11.109,21h0 c0.556,0,1.076-0.278,1.385-0.741l4.766-7.15c0.448-0.672,0.448-1.547,0-2.219l-4.766-7.15C12.185,3.278,11.666,3,11.109,3z"></path>
                  </svg>
                </Link>
              </li>
              <li
                className={`py-2 border-b ${
                  activeSegment === "lustrum"
                    ? "border-yellow-400"
                    : activeSegment == "claproyex"
                    ? "border-clapBlue-500"
                    : activeSegment == "ceremony"
                    ? "border-redCeremony-500"
                    : "border-cia-green"
                }`}
              >
                <Link href="/ceremony" className="flex items-center">
                  <span
                    className={`${
                      activeSegment === "lustrum"
                        ? "text-yellow-400"
                        : activeSegment == "claproyex"
                        ? "text-clapBlue-500"
                        : activeSegment == "srawung-desa"
                        ? "text-darkGreenSrawung-500"
                        : activeSegment == "ceremony"
                        ? "text-redCeremony-500"
                        : "text-cia-green "
                    }`}
                  >
                    Ceremony{" "}
                  </span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    className={`ml-3 ${
                      activeSegment === "lustrum"
                        ? "fill-yellow-400"
                        : activeSegment == "claproyex"
                        ? "fill-clapBlue-500"
                        : activeSegment == "srawung-desa"
                        ? "fill-darkGreenSrawung-500"
                        : activeSegment == "ceremony"
                        ? "fill-redCeremony-500"
                        : "fill-cia-green"
                    }`}
                  >
                    <path d="M11.109,3L11.109,3C9.78,3,8.988,4.481,9.725,5.587L14,12l-4.275,6.413C8.988,19.519,9.78,21,11.109,21h0 c0.556,0,1.076-0.278,1.385-0.741l4.766-7.15c0.448-0.672,0.448-1.547,0-2.219l-4.766-7.15C12.185,3.278,11.666,3,11.109,3z"></path>
                  </svg>
                </Link>
              </li>

              <li
                className={`py-2 border-b ${
                  activeSegment === "lustrum"
                    ? "border-yellow-400"
                    : activeSegment == "claproyex"
                    ? "border-clapBlue-500"
                    : activeSegment == "ceremony"
                    ? "border-redCeremony-500"
                    : "border-cia-green"
                }`}
              >
                <Link href="/dashboard/user" className="flex items-center">
                  <span
                    className={`${
                      activeSegment === "lustrum"
                        ? "text-yellow-400"
                        : activeSegment == "claproyex"
                        ? "text-clapBlue-500"
                        : activeSegment == "srawung-desa"
                        ? "text-darkGreenSrawung-500"
                        : activeSegment == "ceremony"
                        ? "text-redCeremony-500"
                        : "text-cia-green "
                    }`}
                  >
                    Dashboard Pendaftaran
                  </span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    className={`ml-3 ${
                      activeSegment === "lustrum"
                        ? "fill-yellow-400"
                        : activeSegment == "claproyex"
                        ? "fill-clapBlue-500"
                        : activeSegment == "srawung-desa"
                        ? "fill-darkGreenSrawung-500"
                        : activeSegment == "ceremony"
                        ? "fill-redCeremony-500"
                        : "fill-cia-green"
                    }`}
                  >
                    <path d="M11.109,3L11.109,3C9.78,3,8.988,4.481,9.725,5.587L14,12l-4.275,6.413C8.988,19.519,9.78,21,11.109,21h0 c0.556,0,1.076-0.278,1.385-0.741l4.766-7.15c0.448-0.672,0.448-1.547,0-2.219l-4.766-7.15C12.185,3.278,11.666,3,11.109,3z"></path>
                  </svg>
                </Link>
              </li>

              <li
                className={`py-2 border-b ${
                  activeSegment === "lustrum"
                    ? "border-yellow-400"
                    : "border-red-700"
                }`}
              >
                <a href="#" onClick={logout} className="flex items-center">
                  <span
                    className={`${
                      activeSegment === "lustrum"
                        ? "text-yellow-400"
                        : "text-red-700 "
                    }`}
                  >
                    Logout{" "}
                  </span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    className={`ml-3 ${
                      activeSegment === "lustrum"
                        ? "fill-yellow-400"
                        : "fill-red-700"
                    }`}
                  >
                    <path d="M11.109,3L11.109,3C9.78,3,8.988,4.481,9.725,5.587L14,12l-4.275,6.413C8.988,19.519,9.78,21,11.109,21h0 c0.556,0,1.076-0.278,1.385-0.741l4.766-7.15c0.448-0.672,0.448-1.547,0-2.219l-4.766-7.15C12.185,3.278,11.666,3,11.109,3z"></path>
                  </svg>
                </a>
              </li>
            </ul>
          </div>
          {/* // buat agar jika active segment == cia maka link akab berubah ke cia#contact */}
          <Link
            href={`/${activeSegment}#contact`}
            className={`-ml-3
              ${
                activeSegment === "lustrum"
                  ? "text-yellow-400"
                  : activeSegment == "ceremony"
                  ? "text-redCeremony-500"
                  : "text-white"
              }
            `}
          >
            Contact
          </Link>
        </nav>
        <div className="lg:hidden">
          <button
            onClick={toggleDropdown}
            className="outline-none focus:outline-none"
          >
            {/* Tampilkan image pertama jika segment aktif adalah "lustrum", jika tidak, tampilkan image kedua */}
            {activeSegment === "lustrum" ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="100"
                height="100"
                viewBox="0 0 50 50"
                className="fill-yellow-400 w-5 h-5"
              >
                <path d="M 5 8 A 2.0002 2.0002 0 1 0 5 12 L 45 12 A 2.0002 2.0002 0 1 0 45 8 L 5 8 z M 5 23 A 2.0002 2.0002 0 1 0 5 27 L 45 27 A 2.0002 2.0002 0 1 0 45 23 L 5 23 z M 5 38 A 2.0002 2.0002 0 1 0 5 42 L 45 42 A 2.0002 2.0002 0 1 0 45 38 L 5 38 z"></path>
              </svg>
            ) : activeSegment == "ceremony" ? (
              <Image
                src="/ceremonyButtonNav.svg"
                alt="menu"
                width={30}
                height={30}
              />
            ) : (
              <Image
                src="/ciaButtonNav.png"
                alt="menu"
                width={30}
                height={30}
              />
            )}
          </button>
          <ul
            className={`shadow-lg text-cia-green w-[55%] sm:w-[45%] md:w-[28%] p-3 ${
              isDropdownVisible ? "absolute top-16 right-0" : "hidden"
            }  ${activeSegment === "lustrum" ? "bg-black " : "bg-white "}  ${
              isVisible
                ? "transition-transform"
                : "-translate-y-[300%] transition-transform"
            }`}
          >
            <li
              className={`py-2 border-b ${
                activeSegment === "lustrum"
                  ? "border-yellow-400"
                  : activeSegment == "claproyex"
                  ? "border-clapBlue-500"
                  : activeSegment == "ceremony"
                  ? "border-redCeremony-500"
                  : "border-cia-green"
              }`}
            >
              <Link href="/cia" className="flex items-center">
                <span
                  className={`${
                    activeSegment === "lustrum"
                      ? "text-yellow-400"
                      : activeSegment == "claproyex"
                      ? "text-clapBlue-500"
                      : activeSegment == "srawung-desa"
                      ? "text-darkGreenSrawung-500"
                      : activeSegment == "ceremony"
                      ? "text-redCeremony-500"
                      : "text-cia-green"
                  }`}
                >
                  Civil in Action{" "}
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  className={`ml-3 ${
                    activeSegment === "lustrum"
                      ? "fill-yellow-400"
                      : activeSegment == "claproyex"
                      ? "fill-clapBlue-500"
                      : activeSegment == "srawung-desa"
                      ? "fill-darkGreenSrawung-500"
                      : activeSegment == "ceremony"
                      ? "fill-redCeremony-500"
                      : "fill-cia-green"
                  }`}
                >
                  <path d="M11.109,3L11.109,3C9.78,3,8.988,4.481,9.725,5.587L14,12l-4.275,6.413C8.988,19.519,9.78,21,11.109,21h0 c0.556,0,1.076-0.278,1.385-0.741l4.766-7.15c0.448-0.672,0.448-1.547,0-2.219l-4.766-7.15C12.185,3.278,11.666,3,11.109,3z"></path>
                </svg>
              </Link>
              <ul className="pl-2 text-sm text-cia-green">
                <li className="py-1 ">
                  <Link
                    href="/craft"
                    className="flex justify-between items-center"
                  >
                    <span
                      className={`${
                        activeSegment === "lustrum"
                          ? "text-yellow-400"
                          : activeSegment == "claproyex"
                          ? "text-clapBlue-500"
                          : activeSegment == "srawung-desa"
                          ? "text-darkGreenSrawung-500"
                          : activeSegment == "ceremony"
                          ? "text-redCeremony-500"
                          : "text-cia-green"
                      }`}
                    >
                      Registrasi Peserta CRAFT{" "}
                    </span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      className={` ${
                        activeSegment === "lustrum"
                          ? "fill-yellow-400"
                          : activeSegment == "claproyex"
                          ? "fill-clapBlue-500"
                          : activeSegment == "srawung-desa"
                          ? "fill-darkGreenSrawung-500"
                          : activeSegment == "ceremony"
                          ? "fill-redCeremony-500"
                          : "fill-cia-green"
                      }`}
                    >
                      <path d="M11.109,3L11.109,3C9.78,3,8.988,4.481,9.725,5.587L14,12l-4.275,6.413C8.988,19.519,9.78,21,11.109,21h0 c0.556,0,1.076-0.278,1.385-0.741l4.766-7.15c0.448-0.672,0.448-1.547,0-2.219l-4.766-7.15C12.185,3.278,11.666,3,11.109,3z"></path>
                    </svg>
                  </Link>
                </li>
                <li className="py-1 ">
                  <Link
                    href="/cic"
                    className="flex justify-between items-center"
                  >
                    <span
                      className={`${
                        activeSegment === "lustrum"
                          ? "text-yellow-400"
                          : activeSegment == "claproyex"
                          ? "text-clapBlue-500"
                          : activeSegment == "srawung-desa"
                          ? "text-darkGreenSrawung-500"
                          : activeSegment == "ceremony"
                          ? "text-redCeremony-500"
                          : "text-cia-green"
                      }`}
                    >
                      Registrasi Peserta CIC{" "}
                    </span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      className={` ${
                        activeSegment === "lustrum"
                          ? "fill-yellow-400"
                          : activeSegment == "claproyex"
                          ? "fill-clapBlue-500"
                          : activeSegment == "srawung-desa"
                          ? "fill-darkGreenSrawung-500"
                          : activeSegment == "ceremony"
                          ? "fill-redCeremony-500"
                          : "fill-cia-green"
                      }`}
                    >
                      <path d="M11.109,3L11.109,3C9.78,3,8.988,4.481,9.725,5.587L14,12l-4.275,6.413C8.988,19.519,9.78,21,11.109,21h0 c0.556,0,1.076-0.278,1.385-0.741l4.766-7.15c0.448-0.672,0.448-1.547,0-2.219l-4.766-7.15C12.185,3.278,11.666,3,11.109,3z"></path>
                    </svg>
                  </Link>
                </li>
                <li className="py-1 ">
                  <Link
                    href="/sbc"
                    className="flex justify-between items-center"
                  >
                    <span
                      className={`${
                        activeSegment === "lustrum"
                          ? "text-yellow-400"
                          : activeSegment == "claproyex"
                          ? "text-clapBlue-500"
                          : activeSegment == "srawung-desa"
                          ? "text-darkGreenSrawung-500"
                          : activeSegment == "ceremony"
                          ? "text-redCeremony-500"
                          : "text-cia-green"
                      }`}
                    >
                      Registrasi Peserta SBC{" "}
                    </span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      className={` ${
                        activeSegment === "lustrum"
                          ? "fill-yellow-400"
                          : activeSegment == "claproyex"
                          ? "fill-clapBlue-500"
                          : activeSegment == "srawung-desa"
                          ? "fill-darkGreenSrawung-500"
                          : activeSegment == "ceremony"
                          ? "fill-redCeremony-500"
                          : "fill-cia-green"
                      }`}
                    >
                      <path d="M11.109,3L11.109,3C9.78,3,8.988,4.481,9.725,5.587L14,12l-4.275,6.413C8.988,19.519,9.78,21,11.109,21h0 c0.556,0,1.076-0.278,1.385-0.741l4.766-7.15c0.448-0.672,0.448-1.547,0-2.219l-4.766-7.15C12.185,3.278,11.666,3,11.109,3z"></path>
                    </svg>
                  </Link>
                </li>
                <li className="py-1 ">
                  <Link
                    href="/fcec"
                    className="flex justify-between items-center"
                  >
                    <span
                      className={`${
                        activeSegment === "lustrum"
                          ? "text-yellow-400"
                          : activeSegment == "claproyex"
                          ? "text-clapBlue-500"
                          : activeSegment == "srawung-desa"
                          ? "text-darkGreenSrawung-500"
                          : activeSegment == "ceremony"
                          ? "text-redCeremony-500"
                          : "text-cia-green"
                      }`}
                    >
                      Registrasi Peserta FCEC{" "}
                    </span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      className={` ${
                        activeSegment === "lustrum"
                          ? "fill-yellow-400"
                          : activeSegment == "claproyex"
                          ? "fill-clapBlue-500"
                          : activeSegment == "srawung-desa"
                          ? "fill-darkGreenSrawung-500"
                          : activeSegment == "ceremony"
                          ? "fill-redCeremony-500"
                          : "fill-cia-green"
                      }`}
                    >
                      <path d="M11.109,3L11.109,3C9.78,3,8.988,4.481,9.725,5.587L14,12l-4.275,6.413C8.988,19.519,9.78,21,11.109,21h0 c0.556,0,1.076-0.278,1.385-0.741l4.766-7.15c0.448-0.672,0.448-1.547,0-2.219l-4.766-7.15C12.185,3.278,11.666,3,11.109,3z"></path>
                    </svg>
                  </Link>
                </li>
              </ul>
            </li>
            <li
              className={`py-2 border-b ${
                activeSegment === "lustrum"
                  ? "border-yellow-400"
                  : activeSegment == "claproyex"
                  ? "border-clapBlue-500"
                  : activeSegment == "ceremony"
                  ? "border-redCeremony-500"
                  : "border-cia-green"
              }`}
            >
              <Link href="/srawung-desa" className="flex items-center">
                <span
                  className={`${
                    activeSegment === "lustrum"
                      ? "text-yellow-400"
                      : activeSegment == "claproyex"
                      ? "text-clapBlue-500"
                      : activeSegment == "srawung-desa"
                      ? "text-darkGreenSrawung-500"
                      : activeSegment == "ceremony"
                      ? "text-redCeremony-500"
                      : "text-cia-green "
                  }`}
                >
                  Srawung Desa{" "}
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  className={`ml-3 ${
                    activeSegment === "lustrum"
                      ? "fill-yellow-400"
                      : activeSegment == "claproyex"
                      ? "fill-clapBlue-500"
                      : activeSegment == "srawung-desa"
                      ? "fill-darkGreenSrawung-500"
                      : activeSegment == "ceremony"
                      ? "fill-redCeremony-500"
                      : "fill-cia-green"
                  }`}
                >
                  <path d="M11.109,3L11.109,3C9.78,3,8.988,4.481,9.725,5.587L14,12l-4.275,6.413C8.988,19.519,9.78,21,11.109,21h0 c0.556,0,1.076-0.278,1.385-0.741l4.766-7.15c0.448-0.672,0.448-1.547,0-2.219l-4.766-7.15C12.185,3.278,11.666,3,11.109,3z"></path>
                </svg>
              </Link>
            </li>
            <li
              className={`py-2 border-b ${
                activeSegment === "lustrum"
                  ? "border-yellow-400"
                  : activeSegment == "claproyex"
                  ? "border-clapBlue-500"
                  : activeSegment == "ceremony"
                  ? "border-redCeremony-500"
                  : "border-cia-green"
              }`}
            >
              <Link href="/claproyex" className="flex items-center">
                <span
                  className={`${
                    activeSegment === "lustrum"
                      ? "text-yellow-400"
                      : activeSegment == "claproyex"
                      ? "text-clapBlue-500"
                      : activeSegment == "srawung-desa"
                      ? "text-darkGreenSrawung-500"
                      : activeSegment == "ceremony"
                      ? "text-redCeremony-500"
                      : "text-cia-green "
                  }`}
                >
                  Claproyex{" "}
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  className={`ml-3 ${
                    activeSegment === "lustrum"
                      ? "fill-yellow-400"
                      : activeSegment == "claproyex"
                      ? "fill-clapBlue-500"
                      : activeSegment == "srawung-desa"
                      ? "fill-darkGreenSrawung-500"
                      : activeSegment == "ceremony"
                      ? "fill-redCeremony-500"
                      : "fill-cia-green"
                  }`}
                >
                  <path d="M11.109,3L11.109,3C9.78,3,8.988,4.481,9.725,5.587L14,12l-4.275,6.413C8.988,19.519,9.78,21,11.109,21h0 c0.556,0,1.076-0.278,1.385-0.741l4.766-7.15c0.448-0.672,0.448-1.547,0-2.219l-4.766-7.15C12.185,3.278,11.666,3,11.109,3z"></path>
                </svg>
              </Link>
            </li>
            <li
              className={`py-2 border-b ${
                activeSegment === "lustrum"
                  ? "border-yellow-400"
                  : activeSegment == "claproyex"
                  ? "border-clapBlue-500"
                  : activeSegment == "ceremony"
                  ? "border-redCeremony-500"
                  : "border-cia-green"
              }`}
            >
              <Link href="/ceremony" className="flex items-center">
                <span
                  className={`${
                    activeSegment === "lustrum"
                      ? "text-yellow-400"
                      : activeSegment == "claproyex"
                      ? "text-clapBlue-500"
                      : activeSegment == "srawung-desa"
                      ? "text-darkGreenSrawung-500"
                      : activeSegment == "ceremony"
                      ? "text-redCeremony-500"
                      : "text-cia-green "
                  }`}
                >
                  Ceremony{" "}
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  className={`ml-3 ${
                    activeSegment === "lustrum"
                      ? "fill-yellow-400"
                      : activeSegment == "claproyex"
                      ? "fill-clapBlue-500"
                      : activeSegment == "srawung-desa"
                      ? "fill-darkGreenSrawung-500"
                      : activeSegment == "ceremony"
                      ? "fill-redCeremony-500"
                      : "fill-cia-green"
                  }`}
                >
                  <path d="M11.109,3L11.109,3C9.78,3,8.988,4.481,9.725,5.587L14,12l-4.275,6.413C8.988,19.519,9.78,21,11.109,21h0 c0.556,0,1.076-0.278,1.385-0.741l4.766-7.15c0.448-0.672,0.448-1.547,0-2.219l-4.766-7.15C12.185,3.278,11.666,3,11.109,3z"></path>
                </svg>
              </Link>
            </li>
            <li
              className={`py-2 border-b ${
                activeSegment === "lustrum"
                  ? "border-yellow-400"
                  : "border-red-700"
              }`}
            >
              <a href="#" onClick={logout} className="flex items-center">
                <span
                  className={`${
                    activeSegment === "lustrum"
                      ? "text-yellow-400"
                      : "text-red-700 "
                  }`}
                >
                  Logout{" "}
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  className={`ml-3 ${
                    activeSegment === "lustrum"
                      ? "fill-yellow-400"
                      : "fill-red-700"
                  }`}
                >
                  <path d="M11.109,3L11.109,3C9.78,3,8.988,4.481,9.725,5.587L14,12l-4.275,6.413C8.988,19.519,9.78,21,11.109,21h0 c0.556,0,1.076-0.278,1.385-0.741l4.766-7.15c0.448-0.672,0.448-1.547,0-2.219l-4.766-7.15C12.185,3.278,11.666,3,11.109,3z"></path>
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
