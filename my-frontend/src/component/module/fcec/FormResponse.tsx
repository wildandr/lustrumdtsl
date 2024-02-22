"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import axios from "axios";
import Cookies from "js-cookie";

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
  nim: string | null;
  semester: string | null;
}
interface Leader {
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
  nim: string | null;
  semester: string | null;
}

interface Fcec {
  team_id: number;
  originality_statement: string;
  abstract_title: string;
  abstract_file: string;
  abstract_video_link: string;
}

interface TeamData {
  team: Team[];
  leader: Member;
  members: Member[];
  fcec: Fcec[];
}
export default function DetailUser({ params }: { params: any }) {
  const [teamData, setTeamData] = useState<TeamData>({
    team: [],
    leader: {} as Leader,
    members: [],
    fcec: [],
  });
  const token = Cookies.get("token");

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_BASE_URL}/teams/fcec/${params.id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(response.data);
      setTeamData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="bg-[#058369] h-[400vh] font-LibreBaskerville">
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
                {teamData.team[0]?.email || ""}
              </p>
            </div>
            <div className="flex flex-col w-full">
              <p className="text-black text-left text-lg font-medium px-6 ">
                Nama Tim
              </p>
              <p className="text-black text-left text-lg font-semibold px-6 py-2 rounded-xl bg-[#B5E5DB] ">
                {teamData?.team[0]?.team_name || ""}
              </p>
            </div>
            <div className="flex flex-col w-full">
              <p className="text-black text-left text-lg font-medium px-6 ">
                Asal Sekolah
              </p>
              <p className="text-black text-left text-lg font-semibold px-6 py-2 rounded-xl bg-[#B5E5DB] ">
                {teamData.team[0]?.institution_name || ""}
              </p>
            </div>
            <div className="flex flex-col w-full">
              <p className="text-black text-left text-lg font-medium px-6 ">
                Judul Abstrak
              </p>
              <p className="text-black text-left text-lg font-semibold px-6 py-2 rounded-xl bg-[#B5E5DB] ">
                {teamData.fcec[0]?.abstract_title || ""}
              </p>
            </div>
            <div className="flex flex-col w-full">
              <p className="text-black text-left text-lg font-medium px-6 ">
                File Abstrak
              </p>
              <div className=" px-6 py-2 rounded-xl bg-[#B5E5DB] ">
                <a
                  className="text-blue-500 underline text-left text-lg font-semibold  "
                  href={`${teamData.fcec[0]?.abstract_file || ""}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {teamData.fcec[0]?.abstract_file || ""}
                </a>
              </div>
            </div>
            <div className="flex flex-col w-full">
              <p className="text-black text-left text-lg font-medium px-6 ">
                Link Video Abstrak
              </p>
              <p className="text-black text-left text-lg font-semibold px-6 py-2 rounded-xl bg-[#B5E5DB] ">
                {teamData.fcec[0]?.abstract_video_link || ""}
              </p>
            </div>

            <div className="flex flex-col w-full">
              <p className="text-black text-left text-lg font-medium px-6 ">
                Surat Pernyataan Orisinalitas
              </p>
              <div className=" px-6 py-2 rounded-xl bg-[#B5E5DB] ">
                <a
                  className="text-blue-500 underline text-left text-lg font-semibold  "
                  href={`${teamData.fcec[0]?.originality_statement || ""}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {teamData.fcec[0]?.originality_statement || ""}
                </a>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-full">
            <div className="mt-4 flex flex-col gap-2">
              <p className="text-ciaGreen text-lg font-semibold">Ketua</p>
              {/* Konten dinamis untuk setiap anggota */}
              <div className="flex flex-col w-full">
                <p className="text-black text-left text-lg font-medium px-6 ">
                  Nama Lengkap
                </p>
                <p className="text-black text-left text-lg font-semibold px-6 py-2 rounded-xl bg-[#B5E5DB] ">
                  {teamData.leader.full_name || ""}
                </p>
              </div>
              <div className="flex flex-col w-full">
                <p className="text-black text-left text-lg font-medium px-6 ">
                  NIM
                </p>
                <p className="text-black text-left text-lg font-semibold px-6 py-2 rounded-xl bg-[#B5E5DB] ">
                  {teamData.leader.nim || ""}
                </p>
              </div>
              <div className="flex flex-col w-full">
                <p className="text-black text-left text-lg font-medium px-6 ">
                  Email
                </p>
                <p className="text-black text-left text-lg font-semibold px-6 py-2 rounded-xl bg-[#B5E5DB] ">
                  {teamData.leader.email || ""}
                </p>
              </div>
              <div className="flex flex-col w-full">
                <p className="text-black text-left text-lg font-medium px-6 ">
                  ID Line
                </p>
                <p className="text-black text-left text-lg font-semibold px-6 py-2 rounded-xl bg-[#B5E5DB] ">
                  {teamData.leader.line_id || ""}
                </p>
              </div>
              <div className="flex flex-col w-full">
                <p className="text-black text-left text-lg font-medium px-6 ">
                  Nomor Whatsapp
                </p>
                <p className="text-black text-left text-lg font-semibold px-6 py-2 rounded-xl bg-[#B5E5DB] ">
                  {teamData.leader.phone_number || ""}
                </p>
              </div>
              <div className="flex flex-col w-full">
                <p className="text-black text-left text-lg font-medium px-6 ">
                  Link Bukti Upload Twibbon
                </p>
                <div className=" px-6 py-2 rounded-xl bg-[#B5E5DB] ">
                <a
                  className="text-blue-500 underline text-left text-lg font-semibold  "
                  href={`${teamData.leader?.twibbon_and_poster_link || ""}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {teamData.leader?.twibbon_and_poster_link || ""}
                </a>
              </div>
              </div>
              <div className="flex flex-col w-full">
                <p className="text-black text-left text-lg font-medium px-6 ">
                  Kartu Identitas
                </p>
                <div className=" px-6 py-2 rounded-xl bg-[#B5E5DB] ">
                <a
                  className="text-blue-500 underline text-left text-lg font-semibold  "
                  href={`${teamData.leader?.ktm || ""}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {teamData.leader?.ktm|| ""}
                </a>
              </div>
              </div>
              <div className="flex flex-col w-full">
                <p className="text-black text-left text-lg font-medium px-6 ">
                  Surat Keterangan Siswa Aktif
                </p>
                <div className=" px-6 py-2 rounded-xl bg-[#B5E5DB] ">
                <a
                  className="text-blue-500 underline text-left text-lg font-semibold  "
                  href={`${teamData.leader?.active_student_letter || ""}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {teamData.leader?.active_student_letter|| ""}
                </a>
              </div>
              </div>
              <div className="flex flex-col w-full">
                <p className="text-black text-left text-lg font-medium px-6 ">
                  Pas Foto 3x4
                </p>
                <div className=" px-6 py-2 rounded-xl bg-[#B5E5DB] ">
                <a
                  className="text-blue-500 underline text-left text-lg font-semibold  "
                  href={`${teamData.leader?.photo || ""}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {teamData.leader?.photo|| ""}
                </a>
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
                  Email
                </p>
                <p className="text-black text-left text-lg font-semibold px-6 py-2 rounded-xl bg-[#B5E5DB] ">
                  {teamData.members[0]?.email || ""}
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
                  Nomor Whatsapp
                </p>
                <p className="text-black text-left text-lg font-semibold px-6 py-2 rounded-xl bg-[#B5E5DB] ">
                  {teamData.members[0]?.phone_number || ""}
                </p>
              </div>
              <div className="flex flex-col w-full">
                <p className="text-black text-left text-lg font-medium px-6 ">
                  Link Bukti Upload Twibbon
                </p>
                <div className=" px-6 py-2 rounded-xl bg-[#B5E5DB] ">
                <a
                  className="text-blue-500 underline text-left text-lg font-semibold  "
                  href={`${teamData.members[0]?.twibbon_and_poster_link || ""}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {teamData.members[0]?.twibbon_and_poster_link || ""}
                </a>
              </div>
              </div>
              <div className="flex flex-col w-full">
                <p className="text-black text-left text-lg font-medium px-6 ">
                  Kartu Identitas
                </p>
                <div className=" px-6 py-2 rounded-xl bg-[#B5E5DB] ">
                <a
                  className="text-blue-500 underline text-left text-lg font-semibold  "
                  href={`${teamData.members[0]?.ktm || ""}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {teamData.members[0]?.ktm|| ""}
                </a>
              </div>
              </div>
              <div className="flex flex-col w-full">
                <p className="text-black text-left text-lg font-medium px-6 ">
                  Surat Keterangan Siswa Aktif
                </p>
                <div className=" px-6 py-2 rounded-xl bg-[#B5E5DB] ">
                <a
                  className="text-blue-500 underline text-left text-lg font-semibold  "
                  href={`${teamData.members[0]?.active_student_letter || ""}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {teamData.members[0]?.active_student_letter|| ""}
                </a>
              </div>
              </div>
              <div className="flex flex-col w-full">
                <p className="text-black text-left text-lg font-medium px-6 ">
                  Pas Foto 3x4
                </p>
                <div className=" px-6 py-2 rounded-xl bg-[#B5E5DB] ">
                <a
                  className="text-blue-500 underline text-left text-lg font-semibold  "
                  href={`${teamData.members[0]?.photo || ""}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {teamData.members[0]?.photo|| ""}
                </a>
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
                  Email
                </p>
                <p className="text-black text-left text-lg font-semibold px-6 py-2 rounded-xl bg-[#B5E5DB] ">
                  {teamData.members[1]?.email || ""}
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
                  Nomor Whatsapp
                </p>
                <p className="text-black text-left text-lg font-semibold px-6 py-2 rounded-xl bg-[#B5E5DB] ">
                  {teamData.members[1]?.phone_number || ""}
                </p>
              </div>
              <div className="flex flex-col w-full">
                <p className="text-black text-left text-lg font-medium px-6 ">
                  Link Bukti Upload Twibbon
                </p>
                <div className=" px-6 py-2 rounded-xl bg-[#B5E5DB] ">
                <a
                  className="text-blue-500 underline text-left text-lg font-semibold  "
                  href={`${teamData.members[1]?.twibbon_and_poster_link || ""}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {teamData.members[1]?.twibbon_and_poster_link || ""}
                </a>
              </div>
              </div>
              <div className="flex flex-col w-full">
                <p className="text-black text-left text-lg font-medium px-6 ">
                  Kartu Identitas
                </p>
                <div className=" px-6 py-2 rounded-xl bg-[#B5E5DB] ">
                <a
                  className="text-blue-500 underline text-left text-lg font-semibold  "
                  href={`${teamData.members[1]?.ktm || ""}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {teamData.members[1]?.ktm|| ""}
                </a>
              </div>
              </div>
              <div className="flex flex-col w-full">
                <p className="text-black text-left text-lg font-medium px-6 ">
                  Surat Keterangan Siswa Aktif
                </p>
                <div className=" px-6 py-2 rounded-xl bg-[#B5E5DB] ">
                <a
                  className="text-blue-500 underline text-left text-lg font-semibold  "
                  href={`${teamData.members[1]?.active_student_letter || ""}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {teamData.members[1]?.active_student_letter || ""}
                </a>
                </div>
              </div>
              <div className="flex flex-col w-full">
                <p className="text-black text-left text-lg font-medium px-6 ">
                  Pas Foto 3x4
                </p>
                <div className=" px-6 py-2 rounded-xl bg-[#B5E5DB] ">
                <a
                  className="text-blue-500 underline text-left text-lg font-semibold  "
                  href={`${teamData.members[1]?.photo || ""}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {teamData.members[1]?.photo || ""}
                </a>
                </div>
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

