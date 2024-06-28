import React from 'react'
import Location from '../Images/Icon (1).svg'
import Stack from '../Images/stack.svg'
import Tags from '../Images/Tags.svg'
import Atlassian from '../Images/Rectangle 43.svg'

const jobpreview = () => {
  return (
    <div className='w-[100%] border-stone-90 tracking-wide border'>

      {/* First Tab */}
      <div className='mt-4  '>
        <div className='flex ml-6 flex-col items-center justify-center 
        lg:flex-row md:ml-6 lg:ml-20 md:items-start md:justify-start'>


          <p className='text-2xl font-bold  ' size={35}>

            {/* Orange Underline */}
            <div className='w-[0] md:w-[48px] ml-0 bg-orange-600 h-[4px] -mt-5 md:ml-4 ' > </div>
            {/* Orange Underline */}

            <div className='flex text-center text-balance mt-9 md:items-start md:justify-start  '>
              Senior Product Designer
            </div>
          </p>


          <p className='lg:mx-3 lg:place-self-center flex text-xs mt-4
            text-gray-500 md:justify-start items-start leading-3'>
            posted 2 days ago
          </p>

          <div className='w-16 bg-green-200  border-[1px] flex md:justify-start md:items-start 
          lg:place-self-center  border-green-700 rounded-full mt-4'>
            <div className='flex text-xs mx-2'>
              <div className='w-1.5 h-1.5 rounded-full bg-green-700 place-self-center'>
              </div>
              <p className='text-green-700 w-[8px] ml-2 text-xs '>
                Open
              </p>
            </div>
          </div>


        </div>

        <div>

          <div className='flex flex-col ml-4 md:flex-row mt-4  md:ml-6 lg:ml-20 my-4 mb-6'>
            <div className='flex place-self-center ' >

              <div className='flex '>
                <img src={Location} alt='' className='text-sm w-5 h-5 ' />
              </div>
              <p className='ml-1 text-sm' size={20}>
                Delaware, USA
              </p>
            </div>

            <div className='flex place-self-center my-2 md:my-0'>
              <div className='ml-4 md:ml-4 flex flex-col'>
                <img src={Stack} alt='' size={30} className='text-xs' />
              </div>
              <p className='ml-2 text-sm'>
                $300k-$400k
              </p>
            </div>

          </div>
        </div>

      </div>
      {/* First Tab */}

      {/* Second Tab */}
      <div className=' mt-2 border-2 border-r-0 text-start text-xs'>

        <div className='leading-tight '>

          <div className='ml-6 lg:ml-20 flex flex-col lg:flex-row
           md:flex-col mt-6 mb-4 lg:space-x-20'>

            <div className='space-y-3 leading-tight mb-8'>
              <p className='text-xs'>Skills Required</p>
              <div className='flex  md:items-start h-12 w-24' size={10}>
                <img src={Tags} alt='' />
              </div>
            </div>

            <div className=''>
              <p>Preferred Language </p>
              <p className='mt-1 text-xs lg:mt-4 font-normal '>
                English
              </p>
            </div>

            <div className=''>
              <p className='mt-4 lg:mt-0'>
                Type
              </p>
              <p className='mt-1 text-xs lg:mt-4 font-normal'>
                Full Time
              </p>
            </div>

            <div className=''>
              <p className='mt-4 lg:mt-0'>
                Years Of Experience
              </p>
              <p className='mt-1 mb-4 text-xs font-normal lg:mt-4 leading-tight lg:mb-0'>
                3+ Years Of Experience
              </p>
            </div>

          </div>

        </div>

      </div>
      {/* Second Tab */}


      {/* Third Tab */}
      <div className='my-8 '>

        <div className='mx-6 lg:ml-20 space-y-4 text-xs'>

          <div className='space-y-4'>

            <p className='font-normal'>About The Job</p>
            <p>1. Handle the UI/UX research design<br />
              2. Work on researching on latest web applications designs &<br />
              trends<br />
              3. Work on conceptualizing and visualizing  <br />
              4. Work on creating graphics content and other graphic related <br />
              works<br />
            </p>

            <div>
              <p> Benefits:</p>
              <ul className="ml-5 list-disc">
                <li>Health Insurance</li>
                <li>Provident Fund</li>
              </ul>
            </div>

            <div>
              <p>Schedule</p>
              <ul className="ml-5 list-disc">
                <li> Day Shift</li>
              </ul>
            </div>

            <div>
              <p>Supplemental Pay types</p>
              <ul className="ml-5 list-disc">
                <li>Performance</li>
              </ul>
            </div>

          </div>

        </div>

      </div>
      {/* Third Tab */}

      {/* Fourth Tab */}
      <div className='border-2 border-r-0 text-start text-sm '>

        <div className=''>
          <div className=' mx-6  flex  lg:ml-20 my-10 lg:text-start'>
            <img src={Atlassian} alt='' />
            <p className='text-sm place-self-center mx-2'>
              Atlassian
            </p>

            <div className='bg-[#E0EBF9] rounded-lg place-self-center'>
              <div className='p-1 mx-1  text-sky-800 font-semibold text-xs'>
                <div className='text-xs'>
                  Follow
                </div>
              </div>
            </div>
          </div>

        </div>


        <div className='mx-6 flex flex-col text-xs lg:ml-20 md:flex-row '>
          <div className=''>
            <p className=''>Company Size</p>
            <p className='text-xs'>1k - 2k Employees</p>

            <p className='mt-4'>Sector</p>
            <p className='text-xs'>Information Technology, Infrastructure</p>

            <p className='mt-4'>Founded In</p>
            <p className='text-xs'>2019</p>
          </div>

          <div className='mx-0 flex flex-col lg:mx-32 lg:flex-row'>
            <div className='mx-0 mt-6 md:mt-0 md:ml-4'>
              <p>Type</p>
              <p className='text-xs'>Private</p>

              <p className='mt-4'>Funding</p>
              <p className='text-xs'>BootStrapped</p>

              <p className='mt-4'>Founded by</p>
              <p className='text-xs'>Scott Farquhar, Mike Cannon-Brookes</p>
            </div>
          </div>

        </div>

        <div className='ml-6 lg:ml-20 my-6'>
          <p className='text-xs underline underline-offset-4  mt-8 text-gray-500'>
            Report this listing
          </p>
        </div>


        <div>

        </div>

      </div>
      {/* Fourth Tab */}

    </div>
  )
}

export default jobpreview
