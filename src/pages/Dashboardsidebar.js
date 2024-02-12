import React, { useMemo, useState } from 'react'
import { Link, NavLink, useRouteLoaderData } from 'react-router-dom'
import Select from 'react-select'
import { GrMailOption } from 'react-icons/gr'
import { AnimatePresence, motion } from 'framer-motion'
import { BsFacebook, BsInstagram, BsPersonLinesFill } from 'react-icons/bs'
import { AiFillTwitterCircle, AiOutlineClose,AiOutlinePlusCircle } from 'react-icons/ai'
import { LiaProductHunt } from 'react-icons/lia'
import Button from '../components/Button'
import Heading from '../components/Heading'
import { BiMessageRounded } from 'react-icons/bi'
// import { IoAddCircleOutline } from 'react-icons/io'
const parent = {
    initial: false,
    animate: {
        transition: {
            // delay: 0.5,
            staggerChildren: 0.1
        }

    }
}

const singleword = {
    initial: {
        x: 200,
        opacity: 0.6,
        scale: 0.7
    },
    animate: {
        opacity: 1, x: 0, scale: 1
        , transition: {
            duration: 0.08
        }
    }
}

const Dashboardsidebar = ({ isOpen, close }) => {
    // var [color, setColor] = useState("[--app-color:]")
    // useRouteLoaderData()
    const linksItems = useMemo(() => [
        {
            name: "Home",
            icon: BsPersonLinesFill
            , to: "/dashboard"
        },
        {
            name: "Products",
            icon: LiaProductHunt
            , to: "/dashboard/products"
        },
        {
            name: "addproduct",
            icon:  AiOutlinePlusCircle
            , to: "/dashboard/addproduct"
        },
        // {
        //     name: "messages",
        //     icon: AiOutlinePlusCircle
        //     , to: "/dashboard/messages"
        // },

    ], [])
    return (
        <div
            onClick={close}


            className={`${isOpen ? "visible opacity-100 pointer-events-auto active" : " invisible opacity-0 pointer-events-none"} 
            duration-300 transition-all group- z-50
            inset-0 lg:visible lg:opacity-100
            lg:pointer-events-auto 
            lg:static
            w-screen lg:w-fit
            h-full lg:h-[calc(100vh-5rem)] bg-black/50  fixed`}
        >
          
            <div
                onClick={e => e.stopPropagation()}
                className={`absolute 
                lg:static
                transition-[right] duration-500
                ${isOpen ? "left-0" : " -left-full"} w-[min(15rem,calc(100vh-60px))] lg:w-[15rem]  top-0 h-full shadow bg-white`}
            >
                <div className='flex flex-col justify-between h-full '>
                    <div className='w-[3.5rem]  border top-0  absolute -right-[3.5rem] h-[3.5rem] hover:border-none hover:bg-red-700 hover:text-white text-red-800 flex items-center justify-center'>
                        <AiOutlineClose
                            className={`${isOpen ? "rotate-[360deg] delay-[0.2s]" : "rotate-0"} duration-500 transition-all`}
                            onClick={close}
                            size={25}
                        />

                    </div>
                    <div className='flex-1'>
                        <Link to="/"

                            className=' '
                        >

                            <Heading
                                className={"uppercase !text-3xl lg:hidden"}

                                text={"Dashboard"}
                            />
                        </Link>


                        <motion.ul

                            variants={parent}
                            initial="initial"
                            whileInView="animate"
                            className='overflow-hidden w-full'>

                            {
                                linksItems.map(({ name, icon: IconBase, to }, index) =>

                                    <motion.li
                                        variants={singleword}
                                        className='py-0.5 my-1.5 uppercase 
    hover:bg-slate-100 transition-colors duration-500
    border-b px-1 text-gray-700 hover:font-medium text-sm'
                                    >
                                        <NavLink key={index}
                                            className={({ isActive }) => isActive ? "text-[--app-color] font-black flex gap-x-4 items-center relative py-1.5" : "flex gap-x-4 items-center relative py-1.5"}
                                            to={to}
                                            onClick={close}
                                            end
                                        >

                                            {({ isActive }) => <>
                                                <AnimatePresence>
                                                    {
                                                        isActive && <motion.div
                                                            initial={{ opacity: 0 }}
                                                            animate={{ opacity: 1 }}
                                                            exit={{ opacity: 0 }}

                                                            key={{ name, icon: IconBase, to }}
                                                            className={`flex-none w-1.5 absolute left-0 top-0 bottom-0  block h-full bg-[--app-color] rounded-xl`}
                                                        />
                                                    }
                                                </AnimatePresence>
                                                <IconBase
                                                    size={isActive ? 30 : 20}
                                                    className='font-bold ml-4'
                                                />
                                                <p className='text-sm'>{name}</p></>}
                                        </NavLink></motion.li>)

                            }


                        </motion.ul>
                    </div>
                    <div className='flex-none'>
                        <Link
                            to="/?rd_from=dashboard"
                        >
                            <Button
                                title="View Site"
                                className="w-[90%]
                                !bg-[--app-color]
                                lg:!hidden !mx-auto !block !mb-5"
                            />
                        </Link>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Dashboardsidebar