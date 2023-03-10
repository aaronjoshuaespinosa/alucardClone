import React from 'react'
import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'

const Util = () => {

  const animateTitle = {
    initial: {
      y: 70,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1,
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
        delay: 0.6,
      }
    },
  }

  const cards = [
    {
      id: 0,
      image: "https://ik.imagekit.io/xzgmktvzg/util1.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1676100601089",
      title: "AI Generator",
      text: "This project focuses on creating an Artificial Intelligence (AI)-driven image generator that produced Dark Themed images.",
    },
    {
      id: 1,
      image: "https://ik.imagekit.io/xzgmktvzg/uti2.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1676100600926",
      title: "NFT Collections",
      text: "The ultimate utility offering users the ability to showcase, securely store, and trade their rare and valuable NFTs. and find other users to join in on their NFT trading adventures.",
    },
    {
      id: 2,
      image: "https://ik.imagekit.io/xzgmktvzg/util3.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1676100600829",
      title: "Artwork Competition",
      text: "We seek to bring together artists, graphic designers, and digital enthusiasts of all skill levels to create or participate in online competitions and create beautiful, unique digital artwork.",
    },
  ]

  const options = {
    triggerOnce: true,
    thresold: 0.3
  }

  const [titleRef, titleView] = useInView(options)
  const [descRef, descView] = useInView(options)
  const [imgRef, imgView] = useInView(options)

  return (
    <>
      <section className='bg-black text-white w-full h-auto pt-5 pb-20 relative flex justify-center'>
        <div className='z-10 max-w-[80rem] w-[85%] mx-0 lg:mx-10 h-full flex flex-col lg:flex-row items-center justify-center'>
          {/* DESCRIPTION */}
          <div className='flex flex-col gap-y-[1rem]'>
            <p className='font-inter font-[100] text-[10px] lg:text-[12px] leading-[0.9rem] tracking-[3px]'>OUR UTILITIES</p>
            <motion.h1 variants={animateTitle} initial="initial" ref={titleRef} animate={titleView ? "animate" : ""} className='font-sora font-[400] text-[1.75rem] lg:text-[3rem] leading-[1.9rem] lg:leading-[3.25rem]'>Be Secured with Alucard</motion.h1>
            <motion.p variants={animateDesc} initial="initial" ref={descRef} animate={descView ? "animate" : ""} className='color-secondary font-inter font-[100] text-[10px] lg:text-[14px] tracking-[3px] leading-[24px] lg:leading-[28px]'>ALUCARD IS AN INNOVATIVE MEME TOKEN PROJECT THAT OFFERS UNPRECEDENTED SECURITY AND UTILITIES FOR INVESTORS.</motion.p>
          </div>

          {/* CARDS */}
          <div className='flex flex-col md:flex-row lg:flex-row justify-center gap-x-[1rem] mx-[2rem] w-full md:w-full lg:w-auto lg:max-w-[55rem] pt-[3rem] lg:pt-0'>
            {cards.map((card, i) => (
              <motion.div
                animate={imgView ? {
                  opacity: [0, 1],
                  y: [i % 2 === 0 ? -400 : 400, 0],
                  transition: {
                    duration: 1,
                    ease: "easeInOut",
                  }
                } : {}}

                className='w-full' style={i === 0 ? { marginTop: '0rem' } : i === 1 ? { marginTop: '1rem' } : i === 2 ? { marginTop: '2rem' } : null} key={card.id} ref={imgRef}>
                <div className='bg-red h-[15rem] md:h-[18rem] overflow-hidden flex'>
                  <img alt="card" className='w-full md:h-full lg:h-full object-cover items-center' src={card.image} />
                </div>
                <div className='bg-card text-black p-[1.5rem]'>
                  <h1 className='font-sora font-[500] text-[1.23rem]'>{card.title}</h1>
                  <p className='font-inter text-[0.9rem] lg:text-[1rem]'>{card.text}</p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>
    </>
  )
}

export default Util