'use client'
import { Button } from '@nextui-org/react';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export function Hero() {

    const backgroundImage = {
        backgroundImage: `url(/assets/cia/bg_texture_cia.png)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
    };

    return (
        <div className='max-h-screen relative overflow-hidden'>
            <div className='flex flex-wrap absolute w-full'>
                <Image
                    src={`/assets/lustrum/projector.png`}
                    className='h-auto w-full absolute top-12 lg:top-0 right-0'
                    width={1000}
                    height={1000}
                    alt={''}
                />
            </div>
            <div className='absolute min-h-screen w-full flex'>
                <Image
                    src={`/assets/lustrum/photos.png`}
                    className='h-[26rem] lg:h-[32rem] w-auto absolute bg-black left-0 -bottom-20'
                    width={1000}
                    height={1000}
                    style={{ maskImage: 'linear-gradient(to bottom left, transparent 0%, black 100%)' }}
                    alt={''}
                />
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
                    className="bintang bottom-[5%] left-[25%] animate-twinkle-2s"
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

                <Image
                    src={`/assets/lustrum/film.png`}
                    className='h-20 lg:h-[11rem] w-auto absolute top-[5%] md:top-[9%] right-[2%] md:right-[10%] mix-blend-overlay'
                    width={1000}
                    height={1000}
                    alt={''}
                />
                <Image
                    src={`/assets/lustrum/roll_film.png`}
                    className='h-20 lg:h-[11rem] w-auto absolute top-[10%] md:top-[15%] lg:top-[45%] right-[-2%] md:right-[3%] mix-blend-overlay'
                    width={1000}
                    height={1000}
                    alt={''}
                />
                <Image
                    src={`/assets/lustrum/panggung.png`}
                    className='left-[4%] md:hidden lg:block lg:left-[2%] top-[30%] lg:bottom-[-20%] h-[12rem] lg:h-[19rem] w-auto absolute'
                    width={1000}
                    height={1000}
                    alt={''}
                />
            </div>

            <div className="flex flex-col min-h-screen w-full bg-black z-50 justify-center items-center pt-8">
                <div className='flex flex-col lg:flex-row gap-10 items-center z-50'>
                    <Image
                        src={`/assets/lustrum/logo.png`}
                        className='h-32 w-24 lg:h-60 lg:w-auto opacity-75'
                        width={1000}
                        height={1000}
                        alt={''}
                    />
                    <div className='flex flex-wrap flex-col lg:w-[45vw] gap-3 text-center mx-8 items-center lg:items-start'>
                        <p className=' text-4xl lg:text-7xl font-LibreBaskerville font-bold bg-gradient-to-b text-transparent bg-clip-text from-[#F2D87A] to-[#E0B620]'>LUSTRUM XI</p>
                        <p className=' text-base lg:text-xl font-LibreBaskerville font-semibold bg-gradient-to-b text-transparent bg-clip-text from-[#F2D87A] to-[#E0B620]'>Keluarga Mahasiswa Teknik Sipil & lingkungan</p>
                        <p className=' text-xs lg:text-sm font-sfui bg-gradient-to-b text-transparent bg-clip-text from-[#F2D87A] to-[#E0B620] text-balance text-justify'>Keluarga Mahasiswa Teknik Sipil dan Lingkungan (KMTSL) kini telah menginjak usia ke-55 tahun. Dalam perjalanannya, KMTSL telah mengabdikan diri terhadap perkembangan Indonesia terkhusus pada bidang infrastruktur yang bersinggungan secara langsung dengan pembelajaran yang terjadi di perkuliahan. Melalui anggota dan alumninya, KMTSL telah banyak memberikan warna bagi Indonesia dan masyarakat dengan berbagai karya sebagai bentuk kontribusi untuk kemajuan Indonesia, baik di bidang kemajuan infrastruktur maupun pengembangan sosial masyarakat.</p>
                        <div className='flex flex-col lg:flex-row w-full gap-4 mt-5 md:mt-8'>
                            <Link href={`#event`} style={{border: "1px solid var(--gold, #F2D87A)"}} className='flex flex-row w-full lg:w-[40%] justify-center border text-gold-500 px-4 py-2 rounded-lg font-bold text-xs lg:text-base hover:opacity-50 items-center'>Explore Event 
                                <span>
                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="100" viewBox="0 0 24 24" className="fill-current text-gold-500 h-5">
                                    <path d="M11.109,3L11.109,3C9.78,3,8.988,4.481,9.725,5.587L14,12l-4.275,6.413C8.988,19.519,9.78,21,11.109,21h0 c0.556,0,1.076-0.278,1.385-0.741l4.766-7.15c0.448-0.672,0.448-1.547,0-2.219l-4.766-7.15C12.185,3.278,11.666,3,11.109,3z"></path>
                                </svg>
                                </span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero;
