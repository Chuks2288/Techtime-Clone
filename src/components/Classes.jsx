import React from 'react';
import { Button } from '../components';
import { classIcons, classIcons22 } from '../constants';
import { classImage, classImage2, classDots } from '../assets';



export default function Classes() {
    return (
        <div Classes='bg-white flex flex-row items-center justify-between'>
            <div className='flex sm:flex-row flex-col w-full'>
                <div className="flex flex-col flex-1 sm:justify-start justify-center">
                    <h1 className='sm:text-[56px] text-[24px] sm:text-left text-center font-bold'>High Quality video, audio <br /> & live classes</h1>

                    <p className='sm:text-[18px] text-[8px] sm:text-left text-center max-w-[600px] sm:leading-[40px] leading-[20px]'>
                        High-Definition Video Is Video Of Higher Resolution And
                        Quality Than Standard Definition. While There's No Standard Meaning For High
                        Definition, Generally Any Standard Video Image
                    </p>
                    <div className="w-full flex sm:justify-start justify-center sm:mt-6 mt-0">
                        <Button
                            text='View Courses'
                            styles='text-white w-[200px]  bg-[#004DB3] my-5 text-center flex justify-center'
                        />
                    </div>

                    <div className="grid grid-rows-2 grid-cols-2 gap-3 max-w-[410px]">
                        {classIcons.map((classIcon) => (
                            <div
                                key={classIcon.id}
                                className='flex flex-row py-2 px-3 bg-white shadow-sm rounded-md justify-center text-center mr-3 items-center'
                            >
                                <span className={`text-[20px]  flex items-center mr-2 mb-3 p-2  rounded-md`}
                                    style={{ backgroundColor: classIcon.bgColor, color: classIcon.color }}
                                >
                                    {classIcon.icons}
                                </span>

                                <h2 className='sm:text-[16px] text-[8px]  font-bold'>
                                    {classIcon.title}
                                </h2>
                            </div>
                        ))}
                    </div>

                </div>

                <div className="sm:mt-5 mt-4 flex sm:justify-end justify-center relative">
                    <img src={classImage} alt="classImage"
                        className='sm:w-[606px] w-[265px] relative sm:h-[512px] h-[224px] z-20 sm:rounded-[24px] rounded-[8px] object-contain'
                    />
                    <img src={classImage2} alt="classImage2"
                        className='sm:w-[397.3px] w-[174px] absolute sm:left-[-110px] left-0 sm:bottom-[-40px] bottom-[-60px] z-40 sm:h-[265px] h-[116px] sm:rounded-[24px] rounded-[8px] object-contain'
                    />
                    <img src={classDots} alt="classDots"
                        className='sm:w-[397.3px] w-[174px] absolute sm:right-[-100px] right-0 sm:bottom-[-40px] bottom-[-60px] sm:h-[265px] h-[116px] sm:rounded-[24px] rounded-[8px] object-contain'
                    />
                </div>
            </div>
        </div>
    )
}
