import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen  text-white'>
      <div className='flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full'>
        <div className='flex flex-col justify-center items-center pb-6'>
            <p className='text-4xl font-bold inline border-b-4 border-gray-500  text-cyan-300'>Contact</p>
            <p className='pt-2'>Submit the form to get in touch with me</p>
            
        </div>
        <div className='flex justify-center items-center'>
            <form action="https://getform.io/f/90506803-5083-4935-9498-a16ff376ba8e" method='POST' className='flex flex-col w-full md:w-1/2'>
                <input type="text" name='name' placeholder='Enter your name' className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none' required/>
                <input type="email" name='email' placeholder='Enter your email address' className='p-2 bg-transparent border-2 my-4 rounded-md text-white focus:outline-none'required/>
                <textarea name="message" 
                placeholder='Enter Your Message'
                rows="10" className='p2
                 bg-transparent border-2 rounded-md text-white focus:outline-none'></textarea>
                 <button className='text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300'>Let's talk</button>

            </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
