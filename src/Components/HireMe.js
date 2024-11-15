import Link from "next/link";
import React from "react";

const HireMe = () => {
  return (
    <div className='fixed left-4 bottom-9 flex items-center 
    justify-center md:left-auto md:bottom-[930px] md:right-9 md:top-11 sm:right-4 md:absolute z-20'>
          <Link href= "mailto:lvrupeshch@gmail.com" className='flex items-center justify-center
                bg-dark text-light shadow-md border border-solid border-dark w-20 h-20 rounded-full 
              font-semibold hover:bg-light hover:text-dark dark:text-dark dark:bg-light
                hover:dark:bg-dark  hover:dark:text-light  hover:dark:border-light md:w-12 md:h-12 md:text-[10px]
              '>
              Hire Me
          </Link>
    </div>
  );
};

export default HireMe;