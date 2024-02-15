'use client'
import Image from 'next/image';
import { useEffect, useState } from 'react';

export function Timeline() {

    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768); // Mengubah menjadi mobile ketika lebar layar <= 768px
        };

        window.addEventListener('resize', handleResize);
        handleResize(); // Panggil untuk menetapkan nilai awal saat komponen dimuat

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const backgroundImage = {
        backgroundImage: isMobile ? `url(/assets/lustrum/bg_book_mobile.png)` : `url(/assets/lustrum/bg_book.png)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
    };

    return (
        <div className='min-h-screen w-full px-[10%] flex flex-col lg:flex-row lg:items-center lg:justify-center relative overflow-hidden'>

            <Image
                 src={'/assets/lustrum/photo_2.png'}
                 width={1000}
                 height={1000}
                 className={`absolute w-[70%] h-auto lg:h-[70%] lg:w-auto lg:left-[0] lg:bottom-0 lg:top-auto lg:right-auto top-0 right-0 opacity-25`}
                 alt=''
                 style={{ maskImage: 'linear-gradient(to bottom left, transparent 10%, black 100%)' }}/>

            <div className='lg:h-[38rem] w-full my-8'>
                <div className='w-full flex flex-col items-start pe-[40%]'>
                    <p className=' text-xs lg:text-base font-LibreBaskerville text-gold-500'>Lustrum-XI KMTSL</p>
                    <p className=' text-5xl font-LibreBaskerville text-gold-500'>Rangkaian Kegiatan</p>
                    <p className=' text-xs lg:text-base font-LibreBaskerville text-gold-500'>Ceremony Lustrum</p>
                    <div className='text-xs lg:text-sm'>
                        <p className=' font-LibreBaskerville text-gold-500'>● Pameran Claproyek</p>
                        <p className=' font-LibreBaskerville text-gold-500'>● NGOBRAL (Ngobrol Bareng Alumni)</p>
                        <p className=' font-LibreBaskerville text-gold-500'>● Malam Reuni: Civil Reunion Night</p>
                        <p className=' font-LibreBaskerville text-gold-500'>● Pentas Aksi Sipil “Renjana”</p>
                    </div>
                </div>
            </div>
            <div className='relative h-[32rem] lg:h-[38rem] w-full flex flex-col justify-center p-[5%]' style={backgroundImage}>

                <Image
                 src={'/assets/lustrum/ornamen_timeline.png'}
                 width={1000}
                 height={1000}
                 className={`absolute hidden lg:block h-full w-auto -left-[60%] my-[20%]`}
                 alt=''/>

                <div className='w-full flex flex-col items-end'>
                    <p className=' md:text-xl lg:text-2xl font-LibreBaskerville text-black'>CLAPROYEX #8</p>
                    <p className='text-xs md:text-sm lg:text-base font-LibreBaskerville text-black'>(Clapeyron Proyek dan Expo Ke-8)</p>
                    <p className='text-xs md:text-sm lg:text-base font-LibreBaskerville text-black'>● Pameran Claproyek</p>
                    <p className='text-xs md:text-sm lg:text-base font-LibreBaskerville text-black'>● Seminar Nasional</p>
                </div>
                <div className='w-full flex flex-col items-start ms-[10%] md:ms-[15%] lg:ms-[20%]'>
                    <p className=' md:text-xl lg:text-2xl font-LibreBaskerville text-black'>Srawung Desa</p>
                    <p className='text-xs md:text-sm lg:text-base font-LibreBaskerville text-black'>● Sipil Mengajar</p>
                    <p className='text-xs md:text-sm lg:text-base font-LibreBaskerville text-black'>● KMTSL Berbagi</p>
                    <p className='text-xs md:text-sm lg:text-base font-LibreBaskerville text-black'>● Survei dan Perencanaan</p>
                    <p className='text-xs md:text-sm lg:text-base font-LibreBaskerville text-black'>● Festival Budaya</p>
                </div>
                <div className='w-full flex flex-col items-end'>
                    <p className=' md:text-xl lg:text-2xl font-LibreBaskerville text-black'>CIA x PKTSL</p>
                    <p className='text-xs md:text-sm lg:text-base font-LibreBaskerville text-black'>● SBC (Sustainable Bridge Competition) CIC</p>
                    <p className='text-xs md:text-sm lg:text-base font-LibreBaskerville text-black'>● (Civil Innovation Challenge) FCEC</p>
                    <p className='text-xs md:text-sm lg:text-base font-LibreBaskerville text-black'>● (Future Civil Engineer Challenge) CRAFT</p>
                    <p className='text-xs md:text-sm lg:text-base font-LibreBaskerville text-black'>● (Civil Engineering Advance Software</p>
                    <p className='text-xs md:text-sm lg:text-base font-LibreBaskerville text-black'>Training oleh PKTSL)</p>
                </div>
            </div>
        </div>
        
    )
}

export default Timeline;
