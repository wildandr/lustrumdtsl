'use client'
import Image from 'next/image';
import Link from 'next/link';

export function Tema() {

    const backgroundImage = {
        backgroundImage: `url(/assets/claproyex/ornamen_tema.svg)`,
        backgroundSize: "cover",
        backgroundPosition: "top",
        backgroundRepeat: "repeat",
    };
    const backgroundMobile = {
        backgroundImage: `url(/assets/claproyex/bg_tema_mobile_bawah.svg)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
    };

    return (
        <div className='flex flex-col w-full'>
            <div className='hidden lg:flex flex-col items-end z-50' style={backgroundImage}>
                <div className='w-[70%] pe-[20%] pt-[12%]'>
                    <p className='lg:text-lg xl:text-xl 2xl:text-2xl text-clapBlue-500 font-bold text-right'>Tema Umum</p>
                    <p style={{textShadow: '2.123px 3.538px 0px rgba(0, 0, 0, 0.25)'}} className='lg:text-2xl xl:text-4xl 2xl:text-5xl text-clapBlue-500 font-bold text-right'>“Menyuarakan Narasi Pembangunan Menuju Sumberdaya Air Berkelanjutan di Indonesia”</p>
                    <p className='lg:text-xs xl:text-base text-clapBlue-500 text-justify'>Suatu negara yang maju perlu memiliki pengelolaan sumber daya air yang berkelanjutan. Dalam mewujudkan mimpi besar tersebut, Badan Pers Mahasiswa Teknik Sipil Clapeyron UGM ingin menyediakan platform untuk meningkatkan pemahaman dan kesadaran masyarakat akan urgensi permasalahan sumber daya air. Kami berkomitmen untuk menjadi jembatan informasi dan edukasi antara mahasiswa dan masyarakat umum. Dengan mengadakan event ini, kami ingin membawa peran badan pers ke tingkat yang lebih tinggi.</p>
                </div>
                <div className='w-[65%] ps-[10%] lg:mt-[17rem] xl:mt-[23rem] 1440:mt-[27rem] 16k:mt-[34rem] mb-[32rem] 1440:mb-[34rem] 16k:mb-[38rem] self-start'>
                    <p style={{textShadow: '2.123px 3.538px 0px rgba(0, 0, 0, 0.25)'}} className='lg:text-5xl xl:text-6xl 2xl:text-7xl text-[#F9E4AB] font-bold text-right'>Rangkaian Kegiatan Claproyex #8</p>
                </div>
            </div>
            <div className='min-h-screen lg:hidden flex flex-col items-center z-50 relative pb-[10%]'>
                <Image
                src={`/assets/claproyex/bg_tema_mobile_atas.png`}
                alt=''
                width={1000}
                height={1000}
                className='lg:hidden w-full h-auto absolute top-[-10rem] md:top-[-15rem]' />
                <div className='w-[80%] pt-[33%] md:pt-[45%] flex flex-col z-50'>
                    <p className='md:text-xl xl:text-xl 2xl:text-2xl text-[#F9E4AB] font-bold text-center md:mb-4'>Tema Umum</p>
                    <p style={{textShadow: '2.123px 3.538px 0px rgba(0, 0, 0, 0.25)'}} className='text-xl md:text-4xl xl:text-4xl 2xl:text-5xl text-[#F9E4AB] font-bold text-center mb-4 md:mb-12'>“Menyuarakan Narasi Pembangunan Menuju Sumberdaya Air Berkelanjutan di Indonesia”</p>
                    <p style={{textShadow: '2.123px 3.538px 0px rgba(0, 0, 0, 0.25)'}} className='text-xs md:text-3xl xl:text-base text-[#F9E4AB] text-justify'>Suatu negara yang maju perlu memiliki pengelolaan sumber daya air yang berkelanjutan. Dalam mewujudkan mimpi besar tersebut, Badan Pers Mahasiswa Teknik Sipil Clapeyron UGM ingin menyediakan platform untuk meningkatkan pemahaman dan kesadaran masyarakat akan urgensi permasalahan sumber daya air. Kami berkomitmen untuk menjadi jembatan informasi dan edukasi antara mahasiswa dan masyarakat umum. Dengan mengadakan event ini, kami ingin membawa peran badan pers ke tingkat yang lebih tinggi.</p>
                </div>
                <div className='w-full flex justify-center items-center z-49 py-[30%] mt-[15%] md:mt-0 pt-[40%] md:pt-[30%] px-[10%]' style={backgroundMobile}>
                    <p style={{textShadow: '2.123px 3.538px 0px rgba(0, 0, 0, 0.25)'}} className='text-4xl md:text-6xl text-[#F9E4AB] font-bold text-center pt-[30%] md:pt-[50%]'>Rangkaian Kegiatan Claproyex #8</p>
                </div>
            </div>
        </div>
    )
}

export default Tema;
