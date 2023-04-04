import React from 'react';
import { Button } from '../components';
// import useState from 'react';

import { GiHamburgerMenu } from 'react-icons/gi';
import { GrClose } from 'react-icons/gr';
import { navLinks } from '../constants';


export default function Navbar() {

    const [toggle, setToggle] = React.useState(false);

    return (
        <nav className='w-full flex py-6 justify-between items-center navbar'>

            <p className='logo text-white sm:text-[47px] text-[19.16px]'>Tech Time</p>

            <ul className='list-none md:flex hidden justify-end items-center flex-1'>
                {navLinks.map((nav, index) => (
                    <li
                        key={nav.id}
                        className={`font-san-serif font-semibold cursor-pointer text-[16px]
                         text-white ${index === navLinks.length - 1 ? 'mr-0' : 'mr-5'}
                          ${index === navLinks.length - 1 ? 'mr-5' : 'mr-4'}
                         `}
                    >
                        <a href={`#${nav.id}`}>
                            {nav.title}
                        </a>
                    </li>
                ))}
                <div className="">
                    <Button
                        text='Enroll Now'
                        styles='ml-3 font-bold text-primary bg-white'
                    />
                </div>
            </ul>

            <div className="md:hidden flex flex-1 justify-end items-center">

                <div
                    className='w-[28px] h-[28px] object-contain text-[30px]'
                    onClick={() => setToggle((prev) => !prev)}
                >
                    {toggle ? <GrClose className='text-white' /> : <GiHamburgerMenu className='text-white' />}
                </div>

                <div className={`${toggle ? 'flex' : 'hidden'}
                 p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2
                 min-w-[140px] rounded-xl sidebar`}>

                    <ul className='list-none flex flex-col justify-end items-center flex-1'>
                        {navLinks.map((nav, index) => (
                            <li
                                key={nav.id}
                                className={`font-poppins font-normal cursor-pointer text-[16px]
                         text-white ${index === navLinks.length - 1 ? 'mb-5' : 'mb-4'}`}>
                                <a href={`#${nav.id}`}>
                                    {nav.title}
                                </a>
                            </li>
                        ))}
                        <div className="">
                            <Button
                                text='Enroll Now'
                                styles='ml-3 font-bold text-primary bg-white'
                            />
                        </div>
                    </ul>
                </div>
            </div>
        </nav >
    )
}
