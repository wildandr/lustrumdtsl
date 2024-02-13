'use client'
import Image from 'next/image';
import { useEffect, useState } from 'react';

export function Isi() {

    const backgroundImage = {
        backgroundImage: `url(/assets/cia/bg_texture_cia.png)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
    };

    return (
        <div className='min-h-screen p-6 flex flex-col items-center justify-center bg-black relative overflow-hidden'>
            <div className='flex min-h-screen w-full justify-center mt-[60%] ms-[80%] lg:mt-[5%] lg:ms-0 absolute'>
                <Image
                 src={'/assets/lustrum/top_film.png'}
                 className={`w-[24rem] md:w-[35rem] lg:w-[53rem] h-auto absolute -top-[15%] -left-[50%] lg:-top-[25%] lg:left-0 opacity-50`}
                 width={1000}
                 height={1000}
                 alt={''}
                 style={{ maskImage: 'linear-gradient(to left, transparent 0%, black 80%)' }}
                />
                <Image
                 src={'/assets/lustrum/bottom_film.png'}
                 className={`w-[19rem] md:w-[30rem] lg:w-[40rem] h-auto absolute bottom-[15%] right-[30%] lg:-bottom-[10%] lg:right-0 opacity-50`}
                 width={1000}
                 height={1000}
                 alt={''}
                 style={{ maskImage: 'linear-gradient(to right, transparent 0%, black 50%)' }}
                />
                <div
                    className="-left-[100%] -top-[15%] md:top-auto md:-left-[35%] lg:top-auto lg:left-[5%] w-[36rem] h-[36rem] lg:w-[43rem] lg:h-[43rem] mix-blend-lighten"
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
                <p className='text-xs md:text-sm lg:text-base font-LibreBaskerville font-bold bg-gradient-to-b text-transparent bg-clip-text from-yellow-300 to-yellow-500'>CIA X PKTSLL</p>
                <p className='text-2xl md:text-3xl lg:text-5xl font-LibreBaskerville font-bold bg-gradient-to-b text-transparent bg-clip-text from-yellow-300 to-yellow-500'>Civil in Action x Pelayanan Komputer Teknik Sipil dan Lingkungan</p>
                <p className='text-xs md:text-sm lg:text-xl font-LibreBaskerville font-bold bg-gradient-to-b text-transparent bg-clip-text from-yellow-300 to-yellow-500'>Civil In Action adalah event tahunan yang diselenggarakan oleh mahasiswa Departemen Teknik Sipil dan Lingkungan (DTSL) Fakultas Teknik UGM yang bertujuan sebagai wadah untuk mengembangkan ilmu pengetahuan dan keprofesian di bidang teknik sipil dan lingkungan bagi semua pihak yang terlibat</p>
                <button style={{border: "1px solid var(--gold, #F2D87A)"}} className='w-fit border text-gold-500 px-4 py-2 mt-4 rounded-md font-bold text-xs lg:text-base hover:opacity-80'>Wesite Resmi <span></span></button>
            </div>
        </div>
        
    )
}

export default Isi;
