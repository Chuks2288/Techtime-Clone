import React from 'react';
import { courseImage } from '../assets';
import { aboutUs } from '../constants';


export default function AboutUs() {
    return (
        <section className='sm:pt-60 pt-20' id='aboutus'>
            <div className="flex items-center justify-between w-[100%] md:flex-row flex-col">
                <div className="flex-col flex justify-between mr-5">
                    <h1 className='sm:text-[56px] text-[24px] sm:text-left text-center font-bold mb-5'>This is Why We are Best <br /> from Others</h1>
                    <p className='sm:text-[18px] text-[8px] sm:text-left text-center md:leading-[45px] leading-[18px]'>
                        High-Definition Video Is Video Of Higher Resolution And
                        Quality Than Standard Definition. While There's No Standard Meaning For High
                        Definition, Generally Any Standard Video Image
                    </p>
                    <div className="mt-5">
                        <img src={courseImage} alt="courseImage"
                            className='w-[612px] h-[375px] rounded-md object-contain'
                        />
                    </div>
                </div>
                <div className="grid grid-row-2 grid-cols-2 gap-2 w-[110%] md:mx-4 mx-6 mt-1">
                    {aboutUs.map((item) => (
                        <div
                            key={item.id}
                            className="bg-white p-4 rounded-[8px] sm:text-[12px] text-[8px] sm:leading-[25px] leading-[17px]  shadow-md">
                            <span className='sm:text-[24px] text-[16px] sm:w-[48px] w-[32px] sm:h-[48px] h-[32px] py-2 px-3 flex rounded-[8px]'
                                style={{ backgroundColor: item.bgColor, color: item.color }}>{item.icon}</span>
                            <h4 className='sm:text-[16px] text-[12px] font-bold mt-4'>{item.title}</h4>
                            <p>{item.content}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
