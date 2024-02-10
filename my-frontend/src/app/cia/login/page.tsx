"use client";
import React from "react";
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
export default function Login() {
  const [isVisible1, setIsVisible1] = React.useState(false);
  const [isVisible2, setIsVisible2] = React.useState(false);

  const toggleVisibility1 = () => {
    setIsVisible1(!isVisible1);
    console.log("Toggle visibility 1:", !isVisible1);
  };
  const toggleVisibility2 = () => {
    setIsVisible2(!isVisible2);
    console.log("Toggle visibility 2:", !isVisible2);
  };
  return (
    <main className=" w-full max-[385px]:h-[180vh] h-[140vh] sm:[100vh] bg-[#058369] font-sans">
      <nav className="fixed w-full flex z-50 justify-between items-center h-16  bg-[#02745D]  text-white  shadow-sm ">
        <div className="pl-8">CIA</div>
        <div className="pr-8">Login</div>
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
       
         
      <div className=" w-full sm:fixed  max-[385px]:h-[160vh] h-[120vh] sm:h-[100vh] hero absolute top-0 mt-20  z-0">
      <Image
            src="/bgform.png"
            alt="form"
            width={500}
            height={500}
            className="hidden sm:flex w-[45%] absolute right-0 top-10 h-[80%] "
          />
               <Image
          src="/bgFormMobile.png"
          alt="form"
          width={500}
          height={500}
          className="z-20 sm:hidden absolute bottom-0 right-5 left-5 max-[385px]:h-[50%] h-[60%] w-[92vw]"
        /> 
      
           <div id="form" className="flex-col absolute bottom-0 z-30 right-5 left-3 max-[385px]:h-[45%] h-[55%] sm:bottom-auto sm:left-auto  sm:right-0 sm:top-5 justify-center sm:w-[45%] sm:h-[80%] sm:px-24 sm:py-20 ">
          <div className="px-8 ">
          <h1 className="text-3xl sm:text-4xl  font-medium text-cia-green ">Registrasi</h1>
          <p className="max-[375px]:text-[0.85rem] text-sm sm:text-base font-light text-cia-green mt-2 sm:mt-6">
            Sudah memiliki akun?
          </p>
          
          <p className="text-sm sm:text-base font-light text-cia-green ">
            kamu bisa{" "}
            <span>
              <Link href="#" className="text-[#18AB8E] font-medium">
                Masuk Disini!{" "}
              </Link>
            </span>
          </p>
          </div>
          <div className="flex-col flex w-full  px-8  mt-4 gap-2 min-[385px]:gap-6">
            <Input
              label="Email"
              isClearable
              type="email"
              variant="underlined"
              color="primary"
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
            <button className="bg-[#18AB8E] z-50 p-2 rounded-xl font-sans font-light shadow-md hover:bg-[#469485]">
                Register
            </button>
          </div>
        </div>
          
          <div className="flex justify-between items-center mb-48 mt-20">
            <Image
              src="/logocia.png"
              alt="cia"
              width={1000}
              height={1000}
              className=" mx-auto w-[65%] h-[75%] sm:w-[23%] sm:h-[28%] sm:absolute sm:top-56 sm:left-56"
            />
            <Image
              src="/ciaIcon1.png"
              alt="icon1"
              width={600}
              height={600}
              className="w-[70px] h-[70px]  sm:w-[120px] sm:h-[120px] absolute top-0 left-40 sm:top-14 sm:left-[20rem]"
            />
            <Image
              src="/ciaIcon2.png"
              alt="icon2"
              width={600}
              height={600}
              className="w-[60px] h-[60px] sm:w-[120px] sm:h-[120px] absolute top-14 right-4 sm:top-[12rem] sm:left-[36rem]"
            />
            <Image
              src="/ciaIcon3.png"
              alt="icon3"
              width={600}
              height={600}
              className="sm:flex hidden w-[40px] h-[40px] sm:w-[100px] sm:h-[100px] absolute top-16 left-8 sm:top-[12rem] sm:left-[5rem]"
            />
            <Image
              src="/ciaIcon3Mobile.png"
              alt="icon3"
              width={600}
              height={600}
              className="sm:hidden w-[40px] h-[40px] sm:w-[100px] sm:h-[100px] absolute top-16 left-8 sm:top-[12rem] sm:left-[5rem]"
            />
            <Image
              src="/ciaIcon4.png"
              alt="icon4"
              width={600}
              height={600}
              className="sm:flex hidden w-[30px] h-[50px] sm:w-[80px] sm:h-[100px] absolute top-[18rem] left-20 sm:top-[30rem] sm:left-[8rem]"
            />
            <Image
              src="/ciaIcon4Mobile.png"
              alt="icon4"
              width={600}
              height={600}
              className="sm:hidden w-[30px] h-[50px] sm:w-[80px] sm:h-[100px] absolute top-[20rem] left-20 sm:top-[30rem] sm:left-[8rem]"
            />
            <Image
              src="/ciaIcon5.png"
              alt="icon5"
              width={600}
              height={600}
              className="hidden sm:flex sm:w-[70px] sm:h-[90px] absolute sm:top-[30rem] sm:left-[38rem]"
            />
            <Image
              src="/ciaIcon5Mobile.png"
              alt="icon5"
              width={600}
              height={600}
              className="sm:hidden w-[50px] h-[50px] sm:w-[70px] sm:h-[90px] absolute top-[20rem] right-20 sm:top-[30rem] sm:left-[38rem]"
            />
            <Image
              src="/ciaIcon6.png"
              alt="icon6"
              width={600}
              height={600}
              className="hidden sm:flex sm:w-[60px] sm:h-[80px] absolute sm:top-[36rem] sm:left-[23rem]"
            />
    
         
        </div>
       
            
       
        </div>
 
    </main>
  );
}
