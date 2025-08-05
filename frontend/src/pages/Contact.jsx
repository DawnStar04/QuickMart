import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom'
import NewsletterBox from '../components/NewsletterBox'

const Contact = () => {
  return (
    <div className="w-full min-h-screen">
      <div className="fixed inset-0 -z-10 w-full h-full bg-gradient-to-br from-white via-blue-50 to-pink-50" />
      <div className="text-3xl font-bold text-center pt-12 border-t border-gray-200">
        <Title text1={'CONTACT'} text2={'US'} />
      </div>
      <div className="my-12 flex flex-col md:flex-row items-center justify-center gap-12 mb-32 px-4">
        <img
          className="w-full md:max-w-[420px] rounded-xl shadow-lg border border-gray-200 object-cover"
          src={assets.contact_img}
          alt=""
        />
        <div className="flex flex-col justify-center items-start gap-8 bg-white/80 rounded-xl shadow-md p-8 border border-gray-100">
          <p className="font-semibold text-lg text-gray-700 flex items-center gap-2">
            <span className="material-icons text-blue-500"></span>
            Email: <span className="text-blue-700">shivamsharmaxd43@gmail.com</span>
          </p>
          <p className="font-semibold text-lg text-gray-700 flex items-center gap-2">
            <span className="material-icons text-green-500"></span>
            Phone: <span className="text-green-700">(+91) 9934368204</span>
          </p>
          <div className="text-gray-700">
            <span className="font-semibold">Support Hours:</span>
            <ul className="ml-2 mt-1 list-disc list-inside text-gray-600 text-base">
              <li>Monday – Saturday: 10:00 AM – 6:00 PM (IST)</li>
              <li>Sunday: <span className="text-red-500">Closed</span></li>
            </ul>
          </div>
          <div className="flex gap-4 mt-2">
            <Link
              to="https://www.instagram.com/sharmashivam43?igsh=MWx1ODBuMWVxYnRpcA==&utm_source=ig_contact_invite"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-gradient-to-r from-pink-400 to-pink-600 hover:from-pink-500 hover:to-pink-700 text-white font-semibold shadow transition"
            >
              <img src={assets.instagram} alt="Instagram" className="w-7 h-7" />
              Instagram
            </Link>
            <Link
              to="https://www.linkedin.com/in/shivam-sharma-1ss/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white font-semibold shadow transition"
            >
              <img src={assets.linkedin} alt="LinkedIn" className="w-7 h-7" />
              LinkedIn
            </Link>
          </div>
        </div>
      </div>
      <div className="max-w-xl mx-auto mb-12">
        <NewsletterBox />
      </div>
    </div>
  )
}

export default Contact
