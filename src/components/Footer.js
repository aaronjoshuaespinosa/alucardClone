import React from 'react'
import { AiOutlineTwitter } from "react-icons/ai";
import { FaTelegramPlane } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <section className='bg-black text-white w-full h-auto relative flex flex-col justify-center items-center border-t-red border-t-[1px]'>
        <div className='w-full max-w-[80rem] px-5'>
          <div className='flex flex-col md:flex-row lg:flex-row md:justify-between lg:items-center w-full py-10 gap-y-5'>
            <div className='font-sora text-[1.5rem] md:text-[1.75rem] lg:text-[2.25rem]'>
              <p>Business Inquiries and Proposals?</p>
              <p>Send us an email.</p>
            </div>
            <button className='font-inter cursor-pointer w-full md:w-auto lg:w-auto py-[15px] px-[30px] tracking-[1.5px] border-[2px] border-red hover:bg-red transition-all ease-in-out duration-[0.2s]'>Send an Email</button>
          </div>

          <hr className='border-[1px] border-red w-full' />

          <div className='flex flex-col lg:flex-row justify-between items-center w-full py-10 gap-y-5'>
            <img className='w-[13rem] lg:w-[15rem]' alt='animated logo' src='https://ik.imagekit.io/xzgmktvzg/hero1.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1676100600748' />
            <div className='flex flex-col items-center lg:items-start gap-y-5'>
              <h1 className='font-inter font-[500] text-[1.25rem]'>Contact Info</h1>
              <p className='font-inter font-thin text-[1rem]'>hello@alucard.world</p>
              <div className='flex flex-row gap-x-3 text-red text-[1.5rem]'>
                <AiOutlineTwitter className='cursor-pointer' />
                <FaTelegramPlane className='cursor-pointer' />
              </div>
            </div>
          </div>

          <div className='flex w-full items-center justify-center py-10'>
            <p className='font-inter text-[0.8rem]'>Copyright © 2023 Alucard, All rights reserved.</p>
          </div>
        </div>
      </section>
    </>
  )
}

export default Footer