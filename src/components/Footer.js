import React from 'react';
import { payment, Shopy} from '../assets/index';
import { FaFacebook, FaHome, FaInstagram, FaTwitter, FaYoutube, FaPaypal } from 'react-icons/fa';
import { ImGithub } from 'react-icons/im';
import { BsPersonFill } from 'react-icons/bs';
import { MdLocationOn } from 'react-icons/md';

function Footer() {
  return (
    <div className='bg-black text-[#949494] py-16 px-4 font-titleFont'>
      <div className='max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'>

        <div className='flex flex-col gap-7'>
          <img className='w-32' src={Shopy} alt='Logo' />
          <p className='text-white text-sm tracking-wide'>@ React.corp</p>
          <img className='w-56' src={payment} alt='payment logo' />

          <div className='flex gap-5 text-lg text-gray-400'>
            <ImGithub className='hover:text-white duration-300 cursor-pointer' />
            <FaYoutube className='hover:text-white duration-300 cursor-pointer' />
            <FaFacebook className='hover:text-white duration-300 cursor-pointer' />
            <FaTwitter className='hover:text-white duration-300 cursor-pointer' />
            <FaInstagram className='hover:text-white duration-300 cursor-pointer' />
          </div>
        </div>

        <div>
          <h2 className='text-2xl text-white font-semibold mb-4'>Locate Us</h2>
          <div className='text-base flex flex-col gap-2'>
            <p>Pushpa Raj, India</p>
            <p>Mobile : +91 9495969798</p>
            <p>Phone : 02569 260382</p>
            <p>E-mail : vyapar@gmail.com</p>
          </div>
        </div>

        <div>
          <h2 className='text-2xl text-white font-semibold mb-4'>Profile</h2>
          <div className='text-base flex flex-col gap-2'>
            <p className='flex items-center gap-3 hover:text-white duration-300 cursor-pointer'>
              <BsPersonFill />
              My Account
            </p>
            <p className='flex items-center gap-3 hover:text-white duration-300 cursor-pointer'>
              <FaPaypal />
              Checkout
            </p>
            <p className='flex items-center gap-3 hover:text-white duration-300 cursor-pointer'>
              <FaHome />
              Order Tracking
            </p>
            <p className='flex items-center gap-3 hover:text-white duration-300 cursor-pointer'>
              <MdLocationOn />
              Help & Support
            </p>
          </div>
        </div>

        <div className='flex flex-col justify-center items-start lg:items-center'>
          <input className='bg-transparent border py-4 px-2 text-sm w-full' type='text' placeholder='E-mail' />
          <button className='border text-white text-sm border-t-0 hover:bg-gray-900 active:bg-white active:text-black w-full'>
            Subscribe
          </button>
        </div>

      </div>
    </div>
  );
}

export default Footer;