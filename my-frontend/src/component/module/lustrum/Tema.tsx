'use client'
import Image from 'next/image';
import { useEffect, useState } from 'react';

export function Tema() {

    return (
        <div className='min-h-screen p-6 flex flex-col items-center justify-center bg-black relative overflow-hidden'>

            {/* <p className=' text-orange-600 absolute left-2 top-2'>MENYALA ABANGKUHHHH 🔥🔥🔥</p> */}

            <div className='flex min-h-screen w-full justify-center mt-[60%] ms-[80%] lg:mt-[5%] lg:ms-0 absolute'>
                <Image
                 src={'/assets/lustrum/logo_kmtsl_vektor.svg'}
                 className={`w-[42rem] h-auto absolute`}
                 width={1000}
                 height={1000}
                 alt={''}
                 style={{}}
                />
            </div>

            <div className='flex flex-col lg:w-[71vw]'>
                <p className='text-xs lg:text-base font-LibreBaskerville font-bold bg-gradient-to-b text-transparent bg-clip-text from-yellow-300 to-yellow-600'>Tema Lustrum-XI KMTSL</p>
                <p className='text-2xl lg:text-5xl font-LibreBaskerville font-bold bg-gradient-to-b text-transparent bg-clip-text from-yellow-300 to-yellow-600'>“Solidaritas Sipil untuk Pembangunan Negeri”</p>
                <p className='text-xs lg:text-xl font-LibreBaskerville font-bold bg-gradient-to-b text-transparent bg-clip-text from-yellow-300 to-yellow-600'>Melalui serangkaian kegiatan Lustrum-XI KMTSL dengan tema “Solidaritas Sipil untuk Pembangunan Negeri” yang melibatkan berbagai pihak, kami berharap dapat menciptakan pemahaman yang lebih baik tentang urgensi pembangunan berkelanjutan, meningkatkan kesadaran akan peran individu dalam mencapai tujuan bersama, serta menciptakan pembangunan berkelanjutan dan progresif menuju Indonesia yang emas, berkelanjutan, dan berkemajuan.</p>
            </div>

            {/* <Image
                 src={'/assets/lustrum/substract.png'}
                 className={`w-[71vw] h-auto absolute justify-center bottom-0`}
                 width={1000}
                 height={1000}
                 alt={''}
                /> */}
        </div>
        
    )
}

export default Tema;
