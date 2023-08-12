import React from 'react'
import manpic from "../asserts/manpic.png"
function Header() {
    return (
        <div className='lg:h-[90.5vh] bg-[#15203A] font-poppins w-full pb-10'>
            <main className=' w-full lg:flex-row flex-col-reverse flex items-center overflow-hidden relative'>
                <ul className='lg:w-1/2 mx-2 sm:mx-10 lg:px-0 text-white text-center lg:text-start lg:pl-10 space-y-3 bg-[#243457] lg:bg-transparent p-4 rounded-lg'>
                    <h1 className='text-3xl sm:text-5xl md:text-6xl font-extrabold'>Muhammad Faisal,</h1>
                    <h3 className='text-2xl sm:text-3xl pb-3 z-10 relative'>An, Professional Web Developer</h3>
                    <h2 className='text-[30px] sm:text-[40px] z-10 relative'>Know We More</h2>
                    <h4 className='text-xl sm:text-2xl text-justify z-10 relative'>Lorem ipsum dolor sit amet consectetur, elit. Placeat dicta similique alias impedit quia, libero ullam sed nam veritatis vitae consequatur repudiandae reiciendis officiis ut laudantium, quo repellendus quisquam. Lorem, ipsum dolor sit amet consectetur adipisicing elit.</h4>
                    <li className='w-[510px] hidden lg:block h-[510px] absolute bg-[#043eab] xl:-left-64 lg:-left-72 2xl:-left-56 -bottom-40 rounded-full'></li>
                </ul>
                <ul className='lg:w-1/2'>
                    <li className='w-[550px] h-[550px] absolute bg-[#043eab] hidden lg:block -right-64 lg:-right-96 2xl:-right-64 top-[50px] rounded-full'></li>
                    <img src={manpic} alt="" className='h-[50vh] sm:h-[70vh] pb-4 lg:pb-0 md:h-[90.73vh]' />
                </ul>
            </main>
        </div>
    )
}

export default Header
