"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import axios from "axios";
import Cookies from "js-cookie";
interface Participant {
  participant_id: number;
  user_id: number | null;
  full_name: string;
  institution_name: string;
  activity_choice: string;
  whatsapp_number: string;
  isMahasiswaDTSL: boolean;
  ktm: string | null;
  payment_proof: string;
  isVerified: boolean;
  email: string;
  createdAt: string;
  updatedAt: string;
}
export default function DetailUser({ params }: { params: any }) {
  const [participant, setParticipant] = useState<Participant | null>(null);
  const token = Cookies.get("token");

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_BASE_URL}/crafts/user/${params.id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setParticipant(response.data); // Save data to state
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

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
          <div className="flex flex-col gap-3">
            <p className="text-ciaGreen text-center text-2xl font-semibold px-6  z-20 ">
              Detail Tim
            </p>
            <div className="flex flex-col w-full">
              <p className="text-black text-left text-lg font-medium px-6 ">
                Email
              </p>
              <p className="text-black text-left text-lg font-semibold px-6 py-2 rounded-xl bg-[#B5E5DB] ">
                {participant?.email || ""}
              </p>
            </div>
            <div className="flex flex-col w-full">
              <p className="text-black text-left text-lg font-medium px-6 ">
                Nama Peserta
              </p>
              <p className="text-black text-left text-lg font-semibold px-6 py-2 rounded-xl bg-[#B5E5DB] ">
                {participant?.full_name || ""}
              </p>
            </div>
            <div className="flex flex-col w-full">
              <p className="text-black text-left text-lg font-medium px-6 ">
                Pilihan Kegiatan
              </p>
              <p className="text-black text-left text-lg font-semibold px-6 py-2 rounded-xl bg-[#B5E5DB] ">
                {participant?.activity_choice || ""}
              </p>
            </div>
            <div className="flex flex-col w-full">
              <p className="text-black text-left text-lg font-medium px-6 ">
                Apakah Mahasiswa DTSL FT UGM?
              </p>
              <p className="text-black text-left text-lg font-semibold px-6 py-2 rounded-xl bg-[#B5E5DB] ">
                {participant?.isMahasiswaDTSL ? "Ya" : "Tidak"}
              </p>
            </div>
            <div className="flex flex-col w-full">
              <p className="text-black text-left text-lg font-medium px-6 ">
                Asal Instansi
              </p>
              <p className="text-black text-left text-lg font-semibold px-6 py-2 rounded-xl bg-[#B5E5DB] ">
                {participant?.institution_name || ""}
              </p>
            </div>
            <div className="flex flex-col w-full">
              <p className="text-black text-left text-lg font-medium px-6 ">
                Nomor Whatsapp
              </p>
              <p className="text-black text-left text-lg font-semibold px-6 py-2 rounded-xl bg-[#B5E5DB] ">
                {participant?.whatsapp_number || ""}
              </p>
            </div>
            <div className="flex flex-col w-full ">
              <p className="text-black text-left text-lg font-medium px-6 ">
                Kartu Tanda Mahasiswa
              </p>
              <div className=" px-6 py-2 rounded-xl bg-[#B5E5DB] ">
                <a
                  className="text-blue-500 underline text-left text-lg font-semibold"
                  href={`${participant?.ktm || ""}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {participant?.ktm || ""}
                </a>
              </div>
            </div>
            <div className="flex flex-col w-full ">
              <p className="text-black text-left text-lg font-medium px-6 ">
                Bukti Pembayaran
              </p>
              <div className=" px-6 py-2 rounded-xl bg-[#B5E5DB] ">
                <a
                  className="text-blue-500 underline text-left text-lg font-semibold"
                  href={`${participant?.payment_proof || ""}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {participant?.payment_proof || ""}
                </a>
              </div>
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
