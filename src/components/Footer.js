import React from 'react'
import Heading from './Heading'

const Footer = () => {
    return (
        <div
            className='py-10 bg-[#333333] pb-24 lg:pb-10'
        >
            <div className='container lg:px-24 mx-auto gap-x-10 text-white flex lg:flex-row flex-col'>
                <div className='flex-none'>
                    <Heading text="EVERGREENSHOP.COM" className="!text-2xl" />
                </div>
                <div className='flex-1 gap-x-6 flex flex-wrap px-1'>
                    <div className='flex-none'>
                        <Heading
                            text="Company"
                            className="!text-2xl !mb-0 !text-start"
                        />
                        <ul>
                            {
                                Array.from({ length: 5 }, (arr, index) => <li>Company</li>)
                            }
                        </ul>
                    </div>
                    <div className='flex-none'>
                        <Heading
                            text="Company"
                            className="!text-2xl !mb-0 !text-start"
                        />
                        <ul>
                            {
                                Array.from({ length: 5 }, (arr, index) => <li>Company</li>)
                            }
                        </ul>
                    </div>
                    <div className='flex-none'>
                        <Heading
                            text="Company"
                            className="!text-2xl !mb-0 !text-start"
                        />
                        <ul>
                            {
                                Array.from({ length: 5 }, (arr, index) => <li>Company</li>)
                            }
                        </ul>
                    </div>
                    <div className='flex-none'>
                        <Heading
                            text="Company"
                            className="!text-2xl !mb-0 !text-start"
                        />
                        <ul>
                            {
                                Array.from({ length: 5 }, (arr, index) => <li>Company</li>)
                            }
                        </ul>
                    </div>
                    <div className='flex-none'>
                        <Heading
                            text="Company"
                            className="!text-2xl !mb-0 !text-start"
                        />
                        <ul>
                            {
                                Array.from({ length: 5 }, (arr, index) => <li>Company</li>)
                            }
                        </ul>
                    </div>
                    <div className='flex-none'>
                        <Heading
                            text="Company"
                            className="!text-2xl !mb-0 !text-start"
                        />
                        <ul>
                            {
                                Array.from({ length: 5 }, (arr, index) => <li>Company hrhhrrhujh hjoidhioad </li>)
                            }
                        </ul>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Footer