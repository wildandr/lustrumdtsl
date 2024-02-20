"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import axios from "axios";

interface Team {
  team_id: number;
  event_id: number;
  team_name: string;
  institution_name: string;
  payment_proof: string;
  voucher: string | null;
  user_id: number;
  email: string | null;
  isVerified: number;
}

interface Leader {
  member_id: number;
  team_id: number;
  full_name: string;
  department: string;
  batch: null | string;
  phone_number: string;
  line_id: string;
  email: string;
  ktm: string;
  active_student_letter: string;
  photo: string;
  twibbon_and_poster_link: string;
  is_leader: number;
  nim: null | string;
  semester: null | string;
}

interface Member {
  member_id: number;
  team_id: number;
  full_name: string;
  department: string | null;
  batch: string | null;
  phone_number: string;
  line_id: string;
  email: string;
  ktm: string;
  active_student_letter: string;
  photo: string;
  twibbon_and_poster_link: string;
  is_leader: number;
  nim: string;
  semester: string | null;
}

interface Advisor {
  advisor_id: number;
  team_id: number;
  full_name: string;
  nip: string;
  email: string;
  phone_number: string;
  photo: string;
}

interface Sbc {
  team_id: number;
  bridge_name: string;
}

interface SbcData {
  team: Team[];
  leader: Leader;
  members: Member[];
  dosbim: Advisor[];
  sbc: Sbc[];
}
export default function DetailUser({params}: {params: any}) {
  

  const [teamData, setTeamData] = useState<SbcData>({
    team: [],
    leader: {} as Leader,
    members: [],
    dosbim: [],
    sbc: [],
  });
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE3MDgxMTIzMTAsImV4cCI6MTcxMzI5NjMxMH0.db2v2NM80xLldbtuE3vbEGiQxxTwMN-_ORPa72BdtYY";

  const fetchData = async () => {
    try {
      const response = await axios.get(`http://127.0.0.1:5001/teams/sbc/${params.id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(response.data);
      setTeamData(response.data); // Save data to state
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="bg-[#058369] h-[730vh] font-LibreBaskerville">
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
                {teamData.team[0]?.email || ""}
              </p>
            </div>
            <div className="flex flex-col w-full">
              <p className="text-black text-left text-lg font-medium px-6 ">
                Nama Tim
              </p>
              <p className="text-black text-left text-lg font-semibold px-6 py-2 rounded-xl bg-[#B5E5DB] ">
                {teamData.team[0]?.team_name || ""}
              </p>
            </div>
            <div className="flex flex-col w-full">
              <p className="text-black text-left text-lg font-medium px-6 ">
                Nama Perguruan Tinggi
              </p>
              <p className="text-black text-left text-lg font-semibold px-6 py-2 rounded-xl bg-[#B5E5DB] ">
                {teamData.team[0]?.institution_name || ""}
              </p>
            </div>
            <div className="flex flex-col w-full">
              <p className="text-black text-left text-lg font-medium px-6 ">
                Nama Jembatan
              </p>
              <p className="text-black text-left text-lg font-semibold px-6 py-2 rounded-xl bg-[#B5E5DB] ">
                {teamData.sbc[0]?.bridge_name || ""}
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
          <div className="mt-4 flex flex-col gap-2">
            <p className="text-ciaGreen text-lg font-semibold">Ketua</p>

            <div className="flex flex-col w-full">
              <p className="text-black text-left text-lg font-medium px-6 ">
                Nama Lengkap
              </p>
              <p className="text-black text-left text-lg font-semibold px-6 py-2 rounded-xl bg-[#B5E5DB] ">
                {teamData.leader?.full_name || ""}
              </p>
            </div>
            <div className="flex flex-col w-full">
              <p className="text-black text-left text-lg font-medium px-6 ">
                NIM
              </p>
              <p className="text-black text-left text-lg font-semibold px-6 py-2 rounded-xl bg-[#B5E5DB] ">
                {teamData.leader?.nim || ""}
              </p>
            </div>
            <div className="flex flex-col w-full">
              <p className="text-black text-left text-lg font-medium px-6 ">
                Semester
              </p>
              <p className="text-black text-left text-lg font-semibold px-6 py-2 rounded-xl bg-[#B5E5DB] ">
                {teamData.leader?.semester || ""}
              </p>
            </div>
            <div className="flex flex-col w-full">
              <p className="text-black text-left text-lg font-medium px-6 ">
                Email
              </p>
              <p className="text-black text-left text-lg font-semibold px-6 py-2 rounded-xl bg-[#B5E5DB] ">
                {teamData.leader?.email || ""}
              </p>
            </div>
            <div className="flex flex-col w-full">
              <p className="text-black text-left text-lg font-medium px-6 ">
                Nomor Whatsapp
              </p>
              <p className="text-black text-left text-lg font-semibold px-6 py-2 rounded-xl bg-[#B5E5DB] ">
                {teamData.leader?.phone_number || ""}
              </p>
            </div>
            <div className="flex flex-col w-full">
              <p className="text-black text-left text-lg font-medium px-6 ">
                ID Line
              </p>
              <p className="text-black text-left text-lg font-semibold px-6 py-2 rounded-xl bg-[#B5E5DB] ">
                {teamData.leader?.line_id || ""}
              </p>
            </div>
            <div className="flex flex-col w-full">
              <p className="text-black text-left text-lg font-medium px-6 ">
                Link Bukti Upload Twibbon
              </p>
              <p className="text-black text-left text-lg font-semibold px-6 py-2 rounded-xl bg-[#B5E5DB] ">
                {teamData.leader?.twibbon_and_poster_link || ""}
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
          </div>
          <div className="mt-4 flex flex-col gap-2">
            <p className="text-ciaGreen text-lg font-semibold">Anggota 1</p>

            <div className="flex flex-col w-full">
              <p className="text-black text-left text-lg font-medium px-6 ">
                Nama Lengkap
              </p>
              <p className="text-black text-left text-lg font-semibold px-6 py-2 rounded-xl bg-[#B5E5DB] ">
                {teamData.members[0]?.full_name || ""}
              </p>
            </div>
            <div className="flex flex-col w-full">
              <p className="text-black text-left text-lg font-medium px-6 ">
                NIM
              </p>
              <p className="text-black text-left text-lg font-semibold px-6 py-2 rounded-xl bg-[#B5E5DB] ">
                {teamData.members[0]?.nim || ""}
              </p>
            </div>
            <div className="flex flex-col w-full">
              <p className="text-black text-left text-lg font-medium px-6 ">
                Semester
              </p>
              <p className="text-black text-left text-lg font-semibold px-6 py-2 rounded-xl bg-[#B5E5DB] ">
                {teamData.members[0]?.semester || ""}
              </p>
            </div>
            <div className="flex flex-col w-full">
              <p className="text-black text-left text-lg font-medium px-6 ">
                Email
              </p>
              <p className="text-black text-left text-lg font-semibold px-6 py-2 rounded-xl bg-[#B5E5DB] ">
                {teamData.members[0]?.email || ""}
              </p>
            </div>
            <div className="flex flex-col w-full">
              <p className="text-black text-left text-lg font-medium px-6 ">
                Nomor Whatsapp
              </p>
              <p className="text-black text-left text-lg font-semibold px-6 py-2 rounded-xl bg-[#B5E5DB] ">
                {teamData.members[0]?.phone_number || ""}
              </p>
            </div>
            <div className="flex flex-col w-full">
              <p className="text-black text-left text-lg font-medium px-6 ">
                ID Line
              </p>
              <p className="text-black text-left text-lg font-semibold px-6 py-2 rounded-xl bg-[#B5E5DB] ">
                {teamData.members[0]?.line_id || ""}
              </p>
            </div>
            <div className="flex flex-col w-full">
              <p className="text-black text-left text-lg font-medium px-6 ">
                Link Bukti Upload Twibbon
              </p>
              <p className="text-black text-left text-lg font-semibold px-6 py-2 rounded-xl bg-[#B5E5DB] ">
                {teamData.members[0]?.twibbon_and_poster_link || ""}
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
          </div>
          <div className="mt-4 flex flex-col gap-2">
            <p className="text-ciaGreen text-lg font-semibold">Anggota 2</p>

            <div className="flex flex-col w-full">
              <p className="text-black text-left text-lg font-medium px-6 ">
                Nama Lengkap
              </p>
              <p className="text-black text-left text-lg font-semibold px-6 py-2 rounded-xl bg-[#B5E5DB] ">
                {teamData.members[1]?.full_name || ""}
              </p>
            </div>
            <div className="flex flex-col w-full">
              <p className="text-black text-left text-lg font-medium px-6 ">
                NIM
              </p>
              <p className="text-black text-left text-lg font-semibold px-6 py-2 rounded-xl bg-[#B5E5DB] ">
                {teamData.members[1]?.nim || ""}
              </p>
            </div>
            <div className="flex flex-col w-full">
              <p className="text-black text-left text-lg font-medium px-6 ">
                Semester
              </p>
              <p className="text-black text-left text-lg font-semibold px-6 py-2 rounded-xl bg-[#B5E5DB] ">
                {teamData.members[1]?.semester || ""}
              </p>
            </div>
            <div className="flex flex-col w-full">
              <p className="text-black text-left text-lg font-medium px-6 ">
                Email
              </p>
              <p className="text-black text-left text-lg font-semibold px-6 py-2 rounded-xl bg-[#B5E5DB] ">
                {teamData.members[1]?.email || ""}
              </p>
            </div>
            <div className="flex flex-col w-full">
              <p className="text-black text-left text-lg font-medium px-6 ">
                Nomor Whatsapp
              </p>
              <p className="text-black text-left text-lg font-semibold px-6 py-2 rounded-xl bg-[#B5E5DB] ">
                {teamData.members[1]?.phone_number || ""}
              </p>
            </div>
            <div className="flex flex-col w-full">
              <p className="text-black text-left text-lg font-medium px-6 ">
                ID Line
              </p>
              <p className="text-black text-left text-lg font-semibold px-6 py-2 rounded-xl bg-[#B5E5DB] ">
                {teamData.members[1]?.line_id || ""}
              </p>
            </div>
            <div className="flex flex-col w-full">
              <p className="text-black text-left text-lg font-medium px-6 ">
                Link Bukti Upload Twibbon
              </p>
              <p className="text-black text-left text-lg font-semibold px-6 py-2 rounded-xl bg-[#B5E5DB] ">
                {teamData.members[1]?.twibbon_and_poster_link || ""}
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
                {teamData.dosbim[0]?.full_name || ""}
              </p>
            </div>
            <div className="flex flex-col w-full">
              <p className="text-black text-left text-lg font-medium px-6 ">
                NIP
              </p>
              <p className="text-black text-left text-lg font-semibold px-6 py-2 rounded-xl bg-[#B5E5DB] ">
                {teamData.dosbim[0]?.nip || ""}
              </p>
            </div>
            <div className="flex flex-col w-full">
              <p className="text-black text-left text-lg font-medium px-6 ">
                Email
              </p>
              <p className="text-black text-left text-lg font-semibold px-6 py-2 rounded-xl bg-[#B5E5DB] ">
                {teamData.dosbim[0]?.email || ""}
              </p>
            </div>
            <div className="flex flex-col w-full">
              <p className="text-black text-left text-lg font-medium px-6 ">
                Nomor Whatsapp
              </p>
              <p className="text-black text-left text-lg font-semibold px-6 py-2 rounded-xl bg-[#B5E5DB] ">
                {teamData.dosbim[0]?.phone_number || ""}
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
