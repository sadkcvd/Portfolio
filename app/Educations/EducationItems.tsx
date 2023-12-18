import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import SwrBanner from "./../../public/EducationBanners/swrbanner.png";
import CypressBanner from "../../public/EducationBanners/cypressbanner.png";

const EducationItems = () => {
    const educationItems = [
        {
            name: "useSWR",
            description: "React Hooks for Data Fetching",
            banner: SwrBanner,
            link: "Educations/useSWR"
        },
        {
            name: "Cypress",
            description: "Test. Automate. Accelerate.",
            banner: CypressBanner,
            link: "Educations/Cypress"
        }
    ]

    return (
        <div className='flex justify-center gap-5 flex-wrap'>
            {educationItems.map(item => (
                <Link href={item.link} className='h-72 flex flex-col p-8 border-2 border-violet-600 rounded-lg cursor-pointer hover:bg-violet-100 duration-300'>
                    <div className='flex items-center h-[300px] w-[300px]'>
                        <Image
                            alt='banner'
                            src={item.banner}
                            width={300}
                            height={300}
                        />
                    </div>

                    <div className='flex flex-col items-center text-center'>
                        <h1 className='font-bold'>{item.name}</h1>
                        <p className='font-semibold'>{item.description}</p>
                    </div>
                </Link>
            ))}
        </div>
    )
}

export default EducationItems