'use client'
import Image from 'next/image';
import { useEffect, useState } from 'react';

export function Tema() {

    const backgroundImage = {
        backgroundImage: `url(/assets/cia/bg_tema_cia.png)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
    };

    return (
        <div
         className='relative min-h-screen p-6 flex flex-col items-center justify-center overflow-hidden'>

            <Image
             src={`/assets/cia/ornamen_bawah.png`}
             width={1000}
             height={1000}
             alt=''
             className='absolute -bottom-[10%] w-full h-auto'/>

            <div
             className='flex flex-col justify-center items-center px-8'>
                <Image
                    src={`/assets/cia/bg_tema_cia.png`}
                    width={1000}
                    height={1000}
                    alt=''
                    className='absolute w-[80%] h-auto'/>
                <div className='w-[75%] relative mt-[7%]'>
                    <p className='text-xs lg:text-base font-LibreBaskerville font-bold text-white'>Tema 12th Civil In Action</p>
                    <p className='text-2xl lg:text-4xl font-LibreBaskerville font-bold text-white'>“Wujudkan Ibu kota Impian, Akselerasi Pembangunan Berkelanjutan”</p>
                    <p className='text-xs lg:text-base font-sfui text-white'>Dengan tema 12th Civil In Action yang berjudul “Wujudkan Ibu kota Impian, Akselerasi Pembangunan Berkelanjutan”, para mahasiswa dan pelajar yang berpartisipasi diharapkan dapat menumbuhkan rasa peka terhadap pemindahan ibu kota saat ini. Meskipun belum dapat memberikan dampak langsung secara materiil terhadap pembangunan Ibu Kota Negara, event ini diharapkan dapat membawa inovasi-inovasi maupun ide yang dapat memberikan solusi terhadap permasalahan yang dihadapi dalam pembangunan Ibu Kota Negara berlandaskan pembangunan berkelanjutan sesuai tujuan pembangunan berkelanjutan (TPB) atau SDGs poin 9 dan 11 yaitu industri, inovasi dan infrastruktur serta kota dan permukiman yang berkelanjutan.</p>
                </div>
            </div>

        </div>
        
    )
}

export default Tema;
