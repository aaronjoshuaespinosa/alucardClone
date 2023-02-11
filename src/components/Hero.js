import React from 'react'
import { motion } from 'framer-motion'

const Hero = () => {

  const animateLogo = {
    initial: {
      y: 0,
    },
    animate: {
      y: [0, -30, 0, -10, 0],
      transition: {
        duration: 2,
        repeat: Infinity,
        repeatDelay: 1
      }
    },
  }

  const animateTitle = {
    initial: {
      x: -800,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 1.2,
        ease: "easeInOut",
      }
    },
  }

  const animateDesc = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        duration: 1.2,
        ease: "easeInOut",
        delay: 1,
      }
    },
  }

  const animateButtons = {
    initial: {
      y: 30,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.9,
        ease: "easeInOut",
        delay: 1.6,
      }
    },
  }

  return (
    <>
      <main className='bg-black text-white w-full h-screen relative flex justify-center'>
        <img alt='background of hero' className='w-full h-[100vh] lg:h-[84vh] absolute brightness-[40%] lg:brightness-[80%] object-cover object-right absolute-0' src="https://ik.imagekit.io/xzgmktvzg/bg2.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1676100601559" />
        <div className='w-full h-[75vh] absolute bottom-0 lg:bottom-[8rem] bg-gradient-to-t from-black to-transparent'></div>

        <div className='z-10 max-w-[85rem] mx-0 lg:mx-10 h-full flex flex-col lg:flex-row items-center justify-center'>
          {/* CTA */}
          <div className='w-[80%] lg:w-[50%] flex flex-col gap-y-[0.9rem]'>
            {/* TITLE */}
            <motion.h1 variants={animateTitle} initial="initial" animate="animate" className='color-main font-sora font-[900] text-[38px] lg:text-[51px] leading-[1em] tracking-[-2px]'>Alucard: The Next Generation Anime Token</motion.h1>

            {/* DESCRIPTION */}
            <motion.p variants={animateDesc} initial="initial" animate="animate" className='color-secondary font-inter font-[100] text-[10px] lg:text-[14px] tracking-[3px] leading-[24px] lg:leading-[28px]'>ALUCARD IS AN ENIGMATIC AND FORMIDABLE ENTITY, EMBODYING BOTH VILLAINY AND HEROISM. HIS FORMIDABLE POWER, UNMATCHED REGENERATIVE ABILITIES, AND UNPREDICTABLE BEHAVIOUR MAKE HIM A TOKEN TO BE FEARED BY MANY.</motion.p>

            {/* BUTTONS */}
            <motion.div variants={animateButtons} initial="initial" animate="animate" className='flex flex-col w-full lg:w-auto lg:flex-row flex-grow-[1] font-inter gap-x-3 gap-y-3 pt-[28.4px]'>

              <a href="https://app.uniswap.org/#/swap?outputCurrency=0x3447c4acabffdc9dc7043f9400fcdfb4a8f5cf5c" target="blank">
                <button className='cursor-pointer w-full lg:w-auto py-[15px] px-[30px] tracking-[1.5px] border-[2px] border-red hover:bg-red transition-all ease-in-out duration-[0.2s]'>Buy Token</button>
              </a>

              <a href="https://www.dextools.io/app/en/ether/pair-explorer/0xa16b2be097fa9d787848aa3eb287670000469bfe" target="blank">
                <button className='cursor-pointer w-full lg:w-auto py-[15px] px-[30px] tracking-[1.5px] border-[2px] border-red hover:bg-red transition-all ease-in-out duration-[0.2s]'>Chart</button>
              </a>

            </motion.div>
          </div>

          {/* ANIMATED LOGO */}
          <div className='w-[80%] lg:w-[50%] pt-10 flex items-center justify-center'>
            <motion.img variants={animateLogo} initial='initial' animate='animate' className='w-[9rem] lg:w-[15rem]' alt='animated logo' src='https://ik.imagekit.io/xzgmktvzg/hero1.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1676100600748' />
          </div>
        </div>
      </main>
    </>
  )
}

export default Hero