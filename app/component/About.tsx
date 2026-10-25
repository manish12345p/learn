import React from 'react'
import Image from 'next/image'
import profile_img from '../../assets/profile_img.jpg'
import {infolist} from '../../public/assets'
const assets ={profile_img}
const About = () => {
  return (
    <div className='w-full px-[12%] py-10 scroll-mt-20' id='about'>
        <h4 className='text-center mb-2 text-lg font-Ovo'>Introduction</h4>
        <h2 className='text-center text-3xl font-Ovo'>About Me</h2>
        <div className = 'flex flex-col md:flex-row gap-20 mt-10 items-center justify-center'>
            <div>
                <Image src={assets.profile_img} alt="Profile" className='w-full rounded-3xl '/>
            </div>
            <div className='flex-1 flex-col gap-4 max-w-xl'>
                <p className='text-lg font-Ovo'>
                    Spider-Man, also known as Peter Parker, is a friendly neighborhood superhero who protects New York City with his incredible spider powers, web-slinging skills, and quick wit. Behind the mask, he's just an ordinary young man trying to balance everyday life with the responsibility of keeping people safe. With great courage, a kind heart, and a little humor, he proves that anyone can be a hero. 🕷️
                </p>
                <ul className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                    {infolist.map(({title,description})=>(
                        <li key={title} className='border-[0.5px] border-gray-300 rounded-xl p-1 cursor-pointer hover:gradient-to-r from-[#ff0000] to-[#ff7f7f] hover:text-white transition-all duration-300'>
                            <h5 className='text-lg font-Ovo'>{title}</h5>
                            <p className='text-sm font-Ovo'>{description}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    </div>
  )
}

export default About