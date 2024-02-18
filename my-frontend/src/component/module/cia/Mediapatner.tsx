'use client'
import Image from 'next/image';
import { useEffect, useState } from 'react';

export function Mediapatner() {

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
        <div
         className='relative min-h-screen p-6 pb-28 flex flex-col items-center justify-center overflow-hidden'>

                <div className='flex flex-col justify-center items-center relative w-full h-full mt-[10%]'>
                    <Image
                        src={isDeviceGreaterThanLg ? `/assets/cia/bg_sponsor.png` : `/assets/cia/bg_sponsor_mobile.png`}
                        width={1000}
                        height={1000}
                        alt=''
                        className='h-auto w-[85%]'/>
                    {/* <Image
                        src={`/assets/cia/helm.png`}
                        width={1000}
                        height={1000}
                        alt=''
                        className='absolute w-auto h-28 top-0 right-[10%]'/> */}
                    <p className='absolute top-[10%] lg:top-[12%] font-LibreBaskerville font-bold text-lg md:text-4xl text-white'>
                        Media Patner
                    </p>
                        <div className="h- w-[65%] lg:w-[70%] grid grid-cols-2 lg:grid-cols-5 grid-rows-3 gap-4 absolute top-[25%] h-[60%]">
                            {/* Baris 1 */}
                            <div className=" flex justify-center">
                                {/* <Image
                                    src={`/assets/cia/lustrum_logo.png`}
                                    width={1000}
                                    height={1000}
                                    alt=''
                                    className='h-full w-auto'/> */}
                            </div>
                            <div className="">2</div>
                            <div className="">3</div>
                            <div className="">4</div>
                            <div className="">5</div>

                            
                            <div className="">6</div>
                            {/* <div className="bg-gray-200 border border-gray-400">7</div>
                            <div className="bg-gray-200 border border-gray-400">8</div>
                            <div className="bg-gray-200 border border-gray-400">9</div>
                            <div className="bg-gray-200 border border-gray-400">10</div>

                        
                            <div className="bg-gray-200 border border-gray-400">11</div>
                            <div className="bg-gray-200 border border-gray-400">12</div>
                            <div className="bg-gray-200 border border-gray-400">13</div>
                            <div className="bg-gray-200 border border-gray-400">14</div>
                            <div className="bg-gray-200 border border-gray-400">15</div> */}
                        </div>

                </div>
        </div>
        
    )
}

export default Mediapatner;
