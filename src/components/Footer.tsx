import React from 'react'
import Heading from './Heading'

const Footer = () => {
    return (
        <div
            className='py-10 bg-[#333333] pb-24 lg:pb-10'
        >
            <div className='max-w-6xl  mx-auto gap-x-10 text-white flex lg:flex-row flex-col'>
                <div className='flex-none'>
                    <Heading text="EVERGREENSHOP.COM" className="!text-2xl" />
                </div>
                <div className='flex-1 [*>div:bg-red-500 gap-x-2 grid 
                grid-cols-[repeat(auto-fit,minmax(min(8rem,calc(100%-60px)),_1fr))] px-1'>
                    {
                        Array.from({ length: 5 }, (_arr, idx) => (<div className='flex-none '>
                            <Heading
                                text="Company"
                                className="!text-xl !mb-0 !text-start"
                            />
                            <ul>
                                {
                                    Array.from({ length: 5 }, (arr, index) => <li className='text-xs'>Company</li>)
                                }
                            </ul>
                        </div>))

                    }
                </div>
            </div>

        </div>
    )
}

export default Footer