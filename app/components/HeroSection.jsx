import React from 'react'
import Image from 'next/image'

const HeroSection = () => {
  return (
    <section>
      <div className='grid grid-cols-1 sm:grid-cols-12'>
        <div className='col-span-7 place-self-center text-center sm:text-left'>
          <h1 className="text-white mb-4 sm:text-4xl font-extrabold">
           <div className='text-transparent bg-clip-text bg-gradient-to-br from-purple-400 to-pink-600 '> Hello, I'm {" "}</div>
            Himasha
          </h1>
          <p className='text-[#ADB7BE] text-base  text-lg lg:text-xl'>
            I am dedicated to advancing as a software engineer and am a third-year Computer Science undergraduate 
            at the University of Colombo School of Computing with hands-on experience in full-stack development. 
            I have worked extensively with Java, React, Node.js, Flutter, and databases including MySQL, PostgreSQL, 
            and MongoDB. I am passionate about building complete, user-centric software applications that solve 
            real-world problems. I am a proactive and fast learner who enjoys experimenting with new technologies 
            and working both independently and collaboratively...
          </p>
          <div>
            <button className='px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500  hover:bg-slate-200 text-white'> Hire Me</button>
            <button className='px-1 py-1 w-full sm:w-fit  rounded-full bg-gradient-to-br from-blue-500 via-pink-500  bg-transparent hover:bg-slate-800 text-white  mt-3'><span className='block bg-[#121212] hover:bg-slate-800  rounded-full px-6 py-3'>Download CV</span></button>
          </div>
        </div>

        <div className='col-span-5'>
         
          <div className='flex justify-center lg:justify-end items-center'>
            
            <div className='relative rounded-full bg-[#181818] w-[300px] h-[300px] flex items-center justify-center overflow-hidden'>
           
              <Image
                src="/images/hima2.png"
                alt="Himasha"
                width={260}
                height={260}
                className='object-cover rounded-full'
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
