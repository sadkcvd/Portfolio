import React from 'react'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
import Logo from "../../../public/param_logo.png";

const menuItems = [
    { label: 'Home', link: '/' },
    { label: 'Educations', link: '/Educations' },
];

const Navbar = () => {
    return (
        <nav className="p-8">
            <div className="container mx-auto flex items-center justify-center sm:justify-between">

                <div className="flex-shrink-0">
                    <Link href={menuItems[0].link}>
                        <Image
                            id='logo'
                            alt='Logo'
                            src={Logo}
                            width={150}
                            height={150}
                        />
                    </Link>
                </div>

                <ul className="hidden sm:flex space-x-8">
                    {menuItems.map((item, index) => (
                        <li key={index} className='font-semibold border-b-2 border-transparent hover:border-violet-600 duration-300'>
                            <Link href={item.link} id={item.label}>
                                {item.label}
                            </Link>
                        </li>
                    ))}
                </ul>

                <div className="block sm:hidden">
                    <button className="focus:outline-none">
                        <FontAwesomeIcon icon={faBars} />
                    </button>
                </div>

            </div>
        </nav>
    )
}

export default Navbar;