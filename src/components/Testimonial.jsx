import React from 'react';
import { Slide } from '../components';

export default function Testimonial() {
    return (
        <section className='py-20' id='testimonial'>
            <div className="">
                <div className="text-center flex-col justify-center">
                    <h1 className='text-[#000F24] font-bold sm:text-[56px] text-[24px]'>What Our Clients Are Saying</h1>
                    <p className='max-w-[650px] md:leading-[30px] leading-[18px] m-auto pt-5 sm:text-[16px] text-[8px]'>High-Definition Video Is Video Of Higher Resolution And
                        Quality Than Standard Definition. While There's No Standard Meaning For High
                        Definition, Generally Any Standard Video Image
                    </p>
                </div>

                <div className='w-100 pt-20 px-0'>
                    <Slide />
                </div>
            </div>
        </section>
    )
}
