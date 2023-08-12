import React from 'react'
import webdev from "../asserts/web.png"
function Contact() {
    return (
        <>
            <h1 className='font-poppins font-extrabold text-5xl text-white px-10'>Contact Us</h1>
            <div className='flex justify-center px-5 sm:px-0 lg:pb-10'>
                <main className='bg-[#007581] py-10 lg:py-0 space-y-10 lg:flex-row lg:space-y-0 rounded-md lg:h-[80vh] flex flex-col justify-around items-center container'>
                    <div className='lg:basis-1/2'>
                        <img src={webdev} alt="" />
                    </div>
                    <div className='w-full lg:basis-1/2 px-5 sm:px-10 space-y-3'>
                        <form className=' lg:basis-1/2 flex flex-col space-y-5 justify-center'>
                            <h1 className='text-3xl'>Leave a comment</h1>
                            <input type="text" placeholder='Your Name' className='h-[40px] bg-transparent border-2 w-full border-t-0 border-r-0 border-[#4ad7e7] outline-none focus:border-t-2 focus:border-r-2 duration-300 shadow-lg px-2 rounded-md text-lg' />
                            <input type="email" placeholder='Your Email' className=' h-[40px] bg-transparent border-2 border-t-0 border-r-0 border-[#4ad7e7] outline-none focus:border-t-2 focus:border-r-2 duration-300 shadow-lg px-2 rounded-md text-lg' />
                            <input type="text" placeholder='Address' className=' h-[40px] bg-transparent border-2 border-t-0 border-r-0 border-[#4ad7e7] outline-none focus:border-t-2 focus:border-r-2 duration-300 shadow-lg px-2 rounded-md text-lg' />
                            <textarea placeholder='Message' className='h-[200px] bg-transparent border-2 border-t-0 border-r-0 border-[#4ad7e7] outline-none focus:border-t-2 focus:border-r-2 duration-300 shadow-lg px-2 rounded-md text-lg' />
                        </form>
                        <button className=' h-[40px] bg-transparent border-[#4ad7e7] border-2 outline-none duration-300 px-2 rounded-md text-lg text-white'>Submit</button>
                    </div>
                </main>
            </div>
        </>
    )
}

export default Contact
