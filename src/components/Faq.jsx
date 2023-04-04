import React from 'react';
import { faqs } from '../constants';

export default function Faq() {
    return (
        <div>
            <div className="text-center flex-col justify-center">
                <h1 className='text-[#000F24] font-bold sm:text-[56px] text-[24px]'>Frequently Asked Questions</h1>
                <p className='max-w-[650px] md:leading-[30px] leading-[18px] m-auto pt-5 sm:text-[16px] text-[8px]'>High-Definition Video Is Video Of Higher Resolution And
                    Quality Than Standard Definition. While There's No Standard Meaning For High
                    Definition, Generally Any Standard Video Image
                </p>

            </div>
            <div className="mt-10">
                <div className="max-w-[900px] course">
                    <h4 className='sm:text-[16px] text-[8px] text-primary font-bold'>Is there a free trial available?</h4>
                    <p className='sm:leading-[30px] leading-[18px] m-auto pt-5 sm:text-[16px] text-[8px]'>
                        Quality Than Standard Definition. While There's No Standard Meaning For High
                        Definition.Quality Than Standard Definition. While There's No Standard Meaning For High
                        Definition.
                    </p>
                    <div className='flex flex-col max-w-[900px]'>
                        {faqs.map((faq) => (
                            <div
                                key={faq.id}
                                className="flex justify-between items-center my-2 border-b-2">
                                <h4 className='flex flex-1 sm:text-[16px] text-[8px] font-bold my-2 pb-1'>{faq.question}</h4>
                                <p className='font-bold cursor-pointer'>{faq.answer}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
