import React from 'react'
import { BsWhatsapp, BsFacebook, BsInstagram } from "react-icons/bs"
import { AiOutlineCopyrightCircle } from "react-icons/ai"
function Footer() {
  return (
    <div>
      <main className='w-full text-white flex justify-around items-center h-[70px] bg-[#15203A]'>
        <h5 className='flex items-center tracking-widest'><AiOutlineCopyrightCircle /> MrTech, privacy Policy</h5>
        <ul className='flex space-x-3'>
          <li><BsFacebook /></li>
          <li><BsWhatsapp /></li>
          <li><BsInstagram /></li>
        </ul>
      </main>
    </div>
  )
}

export default Footer
