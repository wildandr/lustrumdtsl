'use client'
import Image from 'next/image';
import { useEffect, useState } from 'react';

export function Kegiatan() {

    return (
        <div className='min-h-screen p-6 flex flex-col items-center justify-center bg-black relative overflow-hidden'>

            <div className='absolute min-h-screen w-full'>
                <div
                    className="bintang top-[10%] lg:top-[20%] left-[35%] animate-twinkle-4s"
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
                <div
                    className="bintang top-[5%] lg:top-[25%] right-[20%] animate-twinkle-2s"
                    style={{
                        width: '2.5rem',
                        height: '2.5rem', 
                        backgroundImage: 'radial-gradient(149.67% 135.15% at 50% 50%, rgba(251, 198, 11, 0.37) 0%, rgba(255, 222, 11, 0.16) 100%)',
                        filter: 'box-shadow(0px 0px 50px rgba(251, 222, 11, 1))',
                        borderRadius: '50%',
                        position: 'absolute',
                        opacity: '1',
                        boxShadow: '0px 0px 35px rgba(251, 222, 11, 1)'
                    }}
                ></div>
                <div
                    className="bintang top-[25%] lg:top-[45%] left-[10%] animate-twinkle-3s"
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
                    className="bintang bottom-[15%] lg:bottom-[25%] right-[10%] animate-twinkle-4s"
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
                    className="bintang bottom-[10%] right-[45%] animate-twinkle-3s"
                    style={{
                        width: '2.5rem',
                        height: '2.5rem', 
                        backgroundImage: 'radial-gradient(149.67% 135.15% at 50% 50%, rgba(251, 198, 11, 0.37) 0%, rgba(255, 222, 11, 0.16) 100%)',
                        filter: 'box-shadow(0px 0px 50px rgba(251, 222, 11, 1))',
                        borderRadius: '50%',
                        position: 'absolute',
                        opacity: '1',
                        boxShadow: '0px 0px 35px rgba(251, 222, 11, 1)'
                    }}
                ></div>
                <div
                    className="bintang bottom-[15%] lg:bottom-[5%] left-[15%] lg:left-[25%] animate-twinkle-2s"
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
                <div
                    className="-left-[100%] -top-[15%] md:top-auto md:-left-[35%] lg:-top-[20%] lg:-left-[20%] w-[36rem] h-[36rem] lg:w-[40rem] lg:h-[40rem] mix-blend-lighten"
                    style={{
                        background: "radial-gradient(50% 50% at 50% 50%, rgba(137, 108, 0, 0.35) 0%, rgba(255, 235, 162, 0.00) 100%)",
                        filter: 'box-shadow(0px 0px 50px rgba(251, 222, 11, 1))',
                        borderRadius: '50%',
                        position: 'absolute',
                        opacity: '1',
                    }}
                ></div>
                <div
                    className="-left-[100%] -top-[15%] md:top-auto md:-left-[35%] lg:-bottom-[10%] lg:left-auto lg:-right-[20%] w-[36rem] h-[36rem] lg:w-[40rem] lg:h-[40rem] mix-blend-lighten"
                    style={{
                        background: "radial-gradient(50% 50% at 50% 50%, rgba(137, 108, 0, 0.35) 0%, rgba(255, 235, 162, 0.00) 100%)",
                        filter: 'box-shadow(0px 0px 50px rgba(251, 222, 11, 1))',
                        borderRadius: '50%',
                        position: 'absolute',
                        opacity: '1',
                    }}
                ></div>
            </div>

            <div className='flex flex-col md:w-[80vw] lg:w-[71vw] relative'>
                <p className='text-xs lg:text-base font-LibreBaskerville font-bold bg-gradient-to-b text-transparent bg-clip-text from-yellow-300 to-yellow-600'>Lustrum-XI KMTSL</p>
                <p className='text-2xl lg:text-5xl font-LibreBaskerville font-bold bg-gradient-to-b text-transparent bg-clip-text from-yellow-300 to-yellow-600'>Rangkaian Kegiatan & Timeline</p>
                <div className='w-full flex flex-col md:flex-row justify-center items-center gap-8'>
                    <div className='flex flex-row w-full lg:w-[50%] h-[10rem] lg:h-[13.5rem] gap-8 justify-center'>
                        <div className='w-[50%] h-full flex flex-col justify-between items-center border border-gold-500 rounded-3xl p-4 lg:p-6 my-6'>
                            <Image
                                src={'/assets/lustrum/logo_srawung_desa.png'}
                                width={1000}
                                height={1000}
                                className={`h-auto w-[80%]`}
                                alt=''/>
                            
                            <p className='text-base lg:text-lg font-LibreBaskerville font-bold bg-gradient-to-b text-transparent bg-clip-text from-yellow-300 to-yellow-600 text-center'>Srawung Desa</p>
                        </div>
                        <div className='w-[50%] h-full flex flex-col justify-between items-center border border-gold-500 rounded-3xl p-4 lg:p-6 my-6'>
                            <Image
                                src={'/assets/lustrum/logo_claproyex.png'}
                                width={1000}
                                height={1000}
                                className={`h-auto w-full`}
                                alt=''/>
                            
                            <p className='text-base lg:text-lg font-LibreBaskerville font-bold bg-gradient-to-b text-transparent bg-clip-text from-yellow-300 to-yellow-600 text-center'>Claproyex #8v</p>
                        </div>
                    </div>
                    <div className='flex flex-row w-full lg:w-[50%] h-[10rem] lg:h-[13.5rem] gap-8 justify-center'>
                        <div className='w-[50%] h-full flex flex-col justify-between items-center border border-gold-500 rounded-3xl p-4 lg:p-6 my-6'>
                            <Image
                                src={'/assets/lustrum/logo_ciaxpktsl.png'}
                                width={1000}
                                height={1000}
                                className={`h-auto w-full md:my-4`}
                                alt=''/>
                            
                            <p className='text-base lg:text-lg font-LibreBaskerville font-bold bg-gradient-to-b text-transparent bg-clip-text from-yellow-300 to-yellow-600 text-center'>CIA x PKTSL</p>
                        </div>
                        <div className='w-[50%] h-full flex flex-col justify-between items-center border border-gold-500 rounded-3xl p-4 lg:p-6 my-6'>
                            <Image
                                src={'/assets/lustrum/logo_ceremony.png'}
                                width={1000}
                                height={1000}
                                className={`h-auto w-full md:my-4`}
                                alt=''/>
                            
                            <p className='text-base lg:text-lg font-LibreBaskerville font-bold bg-gradient-to-b text-transparent bg-clip-text from-yellow-300 to-yellow-600 text-center'>Ceremony</p>
                        </div>
                    </div>
                </div>
                <div className='w-full flex flex-col md:flex-row mt-9 justify-between gap-6 md:gap-0 py-16 ps-[30%] md:ps-0 relative'>
                    <Image
                        src={'/assets/lustrum/timeline.png'}
                        width={1000}
                        height={1000}
                        className={`h-auto w-full absolute rotate-90 md:rotate-0 top-[50%] -left-[30%] md:top-[15%] md:left-auto`}
                        alt=''/>
                    <div className='flex flex-col justify-center md:text-center'>
                        <p className='text-xl lg:text-2xl font-sans font-bold bg-gradient-to-b text-transparent bg-clip-text from-yellow-300 to-yellow-600'>Opening</p>
                        <p className='text-base font-sans font-bold bg-gradient-to-b text-transparent bg-clip-text from-yellow-300 to-yellow-600'>26 April 2024</p>
                    </div>
                    <div className='flex flex-col justify-center md:text-center'>
                        <p className='text-xl lg:text-2xl font-sans font-bold bg-gradient-to-b text-transparent bg-clip-text from-yellow-300 to-yellow-600'>Srawung Desa</p>
                        <p className='text-base font-sans font-bold bg-gradient-to-b text-transparent bg-clip-text from-yellow-300 to-yellow-600'>31 Juni - 22 Juli 2024</p>
                    </div>
                    <div className='flex flex-col justify-center md:text-center'>
                        <p className='text-xl lg:text-2xl font-sans font-bold bg-gradient-to-b text-transparent bg-clip-text from-yellow-300 to-yellow-600'>Claporex</p>
                        <p className='text-base font-sans font-bold bg-gradient-to-b text-transparent bg-clip-text from-yellow-300 to-yellow-600'>4 Mei & 3-8 Juni 2024</p>
                    </div>
                    <div className='flex flex-col justify-center md:text-center'>
                        <p className='text-xl lg:text-2xl font-sans font-bold bg-gradient-to-b text-transparent bg-clip-text from-yellow-300 to-yellow-600'>CIA x PKTSL</p>
                        <p className='text-base font-sans font-bold bg-gradient-to-b text-transparent bg-clip-text from-yellow-300 to-yellow-600'>23 Juli & 24-25 Mei 2024</p>
                    </div>
                    <div className='flex flex-col justify-center md:text-center'>
                        <p className='text-xl lg:text-2xl font-sans font-bold bg-gradient-to-b text-transparent bg-clip-text from-yellow-300 to-yellow-600'>PAS</p>
                        <p className='text-base font-sans font-bold bg-gradient-to-b text-transparent bg-clip-text from-yellow-300 to-yellow-600'>27 Juli 2024</p>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default Kegiatan;
