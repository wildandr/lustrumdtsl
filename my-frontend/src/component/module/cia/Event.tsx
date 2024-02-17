'use client'
import Image from 'next/image';
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

    return (
        <div className='w-full flex flex-col justify-center items-center py-[10%] bg-[#18AB8E]'>
            <div className='flex flex-row w-[80%] h-full relative justify-center items-center'>
                <Image
                    src={'/assets/cia/bg_title_mobile.png'}
                    width={1000}
                    height={1000}
                    className={`h-auto w-full`}
                    alt=''/>
                
                <div className='w-full flex flex-col md:flex-row absolute items-center justify-center gap-8 p-[10%]'>
                    <div className='flex flex-row w-[80%] gap-8'>
                        <div className='flex flex-col w-[50%] justify-between bg-[#ED4F23] rounded-2xl pb-4'>
                            <Image
                                src={'/assets/cia/logo_sbc.png'}
                                width={1000}
                                height={1000}
                                className={`w-fit h-auto rounded-xl`}
                                alt=''
                                style={bg_sbc}/>
                            <p className='w-full text-center'>SBC</p>
                        </div>
                        <div className='flex flex-col w-[50%] justify-between bg-[#0173BC] rounded-2xl pb-4'>
                            <Image
                                src={'/assets/cia/logo_fcec.png'}
                                width={1000}
                                height={1000}
                                className={`w-fit h-auto rounded-xl`}
                                alt=''
                                style={bg_fcec}/>
                            <p className='w-full text-center'>FCEF</p>
                        </div>
                    </div>
                    <div className='flex flex-row w-[80%] gap-8'>
                        <div className='flex flex-col w-[50%] justify-between items-center bg-[#BE8731] rounded-2xl pb-4'>
                            <Image
                                src={'/assets/cia/logo_cic.png'}
                                width={1000}
                                height={1000}
                                className={`w-full h-auto rounded-xl`}
                                alt=''
                                style={bg_cic}/>
                            <p className='w-full text-center'>CIC</p>
                        </div>
                        <div className='flex flex-col w-[50%] justify-between items-center bg-[#833434] rounded-2xl pb-4'>
                            <Image
                                src={'/assets/cia/logo_craft.png'}
                                width={1000}
                                height={1000}
                                className={`w-full h-auto rounded-xl`}
                                alt=''
                                style={bg_craft}/>
                            <p className='w-full text-center'>Craft</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default Event;
