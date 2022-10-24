import React from 'react'
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from '@heroicons/react/24/solid'

function ContactMe() {



  return (
    <div className='h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7x1 px-10 justify-evenly mx-auto items-center'>
        <h3 className='absolute top-16 uppercase tracking-[20px] text-gray-500 text-2x1'>
        Contact
        </h3>

        <div className='flex flex-col space-y-10'>
            <h4 className='text-4x1 font-semibold text-center'>
                {" "}
                <span className='decoration-[#F7AB0A]/50 underline'></span>
            </h4>
            <div className='space-y-10'>

                <div className='flex items-center space-x-5 justify-center'>
                <PhoneIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse'/>
                <p className='text-2x1'>+216 26 499 227</p>
                </div>

                <div className='flex items-center space-x-5 justify-center'>
                <EnvelopeIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse' />
                <p className='text-2x1'>oussama.fajraoui1@gmail.com</p>
                </div>

                <div className='flex items-center space-x-5 justify-center'>
                <MapPinIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse' />
                <p className='text-2x1'>10 Rue abou dhuib elhedli-ben arous tunis</p>
                </div>
            </div>
            <form 
            action="https://getform.io/f/57e351be-46b1-4531-9ea8-24655fec47bd"
            method='POST'
             className='flex flex-col space-y-2 w-fit mx-auto'>
                <div className='flex space-x-2'>
                    <input 
                    type="text"
                    name="name"
                    className='outline-none bg-slate-400/10 rounded-sm border-b px-6 py-4 border-[#242424] text-gray-500 placeholder-gray-500 transition-all focus:border-[#F7AB0A]/40 focus:text-[#F7AB0A]/40 hover:border-[#F7AB0A]/40'
                    placeholder='Name'
                    />
                    <input 
                    type="email"
                    name="email"
                    className='outline-none bg-slate-400/10 rounded-sm border-b px-6 py-4 border-[#242424] text-gray-500 placeholder-gray-500 transition-all focus:border-[#F7AB0A]/40 focus:text-[#F7AB0A]/40 hover:border-[#F7AB0A]/40'
                    placeholder='Email'
                    />
                </div>
                <input 
                type="text"
                name="subject"
                className='outline-none bg-slate-400/10 rounded-sm border-b px-6 py-4 border-[#242424] text-gray-500 placeholder-gray-500 transition-all focus:border-[#F7AB0A]/40 focus:text-[#F7AB0A]/40 hover:border-[#F7AB0A]/40'
                placeholder='Subject'
                />
                <textarea
                className='outline-none bg-slate-400/10 rounded-sm border-b px-6 py-4 border-[#242424] text-gray-500 placeholder-gray-500 transition-all focus:border-[#F7AB0A]/40 focus:text-[#F7AB0A]/40 hover:border-[#F7AB0A]/40'
                placeholder='Message'
                name="message"
                />
                <button 
                type="submit" 
                className='bg-[#F7AB0A] py-3 px-10 rounded-md text-blank font-bold text-lg'>
                    Submit
                </button>
            </form>
        </div>
    </div>
  )
}

export default ContactMe