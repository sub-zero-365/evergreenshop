import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import Select from 'react-select'
import { GrMailOption } from 'react-icons/gr'
import { motion } from 'framer-motion'
import { BsFacebook, BsInstagram } from 'react-icons/bs'
import { AiFillTwitterCircle, AiOutlineClose } from 'react-icons/ai'
import Button from './Button'
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

const PopOver = ({ children }) => {

    return (
        <div className='w-44 rounded text-center group-[:hover]:visible invisible duration-300 transition-colors  px-5 py-1.5 bg-black absolute -top-[calc(100%+0.825rem)]'>
            <p
                className='text-white text-xs lg:text-sm leading-relaxed relative z-[2]'
            >{children || "FaceBook"}</p>
            <div className='w-4 h-4 -mt-1 z-[1]
                                bg-black
                                rotate-45 absolute
                                left-1/2 -translate-x-1/2 '>

            </div>
        </div>
    )
}
const SideBar = ({ isOpen, setIsOpen }) => {
    return (
        <div
            onClick={() => setIsOpen(false)}


            className={`${isOpen ? "visible opacity-100 pointer-events-auto active" : " invisible opacity-0 pointer-events-none"} 
            
            duration-300 transition-all group- z-50
            inset-0 lg:hidden w-screen h-full bg-black/50  fixed`}
        >
            <div
                onClick={e => e.stopPropagation()}
                className={`absolute 
                
                
                transition-[right] duration-500
                ${isOpen ? "right-0" : " -right-full"} w-[min(15rem,calc(100%-60px))] border top-0 h-full bg-white`}
            >
                <div className='flex flex-col justify-between h-full'>

                    <div className='w-[3.5rem]  border top-0  absolute -left-[3.5rem] h-[3.5rem] hover:border-none hover:bg-red-700 hover:text-white text-red-800 flex items-center justify-center'>
                        <AiOutlineClose
                            className={`${isOpen ? "rotate-[360deg] delay-[0.2s]" : "rotate-0"} duration-500 transition-all`}
                            onClick={() => setIsOpen(false)}
                            size={25}
                        />

                    </div>
                    <div>
                        <Link to="/"

                            className=' '
                        >

                            <img
                                className='max-w-[15rem] w-full mx-auto '
                                src='https://evergreenhouseshop.com/wp-content/uploads/2023/04/Untitled-4-1.png'
                            />
                        </Link>


                        <motion.ul

                            variants={parent}
                            initial="initial"
                            whileInView="animate"
                            className='overflow-hidden'>
                            <motion.li
                                variants={singleword}

                                className='py-3 uppercase
hover:bg-slate-100 transition-colors duration-500
border-b px-4 text-gray-700 hover:font-medium text-sm'
                            >
                                <NavLink
                                    className={({ isActive }) => isActive && "text-blue-600"}
                                    to={"/"}
                                    onClick={() => setIsOpen(false)}
                                >
                                    Home
                                </NavLink>
                            </motion.li>
                            <motion.li

                                variants={singleword}

                                className='py-3 uppercase
hover:bg-slate-100 transition-colors duration-500
border-b px-4 text-gray-700 hover:font-medium text-sm'
                            >
                                <NavLink to={"/about-us"}
                                    className={({ isActive }) => isActive && "text-blue-600"}
                                    onClick={() => setIsOpen(false)}
                                >
                                    About
                                </NavLink>
                            </motion.li>
                            <motion.li
                                variants={singleword}

                                className='py-3 uppercase
hover:bg-slate-100 transition-colors duration-500
border-b px-4 text-gray-700 hover:font-medium text-sm'
                            >
                                <NavLink to={"/about-us"}
                                    className={({ isActive }) => isActive && "text-blue-600"}
                                    onClick={() => setIsOpen(false)}
                                >
                                    Flower
                                </NavLink>
                            </motion.li>
                            <motion.li
                                variants={singleword}

                                className='py-3 uppercase
hover:bg-slate-100 transition-colors duration-500
border-b px-4 text-gray-700 hover:font-medium text-sm'
                            >
                                <NavLink to={"/about-us"}
                                    className={({ isActive }) => isActive && "text-blue-600"}
                                    onClick={() => setIsOpen(false)}
                                >
                                    Bloq
                                </NavLink>
                            </motion.li>
                            <motion.li
                                variants={singleword}

                                className='py-3 uppercase
hover:bg-slate-100 transition-colors duration-500
border-b px-4 text-gray-700 hover:font-medium text-sm'
                            >
                                <NavLink to="/category/strains"
                                    className={({ isActive }) => isActive && "text-blue-600"}
                                    onClick={() => setIsOpen(false)}
                                >
                                    Strains
                                </NavLink>
                            </motion.li>
                            <motion.li
                                variants={singleword}

                                className='py-3 uppercase
hover:bg-slate-100 transition-colors duration-500
border-b px-4 text-gray-700 hover:font-medium text-sm'
                            >
                                <NavLink to="/category/recipes"
                                    className={({ isActive }) => isActive && "text-blue-600"}
                                    onClick={() => setIsOpen(false)}
                                >
                                    Recipes
                                    
                                </NavLink>
                            </motion.li>

                            <li
                                className='flex py-4 space-x-1 flex-wrap  my-5 place-items-center justify-center'
                            >
                                <div
                                    className='group   w-8 relative flex items-center justify-center h-8 rounded-full bg-gray-80'
                                >
                                    <PopOver>
                                        follow us on    FaceBook
                                    </PopOver>
                                    <BsFacebook
                                        size={25}
                                    />

                                </div>
                                <div
                                    className='group w-8 relative flex items-center justify-center h-8 rounded-full bg-gray-80'
                                >
                                    <PopOver>
                                        follow us on  Instagram
                                    </PopOver>
                                    <BsInstagram
                                        size={25}
                                    />

                                </div>
                                <div
                                    className='group w-8 relative flex items-center justify-center h-8 rounded-full bg-gray-80'
                                >
                                    <PopOver>
                                        follow us on  Twitter
                                    </PopOver>
                                    <AiFillTwitterCircle
                                        size={25}
                                    />

                                </div>
                                <div
                                    className='group w-8 relative flex items-center justify-center h-8 rounded-full bg-gray-80'
                                >
                                    <PopOver>
                                        send us email
                                    </PopOver>
                                    <GrMailOption size={20}
                                        className="text-gray-400"
                                    />

                                </div>
                                <div
                                    className='group w-8 relative flex items-center justify-center h-8 rounded-full bg-gray-100'
                                >
                                    <PopOver>
                                        send us pinterest
                                    </PopOver>
                                    <GrMailOption size={20}
                                        className="text-gray-400"
                                    />

                                </div>
                            </li>

                        </motion.ul>
                    </div>
                    <div className='mb-10 space-y-4'>
                        <Button
                            title="Login"
                            className="!block !w-[min(400px,calc(100%-30px))]  hover:!bg-blue-400
!rounded-full !bg-black !text-xs !py-4  md:!text-sm 
"
                            onClick={e => {
                                e.stopPropagation()
                            }}
                        />
                        <Button
                            title="Register"
                            className="!block !w-[min(400px,calc(100%-30px))]  hover:!bg-blue-400
!rounded-full !bg-black !text-xs !py-4  md:!text-sm 
"
                            onClick={e => {
                                e.stopPropagation()
                            }}
                        />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default SideBar