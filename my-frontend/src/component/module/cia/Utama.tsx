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
                        src={`/assets/cia/bg_prize.png`}
                        width={1000}
                        height={1000}
                        alt=''
                        className='w-[65%] h-auto'/>
                    <Image
                        src={`/assets/cia/helm.png`}
                        width={1000}
                        height={1000}
                        alt=''
                        className='absolute w-auto h-28 top-0 right-[10%]'/>
                    <p className='absolute top-[15%] font-LibreBaskerville font-bold text-6xl text-chiasGreen-500'>
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
                    </p>
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
                    <p className='text-white'>
                        Sustainable Bridge Competition (SBC) merupakan lomba rancang jembatan tingkat nasional yang akan diikuti oleh kurang lebih 20 tim dari seluruh universitas dan/atau sederajat di Indonesia dengan masing-masing tim beranggotakan tiga mahasiswa/i aktif D3, D4, atau S1 Teknik Sipil sebagai tim inti, satu hingga tiga mahasiswa/i sebagai tim support pada tahap perakitan, serta satu dosen pembimbing. Kompetisi ini bertujuan untuk menjadi wadah pengembangan potensi mahasiswa Teknik sipil agar dapat berinovasi dalam merancang jembatan yang dapat mendukung pembangunan berkelanjutan dan diharapkan Sustainable Bridge Competition dapat memberikan gambaran lebih luas mengenai teknik sipil.
                    </p>
                    <button className='bg-white w-full lg:w-auto py-2 my-2 px-4 rounded-lg text-chiasGreen-500'>Formulir Pendaftaran SBC</button>
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
                <div className='w-[80%] items-start'>
                    <div className='flex flex-col relative w-full mt-[10%]'>
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
                        <p className='absolute top-[25%] left-[5%] font-LibreBaskerville font-bold text-4xl text-chiasGreen-500'>
                            Sustainable Bridge Competition
                        </p>
                    </div>
                    <p className='text-white'>
                        Sustainable Bridge Competition (SBC) merupakan lomba rancang jembatan tingkat nasional yang akan diikuti oleh kurang lebih 20 tim dari seluruh universitas dan/atau sederajat di Indonesia dengan masing-masing tim beranggotakan tiga mahasiswa/i aktif D3, D4, atau S1 Teknik Sipil sebagai tim inti, satu hingga tiga mahasiswa/i sebagai tim support pada tahap perakitan, serta satu dosen pembimbing. Kompetisi ini bertujuan untuk menjadi wadah pengembangan potensi mahasiswa Teknik sipil agar dapat berinovasi dalam merancang jembatan yang dapat mendukung pembangunan berkelanjutan dan diharapkan Sustainable Bridge Competition dapat memberikan gambaran lebih luas mengenai teknik sipil.
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
