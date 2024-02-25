import React from 'react'
import port1 from '../assets/port1.png'
import port2 from '../assets/airline.jpg'
import port3 from '../assets/notelist.png'
import port4 from '../assets/taskmanager.png'
import port5 from '../assets/gateway.png'
import port6 from '../assets/DMS.jpg'
const Porfolio = () => {

  const portfolios= [
    {
      id:6,
      src:port6,
      text: "React Portfolio Website Tutorial From Scratch | Responsive Portfolio Website Using React JS",
      url:"https://github.com/DanielSemu/Dormitory_Managment_Sytstem_For_WKU/tree/master"
    },
{
  id:1,
  src:port1,
  text: "React Portfolio Website Tutorial From Scratch | Responsive Portfolio Website Using React JS",
  url:"https://github.com/DanielSemu/E-Commerce"
},
{
  id:2,
  src:port2,
  text: "React Portfolio Website Tutorial From Scratch | Responsive Portfolio Website Using React JS",
  url:"https://github.com/DanielSemu/AirLine_Reservation_System-Using-Java.git"
},
{
  id:3,
  src:port3,
  text: "React Portfolio Website Tutorial From Scratch | Responsive Portfolio Website Using React JS",
  url:"https://github.com/DanielSemu/Notepad-Using-DjangoReact.git"
},
{
  id:4,
  src:port4,
  text: "React Portfolio Website Tutorial From Scratch | Responsive Portfolio Website Using React JS",
  url:"https://github.com/DanielSemu/ToDoList-Django-React/tree/master"
},
{
  id:5,
  src:port5,
  text: "React Portfolio Website Tutorial From Scratch | Responsive Portfolio Website Using React JS",
  url:"https://github.com/DanielSemu/Gateway_Apllication_for_AdiB.git"
},

  ]
  return (
    <div name="Projects" className='bg-gradient-to-b from-black to-gray-800 w-full  text-white md:h-screen '>
      <div className='max-w-screen-lg p-4 mx-auto pt-8 flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-5xl font-bold inline border-b-4 border-gray-500  text-cyan-300'>Projects</p>
          <p className='py-6 text-2xl'>Check out some of my recent Projects here</p>
        </div>
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-8'>
          {
            portfolios.map(({id,src,text,url})=>(
              <div key={id} className='shadow-md shadow-gray-600 rounded-lg '>
            <img src={src}alt="" className='rounded-md duration-200 hover:scale-105'/>
            <p className='pt-7'>{text}</p>
            <div className='flex items-center justify-center'>              
              <a href={url} target='_blank' className='w-fit px-9 py-3 m-4 rounded-md bg-gradient-to-r from-red-500 to-orange-500 cursor-pointer'>Source Code</a>
            </div>
          </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Porfolio
