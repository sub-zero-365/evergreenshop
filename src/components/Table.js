import React from 'react'
import mockdata from '../utils/mockdata'
const Table = ({ isPreviousData }) => {
    return (
        <>
            <div className={`relative max-w-full overflow-x-auto
    bg-white
shadow-md sm:rounded-lg w-full mb-6 ${isPreviousData && "opacity-60"} `}>
                <table className="w-full text-sm text-left text-gray-500 
dark:text-gray-400 transition-colors duration-[2s]">
                    <thead className="text-xs text-gray-700 dark:bg-slate-800 uppercase dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-2 py-3">
                                Index
                            </th>
                            <th scope="col" className="px-3 py-3">
                                Product
                            </th>


                            <th scope="col" className="px-3 py-3">
                                Product Price
                            </th>


                            <th scope="col" className="px-3 py-3 hidden lg:block">
                                time
                            </th>
                            <th scope="col" className="px-3 py-3">
                                createdAt
                            </th>
                            <th scope="col" className="px-3 py-3">
                                phone
                            </th>


                            <th scope="col" className="px-3 py-3">
                                Action
                            </th>

                        </tr>
                    </thead>

                    <tbody
                        className="pt-4 pb-12 text-xs md:text-sm"


                    >
                        {
                            mockdata?.map((data, index) => (
                                <tr key={index}
                                    className={` ${index % 2 == 0
                                        ? "bg-slate-100" : "bg-white"}
                        hover:bg-slate-300
        dark:hover:bg-slate-500
border-slate-100  text-xs
border-b-2
dark:bg-gray-900
dark:border-gray-600

`}
                                >
                                    <th className="px-2 py-4  flex items-center justify-center">
                                        {

                                            index
                                        }
                                    </th>

                                    <th scope="row" className="px-3 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">

                                        <div className='flex gap-x-4 items-center min-w-max'>

                                            <img
                                                className='w-24 h-12'
                                                src='https://flowbite.com/docs/images/products/apple-watch.png' />
                                            <p>{data.first_name}</p>
                                        </div>

                                    </th>
                                    <th scope="row" className="px-3 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        {6763 || "n/a"}
                                    </th>
                                    <th scope="row" className="px-3 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        {data.first_name || "n/a"}
                                    </th>
                                    <th scope="row" className="px-3 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        {data.first_name || "n/a"}
                                    </th>
                                    <th scope="row" className="px-3 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        {data.first_name || "n/a"}
                                    </th>


                                </tr>
                            ))
                        }

                    </tbody>
                </table>
            </div>

        </>

    )
}

export default Table