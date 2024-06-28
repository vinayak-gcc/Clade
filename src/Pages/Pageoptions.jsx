import React from 'react'

const pageoptions = () => {
  return (
    <div className='w-[100%] flex flex-col border border-stone-900 border-r-0 text-gray-600'>
      <div className='space-x-2 ml-4 flex justify-center items-center
       flex-col md:items-start md:justify-start md:flex-row my-4 
       md:space-x-10 lg:space-x-14 md:ml-6 lg:ml-20 font-small text-sm  '>

        <div className=''>
          <p className='text-orange-700 ' >
            Job preview
          </p>
        </div>

        <p>Applicants</p>
        <p>Match</p>
        <p>Messages</p>
      </div>
    </div>
  )
}

export default pageoptions
