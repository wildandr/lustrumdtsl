'use client'
import Image from 'next/image';
import { useEffect, useState } from 'react';

export function Galeri() {

    const backgroundImage = {
        backgroundImage: `url(/assets/cia/bg_tema_cia.png)`,
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
        <div
         className='relative min-h-screen p-6 pb-28 flex flex-col items-center justify-center overflow-hidden'>
                <Image
                    src={`/assets/cia/bg_titel_3.png`}
                    width={1000}
                    height={1000}
                    alt=''
                    className='absolute top-[3%] md:top-[0%] h-auto w-[80%] px-[5%] lg:w-[40%]'/>
                
                <p className='w-[80%] lg:w-[40%] absolute text-center text-chiasGreen-500 text-xl lg:text-4xl top-[5%] md:top-[3%] font-LibreBaskerville font-bold'>
                    Galeri Linimasa SBC
                </p>

                <div className='flex flex-col justify-center items-center relative w-full h-full mt-[10%]'>
                    <Image
                        src={isDeviceGreaterThanLg ? `/assets/cia/bg_galeri.png` : `/assets/cia/bg_galeri_mobile.png`}
                        width={1000}
                        height={1000}
                        alt=''
                        className='h-auto w-[85%]'/>
                        <div className="w-[65%] h-[80%] lg:h-[60%] lg:w-[70%] grid grid-cols-2 lg:grid-cols-4 grid-rows-4 lg:grid-rows-2 gap-4 absolute top-[10%] lg:top-[20%]">
                            <div className="bg-gray-200 border border-gray-400 flex justify-center">
                                <Image
                                    src={`/assets/cia/kecilin_sbc1.jpeg`}
                                    width={1000}
                                    height={1000}
                                    alt=''
                                    className='h-full w-auto'/>
                            </div>
                            <div className="bg-gray-200 border border-gray-400">
                                <Image
                                    src={`/assets/cia/kecilin_sbc2.jpeg`}
                                    width={1000}
                                    height={1000}
                                    alt=''
                                    className='h-full w-auto'/>
                            </div>
                            <div className="bg-gray-200 border border-gray-400">
                                <Image
                                    src={`/assets/cia/kecilin_sbc3.jpeg`}
                                    width={1000}
                                    height={1000}
                                    alt=''
                                    className='h-full w-auto'/>
                            </div>
                            <div className="bg-gray-200 border border-gray-400">
                                <Image
                                    src={`/assets/cia/kecilin_sbc4.jpeg`}
                                    width={1000}
                                    height={1000}
                                    alt=''
                                    className='h-full w-auto'/>
                            </div>
                            <div className="bg-gray-200 border border-gray-400">
                                <Image
                                    src={`/assets/cia/kecilin_sbc5.jpeg`}
                                    width={1000}
                                    height={1000}
                                    alt=''
                                    className='h-full w-auto'/>
                            </div>
                            <div className="bg-gray-200 border border-gray-400">
                                <Image
                                    src={`/assets/cia/kecilin_sbc6.jpeg`}
                                    width={1000}
                                    height={1000}
                                    alt=''
                                    className='h-full w-auto'/>
                            </div>
                            <div className="bg-gray-200 border border-gray-400">
                                <Image
                                    src={`/assets/cia/kecilin_sbc7.jpeg`}
                                    width={1000}
                                    height={1000}
                                    alt=''
                                    className='h-full w-auto'/>
                            </div>
                            <div className="bg-gray-200 border border-gray-400">
                                <Image
                                    src={`/assets/cia/kecilin_sbc8.jpeg`}
                                    width={1000}
                                    height={1000}
                                    alt=''
                                    className='h-full w-auto'/>
                            </div>
                            {/* <div className="bg-gray-200 border border-gray-400">9</div>
                            <div className="bg-gray-200 border border-gray-400">10</div>

                        
                            <div className="bg-gray-200 border border-gray-400">11</div>
                            <div className="bg-gray-200 border border-gray-400">12</div>
                            <div className="bg-gray-200 border border-gray-400">13</div>
                            <div className="bg-gray-200 border border-gray-400">14</div>
                            <div className="bg-gray-200 border border-gray-400">15</div> */}
                        </div>

                </div>
        </div>
        <div
         className='relative min-h-screen p-6 pb-28 flex flex-col items-center justify-center overflow-hidden'>
                <Image
                    src={`/assets/cia/bg_titel_3.png`}
                    width={1000}
                    height={1000}
                    alt=''
                    className='absolute top-[3%] md:top-[0%] h-auto w-[80%] px-[5%] lg:w-[40%]'/>
                
                <p className='w-[80%] lg:w-[40%] absolute text-center text-chiasGreen-500 text-xl lg:text-4xl top-[5%] md:top-[3%] font-LibreBaskerville font-bold'>
                    Galeri Linimasa CIC
                </p>

                <div className='flex flex-col justify-center items-center relative w-full h-full mt-[10%]'>
                    <Image
                        src={isDeviceGreaterThanLg ? `/assets/cia/bg_galeri.png` : `/assets/cia/bg_galeri_mobile.png`}
                        width={1000}
                        height={1000}
                        alt=''
                        className='h-auto w-[85%]'/>
                        <div className="w-[65%] h-[80%] lg:h-[60%] lg:w-[70%] grid grid-cols-2 lg:grid-cols-4 grid-rows-4 lg:grid-rows-2 gap-4 absolute top-[10%] lg:top-[20%]">
                            <div className="bg-gray-200 border border-gray-400 flex justify-center">
                                <Image
                                    src={`/assets/cia/kecilin_cic1.jpeg`}
                                    width={1000}
                                    height={1000}
                                    alt=''
                                    className='h-full w-auto'/>
                            </div>
                            <div className="bg-gray-200 border border-gray-400">
                                <Image
                                    src={`/assets/cia/kecilin_cic2.jpeg`}
                                    width={1000}
                                    height={1000}
                                    alt=''
                                    className='h-full w-auto'/>
                            </div>
                            <div className="bg-gray-200 border border-gray-400">
                                <Image
                                    src={`/assets/cia/kecilin_cic3.jpeg`}
                                    width={1000}
                                    height={1000}
                                    alt=''
                                    className='h-full w-auto'/>
                            </div>
                            <div className="bg-gray-200 border border-gray-400">
                                <Image
                                    src={`/assets/cia/kecilin_cic4.jpeg`}
                                    width={1000}
                                    height={1000}
                                    alt=''
                                    className='h-full w-auto'/>
                            </div>
                            <div className="bg-gray-200 border border-gray-400">
                                <Image
                                    src={`/assets/cia/kecilin_cic5.jpeg`}
                                    width={1000}
                                    height={1000}
                                    alt=''
                                    className='h-full w-auto'/>
                            </div>
                            <div className="bg-gray-200 border border-gray-400">
                                <Image
                                    src={`/assets/cia/kecilin_cic6.jpeg`}
                                    width={1000}
                                    height={1000}
                                    alt=''
                                    className='h-full w-auto'/>
                            </div>
                            <div className="bg-gray-200 border border-gray-400">
                                <Image
                                    src={`/assets/cia/kecilin_cic7.jpeg`}
                                    width={1000}
                                    height={1000}
                                    alt=''
                                    className='h-full w-auto'/>
                            </div>
                            <div className="bg-gray-200 border border-gray-400">
                                <Image
                                    src={`/assets/cia/kecilin_cic8.jpeg`}
                                    width={1000}
                                    height={1000}
                                    alt=''
                                    className='h-full w-auto'/>
                            </div>
                            {/* <div className="bg-gray-200 border border-gray-400">9</div>
                            <div className="bg-gray-200 border border-gray-400">10</div>

                        
                            <div className="bg-gray-200 border border-gray-400">11</div>
                            <div className="bg-gray-200 border border-gray-400">12</div>
                            <div className="bg-gray-200 border border-gray-400">13</div>
                            <div className="bg-gray-200 border border-gray-400">14</div>
                            <div className="bg-gray-200 border border-gray-400">15</div> */}
                        </div>

                </div>
        </div>
        <div
         className='relative min-h-screen p-6 pb-28 flex flex-col items-center justify-center overflow-hidden'>
                <Image
                    src={`/assets/cia/bg_titel_3.png`}
                    width={1000}
                    height={1000}
                    alt=''
                    className='absolute top-[3%] md:top-[0%] h-auto w-[80%] px-[5%] lg:w-[40%]'/>
                
                <p className='w-[80%] lg:w-[40%] absolute text-center text-chiasGreen-500 text-xl lg:text-4xl top-[5%] md:top-[3%] font-LibreBaskerville font-bold'>
                    Galeri Linimasa FCEC
                </p>

                <div className='flex flex-col justify-center items-center relative w-full h-full mt-[10%]'>
                    <Image
                        src={isDeviceGreaterThanLg ? `/assets/cia/bg_galeri.png` : `/assets/cia/bg_galeri_mobile.png`}
                        width={1000}
                        height={1000}
                        alt=''
                        className='h-auto w-[85%]'/>
                        <div className="w-[65%] h-[80%] lg:h-[60%] lg:w-[70%] grid grid-cols-2 lg:grid-cols-4 grid-rows-4 lg:grid-rows-2 gap-4 absolute top-[10%] lg:top-[20%]">
                            <div className="bg-gray-200 border border-gray-400 flex justify-center">
                                <Image
                                    src={`/assets/cia/kecilin_fcec1.jpeg`}
                                    width={1000}
                                    height={1000}
                                    alt=''
                                    className='h-full w-auto'/>
                            </div>
                            <div className="bg-gray-200 border border-gray-400">
                                <Image
                                    src={`/assets/cia/kecilin_fcec2.jpeg`}
                                    width={1000}
                                    height={1000}
                                    alt=''
                                    className='h-full w-auto'/>
                            </div>
                            <div className="bg-gray-200 border border-gray-400">
                                <Image
                                    src={`/assets/cia/kecilin_fcec3.jpeg`}
                                    width={1000}
                                    height={1000}
                                    alt=''
                                    className='h-full w-auto'/>
                            </div>
                            <div className="bg-gray-200 border border-gray-400">
                                <Image
                                    src={`/assets/cia/kecilin_fcec4.jpeg`}
                                    width={1000}
                                    height={1000}
                                    alt=''
                                    className='h-full w-auto'/>
                            </div>
                            <div className="bg-gray-200 border border-gray-400">
                                <Image
                                    src={`/assets/cia/kecilin_fcec5.jpeg`}
                                    width={1000}
                                    height={1000}
                                    alt=''
                                    className='h-full w-auto'/>
                            </div>
                            <div className="bg-gray-200 border border-gray-400">
                                <Image
                                    src={`/assets/cia/kecilin_fcec6.jpeg`}
                                    width={1000}
                                    height={1000}
                                    alt=''
                                    className='h-full w-auto'/>
                            </div>
                            <div className="bg-gray-200 border border-gray-400">
                                <Image
                                    src={`/assets/cia/kecilin_fcec7.jpeg`}
                                    width={1000}
                                    height={1000}
                                    alt=''
                                    className='h-full w-auto'/>
                            </div>
                            <div className="bg-gray-200 border border-gray-400">
                                <Image
                                    src={`/assets/cia/kecilin_fcec8.jpeg`}
                                    width={1000}
                                    height={1000}
                                    alt=''
                                    className='h-full w-auto'/>
                            </div>
                            {/* <div className="bg-gray-200 border border-gray-400">9</div>
                            <div className="bg-gray-200 border border-gray-400">10</div>

                        
                            <div className="bg-gray-200 border border-gray-400">11</div>
                            <div className="bg-gray-200 border border-gray-400">12</div>
                            <div className="bg-gray-200 border border-gray-400">13</div>
                            <div className="bg-gray-200 border border-gray-400">14</div>
                            <div className="bg-gray-200 border border-gray-400">15</div> */}
                        </div>

                </div>
        </div>
        </>
        
    )
}

export default Galeri;
