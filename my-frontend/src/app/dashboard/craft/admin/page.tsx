"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";
import Cookies from "js-cookie";
import toast from "react-hot-toast";

export default function DashboardAdmin() {
    const [registrations, setRegistrations] = useState<any[]>([]);
    const token = Cookies.get("token");

    const fetchData = async () => {
        try {
            const response = await axios.get(`http://127.0.0.1:5001/crafts/`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            setRegistrations(response.data);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const verifyTeam = async (participant_id: string) => {
        try {
            const response = await axios.put(
                `http://127.0.0.1:5001/crafts/verify/${participant_id}`,
                {},
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            console.log(response.data);

            if (response.data.message === "Participant has been verified") {
                toast.success("Peserta Berhasil Diverifikasi");
                fetchData();
            } else {
                toast.error("Gagal Memverifikasi");
            }
        } catch (error) {
            console.error("Error verifying team", error);
        }
    };

    return (
        <div className="bg-[#058369] h-[100vh] font-LibreBaskerville">
            <Image
                src="/bgcia.png"
                alt="bgcia"
                width={1000}
                height={1000}
                className="hidden sm:flex fixed w-full h-full object-cover z-10"
            />
            <div className=" w-full h-[100vh] absolute z-40">
                <div className="bg-white p-4 rounded-xl  w-[90%] mx-auto mt-28 ">
                    <p className="text-ciaGreen text-center text-2xl font-semibold px-6  z-20 ">
                        Dashboard Panitia Craft
                    </p>

                    <div className="max-h-[400px] 2xl:max-h-[500px] overflow-y-auto mt-5">
                        <table className="w-full text-[20px] table-auto border-separate border-spacing-y-2 ">
                            <thead className="">
                                <tr className="text-black text-left">
                                    <th className="">Nama Peserta/Tim</th>
                                    <th>Status</th>
                                    <th>Event</th>
                                    <th>Action</th>
                                </tr>
                            </thead>

                            <tbody className=" text-black rounded-xl">
                                {registrations.map((registration, index) => (
                                    <tr
                                        className={`text-left ${
                                            index % 2 === 0
                                                ? "bg-[#B5E5DB]"
                                                : "bg-[#E4E4E4]"
                                        }`}
                                        key={index}
                                    >
                                        <td
                                            className={`font-semibold px-2 py-2 border-r border-ciaGreen border-opacity-10 rounded-l-xl`}
                                        >
                                            {registration.full_name}
                                        </td>
                                        <td
                                            className="font-semibold px-2 border-r border-ciaGreen border-opacity-10"
                                            style={{
                                                color:
                                                    registration.isVerified ===
                                                    false
                                                        ? "black"
                                                        : "#166534",
                                            }}
                                        >
                                            {registration.isVerified === false
                                                ? "Perlu Konfirmasi"
                                                : "Sudah Terkonfirmasi"}
                                        </td>
                                        <td className="px-2">
                                            {registration.activity_choice}
                                        </td>
                                        <td className="px-[0.6rem] py-2 rounded-r-xl">
                                            <div className="flex-col flex gap-2 md:flex-row">
                                                <Link
                                                    href={`/cia/dashboard/admin/detailuser/${registration.participant_id}`}
                                                    className="bg-ciaGreen text-white text-[13px] lg:text-[16px] text-center rounded-md px-3 py-1 w-full"
                                                >
                                                    Lihat Detail
                                                </Link>
                                                <button
                                                    className={`bg-ciaGreen text-white text-[13px] lg:text-[16px] rounded-md px-1 py-1 w-full ${
                                                        registration.isVerified
                                                            ? "opacity-50 cursor-not-allowed"
                                                            : ""
                                                    }`}
                                                    onClick={() =>
                                                        verifyTeam(
                                                            registration.participant_id
                                                        )
                                                    }
                                                    disabled={
                                                        registration.isVerified
                                                    }
                                                >
                                                    Terima
                                                </button>
                                                <button
                                                    className={`bg-[#E25933] text-white text-[13px] lg:text-[16px] rounded-md px-1 py-1 w-full ${
                                                        registration.isVerified
                                                            ? "opacity-50 cursor-not-allowed"
                                                            : ""
                                                    }`}
                                                    disabled={
                                                        registration.isVerified
                                                    }
                                                >
                                                    Tolak
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    <div className="flex justify-end mt-10">
                        <button className="bg-[#18AB8E] shadow-xl text-white  px-6 py-2 rounded-2xl  font-sans">
                            Unduh Semua Data
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
