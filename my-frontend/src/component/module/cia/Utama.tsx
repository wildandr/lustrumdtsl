'use client'
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export function Utama() {
    
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
        backgroundImage: `url(/assets/cia/bg_tema_cia.png)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
    };

    return (
        <div
         className='relative p-2 lg:p-6 pb-28 flex flex-col items-center justify-center overflow-hidden'>

            <Image
             src={`/assets/cia/ornamen_atas.png`}
             width={1000}
             height={1000}
             alt=''
             className='absolute top-0 w-full h-auto'/>

            <div
             className='flex flex-col px-8'>
                <div className='flex flex-col justify-center items-center relative w-full mt-[10%]'>
                    <Image
                        src={`/assets/cia/prize_without_helm.png`}
                        width={1000}
                        height={1000}
                        alt=''
                        className='w-full lg:w-[60%] h-auto'/>
                    <Image
                        src={`/assets/cia/helm.png`}
                        width={1000}
                        height={1000}
                        alt=''
                        className='absolute w-auto h-12 lg:h-24 top-0 -right-[5%] lg:right-[17%]'/>
                    {/* <p className='absolute top-[15%] font-LibreBaskerville font-bold text-6xl text-chiasGreen-500'>
                        Civil In Action X PKTSL
                    </p>
                    <p className='absolute top-[45%] left-[30%] font-LibreBaskerville font-bold text-2xl text-chiasGreen-500'>
                            Prize Pool Total
                    </p>
                    <p className='absolute top-[50%] left-[30%] font-LibreBaskerville font-bold text-9xl text-chiasGreen-500'>
                        75 JUTA
                    </p>
                    <p className='absolute bottom-[15%] right-[35%] font-LibreBaskerville font-bold text-2xl text-chiasGreen-500'>
                        Rupiah
                    </p> */}
                </div>
                <div className='w-full lg:w-[80%] items-start'>
                    <Image
                        src={`/assets/cia/logo_sbc.png`}
                        width={1000}
                        height={1000}
                        alt=''
                        className='w-full h-auto px-[25%] mt-[10%] lg:hidden'/>
                    <div className='flex flex-col relative w-full mt-[10%]'>
                        <Image
                            src={isDeviceGreaterThanMd ? '/assets/cia/bg_titel_1.png' : '/assets/cia/bg_title_mobile.png'}
                            width={1000}
                            height={1000}
                            alt=''
                            className='h-auto w-full lg:w-[70%]'/>
                        <Image
                            src={`/assets/cia/logo_sbc.png`}
                            width={1000}
                            height={1000}
                            alt=''
                            className='absolute w-auto h-16 lg:h-36 top-[-15%] -right-[10%] lg:-right-[25%] hidden lg:block'/>
                        <p id={`sbc`} className='absolute top-[15%] md:top-[25%] left-[16%] md:left-[5%] font-LibreBaskerville font-bold text-2xl md:text-4xl text-chiasGreen-500'>
                            Sustainable Bridge Competition (SBC)
                        </p>
                    </div>
                    <p className='text-white text-justify my-4'>
                        Sustainable Bridge Competition (SBC) merupakan lomba rancang jembatan tingkat nasional yang akan diikuti oleh kurang lebih 20 tim dari seluruh universitas dan/atau sederajat di Indonesia dengan masing-masing tim beranggotakan tiga mahasiswa/i aktif D3, D4, atau S1 Teknik Sipil sebagai tim inti, satu hingga tiga mahasiswa/i sebagai tim support pada tahap perakitan, serta satu dosen pembimbing.
                    </p>
                    <p className='text-white text-justify my-4'>
                        Sustainable Bridge Competition mengusung tema “Realisasi Ibu Kota Impian dengan Jembatan Inovatif dan Berkelanjutan Karya Pionir Pembangunan Bangsa.” Tema ini diambil dengan berkonsentrasi pada pionir pembangunan dengan mengacu pada Ibu Kota Negara baru, Nusantara yang berkelanjutan berupa desain jembatan dengan mengutamakan hasil inovatif yang mengacu pada konfigurasi struktur, sambungan, metode perakitan, dan metode perawatan
                    </p>
                    <div className='flex flex-col lg:flex-row lg:gap-4'>
                        <Link href={`#persyaratan`} className='border justify-center border-white flex flex-row w-full lg:w-auto text-white py-2 my-2 px-8 rounded-lg text-xs lg:text-base hover:opacity-50 items-center'>Persyaratan Pendaftaran
                            <span>
                            {/* <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="100" viewBox="0 0 24 24" className="fill-current text-chiasGreen-500 h-5">
                                <path d="M11.109,3L11.109,3C9.78,3,8.988,4.481,9.725,5.587L14,12l-4.275,6.413C8.988,19.519,9.78,21,11.109,21h0 c0.556,0,1.076-0.278,1.385-0.741l4.766-7.15c0.448-0.672,0.448-1.547,0-2.219l-4.766-7.15C12.185,3.278,11.666,3,11.109,3z"></path>
                            </svg> */}
                            </span>
                        </Link>
                        <button className=' justify-center bg-white flex flex-row w-full lg:w-auto border text-chiasGreen-500 py-2 my-2 px-6 rounded-lg text-xs lg:text-base hover:opacity-50 items-center'>Formulir Pendaftaran SBC
                            <span>
                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="100" viewBox="0 0 24 24" className="fill-current text-chiasGreen-500 h-3 lg:h-5">
                                <path d="M11.109,3L11.109,3C9.78,3,8.988,4.481,9.725,5.587L14,12l-4.275,6.413C8.988,19.519,9.78,21,11.109,21h0 c0.556,0,1.076-0.278,1.385-0.741l4.766-7.15c0.448-0.672,0.448-1.547,0-2.219l-4.766-7.15C12.185,3.278,11.666,3,11.109,3z"></path>
                            </svg>
                            </span>
                        </button>
                    </div>
                </div>
                <div className='w-full lg:w-[80%] self-end'>
                    <Image
                        src={`/assets/cia/logo_cic.png`}
                        width={1000}
                        height={1000}
                        alt=''
                        className='w-full h-auto px-[30%] mt-[10%] lg:hidden'/>
                    <div className='flex flex-col relative w-full mt-[10%]'>
                        <Image
                            src={isDeviceGreaterThanMd ? '/assets/cia/bg_titel_2.png' : '/assets/cia/bg_title_mobile.png'}
                            width={1000}
                            height={1000}
                            alt=''
                            className='h-auto w-full lg:w-[70%] self-end'/>
                        <Image
                            src={`/assets/cia/logo_cic.png`}
                            width={1000}
                            height={1000}
                            alt=''
                            className='absolute w-auto h-20 lg:h-36 top-[-10%] -left-[6%] lg:-left-[20%] hidden lg:block'/>
                        <p id={`cic`} className='absolute top-[12%] md:top-[30%] left-[15%] md:left-[5%] lg:left-auto lg:right-[5%] font-LibreBaskerville font-bold text-2xl md:text-4xl px-4 text-chiasGreen-500'>
                            Civil Innovation Challenge (CIC)
                        </p>
                    </div>
                    <p className='text-white text-justify my-4'>
                        Civil Innovation Challenge (CIC) merupakan salah satu rangkaian kegiatan Civil In Action yang berfokus pada inovasi di bidang teknik sipil. Kegiatan ini mengajak mahasiswa/i dari seluruh Indonesia terutama mahasiswa yang berasal dari program studi teknik sipil untuk ikut berpartisipasi dalam memberikan ide-ide terbaiknya untuk menyelesaikan suatu permasalahan ilmu teknik sipil dan lingkungan.
                    </p>
                    <p className='text-white text-justify my-4'>
                        Pada tahun ini, Civil Innovation Challenge mengusung tema “Solusi Inovatif dalam Mengatasi Permasalahan Tanah pada Tahap Pra-Konstruksi untuk Pembangunan Ibu Kota yang Berkelanjutan”. Tema ini diangkat untuk menciptakan solusi mengenai ketidakstabilan tanah yang diharapkan dapat diterapkan dalam pembangunan ibu kota baru yang berkelanjutan.
                    </p>
                    <div className='flex flex-col lg:flex-row lg:gap-4'>
                        <Link href={`#persyaratan`} className='border justify-center border-white flex flex-row w-full lg:w-auto text-white py-2 my-2 px-8 rounded-lg text-xs lg:text-base hover:opacity-50 items-center'>Persyaratan Pendaftaran
                            <span>
                            {/* <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="100" viewBox="0 0 24 24" className="fill-current text-chiasGreen-500 h-5">
                                <path d="M11.109,3L11.109,3C9.78,3,8.988,4.481,9.725,5.587L14,12l-4.275,6.413C8.988,19.519,9.78,21,11.109,21h0 c0.556,0,1.076-0.278,1.385-0.741l4.766-7.15c0.448-0.672,0.448-1.547,0-2.219l-4.766-7.15C12.185,3.278,11.666,3,11.109,3z"></path>
                            </svg> */}
                            </span>
                        </Link>
                        <button className=' justify-center bg-white flex flex-row w-full lg:w-auto border text-chiasGreen-500 py-2 my-2 px-6 rounded-lg text-xs lg:text-base hover:opacity-50 items-center'>Formulir Pendaftaran CIC
                            <span>
                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="100" viewBox="0 0 24 24" className="fill-current text-chiasGreen-500 h-3 lg:h-5">
                                <path d="M11.109,3L11.109,3C9.78,3,8.988,4.481,9.725,5.587L14,12l-4.275,6.413C8.988,19.519,9.78,21,11.109,21h0 c0.556,0,1.076-0.278,1.385-0.741l4.766-7.15c0.448-0.672,0.448-1.547,0-2.219l-4.766-7.15C12.185,3.278,11.666,3,11.109,3z"></path>
                            </svg>
                            </span>
                        </button>
                    </div>
                </div>
                <div className='w-full lg:w-[80%] items-start'>
                    <Image
                        src={`/assets/cia/logo_fcec.png`}
                        width={1000}
                        height={1000}
                        alt=''
                        className='w-full h-auto px-[30%] mt-[10%] lg:hidden'/>
                    <div className='flex flex-col relative w-full mt-[10%] text-center'>
                        <Image
                            src={isDeviceGreaterThanMd ? '/assets/cia/bg_titel_3.png' : '/assets/cia/bg_title_mobile.png'}
                            width={1000}
                            height={1000}
                            alt=''
                            className='h-auto w-full lg:w-[80%]'/>
                        <Image
                            src={`/assets/cia/logo_fcec.png`}
                            width={1000}
                            height={1000}
                            alt=''
                            className='absolute w-auto h-16 lg:h-32 -top-[15%] lg:top-[100%] -right-[5%] lg:-right-[25%]  hidden lg:block'/>
                        <p id={`fcec`} className='absolute top-[15%] md:top-[22%] left-[0%] md:left-[25%] lg:left-[12%] font-LibreBaskerville font-bold text-2xl md:text-4xl lg:text-5xl text-chiasGreen-500'>
                            Future Civil Engineering {isDeviceGreaterThanMd ? <br/> : undefined} Challenge (FCEC)
                        </p>
                    </div>
                    <p className='text-white text-justify my-4'>
                    FCEC (Future Civil Engineer Challenge) merupakan salah satu rangkaian acara 12th Civil in Action yang berfokus pada karya tulis ilmiah di bidang teknik sipil, lingkungan, dan sumber daya air untuk tingkatan SMA dan/atau sederajat. Perlombaan ini diadakan karena minimnya pemakaian sumber daya berkelanjutan dalam aspek pembangunan. Oleh karena itu, perlu adanya peran dari generasi muda penerus bangsa yang kreatif dan inovatif sehingga mampu melahirkan karya yang solutif dalam menciptakan pembangunan berwawasan lingkungan dan pemanfaatan sumberdaya berkelanjutan
                    </p>
                    <p className='text-white text-justify my-4'>
                    FCEC 2024 mengusung tema “Strategi generasi muda dalam menciptakan pembangunan berwawasan lingkungan dan pemanfaatan sumberdaya berkelanjutan”. Tema ini bermaksud untuk mewujudkan pembangunan Indonesia yang berwawasan lingkungan dengan karya kreatif dan inovatif dari generasi muda yang bermanfaat bagi masyarakat.
                    </p>
                    <div className='flex flex-col lg:flex-row lg:gap-4'>
                        <Link href={`#persyaratan`} className='border justify-center border-white flex flex-row w-full lg:w-auto text-white py-2 my-2 px-8 rounded-lg text-xs lg:text-base hover:opacity-50 items-center'>Persyaratan Pendaftaran
                            <span>
                            {/* <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="100" viewBox="0 0 24 24" className="fill-current text-chiasGreen-500 h-5">
                                <path d="M11.109,3L11.109,3C9.78,3,8.988,4.481,9.725,5.587L14,12l-4.275,6.413C8.988,19.519,9.78,21,11.109,21h0 c0.556,0,1.076-0.278,1.385-0.741l4.766-7.15c0.448-0.672,0.448-1.547,0-2.219l-4.766-7.15C12.185,3.278,11.666,3,11.109,3z"></path>
                            </svg> */}
                            </span>
                        </Link>
                        <button className=' justify-center bg-white flex flex-row w-full lg:w-auto border text-chiasGreen-500 py-2 my-2 px-6 rounded-lg text-xs lg:text-base hover:opacity-50 items-center'>Formulir Pendaftaran FCEC
                            <span>
                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="100" viewBox="0 0 24 24" className="fill-current text-chiasGreen-500 h-3 lg:h-5">
                                <path d="M11.109,3L11.109,3C9.78,3,8.988,4.481,9.725,5.587L14,12l-4.275,6.413C8.988,19.519,9.78,21,11.109,21h0 c0.556,0,1.076-0.278,1.385-0.741l4.766-7.15c0.448-0.672,0.448-1.547,0-2.219l-4.766-7.15C12.185,3.278,11.666,3,11.109,3z"></path>
                            </svg>
                            </span>
                        </button>
                    </div>
                </div>
                <div className='w-full lg:w-[80%] self-end'>
                    <Image
                        src={`/assets/cia/logo_craft.png`}
                        width={1000}
                        height={1000}
                        alt=''
                        className='w-full h-auto px-[30%] mt-[10%] lg:hidden'/>
                    <div className='flex flex-col relative w-full mt-[10%]'>
                        <Image
                            src={isDeviceGreaterThanMd ? '/assets/cia/bg_titel_3.png' : '/assets/cia/bg_title_mobile.png'}
                            width={1000}
                            height={1000}
                            alt=''
                            className='h-auto w-full lg:w-[80%] self-end'/>
                        <Image
                            src={`/assets/cia/craft_logo.png`}
                            width={1000}
                            height={1000}
                            alt=''
                            className='absolute w-auto h-20 lg:h-36 top-[-30%] lg:top-[100%] -left-[5%] lg:-left-[20%]  hidden lg:block'/>
                        <p id={`craft`} className='absolute top-[15%] md:top-[22%] left-[5%] md:left-[5%] lg:left-0 lg:-right-[15%] font-LibreBaskerville font-bold text-lg md:text-4xl lg:text-5xl text-chiasGreen-500 text-center'>
                        Civil Engineering Advance {isDeviceGreaterThanLg ? <br/> : undefined}Software Training (CRAFT)
                        </p>
                    </div>
                    <p className='text-white text-justify my-4'>
                    Workshop mengenai konsep Building Information Modelling (BIM), keterampilan dalam menggunakan perangkat lunak BIM disertai dengan pemahaman menyeluruh mengenai dampak BIM terhadap paradigma industri konstruksi secara keseluruhan.
                    </p>
                    <p className='text-white text-justify my-4'>
                    CRAFT mengambil tema “Digital Transformation in Construction: Implementation Building Information Modelling (BIM) for Sustainable Future”. Dalam era perkembangan teknologi dan industri, konsep Building Information Modelling (BIM) telah menjadi bagian dari industri konstruksi modern. BIM telah menjadi pendorong utama dalam mengubah landasan industri konstruksi, membuka peluang dalam cara mendesain, membangun, dan mengelola proyek-proyek yang kompleks.
                    </p>
                    <div className='flex flex-col lg:flex-row lg:gap-4'>
                        <Link href={`#persyaratan`} className='border justify-center border-white flex flex-row w-full lg:w-auto text-white py-2 my-2 px-8 rounded-lg text-xs lg:text-base hover:opacity-50 items-center'>Persyaratan Pendaftaran
                            <span>
                            {/* <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="100" viewBox="0 0 24 24" className="fill-current text-chiasGreen-500 h-5">
                                <path d="M11.109,3L11.109,3C9.78,3,8.988,4.481,9.725,5.587L14,12l-4.275,6.413C8.988,19.519,9.78,21,11.109,21h0 c0.556,0,1.076-0.278,1.385-0.741l4.766-7.15c0.448-0.672,0.448-1.547,0-2.219l-4.766-7.15C12.185,3.278,11.666,3,11.109,3z"></path>
                            </svg> */}
                            </span>
                        </Link>
                        <button className=' justify-center bg-white flex flex-row w-full lg:w-auto border text-chiasGreen-500 py-2 my-2 px-6 rounded-lg text-xs lg:text-base hover:opacity-50 items-center'>Formulir Pendaftaran Craft
                            <span>
                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="100" viewBox="0 0 24 24" className="fill-current text-chiasGreen-500 h-3 lg:h-5">
                                <path d="M11.109,3L11.109,3C9.78,3,8.988,4.481,9.725,5.587L14,12l-4.275,6.413C8.988,19.519,9.78,21,11.109,21h0 c0.556,0,1.076-0.278,1.385-0.741l4.766-7.15c0.448-0.672,0.448-1.547,0-2.219l-4.766-7.15C12.185,3.278,11.666,3,11.109,3z"></path>
                            </svg>
                            </span>
                        </button>
                    </div>
                </div>
            </div>
            <div className='relative flex flex-col w-[90%] lg:w-[40%] justify-center items-center mt-[10%] mb-[5%]'>
                <Image
                    src={ isDeviceGreaterThanLg ? `/assets/cia/bg_titel_3.png` : `/assets/cia/bg_titel_1.png`}
                    width={1000}
                    height={1000}
                    alt=''
                    className='w-full h-auto'/>
                <Image
                    src={`/assets/cia/note.png`}
                    width={1000}
                    height={1000}
                    alt=''
                    className='absolute top-0 right-0 w-auto h-12 md:h-24'/>
                <p id='persyaratan' className='absolute top-[18%] md:top-[28%] font-LibreBaskerville font-bold text-2xl md:text-4xl text-chiasGreen-500'>Persyaratan Umum</p>
            </div>
            <div className='relative flex flex-col w-[90%] mb-[10%] items-center'>
                <Image
                    src={ isDeviceGreaterThanLg ? `/assets/cia/bg_persyaratan.png` : `/assets/cia/bg_persyaratan_mobile.png`}
                    width={1000}
                    height={1000}
                    alt=''
                    className='w-full h-auto'/>
                <p className='absolute px-[15%] top-[6%] md:top-[10%] font-LibreBaskerville font-bold text-xs md:text-xl text-chiasGreen-500 '>
                    ● SBC <br/>
                    Tim beranggotakan tiga mahasiswa/i aktif D3, D4, atau S1 Teknik Sipil sebagai tim inti, satu hingga tiga mahasiswa/i sebagai tim support pada tahap perakitan, serta satu dosen pembimbing. <br/>
                    ● CIC <br/>
                    Lomba ini terbuka untuk mahasiswa dari berbagai program studi dengan syarat dalam satu tim wajib beranggotakan minimal satu mahasiswa teknik sipil.<br/>
                    ● FCEC <br/>
                    Peserta didik SMA, SMK, MA dan/atau sederajat dari seluruh sekolah di Indonesia <br/>
                    ● CRAFT <br/>
                    1. Peserta setiap sub-event CIA 12th yang telah melakukan registrasi. <br/>
                    2. Masyarakat umum yang memiliki ketertarikan terhadap perangkat lunak di bidang ketekniksipilan dengan rincian jumlah 70 orang untuk offline dan 200 orang untuk online. <br/>
                    3. Mahasiswa/i aktif Departemen Teknik Sipil Universitas Gadjah Mada dengan jumlah 75 orang untuk online. <br/>
                </p>
                <Link href={`https://drive.google.com/drive/folders/1zhUIYxHD83-H_RoJq1y6s-3o552SQ9f_?usp=drive_link`} className='absolute bottom-[6%] md:bottom-[10%] lg:bottom-[15%] w-[80%] bg-[#18AB8E] text-white py-2 px-16 rounded-2xl hover:opacity-50 text-center font-bold text-xs md:text-base'>Download ToR</Link>
            </div>
            <div className='relative flex flex-col w-[90%] md:w-[80%] mb-[10%] items-center'>
                <Image
                    src={ isDeviceGreaterThanLg ? `/assets/cia/bg_timeline_cia.png` : `/assets/cia/bg_tabel_mobile.png`}
                    width={1000}
                    height={1000}
                    alt=''
                    className='w-full h-auto'/>
                <div className='absolute w-full px-[15%] top-[3%] lg:top-[7%] font-bold'>
                    <Image
                        src={`/assets/cia/cia_logo.png`}
                        width={1000}
                        height={1000}
                        alt=''
                        className='absolute -top-[50%] left-[10%] w-auto h-9 md:h-14 lg:h-28'/>
                    <Image
                        src={`/assets/cia/lustrum_logo.png`}
                        width={1000}
                        height={1000}
                        alt=''
                        className='absolute -top-[70%] right-[11%] w-auto h-12 md:h-24 lg:h-36'/>
                    <p className='text-center w-full text-chiasGreen-500 font-LibreBaskerville lg:text-5xl'>
                        Timeline Kegiatan
                    </p>
                    <p className='text-center w-full text-chiasGreen-500 font-LibreBaskerville text-[10px] lg:text-base'>
                        12th Civil In Action x Craft x Lustrum XI KMTSL
                    </p>
                </div>
                <div className='absolute bg-chiasGreen-500 w-[80%] h-[0.2rem] md:h-[0.4rem] rounded-lg top-[6%] lg:top-[11%]'></div>
                <div className='absolute bg-chiasGreen-500 w-[80%] h-[0.1rem] md:h-[0.2rem] top-[6.5%] lg:top-[11.5%]'></div>
                <div className='w-[80%] justify-center items-center absolute text-black top-[10%] md:top-[10%] lg:top-[18%]'>

                    <Image
                        src={`/assets/cia/bg_title_tabel.png`}
                        width={1000}
                        height={1000}
                        alt=''
                        className='absolute w-full px-[8%] md:px-[15%] h-auto -top-[13%] md:-top-[30%]'/>
                    
                    <p className='absolute -top-[10%] md:-top-[25%] lg:-top-[22%] w-full text-center px-[10%] md:px-[20%] font-LibreBaskerville font-bold text-[10px] md:text-lg lg::text-xl text-white'>
                        Sustainable Bridge Competition (SBC)
                    </p>

                    <table className='text-center w-full border border-chiasGreen-500 text-[10px] lg:text-base'>
                        <thead>
                            <tr className='w-full bg-[#058369]'>
                                <th className='w-1/2 border border-black text-white font-bold font-LibreBaskerville py-2'>Nama Kegiatan</th>
                                <th className='w-1/2 border border-black text-white font-bold font-LibreBaskerville py-2'>Tanggal</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* <!-- Baris 1 --> */}
                            <tr className='bg-[#44a18f] text-white font-bold font-LibreBaskerville'>
                                <td colSpan={2} className='border-collapse border border-black text-center'>Penyisihan</td>
                            </tr>
                            {/* <!-- Baris 2 --> */}
                            <tr className='bg-[#81c0b4] text-white font-bold font-LibreBaskerville'>
                                <td className='border border-black py-2'>Registrasi Peserta</td>
                                <td className='border border-black py-2'>12 Februari - 24 Maret 2024</td>
                            </tr>
                            {/* <!-- Baris 3 --> */}
                            <tr className='bg-[#44a18f] text-white font-bold font-LibreBaskerville'>
                                <td className='border border-black py-2'>Pengerjaan Proposal</td>
                                <td className='border border-black py-2'>11 Maret - 13 April 2024</td>
                            </tr>
                            {/* <!-- Baris 4 --> */}
                            <tr className='bg-[#81c0b4] text-white font-bold font-LibreBaskerville'>
                                <td className='border border-black py-2'>Pengumuman Finalist</td>
                                <td className='border border-black py-2'>12 Mei 2024</td>
                            </tr>
                            {/* <!-- Baris 5 --> */}
                            <tr className='bg-[#44a18f] text-white font-bold font-LibreBaskerville'>
                                <td colSpan={2} className='border-collapse border border-black text-center py-2'>Tahap Final</td>
                            </tr>
                            {/* <!-- Baris 6 --> */}
                            <tr className='bg-[#81c0b4] text-white font-bold font-LibreBaskerville'>
                                <td className='border border-black py-2'>Checking Area dan briefing Peserta</td>
                                <td className='border border-black py-2'>24 Juli 2024</td>
                            </tr>
                            {/* <!-- Baris 7 --> */}
                            <tr className='bg-[#44a18f] text-white font-bold font-LibreBaskerville'>
                                <td className='border border-black py-2'>Presentasi</td>
                                <td className='border border-black py-2'>25 Juli 2024</td>
                            </tr>
                            {/* <!-- Baris 8 --> */}
                            <tr className='bg-[#81c0b4] text-white font-bold font-LibreBaskerville'>
                                <td className='border border-black py-2'>Perakitan dan Pengujian</td>
                                <td className='border border-black py-2'>26 Juli 2024</td>
                            </tr>
                            {/* <!-- Baris 9 --> */}
                            <tr className='bg-[#81c0b4] text-white font-bold font-LibreBaskerville'>
                                <td className='border border-black py-2'>Pengumuman Pemenang dan Closing Ceremony</td>
                                <td className='border border-black py-2'>27 Juli 2024</td>
                            </tr>
                        </tbody>
                    </table>

                </div>
                <div className='w-[80%] justify-center items-center absolute text-black top-[31%] md:top-[23%] lg:top-[38%]'>

                    <Image
                        src={`/assets/cia/bg_title_tabel.png`}
                        width={1000}
                        height={1000}
                        alt=''
                        className='absolute w-full px-[8%] md:px-[15%] h-auto -top-[9%] md:-top-[20%] lg:-top-[25%]'/>
                    
                    <p className='absolute -top-[7.5%] md:-top-[18%] lg:-top-[20%] w-full text-center px-[10%] md:px-[20%] font-LibreBaskerville font-bold text-[10px] md:text-lg lg::text-xl text-white'>
                        Civil Innovation Challenge (CIC)
                    </p>

                    <table className='text-center w-full border border-chiasGreen-500 text-[10px] lg:text-base'>
                        <thead>
                            <tr className='w-full bg-[#058369]'>
                                <th className='w-1/2 border border-black text-white font-bold font-LibreBaskerville py-2'>Nama Kegiatan</th>
                                <th className='w-1/2 border border-black text-white font-bold font-LibreBaskerville py-2'>Tanggal</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* <!-- Baris 1 --> */}
                            <tr className='bg-[#44a18f] text-white font-bold font-LibreBaskerville'>
                                <td colSpan={2} className='border-collapse border border-black text-center'>Penyisihan</td>
                            </tr>
                            {/* <!-- Baris 2 --> */}
                            <tr className='bg-[#81c0b4] text-white font-bold font-LibreBaskerville'>
                                <td className='border border-black py-2'>Registrasi Peserta</td>
                                <td className='border border-black py-2'>12 Februari - 10 Maret 2024</td>
                            </tr>
                            {/* <!-- Baris 3 --> */}
                            <tr className='bg-[#44a18f] text-white font-bold font-LibreBaskerville'>
                                <td className='border border-black py-2'>Rilis Terms of Reference</td>
                                <td className='border border-black py-2'>13 Maret 2024</td>
                            </tr>
                            {/* <!-- Baris 4 --> */}
                            <tr className='bg-[#81c0b4] text-white font-bold font-LibreBaskerville'>
                                <td className='border border-black py-2'>Pengerjaan Proposal dan Video Desain</td>
                                <td className='border border-black py-2'>13 Maret - 17 Mei 2024</td>
                            </tr>
                            <tr className='bg-[#81c0b4] text-white font-bold font-LibreBaskerville'>
                                <td className='border border-black py-2'>Technical Meeting Proposal dan Video Desain</td>
                                <td className='border border-black py-2'>16 Maret 2024</td>
                            </tr>
                            <tr className='bg-[#81c0b4] text-white font-bold font-LibreBaskerville'>
                                <td className='border border-black py-2'>Penilaian Proposal dan Video Desain</td>
                                <td className='border border-black py-2'>19 Mei - 4 Juni 2024</td>
                            </tr>
                            <tr className='bg-[#81c0b4] text-white font-bold font-LibreBaskerville'>
                                <td className='border border-black py-2'>Pengumuman Finalis</td>
                                <td className='border border-black py-2'>5 Juni 2024</td>
                            </tr>
                            <tr className='bg-[#81c0b4] text-white font-bold font-LibreBaskerville'>
                                <td className='border border-black py-2'>Registrasi Ulang Peserta</td>
                                <td className='border border-black py-2'>5 - 7 Juni 2024</td>
                            </tr>
                            <tr className='bg-[#81c0b4] text-white font-bold font-LibreBaskerville'>
                                <td className='border border-black py-2'>Technical Meeting Finalis</td>
                                <td className='border border-black py-2'>8 Juni 2024</td>
                            </tr>
                            {/* <!-- Baris 5 --> */}
                            <tr className='bg-[#44a18f] text-white font-bold font-LibreBaskerville'>
                                <td colSpan={2} className='border-collapse border border-black text-center py-2'>Tahap Final</td>
                            </tr>
                            {/* <!-- Baris 6 --> */}
                            <tr className='bg-[#81c0b4] text-white font-bold font-LibreBaskerville'>
                                <td className='border border-black py-2'>Site Visit dan Pembekalan Materi</td>
                                <td className='border border-black py-2'>24 Juli 2024</td>
                            </tr>
                            {/* <!-- Baris 7 --> */}
                            <tr className='bg-[#44a18f] text-white font-bold font-LibreBaskerville'>
                                <td className='border border-black py-2'>Perakitan Prototype dan Pengerjaan Final</td>
                                <td className='border border-black py-2'>25 Juli 2024</td>
                            </tr>
                            {/* <!-- Baris 8 --> */}
                            <tr className='bg-[#81c0b4] text-white font-bold font-LibreBaskerville'>
                                <td className='border border-black py-2'>Presentasi Final</td>
                                <td className='border border-black py-2'>26 Juli 2024</td>
                            </tr>
                            {/* <!-- Baris 9 --> */}
                            <tr className='bg-[#81c0b4] text-white font-bold font-LibreBaskerville'>
                                <td className='border border-black py-2'>Pengumuman Pemenang dan Closing Ceremony</td>
                                <td className='border border-black py-2'>27 Juli 2024</td>
                            </tr>
                        </tbody>
                    </table>

                </div>
                <div className='w-[80%] justify-center items-center absolute text-black top-[62.5%] md:top-[40%] lg:top-[65%]'>

                    <Image
                        src={`/assets/cia/bg_title_tabel.png`}
                        width={1000}
                        height={1000}
                        alt=''
                        className='absolute w-full px-[8%] md:px-[15%] h-auto -top-[9%] md:-top-[20%] lg:-top-[25%]'/>
                    
                    <p className='absolute -top-[7%] md:-top-[18%] lg:-top-[20%] w-full text-center px-[10%] md:px-[20%] font-LibreBaskerville font-bold text-[10px] md:text-lg lg::text-xl text-white'>
                    Future Civil Engineering Challenge
                    </p>

                    <table className='text-center w-full border border-chiasGreen-500 text-[10px] lg:text-base'>
                        <thead>
                            <tr className='w-full bg-[#058369]'>
                                <th className='w-1/2 border border-black text-white font-bold font-LibreBaskerville py-2'>Nama Kegiatan</th>
                                <th className='w-1/2 border border-black text-white font-bold font-LibreBaskerville py-2'>Tanggal</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* <!-- Baris 1 --> */}
                            <tr className='bg-[#44a18f] text-white font-bold font-LibreBaskerville'>
                                <td colSpan={2} className='border-collapse border border-black text-center py-2'>Tahap Penyisihan</td>
                            </tr>
                            {/* <!-- Baris 2 --> */}
                            <tr className='bg-[#81c0b4] text-white font-bold font-LibreBaskerville'>
                                <td className='border border-black py-2'>Roadshow</td>
                                <td className='border border-black py-2'>5 Februari - 3 Maret 2024</td>
                            </tr>
                            {/* <!-- Baris 3 --> */}
                            <tr className='bg-[#44a18f] text-white font-bold font-LibreBaskerville'>
                                <td className='border border-black py-2'>Periode registrasi dan pengumpulan abstrak</td>
                                <td className='border border-black py-2'>12 Februari -10 Maret 2024</td>
                            </tr>
                            {/* <!-- Baris 4 --> */}
                            <tr className='bg-[#81c0b4] text-white font-bold font-LibreBaskerville'>
                                <td className='border border-black py-2'>Pengumuman lolos abstrak</td>
                                <td className='border border-black py-2'>31 Maret 2024</td>
                            </tr>
                            <tr className='bg-[#44a18f] text-white font-bold font-LibreBaskerville'>
                                <td className='border border-black py-2'>Periode daftar ulang peserta lolos tahap abstrak</td>
                                <td className='border border-black py-2'>1 April - 9 April 2024</td>
                            </tr>
                            <tr className='bg-[#81c0b4] text-white font-bold font-LibreBaskerville'>
                                <td className='border border-black py-2'>Technical meeting full paper</td>
                                <td className='border border-black py-2'>14 April 2024</td>
                            </tr>
                            <tr className='bg-[#44a18f] text-white font-bold font-LibreBaskerville'>
                                <td className='border border-black py-2'>Pengumuman lolos final</td>
                                <td className='border border-black py-2'>14 Juni 2024</td>
                            </tr>
                            {/* <!-- Baris 5 --> */}
                            <tr className='bg-[#81c0b4] text-white font-bold font-LibreBaskerville'>
                                <td colSpan={2} className='border-collapse border border-black text-center py-2'>Tahap Final</td>
                            </tr>
                            {/* <!-- Baris 6 --> */}
                            <tr className='bg-[#44a18f] text-white font-bold font-LibreBaskerville'>
                                <td className='border border-black py-2'>Technical meeting Final</td>
                                <td className='border border-black py-2'>15 Juni 2024</td>
                            </tr>
                            {/* <!-- Baris 7 --> */}
                            <tr className='bg-[#81c0b4] text-white font-bold font-LibreBaskerville'>
                                <td className='border border-black py-2'>Opening Ceremony</td>
                                <td className='border border-black py-2'>23 Juli 2024</td>
                            </tr>
                            {/* <!-- Baris 8 --> */}
                            <tr className='bg-[#44a18f] text-white font-bold font-LibreBaskerville'>
                                <td className='border border-black py-2'>Presentasi Final</td>
                                <td className='border border-black py-2'>25 Juli 2024</td>
                            </tr>
                            {/* <!-- Baris 9 --> */}
                            <tr className='bg-[#81c0b4] text-white font-bold font-LibreBaskerville'>
                                <td className='border border-black py-2'>Educational Session</td>
                                <td className='border border-black py-2'>26 Juli 2024</td>
                            </tr>
                            <tr className='bg-[#44a18f] text-white font-bold font-LibreBaskerville'>
                                <td className='border border-black py-2'>Awarding Day</td>
                                <td className='border border-black py-2'>27 Juli 2024</td>
                            </tr>
                        </tbody>
                    </table>

                </div>
                <div className='w-[80%] justify-center items-center absolute text-black top-[90%] md:top-[60%] lg:top-[90%]'>

                    <Image
                        src={`/assets/cia/bg_title_tabel.png`}
                        width={1000}
                        height={1000}
                        alt=''
                        className='absolute w-full px-[5%] md:px-[10%] h-auto -top-[33%] md:-top-[80%] lg:-top-[100%]'/>
                    
                    <p className='absolute -top-[25%] md:-top-[72%] lg:-top-[70%] w-full text-center px-[5%] md:px-[10%] font-LibreBaskerville font-bold text-[10px] md:text-lg lg::text-2xl text-white'>
                    Civil Engineering Advance Software Training
                    </p>

                    <table className='text-center w-full border border-chiasGreen-500 text-[10px] lg:text-base'>
                        <thead>
                            <tr className='w-full bg-[#058369]'>
                                <th className='w-1/2 border border-black text-white font-bold font-LibreBaskerville py-2'>Nama Kegiatan</th>
                                <th className='w-1/2 border border-black text-white font-bold font-LibreBaskerville py-2'>Tanggal</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* <!-- Baris 1 --> */}
                            <tr className='bg-[#44a18f] text-white font-bold font-LibreBaskerville'>
                                <td className='border border-black py-2'>Hari ke-1 : BIM Basic dan BIM Workflow</td>
                                <td className='border border-black py-2'>Jumat, 24 Mei 2024</td>
                            </tr>
                            {/* <!-- Baris 2 --> */}
                            <tr className='bg-[#81c0b4] text-white font-bold font-LibreBaskerville'>
                                <td className='border border-black py-2'>Hari ke-2 : BIM Management dan Student BIM Roadmap</td>
                                <td className='border border-black py-2'>Sabtu, 25 Mei 2024</td>
                            </tr>
                        </tbody>
                    </table>

                </div>
            </div>

        </div>
        
    )
}

export default Utama;
