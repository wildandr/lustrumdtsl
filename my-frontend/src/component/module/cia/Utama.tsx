'use client'
import Image from 'next/image';
import { useEffect, useState } from 'react';

export function Utama() {

    const backgroundImage = {
        backgroundImage: `url(/assets/cia/bg_tema_cia.png)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
    };

    return (
        <div
         className='relative p-6 pb-28 flex flex-col items-center justify-center overflow-hidden'>

            <Image
             src={`/assets/cia/ornamen_atas.png`}
             width={1000}
             height={1000}
             alt=''
             className='absolute top-0 w-full h-auto'/>

            <div
             className='flex flex-col px-8'>
                <div className='flex flex-col justify-center items-center relative w-full mt-[10%]'>
                    <Image
                        src={`/assets/cia/prize_without_helm.png`}
                        width={1000}
                        height={1000}
                        alt=''
                        className='w-[60%] h-auto'/>
                    <Image
                        src={`/assets/cia/helm.png`}
                        width={1000}
                        height={1000}
                        alt=''
                        className='absolute w-auto h-28 top-0 right-[20%]'/>
                    {/* <p className='absolute top-[15%] font-LibreBaskerville font-bold text-6xl text-chiasGreen-500'>
                        Civil In Action X PKTSL
                    </p>
                    <p className='absolute top-[45%] left-[30%] font-LibreBaskerville font-bold text-2xl text-chiasGreen-500'>
                            Prize Pool Total
                    </p>
                    <p className='absolute top-[50%] left-[30%] font-LibreBaskerville font-bold text-9xl text-chiasGreen-500'>
                        75 JUTA
                    </p>
                    <p className='absolute bottom-[15%] right-[35%] font-LibreBaskerville font-bold text-2xl text-chiasGreen-500'>
                        Rupiah
                    </p> */}
                </div>
                <div className='w-[80%] items-start'>
                    <div className='flex flex-col relative w-full mt-[10%]'>
                        <Image
                            src={`/assets/cia/bg_titel_1.png`}
                            width={1000}
                            height={1000}
                            alt=''
                            className='h-auto w-[70%]'/>
                        <Image
                            src={`/assets/cia/calculator.png`}
                            width={1000}
                            height={1000}
                            alt=''
                            className='absolute w-auto h-28 top-[100%] -right-[20%]'/>
                        <p className='absolute top-[25%] left-[5%] font-LibreBaskerville font-bold text-4xl text-chiasGreen-500'>
                            Sustainable Bridge Competition
                        </p>
                    </div>
                    <p className='text-white text-justify my-4'>
                        Sustainable Bridge Competition (SBC) merupakan lomba rancang jembatan tingkat nasional yang akan diikuti oleh kurang lebih 20 tim dari seluruh universitas dan/atau sederajat di Indonesia dengan masing-masing tim beranggotakan tiga mahasiswa/i aktif D3, D4, atau S1 Teknik Sipil sebagai tim inti, satu hingga tiga mahasiswa/i sebagai tim support pada tahap perakitan, serta satu dosen pembimbing.
                    </p>
                    <p className='text-white text-justify my-4'>
                        Sustainable Bridge Competition mengusung tema “Realisasi Ibu Kota Impian dengan Jembatan Inovatif dan Berkelanjutan Karya Pionir Pembangunan Bangsa.” Tema ini diambil dengan berkonsentrasi pada pionir pembangunan dengan mengacu pada Ibu Kota Negara baru, Nusantara yang berkelanjutan berupa desain jembatan dengan mengutamakan hasil inovatif yang mengacu pada konfigurasi struktur, sambungan, metode perakitan, dan metode perawatan
                    </p>
                    <div className='flex flex-col lg:flex-row gap-4'>
                        <button className='border border-white flex flex-row w-full lg:w-auto text-white py-2 my-2 px-8 rounded-lg text-xs lg:text-base hover:opacity-50 items-center'>Persyaratan Pendaftaran
                            <span>
                            {/* <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="100" viewBox="0 0 24 24" className="fill-current text-chiasGreen-500 h-5">
                                <path d="M11.109,3L11.109,3C9.78,3,8.988,4.481,9.725,5.587L14,12l-4.275,6.413C8.988,19.519,9.78,21,11.109,21h0 c0.556,0,1.076-0.278,1.385-0.741l4.766-7.15c0.448-0.672,0.448-1.547,0-2.219l-4.766-7.15C12.185,3.278,11.666,3,11.109,3z"></path>
                            </svg> */}
                            </span>
                        </button>
                        <button className='bg-white flex flex-row w-full lg:w-auto border text-chiasGreen-500 py-2 my-2 px-6 rounded-lg text-xs lg:text-base hover:opacity-50 items-center'>Formulir Pendaftaran SBC
                            <span>
                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="100" viewBox="0 0 24 24" className="fill-current text-chiasGreen-500 h-5">
                                <path d="M11.109,3L11.109,3C9.78,3,8.988,4.481,9.725,5.587L14,12l-4.275,6.413C8.988,19.519,9.78,21,11.109,21h0 c0.556,0,1.076-0.278,1.385-0.741l4.766-7.15c0.448-0.672,0.448-1.547,0-2.219l-4.766-7.15C12.185,3.278,11.666,3,11.109,3z"></path>
                            </svg>
                            </span>
                        </button>
                    </div>
                </div>
                <div className='w-[80%] self-end'>
                    <div className='flex flex-col relative w-full mt-[10%]'>
                        <Image
                            src={`/assets/cia/bg_titel_2.png`}
                            width={1000}
                            height={1000}
                            alt=''
                            className='h-auto w-[70%] self-end'/>
                        <Image
                            src={`/assets/cia/screw_key.png`}
                            width={1000}
                            height={1000}
                            alt=''
                            className='absolute w-auto h-28 top-[100%] -left-[20%]'/>
                        <p className='absolute top-[25%] right-[10%] font-LibreBaskerville font-bold text-4xl text-chiasGreen-500'>
                            Civil Innovation Challenge
                        </p>
                    </div>
                    <p className='text-white text-justify my-4'>
                        Civil Innovation Challenge (CIC) merupakan salah satu rangkaian kegiatan Civil In Action yang berfokus pada inovasi di bidang teknik sipil. Kegiatan ini mengajak mahasiswa/i dari seluruh Indonesia terutama mahasiswa yang berasal dari program studi teknik sipil untuk ikut berpartisipasi dalam memberikan ide-ide terbaiknya untuk menyelesaikan suatu permasalahan ilmu teknik sipil dan lingkungan.
                    </p>
                    <p className='text-white text-justify my-4'>
                        Pada tahun ini, Civil Innovation Challenge mengusung tema “Solusi Inovatif dalam Mengatasi Permasalahan Tanah pada Tahap Pra-Konstruksi untuk Pembangunan Ibu Kota yang Berkelanjutan”. Tema ini diangkat untuk menciptakan solusi mengenai ketidakstabilan tanah yang diharapkan dapat diterapkan dalam pembangunan ibu kota baru yang berkelanjutan.
                    </p>
                    <div className='flex flex-col lg:flex-row lg:justify-end gap-4'>
                        <button className='border border-white flex flex-row w-full lg:w-auto text-white py-2 my-2 px-8 rounded-lg text-xs lg:text-base hover:opacity-50 items-center'>Persyaratan Pendaftaran
                            <span>
                            {/* <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="100" viewBox="0 0 24 24" className="fill-current text-chiasGreen-500 h-5">
                                <path d="M11.109,3L11.109,3C9.78,3,8.988,4.481,9.725,5.587L14,12l-4.275,6.413C8.988,19.519,9.78,21,11.109,21h0 c0.556,0,1.076-0.278,1.385-0.741l4.766-7.15c0.448-0.672,0.448-1.547,0-2.219l-4.766-7.15C12.185,3.278,11.666,3,11.109,3z"></path>
                            </svg> */}
                            </span>
                        </button>
                        <button className='bg-white flex flex-row w-full lg:w-auto border text-chiasGreen-500 py-2 my-2 px-6 rounded-lg text-xs lg:text-base hover:opacity-50 items-center'>Formulir Pendaftaran SBC
                            <span>
                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="100" viewBox="0 0 24 24" className="fill-current text-chiasGreen-500 h-5">
                                <path d="M11.109,3L11.109,3C9.78,3,8.988,4.481,9.725,5.587L14,12l-4.275,6.413C8.988,19.519,9.78,21,11.109,21h0 c0.556,0,1.076-0.278,1.385-0.741l4.766-7.15c0.448-0.672,0.448-1.547,0-2.219l-4.766-7.15C12.185,3.278,11.666,3,11.109,3z"></path>
                            </svg>
                            </span>
                        </button>
                    </div>
                </div>
                <div className='w-[80%] items-start'>
                    <div className='flex flex-col relative w-full mt-[10%] text-center'>
                        <Image
                            src={`/assets/cia/bg_titel_3.png`}
                            width={1000}
                            height={1000}
                            alt=''
                            className='h-auto w-[70%]'/>
                        <Image
                            src={`/assets/cia/note.png`}
                            width={1000}
                            height={1000}
                            alt=''
                            className='absolute w-auto h-28 top-[100%] -right-[20%]'/>
                        <p className='absolute top-[25%] left-[15%] font-LibreBaskerville font-bold text-4xl text-chiasGreen-500'>
                            Future Civil Engineering <br/> Challenge (FCEC)
                        </p>
                    </div>
                    <p className='text-white text-justify my-4'>
                    FCEC (Future Civil Engineer Challenge) merupakan salah satu rangkaian acara 12th Civil in Action yang berfokus pada karya tulis ilmiah di bidang teknik sipil, lingkungan, dan sumber daya air untuk tingkatan SMA dan/atau sederajat. Perlombaan ini diadakan karena minimnya pemakaian sumber daya berkelanjutan dalam aspek pembangunan. Oleh karena itu, perlu adanya peran dari generasi muda penerus bangsa yang kreatif dan inovatif sehingga mampu melahirkan karya yang solutif dalam menciptakan pembangunan berwawasan lingkungan dan pemanfaatan sumberdaya berkelanjutan
                    </p>
                    <p className='text-white text-justify my-4'>
                    FCEC 2024 mengusung tema “Strategi generasi muda dalam menciptakan pembangunan berwawasan lingkungan dan pemanfaatan sumberdaya berkelanjutan”. Tema ini bermaksud untuk mewujudkan pembangunan Indonesia yang berwawasan lingkungan dengan karya kreatif dan inovatif dari generasi muda yang bermanfaat bagi masyarakat.
                    </p>
                    <button className='bg-white w-full lg:w-auto py-2 my-2 px-4 rounded-lg text-chiasGreen-500'>Formulir Pendaftaran SBC</button>
                </div>
                <div className='w-[80%] self-end'>
                    <div className='flex flex-col relative w-full mt-[10%]'>
                        <Image
                            src={`/assets/cia/bg_titel_4.png`}
                            width={1000}
                            height={1000}
                            alt=''
                            className='h-auto w-[70%] self-end'/>
                        <Image
                            src={`/assets/cia/craft_logo.png`}
                            width={1000}
                            height={1000}
                            alt=''
                            className='absolute w-auto h-28 top-[100%] -left-[20%]'/>
                        <p className='absolute top-[25%] right-[10%] font-LibreBaskerville font-bold text-4xl text-chiasGreen-500'>
                            Sustainable Bridge Competition
                        </p>
                    </div>
                    <p className='text-white'>
                        Sustainable Bridge Competition (SBC) merupakan lomba rancang jembatan tingkat nasional yang akan diikuti oleh kurang lebih 20 tim dari seluruh universitas dan/atau sederajat di Indonesia dengan masing-masing tim beranggotakan tiga mahasiswa/i aktif D3, D4, atau S1 Teknik Sipil sebagai tim inti, satu hingga tiga mahasiswa/i sebagai tim support pada tahap perakitan, serta satu dosen pembimbing. Kompetisi ini bertujuan untuk menjadi wadah pengembangan potensi mahasiswa Teknik sipil agar dapat berinovasi dalam merancang jembatan yang dapat mendukung pembangunan berkelanjutan dan diharapkan Sustainable Bridge Competition dapat memberikan gambaran lebih luas mengenai teknik sipil.
                    </p>
                    <div className='flex flex-row w-full justify-end'>
                        <button className='bg-white w-full lg:w-auto py-2 my-2 px-4 rounded-lg text-chiasGreen-500 self-end'>Formulir Pendaftaran SBC</button>
                    </div>
                </div>
            </div>

        </div>
        
    )
}

export default Utama;
