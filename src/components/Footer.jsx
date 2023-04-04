import React from 'react';
import { socialMedias, footerLinks } from '../constants';

export default function Footer() {
    return (
        <div>
            <div className="flex sm:flex-row flex-col sm:justify-between justify-start sm:items-center items-left pb-20">
                <div className="flex-col justify-between flex-1 mb-5">
                    <h1 className='text-white sm:text-[47px] text-[36px] mb-3'>Tech Time</h1>
                    <p className='text-[16px] text-white max-w-[180px] mb-5'>Reach to us on any of our social network</p>
                    <div className="flex flex-row flex-nowrap justify-between max-w-[200px]">
                        {socialMedias.map((socialMedia) => (
                            <div
                                key={socialMedia.id}
                                className="flex text-white">
                                {socialMedia.icon}
                            </div>
                        ))}
                    </div>
                </div>
                <div className="flex sm:flex-row flex-col justify-between flex-1 sm:items-center items-left">
                    {footerLinks.map((footerLink) => (
                        <div
                            key={footerLink.key}
                            className="flex flex-col">
                            <h2 className="flex flex-col font-bold text-white sm:text-[32px] text-[16px] mt-4">
                                {footerLink.title}
                            </h2>
                            <ul className='list-none mt-5'>
                                {footerLink.links.map((link, index) => (
                                    <li
                                        key={link.name}
                                        className='text-white  sm:text-[24px] text-[16px]'>
                                        {link.name}
                                    </li>

                                ))}
                            </ul>
                        </div>

                    ))}
                </div>
                <div className="flex-col justify-between sm:items-center items-start mt-5">
                    <h2 className='text-white sm:text-[32px] text-[16px] font-bold mb-5'>Subscribe</h2>
                    <form className='flex p-3 mr-3'>
                        <input type="text" className='bg-transparent border' />
                        <span className='text-white bg-primary px-2 py-4 sm:text-[20px] text-[12px] border border-l-0'>Send Message</span>
                    </form>
                </div>

            </div>
        </div>
    )
}
