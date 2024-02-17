'use client'
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export function Isi() {

    const backgroundImage = {
        backgroundImage: `url(/assets/cia/bg_texture_cia.png)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
    };

    return (
        <>
        <div className='min-h-screen pt-[17%] p-6 flex flex-col items-center justify-center bg-black relative overflow-hidden'>
            <div className='absolute min-h-screen w-full'>
                <div
                    className="bintang top-[20%] left-[35%] animate-twinkle-4s"
                    style={{
                        width: '2rem',
                        height: '2rem', 
                        backgroundImage: 'radial-gradient(149.67% 135.15% at 50% 50%, rgba(251, 198, 11, 0.37) 0%, rgba(255, 222, 11, 0.16) 100%)',
                        filter: 'box-shadow(0px 0px 50px rgba(251, 222, 11, 1))',
                        borderRadius: '50%',
                        position: 'absolute',
                        opacity: '1',
                        boxShadow: '0px 0px 35px rgba(251, 222, 11, 1)'
                    }}
                ></div>
                <div
                    className="bintang top-[40%] right-[20%] animate-twinkle-2s"
                    style={{
                        width: '2rem',
                        height: '2rem', 
                        backgroundImage: 'radial-gradient(149.67% 135.15% at 50% 50%, rgba(251, 198, 11, 0.37) 0%, rgba(255, 222, 11, 0.16) 100%)',
                        filter: 'box-shadow(0px 0px 50px rgba(251, 222, 11, 1))',
                        borderRadius: '50%',
                        position: 'absolute',
                        opacity: '1',
                        boxShadow: '0px 0px 35px rgba(251, 222, 11, 1)'
                    }}
                ></div>
                <div
                    className="bintang top-[45%] left-[10%] animate-twinkle-3s"
                    style={{
                        width: '2rem',
                        height: '2rem', 
                        backgroundImage: 'radial-gradient(149.67% 135.15% at 50% 50%, rgba(251, 198, 11, 0.37) 0%, rgba(255, 222, 11, 0.16) 100%)',
                        filter: 'box-shadow(0px 0px 50px rgba(251, 222, 11, 1))',
                        borderRadius: '50%',
                        position: 'absolute',
                        opacity: '1',
                        boxShadow: '0px 0px 35px rgba(251, 222, 11, 1)'
                    }}
                ></div>
                <div
                    className="bintang bottom-[25%] right-[5%] animate-twinkle-4s"
                    style={{
                        width: '2rem',
                        height: '2rem', 
                        backgroundImage: 'radial-gradient(149.67% 135.15% at 50% 50%, rgba(251, 198, 11, 0.37) 0%, rgba(255, 222, 11, 0.16) 100%)',
                        filter: 'box-shadow(0px 0px 50px rgba(251, 222, 11, 1))',
                        borderRadius: '50%',
                        position: 'absolute',
                        opacity: '1',
                        boxShadow: '0px 0px 35px rgba(251, 222, 11, 1)'
                    }}
                ></div>
                <div
                    className="bintang bottom-[5%] right-[25%] animate-twinkle-3s"
                    style={{
                        width: '2rem',
                        height: '2rem', 
                        backgroundImage: 'radial-gradient(149.67% 135.15% at 50% 50%, rgba(251, 198, 11, 0.37) 0%, rgba(255, 222, 11, 0.16) 100%)',
                        filter: 'box-shadow(0px 0px 50px rgba(251, 222, 11, 1))',
                        borderRadius: '50%',
                        position: 'absolute',
                        opacity: '1',
                        boxShadow: '0px 0px 35px rgba(251, 222, 11, 1)'
                    }}
                ></div>
                <div
                    className="bintang bottom-[25%] left-[25%] animate-twinkle-2s"
                    style={{
                        width: '1.5rem',
                        height: '1.5rem', 
                        backgroundImage: 'radial-gradient(149.67% 135.15% at 50% 50%, rgba(251, 198, 11, 0.37) 0%, rgba(255, 222, 11, 0.16) 100%)',
                        filter: 'box-shadow(0px 0px 50px rgba(251, 222, 11, 1))',
                        borderRadius: '50%',
                        position: 'absolute',
                        opacity: '1',
                        boxShadow: '0px 0px 35px rgba(251, 222, 11, 1)'
                    }}
                ></div>
            </div>
            <div className='flex min-h-screen w-full justify-center mt-[60%] ms-[80%] lg:mt-[5%] lg:ms-0 absolute'>
                <Image
                 src={'/assets/lustrum/top_film.png'}
                 className={`w-[24rem] md:w-[35rem] lg:w-[53rem] h-auto absolute -top-[15%] -left-[50%] lg:-top-[25%] lg:left-0 opacity-50`}
                 width={1000}
                 height={1000}
                 alt={''}
                 style={{ maskImage: 'linear-gradient(to left, transparent 0%, black 80%)' }}
                />
                {/* <Image
                 src={'/assets/lustrum/bottom_film.png'}
                 className={`w-[19rem] md:w-[30rem] lg:w-[40rem] h-auto absolute bottom-[15%] right-[30%] lg:-bottom-[10%] lg:right-0 opacity-50`}
                 width={1000}
                 height={1000}
                 alt={''}
                 style={{ maskImage: 'linear-gradient(to right, transparent 0%, black 50%)' }}
                /> */}
                <div
                    className="-left-[100%] -top-[15%] md:top-auto md:-left-[35%] lg:-top-[20%] lg:left-[5%] w-[36rem] h-[36rem] lg:w-[40rem] lg:h-[40rem] mix-blend-lighten"
                    style={{
                        background: "radial-gradient(50% 50% at 50% 50%, rgba(137, 108, 0, 0.35) 0%, rgba(255, 235, 162, 0.00) 100%)",
                        filter: 'box-shadow(0px 0px 50px rgba(251, 222, 11, 1))',
                        borderRadius: '50%',
                        position: 'absolute',
                        opacity: '1',
                    }}
                ></div>
            </div>

            <div className='flex flex-col md:w-[60vw] lg:w-[71vw] relative z-[100]'>
                <p className='text-xs md:text-sm lg:text-base font-LibreBaskerville font-bold bg-gradient-to-b text-transparent bg-clip-text from-[#F2D87A] to-[#E0B620]'>CIA X PKTSL</p>
                <p className='text-2xl md:text-3xl lg:text-5xl font-LibreBaskerville font-bold bg-gradient-to-b text-transparent bg-clip-text from-[#F2D87A] to-[#E0B620]'>Civil in Action x Pelayanan Komputer Teknik Sipil dan Lingkungan</p>
                <p className='text-xs md:text-sm lg:text-xl font-LibreBaskerville font-bold bg-gradient-to-b text-transparent bg-clip-text from-[#F2D87A] to-[#E0B620]'>Civil In Action adalah event tahunan yang diselenggarakan oleh mahasiswa Departemen Teknik Sipil dan Lingkungan (DTSL) Fakultas Teknik UGM yang bertujuan sebagai wadah untuk mengembangkan ilmu pengetahuan dan keprofesian di bidang teknik sipil dan lingkungan bagi semua pihak yang terlibat</p>
                <Link href={`cia`} style={{border: "1px solid var(--gold, #F2D87A)"}} className='w-fit flex flex-row items-center border bg-gradient-to-b bg-clip-text from-[#F2D87A] to-[#E0B620] text-gold-500 px-4 py-2 mt-5 md:mt-8 rounded-xl font-bold text-xs lg:text-base hover:opacity-80'>Website Resmi
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="100" viewBox="0 0 24 24" className="fill-current bg-gradient-to-b bg-clip-text from-[#F2D87A] to-[#E0B620] text-gold-500 h-5">
                            <path d="M11.109,3L11.109,3C9.78,3,8.988,4.481,9.725,5.587L14,12l-4.275,6.413C8.988,19.519,9.78,21,11.109,21h0 c0.556,0,1.076-0.278,1.385-0.741l4.766-7.15c0.448-0.672,0.448-1.547,0-2.219l-4.766-7.15C12.185,3.278,11.666,3,11.109,3z"></path>
                        </svg>
                    </span>
                </Link>
            </div>
        </div>
        </>
        
    )
}

export default Isi;
