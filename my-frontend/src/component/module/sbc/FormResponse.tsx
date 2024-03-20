"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import JSZip from "jszip";
import { parse } from "json2csv";
import { useRouter } from "next/navigation";

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
export default function DetailUser({ params }: { params: any }) {
  const [teamData, setTeamData] = useState<SbcData>({
    team: [],
    leader: {} as Leader,
    members: [],
    dosbim: [],
    sbc: [],
  });
  const token = Cookies.get("token");
  const [isAdmin, setIsAdmin] = useState<boolean>(false);
  const router = useRouter();
  const handleBack = () => {
    router.back();
  };

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_BASE_URL}/teams/sbc/${params.id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setTeamData(response.data); // Save data to state
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    const checkAdmin = () => {
      const adminCookie = Cookies.get("isAdmin");
      setIsAdmin(adminCookie === "true"); // Set nilai isAdmin berdasarkan cookie
    };
    fetchData();
    checkAdmin();
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

  async function downloadFilesAsZip() {

    const zip = new JSZip();
    
    const membersData = teamData.members.map((member: any) => ({
      Nama_Lengkap: member.full_name || "",
      Departemen: member.department || "",
      Batch: member.batch || "",
      Nomor_Whatsapp: member.phone_number || "",
      ID_Line: member.line_id || "",
      Email: member.email || "",
      KTM: member.ktm || "",
      Nim: member.nim || "",
      Semester: member.semester || "",
      Surat_Keterangan_Siswa_Aktif: member.active_student_letter || "",
      Pas_Foto_3x4: member.photo || "",
      Link_Bukti_Upload_Twibbon: member.twibbon_and_poster_link || "",
    }));
    const advisorData = teamData.dosbim.map((advisor: any) => ({
      Nama_Lengkap: advisor.full_name || "",
      NIP: advisor.nip || "",
      Email: advisor.email || "",
      Nomor_Whatsapp: advisor.phone_number || "",
      Pas_Foto_3x4: advisor.photo || "",
    }));

    const fieldsData = {
      Nama_Tim: teamData.team[0]?.team_name,
      Institusi: teamData.team[0]?.institution_name,
      Nama_Lengkap: teamData.leader.full_name || "",
      Nama_Jembatan: teamData.sbc[0]?.bridge_name || "",
      Departemen: teamData.leader.department || "",
      Batch: teamData.leader.batch || "",
      Nomor_Whatsapp: teamData.leader.phone_number || "",
      ID_Line: teamData.leader.line_id || "",
      Email: teamData.leader.email || "",
      KTM: teamData.leader.ktm || "",
      Surat_Keterangan_Siswa_Aktif: teamData.leader.active_student_letter || "",
      Pas_Foto_3x4: teamData.leader.photo || "",
      Link_Bukti_Upload_Twibbon: teamData.leader.twibbon_and_poster_link || "",
      payment_proof: teamData.team[0]?.payment_proof,
      voucher: teamData.team[0]?.voucher || "",
    };

    const allData = [fieldsData, ...membersData, ...advisorData];

    // Convert data to CSV
    const combinedCsv = parse(allData, { fields: Object.keys(fieldsData) });
    zip.file("data_all.csv", combinedCsv);

    const { ktm, active_student_letter, photo } = teamData.leader;
    if (ktm && active_student_letter && photo) {
      const ktmData = await downloadFile(ktm);
      const activeStudentLetterData = await downloadFile(active_student_letter);
      const photoData = await downloadFile(photo);

      zip.file(ktm.split("/").pop() ?? "ktm_default_name", ktmData);
      zip.file(
        active_student_letter.split("/").pop() ??
          "active_student_letter_default_name",
        activeStudentLetterData
      );
      zip.file(photo.split("/").pop() ?? "photo_default_name", photoData);
    }

    // For team members
    for (const member of teamData.members) {
      const { ktm, active_student_letter, photo } = member;

      if (ktm && active_student_letter && photo) {
        const ktmData = await downloadFile(ktm);
        const activeStudentLetterData = await downloadFile(
          active_student_letter
        );
        const photoData = await downloadFile(photo);

        zip.file(ktm.split("/").pop() ?? "ktm_default_name", ktmData);
        zip.file(
          active_student_letter.split("/").pop() ??
            "active_student_letter_default_name",
          activeStudentLetterData
        );
        zip.file(photo.split("/").pop() ?? "photo_default_name", photoData);
      }
    }

    // For advisor
    for (const advisor of teamData.dosbim) {
      const { photo } = advisor;

      if (photo) {
        const photoData = await downloadFile(photo);
        zip.file(photo.split("/").pop() ?? "photo_default_name", photoData);
      }
    }
    zip.generateAsync({ type: "blob" }).then(function (content: Blob) {
      const url = window.URL.createObjectURL(content);
      const link = document.createElement("a");
      link.href = url;
      link.download = "files.zip";
      link.click();
      window.URL.revokeObjectURL(url);
    });
  }
  return (
    <div className="bg-[#058369] h-[520vh] font-LibreBaskerville">
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
              <p className="text-black text-left text-lg font-medium px-6">
                Bukti Pembayaran
              </p>
              <div className="px-6 py-2 rounded-xl bg-[#B5E5DB]">
                {teamData.team[0]?.payment_proof && (
                  /\.(jpg|jpeg|png|gif)$/.test(teamData.team[0].payment_proof) ? (
                    <Image
                      src={`${teamData.team[0]?.payment_proof}`}
                      alt="foto"
                      width={500}
                      height={500}
                      className="max-w-[1080px] z-10"
                    />
                  ) : (
                    <a
                      href={`${teamData.team[0]?.payment_proof}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 underline text-lg font-semibold"
                    >
                      Lihat Bukti Pembayaran
                    </a>
                  )
                )}
              </div>
            </div>

            <div className="flex flex-col w-full mt-5">
              <p className="text-black text-left text-lg font-medium px-6 ">
                Bukti Voucher
              </p>
              <div className=" px-6 py-2 rounded-xl bg-[#B5E5DB] ">
                {teamData.team[0]?.voucher && (
                  <Image
                    src={`${teamData.team[0]?.voucher}`}
                    alt="foto"
                    width={500}
                    height={500}
                    className="max-w-[1080px] z-10"
                  />
                )}
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
            <div className="flex flex-col w-full ">
              <p className="text-black text-left text-lg font-medium px-6 ">
                Surat Keterangan Mahasiswa Aktif
              </p>
              <div className="px-6 py-2 rounded-xl bg-[#B5E5DB]">
                {teamData.leader?.active_student_letter &&
                  (teamData.leader?.active_student_letter.endsWith(".jpg") ||
                  teamData.leader?.active_student_letter.endsWith(".jpeg") ||
                  teamData.leader?.active_student_letter.endsWith(".png") ? (
                    <Image
                      src={`${teamData.leader?.active_student_letter}`}
                      alt="foto"
                      width={500}
                      height={500}
                      className="max-w-[1080px] z-10"
                    />
                  ) : (
                    <a
                      className="text-blue-500 underline text-left text-lg font-semibold"
                      href={`${teamData.leader?.active_student_letter}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {teamData.leader?.active_student_letter || ""}
                    </a>
                  ))}
              </div>
            
            </div>
            <div className="flex flex-col w-full ">
              <p className="text-black text-left text-lg font-medium px-6 ">
                Kartu Tanda Mahasiswa
              </p>
              <div className="px-6 py-2 rounded-xl bg-[#B5E5DB]">
                {teamData.leader?.ktm &&
                  (teamData.leader?.ktm.endsWith(".jpg") ||
                  teamData.leader?.ktm.endsWith(".jpeg") ||
                  teamData.leader?.ktm.endsWith(".png") ? (
                    <Image
                      src={`${teamData.leader?.ktm}`}
                      alt="foto"
                      width={500}
                      height={500}
                      className="max-w-[1080px] z-10"
                    />
                  ) : (
                    <a
                      className="text-blue-500 underline text-left text-lg font-semibold"
                      href={`${teamData.leader?.ktm}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {teamData.leader?.ktm || ""}
                    </a>
                  ))}
              </div>
             
            </div>
            <div className="flex flex-col w-full ">
              <p className="text-black text-left text-lg font-medium px-6 ">
                Pas Foto 3x4
              </p>
               <div className="px-6 py-2 rounded-xl bg-[#B5E5DB]">
                {teamData.leader?.photo &&
                  (teamData.leader?.photo.endsWith(".jpg") ||
                  teamData.leader?.photo.endsWith(".jpeg") ||
                  teamData.leader?.photo.endsWith(".png") ? (
                    <Image
                      src={`${teamData.leader?.photo}`}
                      alt="foto"
                      width={500}
                      height={500}
                      className="max-w-[1080px] z-10"
                    />
                  ) : (
                    <a
                      className="text-blue-500 underline text-left text-lg font-semibold"
                      href={`${teamData.leader?.photo}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {teamData.leader?.photo || ""}
                    </a>
                  ))}
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
            <div className="flex flex-col w-full ">
              <p className="text-black text-left text-lg font-medium px-6 ">
                Surat Keterangan Mahasiswa Aktif
              </p>
              <div className="px-6 py-2 rounded-xl bg-[#B5E5DB]">
                {teamData.members[0]?.active_student_letter &&
                  (teamData.members[0]?.active_student_letter.endsWith(".jpg") ||
                  teamData.members[0]?.active_student_letter.endsWith(".jpeg") ||
                  teamData.members[0]?.active_student_letter.endsWith(".png") ? (
                    <Image
                      src={`${teamData.members[0]?.active_student_letter}`}
                      alt="foto"
                      width={500}
                      height={500}
                      className="max-w-[1080px] z-10"
                    />
                  ) : (
                    <a
                      className="text-blue-500 underline text-left text-lg font-semibold"
                      href={`${teamData.members[0]?.active_student_letter}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {teamData.members[0]?.active_student_letter || ""}
                    </a>
                  ))}
              </div>
            </div>
            <div className="flex flex-col w-full ">
              <p className="text-black text-left text-lg font-medium px-6 ">
                Kartu Tanda Mahasiswa
              </p>
              <div className="px-6 py-2 rounded-xl bg-[#B5E5DB]">
                {teamData.members[0]?.ktm &&
                  (teamData.members[0]?.ktm.endsWith(".jpg") ||
                  teamData.members[0]?.ktm.endsWith(".jpeg") ||
                  teamData.members[0]?.ktm.endsWith(".png") ? (
                    <Image
                      src={`${teamData.members[0]?.ktm}`}
                      alt="foto"
                      width={500}
                      height={500}
                      className="max-w-[1080px] z-10"
                    />
                  ) : (
                    <a
                      className="text-blue-500 underline text-left text-lg font-semibold"
                      href={`${teamData.members[0]?.ktm}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {teamData.members[0]?.ktm || ""}
                    </a>
                  ))}
              </div>
             
            </div>
            <div className="flex flex-col w-full">
              <p className="text-black text-left text-lg font-medium px-6">
                Pas Foto 3x4
              </p>
              <div className="px-6 py-2 rounded-xl bg-[#B5E5DB]">
                {teamData.members[0]?.photo &&
                  (teamData.members[0]?.photo.endsWith(".jpg") ||
                  teamData.members[0]?.photo.endsWith(".jpeg") ||
                  teamData.members[0]?.photo.endsWith(".png") ? (
                    <Image
                      src={`${teamData.members[0]?.photo}`}
                      alt="foto"
                      width={500}
                      height={500}
                      className="max-w-[1080px] z-10"
                    />
                  ) : (
                    <a
                      className="text-blue-500 underline text-left text-lg font-semibold"
                      href={`${teamData.members[0]?.photo}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {teamData.members[0]?.photo || ""}
                    </a>
                  ))}
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
            <div className="flex flex-col w-full ">
              <p className="text-black text-left text-lg font-medium px-6 ">
                Surat Keterangan Mahasiswa Aktif
              </p>
              <div className="px-6 py-2 rounded-xl bg-[#B5E5DB]">
                {teamData.members[1]?.active_student_letter &&
                  (teamData.members[1]?.active_student_letter.endsWith(".jpg") ||
                  teamData.members[1]?.active_student_letter.endsWith(".jpeg") ||
                  teamData.members[1]?.active_student_letter.endsWith(".png") ? (
                    <Image
                      src={`${teamData.members[1]?.active_student_letter}`}
                      alt="foto"
                      width={500}
                      height={500}
                      className="max-w-[1080px] z-10"
                    />
                  ) : (
                    <a
                      className="text-blue-500 underline text-left text-lg font-semibold"
                      href={`${teamData.members[1]?.active_student_letter}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {teamData.members[1]?.active_student_letter || ""}
                    </a>
                  ))}
              </div>
              
            </div>
            <div className="flex flex-col w-full ">
              <p className="text-black text-left text-lg font-medium px-6 ">
                Kartu Tanda Mahasiswa
              </p>
              <div className="px-6 py-2 rounded-xl bg-[#B5E5DB]">
                {teamData.members[1]?.ktm &&
                  (teamData.members[1]?.ktm.endsWith(".jpg") ||
                  teamData.members[1]?.ktm.endsWith(".jpeg") ||
                  teamData.members[1]?.ktm.endsWith(".png") ? (
                    <Image
                      src={`${teamData.members[1]?.ktm}`}
                      alt="foto"
                      width={500}
                      height={500}
                      className="max-w-[1080px] z-10"
                    />
                  ) : (
                    <a
                      className="text-blue-500 underline text-left text-lg font-semibold"
                      href={`${teamData.members[1]?.ktm}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {teamData.members[1]?.ktm || ""}
                    </a>
                  ))}
              </div>
            
            </div>
            <div className="flex flex-col w-full">
              <p className="text-black text-left text-lg font-medium px-6 ">
                Pas Foto 3x4
              </p>
              <div className="px-6 py-2 rounded-xl bg-[#B5E5DB]">
                {teamData.members[1]?.photo &&
                  (teamData.members[1]?.photo.endsWith(".jpg") ||
                  teamData.members[1]?.photo.endsWith(".jpeg") ||
                  teamData.members[1]?.photo.endsWith(".png") ? (
                    <Image
                      src={`${teamData.members[1]?.photo}`}
                      alt="foto"
                      width={500}
                      height={500}
                      className="max-w-[1080px] z-10"
                    />
                  ) : (
                    <a
                      className="text-blue-500 underline text-left text-lg font-semibold"
                      href={`${teamData.members[1]?.photo}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {teamData.members[1]?.photo || ""}
                    </a>
                  ))}
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
              <div className="px-6 py-2 rounded-xl bg-[#B5E5DB]">
                {teamData.dosbim[0]?.photo &&
                  (teamData.dosbim[0]?.photo.endsWith(".jpg") ||
                  teamData.dosbim[0]?.photo.endsWith(".jpeg") ||
                  teamData.dosbim[0]?.photo.endsWith(".png") ? (
                    <Image
                      src={`${teamData.dosbim[0]?.photo}`}
                      alt="foto"
                      width={500}
                      height={500}
                      className="max-w-[1080px] z-10"
                    />
                  ) : (
                    <a
                      className="text-blue-500 underline text-left text-lg font-semibold"
                      href={`${teamData.dosbim[0]?.photo}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {teamData.dosbim[0]?.photo || ""}
                    </a>
                  ))}
              </div>
            
            </div>
          </div>

          <div className="flex justify-end mt-10">
            {isAdmin && (
              <button
                onClick={downloadFilesAsZip}
                className="bg-[#18AB8E] shadow-xl text-white px-6 py-2 rounded-2xl font-sans mr-4"
              >
                Unduh Semua Data
              </button>
            )}

            {/* Tombol untuk kembali jika isAdmin */}
            {!isAdmin && (
              <button
                onClick={handleBack}
                className="bg-[#18AB8E] shadow-xl text-white px-6 py-2 rounded-2xl font-sans"
              >
                Kembali
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
