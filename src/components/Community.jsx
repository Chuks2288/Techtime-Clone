import React from 'react';
import { Button } from '../components';
import {
    communityImage1, communityImage2, communityImage3, communityImage4, communityImage5, communityImage6,
    communityImage7, communityImage8, communityImage9, communityImage10
} from '../assets';

export default function Community() {
    return (
        <section className='z-30 mb-[10px] pb-10' id='community'>
            <div className="flex flex-col">
                <div className="text-center flex-col justify-center">
                    <p className='text-white font-bold max-w-[650px] uppercase md:leading-[30px] leading-[18px] m-auto pt-5 sm:text-[16px] text-[8px]'>
                        join our community
                    </p>
                    <h1 className='text-white sm:leading-[65px] leading-[45px] font-bold sm:text-[56px] text-[24px]'>Are you ready to connect with the future talent of the tech world</h1>
                    <p className='text-white max-w-[650px] md:leading-[30px] leading-[18px] m-auto pt-5 sm:text-[16px] text-[8px]'>
                        Meet Up With Other Techstars And Grow Together
                    </p>
                </div>
                <div className="flex justify-center sm:w-[600px] w-[300px]  sm:h-[350px] h-[175px] course p-2 mt-10 relative">
                    <div className="">
                        <img src={communityImage1} alt="communityImage1"
                            className='absolute sm:w-[64px] w-[25.5px]  sm:h-[64px] h-[25.5px] sm:rounded-[40px] rounded-[15.94px]
                            sm:top-[4rem] top-[2rem] sm:left-[2] left-0'
                        />
                        <div className=" 'absolute sm:w-[64px] w-[25.5px]  sm:h-[64px] h-[25.5px] sm:rounded-[40px] rounded-[15.94px]
                        absolute bg-[#FFB6C1] sm:top-[8rem] top-[4rem] sm:left-[6rem] left-[3rem]">
                            <img src={communityImage2} alt="communityImage2"
                                className='absolute sm:w-[64px] w-[25.5px]  sm:h-[64px] h-[25.5px] sm:rounded-[40px] rounded-[15.94px]'
                            />
                        </div>
                        <img src={communityImage3} alt="communityImage3"
                            className='absolute sm:w-[64px] w-[25.5px]  sm:h-[64px] h-[25.5px] sm:rounded-[40px] rounded-[15.94px]
                            sm:bottom[2rem] bottom-0 sm:left-[6rem] left-[3rem]'
                        />
                        <div className="absolute bg-blue-600 sm:w-[50.37px] w-[25.5px]  sm:h-[45.03px] h-[25.5px] sm:rounded-[40px] rounded-[15.94px]
                            sm:top-[4rem] top-[2rem] sm:left-[12rem] left-[6.5rem]">
                            <img src={communityImage4} alt="communityImage4"
                                className='absolute sm:w-[50.37px] w-[25.5px]  sm:h-[45.03px] h-[25.5px] sm:rounded-[40px] rounded-[15.94px]
                            '/>
                        </div>

                        <img src={communityImage5} alt="communityImage5"
                            className='absolute sm:w-[64px] w-[25.5px]  sm:h-[64px] h-[25.5px] sm:rounded-[40px] rounded-[15.94px]
                            sm:top-[5rem] top-[2.5rem] sm:left-[20rem] left-[10rem]'
                        />

                        <img src={communityImage6} alt="communityImage6"
                            className='absolute sm:w-[64px] w-[25.5px]  sm:h-[64px] h-[25.5px] sm:rounded-[40px] rounded-[15.94px]
                            sm:bottom-[4rem] bottom-[2rem] sm:left-[17rem] left-[8.5rem]'
                        />

                        <div className='absolute bg-[#FFB6C1] sm:w-[64px] w-[25.5px]  sm:h-[64px] h-[25.5px] sm:rounded-[40px] rounded-[15.94px]
                            sm:top-[5rem] top-[2.5rem] sm:right-[8rem] right-[4rem]'>
                            <img src={communityImage7} alt="communityImage7"
                                className='absolute sm:w-[64px] w-[25.5px]  sm:h-[64px] h-[25.5px] sm:rounded-[40px] rounded-[15.94px]
                            '/>
                        </div>
                        <img src={communityImage8} alt="communityImage8"
                            className='absolute sm:w-[64px] w-[25.5px]  sm:h-[64px] h-[25.5px] sm:rounded-[40px] rounded-[15.94px]
                            sm:top-[2rem] top-0 right-[1.5rem]'
                        />
                        <img src={communityImage9} alt="communityImage9"
                            className='absolute sm:w-[64px] w-[25.5px]  sm:h-[64px] h-[25.5px] sm:rounded-[40px] rounded-[15.94px]
                            sm:bottom-[10rem] bottom-[5rem] sm:right-[2rem] right-0'
                        />
                        <div className="absolute bg-blue-600 sm:w-[64px] w-[25.5px]  sm:h-[64px] h-[25.5px] sm:rounded-[40px] rounded-[15.94px]
                            sm:bottom-[4rem] bottom-[2rem] sm:right-[6rem] right-[3rem]">
                            <img src={communityImage10} alt="communityImage10"
                                className='absolute sm:w-[64px] w-[25.5px]  sm:h-[64px] h-[25.5px] sm:rounded-[40px] rounded-[15.94px]
                            '/>
                        </div>
                    </div>
                </div>

                <div className="flex justify-center m-0 mt-10">
                    <Button
                        text='Join Our Community'
                        styles='bg-white font-bold text-primary'
                    />
                </div>
            </div>
        </section >
    )
}
