import React, { useState } from 'react';
function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <div className='text-white w-full'>
      <main className='w-full md:px-4 xl:px-0 space-x-2 bg-[#132449] flex h-[70px] items-center overflow-hidden justify-around'>
        <h1 className=' font-poppins font-extrabold text-3xl basis-1/2 sm:basis-1/5'>MrTech</h1>
        <ul className='hidden md:flex justify-between md:basis-1/3 lg:basis-1/4'>
          <li className='cursor-pointer hover:text-[#043eab] hover:scale-125'>Home</li>
          <li className='cursor-pointer hover:text-[#043eab] hover:scale-125'>About</li>
          <li className='cursor-pointer hover:text-[#043eab] hover:scale-125'>ContactUs</li>
          <li className='cursor-pointer hover:text-[#043eab] hover:scale-125'>Services</li>
        </ul>
        <input type="search" placeholder='🔍' className='hidden md:flex text-xl md:absolute md:right-64 lg:right-0 z-10 lg:relative md:focus:px-2 md:focus:bg-white lg:px-2 lg:rounded-md lg:w-[260px] lg:h-[40px] lg:bg-white md:h-[40px] md:w-[40px] md:focus:w-[240px] duration-300 md:rounded-lg bg-transparent' />
        <div className="sm:absolute sm:z-10 sm:right-20 md:hidden ">
          <button
            onClick={() => setOpen(!open)}
            className="flex items-center rounded text-white hover:text-black-400"
          >
            <svg
              className={`fill-current h-5 w-5 ${open ? "hidden" : "block"}`}
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
            <svg
              className={`fill-current h-5 w-5 ${open ? "block" : "hidden"}`}
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
            </svg>
          </button>
            </div>
        <span className='w-[230px] md:w-[280px] h-[100px] bg-[#043eab] sm:flex relative  sm:-right-40 md:-right-24 hidden -top-7 rounded-full'></span>
      </main>

<h1 className={`px-6 md:hidden w-full duration-300 absolute z-20 bg-[#132449] ${open ? " block":"hidden"}`}>
      <ul className='space-y-4'>
          <li className='cursor-pointer hover:text-[#043eab]  sm:text-xl md:hover:scale-125 '>Home</li>
          <li className='cursor-pointer hover:text-[#043eab] sm:text-xl md:hover:scale-125'>About</li>
          <li className='cursor-pointer hover:text-[#043eab] sm:text-xl md:hover:scale-125'>Skills</li>
          <li className='cursor-pointer hover:text-[#043eab] sm:text-xl md:hover:scale-125'>ContactUs</li>
        </ul>
        <input type="search" placeholder='🔍' className=' z-10 focus:px-2 focus:bg-white text-xl h-[40px] w-[40px] rounded-lg mt-4 duration-700 focus:w-[280px]  bg-transparent' />
</h1>

    </div>
  )
}

export default Navbar
