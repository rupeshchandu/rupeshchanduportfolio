import AnimatedText from '@/Components/AnimatedText'
import { GithubIcon } from '@/Components/Icons'
import Layout from '@/Components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import project1 from "../../public/images/projects/crypto screener.webp"
import project2 from "../../public/images/projects/shopping.jpeg"
import project3 from "../../public/images/projects/react-techystar-image.webp"
import project4 from "../../public/images/projects/mobile-phone-1845233__340.jpg"
import project5 from "../../public/images/projects/NextJs Portfolio.webp"
import project6 from "../../public/images/projects/maxresdefault.jpg"

import Transitions from '@/Components/Transitions'

const FeaturedProject = ({type,title,summary,img,link,github})=>{
  return (
    <article 
        className='w-full flex items-center justify-between rounded-3xl rounded-br-2xl
        border border-solid border-dark bg-light shadow-2xl p-12 relative dark:bg-dark dark:border-light
        lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4
    '>
        <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark rounded-br-3xl dark:bg-primary
        xs:-right-3 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]'/>
        <Link href={link} target='_blank' 
          className='w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full'
        >
          <Image src={img} alt = {title} className='w-full h-auto' 
            priority
            sizes="(max-width: 768px) 100vw,
                (max-width: 1200px) 50vw,
                33vw" />
        </Link>

        <div className='w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6'>
          <span className='text-primary font-medium text-xl dark:text-primaryDark xs:text-base'>{type}</span>
          <Link href={link} target='_blank' className='hover:underline underline-offset-2'>
            <h2 className='my-2 w-full text-left text-4xl font-bold sm:text-sm'>{title}</h2>
          </Link>
          <p className='my-2 font-medium text-dark dark:text-light'>{summary}</p>
          <div className='mt-2 flex items-center'>
            <Link href={github} target='_blank' className='w-10'><GithubIcon/></Link>
            <Link href={link} target='_blank' 
                className='ml-4 rounded-lg bg-dark text-light p-2 px-6  text-lg font-semibold dark:bg-light dark:text-dark
                  sm:px-4 sm:text-base
                '>
                Visit Project
            </Link>
          </div>
        </div>

    </article>


  )
}


const Project = ({title,type,img,link,github})=>{

  return (
    <article className='w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark bg-light 
      p-6 relative dark:bg-dark dark:border-light xs:p-4'>
      <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark 
      rounded-br-3xl dark:bg-primaryDark md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]'/>
      <Link href={link} target='_blank' 
        className='w-full cursor-pointer overflow-hidden rounded-lg'
      >
        <Image src={img} alt = {title} className='w-full h-auto' />
      </Link>

      <div className='w-full flex flex-col items-start justify-between mt-4'>
        <span className='text-primary font-medium text-xl dark:text-primaryDark lg:text-lg md:text-base'>{type}</span>
        <Link href={link} target='_blank' className='hover:underline underline-offset-2'>
          <h2 className='my-2 w-full text-left text-3xl font-bold lg:text-2xl'>{title}</h2>
        </Link>
        
        <div className='w-full mt-2 flex items-center justify-between'>
          <Link href={link} target='_blank' 
              className='text-lg font-semibold rounded-lg bg-dark  text-light 
                p-2 px-5 dark:bg-light dark:text-dark md:text-base md:px-4 md:p-1'>
              Visit
          </Link>
          <Link href={github} target='_blank' className='w-8 md:w-6'><GithubIcon/></Link>
          
          
        </div>
      </div>
    </article>
  )
}


const projects = () => {
  return (
    <>
        <Head>
            <title>Rupesh Chandu | Projects Page</title>
            <meta name='description' content='any description' />
        </Head>
        <Transitions/>
        <main className='w-full mb-16 flex flex-col items-center justify-center dark:text-light'>
            <Layout className='pt-16'>
                <AnimatedText text = "Imagination Trumps Knowledge!" className='mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl' />

                <div className='grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0'>
                    <div className='col-span-12'>
                      <FeaturedProject 
                        type= "Featured Project"  
                        title = "Crypto Screener" 
                        summary = {`A feature rich Crypto Screener App using React, Chakra UI, React Router, ChartJS and CoinGecko API. It shows detail regarding almost all the cryptocurrency.  
                        In this there are 3 pages home, exchanges and coins. In Exchanges page it contains various trading apps by clicking on it will direct into particular 
                        trading website. In Coins page it contains information about coin i.e price. On clicking particular coin it displays the updated market chart of coin. 
                        It also contains a feature Dark Mode. It is responsive across all devices.`}
                        img = {project1}
                        link = "https://xcrypto-delta.vercel.app/"
                        github="https://github.com/rupeshchandu/xcrypto"
                      />
                    </div>
                    <div className='col-span-12'>
                      <FeaturedProject 
                          type= "Featured Project"  
                          title = "Video Hub" 
                          summary = {`This is a Video Hub Project. In this technologies used are Chakra UI, ReactJS and FireBase. In this there are Home, Videos, Upload Video,
                          Log In and Sign Up pages. In Upload page while clicking upload the file the resultant file will be stored in FireBase Storage. In Sign Up page where 
                          multiple users can register with email and password, the resultant data will be stored in FireBase Authentication. In Log In page where multiple users 
                          can login with registered email and password. It also contains a Dark Mode feature.`}
                          img = {project4}
                          link = "https://react-video-hub-peach.vercel.app/"
                          github="https://github.com/rupeshchandu/react-video-hub"
                        />
                    </div>
                    <div className='col-span-12'>
                      <FeaturedProject 
                          type= "Featured Project"  
                          title = "Shopping Cart" 
                          summary = {`An Eccomerce application - Shopping Cart App. In this technologies used are SASS, ReactJS, React-Redux for state management. 
                          In this it contains Home and Cart pages. In Home page it contains the list of items. In Cart Page it contains the items,quantity and 
                          total price which we selected to buy. In cart page we can increase or decrease the quantity of an item and we can remove an item from 
                          the cart. The price will be caliculated automatically for each selection. React-Redux is used to create store.`}
                          img = {project2}
                          link = "https://react-cart-three-liard.vercel.app/"
                          github="https://github.com/rupeshchandu/react-cart"
                        />
                    </div>
                    <div className='col-span-12'>
                      <FeaturedProject 
                          type= "Featured Project"  
                          title = "Modern Portfolio" 
                          summary = {`In this technologies used are Next.js, Framer-motion and Tailwind CSS. In this I showcase my projects and skills. In this portfolio there 
                          are 3 pages home, about and projects. The key features of this portfolio are Smooth Page Transition effects, Cool Animations, On Scroll 
                          animations and it is Mobile Responsive.`}
                          img = {project5}
                          link = "/"
                          github="https://github.com/rupeshchandu/modern-portfolio"
                        />
                    </div>
                    <div className='col-span-6 sm:col-span-12'>
                      <Project 
                          type= "Project"  
                          title = "TechyStar Website" 
                          img = {project3}
                          link = "https://techystar-blush.vercel.app/"
                          github="https://github.com/rupeshchandu/techystar"
                        />
                    </div>
                    <div className='col-span-6 sm:col-span-12'>
                      <Project 
                          type= "Project"  
                          title = "Portfolio Website" 
                          img = {project6}
                          link = "https://rupesh-chandu-portfolio.vercel.app/"
                          github="https://github.com/rupeshchandu/rupesh-chandu-portfolio"
                        />
                    </div>
                </div>
            </Layout>
        </main>
    </>
  )
}

export default projects