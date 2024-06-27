import React from 'react'
import Location from '../Images/Icon (1).svg'
import Stack from '../Images/stack.svg'
import Tags from '../Images/Tags.svg'
import Atlassian from '../Images/Rectangle 43.svg'

const jobpreview = () => {
  return (
    <div className=' border-stone-90 tracking-wide border'>

      {/* First Tab */}
      <div className='mt-6  '>
        <div className='flex ml-6 flex-col items-center justify-center 
        lg:flex-row md:ml-6 lg:ml-24 md:items-start md:justify-start'>


          <p className='text-4xl font-bold my-3 ' size={35}>

            {/* Orange Underline */}
            <div className='w-[0] md:w-[64px] ml-0 bg-orange-600 h-[4px] -mt-10 md:ml-4 ' > </div>
            {/* Orange Underline */}

            <div className='flex text-center mt-9 md:items-start md:justify-start  '>
              Senior Product Designer
            </div>
          </p>


          <p className='lg:mx-4 lg:place-self-center flex text-base
            text-gray-500 md:justify-start items-start'>
            posted 2 days ago
          </p>

          <div className=' bg-green-200  border-2 flex md:justify-start md:items-start 
          lg:place-self-center  border-green-700 rounded-full '>
            <div className='flex mx-3'>
              <div className='w-2 h-2 rounded-full bg-green-700 place-self-center'></div>
              <p className='text-green-700 font-bold ml-2'>
                Open
              </p>
            </div>
          </div>


        </div>

        <div>

          <div className='flex flex-col ml-4 md:flex-row mt-4  md:ml-6 lg:ml-24 my-4 mb-4'>
            <div className='flex place-self-center ' >
              
              <div className='flex '>
                <img src={Location} alt='' className='text-3xl' />
              </div>
              <p className='ml-4 text-xl' size={20}>
                Delaware , USA
              </p>
            </div>

            <div className='flex place-self-center my-2 md:my-0'>
              <div className='ml-4 md:ml-12 flex flex-col'>
                <img src={Stack} alt='' size={30} className='text-3xl' />
              </div>
              <p className='ml-4 text-xl'>
                $300k-$400k
              </p>
            </div>

          </div>
        </div>

      </div>
      {/* First Tab */}

      {/* Second Tab */}
      <div className=' mt-8 border-2 border-r-0 text-start'>

        <div className='leading-tight '>

          <div className='ml-6 lg:ml-24 flex flex-col lg:flex-row
           md:flex-col mt-8  lg:space-x-32'>

            <div className='space-y-4 leading-tight mb-8'>
              <p>Skills Required</p>
              <div className='flex  md:items-start'>
                <img src={Tags} alt='' />
              </div>
            </div>

            <div className=''>
              <p>Preferred Language </p>
              <p className='mt-1 text-lg lg:mt-4 font-normal '>
                English
              </p>
            </div>

            <div className=''>
              <p className='mt-4 lg:mt-0'>
                Type
              </p>
              <p className='mt-1 text-lg lg:mt-4 font-normal'>
                Full Time
              </p>
            </div>

            <div className=''>
              <p className='mt-4 lg:mt-0'>
                Years Of Experience
              </p>
              <p className='mt-1 mb-4 text-lg font-normal lg:mt-4 leading-tight lg:mb-0'>
                3+ Years Of Experience
              </p>
            </div>

          </div>

        </div>

      </div>
      {/* Second Tab */}


      {/* Third Tab */}
      <div className='my-8 '>

        <div className='mx-6 lg:ml-24 space-y-4 text-xl'>

          <div className='space-y-4'>

            <p className='text-base'>About The Job</p>
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
      <div className='border-2 border-r-0 text-start '>

        <div className=''>
          <div className=' mx-6  flex  lg:ml-24 my-10 lg:text-start'>
            <img src={Atlassian} alt='' />
            <p className='text-xl place-self-center mx-4'>
              Atlassian
            </p>

            <div className='bg-[#E0EBF9] rounded-lg place-self-center'>
              <p className='p-2 mx-2 text-sky-800 font-bold text-sm'>
                Follow
              </p>
            </div>
          </div>

        </div>


        <div className='mx-6 flex flex-col lg:ml-24 md:flex-row '>
          <div className=''>
            <p className=''>Company Size</p>
            <p className='text-lg'>1k - 2k Employees</p>

            <p className='mt-4'>Sector</p>
            <p className='text-lg'>Information Technology, Infrastructure</p>

            <p className='mt-4'>Founded In</p>
            <p className='text-lg'>2019</p>
          </div>

          <div className='mx-0 flex flex-col lg:mx-32 lg:flex-row'>
            <div className='mx-0 mt-6 md:mt-0 md:ml-4'>
              <p>Type</p>
              <p className='text-lg'>Private</p>

              <p className='mt-4'>Funding</p>
              <p className='text-lg'>BootStrapped</p>

              <p className='mt-4'>Founded by</p>
              <p className='text-lg'>Scott Farquhar, Mike Cannon-Brookes</p>
            </div>
          </div>

        </div>

        <div className='ml-6 lg:ml-24 my-6'>
          <p className='text-sm underline underline-offset-4  mt-8 text-gray-500'>
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
