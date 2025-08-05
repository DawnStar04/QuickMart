import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'} />
      </div>
      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
            <p>Welcome to QuickMart – your one-stop destination for a fast, reliable, and seamless online shopping experience. At QuickMart, we’re committed to redefining the way you shop by offering a wide range of high-quality products across categories at competitive prices. Whether you're searching for everyday essentials or the latest trends, our goal is to deliver convenience, choice, and value right to your doorstep.</p>
            <p>Built with a focus on speed, simplicity, and security, QuickMart blends technology with customer satisfaction. Our platform is powered by modern solutions that ensure smooth navigation, secure payments, and real-time order tracking. We believe in listening to our customers and constantly evolving to meet your needs—because at QuickMart, it's not just about shopping, it’s about creating a better, smarter way to shop online.</p>
            <b className='text-gray-800'>Our Mission</b>
            <p>At QuickMart, our mission is to revolutionize the online shopping experience by making it faster, simpler, and more accessible for everyone. We aim to bridge the gap between quality products and customer convenience through a platform that prioritizes user experience, speed, and trust.</p>
        </div>
      </div>
      <div className='text-2xl py-4'>
        <Title text1={'Why'} text2={'Choose Us?'} />
      </div>
      <div className='flex flex-col md:flex-row gap-8 mb-20'>
        <div className='bg-white shadow-lg rounded-xl border px-10 md:px-8 py-8 sm:py-12 flex flex-col gap-5 flex-1 transition hover:scale-105 hover:shadow-2xl'>
          <b className='text-lg text-gray-800'>Seamless Shopping Experience</b>
          <p className='text-gray-600'>QuickMart is designed for speed and simplicity—making it easy to browse, buy, and track your orders in just a few clicks.</p>
        </div>
        <div className='bg-white shadow-lg rounded-xl border px-10 md:px-8 py-8 sm:py-12 flex flex-col gap-5 flex-1 transition hover:scale-105 hover:shadow-2xl'>
          <b className='text-lg text-gray-800'>Trusted Quality & Secure Payments</b>
          <p className='text-gray-600'>We offer carefully curated products at great prices, backed by secure payment options and transparent delivery tracking.</p>
        </div>
        <div className='bg-white shadow-lg rounded-xl border px-10 md:px-8 py-8 sm:py-12 flex flex-col gap-5 flex-1 transition hover:scale-105 hover:shadow-2xl'>
          <b className='text-lg text-gray-800'>Customer-First Approach</b>
          <p className='text-gray-600'>Your satisfaction is our top priority. With responsive support and a commitment to constant improvement, we’re here to serve you better every day.</p>
        </div>
      </div>
      <NewsletterBox />
    </div>
  )
}

export default About
