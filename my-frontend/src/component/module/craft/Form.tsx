"use client";

import React, { useState, FormEvent, useEffect } from "react";
import { Tabs, Tab, Input } from "@nextui-org/react";
import axios from "axios";
import Image from "next/image";
import { RadioGroup, Radio } from "@nextui-org/react";
import toast from "react-hot-toast";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

export function Form() {
    const router = useRouter();
    const userIdFromCookie = Cookies.get("user_Id");
    const token = Cookies.get("token");

    useEffect(() => {
        if (!userIdFromCookie || !token) {
            router.push("/cia/login");
        }
    }, []);

    const [file, setFile] = useState<File>();

    const [craftData, setCraftData] = useState({
        full_name: "",
        institution_name: "",
        user_id: Number(userIdFromCookie),
        activity_choice: "online",
        whatsapp_number: "",
        isMahasiswaDTSL: false,
        ktm: "",
        payment_proof: "",
        email: "",
        isVerified: false,
        bukti_follow_cia: "",
        bukti_follow_pktsl: "",
        bukti_story: "",
        bundling_member: "",
    });

    function validateCraftData(data: any): boolean {
        for (let key in data) {
            if (
                key !== "ktm" &&
                typeof data[key] === "string" &&
                data[key] === ""
            ) {
                return false;
            }
        }
        return true;
    }

    const onSubmit = async (file: File) => {
        if (!file) return { success: false };

        try {
            const data = new FormData();
            data.set("file", file);

            const res = await fetch("/api/upload/craft", {
                method: "POST",
                body: data,
            });

            if (!res.ok) throw new Error(await res.text());
            const jsonResponse = await res.json();
            return jsonResponse;
        } catch (e: any) {
            console.error(e);
            return { success: false };
        }
    };

    const onFileChange =
        (field: string) => async (e: React.ChangeEvent<HTMLInputElement>) => {
            const file = e.target.files?.[0];
            if (file) {
                const fileSize = file.size / 1024 / 1024; // size in MB

                if (
                    (file.type === "application/pdf" ||
                        file.type.startsWith("image/")) &&
                    fileSize > 1
                ) {
                    alert("File size should not exceed 1MB");
                    toast.error("Ukuran file tidak boleh melebihi 1MB");
                    e.target.value = "";
                } else if (
                    field !== "bundling_member" &&
                    !/^SKMA_.*$|^ID_.*$|^Pas Foto_.*$|^Bukti Pembayaran_.*$|^Bukti Voucher_.*$|^SKSA_.*$|^Orisinalitas_.*$|^Abstrak_.*$|^KTM_.*$|^Bukti Story CRAFT_.*$|^Bukti Follow CIA_.*$|^Bukti Follow PKTSL_.*$/.test(
                        file.name
                    )
                ) {
                    toast.error(
                        "Format penamaan file tidak sesuai. Silahkan sesuaikan dengan format yang telah ditentukan"
                    );
                    e.target.value = "";
                } else {
                    setFile(file);
                    const response = await onSubmit(file);

                    if (response.success) {
                        setCraftData((prevState: any) => {
                            let updatedField = field;
                            if (file.name.startsWith("KTM")) {
                                updatedField = "ktm";
                            } else if (
                                file.name.startsWith("Bukti Pembayaran")
                            ) {
                                updatedField = "payment_proof";
                            } else if (
                                file.name.startsWith("Bukti Story CRAFT")
                            ) {
                                updatedField = "bukti_story";
                            } else if (
                                file.name.startsWith("Bukti Follow CIA")
                            ) {
                                updatedField = "bukti_follow_cia";
                            } else if (
                                file.name.startsWith("Bukti Follow PKTSL")
                            ) {
                                updatedField = "bukti_follow_pktsl";
                            }

                            const updatedCraftData = {
                                ...prevState,
                                [updatedField]: response.path,
                            };

                            console.log(updatedCraftData);
                            return updatedCraftData;
                        });
                    }
                }
            }
        };

    const backgroundHeading = {
        backgroundImage: `url(/craftBgHeading.png)`,
        backgroundSize: "cover",
    };

    const handleRegister = async (event: FormEvent) => {
        event.preventDefault();

        if (!validateCraftData(craftData)) {
            toast.error("Semua field harus diisi");
            return;
        }

        try {
            const token = Cookies.get("token");

            const response = await axios.post(
                `${process.env.NEXT_PUBLIC_BASE_URL}/crafts/register`,
                craftData,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );
            toast.success("Pendaftaran berhasil");
            router.push("/dashboard/user");
        } catch (error: unknown) {
            if (axios.isAxiosError(error)) {
                if (error.response && error.response.status === 400) {
                    toast.error("Anda sudah pernah mendaftar");
                } else {
                    toast.error("Pendaftaran gagal");
                }
            }
            console.error("Error registering:", error);
        }
    };

    const [rotation, setRotation] = useState(0);
    const [direction, setDirection] = useState(1);

    useEffect(() => {
        const interval = setInterval(() => {
            // Jika rotasi mencapai 30 atau 330 derajat, balik arah
            if (rotation >= 30 || rotation <= 1) {
                setDirection((prevDirection) => -prevDirection);
            }
            // Perbarui rotasi sesuai arah pergerakan
            setRotation((prevRotation) => prevRotation + 30 * direction);
        }, 500);

        return () => clearInterval(interval);
    }, [rotation, direction]);

    return (
        <div className="relative px-[5%] lg:px-[13%] pt-4 pb-28 flex flex-col overflow-hidden sm:overflow-scroll  ">
            <div className="flex flex-col lg:justify-center items-center relative min-w-full mt-[4%]">
                <Image
                    src="/assets/sbc/bg_form_sbc.png"
                    alt="bgcia"
                    width={1000}
                    height={1000}
                    className="absolute sm:flex w-[105%] h-[105%] z-0 pt-[6%] hidden"
                />
                <Image
                    src="/assets/sbc/bg_form_sbc_mobile.png"
                    alt="bgcia"
                    width={1000}
                    height={1000}
                    className="absolute sm:hidden w-full left-2 h-[105%] z-0 pt-[1%]"
                />

                <div className="lg:mt-[8%] mt-[8%] min-h-screen w-full z-50 flex flex-col px-3">
                    <Image
                        src="/assets/sbc/cia_logo.png"
                        alt="cia"
                        width={1000}
                        height={1000}
                        className="lg:h-32 lg:w-32 absolute lg:left-[10%] 2xl:h-36 2xl:w-36 2xl:left-[20%] 2xl:mt-4 md:mt-4 h-14 w-14 sm:w-20 sm:h-20 sm:left-[20%] left-[6%] min-[530px]:left-[17%] lg:flex"
                        style={{ transform: `rotate(${rotation}deg)` }}
                    />
                    <div
                        className="font-LibreBaskerville font-bold lg:text-2xl text-xs lg:py-6 py-2 w-[185px] lg:w-[406px] lg:h-[80px] h-auto text-center mt-[5%] left-0 right-0 mx-auto"
                        style={backgroundHeading}
                    >
                        Formulir Pendaftaran CRAFT
                    </div>
                    <Image
                        src="/craftLogo.png"
                        alt="cic"
                        width={1000}
                        height={1000}
                        className="lg:h-28 lg:w-28 absolute lg:right-[10%] 2xl:right-[20%] 2xl:mt-6 md:mt-6   h-14 w-14 right-[6%] min-[530px]:right-[17%] sm:right-[20%] sm:mt-2 lg:flex"
                        style={{ transform: `rotate(${rotation}deg)` }}
                    />
                    <div className="font-LibreBaskerville text-cia-green lg:mx-[15%] mt-[3%] lg:mb-[1%] lg:text-lg text-xs min-w-screen mx-[17%] text-center">
                        Formulir Pendaftaran CRAFT Sudah Ditutup
                    </div>
                </div>
            </div>
        </div>
    );
}
