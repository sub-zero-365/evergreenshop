import React, { useEffect, useState } from 'react'
import { EffectCreative, Pagination, Autoplay, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Button from './Button';
import { motion } from 'framer-motion'
import { AiOutlineClose, AiOutlineMenu, AiOutlineUser } from 'react-icons/ai'
import { BsBag, BsPersonFill, BsSearch } from 'react-icons/bs'
import Select from 'react-select'
import { Link, useFetcher, useLinkClickHandler } from 'react-router-dom';
import useToggleCartSlider from '../utils/useToggleCartSlider';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
const NavBar = ({ setIsOpen }) => {
    const location = useLocation();
    const [isNotShoppingCart, setIsNotShoppingCart] = useState(false)
    useEffect(() => {
        const path = location.pathname.substring(1)
        // console.log(location.pathname.substring(1))
        if (path == "shopping-bag") {
            setIsNotShoppingCart(true)
        } else {
            setIsNotShoppingCart(false)
        }

    }, [location.pathname])
    const { open } = useToggleCartSlider()
    const { totalAmount } = useSelector(state => state.cartItems)
    const [isCartEmpty, setIsCartEmpty] = useState(false)
    useEffect(() => {
        if (totalAmount > 0) {
            setIsCartEmpty(true)
        } else {
            setIsCartEmpty(false)
        }
    }, [totalAmount])
    const [toggle, setToggle] = useState(false)
    const style = {
        control: base => ({
            ...base,
            border: "1px solid gray",
            boxShadow: "none",
            background: "transparent",
            borderRadius: 9999,
            fontSize: 0.7 + "rem",
            cursor: "pointer",
            height: "20px!important",
            padding: "0px"

        }
        )

    }
    const options = [
        {
            label: "all",
            value: "all"
        },
        {
            label: "cannabis oil",
            value: "cananbis-oil"
        },
        {
            label: "some other",
            value: "odo"
        },
    ]
    return (
        <>
            <div
                className='py-2 text-white text-center mx-auto bg-black/95'
            >
                <Swiper
                    modules={[Autoplay, Navigation]}
                    navigation={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false
                    }}
                >
                    <SwiperSlide>
                        <p
                            className='text-xs md:sm lg:lg'
                        >FREE SHIPPING OVER $75 USD & EASY RETURNS</p>
                    </SwiperSlide>
                    <SwiperSlide>
                        <p
                            className='text-xs md:sm lg:lg'
                        >TODAY'S CLEANEST DIVE WATCH | SHOP CALI DIVER SHOP NOW <Button
                                title="shop now"
                                className="!inline-block !px-2 "
                            /></p>
                    </SwiperSlide>
                </Swiper>
            </div>

            <div className='min-h-[5rem] sticky z-50 top-0 right-0 w-full bg-white shadow  '>
                <div className='container 
                relative lg:static
                py-2 mx-auto lg:px-24 
                w-full flex justify-between items-center gap-x-2'>

                    <div className='flex lg:hidden'>
                        <motion.div

                            className='cursor-pointer flex space-x-2 items-center    px-3 text-[#7d7d7d] '>
                            <motion.div
                                whileHover={{
                                    scale: 1.2
                                }}
                            >
                                <AiOutlineMenu
                                    onClick={() => setIsOpen(true)}
                                    className='text-gray-700'
                                    size={25}
                                />

                            </motion.div>
                            <h3 className='text-sm'>MENU</h3>
                        </motion.div>
                    </div>
                    <Link to="/"

                        className=' '
                    >

                        <img
                            className='max-w-[15rem] w-full '
                            src='https://evergreenhouseshop.com/wp-content/uploads/2023/04/Untitled-4-1.png'
                        />
                    </Link>
                    <div className=' flex-1 max-w-lg hidden lg:block'>
                        <div
                            className='flex items-center space-x-3 w-full'
                        >
                            <div className="h-[35px] ">
                                <Select
                                    components={{ IndicatorSeparator: () => null }}
                                    styles={style}
                                    options={options} />
                            </div>
                            <div className='form-group flex-1'>
                                <input
                                    type='search'
                                    placeholder='Search...'
                                    className='w-full flex-1 border outline-gray-500  px-4 rounded-full min-h-[40px] text-xs lg:text-sm hover:outline-none focus:outline-none bg-gray-100'
                                />
                            </div>
                        </div>
                    </div>
                    {/* user info here */}
                    <div className='flex items-center '>
                        <motion.div

                            className='cursor-pointer lg:hidden lg:border-l px-1 lg:px-3 border-[#7d7d7d] '>
                            <motion.div
                                whileHover={{
                                    scale: 1.2
                                }}
                            >
                                {
                                    !toggle ?
                                        <BsSearch
                                            onClick={() => setToggle(true)}
                                            className='text-gray-700'
                                            size={20}
                                        />
                                        : <AiOutlineClose
                                            onClick={() => setToggle(false)}
                                            className='text-gray-700'
                                            size={20}
                                        />
                                }

                            </motion.div>
                        </motion.div>
                        <motion.div

                            className='cursor-pointer group relative lg:border-l px-1 lg:px-3 border-[#7d7d7d] '>
                            <motion.div
                                whileHover={{
                                    scale: 1.2
                                }}
                            >
                                <BsPersonFill
                                    className='text-gray-700'
                                    size={20}
                                />
                            </motion.div>
                            <div
                                className=' hidden absolute top-[calc(100%+6px)] lg:flex flex-col space-y-5 -translate-x-1/2 translate-y-5 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 left-1/2 invisible group-hover:visible
                             min-h-[70px] bg-black/95 px-5 py-4 min-w-fit
                             '
                            >
                                <div
                                    className='flex flex-col gap-y-4 w-full'
                                >
                                    <Button
                                        title="log in "
                                        className="!block break-keep flex-1 
                                    !rounded-full !py-3 !px-4  !text-xs !min-w-[100px]
                                    !text-center
                                    !bg-white !text-black !font-medium uppercase
                                    "
                                    />
                                    <Button
                                        title="sign up"
                                        className="!block break-keep 
                                    !rounded-full !py-3 !px-4  !text-xs
                                    !text-center !border-2 !border-white
                                    !bg-black !font-medium uppercase
                                    "
                                    />
                                </div>


                            </div>
                        </motion.div>
                        {
                        !isNotShoppingCart&&<motion.div

                        className='cursor-pointer lg:border-l px-1 lg:px-3 border-[#7d7d7d] '>
                        <motion.div className='relative'
                            whileHover={{
                                scale: 1.2
                            }}
                        >
                            {
                                isCartEmpty && <div
                                    className='w-2.5 h-2.5 bg-rose-800 rounded-full right-0 absolute -top-0.5' />
                            }

                          <BsBag
                                    onClick={() => {
                                        open()
                                    }}
                                    className='text-gray-700'
                                    size={20}
                                />

                           
                        </motion.div>
                    </motion.div>
                        }
                   

                    </div>

                    <div
                        className={`absolute ${toggle ? "visible pointer-events-auto opacity-100" : "invsible pointer-events-none opacity-0"} duration-700 transition-all left-0 lg:hidden right-0 py-6 border top-full  bg-white`}
                    >
                        <div
                            className='flex items-center space-x-3 w-full'
                        >
                            <div className="h-[35px] ">
                                <Select
                                    components={{ IndicatorSeparator: () => null }}
                                    styles={style}
                                    options={options} />
                            </div>
                            <div className='form-group flex-1'>
                                <input
                                    placeholder='Search...'
                                    className='w-full flex-1 border outline-gray-500  px-4 rounded-full min-h-[40px] text-xs lg:text-sm hover:outline-none focus:outline-none bg-gray-100'
                                />
                            </div>
                        </div>

                        {/* result of seaec here */}
                    </div>
                </div>
            </div>
        </>
    )
}

export default NavBar