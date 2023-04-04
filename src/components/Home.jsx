import React from 'react';
import styles from '../style';
import {
    heroImage, induction, vscode, figma, vector6, vector, wordpress,
    image1, image2, image3, image4, image5
} from '../assets';
import { Button } from '../components';

import { FiArrowUpRight } from 'react-icons/fi';



export default function Home() {
    return (

        <section id='home' className={`flex sm:flex-row flex-col mt-[50px] justify-center items-center`}>
            <div className={`flex-1 flex-col justify-between items-center`}>
                <h2 className={`sm:text-[64px] text-[32px] sm:leading-[72px] leading-[45.78px] leading font-bold
                 text-white sm:text-left text-center mb-6 max-w-[700px]`}>
                    Grow your Skills to <br className='' />
                    advance your career <br />
                    path
                </h2>
                <p className={` flex flex-col max-w-[500px] mt-5 text-white sm:leading-[40px] leading-[20px]
                 sm:text-[16px] text-[8px] sm:items-start items-center sm:justify-start justify-center`}>
                    Build Your Future With Our Quality Education. The Best And Largest All-in-one
                    Online Tutoring Platform in the World.
                </p>
                <div className="mt-5 mb-5  flex items-center sm:justify-start justify-center">
                    <Button
                        text='Get Started Now'
                        styles='bg-transparent border text-white' />

                    <Button
                        text='Enroll Now'
                        styles='ml-3 font-bold text-primary bg-white' />
                </div>
                <div className="relative sm:ml-0 ml-20 flex flex-row flex-nowrap sm:justify-start justify-center sm:items-left items-center sm:mt-15 mt-10 m-0 mb-10">
                    <img src={image1}
                        className='absolute left-0 sm:w-[64px] w-[32px] sm:h-[64px]
                         h-[32px] sm:rounded-[40px] rounded-[16px]' />
                    <img src={image2}
                        className='absolute sm:left-10 left-5 sm:w-[64px] w-[32px] sm:h-[64px]
                        h-[32px] sm:rounded-[40px] rounded-[16px' />
                    <img src={image3}
                        className='absolute sm:left-20 left-10 sm:w-[64px] w-[32px] sm:h-[64px]
                        h-[32px] sm:rounded-[40px] rounded-[16px'
                    />
                    <img src={image4}
                        className='absolute sm:left-[120px] left-[60px] sm:w-[64px] w-[32px] sm:h-[64px]
                        h-[32px] sm:rounded-[40px] rounded-[16px ' />
                    <img src={image5}
                        className='absolute sm:left-40 left-20 sm:w-[64px] w-[32px] sm:h-[64px]
                        h-[32px] sm:rounded-[40px] rounded-[16px' />

                    <div className="sm:left-[235px] left-[120px] absolute">
                        <h1 className='text-white sm:text-[24px] text-[13.4px] font-extrabold'>255K
                            <span className='text-white text-1xl font-extrabold'>+</span></h1>
                        <span className='text-[#E7E7E7] text-sm'>Previews</span>
                    </div>
                </div>

            </div>
            <div className="mt-5 relative">
                <img src={heroImage}
                    className='relative sm:mr-20 ml-0 sm:w-[705.33px] w-[363.01px] sm:h-[886px] h-[456px] '
                />
                <img src={induction}
                    className='absolute sm:w-[203.72px] w-[104.85px] sm:h-[186.74px] h-[96.11px] left-[-20px] top-2'
                />
                <img src={vscode}
                    className='absolute sm:w-[93.6px] w-[48px] sm:h-[93.6px] h-[48px] sm:right-40  right-10 top-0'
                />

                <img src={figma}
                    className='absolute sm:w-[93.6px] w-[48px] sm:h-[93.6px] h-[48px]  sm:left-[-40px] left-0 sm:bottom-[300px] bottom-[150px]'
                />
                <img src={vector6}
                    className='absolute sm:flex hidden sm:w-[111.08px] w-[54.41px] sm:h-[222.87px] h-[109.17px]  left-[-100px] bottom-20'
                />
                <img src={vector6}
                    className='absolute sm:hidden flex sm:w-[111.08px] w-[54.41px] sm:h-[222.87px] h-[109.17px]  right-0 top-[-100px]'
                />
                <img src={vector}
                    className='absolute h-5 w-5 top-40'
                />
                <div className="bg-white sm:w-[84.24px] w-[43.36px] sm:h-[84.24px] h-[43.36px] absolute p-2 sm:right-20 right-0 sm:bottom-10 bottom-5 rounded-md">
                    <img src={wordpress}
                        className=' sm:w-[63.18px] w-[32.52px] sm:h-[63.18px] h-[32.52px]  '
                    />
                </div>

            </div>


        </section >
    )
}
