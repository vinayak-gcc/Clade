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
      <div className='lg:flex w-ful border border-stone-90 justify-center align-center
      lg:justify-start lg:items-start  text-[#B0B0B0]'>
        <div className=' flex flex-col md:flex-row my-6 l shadow-y-4'>

          {/* Logo */}
          <div className='ml-10 place-self-center'>
            <button className='bg-[#e7e7e7] box-border mt-2 p-4  text-[#dc4a2d]
             text-xl font-bold ' size={20}>
              <div className='mx-2'>
                Logo
              </div>
            </button>
          </div>

          {/* Middle */}
          <div className=' ml-0 flex flex-col md:flex-row lg:ml-64'>

            {/* Jobs */}
            <div className='mx-4 mt-6 lg:mt-0 text-white place-self-center'>
              <div className='ml-20 flex font-medium bg-[#dc4a2d] rounded-full box-border p-2 text-center drop-shadow-lg'>
                <div className='mt-1 shadow-y-4'>
                  <PiSuitcaseLight className='text-3xl font-bold ml-2' />
                </div>
                <p className='flex box-border mx-2 mt-1 text-xl  '>
                  Jobs
                </p>
              </div>
            </div>

            {/* Center Div */}
            <div className='flex flex-col mt-6 lg:mt-0 text-center md:drop-shadow-xl '>
              <div className='box-border p-5 place-self-center flex flex-col lg:flex-row 
              space-x-8 md:border-2  shadow-t-8 rounded-full text-xl'>
                <div className='flex ml-8'>
                  <div><LuMessageSquare className='mx-1 ' size={30} />
                  </div>
                  Messages
                </div>
                <div className='flex mx-2'>
                  <img src={Payments} alt='' size={30} className='mx-2 text-black' />
                  Payments
                </div>
                <div className='flex '>
                  <div><MdPeopleAlt className='mx-2 ' size={30} /></div>
                  Application
                </div>
              </div>
            </div>
          </div>

          {/* End */}
          <div className='flex place-self-center mt-6 lg:mt-0  space-x-3 box-border p-3 lg:ml-72'>
            <div className='ml-4 lg:ml-10 md:ml-8 '>
              <img src={Bell} alt='' className='mt-2' />
            </div>
            <div><img src={Atlassian} alt='' className='ml-2' /></div>
            <div><img src={DownArrow} alt='' className='mt-2' /></div>
          </div>

        </div>
      </div>
    </div>

  )
}

export default navbar
