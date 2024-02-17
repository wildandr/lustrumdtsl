'use client'
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export function Event() {

    const bg_sbc = {
        backgroundImage: `url(/assets/cia/bg_sbc.png)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
    };
    const bg_fcec = {
        backgroundImage: `url(/assets/cia/bg_fcec.png)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
    };
    const bg_cic = {
        backgroundImage: `url(/assets/cia/bg_cic.png)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
    };
    const bg_craft = {
        backgroundImage: `url(/assets/cia/bg_craft.png)`,
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
    const isDeviceGreaterThanMd = windowWidth >= md_width

    return (
        <div className='w-full flex flex-col justify-center items-center py-[2%] bg-[#18AB8E]'>
            <div className='flex flex-row w-[80%] h-full relative justify-center items-center'>
                <Image
                    src={isDeviceGreaterThanMd ? '/assets/cia/bg_title_mobile.png' : '/assets/cia/bg_event_mobile.png'}
                    width={1000}
                    height={1000}
                    className={`h-auto w-full`}
                    alt=''/>
                
                <div className='absolute w-[80%] h-[60%] gap-4 grid grid-cols-2 md:grid-cols-4 grid-rows-2 md:grid-rows-1'>

                    <Link href={`#sbc`} className="border border-gray-400 flex flex-col justify-center rounded-xl bg-[#ED4F23] transition-transform duration-300 transform hover:scale-110">
                        <div className='w-full flex items-center justify-center h-[85%] rounded-xl' style={bg_sbc}>
                            <Image
                                src={`/assets/cia/logo_sbc.png`}
                                width={1000}
                                height={1000}
                                alt=''
                                className='w-full p-[20%] md:p-0'/>
                        </div>
                        <div className='flex w-full h-[15%] justify-center items-center'>
                            <p className='text-center font-sfui text-xs md:text-base text-white font-bold'>SBC</p>
                        </div>
                    </Link>
                    <Link href={`#fcec`} className="border border-gray-400 flex flex-col justify-center rounded-xl bg-[#0173BC] transition-transform duration-300 transform hover:scale-110">
                        <div className='w-full flex items-center justify-center h-[85%] rounded-xl' style={bg_fcec}>
                            <Image
                                src={`/assets/cia/logo_fcec.png`}
                                width={1000}
                                height={1000}
                                alt=''
                                className='w-full p-[25%] md:p-[10%]'/>
                        </div>
                        <div className='flex w-full h-[15%] justify-center items-center'>
                            <p className='text-center font-sfui text-xs md:text-base text-white font-bold'>FCEC</p>
                        </div>
                    </Link>
                    <Link href={`#cic`} className="border border-gray-400 flex flex-col justify-center rounded-xl bg-[#BE8731] transition-transform duration-300 transform hover:scale-110">
                        <div className='w-full flex items-center justify-center h-[85%] rounded-xl' style={bg_cic}>
                            <Image
                                src={`/assets/cia/logo_cic.png`}
                                width={1000}
                                height={1000}
                                alt=''
                                className='w-full p-[30%] md:p-[15%]'/>
                        </div>
                        <div className='flex w-full h-[15%] justify-center items-center'>
                            <p className='text-center font-sfui text-xs md:text-base text-white font-bold'>CIC</p>
                        </div>
                    </Link>
                    <Link href={`#craft`} className="border border-gray-400 flex flex-col justify-center rounded-xl bg-[#833434] transition-transform duration-300 transform hover:scale-110">
                        <div className='w-full flex items-center justify-center h-[85%] rounded-xl' style={bg_craft}>
                            <Image
                                src={`/assets/cia/logo_craft.png`}
                                width={1000}
                                height={1000}
                                alt=''
                                className='w-full p-[30%] md:p-[15%]'/>
                        </div>
                        <div className='flex w-full h-[15%] justify-center items-center'>
                            <p className='text-center font-sfui text-xs md:text-base text-white font-bold'>Craft</p>
                        </div>
                    </Link>
                    
                </div>
            </div>
        </div>
        
    )
}

export default Event;
