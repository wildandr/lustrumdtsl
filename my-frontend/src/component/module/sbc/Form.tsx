"use client";

import React, { useState, FormEvent, useEffect } from "react";
import { Tabs, Tab, Input } from "@nextui-org/react";
import axios from "axios";
import Image from "next/image";
import { useMediaQuery } from "react-responsive";

export function Form() {
    const isMobile = useMediaQuery({ maxWidth: 767 });

    const [teamData, setTeamData] = useState({
        team: {
            team_name: "",
            institution_name: "",
            payment_proof: "",
            team_email: "",
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
        members1: {
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

        const data = {
            team: teamData.team,
            leader: {
                ...teamData.leader,
                is_leader: 1,
                batch: null,
            },
            members: [
                {
                    ...teamData.members1,
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

        console.log(data);

        try {
            const token = localStorage.getItem("token");

            const response = await axios.post(
                "http://127.0.0.1:5001/teams/sbc/new",
                data,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );
            alert("Pendaftaran berhasil");
        } catch (error) {
            alert("Pendaftaran gagal");
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
                    className="absolute sm:flex w-auto h-[2100px] z-0 pt-[6%] hidden"
                />
                <Image
                    src="/assets/sbc/bg_form_sbc_mobile.png"
                    alt="bgcia"
                    width={1000}
                    height={1000}
                    className="absolute sm:hidden w-full h-[1880px] z-0 pt-[1%]"
                />

                <div className="lg:mt-[8%] mt-[8%] min-h-screen z-50 flex flex-col">
                    <Image
                        src="/assets/sbc/cia_logo.png"
                        alt="cia"
                        width={1000}
                        height={1000}
                        className="lg:h-36 lg:w-36 absolute lg:left-[13%] h-14 w-14 left-[6%] lg:flex"
                        style={{ transform: `rotate(${rotation}deg)` }}
                    />
                    <div
                        className="font-LibreBaskerville font-bold lg:text-2xl text-xs lg:py-6 py-2 w-[185px] lg:w-[406px] lg:h-[80px] h-auto text-center mt-[5%] left-0 right-0 mx-auto"
                        style={backgroundHeading}
                    >
                        Formulir Pendaftaran SBC
                    </div>
                    <Image
                        src="/assets/sbc/sbc_logo.png"
                        alt="cia"
                        width={1000}
                        height={1000}
                        className="lg:h-36 lg:w-36 absolute lg:right-[13%] h-14 w-14 right-[6%] lg:flex"
                        style={{ transform: `rotate(${rotation}deg)` }}
                    />

                    <div className="font-LibreBaskerville text-cia-green lg:mx-[15%] mt-[3%] lg:mb-[1%] lg:text-lg text-xs min-w-screen mx-[17%]">
                        <ol className="list-decimal pl-2">
                            <li className="mb-1">
                                Periode pendaftaran dimulai pada tanggal 17
                                Februari 2024 pukul 08.00 hingga 10 Maret 2024
                                pukul 23.59 dan TOR soal akan rilis pada tanggal
                                11 Maret 2024;
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
                            value={teamData.team.team_email}
                            onChange={(e) =>
                                setTeamData((prevState) => ({
                                    ...prevState,
                                    team: {
                                        ...prevState.team,
                                        team_email: e.target.value,
                                    },
                                }))
                            }
                            classNames={{
                                label: "text-black/50 dark:text-white/90 md:text-sm text-xs",
                                input: [
                                    "text-cia-green dark:text-white/90 md:text-sm text-xs",
                                    "placeholder:text-cia-green-placeholder  dark:placeholder:text-white/60 md:text-sm text-xs",
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
                                label: "text-black/50 dark:text-white/90 md:text-sm text-xs",
                                input: [
                                    "text-cia-green dark:text-white/90 md:text-sm text-xs",
                                    "placeholder:text-cia-green-placeholder  dark:placeholder:text-white/60 md:text-sm text-xs",
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
                                label: "text-black/50 dark:text-white/90 md:text-sm text-xs",
                                input: [
                                    "text-cia-green dark:text-white/90 md:text-sm text-xs",
                                    "placeholder:text-cia-green-placeholder  dark:placeholder:text-white/60 md:text-sm text-xs",
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
                                                    label: "text-black/50 dark:text-white/90 md:text-sm text-xs",
                                                    input: [
                                                        "text-cia-green dark:text-white/90 md:text-sm text-xs",
                                                        "placeholder:text-cia-green-placeholder  dark:placeholder:text-white/60 md:text-sm text-xs",
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
                                                    label: "text-black/50 dark:text-white/90 md:text-sm text-xs",
                                                    input: [
                                                        "text-cia-green dark:text-white/90 md:text-sm text-xs",
                                                        "placeholder:text-cia-green-placeholder  dark:placeholder:text-white/60 md:text-sm text-xs",
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
                                                    label: "text-black/50 dark:text-white/90 md:text-sm text-xs",
                                                    input: [
                                                        "text-cia-green dark:text-white/90 md:text-sm text-xs",
                                                        "placeholder:text-cia-green-placeholder  dark:placeholder:text-white/60 md:text-sm text-xs",
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
                                                    label: "text-black/50 dark:text-white/90 md:text-sm text-xs",
                                                    input: [
                                                        "text-cia-green dark:text-white/90 md:text-sm text-xs",
                                                        "placeholder:text-cia-green-placeholder  dark:placeholder:text-white/60 md:text-sm text-xs",
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
                                                    label: "text-black/50 dark:text-white/90 md:text-sm text-xs",
                                                    input: [
                                                        "text-cia-green dark:text-white/90 md:text-sm text-xs",
                                                        "placeholder:text-cia-green-placeholder  dark:placeholder:text-white/60 md:text-sm text-xs",
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
                                                    label: "text-black/50 dark:text-white/90 md:text-sm text-xs",
                                                    input: [
                                                        "text-cia-green dark:text-white/90 md:text-sm text-xs",
                                                        "placeholder:text-cia-green-placeholder  dark:placeholder:text-white/60 md:text-sm text-xs",
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
                                                    label: "text-black/50 dark:text-white/90 md:text-sm text-xs",
                                                    input: [
                                                        "text-cia-green dark:text-white/90 md:text-sm text-xs",
                                                        "placeholder:text-cia-green-placeholder  dark:placeholder:text-white/60 md:text-sm text-xs",
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
                                            <Input
                                                isRequired
                                                label="Kartu Tanda Mahasiswa (KTM)"
                                                variant="underlined"
                                                color="primary"
                                                value={teamData.leader.ktm}
                                                onChange={(e) =>
                                                    setTeamData(
                                                        (prevState) => ({
                                                            ...prevState,
                                                            leader: {
                                                                ...prevState.leader,
                                                                ktm: e.target
                                                                    .value,
                                                            },
                                                        })
                                                    )
                                                }
                                                classNames={{
                                                    label: "text-black/50 dark:text-white/90 md:text-sm text-xs",
                                                    input: [
                                                        "text-cia-green dark:text-white/90 md:text-sm text-xs",
                                                        "placeholder:text-cia-green-placeholder  dark:placeholder:text-white/60 md:text-sm text-xs",
                                                    ],
                                                    inputWrapper: [
                                                        "shadow-none",
                                                        "focus:shadow-none",
                                                        "border-b-2 border-cia-green-border",
                                                        "dark:group-data-[focused=true]:bg-default/60",
                                                        "!cursor-text",
                                                    ],
                                                }}
                                                placeholder="Sementara (Belum ada component file upload)"
                                            />
                                            <Input
                                                isRequired
                                                label="Surat Keterangan Mahasiswa Aktif"
                                                variant="underlined"
                                                color="primary"
                                                value={
                                                    teamData.leader
                                                        .active_student_letter
                                                }
                                                onChange={(e) =>
                                                    setTeamData(
                                                        (prevState) => ({
                                                            ...prevState,
                                                            leader: {
                                                                ...prevState.leader,
                                                                active_student_letter:
                                                                    e.target
                                                                        .value,
                                                            },
                                                        })
                                                    )
                                                }
                                                classNames={{
                                                    label: "text-black/50 dark:text-white/90 md:text-sm text-xs",
                                                    input: [
                                                        "text-cia-green dark:text-white/90 md:text-sm text-xs",
                                                        "placeholder:text-cia-green-placeholder  dark:placeholder:text-white/60 md:text-sm text-xs",
                                                    ],
                                                    inputWrapper: [
                                                        "shadow-none",
                                                        "focus:shadow-none",
                                                        "border-b-2 border-cia-green-border",
                                                        "dark:group-data-[focused=true]:bg-default/60",
                                                        "!cursor-text",
                                                    ],
                                                }}
                                                placeholder="Sementara (Belum ada component file upload)"
                                            />
                                            <Input
                                                isRequired
                                                label="Pas Foto 3x4"
                                                variant="underlined"
                                                color="primary"
                                                value={teamData.leader.photo}
                                                onChange={(e) =>
                                                    setTeamData(
                                                        (prevState) => ({
                                                            ...prevState,
                                                            leader: {
                                                                ...prevState.leader,
                                                                photo: e.target
                                                                    .value,
                                                            },
                                                        })
                                                    )
                                                }
                                                classNames={{
                                                    label: "text-black/50 dark:text-white/90 md:text-sm text-xs",
                                                    input: [
                                                        "text-cia-green dark:text-white/90 md:text-sm text-xs",
                                                        "placeholder:text-cia-green-placeholder  dark:placeholder:text-white/60 md:text-sm text-xs",
                                                    ],
                                                    inputWrapper: [
                                                        "shadow-none",
                                                        "focus:shadow-none",
                                                        "border-b-2 border-cia-green-border",
                                                        "dark:group-data-[focused=true]:bg-default/60",
                                                        "!cursor-text",
                                                    ],
                                                }}
                                                placeholder="Sementara (Belum ada component file upload)"
                                            />
                                        </form>
                                    </Tab>

                                    <Tab
                                        key="anggota2"
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
                                                    teamData.members1.full_name
                                                }
                                                onChange={(e) => {
                                                    setTeamData(
                                                        (prevState) => ({
                                                            ...prevState,
                                                            members1: {
                                                                ...prevState.members1,
                                                                full_name:
                                                                    e.target
                                                                        .value,
                                                            },
                                                        })
                                                    );
                                                }}
                                                classNames={{
                                                    label: "text-black/50 dark:text-white/90 md:text-sm text-xs",
                                                    input: [
                                                        "text-cia-green dark:text-white/90 md:text-sm text-xs",
                                                        "placeholder:text-cia-green-placeholder  dark:placeholder:text-white/60 md:text-sm text-xs",
                                                    ],
                                                    inputWrapper: [
                                                        "shadow-none",
                                                        "focus:shadow-none",
                                                        "border-b-2 border-cia-green-border",
                                                        "dark:group-data-[focused=true]:bg-default/60",
                                                        "!cursor-text",
                                                    ],
                                                }}
                                                placeholder="Nama lengkap anggota 2"
                                            />
                                            <Input
                                                isRequired
                                                label="NIM"
                                                variant="underlined"
                                                color="primary"
                                                value={teamData.members1.nim}
                                                onChange={(e) => {
                                                    setTeamData(
                                                        (prevState) => ({
                                                            ...prevState,
                                                            members1: {
                                                                ...prevState.members1,
                                                                nim: e.target
                                                                    .value,
                                                            },
                                                        })
                                                    );
                                                }}
                                                classNames={{
                                                    label: "text-black/50 dark:text-white/90 md:text-sm text-xs",
                                                    input: [
                                                        "text-cia-green dark:text-white/90 md:text-sm text-xs",
                                                        "placeholder:text-cia-green-placeholder  dark:placeholder:text-white/60 md:text-sm text-xs",
                                                    ],
                                                    inputWrapper: [
                                                        "shadow-none",
                                                        "focus:shadow-none",
                                                        "border-b-2 border-cia-green-border",
                                                        "dark:group-data-[focused=true]:bg-default/60",
                                                        "!cursor-text",
                                                    ],
                                                }}
                                                placeholder="Masukkan NIM anggota 2"
                                            />
                                            <Input
                                                isRequired
                                                label="Semester"
                                                variant="underlined"
                                                color="primary"
                                                value={
                                                    teamData.members1.semester
                                                }
                                                onChange={(e) => {
                                                    setTeamData(
                                                        (prevState) => ({
                                                            ...prevState,
                                                            members1: {
                                                                ...prevState.members1,
                                                                semester:
                                                                    e.target
                                                                        .value,
                                                            },
                                                        })
                                                    );
                                                }}
                                                classNames={{
                                                    label: "text-black/50 dark:text-white/90 md:text-sm text-xs",
                                                    input: [
                                                        "text-cia-green dark:text-white/90 md:text-sm text-xs",
                                                        "placeholder:text-cia-green-placeholder  dark:placeholder:text-white/60 md:text-sm text-xs",
                                                    ],
                                                    inputWrapper: [
                                                        "shadow-none",
                                                        "focus:shadow-none",
                                                        "border-b-2 border-cia-green-border",
                                                        "dark:group-data-[focused=true]:bg-default/60",
                                                        "!cursor-text",
                                                    ],
                                                }}
                                                placeholder="Masukkan semester anggota 2"
                                            />
                                            <Input
                                                isRequired
                                                label="Email"
                                                variant="underlined"
                                                color="primary"
                                                value={teamData.members1.email}
                                                onChange={(e) => {
                                                    setTeamData(
                                                        (prevState) => ({
                                                            ...prevState,
                                                            members1: {
                                                                ...prevState.members1,
                                                                email: e.target
                                                                    .value,
                                                            },
                                                        })
                                                    );
                                                }}
                                                classNames={{
                                                    label: "text-black/50 dark:text-white/90 md:text-sm text-xs",
                                                    input: [
                                                        "text-cia-green dark:text-white/90 md:text-sm text-xs",
                                                        "placeholder:text-cia-green-placeholder  dark:placeholder:text-white/60 md:text-sm text-xs",
                                                    ],
                                                    inputWrapper: [
                                                        "shadow-none",
                                                        "focus:shadow-none",
                                                        "border-b-2 border-cia-green-border",
                                                        "dark:group-data-[focused=true]:bg-default/60",
                                                        "!cursor-text",
                                                    ],
                                                }}
                                                placeholder="Masukkan email anggota 2"
                                            />
                                            <Input
                                                isRequired
                                                label="Nomor Whatsapp"
                                                variant="underlined"
                                                color="primary"
                                                value={
                                                    teamData.members1
                                                        .phone_number
                                                }
                                                onChange={(e) => {
                                                    setTeamData(
                                                        (prevState) => ({
                                                            ...prevState,
                                                            members1: {
                                                                ...prevState.members1,
                                                                phone_number:
                                                                    e.target
                                                                        .value,
                                                            },
                                                        })
                                                    );
                                                }}
                                                classNames={{
                                                    label: "text-black/50 dark:text-white/90 md:text-sm text-xs",
                                                    input: [
                                                        "text-cia-green dark:text-white/90 md:text-sm text-xs",
                                                        "placeholder:text-cia-green-placeholder  dark:placeholder:text-white/60 md:text-sm text-xs",
                                                    ],
                                                    inputWrapper: [
                                                        "shadow-none",
                                                        "focus:shadow-none",
                                                        "border-b-2 border-cia-green-border",
                                                        "dark:group-data-[focused=true]:bg-default/60",
                                                        "!cursor-text",
                                                    ],
                                                }}
                                                placeholder="Masukkan nomor whatsapp anggota 2"
                                            />
                                            <Input
                                                isRequired
                                                label="ID Line"
                                                variant="underlined"
                                                color="primary"
                                                value={
                                                    teamData.members1.line_id
                                                }
                                                onChange={(e) => {
                                                    setTeamData(
                                                        (prevState) => ({
                                                            ...prevState,
                                                            members1: {
                                                                ...prevState.members1,
                                                                line_id:
                                                                    e.target
                                                                        .value,
                                                            },
                                                        })
                                                    );
                                                }}
                                                classNames={{
                                                    label: "text-black/50 dark:text-white/90 md:text-sm text-xs",
                                                    input: [
                                                        "text-cia-green dark:text-white/90 md:text-sm text-xs",
                                                        "placeholder:text-cia-green-placeholder  dark:placeholder:text-white/60 md:text-sm text-xs",
                                                    ],
                                                    inputWrapper: [
                                                        "shadow-none",
                                                        "focus:shadow-none",
                                                        "border-b-2 border-cia-green-border",
                                                        "dark:group-data-[focused=true]:bg-default/60",
                                                        "!cursor-text",
                                                    ],
                                                }}
                                                placeholder="Masukkan ID Line anggota 2"
                                            />
                                            <Input
                                                isRequired
                                                label="Link Bukti Upload Twibbon"
                                                variant="underlined"
                                                color="primary"
                                                value={
                                                    teamData.members1
                                                        .twibbon_and_poster_link
                                                }
                                                onChange={(e) => {
                                                    setTeamData(
                                                        (prevState) => ({
                                                            ...prevState,
                                                            members1: {
                                                                ...prevState.members1,
                                                                twibbon_and_poster_link:
                                                                    e.target
                                                                        .value,
                                                            },
                                                        })
                                                    );
                                                }}
                                                classNames={{
                                                    label: "text-black/50 dark:text-white/90 md:text-sm text-xs",
                                                    input: [
                                                        "text-cia-green dark:text-white/90 md:text-sm text-xs",
                                                        "placeholder:text-cia-green-placeholder  dark:placeholder:text-white/60 md:text-sm text-xs",
                                                    ],
                                                    inputWrapper: [
                                                        "shadow-none",
                                                        "focus:shadow-none",
                                                        "border-b-2 border-cia-green-border",
                                                        "dark:group-data-[focused=true]:bg-default/60",
                                                        "!cursor-text",
                                                    ],
                                                }}
                                                placeholder="Masukkan link bukti upload twibbon anggota 2"
                                            />
                                            <Input
                                                isRequired
                                                label="Kartu Tanda Mahasiswa (KTM)"
                                                variant="underlined"
                                                color="primary"
                                                value={teamData.members1.ktm}
                                                onChange={(e) => {
                                                    setTeamData(
                                                        (prevState) => ({
                                                            ...prevState,
                                                            members1: {
                                                                ...prevState.members1,
                                                                ktm: e.target
                                                                    .value,
                                                            },
                                                        })
                                                    );
                                                }}
                                                classNames={{
                                                    label: "text-black/50 dark:text-white/90 md:text-sm text-xs",
                                                    input: [
                                                        "text-cia-green dark:text-white/90 md:text-sm text-xs",
                                                        "placeholder:text-cia-green-placeholder  dark:placeholder:text-white/60 md:text-sm text-xs",
                                                    ],
                                                    inputWrapper: [
                                                        "shadow-none",
                                                        "focus:shadow-none",
                                                        "border-b-2 border-cia-green-border",
                                                        "dark:group-data-[focused=true]:bg-default/60",
                                                        "!cursor-text",
                                                    ],
                                                }}
                                                placeholder="Sementara (Belum ada component file upload)"
                                            />
                                            <Input
                                                isRequired
                                                label="Surat Keterangan Mahasiswa Aktif"
                                                variant="underlined"
                                                color="primary"
                                                value={
                                                    teamData.members1
                                                        .active_student_letter
                                                }
                                                onChange={(e) => {
                                                    setTeamData(
                                                        (prevState) => ({
                                                            ...prevState,
                                                            members1: {
                                                                ...prevState.members1,
                                                                active_student_letter:
                                                                    e.target
                                                                        .value,
                                                            },
                                                        })
                                                    );
                                                }}
                                                classNames={{
                                                    label: "text-black/50 dark:text-white/90 md:text-sm text-xs",
                                                    input: [
                                                        "text-cia-green dark:text-white/90 md:text-sm text-xs",
                                                        "placeholder:text-cia-green-placeholder  dark:placeholder:text-white/60 md:text-sm text-xs",
                                                    ],
                                                    inputWrapper: [
                                                        "shadow-none",
                                                        "focus:shadow-none",
                                                        "border-b-2 border-cia-green-border",
                                                        "dark:group-data-[focused=true]:bg-default/60",
                                                        "!cursor-text",
                                                    ],
                                                }}
                                                placeholder="Sementara (Belum ada component file upload)"
                                            />
                                            <Input
                                                isRequired
                                                label="Pas Foto 3x4"
                                                variant="underlined"
                                                color="primary"
                                                value={teamData.members1.photo}
                                                onChange={(e) => {
                                                    setTeamData(
                                                        (prevState) => ({
                                                            ...prevState,
                                                            members1: {
                                                                ...prevState.members1,
                                                                photo: e.target
                                                                    .value,
                                                            },
                                                        })
                                                    );
                                                }}
                                                classNames={{
                                                    label: "text-black/50 dark:text-white/90 md:text-sm text-xs",
                                                    input: [
                                                        "text-cia-green dark:text-white/90 md:text-sm text-xs",
                                                        "placeholder:text-cia-green-placeholder  dark:placeholder:text-white/60 md:text-sm text-xs",
                                                    ],
                                                    inputWrapper: [
                                                        "shadow-none",
                                                        "focus:shadow-none",
                                                        "border-b-2 border-cia-green-border",
                                                        "dark:group-data-[focused=true]:bg-default/60",
                                                        "!cursor-text",
                                                    ],
                                                }}
                                                placeholder="Sementara (Belum ada component file upload)"
                                            />
                                        </form>
                                    </Tab>

                                    <Tab
                                        key="anggota3"
                                        title={
                                            <span className="font-LibreBaskerville lg:text-lg text-sm">
                                                Anggota 3
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
                                                    label: "text-black/50 dark:text-white/90 md:text-sm text-xs",
                                                    input: [
                                                        "text-cia-green dark:text-white/90 md:text-sm text-xs",
                                                        "placeholder:text-cia-green-placeholder  dark:placeholder:text-white/60 md:text-sm text-xs",
                                                    ],
                                                    inputWrapper: [
                                                        "shadow-none",
                                                        "focus:shadow-none",
                                                        "border-b-2 border-cia-green-border",
                                                        "dark:group-data-[focused=true]:bg-default/60",
                                                        "!cursor-text",
                                                    ],
                                                }}
                                                placeholder="Nama lengkap anggota 3"
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
                                                    label: "text-black/50 dark:text-white/90 md:text-sm text-xs",
                                                    input: [
                                                        "text-cia-green dark:text-white/90 md:text-sm text-xs",
                                                        "placeholder:text-cia-green-placeholder  dark:placeholder:text-white/60 md:text-sm text-xs",
                                                    ],
                                                    inputWrapper: [
                                                        "shadow-none",
                                                        "focus:shadow-none",
                                                        "border-b-2 border-cia-green-border",
                                                        "dark:group-data-[focused=true]:bg-default/60",
                                                        "!cursor-text",
                                                    ],
                                                }}
                                                placeholder="Masukkan NIM anggota 3"
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
                                                    label: "text-black/50 dark:text-white/90 md:text-sm text-xs",
                                                    input: [
                                                        "text-cia-green dark:text-white/90 md:text-sm text-xs",
                                                        "placeholder:text-cia-green-placeholder  dark:placeholder:text-white/60 md:text-sm text-xs",
                                                    ],
                                                    inputWrapper: [
                                                        "shadow-none",
                                                        "focus:shadow-none",
                                                        "border-b-2 border-cia-green-border",
                                                        "dark:group-data-[focused=true]:bg-default/60",
                                                        "!cursor-text",
                                                    ],
                                                }}
                                                placeholder="Masukkan semester anggota 3"
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
                                                    label: "text-black/50 dark:text-white/90 md:text-sm text-xs",
                                                    input: [
                                                        "text-cia-green dark:text-white/90 md:text-sm text-xs",
                                                        "placeholder:text-cia-green-placeholder  dark:placeholder:text-white/60 md:text-sm text-xs",
                                                    ],
                                                    inputWrapper: [
                                                        "shadow-none",
                                                        "focus:shadow-none",
                                                        "border-b-2 border-cia-green-border",
                                                        "dark:group-data-[focused=true]:bg-default/60",
                                                        "!cursor-text",
                                                    ],
                                                }}
                                                placeholder="Masukkan email anggota 3"
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
                                                    label: "text-black/50 dark:text-white/90 md:text-sm text-xs",
                                                    input: [
                                                        "text-cia-green dark:text-white/90 md:text-sm text-xs",
                                                        "placeholder:text-cia-green-placeholder  dark:placeholder:text-white/60 md:text-sm text-xs",
                                                    ],
                                                    inputWrapper: [
                                                        "shadow-none",
                                                        "focus:shadow-none",
                                                        "border-b-2 border-cia-green-border",
                                                        "dark:group-data-[focused=true]:bg-default/60",
                                                        "!cursor-text",
                                                    ],
                                                }}
                                                placeholder="Masukkan nomor whatsapp anggota 3"
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
                                                    label: "text-black/50 dark:text-white/90 md:text-sm text-xs",
                                                    input: [
                                                        "text-cia-green dark:text-white/90 md:text-sm text-xs",
                                                        "placeholder:text-cia-green-placeholder  dark:placeholder:text-white/60 md:text-sm text-xs",
                                                    ],
                                                    inputWrapper: [
                                                        "shadow-none",
                                                        "focus:shadow-none",
                                                        "border-b-2 border-cia-green-border",
                                                        "dark:group-data-[focused=true]:bg-default/60",
                                                        "!cursor-text",
                                                    ],
                                                }}
                                                placeholder="Masukkan ID Line anggota 3"
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
                                                    label: "text-black/50 dark:text-white/90 md:text-sm text-xs",
                                                    input: [
                                                        "text-cia-green dark:text-white/90 md:text-sm text-xs",
                                                        "placeholder:text-cia-green-placeholder  dark:placeholder:text-white/60 md:text-sm text-xs",
                                                    ],
                                                    inputWrapper: [
                                                        "shadow-none",
                                                        "focus:shadow-none",
                                                        "border-b-2 border-cia-green-border",
                                                        "dark:group-data-[focused=true]:bg-default/60",
                                                        "!cursor-text",
                                                    ],
                                                }}
                                                placeholder="Masukkan link bukti upload twibbon anggota 3"
                                            />
                                            <Input
                                                isRequired
                                                label="Kartu Tanda Mahasiswa (KTM)"
                                                variant="underlined"
                                                color="primary"
                                                value={teamData.member2.ktm}
                                                onChange={(e) => {
                                                    setTeamData(
                                                        (prevState) => ({
                                                            ...prevState,
                                                            member2: {
                                                                ...prevState.member2,
                                                                ktm: e.target
                                                                    .value,
                                                            },
                                                        })
                                                    );
                                                }}
                                                classNames={{
                                                    label: "text-black/50 dark:text-white/90 md:text-sm text-xs",
                                                    input: [
                                                        "text-cia-green dark:text-white/90 md:text-sm text-xs",
                                                        "placeholder:text-cia-green-placeholder  dark:placeholder:text-white/60 md:text-sm text-xs",
                                                    ],
                                                    inputWrapper: [
                                                        "shadow-none",
                                                        "focus:shadow-none",
                                                        "border-b-2 border-cia-green-border",
                                                        "dark:group-data-[focused=true]:bg-default/60",
                                                        "!cursor-text",
                                                    ],
                                                }}
                                                placeholder="Sementara (Belum ada component file upload)"
                                            />
                                            <Input
                                                isRequired
                                                label="Surat Keterangan Mahasiswa Aktif"
                                                variant="underlined"
                                                color="primary"
                                                value={
                                                    teamData.member2
                                                        .active_student_letter
                                                }
                                                onChange={(e) => {
                                                    setTeamData(
                                                        (prevState) => ({
                                                            ...prevState,
                                                            member2: {
                                                                ...prevState.member2,
                                                                active_student_letter:
                                                                    e.target
                                                                        .value,
                                                            },
                                                        })
                                                    );
                                                }}
                                                classNames={{
                                                    label: "text-black/50 dark:text-white/90 md:text-sm text-xs",
                                                    input: [
                                                        "text-cia-green dark:text-white/90 md:text-sm text-xs",
                                                        "placeholder:text-cia-green-placeholder  dark:placeholder:text-white/60 md:text-sm text-xs",
                                                    ],
                                                    inputWrapper: [
                                                        "shadow-none",
                                                        "focus:shadow-none",
                                                        "border-b-2 border-cia-green-border",
                                                        "dark:group-data-[focused=true]:bg-default/60",
                                                        "!cursor-text",
                                                    ],
                                                }}
                                                placeholder="Sementara (Belum ada component file upload)"
                                            />
                                            <Input
                                                isRequired
                                                label="Pas Foto 3x4"
                                                variant="underlined"
                                                color="primary"
                                                value={teamData.member2.photo}
                                                onChange={(e) => {
                                                    setTeamData(
                                                        (prevState) => ({
                                                            ...prevState,
                                                            member2: {
                                                                ...prevState.member2,
                                                                photo: e.target
                                                                    .value,
                                                            },
                                                        })
                                                    );
                                                }}
                                                classNames={{
                                                    label: "text-black/50 dark:text-white/90 md:text-sm text-xs",
                                                    input: [
                                                        "text-cia-green dark:text-white/90 md:text-sm text-xs",
                                                        "placeholder:text-cia-green-placeholder  dark:placeholder:text-white/60 md:text-sm text-xs",
                                                    ],
                                                    inputWrapper: [
                                                        "shadow-none",
                                                        "focus:shadow-none",
                                                        "border-b-2 border-cia-green-border",
                                                        "dark:group-data-[focused=true]:bg-default/60",
                                                        "!cursor-text",
                                                    ],
                                                }}
                                                placeholder="Sementara (Belum ada component file upload)"
                                            />
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
                                                    label: "text-black/50 dark:text-white/90 md:text-sm text-xs",
                                                    input: [
                                                        "text-cia-green dark:text-white/90 md:text-sm text-xs",
                                                        "placeholder:text-cia-green-placeholder  dark:placeholder:text-white/60 md:text-sm text-xs",
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
                                                    label: "text-black/50 dark:text-white/90 md:text-sm text-xs",
                                                    input: [
                                                        "text-cia-green dark:text-white/90 md:text-sm text-xs",
                                                        "placeholder:text-cia-green-placeholder  dark:placeholder:text-white/60 md:text-sm text-xs",
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
                                                    label: "text-black/50 dark:text-white/90 md:text-sm text-xs",
                                                    input: [
                                                        "text-cia-green dark:text-white/90 md:text-sm text-xs",
                                                        "placeholder:text-cia-green-placeholder  dark:placeholder:text-white/60 md:text-sm text-xs",
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
                                                    label: "text-black/50 dark:text-white/90 md:text-sm text-xs",
                                                    input: [
                                                        "text-cia-green dark:text-white/90 md:text-sm text-xs",
                                                        "placeholder:text-cia-green-placeholder  dark:placeholder:text-white/60 md:text-sm text-xs",
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

                                            <Input
                                                isRequired
                                                label="Pas Foto 3x4"
                                                variant="underlined"
                                                color="primary"
                                                value={teamData.dosbim.photo}
                                                onChange={(e) =>
                                                    setTeamData(
                                                        (prevState) => ({
                                                            ...prevState,
                                                            dosbim: {
                                                                ...prevState.dosbim,
                                                                photo: e.target
                                                                    .value,
                                                            },
                                                        })
                                                    )
                                                }
                                                classNames={{
                                                    label: "text-black/50 dark:text-white/90 md:text-sm text-xs",
                                                    input: [
                                                        "text-cia-green dark:text-white/90 md:text-sm text-xs",
                                                        "placeholder:text-cia-green-placeholder  dark:placeholder:text-white/60 md:text-sm text-xs",
                                                    ],
                                                    inputWrapper: [
                                                        "shadow-none",
                                                        "focus:shadow-none",
                                                        "border-b-2 border-cia-green-border",
                                                        "dark:group-data-[focused=true]:bg-default/60",
                                                        "!cursor-text",
                                                    ],
                                                }}
                                                placeholder="Sementara (Belum ada component file upload)"
                                            />
                                        </form>
                                    </Tab>
                                </Tabs>
                            </div>
                        </div>
                    </div>

                    <button
                        className=" w-full z-50 lg:p-3 p-1 font-sans font-medium mt-2 mb-0 lg:mb-[6%] xl:mb-[8%]"
                        type="submit"
                        onClick={handleRegister}
                    >
                        <div className="bg-[#18AB8E] w-auto lg:mx-[35%] mx-[17%] lg:p-3 p-2 rounded-3xl shadow-lg hover:bg-cia-green-border">
                            Kirim Formulir
                        </div>
                    </button>
                </div>
            </div>
        </div>
    );
}
