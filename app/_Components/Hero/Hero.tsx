import React from 'react'
import Image from "next/image";
import Avatar from "../../../public/avatar.svg"

const Hero = () => {
    return (
        <section className="flex flex-col items-center text-center mb-8 gap-y-8">
            <h1 className="text-4xl font-bold" id="hero-title">Welcome to My Portfolio</h1>
            <p className="text-lg" id='hero-description'>Hi, I’m Sadık. Nice to meet you. I build awesome things with Next.js and Tailwind CSS.</p>
            <Image
                id='hero-image'
                alt='Avatar'
                src={Avatar}
                width={200}
                height={200}
            />
        </section>
    )
}

export default Hero