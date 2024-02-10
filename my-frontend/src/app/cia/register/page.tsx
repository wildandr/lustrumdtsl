import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Mail } from "@/component/icons";
export default function Register() {
  return (
    <main className="bg-[#058369] fixed w-full h-[100vh]">
      <nav className="flex justify-between items-center h-16 bg-gradient-to-r from-[#02745D] from-90% to-[#79AE9E]  text-white relative shadow-sm font-mono">
        <div className="pl-8">CIA</div>
        <div className="pr-8">Register</div>
      </nav>
      <Image
        src="/bgcia.png"
        alt="bgcia"
        width={1000}
        height={1000}
        className="w-full h-full object-cover z-0"
      />
      <div className="hero absolute top-0 mt-20 flex  h-full w-full z-10">
        <Image
          src="/logocia.png"
          alt="cia"
          width={1000}
          height={1000}
          className="w-[356px] h-[284px] ml-48 mt-48"
        />
        <Image
          src="/bgform.png"
          alt="form"
          width={500}
          height={500}
          className="w-1/2 absolute right-0 top-5 h-[85%] "
        />
        <div className="form absolute right-0 top-5 items-center justify-center w-1/2 h-[85%] z-20 px-24 py-20 ">
          <h1 className="text-4xl font-medium text-cia-green">Sign Up</h1>
          <p className="text-xl text-cia-green mt-8">
            If you already have an account register
          </p>
          <p className="text-xl text-cia-green ">
            You can{" "}
            <span>
              <Link href="#" className="text-[#18AB8E] font-medium">
                Login Here!{" "}
              </Link>
            </span>
          </p>

          <form className="mt-8">
            <div className="flex flex-col mt-4">
              <label className="text-cia-green text-sm">Email</label>
              <div className="inline-flex justify-center items-center w-full border-b-2 focus:border-[#18AB8E] border-cia-green ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="17"
                  height="17"
                  viewBox="0 0 50 50"
                  className="h-6 w-6 mr-2 text-cia-green"
                >
                  <path
                    fill="#005A48"
                    d="M 0 7 L 0 43 L 50 43 L 50 7 Z M 2 9 L 48 9 L 48 11.5 C 47.609375 11.839844 30.074219 27.136719 28.4375 28.5625 L 28.34375 28.65625 C 27.046875 29.785156 25.71875 30 25 30 C 24.285156 30 22.953125 29.785156 21.65625 28.65625 C 21.285156 28.332031 18.613281 26.023438 16.6875 24.34375 C 10.972656 19.359375 2.292969 11.757813 2 11.5 Z M 2 14.15625 C 3.734375 15.667969 9.886719 21.023438 15.125 25.59375 L 2 35.96875 Z M 48 14.15625 L 48 35.96875 L 34.875 25.59375 C 40.113281 21.023438 46.265625 15.667969 48 14.15625 Z M 16.65625 26.9375 C 17.871094 27.996094 20.066406 29.914063 20.34375 30.15625 L 20.375 30.1875 C 22.066406 31.640625 23.863281 32 25 32 C 26.144531 32 27.957031 31.636719 29.65625 30.15625 C 29.9375 29.914063 32.148438 28.007813 33.375 26.9375 L 48 38.5 L 48 41 L 2 41 L 2 38.5 Z"
                  ></path>
                </svg>
                <input
                  type="email"
                  className="border-b-2 border-cia-green py-2 w-full focus:outline-none focus:border-[#18AB8E] placeholder-cia-green text-cia-green"
                  placeholder="Enter your email address"
                />
              </div>
            </div>

            <div className="flex flex-col mt-4 text-sm">
              <label className="text-cia-green">Username</label>
              <input
                type="text"
                className="border-b-2 border-cia-green p-2 text-cia-green focus:outline-none"
              />
            </div>
            <div className="flex flex-col mt-4 text-sm">
              <label className="text-cia-green">Password</label>
              <input
                type="password"
                className="border-b-2 border-cia-green p-2 focus:outline-none"
              />
            </div>
            <div className="flex flex-col mt-4 text-sm">
              <label className="text-cia-green">Confirm Password</label>
              <input
                type="password"
                className="border-b-2 border-cia-green p-2 focus:outline-none"
              />
            </div>
            <button className="bg-cia-green text-white rounded-lg p-2 mt-8">
              Register
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
