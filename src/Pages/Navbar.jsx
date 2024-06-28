import React from 'react'
import { PiSuitcaseLight } from "react-icons/pi";
import { LuMessageSquare } from "react-icons/lu";
import { MdPeopleAlt } from "react-icons/md";
import Payments from '../Images/coins-hand.svg'
import Bell from '../Images/Icon.svg'
import Atlassian from '../Images/Rectangle 5.svg'
import DownArrow from '../Images/chevron-down.svg'

const navbar = () => {
  return (

    <div>
      <div className='w-[100%] lg:flex w-ful border border-stone-90 justify-center align-center
      lg:justify-start lg:items-start  text-[#B0B0B0]'>
        <div className=' flex flex-col md:flex-row my-4  shadow-y-4'>

          {/* Logo */}
          <div className='ml-8 place-self-center'>
            <button className='bg-[#e7e7e7] box-border mt-2 mb-2  p-2 text-[#dc4a2d]
             text-md font-bold ' size={20}>
              <div className='mx-2'>
                Logo
              </div>
            </button>
          </div>

          {/* Middle */}
          <div className=' ml-0 flex flex-col md:flex-row lg:ml-40'>

            {/* Jobs */}
            <div className='mx-4  lg:mt-0 text-white place-self-center'>
              <div className='ml-8 my-2 md:my-0 lg:ml-20 flex font-medium bg-[#dc4a2d] rounded-full box-border
               text-center drop-shadow-lg '>
                <div className='shadow-y-4'>
                  <PiSuitcaseLight className='text-xl font-bold ml-2 my-2' />
                </div>
                <p className='my-2 flex box-border mx-2 text-sm font-normal '>
                  Jobs
                </p>
              </div>
            </div>

            {/* Center Div */}
            <div className='flex flex-col mt-2 lg:mt-0 drop-shadow-xl shadow-y-3 '>
              <div className='box-border p-3  place-self-center flex flex-col md:flex-row 
              space-x-7 md:border-2  shadow-t-8 rounded-full text-sm'>
                <div className='flex ml-8 md:ml-4 '>
                  <div>
                  <LuMessageSquare className='mx-1 ' size={20} />
                  </div>
                  Messages
                </div>
                <div className='flex mx-2'>
                  <img src={Payments} alt='' size={10} className='mx-2 text-black' />
                  Payments
                </div>
                <div className='flex mr-8 '>
                  <div>
                    <MdPeopleAlt className='mx-2 ' size={20} /></div>
                  Application
                </div>
              </div>
            </div>
          </div>

          {/* End */}
          <div className='flex mt-2  ml-6 md:ml-0 lg:mt-0  space-x-1 box-border place-self-center p-1 lg:ml-60 '>
            <div className='ml-4 lg:ml-6 md:ml-4 text-md ' >
              <img src={Bell} alt='' className='mt-1.5 h-5 w-5' />
            </div>
            <div>
            <img src={Atlassian} alt='' className='ml-2 h-8 w-8' />
            </div>
            <div>
            <img src={DownArrow} alt='' className='mt-1 h-5 w-5' />
            </div>
          </div>

        </div>
      </div>
    </div>

  )
}

export default navbar
