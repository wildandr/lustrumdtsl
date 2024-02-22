'use client'
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export function Sponsorship() {

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

    return (
        <div id='contact' className='w-full min-h-screen p-6 flex flex-col items-center justify-center bg-black relative overflow-x-clip'>

            {/* <div className='absolute min-h-screen w-full'>
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
                    className="-left-[100%] -top-[15%] md:top-auto md:-left-[35%] lg:-top-[10%] lg:-left-[20%] w-[36rem] h-[36rem] lg:w-[40rem] lg:h-[40rem] mix-blend-lighten"
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
            </div> */}
            <div
                className="-left-[100%] -top-[15%] md:top-auto md:-left-[35%] lg:-top-[10%] lg:-left-[10%] w-[36rem] h-[36rem] lg:w-[40rem] lg:h-[40rem] mix-blend-lighten"
                style={{
                    background: "radial-gradient(50% 50% at 50% 50%, rgba(137, 108, 0, 0.35) 0%, rgba(255, 235, 162, 0.00) 100%)",
                    filter: 'box-shadow(0px 0px 50px rgba(251, 222, 11, 1))',
                    borderRadius: '50%',
                    position: 'absolute',
                    opacity: '1',
                }}
            ></div>

            <div id='sponsor_lustrum' className='flex flex-col w-[90%] lg:w-[80%] border border-gold-500 rounded-2xl p-9'>
                <div className='flex flex-row justify-center items-center w-full gap-4 p-8 lg:p-8'>
                    <Image
                        src={`/assets/lustrum/logo.png`}
                        className='w-auto h-10 lg:h-[7rem]'
                        width={1000}
                        height={1000}
                        alt={''}
                    />
                    <Image
                        src={`/assets/lustrum/ugm.svg`}
                        className='w-auto h-10 lg:h-[7rem]'
                        width={1000}
                        height={1000}
                        alt={''}
                    />
                    <Image
                        src={`/assets/lustrum/logo_kmtsl_clear.svg`}
                        className='w-auto h-10 lg:h-[7rem]'
                        width={1000}
                        height={1000}
                        alt={''}
                    />
                </div>
                <div className='flex flex-col justify-center items-center w-full gap-4'>
                    <div className='w-full flex flex-col lg:flex-row items-center lg:p-4'>
                        <div className='w-full flex flex-col items-start justify-center gap-3 lg:gap-5'>
                            <p className='font-LibreBaskerville text-xl lg:text-4xl font-bold bg-gradient-to-b text-transparent bg-clip-text from-[#F2D87A] to-[#E0B620]'>Informasi Lebih Lanjut</p>
                            <div>
                                <p className='font-bold font-LibreBaskerville text-xs lg:text-base text-[#E5C039]'>Instagram: <Link className='hover:text-blue-400 underline' href='https://www.instagram.com/lustrumkmtsl?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=='>@lustrumkmtsl</Link></p>
                                <p className='font-bold font-LibreBaskerville text-xs lg:text-base text-[#E5C039]'>Email: lustrum11kmtsl@gmail.com</p>
                            </div>
                            <div>
                                <p className='font-bold font-LibreBaskerville text-xs lg:text-base text-[#E5C039]'>Rahma Putri Adila</p>
                                <p className='font-bold font-LibreBaskerville text-xs lg:text-base text-[#E5C039]'>Email: rahmaputriadila@mail.ugm.ac.id</p>
                                <p className='font-bold font-LibreBaskerville text-xs lg:text-base text-[#E5C039]'>Whatsapp: <Link className='hover:text-blue-400 underline' href='https://wa.me/6287738526722'>081285398072</Link></p>
                            </div>
                            <div>
                                <p className='font-bold font-LibreBaskerville text-xs lg:text-base text-[#E5C039]'>Adi Arrasyid</p>
                                <p className='font-bold font-LibreBaskerville text-xs lg:text-base text-[#E5C039]'>Email: adiarrasyid@mail.ugm.ac.id</p>
                                <p className='font-bold font-LibreBaskerville text-xs lg:text-base text-[#E5C039]'>Whatsapp: <Link className='hover:text-blue-400 underline' href='https://wa.me/6289693940129'>089693940129</Link></p>
                            </div>
                        </div>
                        <div className='w-full h-full flex flex-col items-center justify-center mt-6 lg:mt-0'>
                            <div className='w-full flex flex-col border border-gold-500 items-center justify-center p-[10%] rounded-3xl'>
                                <Image
                                src={`/assets/lustrum/proposal.png`}
                                className='w-auto h-[10.5rem] lg:h-[12rem] object-contain'
                                width={1000}
                                height={1000}
                                alt={''}
                                />
                                <Link href={`https://drive.google.com/file/d/11NhCcgID6pnfR-fz3hKWZpZ9P9iVC2V7/view?usp=drive_link`} style={{background: "var(--gold, linear-gradient(180deg, #F2D87A 0%, #E0B620 100%))"}} className='flex flex-row w-full lg:w-[40%] justify-center border text-black px-4 py-2 rounded-lg font-bold text-xs lg:text-base hover:opacity-50 items-center'>Sponsorship 
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
        
    )
}

export default Sponsorship;
