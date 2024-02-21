"use client";

import React, { useState, FormEvent, useEffect } from "react";
import { Tabs, Tab, Input } from "@nextui-org/react";
import axios from "axios";
import Image from "next/image";
import Cookies from "js-cookie";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

export function Form() {
    const router = useRouter();

    const userIdFromLocalStorage = Cookies.get("user_Id");
    const token = Cookies.get("token");

    useEffect(() => {
        if (!userIdFromLocalStorage || !token) {
            router.push("/cia/login");
        }
    }, []);

    const [file, setFile] = useState<File>();

    const onSubmit = async (file: File) => {
        if (!file) return { success: false };

        try {
            const data = new FormData();
            data.set("file", file);

            const res = await fetch("/api/upload/sbc", {
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
                    toast.error("Ukuran file tidak boleh melebihi 1MB");
                    e.target.value = "";
                } else if (
                    !/^SKMA_.*_.*$|^KTM_.*_.*$|^Pasfoto_.*_.*$|^Bukti Pembayaran_.*$|^Bukti Voucher_.*$/.test(
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
                        setTeamData((prevState: any) => {
                            let updatedField = field;
                            if (file.name.startsWith("SKMA")) {
                                updatedField = "active_student_letter";
                            } else if (file.name.startsWith("KTM")) {
                                updatedField = "ktm";
                            } else if (file.name.startsWith("Pasfoto")) {
                                updatedField = "photo";
                            } else if (
                                file.name.startsWith("Bukti Pembayaran")
                            ) {
                                updatedField = "payment_proof";
                            } else if (file.name.startsWith("Bukti Voucher")) {
                                updatedField = "voucher";
                            }

                            const updatedTeamData = {
                                ...prevState,
                                [field]: {
                                    ...(prevState[field] as any),
                                    [updatedField]: response.path,
                                },
                            };

                            return updatedTeamData;
                        });
                    }
                }
            }
        };

    const [teamData, setTeamData] = useState({
        team: {
            team_name: "",
            institution_name: "",
            payment_proof: "",
            email: "",
            user_id: Number(userIdFromLocalStorage),
            voucher: "",
        },
        leader: {
            full_name: "",
            phone_number: "",
            line_id: "",
            email: "",
            ktm: "",
            active_student_letter: "",
            photo: "",
            twibbon_and_poster_link: "",
            semester: "",
            nim: "",
        },
        member1: {
            full_name: "",
            phone_number: "",
            line_id: "",
            email: "",
            ktm: "",
            active_student_letter: "",
            photo: "",
            twibbon_and_poster_link: "",
            semester: "",
            nim: "",
        },
        member2: {
            full_name: "",
            phone_number: "",
            line_id: "",
            email: "",
            ktm: "",
            active_student_letter: "",
            photo: "",
            twibbon_and_poster_link: "",
            semester: "",
            nim: "",
        },
        dosbim: {
            full_name: "",
            nip: "",
            email: "",
            phone_number: "",
            photo: "",
        },
        sbc: {
            bridge_name: "",
        },
    });

    function validateTeamData(data: any): boolean {
        for (let key in data) {
            if (data[key] === null) {
                return false;
            } else if (typeof data[key] === "object") {
                if (!validateTeamData(data[key])) {
                    return false;
                }
            }
        }
        return true;
    }

    const backgroundHeading = {
        backgroundImage: `url(/assets/sbc/bg_heading_sbc.png)`,
        backgroundSize: "cover",
    };

    const backgroundImage = {
        backgroundImage: `url(/assets/sbc/bg_form_sbc.png)`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
    };

    const handleRegister = async (event: FormEvent) => {
        event.preventDefault();

        if (!validateTeamData(teamData)) {
            toast.error("Data tidak boleh kosong");
            return;
        }

        const data = {
            team: {
                ...teamData.team,
                user_id: 1,
            },
            leader: {
                ...teamData.leader,
                is_leader: 1,
                batch: null,
            },
            members: [
                {
                    ...teamData.member1,
                    is_leader: 0,
                    batch: null,
                },
                {
                    ...teamData.member2,
                    is_leader: 0,
                    batch: null,
                },
            ],
            dosbim: [
                {
                    ...teamData.dosbim,
                },
            ],
            sbc: [teamData.sbc],
        };

        try {
            const token = Cookies.get("token");

            const response = await axios.post(
                `${process.env.NEXT_PUBLIC_BASE_URL}/teams/sbc/new`,
                data,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );
            toast.success("Pendaftaran berhasil");
            router.push("/dashboard/user");
        } catch (error) {
            toast.error("Pendaftaran gagal");
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
        <div className="relative px-[5%] lg:px-[13%]  pt-4 pb-28 flex flex-col overflow-hidden sm:overflow-scroll ">
            <div className="flex flex-col lg:justify-center items-center relative min-w-full mt-[2%] lg:mt-[2%]">
                <Image
                    src="/assets/sbc/bg_form_sbc.png"
                    alt="bgcia"
                    width={1000}
                    height={1000}
                    className="absolute sm:flex w-auto lg:h-[105%] h-[1950px]  z-0 pt-[6%] hidden"
                />
                <Image
                    src="/assets/sbc/bg_form_sbc_mobile.png"
                    alt="bgcia"
                    width={1000}
                    height={1000}
                    className="absolute sm:hidden w-full max-[385px]:h-[2200px] left-1 h-[2150px]  min-[480px]:h-[103%] "
                />

                <div className="lg:mt-[5%] 2xl:mt-[4%] mt-[8%] min-[530px]:mt-6 sm:mt-[8%] min-h-screen z-50 flex flex-col">
                    <Image
                        src="/assets/sbc/cia_logo.png"
                        alt="cia"
                        width={1000}
                        height={1000}
                        className="lg:h-32 lg:w-32 absolute lg:left-[10%] 2xl:h-36 2xl:w-36 2xl:left-[20%] 2xl:mt-4 h-14 w-14 sm:w-20 sm:h-20 sm:left-[20%] left-[6%] min-[530px]:left-[17%] lg:flex"
                        style={{ transform: `rotate(${rotation}deg)` }}
                    />
                    <div
                        className="font-LibreBaskerville font-bold lg:text-2xl text-[0.7rem]  lg:py-6 py-2 w-[185px] lg:w-[406px] lg:h-[80px] h-auto text-center mt-[5%] left-0 right-0 mx-auto"
                        style={backgroundHeading}
                    >
                        Formulir Pendaftaran SBC
                    </div>
                    <Image
                        src="/assets/sbc/sbc_logo.png"
                        alt="cia"
                        width={1000}
                        height={1000}
                        className="lg:h-28 lg:w-28 absolute lg:right-[10%] 2xl:h-32 2xl:w-32 2xl:right-[20%] 2xl:mt-4  h-14 w-14 right-[6%] min-[530px]:right-[17%] sm:right-[20%] sm:mt-2 lg:flex"
                        style={{ transform: `rotate(${rotation}deg)` }}
                    />

                    <div className="font-LibreBaskerville text-cia-green lg:mx-[15%] mt-[3%] lg:mb-[1%] lg:text-lg text-[0.7rem] min-w-screen mx-[17%]">
                        <ol className="list-decimal pl-2">
                            <li className="mb-1">
                                Periode pendaftaran dimulai pada tanggal 17
                                Februari 2024 pukul 08.00 hingga 17 Maret 2024
                                pukul 23.59 dan TOR soal akan rilis pada tanggal
                                18 Maret 2024;
                            </li>
                            <li className="mb-1">
                                Peserta diharapkan untuk membayar biaya
                                pendaftaran sebesar Rp350.000/tim yang dapat
                                dilakukan dengan cara transfer ke rekening
                                1800013302668 Bank Mandiri atas nama BALQIS
                                SYBIL BUANAWAT dengan menambahkan kode unik 213
                                (nominal yang dibayarkan menjadi Rp350.213,00);
                            </li>
                            <li className="mb-1">
                                Dalam proses transaksi/transfer, peserta
                                diharapkan untuk menambahkan keterangan
                                “Registrasi SBC 2024” pada kolom
                                keterangan/catatan pembayaran; 
                            </li>
                            <li className="mb-1">
                                Peserta diharapkan mengisi formulir pendaftaran
                                dengan teliti.
                            </li>
                            <li className="mb-1">
                                Peserta mengunggah dokumen sesuai dengan
                                ketentuan berikut:
                                <ol className="list-lower-alpha pl-5">
                                    <li className="mb-1">
                                        Scan Kartu Tanda Mahasiswa
                                        (JPG/JPEG/PNG) Format penamaan file:
                                        KTM_Nama Tim_Nama Peserta Contoh:
                                        KTM_All Stars_Nayla Putri
                                    </li>
                                    <li className="mb-1">
                                        Scan surat keterangan mahasiswa aktif
                                        (JPG/JPEG/PNG) Format penamaan file:
                                        SKMA_ Nama Tim_Nama Peserta Contoh:
                                        SKMA_All Stars_Nayla Putri
                                    </li>
                                    <li className="mb-1">
                                        Pas foto 3x4 (JPG/JPEG/PNG) Format
                                        penamaan file: Pasfoto_Nama Tim_Nama
                                        Peserta Contoh: Pasfoto_All Stars_Nayla
                                        Putri
                                    </li>
                                    <li className="mb-1">
                                        Scan bukti pembayaran (JPG/JPEG/PNG)
                                        Format penamaan file: Bukti
                                        Pembayaran_Nama Tim Contoh: Bukti
                                        Pembayaran_All Stars
                                    </li>
                                    <li className="mb-1">
                                        Scan bukti voucher (JPG/JPEG/PNG) Format
                                        penamaan file: Bukti Voucher_Nama Tim
                                        Contoh: Bukti Voucher _All Stars
                                    </li>
                                </ol>
                            </li>
                        </ol>
                    </div>

                    <form className="w-full lg:px-[15%] px-[20%] flex flex-col gap-4 font-sans ">
                        <Input
                            isRequired
                            label="Email"
                            variant="underlined"
                            color="primary"
                            value={teamData.team.email}
                            onChange={(e) =>
                                setTeamData((prevState) => ({
                                    ...prevState,
                                    team: {
                                        ...prevState.team,
                                        email: e.target.value,
                                    },
                                }))
                            }
                            classNames={{
                                label: "text-black/50 dark:text-white/90 md:text-sm text-[0.7rem]",
                                input: [
                                    "text-cia-green dark:text-white/90 md:text-sm text-[0.7rem]",
                                    "placeholder:text-cia-green-placeholder  dark:placeholder:text-white/60 md:text-sm text-[0.7rem]",
                                ],
                                inputWrapper: [
                                    "shadow-none",
                                    "focus:shadow-none",
                                    "border-b-2 border-cia-green-border",
                                    "dark:group-data-[focused=true]:bg-default/60",
                                    "!cursor-text",
                                ],
                            }}
                            placeholder="Email anda"
                        />
                        <Input
                            isRequired
                            label="Nama Tim"
                            variant="underlined"
                            color="primary"
                            value={teamData.team.team_name}
                            onChange={(e) =>
                                setTeamData((prevState) => ({
                                    ...prevState,
                                    team: {
                                        ...prevState.team,
                                        team_name: e.target.value,
                                    },
                                }))
                            }
                            classNames={{
                                label: "text-black/50 dark:text-white/90 md:text-sm text-[0.7rem]",
                                input: [
                                    "text-cia-green dark:text-white/90 md:text-sm text-[0.7rem]",
                                    "placeholder:text-cia-green-placeholder  dark:placeholder:text-white/60 md:text-sm text-[0.7rem]",
                                ],
                                inputWrapper: [
                                    "shadow-none",
                                    "focus:shadow-none",
                                    "border-b-2 border-cia-green-border",
                                    "dark:group-data-[focused=true]:bg-default/60",
                                    "!cursor-text",
                                ],
                            }}
                            placeholder="Nama tim anda"
                        />
                        <Input
                            isRequired
                            label="Nama Perguruan Tinggi"
                            variant="underlined"
                            color="primary"
                            value={teamData.team.institution_name}
                            onChange={(e) =>
                                setTeamData((prevState) => ({
                                    ...prevState,
                                    team: {
                                        ...prevState.team,
                                        institution_name: e.target.value,
                                    },
                                }))
                            }
                            classNames={{
                                label: "text-black/50 dark:text-white/90 md:text-sm text-[0.7rem]",
                                input: [
                                    "text-cia-green dark:text-white/90 md:text-sm text-[0.7rem]",
                                    "placeholder:text-cia-green-placeholder  dark:placeholder:text-white/60 md:text-sm text-[0.7rem]",
                                ],
                                inputWrapper: [
                                    "shadow-none",
                                    "focus:shadow-none",
                                    "border-b-2 border-cia-green-border",
                                    "dark:group-data-[focused=true]:bg-default/60",
                                    "!cursor-text",
                                ],
                            }}
                            placeholder="Nama perguruan tinggi anda"
                        />
                        <Input
                            isRequired
                            label="Nama Jembatan"
                            variant="underlined"
                            color="primary"
                            value={teamData.sbc.bridge_name}
                            onChange={(e) =>
                                setTeamData((prevState) => ({
                                    ...prevState,
                                    sbc: {
                                        ...prevState.sbc,
                                        bridge_name: e.target.value,
                                    },
                                }))
                            }
                            classNames={{
                                label: "text-black/50 dark:text-white/90",
                                input: [
                                    "text-cia-green dark:text-white/90",
                                    "placeholder:text-cia-green-placeholder  dark:placeholder:text-white/60",
                                ],
                                inputWrapper: [
                                    "shadow-none",
                                    "focus:shadow-none",
                                    "border-b-2 border-cia-green-border",
                                    "dark:group-data-[focused=true]:bg-default/60",
                                    "!cursor-text",
                                ],
                            }}
                            placeholder="Nama jembatan anda"
                        />
                        <div className="flex flex-col gap-1 border-b-2 pb-2 border-[#18AB8E]">
                            <p className="text-black text-[0.7rem]  lg:text-[12px] ml-1">
                                Bukti Pembayaran{" "}
                                <span style={{ color: "red" }}>*</span>{" "}
                                <span
                                    style={{
                                        color: "gray",
                                    }}
                                >
                                    (Format Penamaan : Bukti Pembayaran_Nama
                                    Tim)
                                </span>
                            </p>
                            <input
                                type="file"
                                className="text-[0.7rem] md:text-sm text-ciaGreen  xl:w-1/3"
                                onChange={onFileChange("team")}
                                accept="image/*"
                                required
                            ></input>
                        </div>
                        <div className="flex flex-col gap-1 border-b-2 pb-2 border-[#18AB8E]">
                            <p className="text-black text-[0.7rem]  lg:text-[12px] ml-1">
                                Bukti Voucher{" "}
                                <span
                                    style={{
                                        color: "gray",
                                    }}
                                >
                                    (Format Penamaan : Bukti Voucher_Nama Tim)
                                </span>
                            </p>
                            <input
                                type="file"
                                className="text-[0.7rem] md:text-sm text-ciaGreen  xl:w-1/3"
                                onChange={onFileChange("team")}
                                accept="image/*"
                            ></input>
                        </div>
                    </form>

                    <div className="flex flex-col w-full mt-[3%]">
                        <div className="max-w-full w-auto h-auto lg:mx-[15%] mx-[17%]">
                            <div className="overflow-hidden">
                                <Tabs
                                    fullWidth
                                    variant="bordered"
                                    color="primary"
                                    size="md"
                                    aria-label="Tabs form"
                                >
                                    <Tab
                                        key="ketua"
                                        title={
                                            <span className="font-LibreBaskerville lg:text-lg text-sm">
                                                Ketua
                                            </span>
                                        }
                                    >
                                        <form className="w-full flex flex-col gap-4 font-sans">
                                            <Input
                                                isRequired
                                                label="Nama Lengkap"
                                                variant="underlined"
                                                color="primary"
                                                value={
                                                    teamData.leader.full_name
                                                }
                                                onChange={(e) =>
                                                    setTeamData(
                                                        (prevState) => ({
                                                            ...prevState,
                                                            leader: {
                                                                ...prevState.leader,
                                                                full_name:
                                                                    e.target
                                                                        .value,
                                                            },
                                                        })
                                                    )
                                                }
                                                classNames={{
                                                    label: "text-black/50 dark:text-white/90 md:text-sm text-[0.7rem]",
                                                    input: [
                                                        "text-cia-green dark:text-white/90 md:text-sm text-[0.7rem]",
                                                        "placeholder:text-cia-green-placeholder  dark:placeholder:text-white/60 md:text-sm text-[0.7rem]",
                                                    ],
                                                    inputWrapper: [
                                                        "shadow-none",
                                                        "focus:shadow-none",
                                                        "border-b-2 border-cia-green-border",
                                                        "dark:group-data-[focused=true]:bg-default/60",
                                                        "!cursor-text",
                                                    ],
                                                }}
                                                placeholder="Nama lengkap ketua tim"
                                            />
                                            <Input
                                                isRequired
                                                label="NIM"
                                                variant="underlined"
                                                color="primary"
                                                value={teamData.leader.nim}
                                                onChange={(e) =>
                                                    setTeamData(
                                                        (prevState) => ({
                                                            ...prevState,
                                                            leader: {
                                                                ...prevState.leader,
                                                                nim: e.target
                                                                    .value,
                                                            },
                                                        })
                                                    )
                                                }
                                                classNames={{
                                                    label: "text-black/50 dark:text-white/90 md:text-sm text-[0.7rem]",
                                                    input: [
                                                        "text-cia-green dark:text-white/90 md:text-sm text-[0.7rem]",
                                                        "placeholder:text-cia-green-placeholder  dark:placeholder:text-white/60 md:text-sm text-[0.7rem]",
                                                    ],
                                                    inputWrapper: [
                                                        "shadow-none",
                                                        "focus:shadow-none",
                                                        "border-b-2 border-cia-green-border",
                                                        "dark:group-data-[focused=true]:bg-default/60",
                                                        "!cursor-text",
                                                    ],
                                                }}
                                                placeholder="Masukkan NIM ketua tim"
                                            />
                                            <Input
                                                isRequired
                                                label="Semester"
                                                variant="underlined"
                                                color="primary"
                                                value={teamData.leader.semester}
                                                onChange={(e) =>
                                                    setTeamData(
                                                        (prevState) => ({
                                                            ...prevState,
                                                            leader: {
                                                                ...prevState.leader,
                                                                semester:
                                                                    e.target
                                                                        .value,
                                                            },
                                                        })
                                                    )
                                                }
                                                classNames={{
                                                    label: "text-black/50 dark:text-white/90 md:text-sm text-[0.7rem]",
                                                    input: [
                                                        "text-cia-green dark:text-white/90 md:text-sm text-[0.7rem]",
                                                        "placeholder:text-cia-green-placeholder  dark:placeholder:text-white/60 md:text-sm text-[0.7rem]",
                                                    ],
                                                    inputWrapper: [
                                                        "shadow-none",
                                                        "focus:shadow-none",
                                                        "border-b-2 border-cia-green-border",
                                                        "dark:group-data-[focused=true]:bg-default/60",
                                                        "!cursor-text",
                                                    ],
                                                }}
                                                placeholder="Masukkan semester ketua tim"
                                            />
                                            <Input
                                                isRequired
                                                label="Email"
                                                variant="underlined"
                                                color="primary"
                                                value={teamData.leader.email}
                                                onChange={(e) =>
                                                    setTeamData(
                                                        (prevState) => ({
                                                            ...prevState,
                                                            leader: {
                                                                ...prevState.leader,
                                                                email: e.target
                                                                    .value,
                                                            },
                                                        })
                                                    )
                                                }
                                                classNames={{
                                                    label: "text-black/50 dark:text-white/90 md:text-sm text-[0.7rem]",
                                                    input: [
                                                        "text-cia-green dark:text-white/90 md:text-sm text-[0.7rem]",
                                                        "placeholder:text-cia-green-placeholder  dark:placeholder:text-white/60 md:text-sm text-[0.7rem]",
                                                    ],
                                                    inputWrapper: [
                                                        "shadow-none",
                                                        "focus:shadow-none",
                                                        "border-b-2 border-cia-green-border",
                                                        "dark:group-data-[focused=true]:bg-default/60",
                                                        "!cursor-text",
                                                    ],
                                                }}
                                                placeholder="Masukkan email ketua tim"
                                            />
                                            <Input
                                                isRequired
                                                label="Nomor Whatsapp"
                                                variant="underlined"
                                                color="primary"
                                                value={
                                                    teamData.leader.phone_number
                                                }
                                                onChange={(e) =>
                                                    setTeamData(
                                                        (prevState) => ({
                                                            ...prevState,
                                                            leader: {
                                                                ...prevState.leader,
                                                                phone_number:
                                                                    e.target
                                                                        .value,
                                                            },
                                                        })
                                                    )
                                                }
                                                classNames={{
                                                    label: "text-black/50 dark:text-white/90 md:text-sm text-[0.7rem]",
                                                    input: [
                                                        "text-cia-green dark:text-white/90 md:text-sm text-[0.7rem]",
                                                        "placeholder:text-cia-green-placeholder  dark:placeholder:text-white/60 md:text-sm text-[0.7rem]",
                                                    ],
                                                    inputWrapper: [
                                                        "shadow-none",
                                                        "focus:shadow-none",
                                                        "border-b-2 border-cia-green-border",
                                                        "dark:group-data-[focused=true]:bg-default/60",
                                                        "!cursor-text",
                                                    ],
                                                }}
                                                placeholder="Masukkan nomor whatsapp ketua tim"
                                            />
                                            <Input
                                                isRequired
                                                label="ID Line"
                                                variant="underlined"
                                                color="primary"
                                                value={teamData.leader.line_id}
                                                onChange={(e) =>
                                                    setTeamData(
                                                        (prevState) => ({
                                                            ...prevState,
                                                            leader: {
                                                                ...prevState.leader,
                                                                line_id:
                                                                    e.target
                                                                        .value,
                                                            },
                                                        })
                                                    )
                                                }
                                                classNames={{
                                                    label: "text-black/50 dark:text-white/90 md:text-sm text-[0.7rem]",
                                                    input: [
                                                        "text-cia-green dark:text-white/90 md:text-sm text-[0.7rem]",
                                                        "placeholder:text-cia-green-placeholder  dark:placeholder:text-white/60 md:text-sm text-[0.7rem]",
                                                    ],
                                                    inputWrapper: [
                                                        "shadow-none",
                                                        "focus:shadow-none",
                                                        "border-b-2 border-cia-green-border",
                                                        "dark:group-data-[focused=true]:bg-default/60",
                                                        "!cursor-text",
                                                    ],
                                                }}
                                                placeholder="Masukkan ID Line ketua tim"
                                            />
                                            <Input
                                                isRequired
                                                label="Link Bukti Upload Twibbon"
                                                variant="underlined"
                                                color="primary"
                                                value={
                                                    teamData.leader
                                                        .twibbon_and_poster_link
                                                }
                                                onChange={(e) =>
                                                    setTeamData(
                                                        (prevState) => ({
                                                            ...prevState,
                                                            leader: {
                                                                ...prevState.leader,
                                                                twibbon_and_poster_link:
                                                                    e.target
                                                                        .value,
                                                            },
                                                        })
                                                    )
                                                }
                                                classNames={{
                                                    label: "text-black/50 dark:text-white/90 md:text-sm text-[0.7rem]",
                                                    input: [
                                                        "text-cia-green dark:text-white/90 md:text-sm text-[0.7rem]",
                                                        "placeholder:text-cia-green-placeholder  dark:placeholder:text-white/60 md:text-sm text-[0.7rem]",
                                                    ],
                                                    inputWrapper: [
                                                        "shadow-none",
                                                        "focus:shadow-none",
                                                        "border-b-2 border-cia-green-border",
                                                        "dark:group-data-[focused=true]:bg-default/60",
                                                        "!cursor-text",
                                                    ],
                                                }}
                                                placeholder="Masukkan link bukti upload twibbon ketua tim"
                                            />
                                            <div className="flex flex-col gap-1 border-b-2 pb-2 border-[#18AB8E] ">
                                                <p className="text-black text-[0.7rem] lg:text-[12px] ml-1">
                                                    Surat Keterangan Mahasiswa
                                                    Aktif{" "}
                                                    <span
                                                        style={{ color: "red" }}
                                                    >
                                                        *
                                                    </span>{" "}
                                                    <span
                                                        style={{
                                                            color: "gray",
                                                        }}
                                                    >
                                                        (Format Penamaan :
                                                        SKMA_Nama Tim_Nama
                                                        Peserta)
                                                    </span>
                                                </p>
                                                <input
                                                    type="file"
                                                    className="text-[0.7rem] md:text-sm text-ciaGreen xl:w-1/3"
                                                    onChange={onFileChange(
                                                        "leader"
                                                    )}
                                                    accept="image/*"
                                                    required
                                                ></input>
                                            </div>
                                            <div className="flex flex-col gap-1 border-b-2 pb-2 border-[#18AB8E]">
                                                <p className="text-black text-[0.7rem] lg:text-[12px] ml-1">
                                                    Kartu Tanda Mahasiswa{" "}
                                                    <span
                                                        style={{ color: "red" }}
                                                    >
                                                        *
                                                    </span>{" "}
                                                    <span
                                                        style={{
                                                            color: "gray",
                                                        }}
                                                    >
                                                        (Format Penamaan :
                                                        KTM_Nama Tim_Nama
                                                        Peserta)
                                                    </span>
                                                </p>
                                                <input
                                                    type="file"
                                                    className="text-[0.7rem] md:text-sm text-ciaGreen xl:w-1/3"
                                                    onChange={onFileChange(
                                                        "leader"
                                                    )}
                                                    accept="image/*"
                                                    required
                                                ></input>
                                            </div>
                                            <div className="flex flex-col gap-1 border-b-2 pb-2 border-[#18AB8E]">
                                                <p className="text-black text-[0.7rem]  lg:text-[12px] ml-1">
                                                    Pas Foto 3x4{" "}
                                                    <span
                                                        style={{ color: "red" }}
                                                    >
                                                        *
                                                    </span>{" "}
                                                    <span
                                                        style={{
                                                            color: "gray",
                                                        }}
                                                    >
                                                        (Format Penamaan :
                                                        Pasfoto_Nama Tim_Nama
                                                        Peserta)
                                                    </span>
                                                </p>
                                                <input
                                                    type="file"
                                                    className="text-[0.7rem] md:text-sm text-ciaGreen  xl:w-1/3"
                                                    onChange={onFileChange(
                                                        "leader"
                                                    )}
                                                    accept="image/*"
                                                    required
                                                ></input>
                                            </div>
                                        </form>
                                    </Tab>

                                    <Tab
                                        key="anggota2"
                                        title={
                                            <span className="font-LibreBaskerville lg:text-lg text-sm">
                                                Anggota 1
                                            </span>
                                        }
                                    >
                                        <form className="w-full flex flex-col gap-4">
                                            <Input
                                                isRequired
                                                label="Nama Lengkap"
                                                variant="underlined"
                                                color="primary"
                                                value={
                                                    teamData.member1.full_name
                                                }
                                                onChange={(e) => {
                                                    setTeamData(
                                                        (prevState) => ({
                                                            ...prevState,
                                                            member1: {
                                                                ...prevState.member1,
                                                                full_name:
                                                                    e.target
                                                                        .value,
                                                            },
                                                        })
                                                    );
                                                }}
                                                classNames={{
                                                    label: "text-black/50 dark:text-white/90 md:text-sm text-[0.7rem]",
                                                    input: [
                                                        "text-cia-green dark:text-white/90 md:text-sm text-[0.7rem]",
                                                        "placeholder:text-cia-green-placeholder  dark:placeholder:text-white/60 md:text-sm text-[0.7rem]",
                                                    ],
                                                    inputWrapper: [
                                                        "shadow-none",
                                                        "focus:shadow-none",
                                                        "border-b-2 border-cia-green-border",
                                                        "dark:group-data-[focused=true]:bg-default/60",
                                                        "!cursor-text",
                                                    ],
                                                }}
                                                placeholder="Nama lengkap Anggota 1"
                                            />
                                            <Input
                                                isRequired
                                                label="NIM"
                                                variant="underlined"
                                                color="primary"
                                                value={teamData.member1.nim}
                                                onChange={(e) => {
                                                    setTeamData(
                                                        (prevState) => ({
                                                            ...prevState,
                                                            member1: {
                                                                ...prevState.member1,
                                                                nim: e.target
                                                                    .value,
                                                            },
                                                        })
                                                    );
                                                }}
                                                classNames={{
                                                    label: "text-black/50 dark:text-white/90 md:text-sm text-[0.7rem]",
                                                    input: [
                                                        "text-cia-green dark:text-white/90 md:text-sm text-[0.7rem]",
                                                        "placeholder:text-cia-green-placeholder  dark:placeholder:text-white/60 md:text-sm text-[0.7rem]",
                                                    ],
                                                    inputWrapper: [
                                                        "shadow-none",
                                                        "focus:shadow-none",
                                                        "border-b-2 border-cia-green-border",
                                                        "dark:group-data-[focused=true]:bg-default/60",
                                                        "!cursor-text",
                                                    ],
                                                }}
                                                placeholder="Masukkan NIM Anggota 1"
                                            />
                                            <Input
                                                isRequired
                                                label="Semester"
                                                variant="underlined"
                                                color="primary"
                                                value={
                                                    teamData.member1.semester
                                                }
                                                onChange={(e) => {
                                                    setTeamData(
                                                        (prevState) => ({
                                                            ...prevState,
                                                            member1: {
                                                                ...prevState.member1,
                                                                semester:
                                                                    e.target
                                                                        .value,
                                                            },
                                                        })
                                                    );
                                                }}
                                                classNames={{
                                                    label: "text-black/50 dark:text-white/90 md:text-sm text-[0.7rem]",
                                                    input: [
                                                        "text-cia-green dark:text-white/90 md:text-sm text-[0.7rem]",
                                                        "placeholder:text-cia-green-placeholder  dark:placeholder:text-white/60 md:text-sm text-[0.7rem]",
                                                    ],
                                                    inputWrapper: [
                                                        "shadow-none",
                                                        "focus:shadow-none",
                                                        "border-b-2 border-cia-green-border",
                                                        "dark:group-data-[focused=true]:bg-default/60",
                                                        "!cursor-text",
                                                    ],
                                                }}
                                                placeholder="Masukkan semester Anggota 1"
                                            />
                                            <Input
                                                isRequired
                                                label="Email"
                                                variant="underlined"
                                                color="primary"
                                                value={teamData.member1.email}
                                                onChange={(e) => {
                                                    setTeamData(
                                                        (prevState) => ({
                                                            ...prevState,
                                                            member1: {
                                                                ...prevState.member1,
                                                                email: e.target
                                                                    .value,
                                                            },
                                                        })
                                                    );
                                                }}
                                                classNames={{
                                                    label: "text-black/50 dark:text-white/90 md:text-sm text-[0.7rem]",
                                                    input: [
                                                        "text-cia-green dark:text-white/90 md:text-sm text-[0.7rem]",
                                                        "placeholder:text-cia-green-placeholder  dark:placeholder:text-white/60 md:text-sm text-[0.7rem]",
                                                    ],
                                                    inputWrapper: [
                                                        "shadow-none",
                                                        "focus:shadow-none",
                                                        "border-b-2 border-cia-green-border",
                                                        "dark:group-data-[focused=true]:bg-default/60",
                                                        "!cursor-text",
                                                    ],
                                                }}
                                                placeholder="Masukkan email Anggota 1"
                                            />
                                            <Input
                                                isRequired
                                                label="Nomor Whatsapp"
                                                variant="underlined"
                                                color="primary"
                                                value={
                                                    teamData.member1
                                                        .phone_number
                                                }
                                                onChange={(e) => {
                                                    setTeamData(
                                                        (prevState) => ({
                                                            ...prevState,
                                                            member1: {
                                                                ...prevState.member1,
                                                                phone_number:
                                                                    e.target
                                                                        .value,
                                                            },
                                                        })
                                                    );
                                                }}
                                                classNames={{
                                                    label: "text-black/50 dark:text-white/90 md:text-sm text-[0.7rem]",
                                                    input: [
                                                        "text-cia-green dark:text-white/90 md:text-sm text-[0.7rem]",
                                                        "placeholder:text-cia-green-placeholder  dark:placeholder:text-white/60 md:text-sm text-[0.7rem]",
                                                    ],
                                                    inputWrapper: [
                                                        "shadow-none",
                                                        "focus:shadow-none",
                                                        "border-b-2 border-cia-green-border",
                                                        "dark:group-data-[focused=true]:bg-default/60",
                                                        "!cursor-text",
                                                    ],
                                                }}
                                                placeholder="Masukkan nomor whatsapp Anggota 1"
                                            />
                                            <Input
                                                isRequired
                                                label="ID Line"
                                                variant="underlined"
                                                color="primary"
                                                value={teamData.member1.line_id}
                                                onChange={(e) => {
                                                    setTeamData(
                                                        (prevState) => ({
                                                            ...prevState,
                                                            member1: {
                                                                ...prevState.member1,
                                                                line_id:
                                                                    e.target
                                                                        .value,
                                                            },
                                                        })
                                                    );
                                                }}
                                                classNames={{
                                                    label: "text-black/50 dark:text-white/90 md:text-sm text-[0.7rem]",
                                                    input: [
                                                        "text-cia-green dark:text-white/90 md:text-sm text-[0.7rem]",
                                                        "placeholder:text-cia-green-placeholder  dark:placeholder:text-white/60 md:text-sm text-[0.7rem]",
                                                    ],
                                                    inputWrapper: [
                                                        "shadow-none",
                                                        "focus:shadow-none",
                                                        "border-b-2 border-cia-green-border",
                                                        "dark:group-data-[focused=true]:bg-default/60",
                                                        "!cursor-text",
                                                    ],
                                                }}
                                                placeholder="Masukkan ID Line Anggota 1"
                                            />
                                            <Input
                                                isRequired
                                                label="Link Bukti Upload Twibbon"
                                                variant="underlined"
                                                color="primary"
                                                value={
                                                    teamData.member1
                                                        .twibbon_and_poster_link
                                                }
                                                onChange={(e) => {
                                                    setTeamData(
                                                        (prevState) => ({
                                                            ...prevState,
                                                            member1: {
                                                                ...prevState.member1,
                                                                twibbon_and_poster_link:
                                                                    e.target
                                                                        .value,
                                                            },
                                                        })
                                                    );
                                                }}
                                                classNames={{
                                                    label: "text-black/50 dark:text-white/90 md:text-sm text-[0.7rem]",
                                                    input: [
                                                        "text-cia-green dark:text-white/90 md:text-sm text-[0.7rem]",
                                                        "placeholder:text-cia-green-placeholder  dark:placeholder:text-white/60 md:text-sm text-[0.7rem]",
                                                    ],
                                                    inputWrapper: [
                                                        "shadow-none",
                                                        "focus:shadow-none",
                                                        "border-b-2 border-cia-green-border",
                                                        "dark:group-data-[focused=true]:bg-default/60",
                                                        "!cursor-text",
                                                    ],
                                                }}
                                                placeholder="Masukkan link bukti upload twibbon Anggota 1"
                                            />
                                            <div className="flex flex-col gap-1 border-b-2 pb-2 border-[#18AB8E] ">
                                                <p className="text-black text-[12px] ml-1">
                                                    Surat Keterangan Mahasiswa
                                                    Aktif{" "}
                                                    <span
                                                        style={{ color: "red" }}
                                                    >
                                                        *
                                                    </span>{" "}
                                                    <span
                                                        style={{
                                                            color: "gray",
                                                        }}
                                                    >
                                                        (Format Penamaan :
                                                        SKMA_Nama Tim_Nama
                                                        Peserta)
                                                    </span>
                                                </p>
                                                <input
                                                    type="file"
                                                    className="text-[0.7rem] md:text-sm text-ciaGreen xl:w-1/3"
                                                    onChange={onFileChange(
                                                        "member1"
                                                    )}
                                                    accept="image/*"
                                                    required
                                                ></input>
                                            </div>
                                            <div className="flex flex-col gap-1 border-b-2 pb-2 border-[#18AB8E]">
                                                <p className="text-black text-[12px] ml-1">
                                                    Kartu Tanda Mahasiswa{" "}
                                                    <span
                                                        style={{ color: "red" }}
                                                    >
                                                        *
                                                    </span>{" "}
                                                    <span
                                                        style={{
                                                            color: "gray",
                                                        }}
                                                    >
                                                        (Format Penamaan :
                                                        KTM_Nama Tim_Nama
                                                        Peserta)
                                                    </span>
                                                </p>
                                                <input
                                                    type="file"
                                                    className="text-[0.7rem] md:text-sm text-ciaGreen xl:w-1/3"
                                                    onChange={onFileChange(
                                                        "member1"
                                                    )}
                                                    accept="image/*"
                                                    required
                                                ></input>
                                            </div>
                                            <div className="flex flex-col gap-1 border-b-2 pb-2 border-[#18AB8E]">
                                                <p className="text-black  lg:text-[12px] ml-1">
                                                    Pas Foto 3x4{" "}
                                                    <span
                                                        style={{ color: "red" }}
                                                    >
                                                        *
                                                    </span>{" "}
                                                    <span
                                                        style={{
                                                            color: "gray",
                                                        }}
                                                    >
                                                        (Format Penamaan :
                                                        Pasfoto_Nama Tim_Nama
                                                        Peserta)
                                                    </span>
                                                </p>
                                                <input
                                                    type="file"
                                                    className="text-[0.7rem] md:text-sm text-ciaGreen  xl:w-1/3"
                                                    onChange={onFileChange(
                                                        "member1"
                                                    )}
                                                    accept="image/*"
                                                    required
                                                ></input>
                                            </div>
                                        </form>
                                    </Tab>

                                    <Tab
                                        key="anggota3"
                                        title={
                                            <span className="font-LibreBaskerville lg:text-lg text-sm">
                                                Anggota 2
                                            </span>
                                        }
                                    >
                                        <form className="w-full flex flex-col gap-4">
                                            <Input
                                                isRequired
                                                label="Nama Lengkap"
                                                variant="underlined"
                                                color="primary"
                                                value={
                                                    teamData.member2.full_name
                                                }
                                                onChange={(e) => {
                                                    setTeamData(
                                                        (prevState) => ({
                                                            ...prevState,
                                                            member2: {
                                                                ...prevState.member2,
                                                                full_name:
                                                                    e.target
                                                                        .value,
                                                            },
                                                        })
                                                    );
                                                }}
                                                classNames={{
                                                    label: "text-black/50 dark:text-white/90 md:text-sm text-[0.7rem]",
                                                    input: [
                                                        "text-cia-green dark:text-white/90 md:text-sm text-[0.7rem]",
                                                        "placeholder:text-cia-green-placeholder  dark:placeholder:text-white/60 md:text-sm text-[0.7rem]",
                                                    ],
                                                    inputWrapper: [
                                                        "shadow-none",
                                                        "focus:shadow-none",
                                                        "border-b-2 border-cia-green-border",
                                                        "dark:group-data-[focused=true]:bg-default/60",
                                                        "!cursor-text",
                                                    ],
                                                }}
                                                placeholder="Nama lengkap Anggota 2"
                                            />
                                            <Input
                                                isRequired
                                                label="NIM"
                                                variant="underlined"
                                                color="primary"
                                                value={teamData.member2.nim}
                                                onChange={(e) => {
                                                    setTeamData(
                                                        (prevState) => ({
                                                            ...prevState,
                                                            member2: {
                                                                ...prevState.member2,
                                                                nim: e.target
                                                                    .value,
                                                            },
                                                        })
                                                    );
                                                }}
                                                classNames={{
                                                    label: "text-black/50 dark:text-white/90 md:text-sm text-[0.7rem]",
                                                    input: [
                                                        "text-cia-green dark:text-white/90 md:text-sm text-[0.7rem]",
                                                        "placeholder:text-cia-green-placeholder  dark:placeholder:text-white/60 md:text-sm text-[0.7rem]",
                                                    ],
                                                    inputWrapper: [
                                                        "shadow-none",
                                                        "focus:shadow-none",
                                                        "border-b-2 border-cia-green-border",
                                                        "dark:group-data-[focused=true]:bg-default/60",
                                                        "!cursor-text",
                                                    ],
                                                }}
                                                placeholder="Masukkan NIM Anggota 2"
                                            />
                                            <Input
                                                isRequired
                                                label="Semester"
                                                variant="underlined"
                                                color="primary"
                                                value={
                                                    teamData.member2.semester
                                                }
                                                onChange={(e) => {
                                                    setTeamData(
                                                        (prevState) => ({
                                                            ...prevState,
                                                            member2: {
                                                                ...prevState.member2,
                                                                semester:
                                                                    e.target
                                                                        .value,
                                                            },
                                                        })
                                                    );
                                                }}
                                                classNames={{
                                                    label: "text-black/50 dark:text-white/90 md:text-sm text-[0.7rem]",
                                                    input: [
                                                        "text-cia-green dark:text-white/90 md:text-sm text-[0.7rem]",
                                                        "placeholder:text-cia-green-placeholder  dark:placeholder:text-white/60 md:text-sm text-[0.7rem]",
                                                    ],
                                                    inputWrapper: [
                                                        "shadow-none",
                                                        "focus:shadow-none",
                                                        "border-b-2 border-cia-green-border",
                                                        "dark:group-data-[focused=true]:bg-default/60",
                                                        "!cursor-text",
                                                    ],
                                                }}
                                                placeholder="Masukkan semester Anggota 2"
                                            />
                                            <Input
                                                isRequired
                                                label="Email"
                                                variant="underlined"
                                                color="primary"
                                                value={teamData.member2.email}
                                                onChange={(e) => {
                                                    setTeamData(
                                                        (prevState) => ({
                                                            ...prevState,
                                                            member2: {
                                                                ...prevState.member2,
                                                                email: e.target
                                                                    .value,
                                                            },
                                                        })
                                                    );
                                                }}
                                                classNames={{
                                                    label: "text-black/50 dark:text-white/90 md:text-sm text-[0.7rem]",
                                                    input: [
                                                        "text-cia-green dark:text-white/90 md:text-sm text-[0.7rem]",
                                                        "placeholder:text-cia-green-placeholder  dark:placeholder:text-white/60 md:text-sm text-[0.7rem]",
                                                    ],
                                                    inputWrapper: [
                                                        "shadow-none",
                                                        "focus:shadow-none",
                                                        "border-b-2 border-cia-green-border",
                                                        "dark:group-data-[focused=true]:bg-default/60",
                                                        "!cursor-text",
                                                    ],
                                                }}
                                                placeholder="Masukkan email Anggota 2"
                                            />
                                            <Input
                                                isRequired
                                                label="Nomor Whatsapp"
                                                variant="underlined"
                                                color="primary"
                                                value={
                                                    teamData.member2
                                                        .phone_number
                                                }
                                                onChange={(e) => {
                                                    setTeamData(
                                                        (prevState) => ({
                                                            ...prevState,
                                                            member2: {
                                                                ...prevState.member2,
                                                                phone_number:
                                                                    e.target
                                                                        .value,
                                                            },
                                                        })
                                                    );
                                                }}
                                                classNames={{
                                                    label: "text-black/50 dark:text-white/90 md:text-sm text-[0.7rem]",
                                                    input: [
                                                        "text-cia-green dark:text-white/90 md:text-sm text-[0.7rem]",
                                                        "placeholder:text-cia-green-placeholder  dark:placeholder:text-white/60 md:text-sm text-[0.7rem]",
                                                    ],
                                                    inputWrapper: [
                                                        "shadow-none",
                                                        "focus:shadow-none",
                                                        "border-b-2 border-cia-green-border",
                                                        "dark:group-data-[focused=true]:bg-default/60",
                                                        "!cursor-text",
                                                    ],
                                                }}
                                                placeholder="Masukkan nomor whatsapp Anggota 2"
                                            />
                                            <Input
                                                isRequired
                                                label="ID Line"
                                                variant="underlined"
                                                color="primary"
                                                value={teamData.member2.line_id}
                                                onChange={(e) => {
                                                    setTeamData(
                                                        (prevState) => ({
                                                            ...prevState,
                                                            member2: {
                                                                ...prevState.member2,
                                                                line_id:
                                                                    e.target
                                                                        .value,
                                                            },
                                                        })
                                                    );
                                                }}
                                                classNames={{
                                                    label: "text-black/50 dark:text-white/90 md:text-sm text-[0.7rem]",
                                                    input: [
                                                        "text-cia-green dark:text-white/90 md:text-sm text-[0.7rem]",
                                                        "placeholder:text-cia-green-placeholder  dark:placeholder:text-white/60 md:text-sm text-[0.7rem]",
                                                    ],
                                                    inputWrapper: [
                                                        "shadow-none",
                                                        "focus:shadow-none",
                                                        "border-b-2 border-cia-green-border",
                                                        "dark:group-data-[focused=true]:bg-default/60",
                                                        "!cursor-text",
                                                    ],
                                                }}
                                                placeholder="Masukkan ID Line Anggota 2"
                                            />
                                            <Input
                                                isRequired
                                                label="Link Bukti Upload Twibbon"
                                                variant="underlined"
                                                color="primary"
                                                value={
                                                    teamData.member2
                                                        .twibbon_and_poster_link
                                                }
                                                onChange={(e) => {
                                                    setTeamData(
                                                        (prevState) => ({
                                                            ...prevState,
                                                            member2: {
                                                                ...prevState.member2,
                                                                twibbon_and_poster_link:
                                                                    e.target
                                                                        .value,
                                                            },
                                                        })
                                                    );
                                                }}
                                                classNames={{
                                                    label: "text-black/50 dark:text-white/90 md:text-sm text-[0.7rem]",
                                                    input: [
                                                        "text-cia-green dark:text-white/90 md:text-sm text-[0.7rem]",
                                                        "placeholder:text-cia-green-placeholder  dark:placeholder:text-white/60 md:text-sm text-[0.7rem]",
                                                    ],
                                                    inputWrapper: [
                                                        "shadow-none",
                                                        "focus:shadow-none",
                                                        "border-b-2 border-cia-green-border",
                                                        "dark:group-data-[focused=true]:bg-default/60",
                                                        "!cursor-text",
                                                    ],
                                                }}
                                                placeholder="Masukkan link bukti upload twibbon Anggota 2"
                                            />
                                            <div className="flex flex-col gap-1 border-b-2 pb-2 border-[#18AB8E] ">
                                                <p className="text-black text-[12px] ml-1">
                                                    Surat Keterangan Mahasiswa
                                                    Aktif{" "}
                                                    <span
                                                        style={{ color: "red" }}
                                                    >
                                                        *
                                                    </span>{" "}
                                                    <span
                                                        style={{
                                                            color: "gray",
                                                        }}
                                                    >
                                                        (Format Penamaan :
                                                        SKMA_Nama Tim_Nama
                                                        Peserta)
                                                    </span>
                                                </p>
                                                <input
                                                    type="file"
                                                    className="text-[0.7rem] md:text-sm text-ciaGreen xl:w-1/3"
                                                    onChange={onFileChange(
                                                        "member2"
                                                    )}
                                                    accept="image/*"
                                                    required
                                                ></input>
                                            </div>
                                            <div className="flex flex-col gap-1 border-b-2 pb-2 border-[#18AB8E]">
                                                <p className="text-black text-[12px] ml-1">
                                                    Kartu Tanda Mahasiswa{" "}
                                                    <span
                                                        style={{ color: "red" }}
                                                    >
                                                        *
                                                    </span>{" "}
                                                    <span
                                                        style={{
                                                            color: "gray",
                                                        }}
                                                    >
                                                        (Format Penamaan :
                                                        KTM_Nama Tim_Nama
                                                        Peserta)
                                                    </span>
                                                </p>
                                                <input
                                                    type="file"
                                                    className="text-[0.7rem] md:text-sm text-ciaGreen xl:w-1/3"
                                                    onChange={onFileChange(
                                                        "member2"
                                                    )}
                                                    accept="image/*"
                                                    required
                                                ></input>
                                            </div>
                                            <div className="flex flex-col gap-1 border-b-2 pb-2 border-[#18AB8E]">
                                                <p className="text-black  lg:text-[12px] ml-1">
                                                    Pas Foto 3x4{" "}
                                                    <span
                                                        style={{ color: "red" }}
                                                    >
                                                        *
                                                    </span>{" "}
                                                    <span
                                                        style={{
                                                            color: "gray",
                                                        }}
                                                    >
                                                        (Format Penamaan :
                                                        Pasfoto_Nama Tim_Nama
                                                        Peserta)
                                                    </span>
                                                </p>
                                                <input
                                                    type="file"
                                                    className="text-[0.7rem] md:text-sm text-ciaGreen  xl:w-1/3"
                                                    onChange={onFileChange(
                                                        "member2"
                                                    )}
                                                    accept="image/*"
                                                    required
                                                ></input>
                                            </div>
                                        </form>
                                    </Tab>

                                    <Tab
                                        key="dosbim"
                                        title={
                                            <span className="font-LibreBaskerville lg:text-lg text-sm">
                                                Dosen Pembimbing
                                            </span>
                                        }
                                    >
                                        <form className="w-full flex flex-col gap-4">
                                            <Input
                                                isRequired
                                                label="Nama Lengkap"
                                                variant="underlined"
                                                color="primary"
                                                value={
                                                    teamData.dosbim.full_name
                                                }
                                                onChange={(e) =>
                                                    setTeamData(
                                                        (prevState) => ({
                                                            ...prevState,
                                                            dosbim: {
                                                                ...prevState.dosbim,
                                                                full_name:
                                                                    e.target
                                                                        .value,
                                                            },
                                                        })
                                                    )
                                                }
                                                classNames={{
                                                    label: "text-black/50 dark:text-white/90 md:text-sm text-[0.7rem]",
                                                    input: [
                                                        "text-cia-green dark:text-white/90 md:text-sm text-[0.7rem]",
                                                        "placeholder:text-cia-green-placeholder  dark:placeholder:text-white/60 md:text-sm text-[0.7rem]",
                                                    ],
                                                    inputWrapper: [
                                                        "shadow-none",
                                                        "focus:shadow-none",
                                                        "border-b-2 border-cia-green-border",
                                                        "dark:group-data-[focused=true]:bg-default/60",
                                                        "!cursor-text",
                                                    ],
                                                }}
                                                placeholder="Nama lengkap dosen pembimbing"
                                            />
                                            <Input
                                                isRequired
                                                label="NIP"
                                                variant="underlined"
                                                color="primary"
                                                value={teamData.dosbim.nip}
                                                onChange={(e) =>
                                                    setTeamData(
                                                        (prevState) => ({
                                                            ...prevState,
                                                            dosbim: {
                                                                ...prevState.dosbim,
                                                                nip: e.target
                                                                    .value,
                                                            },
                                                        })
                                                    )
                                                }
                                                classNames={{
                                                    label: "text-black/50 dark:text-white/90 md:text-sm text-[0.7rem]",
                                                    input: [
                                                        "text-cia-green dark:text-white/90 md:text-sm text-[0.7rem]",
                                                        "placeholder:text-cia-green-placeholder  dark:placeholder:text-white/60 md:text-sm text-[0.7rem]",
                                                    ],
                                                    inputWrapper: [
                                                        "shadow-none",
                                                        "focus:shadow-none",
                                                        "border-b-2 border-cia-green-border",
                                                        "dark:group-data-[focused=true]:bg-default/60",
                                                        "!cursor-text",
                                                    ],
                                                }}
                                                placeholder="Masukkan NIP dosen pembimbing"
                                            />
                                            <Input
                                                isRequired
                                                label="Email"
                                                variant="underlined"
                                                color="primary"
                                                value={teamData.dosbim.email}
                                                onChange={(e) =>
                                                    setTeamData(
                                                        (prevState) => ({
                                                            ...prevState,
                                                            dosbim: {
                                                                ...prevState.dosbim,
                                                                email: e.target
                                                                    .value,
                                                            },
                                                        })
                                                    )
                                                }
                                                classNames={{
                                                    label: "text-black/50 dark:text-white/90 md:text-sm text-[0.7rem]",
                                                    input: [
                                                        "text-cia-green dark:text-white/90 md:text-sm text-[0.7rem]",
                                                        "placeholder:text-cia-green-placeholder  dark:placeholder:text-white/60 md:text-sm text-[0.7rem]",
                                                    ],
                                                    inputWrapper: [
                                                        "shadow-none",
                                                        "focus:shadow-none",
                                                        "border-b-2 border-cia-green-border",
                                                        "dark:group-data-[focused=true]:bg-default/60",
                                                        "!cursor-text",
                                                    ],
                                                }}
                                                placeholder="Masukkan email dosen pembimbing"
                                            />
                                            <Input
                                                isRequired
                                                label="Nomor Whatsapp"
                                                variant="underlined"
                                                color="primary"
                                                value={
                                                    teamData.dosbim.phone_number
                                                }
                                                onChange={(e) =>
                                                    setTeamData(
                                                        (prevState) => ({
                                                            ...prevState,
                                                            dosbim: {
                                                                ...prevState.dosbim,
                                                                phone_number:
                                                                    e.target
                                                                        .value,
                                                            },
                                                        })
                                                    )
                                                }
                                                classNames={{
                                                    label: "text-black/50 dark:text-white/90 md:text-sm text-[0.7rem]",
                                                    input: [
                                                        "text-cia-green dark:text-white/90 md:text-sm text-[0.7rem]",
                                                        "placeholder:text-cia-green-placeholder  dark:placeholder:text-white/60 md:text-sm text-[0.7rem]",
                                                    ],
                                                    inputWrapper: [
                                                        "shadow-none",
                                                        "focus:shadow-none",
                                                        "border-b-2 border-cia-green-border",
                                                        "dark:group-data-[focused=true]:bg-default/60",
                                                        "!cursor-text",
                                                    ],
                                                }}
                                                placeholder="Masukkan nomor whatsapp dosen pembimbing"
                                            />

                                            <div className="flex flex-col gap-1 border-b-2 pb-2 border-[#18AB8E]">
                                                <p className="text-black text-[12px] ml-1">
                                                    {" "}
                                                    Pas Foto 3x4{" "}
                                                    <span
                                                        style={{ color: "red" }}
                                                    >
                                                        *
                                                    </span>{" "}
                                                    <span
                                                        style={{
                                                            color: "gray",
                                                        }}
                                                    >
                                                        (Format Penamaan :
                                                        Pasfoto_Nama Tim_Nama
                                                        Dosen Pembimbing)
                                                    </span>
                                                </p>
                                                <input
                                                    type="file"
                                                    className="text-[0.7rem] md:text-sm text-ciaGreen  xl:w-1/3"
                                                    onChange={onFileChange(
                                                        "dosbim"
                                                    )}
                                                    accept="image/*"
                                                ></input>
                                            </div>
                                        </form>
                                    </Tab>
                                </Tabs>
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-center w-full mt-8 ">
                        <button
                            className=" bg-[#18AB8E] rounded-3xl z-50 lg:p-3 px-4 py-2 font-sans  font-medium mt-2 mb-0 lg:mb-[6%] xl:mb-[8%]"
                            type="submit"
                            onClick={handleRegister}
                        >
                            <p className="text-[12px] lg:text-[16px]">
                                Kirim Formulir
                            </p>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
