"use client";
import Image from "next/image";
import { useState } from "react";
export default function DetailUser() {
  const [teamMembers, setTeamMembers] = useState([
    { id: "ketua", role: "Ketua" },
    { id: "member1", role: "Anggota 1" },
    { id: "member2", role: "Anggota 2" }, // tambahkan anggota lain di sini jika diperlukan
  ]);
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
          <div>
            <p className="text-ciaGreen text-center text-2xl font-semibold px-6  z-20 ">
              Detail Tim
            </p>
            <div className="flex flex-col w-full">
              <p className="text-black text-left text-lg font-medium px-6 ">
                Email
              </p>
              <p className="text-black text-left text-lg font-semibold px-6 py-2 rounded-xl bg-[#B5E5DB] ">
                finnovate@gmail.com
              </p>
            </div>
            <div className="flex flex-col w-full">
              <p className="text-black text-left text-lg font-medium px-6 ">
                Nama Tim
              </p>
              <p className="text-black text-left text-lg font-semibold px-6 py-2 rounded-xl bg-[#B5E5DB] ">
                Finnovate
              </p>
            </div>
            <div className="flex flex-col w-full">
              <p className="text-black text-left text-lg font-medium px-6 ">
                Nama Perguruan Tinggi
              </p>
              <p className="text-black text-left text-lg font-semibold px-6 py-2 rounded-xl bg-[#B5E5DB] ">
                UGM
              </p>
            </div>
            <div className="flex flex-col w-full">
              <p className="text-black text-left text-lg font-medium px-6 ">
                Nama Jembatan
              </p>
              <p className="text-black text-left text-lg font-semibold px-6 py-2 rounded-xl bg-[#B5E5DB] ">
                Finnovate Bridge
              </p>
            </div>
            <div className="flex flex-col w-full mt-5">
              <p className="text-black text-left text-lg font-medium px-6 ">
                Bukti Pembayaran
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
            <div className="flex flex-col w-full mt-5">
              <p className="text-black text-left text-lg font-medium px-6 ">
                Bukti Voucher
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
          </div>
          <div className="flex flex-col w-full">
            {/* Loop through team members */}
            {teamMembers.map((member) => (
              <TeamMember key={member.id} role={member.role} />
            ))}
          </div>
          <div className="mt-4 flex flex-col gap-2">
            <p className="text-ciaGreen text-lg font-semibold">
              Dosen Pembimbing
            </p>
            <div className="flex flex-col w-full">
              <p className="text-black text-left text-lg font-medium px-6 ">
                Nama Lengkap
              </p>
              <p className="text-black text-left text-lg font-semibold px-6 py-2 rounded-xl bg-[#B5E5DB] ">
                Test
              </p>
            </div>
            <div className="flex flex-col w-full">
              <p className="text-black text-left text-lg font-medium px-6 ">
                NIP
              </p>
              <p className="text-black text-left text-lg font-semibold px-6 py-2 rounded-xl bg-[#B5E5DB] ">
                Test
              </p>
            </div>
            <div className="flex flex-col w-full">
              <p className="text-black text-left text-lg font-medium px-6 ">
                Email
              </p>
              <p className="text-black text-left text-lg font-semibold px-6 py-2 rounded-xl bg-[#B5E5DB] ">
                Test
              </p>
            </div>
            <div className="flex flex-col w-full">
              <p className="text-black text-left text-lg font-medium px-6 ">
                Nomor Whatsapp
              </p>
              <p className="text-black text-left text-lg font-semibold px-6 py-2 rounded-xl bg-[#B5E5DB] ">
                Test
              </p>
            </div>
            <div className="flex flex-col w-full ">
              <p className="text-black text-left text-lg font-medium px-6 ">
                Pas Foto 3x4
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
function TeamMember({ role }: { role: string }) {
  return (
    <div className="mt-4 flex flex-col gap-2" id={role.toLowerCase()}>
      <p className="text-ciaGreen text-lg font-semibold">{role}</p>
      {/* Konten dinamis untuk setiap anggota */}
      <div className="flex flex-col w-full">
        <p className="text-black text-left text-lg font-medium px-6 ">
          Nama Lengkap
        </p>
        <p className="text-black text-left text-lg font-semibold px-6 py-2 rounded-xl bg-[#B5E5DB] ">
          Test
        </p>
      </div>
      <div className="flex flex-col w-full">
        <p className="text-black text-left text-lg font-medium px-6 ">NIM</p>
        <p className="text-black text-left text-lg font-semibold px-6 py-2 rounded-xl bg-[#B5E5DB] ">
          Test
        </p>
      </div>
      <div className="flex flex-col w-full">
        <p className="text-black text-left text-lg font-medium px-6 ">
          Semester
        </p>
        <p className="text-black text-left text-lg font-semibold px-6 py-2 rounded-xl bg-[#B5E5DB] ">
          Test
        </p>
      </div>
      <div className="flex flex-col w-full">
        <p className="text-black text-left text-lg font-medium px-6 ">Email</p>
        <p className="text-black text-left text-lg font-semibold px-6 py-2 rounded-xl bg-[#B5E5DB] ">
          Test
        </p>
      </div>
      <div className="flex flex-col w-full">
        <p className="text-black text-left text-lg font-medium px-6 ">
          Nomor Whatsapp
        </p>
        <p className="text-black text-left text-lg font-semibold px-6 py-2 rounded-xl bg-[#B5E5DB] ">
          Test
        </p>
      </div>
      <div className="flex flex-col w-full">
        <p className="text-black text-left text-lg font-medium px-6 ">
          Link Bukti Upload Twibbon
        </p>
        <p className="text-black text-left text-lg font-semibold px-6 py-2 rounded-xl bg-[#B5E5DB] ">
          Test
        </p>
      </div>
      <div className="flex flex-col w-full ">
        <p className="text-black text-left text-lg font-medium px-6 ">
          Surat Keterangan Mahasiswa Aktif
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
      <div className="flex flex-col w-full ">
        <p className="text-black text-left text-lg font-medium px-6 ">
          Kartu Tanda Mahasiswa
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
      <div className="flex flex-col w-full ">
        <p className="text-black text-left text-lg font-medium px-6 ">
          Pas Foto 3x4
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
      {/* Tambahkan konten lain untuk setiap anggota di sini */}
    </div>
  );
}
