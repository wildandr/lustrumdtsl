'use client'
import Image from 'next/image';
import Link from 'next/link';

import { League_Spartan } from 'next/font/google';

const league_spartan = League_Spartan({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-league-spartan',
  })

export function Hero() {

    return (
        <>
        <div className='min-h-screen w-full absolute'>
            <Image
             src={`/assets/claproyex/ornamen_claproyex_atas.svg`}
             alt=''
             height={1000}
             width={1000}
             className='absolute top-[6%] md:top-[5%] lg:top-[6.5%] xl:top-[7%] 2xl:top-[5.5%] left-0 w-[80%] lg:w-[40%] h-auto'/>
            <Image
             src={`/assets/claproyex/ornamen_claproyex_bawah.svg`}
             alt=''
             height={1000}
             width={1000}
             className='hidden lg:block absolute bottom-0 right-0 w-[80%] h-auto'/>
        </div>
        <div className='flex min-h-screen w-full items-center justify-center'>
            <div className='flex flex-col w-[80%] lg:w-[70%] items-center justify-center gap-4'>
                <div className='w-[70%] flex flex-row justify-center items-center gap-4'>
                    <Image
                        src={`/assets/claproyex/logo_lustrum_biru.png`}
                        alt=''
                        height={1000}
                        width={1000}
                        className='h-[5rem] md:h-[5.5rem] 2xl:h-[6rem] w-auto'/>
                    <Image
                        src={`/assets/claproyex/logo_claproyex_biru.png`}
                        alt=''
                        height={1000}
                        width={1000}
                        className='h-[5rem] md:h-[5.5rem] 2xl:h-[6rem] w-auto'/>
                </div>
                <p style={{textShadow: '2.123px 3.538px 0px rgba(0, 0, 0, 0.25)'}} className={`${league_spartan.className}  text-4xl lg:text-5xl 2xl:text-7xl text-clapBlue-500 font-bold text-center`}>Clapeyron Proyek dan Expo Ke-8</p>
                <p className={`text-xs md:text-lg 2xl:text-xl text-clapBlue-500 text-center px-[5%] lg:px-[10%]`}>Claproyex merupakan rangkaian acara tahunan yang diadakan oleh Badan Pers Mahasiswa Teknik Sipil Clapeyron UGM diharapkan dapat meningkatkan pemahaman dan kesadaran masyarakat akan pentingnya sumber daya air. Rangkaian acara claproyex tahun ini terdiri dari Pameran dan Seminar Nasional.</p>
                <div className='flex flex-col lg:flex-row w-[70%] gap-4 mt-5 justify-center items-center'>
                    <Link href={`/lustrum#sponsor_lustrum`} className='flex flex-row w-full lg:w-[40%] justify-center bg-clapBlue-500 text-white px-4 py-2 rounded-lg font-bold text-xs lg:text-base hover:opacity-50 items-center z-50'>
                        Sponsorship 
                    </Link>
                    <Link href={`#tema_claproyex`} className='flex flex-row w-full lg:w-[40%] justify-center border border-clapBlue-500 text-clapBlue-500 px-4 py-2 rounded-lg font-bold text-xs lg:text-base hover:opacity-50 items-center z-50'>Explore Event 
                        <span>
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="100" viewBox="0 0 24 24" className="fill-current text-clapBlue-500 h-5">
                            <path d="M11.109,3L11.109,3C9.78,3,8.988,4.481,9.725,5.587L14,12l-4.275,6.413C8.988,19.519,9.78,21,11.109,21h0 c0.556,0,1.076-0.278,1.385-0.741l4.766-7.15c0.448-0.672,0.448-1.547,0-2.219l-4.766-7.15C12.185,3.278,11.666,3,11.109,3z"></path>
                        </svg>
                        </span>
                    </Link>
                </div>
            </div>
        </div>
        </>
    )
}

export default Hero;
