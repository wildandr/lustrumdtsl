"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import JSZip from "jszip";
import { parse } from "json2csv";
import { useRouter } from "next/navigation";

interface Member {
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

interface Team {
  team_id: number;
  event_id: number;
  team_name: string;
  institution_name: string;
  payment_proof: string;
  voucher: null | string;
  user_id: number;
  email: null | string;
  isVerified: number;
}

interface TeamData {
  team: Team[];
  leader: Member;
  members: Member[];
}

export default function DetailUser({ params }: { params: any }) {
  const [teamData, setTeamData] = useState<TeamData>({
    team: [],
    leader: {} as Leader,
    members: [],
  });
  const token = Cookies.get("token");
  const isAdmin = Cookies.get("isAdmin");
  const router = useRouter();
  const handleBack = () => {
    router.back();
  };

  const fetchData = async () => {
    try {
      console.log(params.id);
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_BASE_URL}/teams/cic/${params.id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(response.data);
      setTeamData(response.data); // Save data to state
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  async function downloadFile(url: string) {
    const fullUrl = `${url}`;
    try {
      const response = await axios.get(fullUrl, {
        responseType: "arraybuffer", // this is important
      });
      return response.data;
    } catch (error) {
      console.error(`Error downloading file from ${fullUrl}:`, error);
      return null; // return null or some default value
    }
  }

//   async function downloadFilesAsZip(teamData: TeamData) {
//     try {
//       const zip = new JSZip();
        
//       const leaderData = {
//         Nama_Lengkap: teamData.leader.full_name || '',
//         Departemen: teamData.leader.department || '',
//         Batch: teamData.leader.batch || '',
//         Nomor_Whatsapp: teamData.leader.phone_number || '',
//         ID_Line: teamData.leader.line_id || '',
//         Email: teamData.leader.email || '',
//         KTM: teamData.leader.ktm || '',
//         Nim : teamData.leader.nim || '',
//         Semester : teamData.leader.semester || '',
//         Surat_Keterangan_Mahasiswa_Aktif: teamData.leader.active_student_letter || '',
//         Pas_Foto_3x4: teamData.leader.photo || '',
//         Link_Bukti_Upload_Twibbon: teamData.leader.twibbon_and_poster_link || ''
//     };
//     const membersData = teamData.members.map((member: any) => ({
//         Nama_Lengkap: member.full_name || '',
//         Departemen: member.department || '',
//         Batch: member.batch || '',
//         Nomor_Whatsapp: member.phone_number || '',
//         ID_Line: member.line_id || '',
//         Email: member.email || '',
//         KTM: member.ktm || '',
//         Nim : member.nim || '',
//         Semester : member.semester || '',
//         Surat_Keterangan_Siswa_Aktif: member.active_student_letter || '',
//         Pas_Foto_3x4: member.photo || '',
//         Link_Bukti_Upload_Twibbon: member.twibbon_and_poster_link || ''
//     }));
  
//       // Mengunduh file-file untuk ketua tim dan anggota
//       const leaderPhoto = await downloadFile(leader.photo);
//       const leaderActiveStudentLetter = await downloadFile(
//         leader.active_student_letter
//       );
      
//       // Menambahkan file-file ke dalam ZIP
//       zip.file(`Ketua_${leader.full_name}_Photo.jpg`, leaderPhoto);
//       zip.file(
//         `Ketua_${leader.full_name}_Active_Student_Letter.pdf`,
//         leaderActiveStudentLetter
//       );
//       zip.file
  
//       // Membuat file ZIP
//       const content = await zip.generateAsync({ type: "blob" });
  
//       // Mendownload file ZIP
//       const downloadLink = document.createElement("a");
//       downloadLink.href = URL.createObjectURL(content);
//       downloadLink.download = "Team_Files.zip";
//       downloadLink.click();
//     } catch (error) {
//       console.error("Error downloading files as ZIP:", error);
//     }
//   }

  return (
    <div className="bg-[#058369] h-[430vh] font-LibreBaskerville">
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
                {teamData.team[0]?.email || "Email not available"}
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
            <div className="flex flex-col w-full mt-5">
              <p className="text-black text-left text-lg font-medium px-6 ">
                Bukti Pembayaran
              </p>
              <div className=" px-6 py-2 rounded-xl bg-[#B5E5DB] ">
                <a
                  className="text-blue-500 underline text-left text-lg font-semibold"
                  href={`${teamData.team[0]?.payment_proof || ""}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {teamData.team[0]?.payment_proof || ""}
                </a>
              </div>
            </div>
            <div className="flex flex-col w-full mt-5">
              <p className="text-black text-left text-lg font-medium px-6 ">
                Bukti Voucher
              </p>
              <div className=" px-6 py-2 rounded-xl bg-[#B5E5DB] ">
                <a className="text-blue-500 underline text-left text-lg font-semibold  "
                 href={`${teamData.team[0]?.voucher || ""}`}
                 target="_blank"
                  rel="noopener noreferrer"
                >
                  {teamData.team[0]?.voucher || ""}
                </a>
              </div>
            </div>
          </div>
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
                Semester
              </p>
              <p className="text-black text-left text-lg font-semibold px-6 py-2 rounded-xl bg-[#B5E5DB] ">
                {teamData.leader.semester || ""}
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
                Nomor Whatsapp
              </p>
              <p className="text-black text-left text-lg font-semibold px-6 py-2 rounded-xl bg-[#B5E5DB] ">
                {teamData.leader.phone_number || ""}
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
                Link Bukti Upload Twibbon
              </p>
              <div className=" px-6 py-2 rounded-xl bg-[#B5E5DB] ">
                <a className="text-blue-500 underline text-left text-lg font-semibold  "
                 href={`${teamData.leader.twibbon_and_poster_link || ""}`}
                 target="_blank"
                  rel="noopener noreferrer"
                >
                  {teamData.leader.twibbon_and_poster_link || ""}
                </a>
                </div>
            </div>
            <div className="flex flex-col w-full ">
              <p className="text-black text-left text-lg font-medium px-6 ">
                Surat Keterangan Mahasiswa Aktif
              </p>
              <div className=" px-6 py-2 rounded-xl bg-[#B5E5DB] ">
                <a className="text-blue-500 underline text-left text-lg font-semibold  "
                 href={`${teamData.leader.active_student_letter || ""}`}
                 target="_blank"
                  rel="noopener noreferrer"
                >
                  {teamData.leader.active_student_letter || ""}
                </a>
                </div>
              </div>
            <div className="flex flex-col w-full ">
              <p className="text-black text-left text-lg font-medium px-6 ">
                Kartu Tanda Mahasiswa
              </p>
              <div className=" px-6 py-2 rounded-xl bg-[#B5E5DB] ">
                <a className="text-blue-500 underline text-left text-lg font-semibold  "
                 href={`${teamData.leader.ktm || ""}`}
                 target="_blank"
                  rel="noopener noreferrer"
                >
                  {teamData.leader.ktm|| ""}
                </a>
                </div>
            </div>
            <div className="flex flex-col w-full ">
              <p className="text-black text-left text-lg font-medium px-6 ">
                Pas Foto 3x4
              </p>
                <div className=" px-6 py-2 rounded-xl bg-[#B5E5DB] ">
                    <a className="text-blue-500 underline text-left text-lg font-semibold  "
                     href={`${teamData.leader.photo || ""}`}
                     target="_blank"
                    rel="noopener noreferrer"
                    >
                    {teamData.leader.photo || ""}
                    </a>
                    </div>
            </div>
            {/* Tambahkan konten lain untuk setiap anggota di sini */}
          </div>
          <div className="mt-4 flex flex-col gap-2">
            <p className="text-ciaGreen text-lg font-semibold">Anggota 1</p>
            {/* Konten dinamis untuk setiap anggota */}
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
              <div className=" px-6 py-2 rounded-xl bg-[#B5E5DB] ">
                <a className="text-blue-500 underline text-left text-lg font-semibold  "
                 href={`${teamData.members[0]?.twibbon_and_poster_link || ""}`}
                 target="_blank"
                  rel="noopener noreferrer"
                >
                  {teamData.members[0]?.twibbon_and_poster_link || ""}
                </a>
                </div>
            </div>
            <div className="flex flex-col w-full ">
              <p className="text-black text-left text-lg font-medium px-6 ">
                Surat Keterangan Mahasiswa Aktif
              </p>
              <div className=" px-6 py-2 rounded-xl bg-[#B5E5DB] ">
                <a className="text-blue-500 underline text-left text-lg font-semibold  "
                 href={`${teamData.members[0]?.active_student_letter || ""}`}
                 target="_blank"
                  rel="noopener noreferrer"
                >
                  {teamData.members[0]?.active_student_letter || ""}
                </a>
                </div>
            </div>
            <div className="flex flex-col w-full ">
              <p className="text-black text-left text-lg font-medium px-6 ">
                Kartu Tanda Mahasiswa
              </p>
                <div className=" px-6 py-2 rounded-xl bg-[#B5E5DB] ">
                    <a className="text-blue-500 underline text-left text-lg font-semibold  "
                     href={`${teamData.members[0]?.ktm || ""}`}
                     target="_blank"
                    rel="noopener noreferrer"
                    >
                    {teamData.members[0]?.ktm || ""}
                    </a>
                    </div>
            </div>
            <div className="flex flex-col w-full ">
              <p className="text-black text-left text-lg font-medium px-6 ">
                Pas Foto 3x4
              </p>
                <div className=" px-6 py-2 rounded-xl bg-[#B5E5DB] ">
                    <a className="text-blue-500 underline text-left text-lg font-semibold  "
                     href={`${teamData.members[0]?.photo || ""}`}
                     target="_blank"
                    rel="noopener noreferrer"
                    >
                    {teamData.members[0]?.photo || ""}
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
              <div className=" px-6 py-2 rounded-xl bg-[#B5E5DB] ">
                <a className="text-blue-500 underline text-left text-lg font-semibold  "
                 href={`${teamData.members[1]?.twibbon_and_poster_link || ""}`}
                 target="_blank"
                  rel="noopener noreferrer"
                >
                  {teamData.members[1]?.twibbon_and_poster_link || ""}
                </a>
                </div>
            </div>
            <div className="flex flex-col w-full ">
              <p className="text-black text-left text-lg font-medium px-6 ">
                Surat Keterangan Mahasiswa Aktif
              </p>
              <div className=" px-6 py-2 rounded-xl bg-[#B5E5DB] ">
                <a className="text-blue-500 underline text-left text-lg font-semibold  "
                 href={`${teamData.members[1]?.active_student_letter || ""}`}
                 target="_blank"
                  rel="noopener noreferrer"
                >
                  {teamData.leader.active_student_letter || ""}
                </a>
                </div>
            </div>
            <div className="flex flex-col w-full ">
              <p className="text-black text-left text-lg font-medium px-6 ">
                Kartu Tanda Mahasiswa
              </p>
                <div className=" px-6 py-2 rounded-xl bg-[#B5E5DB] ">
                    <a className="text-blue-500 underline text-left text-lg font-semibold  "
                     href={`${teamData.members[1]?.ktm || ""}`}
                     target="_blank"
                    rel="noopener noreferrer"
                    >
                    {teamData.members[1]?.ktm || ""}
                    </a>
                    </div>
            </div>
            <div className="flex flex-col w-full ">
              <p className="text-black text-left text-lg font-medium px-6 ">
                Pas Foto 3x4
              </p>
                <div className=" px-6 py-2 rounded-xl bg-[#B5E5DB] ">
                    <a className="text-blue-500 underline text-left text-lg font-semibold  "
                     href={`${teamData.members[1]?.photo || ""}`}
                     target="_blank"
                    rel="noopener noreferrer"
                    >
                    {teamData.members[1]?.photo || ""}
                    </a>
                    </div>
            </div>
          </div>
          {teamData.members.length === 3 && (
            <div className="mt-4 flex flex-col gap-2">
              <p className="text-ciaGreen text-lg font-semibold">Anggota 3</p>

              <div className="flex flex-col w-full">
                <p className="text-black text-left text-lg font-medium px-6 ">
                  Nama Lengkap
                </p>
                <p className="text-black text-left text-lg font-semibold px-6 py-2 rounded-xl bg-[#B5E5DB] ">
                  {teamData.members[2]?.full_name || ""}
                </p>
              </div>
              <div className="flex flex-col w-full">
                <p className="text-black text-left text-lg font-medium px-6 ">
                  NIM
                </p>
                <p className="text-black text-left text-lg font-semibold px-6 py-2 rounded-xl bg-[#B5E5DB] ">
                  {teamData.members[2]?.nim || ""}
                </p>
              </div>
              <div className="flex flex-col w-full">
                <p className="text-black text-left text-lg font-medium px-6 ">
                  Semester
                </p>
                <p className="text-black text-left text-lg font-semibold px-6 py-2 rounded-xl bg-[#B5E5DB] ">
                  {teamData.members[2]?.semester || ""}
                </p>
              </div>
              <div className="flex flex-col w-full">
                <p className="text-black text-left text-lg font-medium px-6 ">
                  Email
                </p>
                <p className="text-black text-left text-lg font-semibold px-6 py-2 rounded-xl bg-[#B5E5DB] ">
                  {teamData.members[2]?.email || ""}
                </p>
              </div>
              <div className="flex flex-col w-full">
                <p className="text-black text-left text-lg font-medium px-6 ">
                  Nomor Whatsapp
                </p>
                <p className="text-black text-left text-lg font-semibold px-6 py-2 rounded-xl bg-[#B5E5DB] ">
                  {teamData.members[2]?.phone_number || ""}
                </p>
              </div>
              <div className="flex flex-col w-full">
                <p className="text-black text-left text-lg font-medium px-6 ">
                  ID Line
                </p>
                <p className="text-black text-left text-lg font-semibold px-6 py-2 rounded-xl bg-[#B5E5DB] ">
                  {teamData.members[2]?.line_id || ""}
                </p>
              </div>
              <div className="flex flex-col w-full">
                <p className="text-black text-left text-lg font-medium px-6 ">
                  Link Bukti Upload Twibbon
                </p>
                <div className=" px-6 py-2 rounded-xl bg-[#B5E5DB] ">
                <a className="text-blue-500 underline text-left text-lg font-semibold  "
                 href={`${teamData.members[2]?.twibbon_and_poster_link || ""}`}
                 target="_blank"
                  rel="noopener noreferrer"
                >
                  {teamData.members[2]?.twibbon_and_poster_link || ""}
                </a>
                </div>
              </div>
              <div className="flex flex-col w-full ">
                <p className="text-black text-left text-lg font-medium px-6 ">
                  Surat Keterangan Mahasiswa Aktif
                </p>
                <div className=" px-6 py-2 rounded-xl bg-[#B5E5DB] ">
                <a className="text-blue-500 underline text-left text-lg font-semibold  "
                 href={`${teamData.members[2]?.active_student_letter|| ""}`}
                 target="_blank"
                  rel="noopener noreferrer"
                >
                  {teamData.members[2]?.active_student_letter || ""}
                </a>
                </div>
              </div>
              <div className="flex flex-col w-full ">
                <p className="text-black text-left text-lg font-medium px-6 ">
                  Kartu Tanda Mahasiswa
                </p>
                <div className=" px-6 py-2 rounded-xl bg-[#B5E5DB] ">
                <a className="text-blue-500 underline text-left text-lg font-semibold  "
                 href={`${teamData.members[2]?.ktm || ""}`}
                 target="_blank"
                  rel="noopener noreferrer"
                >
                  {teamData.members[2]?.ktm || ""}
                </a>
                </div>
              </div>
              <div className="flex flex-col w-full ">
                <p className="text-black text-left text-lg font-medium px-6 ">
                  Pas Foto 3x4
                </p>
                <div className=" px-6 py-2 rounded-xl bg-[#B5E5DB] ">
                <a className="text-blue-500 underline text-left text-lg font-semibold  "
                 href={`${teamData.members[2]?.photo || ""}`}
                 target="_blank"
                  rel="noopener noreferrer"
                >
                  {teamData.members[2]?.photo || ""}
                </a>
                </div>
              </div>
            </div>
          )}

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
