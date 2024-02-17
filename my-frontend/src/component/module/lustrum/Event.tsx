'use client'
import Image from 'next/image';
import { useEffect, useState } from 'react';

export function Event() {

    const backgroundImage = {
        backgroundImage: `url(/assets/cia/bg_texture_cia.png)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
    };

    return (
        <>
        <div className='min-h-screen p-6 flex flex-col items-center justify-center bg-black relative overflow-x-clip'>
            <div className='flex min-h-screen w-full justify-center ms-[80%] lg:ms-0 absolute'>
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
                        className="bintang top-[15%] -left-[10%] lg:top-[40%] lg:right-[20%] animate-twinkle-2s"
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
                        className="bintang bottom-[25%] -left-[10%] lg:bottom-[25%] lg:right-[5%] animate-twinkle-4s"
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
                        className="bintang bottom-[10%] right-[25%] animate-twinkle-3s"
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
                        className="bintang bottom-[15%] left-[25%] animate-twinkle-2s"
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
                <Image
                 src={'/assets/lustrum/bottom_film.png'}
                 className={`w-[19rem] md:w-[30rem] lg:w-[40rem] h-auto absolute -top-[10%] right-[30%] lg:-top-[20%] lg:right-0 opacity-50`}
                 width={1000}
                 height={1000}
                 alt={''}
                 style={{ maskImage: 'linear-gradient(to right, transparent 0%, black 50%)' }}
                />
                <div
                    className="-left-[100%] -top-[0%] md:top-[20%] md:-left-[35%] lg:-top-[10%] lg:left-[5%] w-[36rem] h-[36rem] lg:w-[40rem] lg:h-[40rem] mix-blend-lighten"
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
                <p className='text-3xl md:text-3xl lg:text-5xl font-LibreBaskerville font-bold bg-gradient-to-b text-transparent bg-clip-text from-[#F2D87A] to-[#E0B620]'>Srawung Desa</p>
                <p className='mt-4 text-xs md:text-sm lg:text-xl font-LibreBaskerville font-bold bg-gradient-to-b text-transparent bg-clip-text from-[#F2D87A] to-[#E0B620]'>Acara Srawung Desa 2024 bertemakan "Kolaborasi Bersama: Mewartakan Masa Depan Nusantara." Fokusnya adalah pemberdayaan Dusun Watukangsi, Desa Wukirharjo, dengan penekanan pada sektor kebudayaan. Mahasiswa DTSL UGM akan melibatkan diri dalam pembangunan, pendidikan, dan pelestarian budaya. Kegiatan ini mencakup pembangunan balai dusun untuk kegiatan formal dan ruang diskusi. Tujuannya adalah menciptakan lingkaran harmoni kolaborasi untuk mewujudkan pemberdayaan yang tangguh dalam pembangunan masa depan bangsa.</p>
                <button style={{border: "1px solid var(--gold, #F2D87A)"}} className='w-fit flex flex-row items-center border bg-gradient-to-b bg-clip-text from-[#F2D87A] to-[#E0B620] text-gold-500 px-4 py-2 mt-5 md:mt-8 rounded-xl font-bold text-xs lg:text-base hover:opacity-80'>Coming Soon 
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="100" viewBox="0 0 24 24" className="fill-current bg-gradient-to-b bg-clip-text from-[#F2D87A] to-[#E0B620] text-gold-500 h-5">
                            <path d="M11.109,3L11.109,3C9.78,3,8.988,4.481,9.725,5.587L14,12l-4.275,6.413C8.988,19.519,9.78,21,11.109,21h0 c0.556,0,1.076-0.278,1.385-0.741l4.766-7.15c0.448-0.672,0.448-1.547,0-2.219l-4.766-7.15C12.185,3.278,11.666,3,11.109,3z"></path>
                        </svg>
                    </span>
                </button>
            </div>
        </div>
        <div className='min-h-screen p-6 flex flex-col items-center justify-center bg-black relative overflow-x-clip'>
            <div className='flex min-h-screen w-full justify-center ms-[80%] lg:ms-0 absolute'>
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
                        className="bintang top-[15%] -left-[10%] lg:top-[40%] lg:right-[20%] animate-twinkle-2s"
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
                        className="bintang bottom-[25%] -left-[10%] lg:bottom-[25%] lg:right-[5%] animate-twinkle-4s"
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
                        className="bintang bottom-[10%] right-[25%] animate-twinkle-3s"
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
                        className="bintang bottom-[15%] left-[25%] animate-twinkle-2s"
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
                <Image
                 src={'/assets/lustrum/bottom_film.png'}
                 className={`w-[19rem] md:w-[30rem] lg:w-[40rem] h-auto absolute -top-[10%] right-[30%] lg:-top-[20%] lg:right-0 opacity-50`}
                 width={1000}
                 height={1000}
                 alt={''}
                 style={{ maskImage: 'linear-gradient(to right, transparent 0%, black 100%)' }}
                />
                <Image
                 src={'/assets/lustrum/top_film.png'}
                 className={`w-[24rem] md:w-[35rem] lg:w-[53rem] h-auto absolute -top-[15%] -left-[50%] lg:-top-[25%] lg:left-0 opacity-50`}
                 width={1000}
                 height={1000}
                 alt={''}
                 style={{ maskImage: 'linear-gradient(to left, transparent 0%, black 100%)' }}
                />
                <div
                    className="-left-[100%] -top-[0%] md:top-[20%] md:-left-[35%] lg:lg:-top-[10%] lg:left-[5%] w-[36rem] h-[36rem] lg:w-[40rem] lg:h-[40rem] mix-blend-lighten"
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
                <p className='text-xs md:text-sm lg:text-base font-LibreBaskerville font-bold bg-gradient-to-b text-transparent bg-clip-text from-[#F2D87A] to-[#E0B620]'>CLAPROYEX #8</p>
                <p className='mt-4 text-2xl md:text-3xl lg:text-5xl font-LibreBaskerville font-bold bg-gradient-to-b text-transparent bg-clip-text from-[#F2D87A] to-[#E0B620]'>Clapeyron Proyek dan Expo Ke-8</p>
                <p className='mt-4 text-xs md:text-sm lg:text-xl font-LibreBaskerville font-bold bg-gradient-to-b text-transparent bg-clip-text from-[#F2D87A] to-[#E0B620]'>CLAPROYEX #8 (Clapeyron Proyek dan Expo Ke-8) adalah acara yang diselenggarakan oleh Badan Pers Mahasiswa Teknik Sipil Clapeyron UGM dengan tema "Menyuarakan Narasi Pembangunan Menuju Sumberdaya Air Berkelanjutan di Indonesia." Tujuan acara ini adalah meningkatkan pemahaman dan kesadaran masyarakat tentang urgensi pengelolaan sumber daya air yang berkelanjutan. Melalui platform ini, Badan Pers ingin menjadi jembatan informasi dan edukasi antara mahasiswa dan masyarakat umum.</p>
                <button style={{border: "1px solid var(--gold, #F2D87A)"}} className='w-fit flex flex-row items-center border bg-gradient-to-b bg-clip-text from-[#F2D87A] to-[#E0B620] text-gold-500 px-4 py-2 mt-5 md:mt-8 rounded-xl font-bold text-xs lg:text-base hover:opacity-80'>Coming Soon
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="100" viewBox="0 0 24 24" className="fill-current bg-gradient-to-b bg-clip-text from-[#F2D87A] to-[#E0B620] text-gold-500 h-5">
                            <path d="M11.109,3L11.109,3C9.78,3,8.988,4.481,9.725,5.587L14,12l-4.275,6.413C8.988,19.519,9.78,21,11.109,21h0 c0.556,0,1.076-0.278,1.385-0.741l4.766-7.15c0.448-0.672,0.448-1.547,0-2.219l-4.766-7.15C12.185,3.278,11.666,3,11.109,3z"></path>
                        </svg>
                    </span>
                </button>
            </div>
        </div>
        <div className='min-h-screen p-6 flex flex-col items-center justify-center bg-black relative overflow-x-clip'>
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
                        className="bintang bottom-[10%] right-[25%] animate-twinkle-3s"
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
                        className="bintang bottom-[15%] left-[25%] animate-twinkle-2s"
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
            <div className='flex min-h-screen w-full justify-center ms-[80%] lg:ms-0 absolute'>
                <Image
                 src={'/assets/lustrum/bottom_film.png'}
                 className={`w-[19rem] md:w-[30rem] lg:w-[40rem] h-auto absolute -top-[10%] right-[30%] lg:-top-[20%] lg:right-0 opacity-50`}
                 width={1000}
                 height={1000}
                 alt={''}
                 style={{ maskImage: 'linear-gradient(to right, transparent 0%, black 100%)' }}
                />
                <Image
                 src={'/assets/lustrum/top_film.png'}
                 className={`w-[24rem] md:w-[35rem] lg:w-[53rem] h-auto absolute -top-[15%] -left-[50%] lg:-top-[25%] lg:left-0 opacity-50`}
                 width={1000}
                 height={1000}
                 alt={''}
                 style={{ maskImage: 'linear-gradient(to left, transparent 0%, black 100%)' }}
                />
                
                <Image
                 src={'/assets/lustrum/bottom_film.png'}
                 className={`w-[19rem] md:w-[30rem] lg:w-[40rem] h-auto absolute bottom-[0%] right-[30%] lg:bottom-[0%] lg:right-0 opacity-50`}
                 width={1000}
                 height={1000}
                 alt={''}
                 style={{ maskImage: 'linear-gradient(to right, transparent 0%, black 50%)' }}
                />
                <div
                    className="-left-[100%] -top-[0%] md:top-[20%] md:-left-[35%] lg:-top-[10%] lg:left-[5%] w-[36rem] h-[36rem] lg:w-[40rem] lg:h-[40rem] mix-blend-lighten"
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
                <p className='text-xs md:text-sm lg:text-xl font-LibreBaskerville font-bold bg-gradient-to-b text-transparent bg-clip-text from-[#F2D87A] to-[#E0B620]'>Ceremony</p>
                <p className='mt-4 text-2xl md:text-3xl lg:text-5xl font-LibreBaskerville font-bold bg-gradient-to-b text-transparent bg-clip-text from-[#F2D87A] to-[#E0B620]'>Civil Reunion Night : “Back to Home”</p>
                <p className='mt-4 text-xs md:text-sm lg:text-xl font-LibreBaskerville font-bold bg-gradient-to-b text-transparent bg-clip-text from-[#F2D87A] to-[#E0B620]'>Ceremony adalah rangkaian acara untuk merayakan HUT ke-55 KMTSL. Acara syukuran di Selasar KMTSL melibatkan civitas akademika DTSL dengan karaoke, penampilan band, dan makan bersama. NGOBRAL dengan tema "Civil Engineering for Future Indonesia" berlangsung di Ruang Sidang Biru DTSL UGM. Pada Civil Reunion Night di Laboratorium Bahan Bangunan DTSL UGM, terdapat pembukaan Lustrum, dinner, bincang-bincang antar-alumni dan dosen, serta live music dengan tema "Garden Party."</p>
                <button style={{border: "1px solid var(--gold, #F2D87A)"}} className='w-fit flex flex-row items-center border bg-gradient-to-b bg-clip-text from-[#F2D87A] to-[#E0B620] text-gold-500 px-4 py-2 mt-5 md:mt-8 rounded-xl font-bold text-xs lg:text-base hover:opacity-80'>Coming Soon 
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="100" viewBox="0 0 24 24" className="fill-current bg-gradient-to-b bg-clip-text from-[#F2D87A] to-[#E0B620] text-gold-500 h-5">
                            <path d="M11.109,3L11.109,3C9.78,3,8.988,4.481,9.725,5.587L14,12l-4.275,6.413C8.988,19.519,9.78,21,11.109,21h0 c0.556,0,1.076-0.278,1.385-0.741l4.766-7.15c0.448-0.672,0.448-1.547,0-2.219l-4.766-7.15C12.185,3.278,11.666,3,11.109,3z"></path>
                        </svg>
                    </span>
                </button>
            </div>
        </div>
        </>
        
    )
}

export default Event;
