import React from 'react'
import HeroImage from "../../../public/hero-devices.svg"
import Image from "next/image";

const Section = () => {
    return (
        <section>
            <Image
                id='section-devices-image'
                alt='HeroImage'
                src={HeroImage}
                width={800}
                height={600}
            />
        </section>
    )
}

export default Section