"use client";
import React from 'react'
import Image from 'next/image'
import { TypeAnimation } from 'react-type-animation';

const HeroSection = () => {
  return (
    <section>
      <div className='grid grid-cols-1 sm:grid-cols-12'>
        
        {/* Left Text Section */}
        <div className='col-span-7 place-self-center text-center sm:text-left'>
          
          <h1 className="text-white mb-4 sm:text-4xl font-extrabold leading-tight">
            <span className='text-transparent bg-clip-text bg-gradient-to-br from-purple-400 to-pink-600'>
              Hello, I'm
            </span>
            <br />

            <TypeAnimation
              sequence={[
                'Himasha', 1000,
                'Software Developer', 1000,
                'Full-Stack Engineer', 1000,
                'Tech Enthusiast', 1000
              ]}
              wrapper="span"
              speed={50}
              className='text-white'
              style={{ fontSize: '1.9rem', display: 'inline-block' }}
              repeat={Infinity}
            />
          </h1>

          <p className='text-[#ADB7BE] text-base sm:text-lg lg:text-xl mb-6'>
            Computer Science Undergraduate
          </p>

          <div className='mt-4'>
            <button className='px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:opacity-80 text-white'>
              Hire Me
            </button>

            <button className='px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-500 via-pink-500 to-purple-500 hover:opacity-80 text-white mt-3 sm:mt-0'>
              <span className='block bg-[#121212] hover:bg-slate-800 rounded-full px-6 py-3'>
                Download CV
              </span>
            </button>
          </div>

        </div>

        {/* Right Image Section */}
        <div className='col-span-5 flex justify-center sm:justify-end items-center'>
          <div className='relative rounded-full bg-[#181818] w-[300px] h-[300px] flex items-center justify-center overflow-hidden shadow-lg'>
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
    </section>
  )
}

export default HeroSection;
