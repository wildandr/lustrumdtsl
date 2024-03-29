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
                    <div className="font-LibreBaskerville text-cia-green lg:mx-[15%] mt-[3%] lg:mb-[1%] lg:text-lg text-xs min-w-screen mx-[17%]">
                        <ol className="list-decimal pl-2">
                            <li className="mb-1">
                                Link Guidebook :
                                https://bit.ly/GuidebookPendaftaranCRAFT
                            </li>
                            <li className="mb-1">
                                Peserta membaca Guidebook Pendaftaran CRAFT
                            </li>
                            <li className="mb-1">
                                Peserta mengisi formulir dengan sebenarnya
                            </li>
                            <li className="mb-1">
                                Peserta mencantumkan email aktif untuk
                                mendapatkan email balasan nantinya
                            </li>
                            <li className="mb-1">
                                Peserta wajib share story feeds pendaftaran
                                CRAFT melewati link{" "}
                                <a
                                    href="https://bit.ly/FeedsInstagramPendaftaranCRAFT"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {""}
                                    https://bit.ly/FeedsInstagramPendaftaranCRAFT
                                </a>{" "}
                                di akun instagram pribadi peserta, serta tag
                                akun instagram @pktsl_ugm dan @civilinaction
                            </li>
                            <li className="mb-1">
                                Peserta wajib mem-follow akun instagram
                                @pktsl_ugm dan @civilinaction
                            </li>
                            <li className="mb-1">
                                Peserta dapat memilih 2 opsi kehadiran
                                (offline/online)
                            </li>
                            <li className="mb-1">
                                Peserta menyerahkan bukti tangkapan layar share
                                story feeds pendaftaran CRAFT serta follow akun
                                instagram @pktsl_ugm dan @civilinaction (PDF).
                                <br />
                                Format penamaan file : <br />
                                Bukti story CRAFT_Nama Peserta Contoh : Bukti
                                Story CRAFT_Dimas Apta <br />
                                Bukti follow CIA_Nama Peserta Contoh : Bukti
                                Follow CIA_Dimas Apta
                                <br /> Bukti follow PKTSL_Nama Peserta Contoh :
                                Bukti Follow PKTSL_Dimas Apta
                            </li>
                            <li className="mb-1">
                                Peserta menyerahkan bukti pembayaran pada
                                formulir (PDF).
                                <br /> Format penamaan file : Bukti
                                Pembayaran_Nama Peserta <br /> Contoh : Bukti
                                Pembayaran_Dimas Apta <br /> Biaya pendaftaran
                                yang harus dibayarkan sejumlah berikut : <br />{" "}
                                Tiket Early Bird (18-24 Maret 2024) <br /> Umum
                                offline : Rp 40.000 <br /> Umum online : Rp
                                30.000 <br />
                                Mahasiswa DTSL FT UGM (Coming Soon)
                                <br />
                                <br />
                                Pembayaran ditambah dengan kode unik (+Rp 233)
                                <br />
                                Contoh : Rp 40.233,00 <br />
                                Pembayaran dilakukan melalui rekening
                                1800013302668 (Mandiri) a.n Balqis Sybil
                                Buanawati
                            </li>
                            <li className="mb-1">
                                Apabila terdapat kendala dan kesalahan dalam
                                mengisi google form dapat menghubungi Contact
                                Person: <br />
                                Apta : 081329845585 <br />
                                Maul : 085157861966
                            </li>
                            <li className="mb-1">
                                Konfirmasi registrasi berhasil akan dikirimkan
                                melalui email balasan.
                            </li>
                        </ol>
                    </div>

                    <div className="flex flex-col w-full mt-[3%]">
                        <div className="max-w-full w-auto h-auto lg:mx-[15%] mx-[17%]">
                            <div className="overflow-hidden">
                                <form className="w-full flex flex-col gap-4 font-sans">
                                    <div>
                                        <RadioGroup
                                            classNames={{
                                                base: "gap-2 text-black text-xs lg:text-sm  mb-5",
                                                label: "text-xs lg:text-sm text-black",
                                            }}
                                            size="sm"
                                            label="Pilihan Kegiatan"
                                            orientation="horizontal"
                                            value={craftData.activity_choice}
                                            isRequired
                                            onChange={(e) =>
                                                setCraftData({
                                                    ...craftData,
                                                    activity_choice:
                                                        e.target.value,
                                                })
                                            }
                                        >
                                            <Radio
                                                value="online"
                                                className="text-xs"
                                            >
                                                {" "}
                                                Online{" "}
                                            </Radio>
                                            <Radio
                                                value="offline"
                                                className="text-xs"
                                            >
                                                {" "}
                                                Offline{" "}
                                            </Radio>
                                        </RadioGroup>
                                        <RadioGroup
                                            classNames={{
                                                base: "gap-2 text-black text-xs lg:text-sm  mb-5",
                                                label: "text-xs lg:text-sm text-black",
                                            }}
                                            size="sm"
                                            label="Apakah Mahasiswa DTSL FT UGM"
                                            orientation="horizontal"
                                            value={craftData.isMahasiswaDTSL.toString()}
                                            isRequired
                                            onChange={(e) =>
                                                setCraftData({
                                                    ...craftData,
                                                    isMahasiswaDTSL:
                                                        e.target.value ===
                                                        "true",
                                                })
                                            }
                                        >
                                            <Radio
                                                value="true"
                                                className="text-xs"
                                            >
                                                {" "}
                                                Ya{" "}
                                            </Radio>
                                            <Radio
                                                value="false"
                                                className="text-xs"
                                            >
                                                {" "}
                                                Tidak{" "}
                                            </Radio>
                                        </RadioGroup>
                                        <Input
                                            isRequired
                                            label={`Nama Lengkap Peserta `}
                                            variant="underlined"
                                            color="primary"
                                            value={craftData.full_name}
                                            onChange={(e) =>
                                                setCraftData({
                                                    ...craftData,
                                                    full_name: e.target.value,
                                                })
                                            }
                                            classNames={{
                                                label: "text-black/50 dark:text-white/90 md:text-sm text-xs",
                                                input: [
                                                    "text-cia-green dark:text-white/90 md:text-sm text-xs",
                                                    "placeholder:text-cia-green-placeholder dark:placeholder:text-white/60 md:text-sm text-xs",
                                                ],
                                                inputWrapper: [
                                                    "shadow-none",
                                                    "focus:shadow-none",
                                                    "border-b-2 border-cia-green-border",
                                                    "dark:group-data-[focused=true]:bg-default/60",
                                                    "!cursor-text",
                                                ],
                                            }}
                                            placeholder={`Nama lengkap peserta`}
                                        />
                                        <Input
                                            isRequired
                                            label={`Email `}
                                            variant="underlined"
                                            color="primary"
                                            value={craftData.email}
                                            onChange={(e) =>
                                                setCraftData({
                                                    ...craftData,
                                                    email: e.target.value,
                                                })
                                            }
                                            classNames={{
                                                label: "text-black/50 dark:text-white/90 md:text-sm text-xs",
                                                input: [
                                                    "text-cia-green dark:text-white/90 md:text-sm text-xs",
                                                    "placeholder:text-cia-green-placeholder dark:placeholder:text-white/60 md:text-sm text-xs",
                                                ],
                                                inputWrapper: [
                                                    "shadow-none",
                                                    "focus:shadow-none",
                                                    "border-b-2 border-cia-green-border",
                                                    "dark:group-data-[focused=true]:bg-default/60",
                                                    "!cursor-text",
                                                ],
                                            }}
                                            placeholder={`Alamat email anda`}
                                        />
                                        <Input
                                            isRequired
                                            label={`Asal Instansi `}
                                            variant="underlined"
                                            color="primary"
                                            value={craftData.institution_name}
                                            onChange={(e) =>
                                                setCraftData({
                                                    ...craftData,
                                                    institution_name:
                                                        e.target.value,
                                                })
                                            }
                                            classNames={{
                                                label: "text-black/50 dark:text-white/90 md:text-sm text-xs",
                                                input: [
                                                    "text-cia-green dark:text-white/90 md:text-sm text-xs",
                                                    "placeholder:text-cia-green-placeholder dark:placeholder:text-white/60 md:text-sm text-xs",
                                                ],
                                                inputWrapper: [
                                                    "shadow-none",
                                                    "focus:shadow-none",
                                                    "border-b-2 border-cia-green-border",
                                                    "dark:group-data-[focused=true]:bg-default/60",
                                                    "!cursor-text",
                                                ],
                                            }}
                                            placeholder={`Asal instansi`}
                                        />

                                        <Input
                                            isRequired
                                            label={`Nomor Whatsapp `}
                                            variant="underlined"
                                            color="primary"
                                            value={craftData.whatsapp_number}
                                            onChange={(e) =>
                                                setCraftData({
                                                    ...craftData,
                                                    whatsapp_number:
                                                        e.target.value,
                                                })
                                            }
                                            classNames={{
                                                label: "text-black/50 dark:text-white/90 md:text-sm text-xs",
                                                input: [
                                                    "text-cia-green dark:text-white/90 md:text-sm text-xs",
                                                    "placeholder:text-cia-green-placeholder dark:placeholder:text-white/60 md:text-sm text-xs",
                                                ],
                                                inputWrapper: [
                                                    "shadow-none",
                                                    "focus:shadow-none",
                                                    "border-b-2 border-cia-green-border",
                                                    "dark:group-data-[focused=true]:bg-default/60",
                                                    "!cursor-text",
                                                ],
                                            }}
                                            placeholder={`Nomor Whatsapp`}
                                        />
                                        <div className="flex flex-col gap-1 border-b-2 mt-2 pb-2 border-[#18AB8E]">
                                            <p className="text-black text-[0.7rem] lg:text-[12px] ml-1">
                                                Kartu Tanda Mahasiswa{" "}
                                                <span
                                                    style={{
                                                        color: "gray",
                                                    }}
                                                >
                                                    (Format Penamaan : KTM_Nama
                                                    Peserta)
                                                </span>
                                            </p>
                                            <input
                                                type="file"
                                                name="ktm"
                                                className="text-[0.7rem] md:text-sm text-ciaGreen xl:w-1/3"
                                                accept="application/pdf"
                                                required
                                                onChange={onFileChange("ktm")}
                                            ></input>
                                        </div>
                                        <div className="flex flex-col gap-1 border-b-2 pb-2 mt-2 border-[#18AB8E]">
                                            <p className="text-black text-[0.7rem]  lg:text-[12px] ml-1">
                                                Bukti Pembayaran{" "}
                                                <span style={{ color: "red" }}>
                                                    *
                                                </span>{" "}
                                                <span
                                                    style={{
                                                        color: "gray",
                                                    }}
                                                >
                                                    (Format Penamaan : Bukti
                                                    Pembayaran_Nama Peserta)
                                                </span>
                                            </p>
                                            <input
                                                type="file"
                                                className="text-[0.7rem] md:text-sm text-ciaGreen  xl:w-1/3"
                                                accept="application/pdf"
                                                required
                                                onChange={onFileChange(
                                                    "payment_proof"
                                                )}
                                            ></input>
                                        </div>
                                        <div className="flex flex-col gap-1 border-b-2 pb-2 mt-2 border-[#18AB8E]">
                                            <p className="text-black text-[0.7rem]  lg:text-[12px] ml-1">
                                                Bukti Follow Instagram{" "}
                                                <a
                                                    href="https://www.instagram.com/pktsl_ugm/"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    PKTSL
                                                </a>{" "}
                                                <span style={{ color: "red" }}>
                                                    *
                                                </span>{" "}
                                                <span style={{ color: "gray" }}>
                                                    (Format Penamaan : Bukti
                                                    Follow PKTSL_Nama Peserta)
                                                </span>
                                            </p>
                                            <input
                                                type="file"
                                                className="text-[0.7rem] md:text-sm text-ciaGreen  xl:w-1/3"
                                                accept="application/pdf"
                                                required
                                                onChange={onFileChange(
                                                    "payment_proof"
                                                )}
                                            ></input>
                                        </div>
                                        <div className="flex flex-col gap-1 border-b-2 pb-2 mt-2 border-[#18AB8E]">
                                            <p className="text-black text-[0.7rem]  lg:text-[12px] ml-1">
                                                Bukti Follow Instagram{" "}
                                                <a
                                                    href="https://www.instagram.com/civilinaction/"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    Civil In Action
                                                </a>{" "}
                                                <span style={{ color: "red" }}>
                                                    *
                                                </span>{" "}
                                                <span style={{ color: "gray" }}>
                                                    (Format Penamaan : Bukti
                                                    Follow CIA_Nama Peserta)
                                                </span>
                                            </p>
                                            <input
                                                type="file"
                                                className="text-[0.7rem] md:text-sm text-ciaGreen  xl:w-1/3"
                                                accept="application/pdf"
                                                required
                                                onChange={onFileChange(
                                                    "payment_proof"
                                                )}
                                            ></input>
                                        </div>
                                        <div className="flex flex-col gap-1 border-b-2 pb-2 mt-2 border-[#18AB8E]">
                                            <p className="text-black text-[0.7rem]  lg:text-[12px] ml-1">
                                                Bukti Story Instagram{" "}
                                                <span style={{ color: "red" }}>
                                                    *
                                                </span>{" "}
                                                <span style={{ color: "gray" }}>
                                                    (Format Penamaan : Bukti
                                                    Story CRAFT_Nama Peserta)
                                                </span>
                                            </p>
                                            <input
                                                type="file"
                                                className="text-[0.7rem] md:text-sm text-ciaGreen  xl:w-1/3"
                                                accept="application/pdf"
                                                required
                                                onChange={onFileChange(
                                                    "payment_proof"
                                                )}
                                            ></input>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>

                    <div className="flex w-full mt-[3rem] justify-center ">
                        <button
                            className="bg-[#18AB8E] z-50 lg:py-3 px-4 py-2 rounded-xl text-sm font-sans font-medium mt-2 mb-0 lg:mb-[6%] xl:mb-[8%]"
                            type="submit"
                            onClick={handleRegister}
                        >
                            Kirim Formulir
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
