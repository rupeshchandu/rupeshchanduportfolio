import React from 'react'
import {motion} from "framer-motion"


const Skill = ({name,x,y})=>{

    return (
        <motion.div className='flex items-center justify-center rounded-full
        font-semibold bg-dark text-light py-3 px-6 shadow-dark cursor-pointer absolute
        dark:bg-light dark:text-dark lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3
        xs:bg-transparent xs:dark:bg-transparent xs:text-dark xs:dark:text-light xs:font-bold
        '
            whileHover={{scale:1.05}}
            initial = {{x:0,y:0}}
            whileInView = {{x:x,y:y,transition:{duration:1.5}}}
            viewport={{once:true}}
        >
                {name}
        </motion.div>

    )

}

const Skills = () => {
  return (
    <>
        <h2 className='font-bold text-8xl mt-64 w-full text-center md:text-6xl md:mt-32 md:mb-4'>
            Skills
        </h2>
        <div className="w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight dark:bg-circularDark 
          lg:h-[80vh] sm:h-[60vh] xs:h-[50vh] 
          lg:bg-circularLightLg lg:dark:bg-circularDarkLg
          md:bg-circularLightMd md:dark:bg-circularDarkMd
          sm:bg-circularLightSm sm:dark:bg-circularDarkSm
        ">
            <motion.div
            className=" animate-spin-slow flex items-center justify-center rounded-full font-semibold bg-yellow-500 h-12 w-12 
              text-dark p-8 shadow-dark cursor-pointer absolute lg:p-6 md:p-4 xs:text-xs xs:p-2"
            whileHover={{ scale: 1.1 }}
            initial={{x:0,y:0}}
          >
            WEB
          </motion.div>
          <Skill name="FIREBASE" x="30vw" y="0vw"/>
          <Skill name="TAILWINDCSS" x="0vw" y="10vw"/>
          <Skill name="SQL" x="-30vw" y="0vw"/>
          <Skill name="DSA" x="0vw" y="-10vw"/>
          <Skill name="BOOTSTRAP" x="15vw" y="20vw"/>
          <Skill name="HTML" x="-15vw" y="20vw"/>
          <Skill name="REACTJS" x="0vw" y="-20vw"/>
          <Skill name="PYTHON" x="25vw" y="-10vw"/>
          <Skill name="C++" x="-22vw" y="-10vw"/>
          <Skill name="VERCEL" x="-25vw" y="10vw"/>
          <Skill name="CSS" x="29vw" y="10vw"/>
          <Skill name="GITHUB" x="-25vw" y="-20vw"/>
          <Skill name="JS" x="25vw" y="-20vw"/>
       </div>
            
    </>
  )
}

export default Skills