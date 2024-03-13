'use client'
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export function Contact() {

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
    const isDeviceGreaterThanMd = windowWidth >= md_width

    const backgroundImage = {
        backgroundImage: `url(/assets/cia/bg_title_contact_cia.png)`,
        backgroundSize: "contain",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
    };

    return (
        <div id='contact' className='w-full min-h-screen p-6 flex flex-col items-center justify-center relative overflow-x-clip'>

            <div className='flex justify-center w-full px-[7%]'>
                <Image className='w-full h-auto' src={isDeviceGreaterThanMd ? `/assets/cia/bg_contact_cia.png` : `/assets/cia/bg_contact_cia_mobile.png`} alt='' width={1000} height={1000} />

                <div className='flex flex-col justify-center items-center w-full gap-4 absolute top-[8%] md:top-[22%] lg:top-[10%] px-[20%] md:px-[17%]'>
                    <div className='flex flex-row justify-center items-center w-full gap-4 p-x8 lg:p-8'>
                        <Image
                            src={`/assets/lustrum/logo.png`}
                            className='w-auto h-10 md:h-[4rem] lg:h-[7rem]'
                            width={1000}
                            height={1000}
                            alt={''}
                        />
                        <Image
                            src={`/assets/cia/ugm_ijo.svg`}
                            className='w-auto h-10 md:h-[4rem] lg:h-[7rem]'
                            width={1000}
                            height={1000}
                            alt={''}
                        />
                        <Image
                            src={`/assets/cia/kmtsl_ijo.svg`}
                            className='w-auto h-10 md:h-[4rem] lg:h-[7rem]'
                            width={1000}
                            height={1000}
                            alt={''}
                        />
                    </div>
                    <p className='font-LibreBaskerville text-lg lg:text-4xl font-bold text-white p-6 md:p-12' style={backgroundImage}>Informasi Lebih Lanjut</p>
                    <div className='w-full flex flex-col md:flex-row items-center lg:p-4'>
                        <div className='w-full flex flex-col items-start justify-center gap-3 lg:gap-5'>
                            <div>
                                <p className='font-bold font-LibreBaskerville lg:text-3xl 2xl:text-4xl text-chiasGreen-500'>FCEC</p>
                                <p className='font-bold font-LibreBaskerville text-xs lg:text-base text-chiasGreen-500'>1. Ara Whatsapp : <Link className='hover:text-blue-400 underline' href='https://wa.me/628971243798'>08971243798</Link></p>
                                <p className='font-bold font-LibreBaskerville text-xs lg:text-base text-chiasGreen-500'>2. Haya Whatsapp : <Link className='hover:text-blue-400 underline' href='https://wa.me/6285643172448'>085643172448</Link></p>
                            </div>
                            <div>
                                <p className='font-bold font-LibreBaskerville lg:text-3xl 2xl:text-4xl text-chiasGreen-500'>CIC</p>
                                <p className='font-bold font-LibreBaskerville text-xs lg:text-base text-chiasGreen-500'>1. Naftania Clarissa Maheswari</p>
                                <p className='font-bold font-LibreBaskerville text-xs lg:text-base text-chiasGreen-500'>WhatsApp : <Link className='hover:text-blue-400 underline' href='https://wa.me/6281209215556'>(081209215556)</Link></p>
                                <p className='font-bold font-LibreBaskerville text-xs lg:text-base text-chiasGreen-500'>Line : <Link className='hover:text-blue-400 underline' href='http://line.me/ti/p/~Naftania'>(Naftania)</Link></p>
                                <p className='font-bold font-LibreBaskerville text-xs lg:text-base text-chiasGreen-500'>2. Ezra Bagaskara</p>
                                <p className='font-bold font-LibreBaskerville text-xs lg:text-base text-chiasGreen-500'>WhatsApp : <Link className='hover:text-blue-400 underline' href='https://wa.me/6287734852924'>(087734852924)</Link></p>
                                <p className='font-bold font-LibreBaskerville text-xs lg:text-base text-chiasGreen-500'>Line : <Link className='hover:text-blue-400 underline' href='http://line.me/ti/p/~bagaskara1107'>(bagaskara1107)</Link></p>
                            </div>
                            <div>
                                <p className='font-bold font-LibreBaskerville lg:text-3xl 2xl:text-4xl text-chiasGreen-500'>SBC</p>
                                <p className='font-bold font-LibreBaskerville text-xs lg:text-base text-chiasGreen-500'>1. Muhammad Rifqi</p>
                                <p className='font-bold font-LibreBaskerville text-xs lg:text-base text-chiasGreen-500'>WhatsApp : <Link className='hover:text-blue-400 underline' href='https://wa.me/6287776282266'>087776282266</Link></p>
                                <p className='font-bold font-LibreBaskerville text-xs lg:text-base text-chiasGreen-500'>Line : <Link className='hover:text-blue-400 underline' href='http://line.me/ti/p/~muhammadrifqi_2004'>muhammadrifqi_2004</Link></p>
                                <p className='font-bold font-LibreBaskerville text-xs lg:text-base text-chiasGreen-500'>2. Kamila Balqis</p>
                                <p className='font-bold font-LibreBaskerville text-xs lg:text-base text-chiasGreen-500'>WhatsApp : <Link className='hover:text-blue-400 underline' href='https://wa.me/6282265445656'>082265445656</Link></p>
                                <p className='font-bold font-LibreBaskerville text-xs lg:text-base text-chiasGreen-500'>Line : <Link className='hover:text-blue-400 underline' href='http://line.me/ti/p/~muhammadrifqi_2004'>kbalqis.ap</Link></p>
                            </div>
                            <div>
                                <p className='font-bold font-LibreBaskerville lg:text-3xl 2xl:text-4xl text-chiasGreen-500'>CRAFT</p>
                                <p className='font-bold font-LibreBaskerville text-xs lg:text-base text-chiasGreen-500'>1. Dimas Apta : <Link className='hover:text-blue-400 underline' href='https://wa.me/628971243798'>08971243798</Link></p>
                                <p className='font-bold font-LibreBaskerville text-xs lg:text-base text-chiasGreen-500'>2. Adib Firza Maulana : <Link className='hover:text-blue-400 underline' href='https://wa.me/6285643172448'>085643172448</Link></p>
                            </div>
                            
                        </div>
                        <div className='w-full h-full flex flex-col items-center justify-center mt-6 lg:mt-0'>
                            <div className='w-full flex flex-col border border-chiasGreen-500 items-center justify-center p-[10%] rounded-3xl gap-5'>
                                <Image
                                src={`/assets/cia/proposal.png`}
                                className='w-auto h-[10.5rem] lg:h-[12rem] object-contain'
                                width={1000}
                                height={1000}
                                alt={''}
                                />
                                <Link href={`https://drive.google.com/file/d/11NhCcgID6pnfR-fz3hKWZpZ9P9iVC2V7/view?usp=drive_link`} className='flex flex-row bg-chiasGreen-500 w-full lg:w-[40%] justify-center border text-white px-4 py-2 rounded-lg font-bold text-xs lg:text-base hover:opacity-50 items-center'>Sponsorship 
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
        
    )
}

export default Contact;
