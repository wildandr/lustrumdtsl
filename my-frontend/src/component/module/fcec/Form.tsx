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
            email: "",
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
        fcec: {
            originality_statement: "",
            abstract_title: "",
            abstract_file: "",
            abstract_video_link: "",
        },
    });

    const backgroundHeading = {
        backgroundImage: `url(/fcecBgHeading.png)`,
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
            fcec: [
                {
                    // Menggunakan team_id dari data tim
                    originality_statement: teamData.fcec.originality_statement,
                    abstract_title: teamData.fcec.abstract_title,
                    abstract_file: teamData.fcec.abstract_file,
                    abstract_video_link: teamData.fcec.abstract_video_link,
                },
            ],
        };

        console.log(data);

        try {
            const token = localStorage.getItem("token");

            const response = await axios.post(
                "http://lustrumkmtsl:5001/teams/fcec/new",
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
                    className="absolute sm:flex w-auto h-[2100px] sm:h-[1800px] lg:h-[2100px] z-0 pt-[6%] hidden"
                />
                <Image
                    src="/assets/sbc/bg_form_sbc_mobile.png"
                    alt="bgcia"
                    width={1000}
                    height={1000}
                    className="absolute sm:hidden w-full h-[1800px] z-0 pt-[1%]"
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
                        Formulir Pendaftaran FCEC
                    </div>
                    <Image
                        src="/fcecLogo.png"
                        alt="cic"
                        width={1000}
                        height={1000}
                        className="lg:h-32 lg:w-32 absolute lg:right-[13%] h-14 w-14 right-[6%] lg:flex"
                        style={{ transform: `rotate(${rotation}deg)` }}
                    />

                    <div className="font-LibreBaskerville text-cia-green lg:mx-[15%] mt-[3%] lg:mb-[1%] lg:text-lg text-xs min-w-screen mx-[17%]">
                        <p className="">
                            FCEC (Future Civil Engineer Challenge) merupakan
                            salah satu rangkaian acara 12th Civil in Action yang
                            berfokus pada karya tulis ilmiah di bidang teknik
                            sipil, lingkungan, dan sumber daya air untuk
                            tingkatan SMA dan/atau sederajat. FCEC 2024
                            mengusung tema “Strategi generasi muda dalam
                            menciptakan pembangunan berwawasan lingkungan dan
                            pemanfaatan sumberdaya berkelanjutan”.
                        </p>
                        <p className="mt-5">
                            📌 Periode pendaftaran: 17 Februari 2024 - 10 Maret
                            2024 pukul 23:59 WIB
                        </p>
                        <p className="mt-5">
                            Contact Person: <br />
                            Ara (WA: 08971243798) <br />
                            Haya (WA: 085643172448)
                        </p>
                        <p className="mt-5">
                            Ikuti akun sosial media kami untuk informasi lebih
                            lanjut.
                            <br />
                            Instagram: @civilinaction <br />
                            Tiktok: @cia.ugm <br />
                            Linkedin: Civil in Action <br />
                            Youtube: Civil in Action
                        </p>
                    </div>

                    <form className="w-full lg:px-[15%] px-[16%] flex flex-col gap-4 font-sans ">
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
                            label="Asal Sekolah"
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
                            placeholder="Nama sekolah anda"
                        />
                        <Input
                            isRequired
                            label="Judul Abstrak"
                            variant="underlined"
                            color="primary"
                            value={teamData.fcec.abstract_title}
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
                            placeholder="Judul abstrak anda"
                        />
                        <div className="flex flex-col gap-1 border-b-2 pb-2 border-[#18AB8E] ">
                            <p className="text-black text-[12px] ml-1">
                                {" "}
                                File Abstrak
                            </p>
                            <input
                                type="file"
                                className="text-sx md:text-sm text-ciaGreen w-1/3"
                            ></input>
                        </div>
                        <Input
                            isRequired
                            label="Link Video Abstrak"
                            variant="underlined"
                            color="primary"
                            value={teamData.fcec.abstract_video_link}
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
                            placeholder="Link Video Abstrak"
                        />
                        <div className="flex flex-col gap-1 border-b-2 pb-2 border-[#18AB8E] ">
                            <p className="text-black text-[12px] ml-1">
                                {" "}
                                Surat Pernyataan Orisinalitas
                            </p>
                            <input
                                type="file"
                                className="text-sx md:text-sm text-ciaGreen w-1/3"
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
                                            <div className="flex flex-col gap-1 border-b-2 pb-2 border-[#18AB8E] ">
                                                <p className="text-black text-[12px] ml-1">
                                                    {" "}
                                                    Surat Keterangan Siswa Aktif
                                                </p>
                                                <input
                                                    type="file"
                                                    className="text-sx md:text-sm text-ciaGreen w-1/3"
                                                ></input>
                                            </div>
                                            <div className="flex flex-col gap-1 border-b-2 pb-2 border-[#18AB8E] ">
                                                <p className="text-black text-[12px] ml-1">
                                                    {" "}
                                                    Pas Foto 3x4
                                                </p>
                                                <input
                                                    type="file"
                                                    className="text-sx md:text-sm text-ciaGreen w-1/3"
                                                ></input>
                                            </div>
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

                                            <div className="flex flex-col gap-1 border-b-2 pb-2 border-[#18AB8E] ">
                                                <p className="text-black text-[12px] ml-1">
                                                    {" "}
                                                    Surat Keterangan Siswa Aktif
                                                </p>
                                                <input
                                                    type="file"
                                                    className="text-sx md:text-sm text-ciaGreen w-1/3"
                                                ></input>
                                            </div>
                                            <div className="flex flex-col gap-1 border-b-2 pb-2 border-[#18AB8E] ">
                                                <p className="text-black text-[12px] ml-1">
                                                    {" "}
                                                    Pas Foto 3x4
                                                </p>
                                                <input
                                                    type="file"
                                                    className="text-sx md:text-sm text-ciaGreen w-1/3"
                                                ></input>
                                            </div>
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

                                            <div className="flex flex-col gap-1 border-b-2 pb-2 border-[#18AB8E] ">
                                                <p className="text-black text-[12px] ml-1">
                                                    {" "}
                                                    Surat Keterangan Siswa Aktif
                                                </p>
                                                <input
                                                    type="file"
                                                    className="text-sx md:text-sm text-ciaGreen w-1/3"
                                                ></input>
                                            </div>
                                            <div className="flex flex-col gap-1 border-b-2 pb-2 border-[#18AB8E] ">
                                                <p className="text-black text-[12px] ml-1">
                                                    {" "}
                                                    Pas Foto 3x4
                                                </p>
                                                <input
                                                    type="file"
                                                    className="text-sx md:text-sm text-ciaGreen w-1/3"
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
