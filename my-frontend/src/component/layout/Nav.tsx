"use client";
import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";
import Image from "next/image";
// import { motion } from 'framer-motion'

export default function Nav() {
  const [isVisible, setIsVisible] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMenuLangOpen, setIsMenuLangOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const menuLangRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Fungsi untuk menutup dropdown saat klik di luar dropdown
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownVisible(false);
      }
     
      
    };

    // Menambahkan event listener ke elemen dokumen ketika komponen dimount
    document.addEventListener("mousedown", handleClickOutside);

    // Membersihkan event listener saat komponen dilepas
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

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
    };
  }, []);

  const activeSegment = useSelectedLayoutSegment();
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const toggleDropdown = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };

  return (
    <div
      className={`${
        activeSegment === "lustrum"
          ? "bg-black text-yellow-400"
          : ""
      }
      ${
        activeSegment === "sbc"
          ? "bg-sbc text-white"
          : "bg-[#005A48] text-white"
      }
      ${
        activeSegment === "cic"
          ? "bg-cic text-white"
          : ""
      }
      ${
        activeSegment === "fcec"
          ? "bg-fcec text-white"
          : ""
      }
      ${
        activeSegment === "craft"
          ? "bg-craft text-white"
          : ""
      }
         w-full z-[9999] fixed  justify-between transition-transform  lg:flex lg:px-10 items-center font-LibreBaskerville ${
           isVisible
             ? "transition-transform"
             : "-translate-y-[300%] transition-transform"
         }`}
    >
      <div className="flex w-full flex-row  my-3 px-4 lg:px-16 justify-between items-center">
        <Link href="/lustrum">
          {/* Tampilkan image pertama jika segment aktif adalah "lustrum", jika tidak, tampilkan image kedua */}
          {activeSegment === "lustrum" ? (
            <Image
              className="h-10 w-auto"
              src="/assets/lustrum/logo.png"
              alt="Logo"
              width={100}
              height={100}
            />
          ) : (
            <Image
              className="h-10 w-auto"
              src="/ciaLogo.png"
              alt="Logo"
              width={100}
              height={100}
            />
          )}
        </Link>
        <nav className="hidden lg:flex flex-row gap-1 justify-center items-center">
          <Link href="/lustrum">Home</Link>
         
          <div className="group  menu1" >
            <button
              onClick={toggleDropdown}
              aria-haspopup="true"
              aria-controls="menu"
              className="outline-none focus:outline-none px-3 py-1 bg-transparent rounded-sm flex items-center min-w-32"
            >
              {/* Event */}
              <span
                className={`pr-1 flex-1 justify-center items-center ${
                  activeSegment === "lustrum" ? "text-yellow-400" : "text-white"
                }`}
              >
                Event
              </span>

              <svg
                className={`${
                  activeSegment === "lustrum" ? "fill-yellow-400" : "fill-white"
                } h-4 w-4 transform 
  transition duration-150 ease-in-out mr-6`}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </button>
            <ul className={`shadow-lg text-cia-green w-[55%] sm:w-[45%] md:w-[28%] p-3 ${
            isDropdownVisible ? "absolute top-16 right-0" : "hidden"
          }  ${activeSegment === "lustrum" ? "bg-black " : "bg-white "}  ${
            isVisible
              ? "transition-transform"
              : "-translate-y-[300%] transition-transform"
          }`} >
           
            <li className={`py-2 border-b ${activeSegment === "lustrum" ? "border-yellow-400" : "border-cia-green"}`}>
            <Link href="/cia" className="flex items-center">
              <span className={`${
          activeSegment === "lustrum" ? "text-yellow-400 border-yellow-400" : "text-cia-green "
        }`}>Civil in Action </span>
              <svg
         
         xmlns="http://www.w3.org/2000/svg"
         x="0px"
         y="0px"
         width="12"
         height="12"
         viewBox="0 0 24 24"
         className={`ml-3 ${
           activeSegment === "lustrum" ? "fill-yellow-400" : "fill-cia-green"
         }`}
       >
         <path d="M11.109,3L11.109,3C9.78,3,8.988,4.481,9.725,5.587L14,12l-4.275,6.413C8.988,19.519,9.78,21,11.109,21h0 c0.556,0,1.076-0.278,1.385-0.741l4.766-7.15c0.448-0.672,0.448-1.547,0-2.219l-4.766-7.15C12.185,3.278,11.666,3,11.109,3z"></path>
       </svg>
       </Link>
              <ul className="pl-2 text-sm text-cia-green">
                <li className="py-1 ">
                <Link href="/craft" className="flex justify-between items-center">
                  <span className={`${
          activeSegment === "lustrum" ? "text-yellow-400" : "text-cia-green "
        }`} >Registrasi Peserta CRAFT </span>
                  <svg
         
         xmlns="http://www.w3.org/2000/svg"
         x="0px"
         y="0px"
         width="12"
         height="12"
         viewBox="0 0 24 24"
         className={` ${
           activeSegment === "lustrum" ? "fill-yellow-400" : "fill-cia-green"
         }`}
       >
         <path d="M11.109,3L11.109,3C9.78,3,8.988,4.481,9.725,5.587L14,12l-4.275,6.413C8.988,19.519,9.78,21,11.109,21h0 c0.556,0,1.076-0.278,1.385-0.741l4.766-7.15c0.448-0.672,0.448-1.547,0-2.219l-4.766-7.15C12.185,3.278,11.666,3,11.109,3z"></path>
       </svg></Link></li>
                <li className="py-1 ">
                <Link href="/cic" className="flex justify-between items-center">
                  <span className={`${
          activeSegment === "lustrum" ? "text-yellow-400" : "text-cia-green "
        }`}>Registrasi Peserta CIC </span>
                  <svg
         
         xmlns="http://www.w3.org/2000/svg"
         x="0px"
         y="0px"
         width="12"
         height="12"
         viewBox="0 0 24 24"
         className={` ${
           activeSegment === "lustrum" ? "fill-yellow-400" : "fill-cia-green"
         }`}
       >
         <path d="M11.109,3L11.109,3C9.78,3,8.988,4.481,9.725,5.587L14,12l-4.275,6.413C8.988,19.519,9.78,21,11.109,21h0 c0.556,0,1.076-0.278,1.385-0.741l4.766-7.15c0.448-0.672,0.448-1.547,0-2.219l-4.766-7.15C12.185,3.278,11.666,3,11.109,3z"></path>
       </svg></Link></li>
                <li className="py-1 ">
                <Link href="/sbc" className="flex justify-between items-center">
                  <span className={`${
          activeSegment === "lustrum" ? "text-yellow-400" : "text-cia-green "
        }`}>Registrasi Peserta SBC </span>
                  <svg
         
         xmlns="http://www.w3.org/2000/svg"
         x="0px"
         y="0px"
         width="12"
         height="12"
         viewBox="0 0 24 24"
         className={` ${
           activeSegment === "lustrum" ? "fill-yellow-400" : "fill-cia-green"
         }`}
       >
         <path d="M11.109,3L11.109,3C9.78,3,8.988,4.481,9.725,5.587L14,12l-4.275,6.413C8.988,19.519,9.78,21,11.109,21h0 c0.556,0,1.076-0.278,1.385-0.741l4.766-7.15c0.448-0.672,0.448-1.547,0-2.219l-4.766-7.15C12.185,3.278,11.666,3,11.109,3z"></path>
       </svg></Link></li>
                <li className="py-1 ">
                <Link href="/fcec" className="flex justify-between items-center">
                  <span className={`${
          activeSegment === "lustrum" ? "text-yellow-400" : "text-cia-green "
        }`} >Registrasi Peserta FCEC </span>
                  <svg
         
         xmlns="http://www.w3.org/2000/svg"
         x="0px"
         y="0px"
         width="12"
         height="12"
         viewBox="0 0 24 24"
         className={` ${
           activeSegment === "lustrum" ? "fill-yellow-400" : "fill-cia-green"
         }`}
       >
         <path d="M11.109,3L11.109,3C9.78,3,8.988,4.481,9.725,5.587L14,12l-4.275,6.413C8.988,19.519,9.78,21,11.109,21h0 c0.556,0,1.076-0.278,1.385-0.741l4.766-7.15c0.448-0.672,0.448-1.547,0-2.219l-4.766-7.15C12.185,3.278,11.666,3,11.109,3z"></path>
       </svg></Link></li>
                
              </ul>
            </li>
            <li className={`py-2 border-b ${activeSegment === "lustrum" ? "border-yellow-400" : "border-cia-green"}`}>
            <Link href="#" className="flex items-center">
              <span className={`${
          activeSegment === "lustrum" ? "text-yellow-400" : "text-cia-green "
        }`}>Srawung Desa </span>
              <svg
         
         xmlns="http://www.w3.org/2000/svg"
         x="0px"
         y="0px"
         width="12"
         height="12"
         viewBox="0 0 24 24"
         className={`ml-3 ${
           activeSegment === "lustrum" ? "fill-yellow-400" : "fill-cia-green"
         }`}
       >
         <path d="M11.109,3L11.109,3C9.78,3,8.988,4.481,9.725,5.587L14,12l-4.275,6.413C8.988,19.519,9.78,21,11.109,21h0 c0.556,0,1.076-0.278,1.385-0.741l4.766-7.15c0.448-0.672,0.448-1.547,0-2.219l-4.766-7.15C12.185,3.278,11.666,3,11.109,3z"></path>
       </svg>
       </Link>
       </li>
       <li className={`py-2 border-b ${activeSegment === "lustrum" ? "border-yellow-400" : "border-cia-green"}`}>
            <Link href="#" className="flex items-center">
              <span className={`${
          activeSegment === "lustrum" ? "text-yellow-400" : "text-cia-green "
        }`} >Clayproyex </span>
              <svg
         
         xmlns="http://www.w3.org/2000/svg"
         x="0px"
         y="0px"
         width="12"
         height="12"
         viewBox="0 0 24 24"
         className={`ml-3 ${
           activeSegment === "lustrum" ? "fill-yellow-400" : "fill-cia-green"
         }`}
       >
         <path d="M11.109,3L11.109,3C9.78,3,8.988,4.481,9.725,5.587L14,12l-4.275,6.413C8.988,19.519,9.78,21,11.109,21h0 c0.556,0,1.076-0.278,1.385-0.741l4.766-7.15c0.448-0.672,0.448-1.547,0-2.219l-4.766-7.15C12.185,3.278,11.666,3,11.109,3z"></path>
       </svg>
       </Link>
       </li>
       <li className={`py-2 border-b ${activeSegment === "lustrum" ? "border-yellow-400" : "border-cia-green"}`}>
            <Link href="#" className="flex items-center">
              <span className={`${
          activeSegment === "lustrum" ? "text-yellow-400" : "text-cia-green "
        }`}>Ceremony </span>
              <svg
         
         xmlns="http://www.w3.org/2000/svg"
         x="0px"
         y="0px"
         width="12"
         height="12"
         viewBox="0 0 24 24"
         className={`ml-3 ${
           activeSegment === "lustrum" ? "fill-yellow-400" : "fill-cia-green"
         }`}
       >
         <path d="M11.109,3L11.109,3C9.78,3,8.988,4.481,9.725,5.587L14,12l-4.275,6.413C8.988,19.519,9.78,21,11.109,21h0 c0.556,0,1.076-0.278,1.385-0.741l4.766-7.15c0.448-0.672,0.448-1.547,0-2.219l-4.766-7.15C12.185,3.278,11.666,3,11.109,3z"></path>
       </svg>
       </Link>
       </li>
           

          </ul>


          </div>
          <Link href="#" className="-ml-3">
            About
          </Link>
        </nav>
        <div className="lg:hidden"  ref={dropdownRef}>
         
          <button onClick={toggleDropdown}
            className="outline-none focus:outline-none">
          {/* Tampilkan image pertama jika segment aktif adalah "lustrum", jika tidak, tampilkan image kedua */}
          {activeSegment === "lustrum" ? (
           <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 50 50" className="fill-yellow-400 w-5 h-5">
           <path d="M 5 8 A 2.0002 2.0002 0 1 0 5 12 L 45 12 A 2.0002 2.0002 0 1 0 45 8 L 5 8 z M 5 23 A 2.0002 2.0002 0 1 0 5 27 L 45 27 A 2.0002 2.0002 0 1 0 45 23 L 5 23 z M 5 38 A 2.0002 2.0002 0 1 0 5 42 L 45 42 A 2.0002 2.0002 0 1 0 45 38 L 5 38 z"></path>
           </svg>
          ) : (
            <Image src="/ciaButtonNav.png" alt="menu" width={30} height={30} />
          )}
        </button>
          <ul className={`shadow-lg text-cia-green w-[55%] sm:w-[45%] md:w-[28%] p-3 ${
            isDropdownVisible ? "absolute top-16 right-0" : "hidden"
          }  ${activeSegment === "lustrum" ? "bg-black " : "bg-white "}  ${
            isVisible
              ? "transition-transform"
              : "-translate-y-[300%] transition-transform"
          }`} >
           
            <li className={`py-2 border-b ${activeSegment === "lustrum" ? "border-yellow-400" : "border-cia-green"}`}>
            <Link href="/cia" className="flex items-center">
              <span className={`${
          activeSegment === "lustrum" ? "text-yellow-400 border-yellow-400" : "text-cia-green "
        }`}>Civil in Action </span>
              <svg
         
         xmlns="http://www.w3.org/2000/svg"
         x="0px"
         y="0px"
         width="12"
         height="12"
         viewBox="0 0 24 24"
         className={`ml-3 ${
           activeSegment === "lustrum" ? "fill-yellow-400" : "fill-cia-green"
         }`}
       >
         <path d="M11.109,3L11.109,3C9.78,3,8.988,4.481,9.725,5.587L14,12l-4.275,6.413C8.988,19.519,9.78,21,11.109,21h0 c0.556,0,1.076-0.278,1.385-0.741l4.766-7.15c0.448-0.672,0.448-1.547,0-2.219l-4.766-7.15C12.185,3.278,11.666,3,11.109,3z"></path>
       </svg>
       </Link>
              <ul className="pl-2 text-sm text-cia-green">
                <li className="py-1 ">
                <Link href="/craft" className="flex justify-between items-center">
                  <span className={`${
          activeSegment === "lustrum" ? "text-yellow-400" : "text-cia-green "
        }`} >Registrasi Peserta CRAFT </span>
                  <svg
         
         xmlns="http://www.w3.org/2000/svg"
         x="0px"
         y="0px"
         width="12"
         height="12"
         viewBox="0 0 24 24"
         className={` ${
           activeSegment === "lustrum" ? "fill-yellow-400" : "fill-cia-green"
         }`}
       >
         <path d="M11.109,3L11.109,3C9.78,3,8.988,4.481,9.725,5.587L14,12l-4.275,6.413C8.988,19.519,9.78,21,11.109,21h0 c0.556,0,1.076-0.278,1.385-0.741l4.766-7.15c0.448-0.672,0.448-1.547,0-2.219l-4.766-7.15C12.185,3.278,11.666,3,11.109,3z"></path>
       </svg></Link></li>
                <li className="py-1 ">
                <Link href="/cic" className="flex justify-between items-center">
                  <span className={`${
          activeSegment === "lustrum" ? "text-yellow-400" : "text-cia-green "
        }`}>Registrasi Peserta CIC </span>
                  <svg
         
         xmlns="http://www.w3.org/2000/svg"
         x="0px"
         y="0px"
         width="12"
         height="12"
         viewBox="0 0 24 24"
         className={` ${
           activeSegment === "lustrum" ? "fill-yellow-400" : "fill-cia-green"
         }`}
       >
         <path d="M11.109,3L11.109,3C9.78,3,8.988,4.481,9.725,5.587L14,12l-4.275,6.413C8.988,19.519,9.78,21,11.109,21h0 c0.556,0,1.076-0.278,1.385-0.741l4.766-7.15c0.448-0.672,0.448-1.547,0-2.219l-4.766-7.15C12.185,3.278,11.666,3,11.109,3z"></path>
       </svg></Link></li>
                <li className="py-1 ">
                <Link href="/sbc" className="flex justify-between items-center">
                  <span className={`${
          activeSegment === "lustrum" ? "text-yellow-400" : "text-cia-green "
        }`}>Registrasi Peserta SBC </span>
                  <svg
         
         xmlns="http://www.w3.org/2000/svg"
         x="0px"
         y="0px"
         width="12"
         height="12"
         viewBox="0 0 24 24"
         className={` ${
           activeSegment === "lustrum" ? "fill-yellow-400" : "fill-cia-green"
         }`}
       >
         <path d="M11.109,3L11.109,3C9.78,3,8.988,4.481,9.725,5.587L14,12l-4.275,6.413C8.988,19.519,9.78,21,11.109,21h0 c0.556,0,1.076-0.278,1.385-0.741l4.766-7.15c0.448-0.672,0.448-1.547,0-2.219l-4.766-7.15C12.185,3.278,11.666,3,11.109,3z"></path>
       </svg></Link></li>
                <li className="py-1 ">
                <Link href="/fcec" className="flex justify-between items-center">
                  <span className={`${
          activeSegment === "lustrum" ? "text-yellow-400" : "text-cia-green "
        }`} >Registrasi Peserta FCEC </span>
                  <svg
         
         xmlns="http://www.w3.org/2000/svg"
         x="0px"
         y="0px"
         width="12"
         height="12"
         viewBox="0 0 24 24"
         className={` ${
           activeSegment === "lustrum" ? "fill-yellow-400" : "fill-cia-green"
         }`}
       >
         <path d="M11.109,3L11.109,3C9.78,3,8.988,4.481,9.725,5.587L14,12l-4.275,6.413C8.988,19.519,9.78,21,11.109,21h0 c0.556,0,1.076-0.278,1.385-0.741l4.766-7.15c0.448-0.672,0.448-1.547,0-2.219l-4.766-7.15C12.185,3.278,11.666,3,11.109,3z"></path>
       </svg></Link></li>
                
              </ul>
            </li>
            <li className={`py-2 border-b ${activeSegment === "lustrum" ? "border-yellow-400" : "border-cia-green"}`}>
            <Link href="#" className="flex items-center">
              <span className={`${
          activeSegment === "lustrum" ? "text-yellow-400" : "text-cia-green "
        }`}>Srawung Desa </span>
              <svg
         
         xmlns="http://www.w3.org/2000/svg"
         x="0px"
         y="0px"
         width="12"
         height="12"
         viewBox="0 0 24 24"
         className={`ml-3 ${
           activeSegment === "lustrum" ? "fill-yellow-400" : "fill-cia-green"
         }`}
       >
         <path d="M11.109,3L11.109,3C9.78,3,8.988,4.481,9.725,5.587L14,12l-4.275,6.413C8.988,19.519,9.78,21,11.109,21h0 c0.556,0,1.076-0.278,1.385-0.741l4.766-7.15c0.448-0.672,0.448-1.547,0-2.219l-4.766-7.15C12.185,3.278,11.666,3,11.109,3z"></path>
       </svg>
       </Link>
       </li>
       <li className={`py-2 border-b ${activeSegment === "lustrum" ? "border-yellow-400" : "border-cia-green"}`}>
            <Link href="#" className="flex items-center">
              <span className={`${
          activeSegment === "lustrum" ? "text-yellow-400" : "text-cia-green "
        }`} >Clayproyex </span>
              <svg
         
         xmlns="http://www.w3.org/2000/svg"
         x="0px"
         y="0px"
         width="12"
         height="12"
         viewBox="0 0 24 24"
         className={`ml-3 ${
           activeSegment === "lustrum" ? "fill-yellow-400" : "fill-cia-green"
         }`}
       >
         <path d="M11.109,3L11.109,3C9.78,3,8.988,4.481,9.725,5.587L14,12l-4.275,6.413C8.988,19.519,9.78,21,11.109,21h0 c0.556,0,1.076-0.278,1.385-0.741l4.766-7.15c0.448-0.672,0.448-1.547,0-2.219l-4.766-7.15C12.185,3.278,11.666,3,11.109,3z"></path>
       </svg>
       </Link>
       </li>
       <li className={`py-2 border-b ${activeSegment === "lustrum" ? "border-yellow-400" : "border-cia-green"}`}>
            <Link href="#" className="flex items-center">
              <span className={`${
          activeSegment === "lustrum" ? "text-yellow-400" : "text-cia-green "
        }`}>Ceremony </span>
              <svg
         
         xmlns="http://www.w3.org/2000/svg"
         x="0px"
         y="0px"
         width="12"
         height="12"
         viewBox="0 0 24 24"
         className={`ml-3 ${
           activeSegment === "lustrum" ? "fill-yellow-400" : "fill-cia-green"
         }`}
       >
         <path d="M11.109,3L11.109,3C9.78,3,8.988,4.481,9.725,5.587L14,12l-4.275,6.413C8.988,19.519,9.78,21,11.109,21h0 c0.556,0,1.076-0.278,1.385-0.741l4.766-7.15c0.448-0.672,0.448-1.547,0-2.219l-4.766-7.15C12.185,3.278,11.666,3,11.109,3z"></path>
       </svg>
       </Link>
       </li>
           

          </ul>
          </div>
      </div>
    </div>
  );
}