'use client'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { useSelectedLayoutSegment } from 'next/navigation'
import Image from 'next/image'
// import { motion } from 'framer-motion'

export default function Nav() {
    const [isVisible, setIsVisible] = useState(true)

    useEffect(() => {
        let prevScrollPos = window.scrollY
        const handleScroll = () => {
          const currentScrollPos = window.scrollY
          setIsVisible(prevScrollPos > currentScrollPos || currentScrollPos < 100)
          prevScrollPos = currentScrollPos
        }
    
        window.addEventListener('scroll', handleScroll)
    
        return () => {
          window.removeEventListener('scroll', handleScroll)
        }
      }, [])

      const activeSegment = useSelectedLayoutSegment()
      const links = [
        { label: 'Home', path: '/lustrum', targetSegment: 'lustrum'},
        { label: 'Event', path: ``, targetSegment: 'event' },
        { label: 'About', path: '/cia', targetSegment: 'cia'},
      ]
      const links2 = [
        { label: 'Civil in Action', path: '/event/civil-in-action', targetSegment: 'civil-in-action'},
        { label: 'Srawung Desa', path: `/event/srawung-desa`, targetSegment: 'srawung-desa' },
        { label: 'Claproyex', path: '/event/claproyek', targetSegment: 'claproyek'},
        { label: 'Ceremony', path: '/event/ceremony', targetSegment: 'ceremony'},
      ]

      const [isDropdownVisible, setIsDropdownVisible] = useState(true)
      const toggleDropdown = () => {
        setIsDropdownVisible(!isDropdownVisible)
      }    

  return (
    
    <div
        className={`${activeSegment === 'lustrum' ? 'bg-black text-yellow-400' : 'bg-[#005A48] text-white' }
         w-full z-[9999] hidden justify-between transition-transform lg:fixed lg:flex ${
        isVisible ? 'transition-transform' : '-translate-y-[300%] transition-transform'
    }`}>
        <div className="flex w-full flex-row mt-4 my-2 pl-16 pr-16 justify-between items-center">
            <Link href="/lustrum">
                <Image
                className='h-10 w-auto'
                src="/assets/lustrum/logo.png"
                alt="Logo"
                width={100}
                height={100}
                />
            </Link>
          <nav>
            <ul>
              {links.map((l, i) => (
                <Link
                  key={l.path}
                  href={l.path}
                  className={` p-2 
                  ${activeSegment === l.targetSegment ? ' underline decoration-1' : ''}
                  `}
                  onClick={l.label === 'Event' ? toggleDropdown : undefined}
                >
                  {l.label}
                </Link>
              ))}
            </ul>
            <div className={`${isDropdownVisible? 'hidden' : 'block'} flex flex-col bg-black absolute right-[10%] p-4 z-[99999]`}>
              {links2.map((l, i) => (
                  <Link
                    key={l.path}
                    href={l.path}
                    className={` px-2
                    ${activeSegment === l.targetSegment ? ' underline decoration-1' : ''}
                    `}
                  >
                    {l.label}
                  </Link>
                ))}
            </div>
          </nav>
        </div>
    </div>
    
  )
}


