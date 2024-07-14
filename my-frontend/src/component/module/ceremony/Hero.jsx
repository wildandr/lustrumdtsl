import Image from "next/image";
import Marquee from "react-fast-marquee";

export default function Hero() {
  const backgroundImage = {
    backgroundImage: `url(/assets/ceremony/bg_hero.png)`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  };

  const backgroundTicket = {
    backgroundImage: `url(/assets/ceremony/bg_ticket.svg)`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };
  const backgroundTicketMobile = {
    backgroundImage: `url(/assets/ceremony/bg_tiket_mobile.svg)`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };

  return (
    <div
      style={backgroundImage}
      className="flex flex-col min-h-screem items-center bg-darkRedCeremony-500 pt-[10%] relative pb-[25%]"
    >
      <div className="hidden flex-col justify-center w-[70%] z-10 lg:flex">
        <div className="flex flex-row w-full justify-between items-center">
          <p className=" font-mudstone xl:text-[8rem] 2xl:text-[10rem] text-lightCreamCeremony-500">
            Renjana Fest
          </p>
          <div className="flex flex-col font-gilroy font-bold xl:text-3xl 2xl:text-4xl text-darkRedCeremony-500 bg-lightCreamCeremony-500 lin p-2 rounded-lg">
            <p style={{ lineHeight: " 95.938%" }}>Pentas</p>
            <p style={{ lineHeight: " 95.938%" }}>Aksi</p>
            <p style={{ lineHeight: " 95.938%" }}>Sipil</p>
          </div>
        </div>
        <div className="flex flex-row justify-between">
          <div
            style={backgroundTicket}
            className="flex flex-col w-[25%] justify-center items-center text-darkRedCeremony-500 font-mudstone font-bold py-[10%] px-[5%]"
          >
            <p style={{ lineHeight: "80%" }} className="xl:text-[10rem]">
              27
            </p>
            <p className="xl:text-[2rem]">July 2024</p>
            <div className="h-[0.5rem] bg-darkRedCeremony-500 rounded-lg w-full"></div>
            <p className="xl:text-[3.5rem]">Venue</p>
            <p className="xl:text-[1.6rem]">
              Amphitheatre Gelanggang inovasi & kreativitas
            </p>
          </div>
          <p className=" text-lightCreamCeremony-500 font-gilroy font-bold xl:text-3xl 2xl:text-4xl text-justify w-[70%]">
            Padatnya laprak dan sibuknya kuliah. Renjana Fest hadir sebagai
            sarana penghilang keluh dan penat dari kegiatan akademik yang telah
            dijalani, diharapkan menjadi matahari pagi yang menghangatkan
            kekeluargaan!
          </p>
        </div>
      </div>
      <div className="w-full p-[8%] flex flex-col lg:hidden min-h-screen pt-[20%] md:pt-[10%] z-10">
        <p
          style={{ lineHeight: "80%" }}
          className=" font-mudstone text-lightCreamCeremony-500 text-[5.5rem] md:text-[10rem]"
        >
          Renjana
        </p>
        <div className="flex felx-row">
          <p
            style={{ lineHeight: "90%" }}
            className=" font-mudstone text-lightCreamCeremony-500 text-9xl md:text-[12rem]"
          >
            Fest
          </p>
          <div className="flex flex-col font-gilroy font-bold justify-center text-3xl md:text-5xl text-darkRedCeremony-500 bg-lightCreamCeremony-500 p-2 rounded-lg">
            <p style={{ lineHeight: " 95.938%" }}>Pentas</p>
            <p style={{ lineHeight: " 95.938%" }}>Aksi</p>
            <p style={{ lineHeight: " 95.938%" }}>Sipil</p>
          </div>
        </div>
        <div
          className="flex flex-row px-[8%] py-[5%] justify-evenly mt-4"
          style={backgroundTicketMobile}
        >
          <div className="flex flex-col text-darkRedCeremony-500 font-mudstone font-bold justify-center items-center">
            <p
              style={{ lineHeight: "80%" }}
              className="text-8xl md:text-[10rem]"
            >
              27
            </p>
            <p className="text-[2rem] md:text-[3rem]">July 2024</p>
          </div>
          <div className="flex flex-col h-[7.5rem] md:h-[12rem] w-[0.5rem] bg-darkRedCeremony-500 rounded-xl"></div>
          <div className="flex flex-col text-darkRedCeremony-500 font-mudstone font-bold">
            <p className="text-2xl md:text-5xl">Venue</p>
            <p className="text-xl md:text-3xl">Amphitheatre</p>
            <p className="text-xl md:text-3xl">Gelanggang</p>
            <p className="text-xl md:text-3xl">inovasi &</p>
            <p className="text-xl md:text-3xl">kreativitas</p>
          </div>
        </div>
        <p className=" text-lightCreamCeremony-500 font-gilroy font-bold text-2xl md:text-3xl text-justify w-full mt-[5%]">
          Padatnya laprak dan sibuknya kuliah. Renjana Fest hadir sebagai sarana
          penghilang keluh dan penat dari kegiatan akademik yang telah dijalani,
          diharapkan menjadi matahari pagi yang menghangatkan kekeluargaan!
        </p>
      </div>
      <div className="w-full bg-redCeremony-500 py-2 absolute bottom-[0] z-10">
        <Marquee gradient={false} speed={40} autoFill={true}>
          <p className="font-mudstone text-white text-3xl lg:text-[2.5rem] overflow-hidden">
            ENJANA - R
          </p>
        </Marquee>
      </div>
      <Image
        src="/assets/ceremony/gambar_bawah.png"
        alt="GIK"
        width={1920}
        height={1080}
        className="absolute bottom-0 w-full h-auto"
      />
    </div>
  );
}
