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
    const [selectedFile, setSelectedFile] = useState<File | null>(null);

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
            user_id: Number(userIdFromLocalStorage),
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
            department: "",
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
            department: "",
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
            department: "",
        },
        member3: {
            full_name: "",
            phone_number: "",
            line_id: "",
            email: "",
            ktm: "",
            active_student_letter: "",
            photo: "",
            twibbon_and_poster_link: "",
            semester: "",
            department: "",
        },
    });

    interface Member {
        full_name: string;
        phone_number: string;
        line_id: string;
        email: string;
        ktm: string;
        active_student_letter: string;
        photo: string;
        twibbon_and_poster_link: string;
        semester: string;
        department: string;
    }

    interface TeamData {
        team: {
            team_name: string;
            institution_name: string;
            payment_proof: string;
            user_id: number;
            email: string;
        };
        leader: Member;
        member1: Member;
        member2: Member;
        member3: Member;
    }

    const validateData = (data: TeamData) => {
        for (let key in data) {
            if (
                key === "team" ||
                key === "leader" ||
                key === "member1" ||
                key === "member2"
            ) {
                const memberData = data[key] as Member;
                for (let subKey in memberData) {
                    if (memberData[subKey as keyof Member] === "") {
                        return false;
                    }
                }
            }
        }
        return true;
    };

    const [file, setFile] = useState<File>();

    const onSubmit = async (file: File) => {
        if (!file) return { success: false };

        try {
            const data = new FormData();
            data.set("file", file);

            const res = await fetch("/api/upload/cic", {
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
                setSelectedFile(file);
            }
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
                    !/^SKMA_.*_.*$|^ID_.*_.*$|^Pas Foto_.*_.*$|^Bukti Pembayaran_.*$|^Bukti Voucher_.*$|^SKSA_.*$|^Orisinalitas_.*$|^Abstrak_.*$|^KTM.*_.*$/.test(
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
    const LeaderKtm = teamData.leader.ktm.split("/uploads/cic/");
    const LeaderSPSA =
        teamData.leader.active_student_letter.split("/uploads/cic/");
    const LeaderFoto = teamData.leader.photo.split("/uploads/cic/");
    const Member1Ktm = teamData.member1.ktm.split("/uploads/cic/");
    const Member1SPSA =
        teamData.member1.active_student_letter.split("/uploads/cic/");
    const Member1Foto = teamData.member1.photo.split("/uploads/cic/");
    const Member2Ktm = teamData.member2.ktm.split("/uploads/cic/");
    const Member2SPSA =
        teamData.member2.active_student_letter.split("/uploads/cic/");
    const Member2Foto = teamData.member2.photo.split("/uploads/cic/");
    const Member3Ktm = teamData.member2.ktm.split("/uploads/cic/");
    const Member3SPSA =
        teamData.member2.active_student_letter.split("/uploads/cic/");
    const Member3Foto = teamData.member2.photo.split("/uploads/cic/");

    const backgroundHeading = {
        backgroundImage: `url(/cicBgHeading.png)`,
        backgroundSize: "cover",
    };

    const backgroundImage = {
        backgroundImage: `url(/assets/sbc/bg_form_sbc.png)`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
    };

    const handleRegister = async (event: FormEvent) => {
        event.preventDefault();

        if (!validateData(teamData)) {
            toast.error("Data belum lengkap");
            return;
        }

        const members = [
            {
                ...teamData.member1,
                semester: Number(teamData.member1.semester),
                is_leader: 0,
                batch: null,
            },
            {
                ...teamData.member2,
                semester: Number(teamData.member2.semester),
                is_leader: 0,
                batch: null,
            },
        ];

        // Check if all properties in teamData.member3 are filled
        if (Object.values(teamData.member3).every((value) => value)) {
            members.push({
                ...teamData.member3,
                semester: Number(teamData.member3.semester),
                is_leader: 0,
                batch: null,
            });
        }

        const data = {
            team: teamData.team,
            leader: {
                ...teamData.leader,
                semester: Number(teamData.leader.semester),
                is_leader: 1,
                batch: null,
            },
            members,
        };

        try {
            const token = Cookies.get("token");

            const response = await axios.post(
                `${process.env.NEXT_PUBLIC_BASE_URL}/teams/cic/new`,
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
        <div className="relative px-[5%] lg:px-[13%] pt-4 pb-28 flex flex-col overflow-hidden sm:overflow-scroll  ">
            <div className="flex flex-col lg:justify-center items-center relative min-w-full mt-[4%]">
                <Image
                    src="/assets/sbc/bg_form_sbc.png"
                    alt="bgcia"
                    width={1000}
                    height={1000}
                    className="absolute sm:flex w-auto sm:h-[105%] lg:h-[105%]  z-0 pt-[6%] hidden"
                />
                <Image
                    src="/assets/sbc/bg_form_sbc_mobile.png"
                    alt="bgcia"
                    width={1000}
                    height={1000}
                    className="absolute sm:hidden w-full max-[385px]:h-[105%] h-[105%] z-0 pt-[1%]"
                />

                <div className="lg:mt-[8%] mt-[8%] min-[530px]:mt-6 sm:mt-12 md:mt-14 2xl:mt-[12%] min-h-screen z-50 flex flex-col">
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
                        Formulir Pendaftaran CIC
                    </div>
                    <Image
                        src="/cicLogo.png"
                        alt="cic"
                        width={1000}
                        height={1000}
                        className="lg:h-28 lg:w-28 absolute lg:right-[10%] 2xl:right-[20%] 2xl:mt-6 md:mt-6   h-14 w-14 right-[6%] min-[530px]:right-[17%] sm:right-[20%] sm:mt-2 lg:flex"
                        style={{ transform: `rotate(${rotation}deg)` }}
                    />

                    <div className="font-LibreBaskerville text-cia-green lg:mx-[15%] mt-[3%] lg:mb-[1%] lg:text-lg text-xs min-w-screen mx-[17%]">
                        <ol className="list-decimal pl-2">
                            <li className="mb-1">
                                Peserta diharapkan mengisi formulir pendaftaran
                                dengan teliti.
                            </li>
                            <li className="mb-1">
                                Peserta mengunggah dokumen sesuai dengan
                                ketentuan berikut. <br /> a. Scan Kartu Tanda
                                Mahasiswa (PDF) Format penamaan file: KTM_Nama
                                Tim_Nama Peserta Contoh: KTM_Komet Minor_Soke
                                Bahtera <br /> b. Scan surat keterangan
                                mahasiswa aktif (PDF) Format penamaan file:
                                SKMA_Nama Tim_Nama Peserta Contoh: SKMA_Komet
                                Minor_Soke Bahtera
                                <br /> c. Pas foto 3x4 (PDF) Format penamaan
                                file: Pas Foto_Nama Tim Contoh: Pas Foto_Komet
                                Minor <br /> d. Scan bukti pembayaran (PDF)
                                Format penamaan file: Bukti Pembayaran_Nama Tim
                                Contoh: Bukti Pembayaran_Komet Minor
                            </li>
                            <li className="mb-1">
                                Surat Keterangan Mahasiswa Aktif (SKMA) dapat
                                digantikan dengan data lain yang membuktikan
                                peserta sebagai mahasiswa aktif. (Contoh : KRS,
                                transkrip, atau bukti registrasi semester
                                terbaru)
                            </li>
                            <li className="mb-1">
                                Biaya pendaftaran yang harus dibayarkan sejumlah
                                Rp 300.223,00/tim melalui rekening 1800013302668
                                (Mandiri) a.n. Balqis Sybil Buanawati.
                            </li>
                            <li className="mb-1">
                                Apabila terjadi kendala dan kesalahan pada saat
                                mengisi gform, segera hubungi CP : 081298215556
                                (Nafta), atau 087734852924 (Bagas)
                            </li>
                            <li className="mb-1">
                                Email balasan akan dikirimkan ke email team
                                leader.
                            </li>
                            <li className="mb-1">
                                Apabila tim hanya terdiri dari 3 anggota
                                (termasuk ketua tim), maka anggota 3 dapat
                                dikosongkan
                            </li>
                        </ol>
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
                                accept="application/pdf"
                                required
                                onChange={onFileChange("team")}
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
                                                label={
                                                    <>
                                                        Jurusan
                                                        <span
                                                            style={{
                                                                color: "gray",
                                                            }}
                                                        >
                                                            {" "}
                                                            (Ketua Wajib berasal
                                                            dari teknik sipil)
                                                        </span>
                                                    </>
                                                }
                                                variant="underlined"
                                                color="primary"
                                                value={
                                                    teamData.leader.department
                                                }
                                                onChange={(e) =>
                                                    setTeamData(
                                                        (prevState) => ({
                                                            ...prevState,
                                                            leader: {
                                                                ...prevState.leader,
                                                                department:
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
                                                placeholder="Masukkan jurusan ketua tim"
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
                                            <div className="flex flex-col gap-1 border-b-2 pb-2 border-[#18AB8E] ">
                                                <p className="text-black text-[0.7rem] lg:text-[12px] ml-1">
                                                    {" "}
                                                    Link Upload Twibbon{" "}
                                                    <span
                                                        style={{
                                                            color: "red",
                                                        }}
                                                    >
                                                        *
                                                    </span>{" "}
                                                    <span
                                                        style={{
                                                            color: "gray",
                                                        }}
                                                    >
                                                        (Peserta harap tidak
                                                        menggunakan private
                                                        account)
                                                    </span>
                                                </p>
                                                <input
                                                    type="text"
                                                    className="text-xs md:text-sm text-ciaGreen placeholder-cia-green-placeholder"
                                                    accept="application/pdf"
                                                    required
                                                    placeholder="Masukkan link bukti upload twibbon ketua tim"
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
                                                ></input>
                                            </div>
                                            <div className="flex flex-col gap-1 border-b-2 pb-2 border-[#18AB8E] ">
                                                <p className="text-black text-[0.7rem] lg:text-[12px] ml-1">
                                                    {" "}
                                                    Surat Keterangan Mahasiswa
                                                    Aktif{" "}
                                                    <span
                                                        style={{
                                                            color: "red",
                                                        }}
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
                                                        Lengkap)
                                                    </span>
                                                </p>
                                                <input
                                                    type="file"
                                                    className="text-xs md:text-sm text-white xl:w-1/3"
                                                    accept="application/pdf"
                                                    required
                                                    onChange={onFileChange(
                                                        "leader"
                                                    )}
                                                ></input>
                                                {selectedFile && (
                                                    <p className="text-xs md:text-sm text-ciaGreen">
                                                        Selected file:{" "}
                                                        {LeaderSPSA}
                                                    </p>
                                                )}
                                            </div>
                                            <div className="flex flex-col gap-1 border-b-2 pb-2 border-[#18AB8E]">
                                                <p className="text-black text-[0.7rem]  lg:text-[12px] ml-1">
                                                    {" "}
                                                    Kartu Tanda Mahasiswa{" "}
                                                    <span
                                                        style={{
                                                            color: "red",
                                                        }}
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
                                                    className="text-xs md:text-sm text-white xl:w-1/3"
                                                    accept="application/pdf"
                                                    required
                                                    onChange={onFileChange(
                                                        "leader"
                                                    )}
                                                ></input>
                                                {selectedFile && (
                                                    <p className="text-xs md:text-sm text-ciaGreen">
                                                        Selected file:{" "}
                                                        {LeaderKtm}
                                                    </p>
                                                )}
                                            </div>
                                            <div className="flex flex-col gap-1 border-b-2 pb-2 border-[#18AB8E]">
                                                <p className="text-black text-[0.7rem]  lg:text-[12px] ml-1">
                                                    {" "}
                                                    Pas Foto 3x4{" "}
                                                    <span
                                                        style={{
                                                            color: "red",
                                                        }}
                                                    >
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
                                                    className="text-xs md:text-sm text-white  xl:w-1/3"
                                                    accept="application/pdf"
                                                    required
                                                    onChange={onFileChange(
                                                        "leader"
                                                    )}
                                                ></input>
                                                {selectedFile && (
                                                    <p className="text-xs md:text-sm text-ciaGreen">
                                                        Selected file:{" "}
                                                        {LeaderFoto}
                                                    </p>
                                                )}
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
                                                label="Jurusan"
                                                variant="underlined"
                                                color="primary"
                                                value={
                                                    teamData.member1.department
                                                }
                                                onChange={(e) => {
                                                    setTeamData(
                                                        (prevState) => ({
                                                            ...prevState,
                                                            member1: {
                                                                ...prevState.member1,
                                                                department:
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
                                                placeholder="Masukkan jurusan anggota 1"
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
                                                placeholder="Masukkan semester anggota 1"
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
                                            <div className="flex flex-col gap-1 border-b-2 pb-2 border-[#18AB8E] ">
                                                <p className="text-black text-[0.7rem] lg:text-[12px] ml-1">
                                                    {" "}
                                                    Link Upload Twibbon{" "}
                                                    <span
                                                        style={{
                                                            color: "red",
                                                        }}
                                                    >
                                                        *
                                                    </span>{" "}
                                                    <span
                                                        style={{
                                                            color: "gray",
                                                        }}
                                                    >
                                                        (Peserta harap tidak
                                                        menggunakan private
                                                        account)
                                                    </span>
                                                </p>
                                                <input
                                                    type="text"
                                                    className="text-xs md:text-sm text-ciaGreen placeholder-cia-green-placeholder"
                                                    accept="application/pdf"
                                                    required
                                                    placeholder="Masukkan link bukti upload twibbon "
                                                    value={
                                                        teamData.member1
                                                            .twibbon_and_poster_link
                                                    }
                                                    onChange={(e) =>
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
                                                        )
                                                    }
                                                ></input>
                                            </div>
                                            <div className="flex flex-col gap-1 border-b-2 pb-2 border-[#18AB8E] ">
                                                <p className="text-black text-[0.7rem] lg:text-[12px] ml-1">
                                                    {" "}
                                                    Surat Keterangan Mahasiswa
                                                    Aktif{" "}
                                                    <span
                                                        style={{
                                                            color: "red",
                                                        }}
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
                                                        Lengkap)
                                                    </span>
                                                </p>
                                                <input
                                                    type="file"
                                                    className="text-xs md:text-sm text-white xl:w-1/3"
                                                    required
                                                    accept="application/pdf"
                                                    onChange={onFileChange(
                                                        "member1"
                                                    )}
                                                ></input>
                                                {selectedFile && (
                                                    <p className="text-xs md:text-sm text-ciaGreen">
                                                        Selected file:{" "}
                                                        {Member1SPSA}
                                                    </p>
                                                )}
                                            </div>
                                            <div className="flex flex-col gap-1 border-b-2 pb-2 border-[#18AB8E]">
                                                <p className="text-black text-[0.7rem]  lg:text-[12px] ml-1">
                                                    {" "}
                                                    Kartu Tanda Mahasiswa{" "}
                                                    <span
                                                        style={{
                                                            color: "red",
                                                        }}
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
                                                    required
                                                    accept="application/pdf"
                                                    onChange={onFileChange(
                                                        "member1"
                                                    )}
                                                    className="text-xs md:text-sm text-white xl:w-1/3"
                                                ></input>
                                                {selectedFile && (
                                                    <p className="text-xs md:text-sm text-ciaGreen">
                                                        Selected file:{" "}
                                                        {Member1Ktm}
                                                    </p>
                                                )}
                                            </div>
                                            <div className="flex flex-col gap-1 border-b-2 pb-2 border-[#18AB8E]">
                                                <p className="text-black text-[0.7rem]  lg:text-[12px] ml-1">
                                                    {" "}
                                                    Pas Foto 3x4{" "}
                                                    <span
                                                        style={{
                                                            color: "red",
                                                        }}
                                                    >
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
                                                    className="text-xs md:text-sm text-white  xl:w-1/3"
                                                    required
                                                    accept="application/pdf"
                                                    onChange={onFileChange(
                                                        "member1"
                                                    )}
                                                ></input>
                                                {selectedFile && (
                                                    <p className="text-xs md:text-sm text-ciaGreen">
                                                        Selected file:{" "}
                                                        {Member1Foto}
                                                    </p>
                                                )}
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
                                                isRequired
                                                label="Jurusan"
                                                variant="underlined"
                                                color="primary"
                                                value={
                                                    teamData.member2.department
                                                }
                                                onChange={(e) => {
                                                    setTeamData(
                                                        (prevState) => ({
                                                            ...prevState,
                                                            member2: {
                                                                ...prevState.member2,
                                                                department:
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
                                                placeholder="Masukkan jurusan anggota 2"
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
                                                placeholder="Masukkan semester anggota 2"
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
                                                placeholder="Masukkan email anggota 2"
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
                                                placeholder="Masukkan nomor whatsapp anggota 2"
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
                                                placeholder="Masukkan ID Line anggota 2"
                                            />
                                            <div className="flex flex-col gap-1 border-b-2 pb-2 border-[#18AB8E] ">
                                                <p className="text-black text-[0.7rem] lg:text-[12px] ml-1">
                                                    {" "}
                                                    Link Upload Twibbon{" "}
                                                    <span
                                                        style={{
                                                            color: "red",
                                                        }}
                                                    >
                                                        *
                                                    </span>{" "}
                                                    <span
                                                        style={{
                                                            color: "gray",
                                                        }}
                                                    >
                                                        (Peserta harap tidak
                                                        menggunakan private
                                                        account)
                                                    </span>
                                                </p>
                                                <input
                                                    type="text"
                                                    className="text-xs md:text-sm text-ciaGreen placeholder-cia-green-placeholder"
                                                    accept="application/pdf"
                                                    required
                                                    placeholder="Masukkan link bukti upload twibbon "
                                                    value={
                                                        teamData.member2
                                                            .twibbon_and_poster_link
                                                    }
                                                    onChange={(e) =>
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
                                                        )
                                                    }
                                                ></input>
                                            </div>
                                            <div className="flex flex-col gap-1 border-b-2 pb-2 border-[#18AB8E] ">
                                                <p className="text-black text-[0.7rem] lg:text-[12px] ml-1">
                                                    {" "}
                                                    Surat Keterangan Mahasiswa
                                                    Aktif{" "}
                                                    <span
                                                        style={{
                                                            color: "red",
                                                        }}
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
                                                        Lengkap)
                                                    </span>
                                                </p>
                                                <input
                                                    type="file"
                                                    className="text-xs md:text-sm text-white xl:w-1/3"
                                                    required
                                                    accept="application/pdf"
                                                    onChange={onFileChange(
                                                        "member2"
                                                    )}
                                                ></input>
                                                {selectedFile && (
                                                    <p className="text-xs md:text-sm text-ciaGreen">
                                                        Selected file:{" "}
                                                        {Member2SPSA}
                                                    </p>
                                                )}
                                            </div>
                                            <div className="flex flex-col gap-1 border-b-2 pb-2 border-[#18AB8E]">
                                                <p className="text-black text-[0.7rem]  lg:text-[12px] ml-1">
                                                    {" "}
                                                    Kartu Tanda Mahasiswa{" "}
                                                    <span
                                                        style={{
                                                            color: "red",
                                                        }}
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
                                                    className="text-xs md:text-sm text-white xl:w-1/3"
                                                    required
                                                    accept="application/pdf"
                                                    onChange={onFileChange(
                                                        "member2"
                                                    )}
                                                ></input>
                                                {selectedFile && (
                                                    <p className="text-xs md:text-sm text-ciaGreen">
                                                        Selected file:{" "}
                                                        {Member2Ktm}
                                                    </p>
                                                )}
                                            </div>
                                            <div className="flex flex-col gap-1 border-b-2 pb-2 border-[#18AB8E]">
                                                <p className="text-black text-[0.7rem]  lg:text-[12px] ml-1">
                                                    {" "}
                                                    Pas Foto 3x4{" "}
                                                    <span
                                                        style={{
                                                            color: "red",
                                                        }}
                                                    >
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
                                                    className="text-xs md:text-sm text-white  xl:w-1/3"
                                                    required
                                                    accept="application/pdf"
                                                    onChange={onFileChange(
                                                        "member2"
                                                    )}
                                                ></input>
                                                {selectedFile && (
                                                    <p className="text-xs md:text-sm text-ciaGreen">
                                                        Selected file:{" "}
                                                        {Member2Foto}
                                                    </p>
                                                )}
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
                                                label="Nama Lengkap"
                                                variant="underlined"
                                                color="primary"
                                                value={
                                                    teamData.member3.full_name
                                                }
                                                onChange={(e) => {
                                                    setTeamData(
                                                        (prevState) => ({
                                                            ...prevState,
                                                            member3: {
                                                                ...prevState.member3,
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
                                                label="Jurusan"
                                                variant="underlined"
                                                color="primary"
                                                value={
                                                    teamData.member3.department
                                                }
                                                onChange={(e) => {
                                                    setTeamData(
                                                        (prevState) => ({
                                                            ...prevState,
                                                            member3: {
                                                                ...prevState.member3,
                                                                department:
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
                                                placeholder="Masukkan jurusan anggota 3"
                                            />
                                            <Input
                                                label="Semester"
                                                variant="underlined"
                                                color="primary"
                                                value={
                                                    teamData.member3.semester
                                                }
                                                onChange={(e) => {
                                                    setTeamData(
                                                        (prevState) => ({
                                                            ...prevState,
                                                            member3: {
                                                                ...prevState.member3,
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
                                                label="Email"
                                                variant="underlined"
                                                color="primary"
                                                value={teamData.member3.email}
                                                onChange={(e) => {
                                                    setTeamData(
                                                        (prevState) => ({
                                                            ...prevState,
                                                            member3: {
                                                                ...prevState.member3,
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
                                                label="Nomor Whatsapp"
                                                variant="underlined"
                                                color="primary"
                                                value={
                                                    teamData.member3
                                                        .phone_number
                                                }
                                                onChange={(e) => {
                                                    setTeamData(
                                                        (prevState) => ({
                                                            ...prevState,
                                                            member3: {
                                                                ...prevState.member3,
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
                                                label="ID Line"
                                                variant="underlined"
                                                color="primary"
                                                value={teamData.member3.line_id}
                                                onChange={(e) => {
                                                    setTeamData(
                                                        (prevState) => ({
                                                            ...prevState,
                                                            member3: {
                                                                ...prevState.member3,
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
                                            <div className="flex flex-col gap-1 border-b-2 pb-2 border-[#18AB8E] ">
                                                <p className="text-black text-[0.7rem] lg:text-[12px] ml-1">
                                                    {" "}
                                                    Link Upload Twibbon{" "}
                                                    <span
                                                        style={{
                                                            color: "gray",
                                                        }}
                                                    >
                                                        (Peserta harap tidak
                                                        menggunakan private
                                                        account)
                                                    </span>
                                                </p>
                                                <input
                                                    type="text"
                                                    className="text-xs md:text-sm text-ciaGreen placeholder-cia-green-placeholder"
                                                    accept="application/pdf"
                                                    required
                                                    placeholder="Masukkan link bukti upload twibbon"
                                                    value={
                                                        teamData.member3
                                                            .twibbon_and_poster_link
                                                    }
                                                    onChange={(e) =>
                                                        setTeamData(
                                                            (prevState) => ({
                                                                ...prevState,
                                                                member3: {
                                                                    ...prevState.member3,
                                                                    twibbon_and_poster_link:
                                                                        e.target
                                                                            .value,
                                                                },
                                                            })
                                                        )
                                                    }
                                                ></input>
                                            </div>
                                            <div className="flex flex-col gap-1 border-b-2 pb-2 border-[#18AB8E] ">
                                                <p className="text-black text-[0.7rem] lg:text-[12px] ml-1">
                                                    {" "}
                                                    Surat Keterangan Mahasiswa
                                                    Aktif{" "}
                                                    <span
                                                        style={{
                                                            color: "gray",
                                                        }}
                                                    >
                                                        (Format Penamaan :
                                                        SKMA_Nama Tim_Nama
                                                        Lengkap)
                                                    </span>
                                                </p>
                                                <input
                                                    type="file"
                                                    className="text-xs md:text-sm text-white xl:w-1/3"
                                                    required
                                                    accept="application/pdf"
                                                    onChange={onFileChange(
                                                        "member3"
                                                    )}
                                                ></input>
                                                {selectedFile && (
                                                    <p className="text-xs md:text-sm text-ciaGreen">
                                                        Selected file:{" "}
                                                        {Member3SPSA}
                                                    </p>
                                                )}
                                            </div>
                                            <div className="flex flex-col gap-1 border-b-2 pb-2 border-[#18AB8E]">
                                                <p className="text-black text-[0.7rem]  lg:text-[12px] ml-1">
                                                    {" "}
                                                    Kartu Tanda Mahasiswa{" "}
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
                                                    className="text-xs md:text-sm text-white xl:w-1/3"
                                                    required
                                                    accept="application/pdf"
                                                    onChange={onFileChange(
                                                        "member3"
                                                    )}
                                                ></input>
                                                {selectedFile && (
                                                    <p className="text-xs md:text-sm text-ciaGreen">
                                                        Selected file:{" "}
                                                        {Member3Ktm}
                                                    </p>
                                                )}
                                            </div>
                                            <div className="flex flex-col gap-1 border-b-2 pb-2 border-[#18AB8E]">
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
                                                    className="text-xs md:text-sm text-white  xl:w-1/3"
                                                    required
                                                    accept="application/pdf"
                                                    onChange={onFileChange(
                                                        "member3"
                                                    )}
                                                ></input>
                                                {selectedFile && (
                                                    <p className="text-xs md:text-sm text-ciaGreen">
                                                        Selected file:{" "}
                                                        {Member3Foto}
                                                    </p>
                                                )}
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
