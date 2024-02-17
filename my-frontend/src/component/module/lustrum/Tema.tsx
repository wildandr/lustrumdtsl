'use client'
import Image from 'next/image';
import { useEffect, useState } from 'react';

export function Tema() {

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
            </div>

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

            <div className='flex flex-col lg:w-[71vw] relative gap-4'>
                <p className='text-xs lg:text-base font-LibreBaskerville font-bold bg-gradient-to-b text-transparent bg-clip-text from-[#F2D87A] to-[#E0B620]'>Tema Lustrum-XI KMTSL</p>
                <p className='text-2xl lg:text-5xl font-LibreBaskerville font-bold bg-gradient-to-b text-transparent bg-clip-text from-[#F2D87A] to-[#E0B620]'>“Solidaritas Sipil untuk Pembangunan Negeri”</p>
                <p className='text-xs lg:text-xl font-LibreBaskerville font-bold bg-gradient-to-b text-transparent bg-clip-text from-[#F2D87A] to-[#E0B620] text-justify'>Melalui serangkaian kegiatan Lustrum-XI KMTSL dengan tema “Solidaritas Sipil untuk Pembangunan Negeri” yang melibatkan berbagai pihak, kami berharap dapat menciptakan pemahaman yang lebih baik tentang urgensi pembangunan berkelanjutan, meningkatkan kesadaran akan peran individu dalam mencapai tujuan bersama, serta menciptakan pembangunan berkelanjutan dan progresif menuju Indonesia yang emas, berkelanjutan, dan berkemajuan.</p>
                <Image
                    src={`/assets/lustrum/lighting.png`}
                    className='h-full w-auto lg:w-full lg:h-auto absolute -bottom-[100%] lg:-bottom-[110%]'
                    width={1000}
                    height={1000}
                    alt={''}
                />
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
