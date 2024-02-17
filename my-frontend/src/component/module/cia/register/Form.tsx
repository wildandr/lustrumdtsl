import React, {  useState, FormEvent } from "react";
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
            alert("Password tidak sama");
            return;
        }

        try {
            const response = await axios.post(
                `http://127.0.0.1:5001/user/register`,
                {
                    username,
                    email,
                    password,
                }
            );

            alert("Register berhasil");
            router.push("/cia/login");
        } catch (error) {
            alert("Register gagal");
            if (axios.isAxiosError(error)) {
                const serverError = error as AxiosError;
                if (serverError && serverError.response) {
                    console.log(serverError.response.data);
                }
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
        className="flex-col absolute  bottom-0 z-30 px-  right-5 left-3 sm:left-1 sm:right-8 max-[385px]:h-[45%] h-[55%] min-[475px]:h-[48%] sm:h-[46%]  md:w-[42%]   lg:w-[40%] min-[450px]:px-8 min-[450px]:left-1 min-[600px]:px-12    md:bottom-auto md:left-auto  md:right-0 md:top-[15%] lg:top-[7.5rem] xl:top-[16%] justify-center  md:px-4 "
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
    );}