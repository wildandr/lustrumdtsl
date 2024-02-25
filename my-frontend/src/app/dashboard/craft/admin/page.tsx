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

export default function DashboardAdmin() {
    const [registrations, setRegistrations] = useState<any[]>([]);
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const [rejectMessage, setRejectMessage] = useState("");
    const [participantId, setParticipantId] = useState("");
    const token = Cookies.get("token");

    const fetchData = async () => {
        try {
            const response = await axios.get(
                `${process.env.NEXT_PUBLIC_BASE_URL}/crafts/`,
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

        const data = registrations
    
        const combinedCsv = parse(data, { fields: Object.keys(data[0]) });
    
        zip.file('data_craft.csv', combinedCsv);
    
        // download and add files to zip
        for (const participant of data) {
            const { ktm, payment_proof } = participant;
    
            const ktmData = await downloadFile(ktm);
            const paymentProofData = await downloadFile(payment_proof);
    
            const ktmFileName = ktm.split('/').pop();
            const paymentProofFileName = payment_proof.split('/').pop();
    
            zip.file(ktmFileName, ktmData);
            zip.file(paymentProofFileName, paymentProofData);
        }
    
        zip.generateAsync({ type: "blob" }).then(function(content: Blob) {
            const url = window.URL.createObjectURL(content);
            const link = document.createElement('a');
            link.href = url;
            link.download = 'files.zip';
            link.click();
            window.URL.revokeObjectURL(url);
        });
    }

    const verifyTeam = async (participant_id: string) => {
        try {
            const response = await axios.put(
                `${process.env.NEXT_PUBLIC_BASE_URL}/crafts/verify/${participant_id}`,
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

    const handleRejectMessageChange: React.ChangeEventHandler<
        HTMLInputElement
    > = (event) => {
        setRejectMessage(event.target.value);
    };

    const handleReject = async (
        participant_id: number,
        rejectMessage: string
    ) => {
        try {
            const response = await fetch(
                `${process.env.NEXT_PUBLIC_BASE_URL}/crafts/reject/${participantId}`,
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

            toast.success("Peserta berhasil ditolak");
            fetchData();
        } catch (error) {
            console.error("Error:", error);
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
                                                color: registration.isRejected
                                                    ? "red"
                                                    : registration.isVerified ===
                                                      false
                                                    ? "black"
                                                    : "#166534",
                                            }}
                                        >
                                            {registration.isRejected
                                                ? "Pendaftaran Ditolak"
                                                : registration.isVerified ===
                                                  false
                                                ? "Perlu Konfirmasi"
                                                : "Sudah Terkonfirmasi"}
                                        </td>
                                        <td className="px-2">
                                            {registration.activity_choice}
                                        </td>
                                        <td className="px-[0.6rem] py-2 rounded-r-xl">
                                            <div className="flex-col flex gap-2 md:flex-row">
                                                <Link
                                                    href={`/dashboard/craft/admin/${registration.user_id}`}
                                                    className="bg-ciaGreen text-white text-[13px] lg:text-[16px] text-center rounded-md px-3 py-1 w-full"
                                                >
                                                    Lihat Detail
                                                </Link>
                                                <button
                                                    className={`bg-ciaGreen text-white text-[13px] lg:text-[16px] rounded-md px-1 py-1 w-full ${
                                                        registration.isVerified ||
                                                        registration.isRejected
                                                            ? "opacity-50 cursor-not-allowed"
                                                            : ""
                                                    }`}
                                                    onClick={() =>
                                                        verifyTeam(
                                                            registration.participant_id
                                                        )
                                                    }
                                                    disabled={
                                                        registration.isVerified ||
                                                        registration.isRejected
                                                    }
                                                >
                                                    Terima
                                                </button>
                                                <button
                                                    className={`bg-[#E25933] text-white text-[13px] lg:text-[16px] rounded-md px-1 py-1 w-full ${
                                                        registration.isVerified ||
                                                        registration.isRejected
                                                            ? "opacity-50 cursor-not-allowed"
                                                            : ""
                                                    }`}
                                                    disabled={
                                                        registration.isVerified ||
                                                        registration.isRejected
                                                    }
                                                    onClick={() => {
                                                        setParticipantId(
                                                            registration.participant_id
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
                                                if (participantId !== null) {
                                                    handleReject(
                                                        Number(participantId),
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
