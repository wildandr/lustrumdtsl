"use client";
import Image from "next/image";
export default function DetailUser() {
  return (
    <div className="bg-[#058369] h-[120vh] font-LibreBaskerville">
      <Image
        src="/bgcia.png"
        alt="bgcia"
        width={1000}
        height={1000}
        className="hidden sm:flex fixed w-full h-full object-cover z-10"
      />
      <div className=" w-full h-[100vh] absolute z-40">
        <div className="bg-white p-4 rounded-xl  w-[90%] mx-auto mt-28 ">
          <p className="text-ciaGreen text-center text-2xl font-semibold px-6  z-20 ">
            Detail Peserta
          </p>
          <div className="flex flex-col w-full">
            <p className="text-black text-left text-lg font-medium px-6 ">
              Nama Peserta/Tim
            </p>
            <p className="text-black text-left text-lg font-semibold px-6 py-2 rounded-xl bg-[#B5E5DB] ">
              Wildan Dzaky
            </p>
          </div>
          <div className="flex flex-col w-full mt-5">
            <p className="text-black text-left text-lg font-medium px-6 ">
              Bukti upload foto
            </p>
            <div className=" px-6 py-2 rounded-xl bg-[#B5E5DB] ">
                <Image
                    src="/logocia.png"
                    alt="foto"
                    width={500}
                    height={500}
                    className="w-[300px] h-[300px] z-10"
                />
            </div>
          </div>
          <div className="flex justify-end mt-10">
            <button className="bg-[#18AB8E] shadow-xl text-white  px-6 py-2 rounded-2xl  font-sans">
              Unduh Data
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
