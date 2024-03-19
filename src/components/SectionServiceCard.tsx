import axios from 'axios';
import React, { ReactElement, useEffect, useState } from 'react'

interface Props {
    image: string
    text: string
    icon: ReactElement
}

const SectionServiceCard = ({ image, text, icon }: Props) => {
    return (
        <div className='w-[280px] h-[200px]'>
            <div className='relative border border-[#E0E0E0] rounded-md'>
                <img className='w-[280px] h-[200px] bg-gray-500 rounded-t-md' src={image}></img>
                <div className='w-full h-1/3 p-3 bg-white absolute bottom-0 pr-3'>
                    <p className='font-medium'>{text}</p>
                </div>
                <div className='absolute right-5 bottom-10'>
                    <div className='w-[55px] h-[55px] rounded-full p-2 bg-[#D1E7FF] flex items-center justify-center border border-white'>{icon}</div>
                </div>
            </div>

        </div>
    )
}



export default SectionServiceCard;