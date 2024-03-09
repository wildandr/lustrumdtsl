import Link from "next/link";
import React, { useState, FormEvent } from "react";
import {
    MailIcon,
    UserIcon,
    PasswordIcon,
    EyeFilledIcon,
    EyeSlashFilledIcon,
} from "@/component/icons";
import { Input } from "@nextui-org/react";
import axios from "axios";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Cookies from "js-cookie";

export function Form() {
    const [isVisible1, setIsVisible1] = useState(false);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const router = useRouter();

    useEffect(() => {
        const token = Cookies.get("token");
        const userId = Cookies.get("user_Id");
        const isAdmin = Cookies.get("isAdmin")

        if (token && userId && !isAdmin) {
            router.push("/dashboard/user/");
        }
    }, []);

    const handleLogin = async (event: FormEvent) => {
        event.preventDefault();

        const url = `${process.env.NEXT_PUBLIC_BASE_URL}/user/login/`;

        try {
            const response = await axios.post(url, {
                username,
                password,
            });

            if (response.data && response.data.token) {
                Cookies.set("token", response.data.token);
                Cookies.set("user_Id", response.data.user.user_id);
                Cookies.set("isAdmin", response.data.user.isAdmin);
                Cookies.set("eventId", response.data.user.eventId);

                toast.success("Login Berhasil");
               

                if (response.data.user.isAdmin) {
                    if (response.data.user.eventId === 1) {
                        router.push("/dashboard/fcec/admin");
                        console.log(response.data.user.eventId);
                    } else if (response.data.user.eventId === 2) {
                        router.push("/dashboard/craft/admin");
                        console.log(response.data.user.eventId);
                    } else if (response.data.user.eventId === 3) {
                        router.push("/dashboard/sbc/admin");
                        console.log(response.data.user.eventId);
                    } else if (response.data.user.eventId === 4) {
                        router.push("/dashboard/cic/admin");
                        console.log(response.data.user.eventId);
                    }
                } else {
                    router.push("/dashboard/user");
                }
            } else {
                toast.error("Username atau Password Salah!");
            }
        } catch (error) {
            toast.error("Username atau Password Salah!");
        }
    };

    const toggleVisibility1 = () => {
        setIsVisible1(!isVisible1);
    };
    return (
        <div
            id="form"
            className="flex-col absolute bottom-0 z-30 right-5 left-3 px-2 min-[385px]:px-4 sm:left-1 sm:right-8 max-[385px]:h-[40%] h-[45%] sm:h-[40%]
             lg:w-[40%]  min-[450px]:px-8 min-[450px]:left-1 min-[600px]:px-10 md:bottom-auto md:left-auto md:right-0 md:top-[16%] lg:top-[18%] xl:top-[19%]
               justify-center md:w-[42%] md:px-4 md:h-[50%] lg:right-4  font-sans"
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
    );
}
