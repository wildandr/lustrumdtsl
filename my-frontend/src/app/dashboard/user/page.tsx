"use client";

import Link from "next/link";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import axios, { AxiosError } from "axios";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import toast from "react-hot-toast";
interface UserEvent {
    user_id: number | null;
    email: string | null;
    username: string;
    password: string;
    createdAt: string | null;
    updatedAt: string | null;
    isAdmin: number;
    eventId: number | null;
    team_id: number;
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

interface Craft {
    participant_id: number | null;
    user_id: number | null;
    full_name: string | null;
    isVerified: boolean | null;
    isRejected: boolean | null;
}

export default function DashboardUser() {
    const router = useRouter();

    const userIdFromLocalStorage = Cookies.get("user_Id");
    const token = Cookies.get("token");

    const [eventsData, setEventsData] = useState<UserEvent[]>([]);
    const [craftData, setCraftData] = useState<Craft | null>(null);
    const combinedData = [...eventsData, craftData].filter(Boolean);

    const fetchData = async () => {
        const user_Id = userIdFromLocalStorage;
        try {
            const responseEvents = await axios.get(
                `${process.env.NEXT_PUBLIC_BASE_URL}/user/${user_Id}/events`,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            setEventsData(responseEvents.data.data);
            console.log(responseEvents.data.data);
        } catch (error) {
            const axiosError = error as AxiosError;
            if (axiosError.response && axiosError.response.status === 404) {
                console.error("Error 404: Not Found");
            } else {
                console.error("Error fetching data:", axiosError);
            }
        }
        try {
            const responseCraft = await axios.get(
                `${process.env.NEXT_PUBLIC_BASE_URL}/crafts/user/${user_Id}`,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            setCraftData(responseCraft.data);
        } catch (error) {
            const axiosError = error as AxiosError;
            if (axiosError.response && axiosError.response.status === 404) {
                console.error("Error 404: Not Found");
            } else {
                console.error("Error fetching data:", axiosError);
            }
        }
    };

    useEffect(() => {
        if (userIdFromLocalStorage) {
            fetchData();
        }
        else {
            router.push("/cia/login");
        }
    }, []);

    const deleteTeam = async (eventName: string, teamId: number) => {
        try {
            const response = await fetch(
                `${
                    process.env.NEXT_PUBLIC_BASE_URL
                }/teams/${eventName.toLowerCase()}/delete/${teamId}`,
                {
                    method: "DELETE",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            if (response.ok) {
                toast.success("Tim Berhasil Dihapus");
                fetchData();
            } else {
                toast.error("Gagal menghapus tim");
            }
        } catch (error) {
            console.error("Error deleting team:", error);
        }
    };

    const removeTeam = async (participantId: number) => {
        try {
            const response = await fetch(
                `${process.env.NEXT_PUBLIC_BASE_URL}/crafts/delete/${participantId}`,
                {
                    method: "DELETE",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            if (!response.ok) {
                throw new Error("Network response was not ok");
            }

            toast.success("Tim Berhasil Dihapus");
            fetchData();
        } catch (error) {
            console.error("Error deleting team:", error);
        }
    };

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
                                {combinedData.map((registration, index) => {
                                    if (registration) {
                                        return (
                                            <tr
                                                key={index}
                                                className={`text-left bg-[#B5E5DB]`}
                                            >
                                                <td
                                                    className={`font-semibold bg-[#B5E5DB] px-2 py-2 border-r border-ciaGreen border-opacity-10 ${
                                                        index === 0
                                                            ? "rounded-tl-xl"
                                                            : index ===
                                                              combinedData.length -
                                                                  1
                                                            ? "rounded-bl-xl"
                                                            : ""
                                                    } ${
                                                        combinedData.length ===
                                                        1
                                                            ? "rounded-l-xl"
                                                            : ""
                                                    }`}
                                                >
                                                    {"event_name" in
                                                    registration
                                                        ? registration.team_name
                                                        : registration.full_name}
                                                </td>
                                                <td className="bg-[#B5E5DB] font-semibold px-2 border-r border-ciaGreen border-opacity-10 ">
                                                    {"event_name" in
                                                        registration &&
                                                    registration.event_name
                                                        ? registration.event_name
                                                        : "CRAFT"}
                                                </td>

                                                <td
                                                    className="bg-[#B5E5DB] font-semibold px-2 border-none"
                                                    style={{
                                                        color:
                                                            ("teams_isRejected" in
                                                                registration &&
                                                                registration.teams_isRejected) ||
                                                            ("isRejected" in
                                                                registration &&
                                                                registration.isRejected)
                                                                ? "red"
                                                                : ("teams_isVerified" in
                                                                      registration &&
                                                                      registration.teams_isVerified ===
                                                                          1) ||
                                                                  ("isVerified" in
                                                                      registration &&
                                                                      registration.isVerified)
                                                                ? "#166534"
                                                                : "red",
                                                    }}
                                                >
                                                    {("teams_isRejected" in
                                                        registration &&
                                                        registration.teams_isRejected) ||
                                                    ("isRejected" in
                                                        registration &&
                                                        registration.isRejected)
                                                        ? "Pendaftaran Ditolak"
                                                        : ("teams_isVerified" in
                                                              registration &&
                                                              registration.teams_isVerified ===
                                                                  1) ||
                                                          ("isVerified" in
                                                              registration &&
                                                              registration.isVerified)
                                                        ? "Berhasil Verifikasi"
                                                        : "Pendaftaran Belum Berhasil"}
                                                </td>
                                                <td
                                                    className={`bg-[#B5E5DB]  px-[0.6rem] py-2 ${
                                                        index === 0
                                                            ? "rounded-tr-xl"
                                                            : index ===
                                                              combinedData.length -
                                                                  1
                                                            ? "rounded-br-xl"
                                                            : ""
                                                    } ${
                                                        combinedData.length ===
                                                        1
                                                            ? "rounded-r-xl"
                                                            : ""
                                                    }`}
                                                >
                                                    <div className="flex-col flex gap-2 md:flex-row">
                                                        {"event_id" in
                                                            registration &&
                                                        "team_id" in
                                                            registration ? (
                                                            <Link
                                                                href={`/dashboard/user/${registration.event_id}&${registration.team_id}`}
                                                                className="bg-ciaGreen text-white text-[13px] lg:text-[16px] text-center rounded-md px-3 py-1 w-full"
                                                            >
                                                                Lihat Data
                                                            </Link>
                                                        ) : null}
                                                        <button
                                                            className="bg-[#E25933] text-white text-[13px] lg:text-[16px] rounded-md px-1 py-1 w-full"
                                                            onClick={() => {
                                                                if (
                                                                    "event_name" in
                                                                        registration &&
                                                                    "team_id" in
                                                                        registration
                                                                ) {
                                                                    deleteTeam(
                                                                        registration.event_name,
                                                                        registration.team_id
                                                                    );
                                                                }
                                                                if (
                                                                    "participant_id" in
                                                                    registration
                                                                ) {
                                                                    if (
                                                                        registration.participant_id !==
                                                                        null
                                                                    ) {
                                                                        removeTeam(
                                                                            registration.participant_id
                                                                        );
                                                                    }
                                                                } else {
                                                                    console.error(
                                                                        "Cannot delete team: registration is not a UserEvent"
                                                                    );
                                                                }
                                                            }}
                                                        >
                                                            Hapus
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                        );
                                    }
                                })}
                            </tbody>
                        </table>
                        <div className=" mt-4 ">
                            <p className="text-black mb-2">Pengumuman</p>
                            <div className="p-4 bg-[#B5E5DB] rounded-xl">
                                <p className="text-[20px] text-ciaGreen text-left">
                                    Untuk ToR SOAL CIC dapat diakses pada{" "}
                                    <a href="https://drive.google.com/drive/folders/1ao2GBpO-OVcbg8kuXG8GrSfoCxkdMf7l?usp=drive_link"className="font-bold" target="_blank" rel="noopener noreferrer" >
                                        Link ini.
                                    </a>
                                </p>
                                <p className="text-[14px] text-ciaGreen text-left">
                                    {" "}
                                    jika ada pertanyaan lebih lanjut kontak kami melalui instagram
                                    @civilinaction{" "}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
function fetchData() {
    throw new Error("Function not implemented.");
}
