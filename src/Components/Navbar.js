import Link from 'next/link'
import React, { useState } from 'react'
import Logo from './Logo'
import { useRouter } from 'next/router'
import {GithubIcon, LinkedInIcon, MoonIcon, SunIcon, LeetCode } from './Icons'
import {motion} from "framer-motion"
import useThemeSwitcher from './hooks/useThemeSwitcher'

const Customlink = ({href,title,className=""})=>{

  const router = useRouter();  

  return (
    <Link  href={href} className= {`${className} relative group`}> 
      {title} 

      <span 
        className={`h-[1px] inline-block bg-dark 
        absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 
        ${router.asPath === href ? 'w-full' : 'w-0'}
        dark:bg-light
        
        `}>&nbsp;</span>
    </Link>
  )

}

const CustomMobilelink = ({href,title,className="",toggle})=>{

  const router = useRouter();  

  const handleClick = ()=>{
    toggle();
    router.push(href);
  }

  return (
    <button  href={href} className= {`${className} relative group text-light dark:text-dark my-2`} onClick={handleClick}> 
      {title} 

      <span 
        className={`h-[2px] inline-block bg-light 
        absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 
        ${router.asPath === href ? 'w-full' : 'w-0'}
        dark:bg-dark
        
        `}>&nbsp;</span>
    </button>
  )

}

const Navbar = () => {

  const [mode,setMode] = useThemeSwitcher();
  const[isopen,setIsOpen] = useState(false);

  const handleClick = ()=>{
    setIsOpen(!isopen);

  }

  return (
    <header className='w-full px-32 py-8 font-medium flex items-center justify-between dark:text-light relative z-10 lg:px-16 md:px-12 sm:px-8' >
        
        <button className='flex-col justify-center items-center hidden lg:flex' onClick={handleClick}>
             <span className={`bg-dark dark:bg-light  block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm  ${isopen ? 'rotate-45 translate-y-1':"-translate-y-0.5"}`}></span>
             <span className= {`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${isopen ? 'opacity-0':'opacity-100'}`}></span>
             <span className={`bg-dark dark:bg-light  block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm  ${isopen ? "-rotate-45 -translate-y-1":"translate-y-0.5"}`}></span>
        </button>
        
        
        <div className='w-full flex justify-between items-center lg:hidden'>
          <nav>
            <Customlink href= "/" title = "Home" className='mr-4'/>
            <Customlink href = "/about" title= "About" className='mx-4' />
            <Customlink href= "/projects" title= "Projects" className='mx-4' />
          </nav>

          
          <nav className='flex items-center justify-center flex-wrap'>
              <motion.a href= "https://leetcode.com/rupeshchandu" target={"_blank"}
                className='w-8 mx-3'
                whileHover={{y:-2}}
                whileTap={{scale:0.9}} 
              >
                <LeetCode/>
              </motion.a>
              <motion.a href= "https://github.com/rupeshchandu" target={"_blank"}
                className='w-8 mx-3'
                whileHover={{y:-2}}
                whileTap={{scale:0.9}} 
              >
                <GithubIcon/>
              </motion.a>
              <motion.a href= "https://www.linkedin.com/in/rupesh-chandu-7658901a3/" target={"_blank"}
                className='w-[28px] mx-3'
                whileHover={{y:-2}}
                whileTap={{scale:0.9}} 
              >
                <LinkedInIcon/>
              </motion.a>
              <button onClick={()=> setMode(mode === "light" ? "dark" : "light")}
                  className={`ml-3 flex items-center justify-center rounded-full p-1 ${mode === "light" ? "bg-light text-dark" : "bg-dark text-light"}` }
              >
                {
                  mode === "dark"? <SunIcon className={"fill-dark"} />
                  : <MoonIcon className={"fill-dark"}/>
                }
              </button>
          </nav>
        </div>

        {
          isopen ?
          
        <motion.div 
          initial = {{scale : 0, opacity: 0, x:"-50%",y:"-50%" }}
          animate = {{scale:1,opacity:1}}
          className='min-w-[70vw] flex flex-col  justify-between z-30 items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
          bg-dark/90 dark:bg-light/75 rounded-lg backdrop-blur-md py-32
        '>
          <nav className='flex items-center flex-col justify-center'>
            <CustomMobilelink href= "/" title = "Home" className='' toggle = {handleClick}/>
            <CustomMobilelink href = "/about" title= "About" className='' toggle = {handleClick} />
            <CustomMobilelink href= "/projects" title= "Projects" className='' toggle = {handleClick} />
          </nav>

          
          <nav className='flex items-center justify-center flex-wrap mt-4'>
            <motion.a href= "https://leetcode.com/rupeshchandu" target={"_blank"}
                className=' w-8 mx-3 sm:mx-3  dark:bg-light/50 bg-dark/20 rounded-full' 
                whileHover={{y:-2}}
                whileTap={{scale:0.9}} 
              >
                <LeetCode/>
              </motion.a>
              <motion.a href= "https://github.com/rupeshchandu" target={"_blank"}
                className=' w-8 mx-3 sm:mx-3 bg-light dark:bg-dark rounded-full' 
                whileHover={{y:-2}}
                whileTap={{scale:0.9}} 
              >
                <GithubIcon/>
              </motion.a>
              <motion.a href= "https://www.linkedin.com/in/rupesh-chandu-7658901a3/" target={"_blank"}
                className=' w-8 mx-3 sm:mx-3'
                whileHover={{y:-2}}
                whileTap={{scale:0.9}} 
              >
                <LinkedInIcon/>
              </motion.a>
              <button onClick={()=> setMode(mode === "light" ? "dark" : "light")}
                  className={`ml-3 flex items-center justify-center rounded-full p-1 sm:mx-1  ${mode === "light" ? "bg-light text-dark" : "bg-dark text-light"}` }
              >
                {
                  mode === "dark"? <SunIcon className={"fill-dark"} />
                  : <MoonIcon className={"fill-dark"}/>
                }
              </button>
          </nav>
        </motion.div> : null
        }

        <div className='absolute left-[50%] top-2 translate-x-[-50%]' >
            <Logo/>
        </div>
      
      
    </header>
  )
}

export default Navbar