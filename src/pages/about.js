import AnimatedText from '@/Components/AnimatedText'
import Layout from '@/Components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import React, { useEffect, useRef } from 'react'
import profilePic from "../../public/images/profile/developer-pic-2.jpg"
import { useInView, useMotionValue, useSpring } from 'framer-motion'
import Skills from '@/Components/Skills'
import Education from '@/Components/Education'
import Transitions from '@/Components/Transitions'

const AnimatedNumbers = ({value})=>{
  const ref = useRef(null);

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue,{duration : 5000});
  const isInView = useInView(ref,{once:true});

  useEffect(()=>{
    if(isInView){
      motionValue.set(value);
    }
  },[isInView,value,motionValue])

  useEffect(()=>{
    springValue.on("change",(latest)=>{

      if (ref.current && latest.toFixed(0) <= value ){
        ref.current.textContent = latest.toFixed(0);

      }
    })
  },[springValue,value])
  
  return <span ref={ref}></span>
}


const About = () => {
  return (
    <>
      <Head>
        <title>Rupesh Chandu | About Page</title>
        <meta name='description' content='any description' />
      </Head>
      <Transitions/>
      <main className='flex w-full flex-col items-center justify-center dark:text-light' >
        <Layout className='pt-16' >
          <AnimatedText text= "Passion Fuels Purpose!" className='mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8'/>
          <div className='grid w-full grid-cols-8 gap-16 sm:gap-8'>
            <div className='col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8'>
              <h2 className='mb-4 text-lg font-bold uppercase text-dark/75 dark:text-primary/75'>About Me</h2>
              <p className='font-medium'>
                Hi, I'm Rupesh Chandu, a front-end web developer with a passion for creating beautiful, functional, 
                and user-centered digital experiences. As a fast learner, I am always eager to expand my knowledge and skills, 
                and contribute to the success of an organization.
              </p>
              <p className='my-4 font-medium'>
                {/* I believe that design is about more than just making things look pretty - it's about solving problems and 
                creating intuitive, enjoyable experiences for users.  */}
                I have keen intrest in solving algorithmic problems. I have maintained a streak of 230 days of consistency of solving problems on Leetcode and also 
                I'm a 3 star coder in Leetcode. 
              </p>
              <p className='font-medium'>
              Overall,I am a friendly and dedicated developer who is always eager to take on new challenges and exceed expectations.
              I look forward to working with you!
              </p>
            </div>
            <div className='col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark
              bg-light p-8 dark:bg-dark dark:border-primary xl:col-span-4 md:order-1 md:col-span-8
            '>
              <div className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-primaryDark'/>
                <Image src={profilePic} alt='CodeBucks' className='w-full h-auto rounded-2xl ' priority sizes="(max-width : 768px) 100vw,(max-width : 1200px) 50vw,33vw" />
            </div>

            <div className='col-span-2 flex flex-col items-end justify-around xl:col-span-8 xl:flex-row xl:items-center md:order-3'>
              <div className='flex flex-col items-end justify-center xl:items-center'>
                <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'>
                  <AnimatedNumbers value={5} />+
                </span>
                <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-primaryDark xl:text-center md:text-lg sm:text-base xs:text-sm'>projects completed</h2>
              </div>

              <div className='flex flex-col items-end justify-center xl:items-center'>
                <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'>
                  <AnimatedNumbers value={400} />+
                </span>
                <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-primaryDark xl:text-center md:text-lg sm:text-base xs:text-sm'>DSA Problems Solved</h2>
              </div>
            </div>
          </div>
          <Skills/>
          <Education/>
        </Layout>
      </main>
    </>
  )
}

export default About