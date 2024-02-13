"use client";
import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";
import Image from "next/image";
// import { motion } from 'framer-motion'

export default function Nav() {
  const [isVisible, setIsVisible] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Fungsi untuk menutup dropdown saat klik di luar dropdown
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsMenuOpen(false);
      }
    };

    // Menambahkan event listener ke elemen dokumen ketika komponen dimount
    document.addEventListener("mousedown", handleClickOutside);

    // Membersihkan event listener saat komponen dilepas
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
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
    };
  }, []);

  const activeSegment = useSelectedLayoutSegment();

  const links2 = [
    {
      label: "Civil in Action",
      path: "/event/civil-in-action",
      targetSegment: "civil-in-action",
    },
    {
      label: "Srawung Desa",
      path: `/event/srawung-desa`,
      targetSegment: "srawung-desa",
    },
    {
      label: "Claproyex",
      path: "/event/claproyek",
      targetSegment: "claproyek",
    },
    { label: "Ceremony", path: "/event/ceremony", targetSegment: "ceremony" },
  ];
  

  const [isDropdownVisible, setIsDropdownVisible] = useState(true);
  const toggleDropdown = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };

  return (
    <div
      className={`${
        activeSegment === "lustrum"
          ? "bg-black text-yellow-400"
          : "bg-[#005A48] text-white"
      }
         w-full z-[9999] hidden justify-between transition-transform lg:fixed lg:flex lg:px-10 items-center font-LibreBaskerville ${
           isVisible
             ? "transition-transform"
             : "-translate-y-[300%] transition-transform"
         }`}
    >
      <div className="flex w-full flex-row  my-3 pl-16 pr-16 justify-between items-center">
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
              src="/ciaNavlogo.png"
              alt="Logo"
              width={100}
              height={100}
            />
          )}
        </Link>
        <nav className="flex flex-row gap-1 justify-center items-center">
          <Link href="/lustrum">Home</Link>
          <div
            className={`${
              isDropdownVisible ? "hidden" : "block"
            } flex flex-col bg-black absolute right-[10%] p-4 z-[99999]`}
          >
            {links2.map((l, i) => (
              <Link
                key={l.path}
                href={l.path}
                className={` px-2
                    ${
                      activeSegment === l.targetSegment
                        ? " underline decoration-1"
                        : ""
                    }
                    `}
              >
                {l.label}
              </Link>
            ))}
          </div>
          <div className="group inline-block" ref={dropdownRef}>
            <button
              onClick={toggleMenu}
              aria-haspopup="true"
              aria-controls="menu"
              className="outline-none focus:outline-none px-3 py-1 bg-transparent rounded-sm flex items-center min-w-32"
            >
              {/* Event */}
              <span className="pr-1  flex-1 justify-center items-center text-white">
                Event
              </span>

              <svg
                className="fill-white h-4 w-4 transform 
        transition duration-150 ease-in-out mr-6"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </button>
            <ul
              id="menu"
              aria-hidden="true"
              className={`bg-white border rounded-sm transform transition duration-150  origin-top min-w-32  ${
                isMenuOpen
                  ? "absolute top-[4rem] right-[13rem] w-[15rem] p-3 scale-100 z-50"
                  : "absolute hidden scale-0" // Menampilkan menu saat isMenuOpen true
              }`}
            >
              <li className="rounded-sm relative px-3 py-2 hover:bg-gray-100 border-b border-cia-green">
                <Link
                  aria-haspopup="true"
                  aria-controls="menu-lang"
                  className="w-full text-left flex items-center outline-none focus:outline-none"
                  href="/cia"
                >
                  {/* Civil in action */}
                  <span className="pr-1 flex-1 text-cia-green">
                    Civil in Action
                  </span>
                  <span className="mr-auto ">
                    <svg
                      fill="#005A48"
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      className="group-hover:rotate-180 transform 
                      transition duration-100 ease-in-out"
                    >
                      <path d="M11.109,3L11.109,3C9.78,3,8.988,4.481,9.725,5.587L14,12l-4.275,6.413C8.988,19.519,9.78,21,11.109,21h0 c0.556,0,1.076-0.278,1.385-0.741l4.766-7.15c0.448-0.672,0.448-1.547,0-2.219l-4.766-7.15C12.185,3.278,11.666,3,11.109,3z"></path>
                    </svg>
                  </span>
                </Link>
                <ul
                  id="menu-lang"
                  aria-hidden="true"
                  className="bg-white border rounded-sm absolute top-0 right-0 
  transition duration-150 ease-in-out origin-top-left 
  min-w-32
  "
                >
                  {/* links3 */}
                  <li className="px-3 py-1 hover:bg-gray-100 text-cia-green">
                    Registrasi Peserta CRAFT
                  </li>
                  <li className="px-3 py-1 hover:bg-gray-100 text-cia-green">
                    Registrasi Peserta CIC
                  </li>
                  <li className="px-3 py-1 hover:bg-gray-100 text-cia-green">
                    Registrasi Peserta SBC
                  </li>
                  <li className="px-3 py-1 hover:bg-gray-100 text-cia-green">
                    Registrasi Peserta FBEC
                  </li>
                </ul>
              </li>

              <li className="rounded-sm px-3 py-2 flex items-center justify-between w-full hover:bg-gray-100 text-cia-green border-b border-cia-green">
              <Link href="/event/srawung-desa"  className="w-full text-left flex items-center outline-none focus:outline-none">
                <span className="pr-1 flex-1">Srawung Desa</span>
              <span className="mr-auto ">
                   
                  </span>
                  </Link>
              </li>
              <li className="rounded-sm px-3 py-2 hover:bg-gray-100 text-cia-green border-b border-cia-green">
              <Link href="/event/clayproyex"  className="w-full text-left flex items-center outline-none focus:outline-none">
                <span className="pr-1 flex-1">Clayproyex</span>
               
                </Link>
              </li>
              <li className="rounded-sm px-3 py-2 hover:bg-gray-100 text-cia-green border-b border-cia-green">
              <Link href="/event/ceremony"  className="w-full text-left flex items-center outline-none focus:outline-none">
                <span className="pr-1 flex-1">Ceremony</span>
               
                </Link>
              </li>
            </ul>
          </div>
          <Link href="/cia" className="-ml-3">
            About
          </Link>
        </nav>
      </div>
    </div>
  );
}
