import React from 'react'

const pageoptions = () => {
  return (
    <div className='flex flex-col border border-stone-900 border-r-0 text-slate-600'>
      <div className='space-x-2 ml-4 flex justify-center items-center
       flex-col md:items-start md:justify-start md:flex-row my-5 
       md:space-x-10 lg:space-x-20 md:ml-6 lg:ml-24 font-small text-xl  '>

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
