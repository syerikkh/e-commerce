import React from 'react'
import { Logo } from './Icons/Logo'
import { Facebook } from './Icons/Facebook'
import { LogoName } from './Icons/LogoName'
import { AppStoreDownload } from './Icons/AppStoreDownload'
import { PlayStoreDownload } from './Icons/PlayStoreDownload'

const Footer = () => {
    return (
        <div className='flex items-center justify-center'>
            <div>


                <div className='flex max-w-[1180px] w-[90%] py-5 border-b-2'>
                    <div className='flex justify-between w-full'>
                        <div className='flex flex-col gap-2 w-[276px] h-[157px]'>
                            <div className='flex gap-2 items-center '>
                                <Logo />
                                <LogoName />
                            </div>
                            <p className='text-[#505050] text-base w-full'>Best information about the company gies here but now lorem ipsum is</p>
                            <div className='flex gap-2'>
                                <Facebook />
                                <Facebook />
                                <Facebook />
                                <Facebook />
                                <Facebook />
                            </div>
                        </div>
                        <div>
                            <p className='font-medium mb-3'>About</p>
                            <div className='text-[#8B96A5]'>
                                <p>About Us</p>
                                <p>Find store</p>
                                <p>Categories</p>
                                <p>Blogs</p>
                            </div>
                        </div>
                        <div>
                            <p className='font-medium mb-3'>Partnership</p>
                            <div className='text-[#8B96A5]'>
                                <p>About Us</p>
                                <p>Find store</p>
                                <p>Categories</p>
                                <p>Blogs</p>
                            </div>
                        </div>
                        <div>
                            <p className='font-medium mb-3'>Information</p>
                            <div className='text-[#8B96A5]'>
                                <p>Help Center</p>
                                <p>Money Refund</p>
                                <p>Shipping</p>
                                <p>Contact us</p>
                            </div>
                        </div>
                        <div className='ml-3'>
                            <p className='font-medium mb-3'>For users</p>
                            <div className='text-[#8B96A5]'>
                                <p>About Us</p>
                                <p>Find store</p>
                                <p>Categories</p>
                                <p>Blogs</p>
                            </div>
                        </div>
                        <div className='ml-3'>
                            <p className='font-medium mb-3'>Get app</p>
                            <div className='flex flex-col gap-2'>
                                <button className='bg-black p-2 rounded-md'>  <AppStoreDownload /></button>
                                <button className='bg-black p-2 rounded-md'><PlayStoreDownload /></button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='bg-[#DEE2E7]'>
                    asdad
                </div>
            </div>
        </div>
    )
}

export default Footer