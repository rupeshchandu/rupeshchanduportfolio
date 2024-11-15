import React from 'react'
import Layout from './Layout'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className='w-full border-t-2 border-solid border-dark font-medium text-lg
     dark:text-light dark:border-light sm:text-base ' >
        <Layout className='py-4 flex items-center justify-between lg:flex-col '>
            <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
            <div className='flex items-center'>
                Build With <span className='text-primary text-2xl px-1 dark:text-primaryDark lg:py-2'>&#9825;</span>
                by&nbsp;<Link href= "https://github.com/rupeshchandu">Rupesh Chandu</Link>
            </div>
            <Link href= "https://www.linkedin.com/in/rupesh-chandu-7658901a3/">Say hello 👋</Link>
        </Layout>
    </footer>
  )
}

export default Footer