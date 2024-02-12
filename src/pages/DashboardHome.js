import React from 'react'

const DashboardHome = () => {
  return (
    <div>DashboardHome
      <div className='flex w-full bg-orange-100 flex-nowrap gap-x-4 py-5 overflow-auto'>

        {
          Array.from({ length: 30 }, (arr, index) => <div className='px-8 flex-none w-28 py-3 rounded-lg  bg-slate-400' key={index}>{index} </div>)
        }
      </div>
    </div>
  )
}

export default DashboardHome