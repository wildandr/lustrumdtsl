"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";
import Cookies from "js-cookie";
import toast from "react-hot-toast";
import {
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Button,
    useDisclosure,
    Input,
    Textarea,
} from "@nextui-org/react";
import JSZip from "jszip";
import { parse } from "json2csv";
import path from "path";

export default function DashboardAdmin() {
    const [registrations, setRegistrations] = useState<any[]>([]);
    const [participant, setParticipant] = useState<any[]>([]);
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const [rejectMessage, setRejectMessage] = useState("");
    const [currentTeamId, setCurrentTeamId] = useState(null);
    const token = Cookies.get("token");

    const handleRejectMessageChange: React.ChangeEventHandler<
        HTMLInputElement
    > = (event) => {
        setRejectMessage(event.target.value);
    };

    const handleReject = async (team_id: number, rejectMessage: string) => {
        try {
            const response = await fetch(
                `${process.env.NEXT_PUBLIC_BASE_URL}/teams/${team_id}/reject`,
                {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    },
                    body: JSON.stringify({ rejectMessage }),
                }
            );

            if (!response.ok) {
                throw new Error("Network response was not ok");
            }

            toast.success("Tim berhasil ditolak");
            fetchData();
        } catch (error) {
            console.error("Error:", error);
        }
    };

    const fetchData = async () => {
        try {
            const response = await axios.get(
                `${process.env.NEXT_PUBLIC_BASE_URL}/teams/sbc/`,
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
    const fetchParticipant = async () => {
        try {
            const response = await axios.get(
                `${process.env.NEXT_PUBLIC_BASE_URL}/sbc-participant`,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );
            setParticipant(response.data);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    useEffect(() => {
        fetchData();
        fetchParticipant();
        // console.log(participant);
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

        const data = (participant as unknown as { participants: any[] }).participants.map(participant => {
            const { dosbim, download, ...rest } = participant;
            return rest;
        });
        const combinedCsv = parse(data, { fields: Object.keys(data[0]) });
        zip.file('data_sbc.csv', combinedCsv);

        console.log(data);
        
        const downloadPath =  (participant as unknown as { participants: any[] }).participants;
        console.log(downloadPath);
        for (const participant of downloadPath) {
            const { download } = participant;
            const { ktm, active_student_letter, photo, payment_proof, voucher } = download;

            const ktmData = await downloadFile(ktm);
            const activeStudentLetterData = await downloadFile(active_student_letter);
            const photoData = await downloadFile(photo);
            const paymentProofData = await downloadFile(payment_proof);
            const voucherData = await downloadFile(voucher);

            const ktmFileName = ktm ? ktm.split('/').pop() : null;
            const activeStudentLetterFileName = active_student_letter ? active_student_letter.split('/').pop() : null;
            const photoFileName = photo ? photo.split('/').pop() : null;
            const paymentProofFileName = payment_proof ? payment_proof.split('/').pop() : null;
            const voucherFileName = voucher ? voucher.split('/').pop() : null;

            zip.file(ktmFileName, ktmData);
            zip.file(activeStudentLetterFileName, activeStudentLetterData);
            zip.file(photoFileName, photoData);
            zip.file(paymentProofFileName, paymentProofData);
            zip.file(voucherFileName, voucherData);
        }

        //simpan data participant.participants kedalam file csv
    
        zip.generateAsync({ type: "blob" }).then(function(content: Blob) {
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
                toast.success("Tim Berhasil Diverifikasi");

                // Refresh the data
                fetchData();
            } else {
                toast.error("Error: " + response.data.message);
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
                        Dashboard Panitia SBC
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
                                                color: registration.team
                                                    .isRejected
                                                    ? "red"
                                                    : registration.team
                                                          .isVerified === 0
                                                    ? "black"
                                                    : "#166534",
                                            }}
                                        >
                                            {registration.team.isRejected
                                                ? "Tim telah ditolak"
                                                : registration.team
                                                      .isVerified === 0
                                                ? "Perlu Konfirmasi"
                                                : "Sudah Terkonfirmasi"}
                                        </td>

                                        <td className="px-[0.6rem] py-2 rounded-r-xl">
                                            <div className="flex-col flex gap-2 md:flex-row">
                                                <Link
                                                    href={`/dashboard/sbc/admin/${registration.team.team_id}`}
                                                    className="bg-ciaGreen text-white text-[13px] lg:text-[16px] text-center rounded-md px-3 py-1 w-full"
                                                >
                                                    Lihat Detail
                                                </Link>
                                                <button
                                                    className={`bg-ciaGreen text-white text-[13px] lg:text-[16px] rounded-md px-1 py-1 w-full ${
                                                        registration.team
                                                            .isVerified ||
                                                        registration.team
                                                            .isRejected
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
                                                            .isVerified ||
                                                        registration.team
                                                            .isRejected
                                                    }
                                                >
                                                    Terima
                                                </button>
                                                <button
                                                    className={`bg-[#E25933] text-white text-[13px] lg:text-[16px] rounded-md px-1 py-1 w-full ${
                                                        registration.team
                                                            .isVerified ||
                                                        registration.team
                                                            .isRejected
                                                            ? "opacity-50 cursor-not-allowed"
                                                            : ""
                                                    }`}
                                                    disabled={
                                                        registration.team
                                                            .isVerified ||
                                                        registration.team
                                                            .isRejected
                                                    }
                                                    onClick={() => {
                                                        setCurrentTeamId(
                                                            registration.team
                                                                .team_id
                                                        );
                                                        onOpen();
                                                    }}
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

                    <Modal
                        isOpen={isOpen}
                        onOpenChange={onOpenChange}
                        placement="top-center"
                    >
                        <ModalContent>
                            {(onClose) => (
                                <>
                                    <ModalHeader className="flex flex-col gap-1">
                                        Konfirmasi Penolakan
                                    </ModalHeader>
                                    <ModalBody>
                                        <Textarea
                                            label="Penolakan"
                                            placeholder="Masukkan alasan penolakan"
                                            value={rejectMessage}
                                            onChange={handleRejectMessageChange}
                                        />
                                        <div className="flex py-2 px-1 justify-between"></div>
                                    </ModalBody>
                                    <ModalFooter>
                                        <Button
                                            color="danger"
                                            variant="flat"
                                            onPress={onClose}
                                        >
                                            Batal
                                        </Button>
                                        <Button
                                            color="primary"
                                            onPress={() => {
                                                if (currentTeamId !== null) {
                                                    handleReject(
                                                        currentTeamId,
                                                        rejectMessage
                                                    );
                                                    onClose();
                                                }
                                            }}
                                        >
                                            Kirim
                                        </Button>
                                    </ModalFooter>
                                </>
                            )}
                        </ModalContent>
                    </Modal>
                </div>
            </div>
        </div>
    );
}