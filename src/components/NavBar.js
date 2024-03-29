import React, { useEffect, useState, useRef, createContext, useContext } from 'react'
import { EffectCreative, Pagination, Autoplay, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Button from './Button';
// import { motion } from 'framer-motion'
import { AiOutlineClose, AiOutlineMenu, AiOutlineUser } from 'react-icons/ai'
import { BsBag, BsPersonFill, BsSearch } from 'react-icons/bs'
import { Link, useNavigate, NavLink, useSearchParams } from 'react-router-dom';
import useToggleCartSlider from '../utils/useToggleCartSlider';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import Heading from './Heading';
import { FiChevronDown } from 'react-icons/fi';
import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";
import useCountry from '../components/GetCountry'
import customFetch from '../utils/customFetch';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import ProductCart from './ProductCart';
import SearchResultContainer from './SearchResultContainer';
import SeachContainer from './SeachContainer';
import { useFilter } from '../hooks/useFilter';

const searchProductQuery = (search) => {
    return {
        queryKey: ["products", {
            search: search
        }],
        queryFn: async () => {
            const { data } = await customFetch.get(`/products`, {
                params: {
                    search: search,
                    limit: 5
                }
            });
            return data;
        },
        keepPreviousData: true
    }

}


const SearchContext = createContext()

const NavBar = ({ setIsOpen, queryClient,isOpen }) => {
    const isUser = queryClient.getQueryState()?.data?.user
    console.log(isUser)
    const [querySearch] = useSearchParams()
    // const state = queryClient.getQueryState(["products",])
    const focusRef = useRef(null)
    const [toggle, setToggle] = useState(false)
    const [search, setSeach] = useState(querySearch.get("search") || "")
    const searchQuery = useQuery(searchProductQuery(search))

    const { countryName, countryCapital } = useCountry()

    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });
    const location = useLocation();
    const path = location.pathname.substring(1)
    const [isNotShoppingCart, setIsNotShoppingCart] = useState(false)
    useEffect(() => {

        if (path == "shopping-bag") {
            setIsNotShoppingCart(true)
        } else {
            setIsNotShoppingCart(false)
        }
        if (toggle) setToggle(false)

    }, [location.pathname])
    useEffect(() => {
        if (toggle) {
            focusRef.current?.focus()
        }
    }, [toggle])
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

    const navigate = useNavigate()
    const NavItem = ({ }) => {
        return (
            <div className='links-container group relative  px-2'>
                <div className='flex space-x-2 items-center'>
                    <Heading text="shop inside & coal "
                        className="!text-lg !text-start group-hover:text-[#02b362] cursor-pointer"
                    />
                    <FiChevronDown
                        size={20}
                        className="group-hover:rotate-180
group-hover:text-[#02b362]
transition-all duration-700"
                    />

                </div>
                <div
                    className='absolute left-0 h-0.5 rounded-lg bg-gray-700 group-hover:bg-[#02b362] w-0 group-[:hover]:w-full duration-300 transition-all bottom-0'
                />
                <ul className='absolute left-0  rounded-b-xl min-w-max  group-hover:pb-6
overflow-hidden max-h-0 group-hover:max-h-screen  transition-all duration-700
top-[calc(100%+0.25rem)] bg-white px-2 pr-8'>
                    {
                        Array.from({ length: 10 }, (arr, index) => <li
                            className='pb-1.5 capitalize hover:text-[#02b362] cursor-pointer font-[600]'
                        >view the shop inside</li>)

                    }

                </ul>

            </div>


        )
    }
    return (
        <>
            <div
                className='py-2 text-white text-center h-[--top-offset,60px] mx-auto bg-black/95'
            >
                <Swiper
                    modules={[Autoplay, Navigation]}
                    // navigation={true}
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
            <SearchContext.Provider
                value={{
                    search,
                    products: searchQuery?.data?.products,
                    setSeach,
                    focusRef,
                    setToggle,
                    isPreviousData: searchQuery?.isPreviousData
                }}

            >


                <div
                    className=' sticky z-50 top-0 right-0 w-full bg-white shadow  '>
                    <div className='
                relative lg:relative
                 mx-auto lg:px-8
                w-full flex justify-between items-stretch gap-x-2'>


                        <Link to="/"

                            className=' '
                        >

                            <img
                                className='max-w-[15rem] w-full h-[3.44rem]'
                                src='https://evergreenhouseshop.com/wp-content/uploads/2023/04/Untitled-4-1.png'
                            />
                        </Link>
                        <div className=' flex-1  hidden lg:flex items-stretch justify-center '>
                            {
                                Array.from({ length: 3 }, (arr, idx) =>
                                    <NavItem key={idx} />)

                            }
                            <div className='links-container group relative  px-2'>
                                <div className='flex space-x-2 items-center'>
                                    <NavLink
                                        to="/category/strains"
                                    >

                                        {({ isActive }) => <> <Heading text="Strains"
                                            className={`!text-lg !text-start ${isActive && "text-[#02b362]"} group-hover:text-[#02b362] cursor-pointer `}
                                        />
                                            <div
                                                className={`absolute left-0 h-0.5 rounded-lg bg-gray-700 group-hover:bg-[#02b362] ${isActive && "bg-[#02b362] w-full"} w-0 group-[:hover]:w-full duration-300 transition-all bottom-0`}
                                            /></>
                                        }
                                    </NavLink>
                                </div>
                                <div
                                    className='absolute left-0 h-0.5 rounded-lg bg-gray-700 group-hover:bg-[#02b362] w-0 group-[:hover]:w-full duration-300 transition-all bottom-0'
                                />
                            </div>
                            <div className='links-container group relative  px-2'>
                                <div className='flex space-x-2 items-center'>
                                    <NavLink
                                        to="/category/recipes"
                                    >
                                        {({ isActive }) => <> <Heading text="Recipes"
                                            className={`!text-lg !text-start ${isActive && "text-[#02b362]"} group-hover:text-[#02b362] cursor-pointer `}
                                        />
                                            <div
                                                className={`absolute left-0 h-0.5 rounded-lg bg-gray-700 group-hover:bg-[#02b362] ${isActive && "bg-[#02b362] w-full"} w-0 group-[:hover]:w-full duration-300 transition-all bottom-0`}
                                            /></>
                                        }
                                    </NavLink>
                                </div>


                            </div>
                        </div>
                        {/* user info here */}
                        <div className='flex items-center space-x-2 lg:space-x-2.5  '>
                            <motion.div

                                className='cursor-pointer    border-[#7d7d7d] '>
                                <motion.div
                                    whileHover={{
                                        scale: 1.2
                                    }}
                                >
                                    {
                                        !toggle ?
                                            <BsSearch
                                                onClick={() => setToggle(true)}
                                                className='text-[#9773ce]'
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

                                className='cursor-pointer group relative   border-[#7d7d7d] '>
                                <motion.div
                                    whileHover={{
                                        scale: 1.2
                                    }}
                                >
                                    <BsPersonFill
                                        onClick={() => {
                                            console.log(queryClient.getQueryData({
                                                // queryKey: ["products", "650c46c9328ab766193b4f03"]
                                                queryKey: ["user"],
                                                exact: true
                                            }))
                                            if (!queryClient.getQueryData({
                                                // queryKey: ["products", "650c46c9328ab766193b4f03"]
                                                queryKey: ["user"],
                                                exact: true
                                            })) return
                                            navigate("/user")
                                        }}
                                        className='text-gray-700'
                                        size={20}
                                    />
                                </motion.div>
                                {
                                    !queryClient.getQueryData({
                                        // queryKey: ["products", "650c46c9328ab766193b4f03"]
                                        queryKey: ["user"],
                                        exact: true
                                    }) &&
                                    <div
                                        className=' hidden absolute top-[calc(100%+6px)] lg:flex flex-col space-y-5 -translate-x-1/2 translate-y-5 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 left-1/2 invisible group-hover:visible
                             min-h-[70px] bg-black/95 px-5 py-4 min-w-fit
                             '
                                    >
                                        <div
                                            className='flex flex-col gap-y-4 w-full'
                                        >
                                            <Button
                                                onClick={() => navigate("/auth")}
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
                                }
                            </motion.div>
                            {
                                !isNotShoppingCart && <motion.div

                                    className='cursor-pointer   border-[#7d7d7d] '>
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
                            <div
                                className="line-clamp-1 font-medium hidden sm:block"
                            >
                                {
                                    countryName
                                },
                                {
                                    countryCapital && `${countryCapital[0]}...`
                                }
                            </div>

                            <div className='flex lg:hidden'>
                                {isOpen ?
                                    <motion.div

                                        className='cursor-pointer flex space-x-2 items-stretch ml-1    px-3 text-[#7d7d7d] '>
                                        <motion.div
                                            whileHover={{
                                                scale: 1.2
                                            }}
                                        >
                                            <AiOutlineClose
                                                onClick={() => setIsOpen(false)}
                                                className='text-gray-700'
                                                size={25}
                                            />
                                        </motion.div>
                                    </motion.div> : <motion.div

                                        className='cursor-pointer flex space-x-2 items-stretch ml-1    px-3 text-[#7d7d7d] '>
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
                                    </motion.div>
                                }
                            </div>

                        </div>


                        <AnimatePresence>
                            {
                                toggle &&
                                <motion.div
                                    initial={{ y: 100, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    exit={{ y: 1000, opacity: 0 }}
                                    transition={{ duration: 0.08 }}
                                    // key={"inputmodal"}
                                    className={`absolute scrollto bg-[#f9f5f5] lg:px-24 px-4 ${true ? "visible pointer-events-auto opacity-100" : "invsible pointer-events-none opacity-0"} duration-700 transition-all left-0  right-0 py-4 border top-full  bg-white`}
                                >
                                    <div
                                        className='flex pl-2 lg:pl-3 items-center border space-x-3 hover:outline-none focus:outline-none bg-white w-full '
                                    >
                                        <BsSearch
                                            size={20}
                                        />
                                        <SeachContainer />

                                    </div>

                                    {/* result of seaec here */}
                                    <SearchResultContainer />


                                </motion.div>
                            }
                        </AnimatePresence>

                    </div>

                </div >
            </SearchContext.Provider>

        </>
    )
}

export const useSearchContext = () => useContext(SearchContext)
export default NavBar