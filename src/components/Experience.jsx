import React from 'react'
import lang1 from '../assets/lang1.png'
import lang2 from '../assets/lang2.png'
import lang3 from '../assets/lang3.jpg'
import lang4 from '../assets/lang4.png'
import lang5 from '../assets/lang5.png'
import lang6 from '../assets/lang6.png'
import lang7 from '../assets/tailwind.png'
import lang8 from '../assets/lang8.png'
import lang9 from '../assets/lang9.png'
import more from '../assets/more.png'
const Experience = () => {
    const experience =[
        {
            id:1,
            img:lang5,
            title:"PYTHON",
            style:'shadow-pink-500'
        },
        {
            id:2,
            img:lang4,
            title:"JAVA SCRIPT",
            style:'shadow-yellow-500'
        },
        {
            id:3,
            img:lang1,
            title:"HTML",
            style:'shadow-orange-500'
        },
        {
            id:4,
            img:lang6,
            title:"REACT",
            style:'shadow-blue-600'
        },
        {
            id:5,
            img:lang8,
            title:"DJANGO",
            style:'shadow-green-500'
        },
        {
            id:6,
            img:lang2,
            title:"CSS",
            style:'shadow-blue-500'
        },
        {
            id:7,
            img:lang3,
            title:"JAVA",
            
            style:'shadow-orange-500'
        },
        {
            id:8,
            img:lang7,
            title:"TAILWIND CSS",
            style:'shadow-blue-500'
        },
        {
            id:9,
            img:lang9,
            title:"PHP",
            style:'shadow-pink-500'
        },
        {
            id:10,
            img:more,
            title:"MORE",
            style:'shadow-green-500'
        },
        
    ]
  return (
    <div name="experience" className='bg-gradient-to-b from-gray-800 to-black w-full h-screen'>
      <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white'>
        <div className='pt-8' >
            <p className='text-4xl font-bold border-b-4 border-gray-500 p-2 inline  text-cyan-300'>Experience</p>
            <p className='py-6 text-xl'>These are technologies I have worked and Experienced</p>
        </div>
       
        <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'> {
            experience.map(({id,img,title,style})=>(
                <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
                <img src={img} alt="" className='w-20 mx-auto' />
                <p className='mt-4'>{title}</p>
            </div>
            ))
        }
            
        </div>
      </div>
    </div>
  )
}

export default Experience
