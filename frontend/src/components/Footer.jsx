import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>

        <div>
          <img src={assets.logo} className='mb-5 w-32' alt="" />
          <p className='w-full md:w-2/3 text-gray-600'>QuickMart — your one-stop destination for trend-forward styles, unbeatable deals, and everyday essentials.</p>
        </div>
        <div>
          <p className='text-xl font-medium mb-5'>COMPANY</p>
          <ul className='flex flex-col gap-1 text-gray-600'>
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div>
          <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
          <ul className='flex flex-col gap-1 text-gray-600'>
            <li>+919934368204</li>
            <li>shivamsharmaxd43@gmail.com</li>
          </ul>
        </div>
      </div>
      <div>
        <hr />
        <p className='py-5 text-sm text-center'>© Copyright 2025 @ quickmart - All Rights Reserved.</p>
        <p className="py-5 text-sm text-center">
          MADE WITH 🩷 BY{" "}
          <a
            href="https://github.com/ShivamSharma43"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 underline hover:text-blue-700 font-bold transition-colors duration-300"
          >
            SHIVAM SHARMA
          </a>
        </p>

      </div>
    </div>
  )
}

export default Footer
