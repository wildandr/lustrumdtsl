'use client'
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export function Hero() {
    const [rotation, setRotation] = useState(0);
    const [direction, setDirection] = useState(1);

    useEffect(() => {
        const interval = setInterval(() => {
            // Jika rotasi mencapai 30 atau 330 derajat, balik arah
            if (rotation >= 30 || rotation <= 1) {
                setDirection(prevDirection => -prevDirection);
            }
            // Perbarui rotasi sesuai arah pergerakan
            setRotation(prevRotation => prevRotation + 30 * direction);
        }, 500);

        return () => clearInterval(interval);
    }, [rotation, direction]);

    const backgroundImage = {
        backgroundImage: `url(/assets/cia/bg_texture_cia.png)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
    };

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

    return (
        <>
            <Image
                src={`/assets/cia/cia_logo.png`}
                className='h-16 md:h-24 w-auto absolute top-[10%] lg:top-[10%] left-[20%] md:left-[30%]'
                width={1000}
                height={1000}
                style={{ transform: `rotate(${rotation}deg)` }}
                alt={''}
            />

            <Image
                src={`/assets/cia/craft_logo.png`}
                className='h-20 md:h-28 w-auto absolute top-[10%] lg:top-[10%] right-[20%] md:right-[30%]'
                width={1000}
                height={1000}
                style={{ transform: `rotate(${rotation}deg)` }}
                alt={''}
            />

            <Image
                src={`/assets/cia/helm.png`}
                className='h-14 md:h-24 w-auto absolute top-[25%] lg:top-[35%] left-[5%]'
                width={1000}
                height={1000}
                style={{ transform: `rotate(${rotation}deg)` }}
                alt={''}
            />

            <Image
                src={`/assets/cia/screw_key.png`}
                className='h-14 lg:h-28 w-auto absolute -bottom-[5%] lg:bottom-[15%] left-[14%]'
                width={1000}
                height={1000}
                style={{ transform: `rotate(${rotation}deg)` }}
                alt={''}
            />

            <Image
                src={`/assets/cia/note.png`}
                className='h-14 md:h-24 w-auto absolute -bottom-[10%] lg:bottom-[5%] left-[33%]'
                width={1000}
                height={1000}
                style={{ transform: `rotate(${rotation}deg)` }}
                alt={''}
            />

            <Image
                src={`/assets/cia/calculator.png`}
                className='h-14 md:h-24 w-auto absolute -bottom-[10%] lg:bottom-[5%] right-[33%]'
                width={1000}
                height={1000}
                style={{ transform: `rotate(${rotation}deg)` }}
                alt={''}
            />

            <Image
                src={`/assets/cia/chart_down.png`}
                className='h-10 lg:h-24 w-auto absolute -bottom-[5%] lg:bottom-[15%] right-[10%]'
                width={1000}
                height={1000}
                style={{ transform: `rotate(${rotation}deg)` }}
                alt={''}
            />
            <Image
                src={`/assets/cia/magnifier.png`}
                className='h-20 md:h-28 w-auto absolute top-[25%] lg:top-[35%] right-[5%] lg:right-[10%]'
                width={1000}
                height={1000}
                style={{ transform: `rotate(${rotation}deg)` }}
                alt={''}
            />

            <div
                className="min-h-screen w-full"
            >
                <div className="flex min-h-screen w-full items-center justify-center py-2 px-8">
                    <div className="flex flex-col items-center text-center mt-[30%] lg:mt-4">
                        <Image
                            src={isDeviceGreaterThanLg ? `/assets/cia/title_new.png` : `/assets/cia/title_mobile.png`}
                            className='w-[669px] h-auto justify-center z-50'
                            width={1000}
                            height={1000}
                            alt={''}
                        />
                        <div className='text-white w-full lg:w-[70%] my-4'>
                            <p className='mb-2 z-50 text-xl lg:text-3xl font-LibreBaskerville'>12th Civil In Action x Craft x Lustrum XI KMTSL</p>
                            <p className='z-50 text-xs lg:text-base font-sfui'>Civil In Action adalah event tahunan yang diselenggarakan oleh mahasiswa Departemen Teknik Sipil dan Lingkungan (DTSL) Fakultas Teknik UGM yang bertujuan sebagai wadah untuk mengembangkan ilmu pengetahuan dan keprofesian di bidang teknik sipil dan lingkungan bagi semua pihak yang terlibat</p>
                        </div>
                        <div className='flex flex-col lg:flex-row gap-4 w-full justify-center items-center font-sans'>
                            <Link href={`/cia/login`} className='w-full lg:w-[20%] relative border border-white text-white px-4 py-2 rounded-md font-bold z-50 hover:opacity-50'>Masuk</Link>
                            <Link href={`/cia/register`} className='w-full lg:w-[20%] border-r-[3px] border-b-[3px] border-gray-200 bg-white shadow-md shadow-gray-800 text-chiasGreen-500 px-4 py-2 rounded-md font-bold z-50 hover:opacity-50'>Daftar Sekarang !</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero;
