import React from 'react';
import { courses, courseDeps } from '../constants';
import { Button } from '../components';


export default function Courses() {
    return (
        <section className='pt-20' id='courses'>
            <div className="flex flex-col">
                <div className="text-center flex-col justify-center">
                    <h1 className='text-[#000F24] font-bold sm:text-[56px] text-[24px]'>Browse Our Popular Courses</h1>
                    <p className='max-w-[650px] md:leading-[30px] leading-[18px] m-auto pt-5 sm:text-[16px] text-[8px]'>High-Definition Video Is Video Of Higher Resolution And
                        Quality Than Standard Definition. While There's No Standard Meaning For High
                        Definition, Generally Any Standard Video Image
                    </p>

                    <div className="pt-5 flex flex-row justify-between sm:max-w-[700px] max-w-[300px] items-center course mb-3">
                        {courseDeps.map((courseDep, index) => (
                            <span
                                key={courseDep.id}
                                className={`${index === courseDeps.length - 4 ?
                                    'text-[#004DB3] sm:text-[16px] text-[8px] bg-white sm:p-3 p-2 rounded-md'
                                    :
                                    'text-[#A1A1A1] sm:text-[16px] text-[8px]'}`}>
                                {courseDep.title}
                            </span>
                        ))}

                    </div>
                </div>

                <div className="grid sm:grid-cols-3 grid-cols-2  sm:grid-row-3 grid-row-2 gap-5 mt-5">
                    {courses.map((course) => (
                        <div
                            key={course.id}
                            className="rounded-md bg-white p-2">
                            <img src={course.image}
                                className='sm:w-[439px] w-[176.82px] sm:h-[292px] h-[117.88px] object-contain'
                            />
                            <div className="flex flex-row items-center justify-between mb-4">
                                <span className='py-[.5px] px-3 sm:text-[12px] text-[4px] font-bold rounded-full text-[#1E5DCE] bg-[#b0cafb]'>{course.dep}</span>
                                <div className="flex justify-end items-center">
                                    <span className='sm:text-[12px] text-[4px]'>{course.rating}</span>
                                    <span className='text-[#F6B435] mr-2 sm:text-[12px] text-[4px]'>{course.star}</span>
                                    <span className='sm:text-[12px] text-[4px]'>{course.rating2}</span>
                                </div>

                            </div>

                            <h3 className='sm:text-[24px] text-[8px] font-bold mb-3'>{course.title}</h3>

                            <div className="flex items-center justify-between flex-row mb-3">
                                <div className="flex items-center">
                                    <span className='mr-2 sm:text-[12px] text-[4px]'>{course.icon2}</span>
                                    <span className='sm:text-[12px] text-[4px]'>{course.time}</span>
                                </div>
                                <div className="flex items-center">
                                    <span className='mr-2 sm:text-[12px] text-[4px]'>{course.icon}</span>
                                    <span className='sm:text-[12px] text-[4px]'>{course.lessons}</span>
                                </div>
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="flex items-center">
                                    <img src={course.lecturerImage}
                                        className='sm:w-[40px] w-[16px] sm:h-[40px] h-[16px] mr-2'
                                    />
                                    <span className='font-bold sm:text-[12px] text-[4px]'>{course.lecturerName}</span>
                                </div>
                                <p className='font-bold text-[#004DB3] sm:text-[12px] text-[4px]'>{course.price}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className='w-full flex justify-center mt-6'>
                    <Button
                        text='Explore All Courses'
                        styles='text-white bg-primary'
                    />
                </div>

            </div>
        </section>
    )
}
