import React from 'react'
import HeroImage from "../../../public/hero-devices.svg"
import Image from "next/image";

const Section = () => {
    return (
        <section className="h-full w-full flex flex-col items-center pt-12 justify-end">
            <Image
                alt='HeroImage'
                src={HeroImage}
                width={1000}
                height={1000}
            />
        </section>
    )
}

export default Section