'use client'
import Image from 'next/image';
import Link from 'next/link';

export function comingSoon() {

    const backgroundImage = {
        backgroundImage: `url(/assets/claproyex/coming_soon_ornamen.svg)`,
        backgroundSize: "cover",
        backgroundPosition: "bottom",
        backgroundRepeat: "no-repeat",
    };

    return (
        <div id='contact' className='lg:min-h-[70vh] relative flex flex-col items-center pb-[40%]  lg:pb-[10%] px-[10%] lg:px-[20%] text-center'>

            <Image
             className='w-full h-auto absolute bottom-0' 
             src={`/assets/claproyex/coming_soon_ornamen.svg`} 
             alt='' 
             width={1000} 
             height={1000} />
            
            <div className='flex flex-col lg:flex-row lg:gap-12 lg:py-5'>
                <p style={{textShadow: '2.123px 3.538px 0px rgba(0, 0, 0, 0.25)'}} className='text-[42px] text-clapBlue-500 font-LeagueSpartan font-bold lg:text-6xl xl:text-7xl'>C O M I N G </p>
                <p style={{textShadow: '2.123px 3.538px 0px rgba(0, 0, 0, 0.25)'}} className='text-[42px] text-clapBlue-500 font-LeagueSpartan font-bold lg:text-6xl xl:text-7xl'>S O O N </p>
            </div>
            <p style={{textShadow: '2.123px 3.538px 0px rgba(0, 0, 0, 0.25)'}} className='font-bold text-clapBlue-500 text-6xl py-4'>Seminar Nasional</p>
            <p className='px-[10%] lg:px-[20%] font-semibold text-clapBlue-500 text-xl'>“Pemanfaatan Bendungan sebagai Pembangkit Tenaga Listrik Menuju Transisi Energi Bersih”</p>

        </div>
    )
}

export default comingSoon;
