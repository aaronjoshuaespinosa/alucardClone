import React, { useState, useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'

const Tokenomics = () => {
  const animateTitle = {
    initial: {
      x: "-100%",
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 1,
        ease: "easeInOut",
      }
    },
  }

  const animateAccent = {
    initial: {
      x: -100,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 1,
        ease: "easeInOut",
      }
    },
  }

  const animateImg = {
    initial: {
      opacity: 0,
      y: 400,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: "easeInOut",
      }
    },
  }

  const options = {
    triggerOnce: true,
    thresold: 0.3
  }

  const [titleRef, titleView] = useInView(options)
  const [accentRef, accentView] = useInView(options)
  const [imgRef, imgView] = useInView(options)
  const [tokenRef, tokenView] = useInView(options)

  const [tax, setTax] = useState(0)

  useEffect(() => {
    if (tokenView) {
      for (let i = 0; i < 5; i++) {
        setTimeout(() => {
          setTax(value => value + 1)
        }, i * 150);
      }
    }
  }, [tokenView])

  return (
    <>
      <section className='bg-black text-white w-full h-auto lg:h-[60vh] relative flex justify-center'>
        <div className='z-10 max-w-[80rem] w-[85%] mx-0 lg:mx-10 h-full flex flex-col lg:flex-row items-center justify-center gap-x-40'>

          {/* TAX RATES */}
          <div className='flex flex-col items-center justify-center w-50'>
            <motion.h1 variants={animateTitle} initial="initial" ref={titleRef} animate={titleView ? "animate" : ""} className='font-sora font-[900] text-[2.3rem] lg:text-[3rem]'>TOKENOMICS</motion.h1>
            <div className='flex flex-col md:flex-row lg:flex-row justify-between w-full'>
              <div className='flex flex-col items-center'>
                <p className='font-inter font-[600] text-[4.3rem]' ref={tokenRef}>{tax}%</p>
                <p className='font-inter font-[400] text-[1.1rem]'>Buy Tax</p>
              </div>
              <div className='flex flex-col items-center'>
                <p className='font-inter font-[600] text-[4.3rem]' ref={tokenRef}>{tax}%</p>
                <p className='font-inter font-[400] text-[1.1rem]'>Sell Tax</p>
              </div>
            </div>
          </div>

          {/* IMAGE */}
          <div className='flex items-center justify-center w-full lg:w-50 relative my-20'>
            <motion.div variants={animateAccent} initial="initial" ref={accentRef} animate={accentView ? "animate" : ""} className='w-36 h-36 border-t-white border-t-[5px] border-l-white border-l-[5px] absolute top-[-1rem] left-[-1rem]'></motion.div>
            <motion.img variants={animateImg} initial="initial" ref={imgRef} animate={imgView ? "animate" : ""} alt="alucard token" className='w-full lg:w-50' src="https://ik.imagekit.io/xzgmktvzg/3rd-1.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1676100600316" />
          </div>
        </div>
      </section>
    </>
  )
}

export default Tokenomics