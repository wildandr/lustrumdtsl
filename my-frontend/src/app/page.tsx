'use client'
import React from 'react'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export default function Home() {
    const { push } = useRouter()
    useEffect(() => {
        push('/lustrum')
    }, [push])
    return <div />
}
