import React from 'react'
import Image from "next/image";
import Avatar from "../../../public/avatar.svg"

const Hero = () => {
    return (
        <header className="flex flex-col items-center gap-y-8 text-center p-6">
            <h1 className="text-4xl font-bold mb-4">Welcome to My Portfolio</h1>
            <p className="text-lg">I build awesome things with Next.js and Tailwind CSS.</p>
            <Image
                alt='Avatar'
                src={Avatar}
                width={200}
                height={200}
            />
        </header>
    )
}

export default Hero