'use client'
import Image from 'next/image';
import { useEffect, useState } from 'react';

export function Tema() {

    const [windowWidth, setWindowWidth] = useState(0)

    useEffect(() => {
        const handleResize = () => {
        setWindowWidth(window.innerWidth)
        }
        handleResize()
        window.addEventListener('resize', handleResize)
        return () => {
        window.removeEventListener('resize', handleResize)
        }
    }, [])

    const md_width = 768
    const lg_width = 1024

    const isDeviceGreaterThanLg = windowWidth >= lg_width
    const isDeviceGreaterThanMd = windowWidth >= lg_width

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
             className='absolute bottom-0 lg:-bottom-[10%] w-full h-auto'/>

            <div
             className='flex flex-col justify-center items-center px-8'>
                <Image
                    src={isDeviceGreaterThanMd ? `/assets/cia/bg_tema_cia.png` : `/assets/cia/bg_tema_mobile.png`}
                    width={1000}
                    height={1000}
                    alt=''
                    className='absolute w-[90%] lg:w-[80%] h-auto'/>
                <div className='w-full md:w-[75%] relative mt-[30%] lg:mt-[7%]'>
                    <p className='text-xs md:text-base font-LibreBaskerville font-bold text-white'>Tema 12th Civil In Action</p>
                    <p className='text-xl md:text-4xl font-LibreBaskerville font-bold text-white'>“Wujudkan Ibu kota Impian, Akselerasi Pembangunan Berkelanjutan”</p>
                    <p className='text-xs md:text-base font-sfui text-white'>Melalui serangkaian kegiatan Lustrum-XI KMTSL dengan tema “Solidaritas Sipil untuk Pembangunan Negeri” yang melibatkan berbagai pihak, kami berharap dapat menciptakan pemahaman yang lebih baik tentang urgensi pembangunan berkelanjutan, meningkatkan kesadaran akan peran individu dalam mencapai tujuan bersama, serta menciptakan pembangunan berkelanjutan dan progresif menuju Indonesia yang emas, berkelanjutan, dan berkemajuan.</p>
                </div>
            </div>

        </div>
        
    )
}

export default Tema;
