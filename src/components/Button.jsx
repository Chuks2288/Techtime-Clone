import React from 'react'

export default function Button({ styles, text, color, bgColor, font }) {
    return (
        <button
            type='button'
            className={`py-2.5 px-6 font-poppins font-${font} sm:text-[16px] text-[8px]
             text-${color} bg-${bgColor} outline-none rounded-md ${styles}`}>
            {text}
        </button>
    )
}
