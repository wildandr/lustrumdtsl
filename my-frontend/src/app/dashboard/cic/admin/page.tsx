"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";
import Cookies from "js-cookie";
import JSZip from 'jszip';
import { parse } from 'json2csv';

export default function DashboardAdmin() {
    const [registrations, setRegistrations] = useState<any[]>([]);
    const token = Cookies.get("token");

    const fetchData = async () => {
        try {
            const response = await axios.get(
                `${process.env.NEXT_PUBLIC_BASE_URL}/teams/cic/`,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );
            setRegistrations(response.data);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    async function downloadFile(url: string) {
        const fullUrl = `${url}`;
        try {
            const response = await axios.get(fullUrl, {
                responseType: 'arraybuffer' // this is important
            });
            return response.data;
        } catch (error) {
            console.error(`Error downloading file from ${fullUrl}:`, error);
            return null; // return null or some default value
        }
    }

    async function downloadFilesAsZip() {
        const zip = new JSZip();

        const combinedData = registrations.flatMap(registration => {
            const teamData = registration.team;
            const leaderData = { ...teamData, ...registration.leader, is_leader: true };
            const membersData = registration.members.map((member: any) => ({ ...teamData, ...member, is_leader: false }));
            return [leaderData, ...membersData];
        });

        const combinedCsv = parse(combinedData, { fields: Object.keys(combinedData[0]) });

        zip.file('combined.csv', combinedCsv);

        // download and add files to zip
        for (const data of combinedData) {
            const { ktm, active_student_letter, photo, twibbon_and_poster_link } = data;
            const ktmData = await downloadFile(ktm);
            const activeStudentLetterData = await downloadFile(active_student_letter);
            const photoData = await downloadFile(photo);
            const twibbonAndPosterLinkData = await downloadFile(twibbon_and_poster_link);

            const ktmFileName = ktm.split('/').pop();
            const activeStudentLetterFileName = active_student_letter.split('/').pop();
            const photoFileName = photo.split('/').pop();
            const twibbonAndPosterLinkFileName = twibbon_and_poster_link.split('/').pop();

            zip.file(ktmFileName, ktmData);
            zip.file(activeStudentLetterFileName, activeStudentLetterData);
            zip.file(photoFileName, photoData);
            zip.file(twibbonAndPosterLinkFileName, twibbonAndPosterLinkData);
        }

        zip.generateAsync({ type: "blob" }).then(function(content) {
            const url = window.URL.createObjectURL(content);
            const link = document.createElement('a');
            link.href = url;
            link.download = 'files.zip';
            link.click();
            window.URL.revokeObjectURL(url);
        });
    }

    const verifyTeam = async (teamId: string) => {
        try {
            const response = await axios.put(
                `${process.env.NEXT_PUBLIC_BASE_URL}/teams/${teamId}/verify`,
                {},
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            if (response.data.status === "success") {
                alert("Tim Berhasil Diverifikasi");

                // Refresh the data
                fetchData();
            } else {
                alert("Error: " + response.data.message);
            }
        } catch (error) {
            console.error("Error verifying team:", error);
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
                        Dashboard Panitia CIC
                    </p>

                    <div className="max-h-[400px] 2xl:max-h-[500px] overflow-y-auto mt-5">
                        <table className="w-full text-[20px] table-auto border-separate border-spacing-y-2 ">
                            <thead className="">
                                <tr className="text-black text-left">
                                    <th className="">Nama Peserta/Tim</th>
                                    <th>Status</th>
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
                                            {registration.team.team_name}
                                        </td>
                                        <td
                                            className="font-semibold px-2 border-r border-ciaGreen border-opacity-10"
                                            style={{
                                                color:
                                                    registration.team
                                                        .isVerified === 0
                                                        ? "black"
                                                        : "#166534",
                                            }}
                                        >
                                            {registration.team.isVerified === 0
                                                ? "Perlu Konfirmasi"
                                                : "Sudah Terkonfirmasi"}
                                        </td>

                                        <td className="px-[0.6rem] py-2 rounded-r-xl">
                                            <div className="flex-col flex gap-2 md:flex-row">
                                                <Link
                                                    href={`/dashboard/cic/admin/${registration.team.team_id}`} // menambahkan team_id ke URL
                                                    className="bg-ciaGreen text-white text-[13px] lg:text-[16px] text-center rounded-md px-3 py-1 w-full"
                                                >
                                                    Lihat Detail
                                                </Link>
                                                <button
                                                    className={`bg-ciaGreen text-white text-[13px] lg:text-[16px] rounded-md px-1 py-1 w-full ${
                                                        registration.team
                                                            .isVerified
                                                            ? "opacity-50 cursor-not-allowed"
                                                            : ""
                                                    }`}
                                                    onClick={() =>
                                                        verifyTeam(
                                                            registration.team
                                                                .team_id
                                                        )
                                                    }
                                                    disabled={
                                                        registration.team
                                                            .isVerified
                                                    }
                                                >
                                                    Terima
                                                </button>
                                                <button
                                                    className={`bg-[#E25933] text-white text-[13px] lg:text-[16px] rounded-md px-1 py-1 w-full ${
                                                        registration.team
                                                            .isVerified
                                                            ? "opacity-50 cursor-not-allowed"
                                                            : ""
                                                    }`}
                                                    disabled={
                                                        registration.team
                                                            .isVerified
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
                        <button onClick={downloadFilesAsZip} className="bg-[#18AB8E] shadow-xl text-white  px-6 py-2 rounded-2xl  font-sans">
                            Unduh Semua Data
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
