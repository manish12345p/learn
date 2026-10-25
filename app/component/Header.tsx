import React from 'react'
import Image from 'next/image'
import profile_img from '../../assets/profile_img.jpg'

const assets ={profile_img}

const Header = () => {
  return (
    <div className='flex flex-col justify-center items-center gap-6 text-center px-5 lg:px-8 xl:px-[8%] py-40'>
        <div>
            <Image src={assets.profile_img} alt="Profile" className='rounded-full w-32 '/>
        </div>
        <h3 className='items-center flex items-end gap-2 text-xl md:text-2xl md:mb-3 font-Ovo'>
                Hi, I&apos;m SpiderMan
        </h3>
        <h1 className = 'text-3xl sm:text-6xl lg:text-[66px] font-Ovo '>
                With great power comes great responsibility.
        </h1>
        <p className='max-w-2xl mx-auto font-Ovo'>
                Spider-Man, aka Peter Parker, is a young superhero who protects New York City with his incredible powers, quick wit, and courage. Behind the mask, he struggles to balance everyday life with his responsibility to save others.
        </p>
        <div className='flex flex-col sm:flex-row justify-center items-center gap-6'>
            <a href='#contact'className='btn btn-primary '>Contact me</a>
            <a href='/resume.pdf' download className='btn btnprimary'>Resume</a>

        </div>
    </div>
  )
}

export default Header