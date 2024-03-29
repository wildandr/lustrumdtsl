import React, { useState, FormEvent } from "react";
import Link from "next/link";
import {
    MailIcon,
    UserIcon,
    PasswordIcon,
    EyeFilledIcon,
    EyeSlashFilledIcon,
} from "@/component/icons";
import { Input } from "@nextui-org/react";
import axios, { AxiosError } from "axios";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import Cookies from "js-cookie";

export function Form() {
    const [isVisible1, setIsVisible1] = useState(false);
    const [isVisible2, setIsVisible2] = useState(false);
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const router = useRouter();

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            toast.error("Password tidak sama");
            return;
        }
        try {
            const response = await axios.post(
                `${process.env.NEXT_PUBLIC_BASE_URL}/user/register`,
                {
                    username,
                    email,
                    password,
                }
            );

            toast.success("Register berhasil");
            router.push("/cia/login");
        } catch (error) {
            toast.error("Register gagal");
            if (axios.isAxiosError(error)) {
                const serverError = error as AxiosError;
            } else {
                console.log(error);
            }
        }
    };

    const toggleVisibility1 = () => {
        setIsVisible1(!isVisible1);
    };
    const toggleVisibility2 = () => {
        setIsVisible2(!isVisible2);
    };
    return (
        <div
            id="form"
            className="flex-col absolute  bottom-0 z-50 right-5 left-3 sm:left-1 px-2 min-[386px]:px-4 sm:right-8 max-[385px]:h-[45%] h-[55%] 
      min-[475px]:h-[48%] sm:h-[46%]  md:w-[42%] lg:w-[40%] min-[450px]:px-8 min-[450px]:left-1 min-[600px]:px-12    
      md:bottom-auto md:left-auto  md:right-0  md:top-[18%] lg:right-3 lg:top-[8.4rem] xl:top-[18%] justify-center lg:px-0 md:px-4 font-sans"
        >
            <div className="px-8 ">
                <h1 className="text-3xl sm:text-4xl md:text-3xl  font-medium text-cia-green ">
                    Registrasi
                </h1>
                <p className="max-[375px]:text-sm text-base sm:text-base font-light text-cia-green mt-2 sm:mt-6">
                    Sudah memiliki akun?
                </p>

                <p className="max-[375px]:text-sm text-base sm:text-base font-light text-cia-green ">
                    Kamu bisa{" "}
                    <span>
                        <Link
                            href="/cia/login"
                            className="text-[#18AB8E] font-medium"
                        >
                            Masuk Disini!{" "}
                        </Link>
                    </span>
                </p>
            </div>
            <form className="flex-col flex w-full  px-8  mt-4 gap-2 min-[385px]:gap-6">
                <Input
                    label="Email"
                    isClearable
                    type="email"
                    variant="underlined"
                    color="primary"
                    onChange={(e) => {
                        setEmail(e.target.value);
                    }}
                    value={email}
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
                    placeholder="Masukkan alamat email"
                    startContent={
                        <MailIcon className="text-black/50 mb-0.5 dark:text-white/90 text-slate-400 pointer-events-none flex-shrink-0" />
                    }
                />
                <Input
                    label="Username"
                    isClearable
                    type="text"
                    variant="underlined"
                    color="primary"
                    value={username}
                    onChange={(e) => {
                        setUsername(e.target.value);
                    }}
                    classNames={{
                        label: "text-black/50 dark:text-white/90",
                        input: [
                            "text-cia-green dark:text-white/90",
                            "placeholder:text-cia-green placeholder:font-light dark:placeholder:text-white/60",
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
                    placeholder="Masukkan username"
                    startContent={
                        <UserIcon className="text-black/50 mb-0.5 dark:text-white/90 text-slate-400 pointer-events-none flex-shrink-0" />
                    }
                />
                <Input
                    label="Password"
                    variant="underlined"
                    color="primary"
                    value={password}
                    onChange={(e) => {
                        setPassword(e.target.value);
                    }}
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
                <Input
                    label="Confirm password"
                    variant="underlined"
                    color="primary"
                    value={confirmPassword}
                    onChange={(e) => {
                        setConfirmPassword(e.target.value);
                    }}
                    classNames={{
                        label: "text-black/50 dark:text-white/90",
                        input: [
                            "text-cia-green font-light dark:text-white/90",
                            "placeholder:text-cia-green placeholder:font-light  dark:placeholder:text-white/60",
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
                    placeholder="Konfirmasi password"
                    startContent={
                        <PasswordIcon className="text-black/50 mb-0.5 dark:text-white/90 text-slate-400 pointer-events-none flex-shrink-0" />
                    }
                    endContent={
                        <button
                            className="focus:outline-none"
                            type="button"
                            onClick={toggleVisibility2}
                        >
                            {isVisible2 ? (
                                <EyeSlashFilledIcon className="text-xl text-cia-green pointer-events-none flex-shrink-0" />
                            ) : (
                                <EyeFilledIcon className="text-xl text-cia-green pointer-events-none  flex-shrink-0" />
                            )}
                        </button>
                    }
                    type={isVisible2 ? "text" : "password"}
                />
                <button
                    className="bg-[#18AB8E] max-[385px]:mt-3 z-50 p-2 rounded-xl font-sans font-light shadow-md hover:bg-[#469485]"
                    onClick={handleSubmit}
                >
                    Register
                </button>
            </form>
        </div>
    );
}
