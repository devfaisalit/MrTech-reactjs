import React from 'react'
import computerimg from "../asserts/comput.png"
function Myskills() {
    return (
        <div className='lg:h-screen text-white flex justify-center  flex-col sm:px-20 py-8'>
            <h1 className=' font-poppins font-extrabold text-5xl px-10'>Skills</h1>
            <main className='lg:flex w-full justify-around items-center'>
                <ul className='lg:basis-2/2'>
                    <img src={computerimg} alt="" className='h-[500px] w-full sm:h-[500px] relative lg:-left-10' width={'1000px'} />
                </ul>
                <ul className='lg:basis-1/2 text-xl space-y-10'>
                    <h1 className='sm:w-[180px] h-[50px] sm:mx-auto rounded-md bg-[#007581] text-2xl mx-16 text-center py-2'>Skills</h1>
                    <main className='sm:flex justify-around px-4 sm:space-x-8 space-y-7 sm:space-y-0 text-center'>
                    <div className='space-y-7'>
                    <h1 className='bg-[#38b6ff] py-2.5 w-full sm:w-[160px] h-[50px] rounded-3xl'>HTML</h1>
                    <h1 className='bg-[#38b6ff] py-2.5 w-full sm:w-[160px] h-[50px] rounded-3xl'>Bootstrap</h1>
                    <h1 className='bg-[#38b6ff] py-2.5 w-full sm:w-[160px] h-[50px] rounded-3xl'>JavaScript</h1>
                    <h1 className='bg-[#38b6ff] py-2.5 w-full sm:w-[160px] h-[50px] rounded-3xl'>TypeScript</h1>
                    </div>
                    <div className='space-y-7'>
                    <h1 className='bg-[#38b6ff] py-2.5 w-full sm:w-[160px] h-[50px] rounded-3xl'>CSS</h1>
                    <h1 className='bg-[#38b6ff] py-2.5 w-full sm:w-[160px] h-[50px] rounded-3xl'>Tailwind</h1>
                    <h1 className='bg-[#38b6ff] py-2.5 w-full sm:w-[160px] h-[50px] rounded-3xl'>ReactJs</h1>
                    <h1 className='bg-[#38b6ff] py-2.5 w-full sm:w-[160px] h-[50px] rounded-3xl'>ExpressJS</h1>
                    </div>
                    </main>
                </ul>
            </main>
        </div>
    )
}

export default Myskills
