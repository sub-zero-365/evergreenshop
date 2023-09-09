import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from './NavBar'
import SideBar from './SideBar'
import Slider from './Slider'
import useToggleCartSlider from '../utils/useToggleCartSlider'
import {motion} from 'framer-motion'
import Button from './Button'
const RootElement = () => {
    const { isOpen: active, close } = useToggleCartSlider()
    console.log("this is the active state", active)
    const [isOpen, setIsOpen] = useState(false)
    return (
        <>
            <Slider
                active={active}
                setActive={close}
            >
                <div
                    className='flex h-full w-full flex-col justify-between'
                >
                <div className='flex items-center'>
                
                </div>
                    <div className='overflow-auto flex-1'>


                    </div>
                    <div>
                        <motion.div
                            key="somerandonidhere"
                         
                            initial={{ y: 0, opacity: 1 }}
                            exit={{ opacity: 0, y: 200 }}

                            className="items-center bg-white
        w-full md:flex- md:max-w-3xl md:rounded-lg mx-auto fixed-- -bg-white rounded-t-2xl py-4 pb-0 min-h-[100px] shadow-2xl  ">
                            <div className="flex items-center justify-between px-4 mb-6 md:gap-10 flex-none" >
                                <h1 className="text-black text-xl font-semibold md:mb-4">Total</h1>
                                <h1 className="text-3xl  font-medium  tracking-tight italic">{"amount"}<sup className="text-slate-400 text-lg">frs</sup></h1>
                            </div>

                            <Button title="Place Order"
                                onClick={() => {
                                    // navigate("/shopping-bag")
                                    close()
                                }}
                                className="
!w-[min(400px,calc(100%-40px))] 
!rounded-full
block mx-auto
!bg-black hover:!bg-white 
hover:!text-black 
hover:!border-black
hover:!border-2
!border-2
!mb-5
transition-colors
focus:!border-2
focus:!border-black
duration-500
!pt-3 !pb-3.5
"
                            />

                        </motion.div>
                    </div>
                </div>
            </Slider>
            <NavBar
                isOpen={isOpen}
                setIsOpen={setIsOpen}
            />
            <SideBar
                isOpen={isOpen}
                setIsOpen={setIsOpen}
            />
            <Outlet />
        </>
    )
}

export default RootElement