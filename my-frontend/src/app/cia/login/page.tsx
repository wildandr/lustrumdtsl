"use client";
import React, { useEffect, useState, FormEvent } from "react";
import Image from "next/image";
import Link from "next/link";
import {
    MailIcon,
    UserIcon,
    PasswordIcon,
    EyeFilledIcon,
    EyeSlashFilledIcon,
} from "@/component/icons";
import { Input } from "@nextui-org/react";
import axios from "axios";

export default function Login() {
    const [isVisible1, setIsVisible1] = useState(false);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async (event: FormEvent) => {
        event.preventDefault();

        try {
            const response = await axios.post(
                "http://127.0.0.1:5001/user/login",
                {
                    username,
                    password,
                }
            );

            if (response.data && response.data.token) {
                localStorage.setItem("token", response.data.token);
                localStorage.setItem("user_id", response.data.user.user_id);
                localStorage.setItem("isAdmin", response.data.user.isAdmin);
                alert("Login Berhasil");
            } else {
                alert("Login Gagal");
            }
        } catch (error) {
            alert("Login Gagal");
            console.error(error);
        }
    };

    const toggleVisibility1 = () => {
        setIsVisible1(!isVisible1);
    };

    const [rotation, setRotation] = useState(0);
    const [direction, setDirection] = useState(1);

    useEffect(() => {
        const interval = setInterval(() => {
            if (rotation >= 30 || rotation <= 1) {
                setDirection((prevDirection) => -prevDirection);
            }

            setRotation((prevRotation) => prevRotation + 30 * direction);
        }, 1000);

        return () => clearInterval(interval);
    }, [rotation, direction]);
    return (
        <main className=" w-full max-[385px]:h-[180vh] h-[140vh] md:h-[100vh] bg-[#058369] font-sans overflow-x-hidden">
            <nav className="fixed w-full flex z-50 justify-between items-center h-16  bg-[#02745D]  text-white  shadow-sm ">
                <div className="pl-8">CIA</div>
                <div className="pr-8">Register</div>
            </nav>
            <Image
                src="/bgciamobile.png"
                alt="bgcia"
                width={1000}
                height={1000}
                className="fixed sm:hidden w-full h-full object-cover z-10"
            />
            <Image
                src="/bgcia.png"
                alt="bgcia"
                width={1000}
                height={1000}
                className="hidden sm:flex w-full h-full object-cover z-50"
            />

            <div className=" w-full md:fixed  max-[385px]:h-[160vh] h-[120vh] md:h-[100vh] hero absolute top-0 mt-20  z-0">
                <Image
                    src="/bgform.png"
                    alt="form"
                    width={500}
                    height={500}
                    className="hidden md:flex w-[45%] absolute right-0 top-10 md:top-20 h-[70%] md:h-[56%] xl:h-[64%] "
                />
                <Image
                    src="/bgFormMobile.png"
                    alt="form"
                    width={500}
                    height={500}
                    className="z-20 md:hidden absolute bottom-0 right-5 left-5 max-[385px]:h-[45%] h-[53%] sm:h-[48%]  w-[92vw]"
                />

                <div
                    id="form"
                    className="flex-col absolute bottom-0 z-30 right-5 left-3 sm:left-1 sm:right-8 max-[385px]:h-[40%] h-[45%] sm:h-[40%]  lg:w-[40%] min-[450px]:px-8 min-[450px]:left-1 min-[600px]:px-10    md:bottom-auto md:left-auto  md:right-0 md:top-40 justify-center md:w-[42%] md:px-4 md:h-[80%] "
                >
                    <div className="px-8 md:px-2 ">
                        <h1 className="text-3xl sm:text-4xl  font-medium text-cia-green ">
                            Masuk
                        </h1>
                        <p className="max-[375px]:text-sm text-base sm:text-base font-light text-cia-green mt-2 sm:mt-6">
                            Belum memiliki akun?
                        </p>

                        <p className="max-[375px]:text-sm text-base sm:text-base font-light text-cia-green ">
                            Kamu bisa{" "}
                            <span>
                                <Link
                                    href="/cia/register"
                                    className="text-[#18AB8E] font-medium"
                                >
                                    Daftar Disini!{" "}
                                </Link>
                            </span>
                        </p>
                    </div>
                    <form className="flex-col flex w-full  px-8 md:px-2 mt-4 gap-4 min-[385px]:gap-6">
                        <Input
                            label="Email/Username"
                            isClearable
                            type="text"
                            variant="underlined"
                            color="primary"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            classNames={{
                                label: "text-black/50 dark:text-white/90",
                                input: [
                                    "text-cia-green dark:text-white/90",
                                    "placeholder:text-cia-green  dark:placeholder:text-white/60",
                                ],

                                inputWrapper: [
                                    "bg-white",

                                    "shadow-none",
                                    "focus:shadow-none",
                                    "border-b-2 border-cia-green",
                                    "dark:group-data-[focused=true]:bg-default/60",
                                    "!cursor-text",
                                ],
                            }}
                            placeholder="Masukkan alamat email atau username"
                            startContent={
                                <MailIcon className="text-black/50 mb-0.5 dark:text-white/90 text-slate-400 pointer-events-none flex-shrink-0" />
                            }
                        />

                        <Input
                            label="Password"
                            variant="underlined"
                            color="primary"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            classNames={{
                                label: "text-black/50 dark:text-white/90",
                                input: [
                                    "text-cia-green dark:text-white/90",
                                    "placeholder:text-cia-green  dark:placeholder:text-white/60",
                                ],

                                inputWrapper: [
                                    "bg-white",

                                    "shadow-none",
                                    "focus:shadow-none",
                                    "border-b-2 border-cia-green",
                                    "dark:group-data-[focused=true]:bg-default/60",
                                    "!cursor-text",
                                ],
                            }}
                            placeholder="Masukkan password"
                            startContent={
                                <PasswordIcon className="text-black/50 mb-0.5 dark:text-white/90 text-slate-400 pointer-events-none flex-shrink-0" />
                            }
                            endContent={
                                <button
                                    className="focus:outline-none"
                                    type="button"
                                    onClick={toggleVisibility1}
                                >
                                    {isVisible1 ? (
                                        <EyeSlashFilledIcon className="text-xl text-cia-green pointer-events-none" />
                                    ) : (
                                        <EyeFilledIcon className="text-xl text-cia-green pointer-events-none" />
                                    )}
                                </button>
                            }
                            type={isVisible1 ? "text" : "password"}
                        />

                        <button
                            className="bg-[#18AB8E] max-[385px]:mt-3 z-50 p-2 rounded-xl font-sans font-light shadow-md hover:bg-[#469485]"
                            type="submit"
                            onClick={handleLogin}
                        >
                            Login
                        </button>
                    </form>
                </div>

                <div className="flex justify-between items-center mb-48 mt-20 sm:mt-32">
                    <Image
                        src="/logocia.png"
                        alt="cia"
                        width={1000}
                        height={1000}
                        className="mx-auto w-[65%] h-[75%] md:w-[33%] md:h-[28%]  lg:h-[23%] xl:w-[23%] xl:h-[28%] md:absolute md:top-40 md:left-20 lg:top-56 lg:left-32 xl:top-56 xl:left-56"
                    />

                    <Image
                        src="/ciaIcon1.png"
                        alt="icon1"
                        width={600}
                        height={600}
                        className="w-[70px] h-[70px] sm:w-[100px] sm:h-[100px] lg:w-[120px] lg:h-[120px] absolute top-0 left-40 sm:left-[18rem] md:left-32 md:top-8 lg:top-14 lg:left-[15rem]  xl:top-14 xl:left-[20rem]"
                        style={{ transform: `rotate(${rotation}deg)` }}
                    />
                    <Image
                        src="/ciaIcon2.png"
                        alt="icon2"
                        width={600}
                        height={600}
                        className="w-[60px] h-[60px] sm:w-[100px] sm:h-[100px] md:w-[80px]  md:h-[80px] lg:w-[100px] lg:h-[100px] xl:w-[120px] xl:h-[120px] absolute top-14 right-4 sm:top-20 md:top-32 md:left-[20rem] lg:left-[26rem] xl:top-[12rem] xl:left-[36rem]"
                        style={{ transform: `rotate(${rotation}deg)` }}
                    />
                    <Image
                        src="/ciaIcon3Mobile.png"
                        alt="icon3"
                        width={600}
                        height={600}
                        className="md:flex hidden w-[40px] h-[40px] sm:w-[100px] sm:h-[100px] md:w-[65px] md:h-[65px] lg:w-[80px] lg:h-[80px] xl:w-[100px] xl:h-[100px]  absolute top-16 left-8 md:top-[12rem] md:left-4 lg:top-[12rem] lg:left-[5rem]"
                        style={{ transform: `rotate(${rotation}deg)` }}
                    />
                    <Image
                        src="/ciaIcon3Mobile.png"
                        alt="icon3"
                        width={600}
                        height={600}
                        className="md:hidden w-[40px] h-[40px] sm:w-[80px] sm:h-[80px] md:w-[100px] md:h-[100px] absolute top-16 left-8 sm:top-32  md:top-[12rem] md:left-[5rem]"
                        style={{ transform: `rotate(${rotation}deg)` }}
                    />
                    <Image
                        src="/ciaIcon4.png"
                        alt="icon4"
                        width={600}
                        height={600}
                        className="sm:flex hidden w-[30px] h-[50px] sm:w-[80px] sm:h-[100px] md:w-[60px] md:h-[80px] xl:w-[80px] xl:h-[100px] absolute top-[18rem] left-20 sm:top-[32rem] md:left-[4rem] lg:top-[34rem] xl:top-[30rem] lg:left-[6rem] xl:left-[8rem]"
                        style={{ transform: `rotate(${rotation}deg)` }}
                    />
                    <Image
                        src="/ciaIcon4Mobile.png"
                        alt="icon4"
                        width={600}
                        height={600}
                        className="sm:hidden w-[30px] h-[50px] sm:w-[50px] sm:h-[80px] md:w-[80px] md:h-[100px] absolute top-[20rem] left-20 sm:top-[30rem] sm:left-[8rem]"
                        style={{ transform: `rotate(${rotation}deg)` }}
                    />
                    <Image
                        src="/ciaIcon5.png"
                        alt="icon5"
                        width={600}
                        height={600}
                        className="hidden md:flex md:w-[50px] md:h-[70px] xl:w-[70px] xl:h-[90px] absolute md:top-[30rem] min-[820px]:top-[33rem] md:left-[20rem] lg:top-[34rem] lg:left-[28rem] xl:top-[30rem] xl:left-[38rem]"
                        style={{ transform: `rotate(${rotation}deg)` }}
                    />
                    <Image
                        src="/ciaIcon5Mobile.png"
                        alt="icon5"
                        width={600}
                        height={600}
                        className="md:hidden w-[50px] h-[50px] sm:w-[80px]  md:w-[70px] md:h-[90px] absolute top-[20rem] right-20 sm:top-[32rem] sm:right-28 md:top-[30rem] md:left-[38rem]"
                        style={{ transform: `rotate(${rotation}deg)` }}
                    />
                    <Image
                        src="/ciaIcon6.png"
                        alt="icon6"
                        width={600}
                        height={600}
                        className="hidden md:flex md:w-[50px] md:h-[70px] xl:w-[70px] xl:h-[90px] absolute md:top-[36rem] lg:top-[38rem] xl:top-[36rem]  md:left-[12rem] lg:left-[16rem] xl:left-[24rem]"
                        style={{ transform: `rotate(${rotation}deg)` }}
                    />
                </div>
            </div>
        </main>
    );
}
