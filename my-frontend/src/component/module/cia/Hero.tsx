'use client'
import Image from 'next/image';
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

    return (
        <>
            <Image
                src={`/assets/cia/lustrum_logo.png`}
                className='h-28 w-auto absolute top-[15%] left-[30%]'
                width={1000}
                height={1000}
                style={{ transform: `rotate(${rotation}deg)` }}
                alt={''}
            />

            <Image
                src={`/assets/cia/craft_logo.png`}
                className='h-28 w-auto absolute top-[15%] right-[30%]'
                width={1000}
                height={1000}
                style={{ transform: `rotate(${rotation}deg)` }}
                alt={''}
            />

            <Image
                src={`/assets/cia/helm.png`}
                className='h-28 w-auto absolute top-[35%] left-[3%]'
                width={1000}
                height={1000}
                style={{ transform: `rotate(${rotation}deg)` }}
                alt={''}
            />

            <Image
                src={`/assets/cia/screw_key.png`}
                className='h-28 w-auto absolute bottom-[15%] left-[14%]'
                width={1000}
                height={1000}
                style={{ transform: `rotate(${rotation}deg)` }}
                alt={''}
            />

            <Image
                src={`/assets/cia/note.png`}
                className='h-28 w-auto absolute bottom-[10%] left-[33%]'
                width={1000}
                height={1000}
                style={{ transform: `rotate(${rotation}deg)` }}
                alt={''}
            />

            <Image
                src={`/assets/cia/calculator.png`}
                className='h-28 w-auto absolute bottom-[10%] right-[33%]'
                width={1000}
                height={1000}
                style={{ transform: `rotate(${rotation}deg)` }}
                alt={''}
            />

            <Image
                src={`/assets/cia/chart_down.png`}
                className='h-24 w-auto absolute bottom-[15%] right-[10%]'
                width={1000}
                height={1000}
                style={{ transform: `rotate(${rotation}deg)` }}
                alt={''}
            />
            <Image
                src={`/assets/cia/magnifier.png`}
                className='h-28 w-auto absolute top-[35%] right-[10%]'
                width={1000}
                height={1000}
                style={{ transform: `rotate(${rotation}deg)` }}
                alt={''}
            />

            <div
                className="min-h-screen w-full"
            >
                <div className="flex min-h-screen w-full items-center justify-center py-2 px-8">
                    <div className="flex flex-col items-center text-center">
                        <Image
                            src={`/assets/cia/title.png`}
                            className='w-[769px] h-auto justify-center z-50'
                            width={1000}
                            height={1000}
                            alt={''}
                        />
                        <div className='text-white w-[70%] my-4'>
                            <p className='mb-2 z-50'>12th Civil In Action x Craft x Lustrum XI KMTSL</p>
                            <p className='z-50'>Civil In Action adalah event tahunan yang diselenggarakan oleh mahasiswa Departemen Teknik Sipil dan Lingkungan (DTSL) Fakultas Teknik UGM yang bertujuan sebagai wadah untuk mengembangkan ilmu pengetahuan dan keprofesian di bidang teknik sipil dan lingkungan bagi semua pihak yang terlibat</p>
                        </div>
                        <div className='flex flex-row gap-4 w-[40%] justify-center font-sans'>
                            <div className='relative w-full border border-white text-white px-4 py-2 rounded-md font-bold z-50'>Masuk</div>
                            <div className='w-full border-r-[3px] border-b-[3px] border-gray-200 bg-white shadow-md shadow-gray-800 text-chiasGreen-500 px-4 py-2 rounded-md font-bold z-50'>Daftar Sekarang !</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero;
