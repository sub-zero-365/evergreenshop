import React, { useState } from 'react'
import Heading from './Heading'
import Button from './Button'
import { AnimatePresence, motion } from 'framer-motion'
const GreetingModal = () => {
    const [open, setOpen] = useState(true)
    const [error, setError] = useState(false)
    return (

        <motion.div 
            className={`${open ? "opacity-100 visible pointer-events-auto" : "opacity-0 invisible pointer-events-none"} duration-500 transition-all  fixed w-full h-full inset-0 z-[100] bg-black/25 flex items-center justify-center`}
        >

            <div className='bg-white overflow-hidden-  w-[min(25rem,calc(100%-2rem))] mx-auto rounded-2xl shadow-2xl  py-6'>
                <Heading className="!text-3xl"
                    text="EVERGREEN.COM"
                ></Heading>
                <Heading className="!text-lg uppercase !font-semibold"
                    text="welcome to evergreen.com"
                ></Heading>
                <p className='text-center px-2 leading-loose text-gray-600 font-medium text-lg'>Are you over 21?</p>
                <div
                    className='flex justify-center capitalize py-4  space-x-8 items-center '
                >
                    <Button
                        onClick={() => setOpen(false)}
                        title="yes"
                        className="!rounded-lg !px-12 !py-2.5 md:!py-3 !capitalize lg:!py-3.5 bg-green-600 hover:!bg-[#b248eb] "
                    ></Button>
                    <Button
                        onClick={() => setError(true)}
                        title="no"
                        className="!rounded-lg !px-12 !py-2.5 md:!py-3 !capitalize lg:!py-3.5 !border !bg-transparent !text-black hover:!bg-[#4ca84a] hover:!text-white"
                    ></Button>
                </div>
                <AnimatePresence>
                    {
                        error && <motion.p
                            initial={{ y: 100, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            className='text-center text-sm text-red-800 uppercase'>please this is not suitable for you</motion.p>
                    }
                </AnimatePresence>
            </div>
        </motion.div>


    )
}

export default GreetingModal