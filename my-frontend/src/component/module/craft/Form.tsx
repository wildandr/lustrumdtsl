"use client";

import React, { useState, FormEvent, useEffect } from "react";
import { Tabs, Tab, Input } from "@nextui-org/react";
import axios from "axios";
import Image from "next/image";
import { useMediaQuery } from "react-responsive";
import { RadioGroup, Radio } from "@nextui-org/react";

export function Form() {
    const userIdFromLocalStorage = localStorage.getItem("user_Id");

    const [craftData, setCraftData] = useState({
        full_name: "",
        institution_name: "",
        user_id: Number(userIdFromLocalStorage),
        activity_choice: "online",
        whatsapp_number: "",
        isMahasiswaDTSL: true,
        ktm: "",
        payment_proof: "",
    });

    const backgroundHeading = {
        backgroundImage: `url(/craftBgHeading.png)`,
        backgroundSize: "cover",
    };

    const backgroundImage = {
        backgroundImage: `url(/assets/sbc/bg_form_sbc.png)`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
    };

    const handleRegister = async (event: FormEvent) => {
        event.preventDefault();

        try {
            const token = localStorage.getItem("token");

            const response = await axios.post(
                "http://lustrumkmtsl:5001/crafts/register",
                craftData,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );
            alert("Pendaftaran berhasil");
        } catch (error) {
            alert("Pendaftaran gagal");
            console.error("Error registering:", error);
            console.log(craftData);
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
                    className="absolute sm:flex w-auto h-[1900px] lg:h-[900px] lg:w-[900px] z-0 pt-[6%] hidden"
                />
                <Image
                    src="/assets/sbc/bg_form_sbc_mobile.png"
                    alt="bgcia"
                    width={1000}
                    height={1000}
                    className="absolute sm:hidden w-full h-[1880px] z-0 pt-[1%]"
                />

                <div className="lg:mt-[8%] mt-[8%] min-h-screen w-full z-50 flex flex-col">
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
                        Formulir Pendaftaran CRAFT
                    </div>
                    <Image
                        src="/craftLogo.png"
                        alt="cic"
                        width={1000}
                        height={1000}
                        className="lg:h-32 lg:w-32 absolute lg:right-[13%] h-14 w-14 right-[6%] lg:flex"
                        style={{ transform: `rotate(${rotation}deg)` }}
                    />

                    <div className="flex flex-col w-full mt-[3%]">
                        <div className="max-w-full w-auto h-auto lg:mx-[15%] mx-[17%]">
                            <div className="overflow-hidden">
                                <form className="w-full flex flex-col gap-4 font-sans">
                                    <div>
                                        <RadioGroup
                                            classNames={{
                                                base: "gap-2 text-black text-sm mb-5",
                                                label: "text-sm text-black",
                                            }}
                                            size="sm"
                                            label="Pilihan Kegiatan"
                                            orientation="horizontal"
                                        >
                                            <Radio value="online">
                                                {" "}
                                                Online{" "}
                                            </Radio>
                                            <Radio value="offline">
                                                {" "}
                                                Offline{" "}
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
                                        <Input
                                            label={`Kartu Tanda Mahasiswa(KTM)  `}
                                            variant="underlined"
                                            color="primary"
                                            value={craftData.ktm}
                                            onChange={(e) =>
                                                setCraftData({
                                                    ...craftData,
                                                    ktm: e.target.value,
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
                                            placeholder={`Kartu Tanda Mahasiswa`}
                                        />
                                        <Input
                                            isRequired
                                            label={`Bukti Pembayaran`}
                                            variant="underlined"
                                            color="primary"
                                            value={craftData.payment_proof}
                                            onChange={(e) =>
                                                setCraftData({
                                                    ...craftData,
                                                    payment_proof:
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
                                            placeholder={`Bukti Pembayaran`}
                                        />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>

                    <div className="flex w-full mt-20 justify-center ">
                        <button
                            className="bg-[#18AB8E] z-50 lg:py-3 px-4 p-1 rounded-xl text-sm font-sans font-medium mt-2 mb-0 lg:mb-[6%] xl:mb-[8%]"
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
