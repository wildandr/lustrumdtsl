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

    const [teamData, setTeamData] = useState({
        team: {
            team_name: "",
            institution_name: "",
            payment_proof: "",
            email: "",
            user_id: Number(userIdFromLocalStorage),
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
        },
        fcec: {
            originality_statement: "",
            abstract_title: "",
            abstract_file: "",
            abstract_video_link: "",
        },
    });

    const [file, setFile] = useState<File>();

    const onSubmit = async (file: File) => {
        if (!file) return { success: false };

        try {
            const data = new FormData();
            data.set("file", file);

            const res = await fetch("/api/upload/fcec", {
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
                    !/^SKMA_.*_.*$|^ID_.*_.*$|^Pas Foto_.*_.*$|^Bukti Pembayaran_.*$|^Bukti Voucher_.*$|^SKSA_.*$|^Orisinalitas_.*$|^Abstrak_.*$|^Identitas_.*_.*$/.test(
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
                            if (file.name.startsWith("SKSA")) {
                                updatedField = "active_student_letter";
                            } else if (file.name.startsWith("ID")) {
                                updatedField = "ktm";
                            } else if (file.name.startsWith("Pas Foto")) {
                                updatedField = "photo";
                            } else if (
                                file.name.startsWith("Bukti Pembayaran")
                            ) {
                                updatedField = "payment_proof";
                            } else if (file.name.startsWith("Bukti Voucher")) {
                                updatedField = "voucher";
                            } else if (file.name.startsWith("Abstrak")) {
                                updatedField = "abstract_file";
                            } else if (file.name.startsWith("Orisinalitas")) {
                                updatedField = "originality_statement";
                            } else if (file.name.startsWith("Identitas")) {
                                updatedField = "ktm";
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

        const membersData = [
            {
                ...teamData.member1,
                is_leader: 0,
                batch: null,
            },
        ];

        const isMember2Empty = Object.values(teamData.member2).every(
            (value) => !value
        );

        if (!isMember2Empty) {
            membersData.push({
                ...teamData.member2,
                is_leader: 0,
                batch: null,
            });
        }

        const postData = {
            team: teamData.team,
            leader: {
                ...teamData.leader,
                is_leader: 1,
                batch: null,
            },
            members: membersData,
            fcec: [
                {
                    originality_statement: teamData.fcec.originality_statement,
                    abstract_title: teamData.fcec.abstract_title,
                    abstract_file: teamData.fcec.abstract_file,
                    abstract_video_link: teamData.fcec.abstract_video_link,
                },
            ],
        };

        try {
            const token = Cookies.get("token");

            const response = await axios.post(
                `${process.env.NEXT_PUBLIC_BASE_URL}:5001/teams/fcec/new`,
                postData,
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
        <div className="relative px-[5%] lg:px-[13%] pt-4 pb-28 flex flex-col overflow-hidden sm:overflow-scroll  ">
            <div className="flex flex-col lg:justify-center items-center relative min-w-full mt-[4%]">
                <Image
                    src="/assets/sbc/bg_form_sbc.png"
                    alt="bgcia"
                    width={1000}
                    height={1000}
                    className="absolute sm:flex w-auto h-[105%]  z-0 pt-[6%] hidden"
                />
                <Image
                    src="/assets/sbc/bg_form_sbc_mobile.png"
                    alt="bgcia"
                    width={1000}
                    height={1000}
                    className="absolute sm:hidden w-full h-[105%] z-0 pt-[1%]"
                />

                <div className="lg:mt-[8%] mt-[8%] min-h-screen z-50 flex flex-col">
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
                        Formulir Pendaftaran FCEC
                    </div>
                    <Image
                        src="/fcecLogo.png"
                        alt="cic"
                        width={1000}
                        height={1000}
                        className="lg:h-28 lg:w-28 absolute lg:right-[10%] 2xl:right-[20%] 2xl:mt-6 md:mt-6   h-14 w-14 right-[6%] min-[530px]:right-[17%] sm:right-[20%] sm:mt-2 lg:flex"
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
                                        email: e.target.value,
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
                                    fcec: {
                                        ...prevState.fcec,
                                        abstract_title: e.target.value,
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
                            <p className="text-black text-[0.7rem] lg:text-[12px] ml-1">
                                File Abstrak{" "}
                                <span className="text-red-500">*</span>{" "}
                                <span
                                    style={{
                                        color: "gray",
                                    }}
                                >
                                    (Format Penamaan : Abstrak_Nama Tim)
                                </span>
                            </p>
                            <input
                                type="file"
                                className="text-xs md:text-sm text-ciaGreen xl:w-1/3"
                                accept="application/pdf, image/*"
                                onChange={onFileChange("fcec")}
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
                                    fcec: {
                                        ...prevState.fcec,
                                        abstract_video_link: e.target.value,
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
                            <p className="text-black text-[0.7rem]  lg:text-[12px] ml-1">
                                Surat Pernyataan Orisinalitas{" "}
                                <span className="text-red-500">*</span>{" "}
                                <span
                                    style={{
                                        color: "gray",
                                    }}
                                >
                                    (Format Penamaan : Orisinalitas_Nama Tim)
                                </span>
                            </p>
                            <input
                                type="file"
                                className="text-xs md:text-sm text-ciaGreen xl:w-1/3"
                                accept="application/pdf, image/*"
                                onChange={onFileChange("fcec")}
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
                                                <p className="text-black text-[0.7rem]  lg:text-[12px] ml-1">
                                                    {" "}
                                                    Kartu Identitas{" "}
                                                    <span className="text-red-500">
                                                        *
                                                    </span>{" "}
                                                    <span
                                                        style={{
                                                            color: "gray",
                                                        }}
                                                    >
                                                        (Format Penamaan :
                                                        Identitas_Nama Tim_Nama
                                                        Lengkap)
                                                    </span>
                                                </p>
                                                <input
                                                    type="file"
                                                    className="text-xs md:text-sm text-ciaGreen xl:w-1/3"
                                                    accept="application/pdf, image/*"
                                                    onChange={onFileChange(
                                                        "leader"
                                                    )}
                                                ></input>
                                            </div>
                                            <div className="flex flex-col gap-1 border-b-2 pb-2 border-[#18AB8E] ">
                                                <p className="text-black text-[0.7rem]  lg:text-[12px] ml-1">
                                                    {" "}
                                                    Surat Keterangan Siswa Aktif{" "}
                                                    <span className="text-red-500">
                                                        *
                                                    </span>{" "}
                                                    <span
                                                        style={{
                                                            color: "gray",
                                                        }}
                                                    >
                                                        (Format Penamaan :
                                                        SKSA_Nama Tim_Nama
                                                        Lengkap)
                                                    </span>
                                                </p>
                                                <input
                                                    type="file"
                                                    className="text-xs md:text-sm text-ciaGreen xl:w-1/3"
                                                    accept="application/pdf, image/*"
                                                    onChange={onFileChange(
                                                        "leader"
                                                    )}
                                                ></input>
                                            </div>
                                            <div className="flex flex-col gap-1 border-b-2 pb-2 border-[#18AB8E] ">
                                                <p className="text-black text-[0.7rem]  lg:text-[12px] ml-1">
                                                    {" "}
                                                    Pas Foto 3x4{" "}
                                                    <span className="text-red-500">
                                                        *
                                                    </span>{" "}
                                                    <span
                                                        style={{
                                                            color: "gray",
                                                        }}
                                                    >
                                                        (Format Penamaan : Pas
                                                        Foto_Nama Tim_Nama
                                                        Lengkap)
                                                    </span>
                                                </p>
                                                <input
                                                    type="file"
                                                    className="text-xs md:text-sm text-ciaGreen xl:w-1/3"
                                                    onChange={onFileChange(
                                                        "leader"
                                                    )}
                                                    accept="application/pdf, image/*"
                                                ></input>
                                            </div>
                                        </form>
                                    </Tab>

                                    <Tab
                                        key="anggota1"
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
                                                placeholder="Nama lengkap anggota 1"
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
                                                placeholder="Masukkan email anggota 1"
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
                                                placeholder="Masukkan nomor whatsapp anggota 1"
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
                                                placeholder="Masukkan ID Line anggota 1"
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
                                                placeholder="Masukkan link bukti upload twibbon anggota 1"
                                            />
                                            <div className="flex flex-col gap-1 border-b-2 pb-2 border-[#18AB8E] ">
                                                <p className="text-black text-[0.7rem]  lg:text-[12px] ml-1">
                                                    {" "}
                                                    Kartu Identitas{" "}
                                                    <span className="text-red-500">
                                                        *
                                                    </span>{" "}
                                                    <span
                                                        style={{
                                                            color: "gray",
                                                        }}
                                                    >
                                                        (Format Penamaan :
                                                        Identitas_Nama Tim_Nama
                                                        Lengkap)
                                                    </span>
                                                </p>
                                                <input
                                                    type="file"
                                                    className="text-xs md:text-sm text-ciaGreen xl:w-1/3"
                                                    accept="application/pdf, image/*"
                                                    onChange={onFileChange(
                                                        "member1"
                                                    )}
                                                ></input>
                                            </div>
                                            <div className="flex flex-col gap-1 border-b-2 pb-2 border-[#18AB8E] ">
                                                <p className="text-black text-[0.7rem]  lg:text-[12px] ml-1">
                                                    {" "}
                                                    Surat Keterangan Siswa Aktif{" "}
                                                    <span className="text-red-500">
                                                        *
                                                    </span>{" "}
                                                    <span
                                                        style={{
                                                            color: "gray",
                                                        }}
                                                    >
                                                        (Format Penamaan :
                                                        SKSA_Nama Tim_Nama
                                                        Lengkap)
                                                    </span>
                                                </p>
                                                <input
                                                    type="file"
                                                    className="text-xs md:text-sm text-ciaGreen xl:w-1/3"
                                                    accept="application/pdf, image/*"
                                                    onChange={onFileChange(
                                                        "member1"
                                                    )}
                                                ></input>
                                            </div>
                                            <div className="flex flex-col gap-1 border-b-2 pb-2 border-[#18AB8E] ">
                                                <p className="text-black text-[0.7rem]  lg:text-[12px] ml-1">
                                                    {" "}
                                                    Pas Foto 3x4{" "}
                                                    <span className="text-red-500">
                                                        *
                                                    </span>{" "}
                                                    <span
                                                        style={{
                                                            color: "gray",
                                                        }}
                                                    >
                                                        (Format Penamaan : Pas
                                                        Foto_Nama Tim_Nama
                                                        Lengkap)
                                                    </span>
                                                </p>
                                                <input
                                                    type="file"
                                                    className="text-xs md:text-sm text-ciaGreen xl:w-1/3"
                                                    onChange={onFileChange(
                                                        "member1"
                                                    )}
                                                    accept="application/pdf, image/*"
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
                                                placeholder="Nama lengkap anggota 2"
                                            />

                                            <Input
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
                                                placeholder="Masukkan email anggota 2"
                                            />
                                            <Input
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
                                                placeholder="Masukkan nomor whatsapp anggota 2"
                                            />
                                            <Input
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
                                                placeholder="Masukkan ID Line anggota 2"
                                            />
                                            <Input
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
                                                placeholder="Masukkan link bukti upload twibbon anggota 2"
                                            />
                                            <div className="flex flex-col gap-1 border-b-2 pb-2 border-[#18AB8E] ">
                                                <p className="text-black text-[0.7rem]  lg:text-[12px] ml-1">
                                                    {" "}
                                                    Kartu Identitas{" "}
                                                    <span
                                                        style={{
                                                            color: "gray",
                                                        }}
                                                    >
                                                        (Format Penamaan :
                                                        Identitas_Nama Tim_Nama
                                                        Lengkap)
                                                    </span>
                                                </p>
                                                <input
                                                    type="file"
                                                    className="text-xs md:text-sm text-ciaGreen xl:w-1/3"
                                                    accept="application/pdf, image/*"
                                                    onChange={onFileChange(
                                                        "member2"
                                                    )}
                                                ></input>
                                            </div>
                                            <div className="flex flex-col gap-1 border-b-2 pb-2 border-[#18AB8E] ">
                                                <p className="text-black text-[0.7rem]  lg:text-[12px] ml-1">
                                                    {" "}
                                                    Surat Keterangan Siswa Aktif{" "}
                                                    <span
                                                        style={{
                                                            color: "gray",
                                                        }}
                                                    >
                                                        (Format Penamaan :
                                                        SKSA_Nama Tim_Nama
                                                        Lengkap)
                                                    </span>
                                                </p>
                                                <input
                                                    type="file"
                                                    className="text-xs md:text-sm text-ciaGreen xl:w-1/3"
                                                    accept="application/pdf, image/*"
                                                    onChange={onFileChange(
                                                        "member2"
                                                    )}
                                                ></input>
                                            </div>
                                            <div className="flex flex-col gap-1 border-b-2 pb-2 border-[#18AB8E] ">
                                                <p className="text-black text-[0.7rem]  lg:text-[12px] ml-1">
                                                    {" "}
                                                    Pas Foto 3x4{" "}
                                                    <span
                                                        style={{
                                                            color: "gray",
                                                        }}
                                                    >
                                                        (Format Penamaan : Pas
                                                        Foto_Nama Tim_Nama
                                                        Lengkap)
                                                    </span>
                                                </p>
                                                <input
                                                    type="file"
                                                    className="text-xs md:text-sm text-ciaGreen xl:w-1/3"
                                                    onChange={onFileChange(
                                                        "member2"
                                                    )}
                                                    accept="application/pdf, image/*"
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
