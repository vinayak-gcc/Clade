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
    <div className=' border-stone-90  align-center lg:text-start '>

      {/* Jobs */}
      <div className='flex my-4 ml-8 mt-9 w-36 flex-col text-center 
        mb-4 md:ml-4  md:flex-col lg:flex-row'>

        {/* Delete Job */}
        <div className='my-3 ml-0 md:ml-6 flex items-center justify-center'>
          <div className=' border-[#DC4A2D] border-2 mt-1 bg-[#FEF4F2] rounded-lg'>
            <div className='flex mx-1 lg:mx-2 w-32 my-1.5   '>
              <img src={Trash} alt='' className='h-6 w-6 mt-1  ' />
              <p className='text-lg text-[#DC4A2D] my-1 ml-1  '>
                Delete Job
              </p>
            </div>
          </div>
        </div>

        {/* Edit Job */}
        <div className='my-4 border-[#FED3CA] border-2 lg:mx-3 rounded-lg  text-center
         md:ml-4 lg:ml-10 text-white flex items-center justify-center bg-[#DC4A2D]'>
          <div className='ml-2 md:mx-4  flex my-3 '>
            <LuPencil size={20} className='mt-1 ml-3  ' />
            <p className='flex w-20 text-lg ml-2 mr-1'>
              Edit Job
            </p>
          </div>
        </div>

      </div>
      {/* Jobs */}

      <div className='text-center ml-6 text-lg  my-8 md:mx-10 '>

        <div className='border-b-2'>
          <div className='flex text-center my-6'>
            <img src={Applicants} alt='' className='mx-2' />
            <p>
              Applicants
            </p>
            <p className='ml-4 lg:ml-40 md:ml-2 text-xl'>
              400
            </p>
          </div>
        </div>

        <div className='border-b-2'>

          <div className='flex my-6'>
            <img src={Matches} alt='' className='mx-2' />
            <p className='ml-0.5 mr-5'>
              Matches
            </p>
            <p className='ml-4 lg:ml-40 md:ml-2 text-xl '>
              100
            </p>
          </div>
        </div>

        <div className='border-b-2'>
          <div className='flex my-6'>
            <img src={Messages} alt='' className='mx-2' />
            <p className='ml-0.5 mr-2'>
              Messages
            </p>
            <p className='ml-4 lg:ml-40 md:ml-2 text-xl'>
              147
            </p>
          </div>
        </div>

        <div className='flex my-8'>
          <img src={Views} alt='' className='mx-2' />
          <p className='ml-1 mr-10'>
            Views
          </p>
          <p className='ml-4 lg:ml-40 md:ml-2 text-xl'>
            800
          </p>
        </div>

      </div>

      <div>


        {/* Card */}
        <div className='mt-16 place-self-center text-center md:text-start 
         mx-6 border-2 rounded-lg p-2 bg-[#FFFFFF] drop-shadow-xl' >

          <div className='text-black text-xl font-semibold p-2 mt-6 '>
            <p className='text-center lg:text-start'> " A quote from a Atlassian. "</p>
          </div>

          <div className='flex flex-col justify-center mt-4 p-2 ml-2 md:flex-row '  >

            <div className=' md:w-1/5 place-self-center md:place-self-start md:ml-2'>
              <div className='h-13 w-13 '>
                <img src={Avatar} alt='' className='my-4 md:my-0' />
              </div>
            </div>

            <div className='md:w-4/5 mb-6 text-start place-self-center'>
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
