import React from 'react'
import { motion } from 'framer-motion'

const History = () => {
  const animateCharacter = {
    initial: {
      y: 0,
    },
    animate: {
      y: [0, -15, -30, -35, -40, -45, -50, -55, -60,  0],
      transition: {
        duration: 5,
        repeat: Infinity,
        ease: 'linear',
      }
    },
  }

  const animateTitle = {
    initial: {
      x: -600,
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
  
  return (
    <>
      <section className='bg-none text-white w-full h-auto lg:h-[80vh] relative flex justify-center py-20'>
        <div className='z-10 max-w-[80rem] w-[85%] mx-0 lg:mx-10 h-full flex flex-col lg:flex-row items-center justify-center'>
          <div className='z-50 flex w-[50%] justify-center items-center'>
            <motion.img variants={animateCharacter} initial="initial" animate="animate" className='w-auto lg:w-[50%]' src="https://ik.imagekit.io/xzgmktvzg/hero2.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1676100600918" />
          </div>

          <div className='z-50 flex flex-col w-full lg:w-[50%] justify-center'>
            <motion.h1 variants={animateTitle} initial="initial" animate="animate" className='font-sora font-[900] text-[2.3rem] lg:text-[3rem]'>THE HISTORY</motion.h1>
            <motion.p variants={animateDesc} initial="initial" animate="animate" className='color-secondary font-inter font-[100] text-[10px] lg:text-[12px] tracking-[3px] leading-[24px] lg:leading-[28px]'>ALUCARD IS THE CENTRAL CHARACTER AND MAIN ANTAGONIST OF THE HELLSING ANIME SERIES. HE IS A POWERFUL VAMPIRE AND MARTIAL ARTIST, WHO SERVES SIR INTEGRA FAIRBROOK WINGATES HELLSING, THE LEADER OF THE HELLSING ORGANIZATION, WHO SPECIALIZES IN PROTECTING THE BRITISH EMPIRE FROM SUPERNATURAL THREATS. ALUCARD WAS BORN IN THE EARLY 1400S AS VLAD TEPES, A RUTHLESS WARLORD IN WALLACHIA (NOW ROMANIA).

              HE WAS RENOWNED FOR HIS CRUELTY, WHICH WAS SO GREAT THAT, EVEN AFTER HIS DEATH, HIS NAME BECAME SYNONYMOUS WITH TERROR AND SADISM (HENCE ALUCARD, THE ANAGRAM OF HIS NAME).

              HE WAS EVENTUALLY KILLED BY ABRAHAM VAN HELLSING, WHO THEN BOUND THE VAMPIRE’S SOUL TO AN IMMORTAL STATE. ALUCARD SUBSEQUENTLY BECAME THE HELLSING FAMILY’S LOYAL SERVANT, AND HAS PROTECTED THE BRITISH EMPIRE FROM NUMEROUS THREATS SINCE THEN.

              HE IS IMMENSELY POWERFUL, ABLE TO CONTROL MINDS AND MANIPULATE REALITY, AND IS ALSO SHOWN TO BE HIGHLY SKILLED IN HAND-TO-HAND COMBAT AND SWORDSMANSHIP.</motion.p>
          </div>

          {/* GRADIENT TOP */}
          <div className='w-full h-[55vh] lg:h-[5vh] absolute top-0 bg-gradient-to-b from-black to-transparent'></div>
          {/* GRADIENT BOTTOM */}
          <div className='w-full h-[55vh] lg:h-[5vh] absolute bottom-0 bg-gradient-to-t from-black to-transparent'></div>
        </div>
      </section>
    </>
  )
}

export default History