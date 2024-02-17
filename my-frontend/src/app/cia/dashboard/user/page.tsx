"use client"

import Image from "next/image";

export default function DashboardUser() {
    const registrations = [
        { nama: "Wildan Dzaky", event: "SBC", status: "Menunggu Konfirmasi" },
        { nama: "Wildan Dzaky", event: "SBC", status: "Pendaftaran Belum Berhasil" },
        { nama: "Wildan Dzaky", event: "SBC", status: "Pendaftaran Belum Berhasil" },
        { nama: "Wildan Dzaky", event: "SBC", status: "Pendaftaran Belum Berhasil" },
      
      ];
      
      const length = registrations.length;
      
    return (
        <div className={`bg-[#058369]  max-[385px]:h-[150vh] ${length === 3? "h-[120vh] lg:h-[100vh]" :"h-[100vh]"} ${length === 4 ? "h-[130vh]  max-[385px]:h-[170vh] lg:h-[100vh]" :"h-[100vh]"}` }>
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
        className="hidden sm:flex fixed w-full h-full object-cover z-10"
      />
      
       
       <div className=" w-full h-[100vh] absolute z-40">
       <div className="mt-[9rem] lg:mt-20 font-LibreBaskerville px-2 h-auto lg:px-10">
         <Image
          src="/assets/cia/dashboard/bgFormMobile.png"
          alt="form"
          width={500}
          height={500}
          className={`z-[-99] lg:hidden absolute -mt-10 left-2 max-[385px]:h-[125%] min-[767px]:h-[630px]     w-[98vw] ${length === 1 ? "h-[80%]" : ""} ${length === 2 ? "h-[80%]" : ""} ${length === 3 ? "h-[100%]" : ""}  ${length === 4 ? "h-[115%]  max-[385px]:h-[145%]" : "h-[100%]"} `}
        />
         <Image
          src="/assets/cia/dashboard/bgForm.png"
          alt="form"
          width={500}
          height={500}
          className={`z-[-99] hidden lg:flex absolute  left-4 h-[700px] w-[98vw] ${length === 1 ? "h-[80%]" : ""} ${length === 2 ? "h-[80%]" : ""} ${length === 3 ? "h-[100%]" : ""}  ${length === 4 ? "h-[115%]  max-[385px]:h-[145%]" : "h-[100%]"} `}
        />
      
      <div className="flex items-center justify-center w-full z-20 lg:mt-4">
        <Image
          src="/assets/cia/dashboard/icon2Mobile.png"
          alt="iconlogo"
          width={1000}
          height={1000}
          className="w-auto h-[3.5rem] sm:h-[10%] lg:hidden"
        />
        <Image
          src="/assets/cia/dashboard/icon2.png"
          alt="iconlogo"
          width={1000}
          height={1000}
          className="w-[14%] h-auto hidden lg:flex"
        />

        <Image
          src="/assets/cia/dashboard/logoCiaDashboard.png"
          alt="logo"
          width={1000}
          height={1000}
          className=" w-[60%] "
        />
        <Image
          src="/assets/cia/dashboard/icon1Mobile.png"
          alt="iconlogo"
          width={1000}
          height={1000}
          className="w-auto  h-[3.5rem] sm:h-[10%] lg:hidden"
        />
        <Image
          src="/assets/cia/dashboard/icon1.png"
          alt="iconlogo"
          width={1000}
          height={1000}
          className="w-[14%] h-auto hidden lg:flex"
        />
      </div>
      <p className="text-ciaGreen text-center font-medium text-[14px] md:text-[16px] lg:text-[18px] px-6 mt-3 z-20 ">
        Terimakasih telah melakukan pendaftaran, status pendaftaran anda dapat
        dilihat dibawah ini
      </p>
      <div className="px-6 mt-6 z-20 min-[500px]:pr-8 min-[600px]:pr-10 sm:px-12 md:pr-16 min-[950px]:pr-18">
        <table className="w-full text-[14px] md:text-[16px] lg:text-[20px] table-fixed  ">
          <thead className="">
            <tr className="text-black text-left">
              <th className="">Nama</th>
              <th>Event</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
            <tr>
            <th className="min-[600px]:hidden">##</th>
              <th></th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody className=" text-black rounded-xl">
            {registrations.map((registration, index) => (
              <tr
              
                className={`text-left bg-[#B5E5DB]`}
              >
                <td key={index} className={`bg-[#B5E5DB] px-2 py-2 border-r border-ciaGreen border-opacity-10 ${
                  index === 0
                    ? "rounded-tl-xl"
                    : index === registrations.length - 1
                    ? "rounded-bl-xl"
                    : ""
                } ${length === 1 ? "rounded-l-xl" : "" }`} >{registration.nama}</td>
                <td className="bg-[#B5E5DB] px-2 border-r border-ciaGreen border-opacity-10 ">{registration.event}</td>
                <td className="bg-[#B5E5DB] px-2 boder-none" style={{color: registration.status === "Pendaftaran Belum Berhasil" ? "red" : "inherit"}}>{registration.status}</td>
                <td className={`bg-[#B5E5DB] px-[0.6rem] py-2 ${
                  index === 0
                    ? "rounded-tr-xl"
                    : index === registrations.length - 1
                    ? "rounded-br-xl"
                    : ""
                } ${length === 1 ? "rounded-r-xl" : "" }`}>
                    <div className="flex-col flex gap-2 md:flex-row">
                  <button className="bg-ciaGreen text-white text-[13px] lg:text-[16px] rounded-md px-1 py-1 w-full ">
                    Lihat Data
                  </button>
                  <button className="bg-ciaGreen text-white text-[13px] lg:text-[16px]  rounded-md px-1 py-1 w-full ">
                    Ubah Data
                  </button>
                  </div>
                 
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className=" mt-4 ">
            <p className="text-black mb-2">Pengumuman</p>
        <div className="p-4 bg-[#B5E5DB] rounded-xl">
                <p className="text-[14px] text-ciaGreen text-left"> Pendaftaran anda belum berhasil karena kesalahan unggah data. </p>
                <p className="text-[14px] text-ciaGreen text-left"> jika ada pertanyaan lebih lanjut kontak kami 036973265324 </p>
            </div>
            </div>
      </div>
    </div>
        </div>
       
        </div>
    );
}
