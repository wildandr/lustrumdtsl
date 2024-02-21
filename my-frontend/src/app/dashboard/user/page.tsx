"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
interface UserEvent {
    user_id: number | null;
    email: string | null;
    username: string;
    password: string;
    createdAt: string | null;
    updatedAt: string | null;
    isAdmin: number;
    eventId: number | null;
    team_id: number | null;
    event_id: number;
    team_name: string;
    institution_name: string | null;
    payment_proof: string | null;
    voucher: string | null;
    isVerified: number;
    bridge_name: string | null;
    originality_statement: string | null;
    abstract_title: string | null;
    abstract_file: string | null;
    abstract_video_link: string | null;
    participant_id: number | null;
    full_name: string | null;
    activity_choice: string | null;
    whatsapp_number: string | null;
    isMahasiswaDTSL: boolean | null;
    ktm: string | null;
    event_name: string;
  }

export default function DashboardUser() {
    const router = useRouter();

    const userIdFromLocalStorage = Cookies.get("user_Id");
    const token = Cookies.get("token");

    const [data, setData] = useState<UserEvent[]>([]);
    useEffect(() => {
        const fetchData = async () => {
            const user_Id = userIdFromLocalStorage;
            try {
                const response = await axios.get(
                    `${process.env.NEXT_PUBLIC_BASE_URL}/user/${user_Id}/events`,
                    {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    }
                );
              
                setData(response.data.data);

            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        if (userIdFromLocalStorage) {
            fetchData();
        }
    }, []);


useEffect(() => {
    const events = data.map(item => {
        if (item.event_id === 1) {
            return "fcec";
        } else if (item.event_id === 2) {
            return "craft";
        } else if (item.event_id === 3) {
            return "sbc";
        } else if (item.event_id === 4) {
            return "cic";
        } else {
            return "";
        }
    });
    console.log(events);
}, [data]); 

    return (
        <div
            className={`bg-[#058369]  max-[385px]:h-[150vh] h-[120vh] min-[525px]:h-[130vh] sm:h-[130vh] md:h-[100vh] `}
        >
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
                className="hidden sm:flex fixed w-full h-full object-cover z-10"
            />

            <div className=" w-full absolute z-40">
                <div className="mt-[9rem] lg:mt-20 font-LibreBaskerville px-2 h-auto lg:px-10">
                    <Image
                        src="/assets/cia/dashboard/bgFormMobile.png"
                        alt="form"
                        width={500}
                        height={500}
                        className={`z-[-99] sm:hidden absolute -mt-10 left-2 max-[385px]:h-[125%] min-[767px]:h-[100%] w-[98vw] `}
                    />
                    <Image
                        src="/assets/cia/dashboard/bgForm.png"
                        alt="form"
                        width={500}
                        height={500}
                        className={`z-[-99] hidden sm:flex absolute  left-4 h-[100%] w-[98vw] `}
                    />

                    <div className="flex items-center justify-center w-full z-20 lg:mt-4">
                        <Image
                            src="/assets/cia/dashboard/icon2Mobile.png"
                            alt="iconlogo"
                            width={1000}
                            height={1000}
                            className="w-auto h-[3.5rem] sm:h-[10%] lg:hidden"
                        />
                        <Image
                            src="/assets/cia/dashboard/icon2.png"
                            alt="iconlogo"
                            width={1000}
                            height={1000}
                            className="w-[14%] h-auto hidden lg:flex"
                        />

                        <Image
                            src="/logociaDesktop.png"
                            alt="logo"
                            width={1000}
                            height={1000}
                            className=" w-[60%] "
                        />
                        <Image
                            src="/assets/cia/dashboard/icon1Mobile.png"
                            alt="iconlogo"
                            width={1000}
                            height={1000}
                            className="w-auto  h-[3.5rem] sm:h-[10%] lg:hidden"
                        />
                        <Image
                            src="/assets/cia/dashboard/icon1.png"
                            alt="iconlogo"
                            width={1000}
                            height={1000}
                            className="w-[14%] h-auto hidden lg:flex"
                        />
                    </div>
                    <p className="text-ciaGreen text-center font-medium text-[14px] md:text-[16px] lg:text-[18px] px-6 mt-3 z-20 ">
                        Terimakasih telah melakukan pendaftaran, status
                        pendaftaran anda dapat dilihat dibawah ini
                    </p>
                    <div className="px-6 mt-6 z-20 min-[500px]:pr-8 min-[600px]:pr-10 sm:px-12 md:pr-16 min-[950px]:pr-18">
                        <table className="w-full text-[14px] md:text-[16px] lg:text-[20px] table-fixed  ">
                            <thead className="">
                                <tr className="text-black text-left">
                                    <th className="">Nama</th>
                                    <th>Event</th>
                                    <th>Status</th>
                                    <th>Action</th>
                                </tr>
                                <tr>
                                    <th className="min-[600px]:hidden">##</th>
                                    <th></th>
                                    <th></th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody className="text-black rounded-xl">
                                {data.map((registration, index) => (
                                    <tr
                                        key={index}
                                        className={`text-left bg-[#B5E5DB]`}
                                    >
                                        <td
                                            className={`font-semibold bg-[#B5E5DB] px-2 py-2 border-r border-ciaGreen border-opacity-10 ${
                                                index === 0
                                                    ? "rounded-tl-xl"
                                                    : index ===
                                                      data.length - 1
                                                    ? "rounded-bl-xl"
                                                    : ""
                                            } ${
                                                data.length === 1
                                                    ? "rounded-l-xl"
                                                    : ""
                                            }`}
                                        >
                                            {registration.team_name}
                                        </td>
                                        <td className="bg-[#B5E5DB] font-semibold px-2 border-r border-ciaGreen border-opacity-10 ">
                                            {registration.event_name}
                                        </td>
                                        <td
                                            className="bg-[#B5E5DB] font-semibold px-2 border-none"
                                            style={{
                                                color:
                                                    registration.isVerified ===
                                                    1
                                                        ? "#166534"
                                                        : "red",
                                            }}
                                        >
                                            {registration.isVerified === 1
                                                ? "Pendaftaran Berhasil"
                                                : "Pendaftaran Belum Berhasil"}
                                        </td>
                                        <td
                                            className={`bg-[#B5E5DB]  px-[0.6rem] py-2 ${
                                                index === 0
                                                    ? "rounded-tr-xl"
                                                    : index ===
                                                      data.length - 1
                                                    ? "rounded-br-xl"
                                                    : ""
                                            } ${
                                                data.length === 1
                                                    ? "rounded-r-xl"
                                                    : ""
                                            }`}
                                        >
                                            <div className="flex-col flex gap-2 md:flex-row">
                                                <button className="bg-ciaGreen text-white text-[13px] lg:text-[16px] rounded-md px-1 py-1 w-full ">
                                                    Lihat Data
                                                </button>
                                                <button className="bg-ciaGreen text-white text-[13px] lg:text-[16px]  rounded-md px-1 py-1 w-full ">
                                                    Ubah Data
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        <div className=" mt-4 ">
                            <p className="text-black mb-2">Pengumuman</p>
                            <div className="p-4 bg-[#B5E5DB] rounded-xl">
                                <p className="text-[14px] text-ciaGreen text-left">
                                    {" "}
                                    Untuk pendaftaran dapat dilakukan dengan pengisian formulir yang ada pada menu{" "}
                                </p>
                                <p className="text-[14px] text-ciaGreen text-left">
                                    {" "}
                                    jika ada pertanyaan lebih lanjut kontak kami
                                    036973265324{" "}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
