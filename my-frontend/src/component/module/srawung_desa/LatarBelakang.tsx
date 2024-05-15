"use client";

import Image from "next/image";

export default function LatarBelakang() {
  const backgroundImage = {
    backgroundImage: "url(/assets/srawung/bg_lokasi.svg)",
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
  };

  return (
    <div className="flex flex-col relative overflow-clip min-h-screen bg-creamSrawung-500 items-center lg:items-start justify-center">
      <Image
        width={1000}
        height={1000}
        src={`/assets/srawung/logo_srawung_vektor.svg`}
        alt=""
        className="w-[35%] lg:w-[30%] h-auto absolute top-[-2%] right-[-5%] lg:right-[-5%] lg:top-[-10%] z-50"
      />
      <Image
        src={`/assets/srawung/bg_latar_belakang.png`}
        alt=""
        width={1000}
        height={1000}
        className="absolute hidden top-0 left-0 w-full h-auto bg-blend-multiply opacity-10"
      />
      <Image
        src={`/assets/srawung/bg_latar_belakang_mobile.png`}
        alt=""
        width={1000}
        height={1000}
        className="absolute md:hidden top-0 left-0 h-full w-full bg-blend-multiply opacity-10"
      />
      <div className="flex flex-col items-center w-[80%] z-50 pt-16 xl:pt-28 lg:px-24">
        <p
          style={{ textShadow: "1px 1px 0px rgba(0, 0, 0, 0.25)" }}
          className="font-sf_pro_display font-bold text-lightGreenSrawung-500 xl:text-2xl self-start"
        >
          Srawung Desa
        </p>
        <p
          style={{ textShadow: "2.123px 3.538px 0px rgba(0, 0, 0, 0.25)" }}
          className=" font-Jawa_Palsu text-lightGreenSrawung-500 hidden lg:block text-[3.5rem] mb-4 self-start"
        >
          Latar Belakang
        </p>
        <p className=" font-Montserrat text-lightGreenSrawung-500 text-xs md:text-sm xl:text-base text-justify">
          Salah satu misi dari Universitas Gadjah Mada yang tercantum dalam Tri
          Dharma Perguruan Tinggi di Indonesia adalah kewajiban perguruan tinggi
          untuk mengabdi pada masyarakat. Oleh karena itu melalui salah satu
          kegiatan tahunan Keluarga Mahasiswa Teknik Sipil dan Lingkungan
          Universitas Gadjah Mada, yaitu kegiatan Srawung Desa, diharapkan dapat
          mencapai misi tersebut. Nantinya, kegiatan Srawung Desa 2024 ini akan
          terlaksana dalam beberapa rangkaian kegiatan meliputi sipil berbagi,
          sipil mengajar, serta survei dan perencanaan. Dengan dilangsungkannya
          kegiatan ini, diharapkan dapat memberikan kontribusi dalam
          menyelesaikan permasalahan yang ada di masyarakat pedesaan. Mahasiswa
          juga memiliki kesempatan untuk mengaplikasikan pengetahuan yang
          diperoleh selama perkuliahan guna mendukung perkembangan desa dan
          menyumbangkan ide serta solusi yang bersifat konstruktif untuk
          mendorong kemajuan dan kemandirian masyarakat desa. Selain itu,
          sedikit berbeda dengan tahun-tahun sebelumnya, kegiatan Srawung Desa
          2024 juga akan berkolaborasi dengan kegiatan Pengabdian Kepada
          Masyarakat (PKM) yang dilakukan oleh salah satu dosen Departemen
          Teknik Sipil dan Lingkungan di bidang struktur. Dengan begitu,
          nantinya dosen dapat berkontribusi untuk menyalurkan serta
          mengaplikasikan ilmu yang dimilikinya sesuai dengan bidang yang
          ditekuni kepada masyarakat desa.
        </p>
      </div>

      <div className="relative flex flex-col w-full justify-center items-center py-28 z-50">
        <Image
          src={`/assets/srawung/lokasi_kami.png`}
          alt=""
          width={1000}
          height={1000}
          className="w-[90%] lg:w-[70%] h-auto"
        />
        <p
          style={{ boxShadow: "0px 10px 0px 0px #07390A" }}
          className="text-center text-base xl:text-2xl font-sf_pro_display font-bold text-white px-[1rem] lg:px-[2rem] lg:py-[1rem] mx-[1rem] my-[2.5rem] lg:my-[3.5rem] rounded-[64px] bg-lightGreenSrawung-500 border-5 border-darkGreenSrawung-500"
        >
          Dusun Watukangsi, Desa Wukirharjo, Sleman, D.I. Yogyakarta
        </p>
        <Image
          src={`/assets/srawung/pulau.svg`}
          alt=""
          width={1000}
          height={1000}
          className="w-[60%] lg:w-[25%] h-auto"
        />

        <Image
          src={`/assets/srawung/wayang_kanan.svg`}
          alt=""
          width={1000}
          height={1000}
          className="absolute hidden md:block right-0 bottom-[20%] w-[17%] h-auto"
        />
        <Image
          src={`/assets/srawung/wayang_kiri.svg`}
          alt=""
          width={1000}
          height={1000}
          className="absolute hidden md:block left-0 bottom-[20%] w-[17%] h-auto"
        />
      </div>
    </div>
  );
}
