import React from 'react'
import Trash from '../Images/trash-03.svg'
import { LuPencil } from "react-icons/lu";
import Applicants from '../Images/users-01.svg'
import Matches from '../Images/user-check-01.svg'
import Messages from '../Images/message-square-01.svg'
import Views from '../Images/eye.svg'
import Avatar from '../Images/Avatar.svg'

const sidebar = () => {
  return (
    <div className='w-[100%] border-stone-90 mb-8 align-center lg:text-start '>

      {/* Jobs */}
      <div className='flex  ml-1 mt-4 w-36 flex-col text-center 
        mb-4 md:ml-4  md:flex-col lg:flex-row'>

        {/* Delete Job */}
        <div className='my-3 ml-0 md:ml-6 flex items-center justify-center'>
          <div className=' border-[#DC4A2D] border-2  bg-[#FEF4F2] rounded-lg'>
            <div className='flex mx-2  w-24 my-1   '>
              <img src={Trash} alt='' className='h-4 w-4 mt-1 ml-1 ' />
              <p className='text-xs text-[#DC4A2D] my-1 ml-1  '>
                Delete Job
              </p>
            </div>
          </div>
        </div>

        {/* Edit Job */}
        <div className='my-4  lg:ml-3 text-white flex  items-center justify-center ]'>
          <div className='flex border-[#FED3CA] my-2  md:ml-5 lg:ml-0  border-2 rounded-lg bg-[#DC4A2D]'>
            <div className=' flex mx-4 text-center w-20 my-2  place-self-center'>
              <LuPencil size={12} className='mt-0.5 ml-1' />
              <p className='flex  text-xs ml-1 '>
                Edit Job
              </p>
            </div>
          </div>
        </div>

      </div>
      {/* Jobs */}

      <div className='text-center ml-3  my-8 md:mx-10 text-xs '>

        <div className='border-b-2'>
          <div className='flex text-center my-6'>
            <img src={Applicants} alt='' className='mx-2  w-4 h-4 ' />
            <p>
              Applicants
            </p>
            <p className='ml-6 lg:ml-20 md:ml-4 text-sm'>
              400
            </p>
          </div>
        </div>

        <div className='border-b-2'>

          <div className='flex my-6'>
            <img src={Matches} alt='' className='mx-2  w-4 h-4 ' />
            <p className='ml-0.5 mr-3'>
              Matches
            </p>
            <p className='ml-6 lg:ml-20 md:ml-4 text-sm '>
              100
            </p>
          </div>
        </div>

        <div className='border-b-2'>
          <div className='flex my-6'>
            <img src={Messages} alt='' className='mx-2  w-4 h-4 ' />
            <p className='ml-0.5 mr-5'>
              Messages
            </p>
            <p className='ml-2 lg:ml-16 md:ml-0 text-sm'>
              147
            </p>
          </div>
        </div>

        <div className='flex my-8'>
          <img src={Views} alt='' className='mx-2 w-4 h-4 ' />
          <p className='ml-1 mr-10'>
            Views
          </p>
          <p className='ml-2 lg:ml-16 md:ml-0 text-sm'>
            800
          </p>
        </div>

      </div>

      <div>


        {/* Card */}
        <div className='mt-16 place-self-center text-center md:text-start 
         mx-6 border-2 rounded-lg p-2 bg-[#FFFFFF] drop-shadow-xl' >

          <div className='text-black text-sm font-semibold p-2 mt-6 '>
            <p className='text-center lg:text-start'>
              " A quote from a Atlassian. "
            </p>
          </div>

          <div className='flex flex-col justify-center mt-4 p-2 ml-2 md:flex-row '  >

            <div className=' md:w-1/5 place-self-center md:place-self-start '>
              <div className='h-8 w-8 '>
                <img src={Avatar} alt='' className=' md:my-0 ' />
              </div>
            </div>

            <div className='place-self-center ml-4 lg:ml-0 mt-4 md:mt-0 md:w-4/5 mb-6 text-start  text-xs'>
              <p className='text-black font-semibold'>
                Name
              </p>
              <p className='text-gray-400 font-semibold'>
                Description
              </p>

            </div>

          </div>


        </div>
        {/* Card */}

        <div className='ml-8'></div>


      </div>
    </div>
  )
}

export default sidebar
