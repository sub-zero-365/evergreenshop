// @ts-nocheck
import React, { useEffect, useState, useRef, createContext, useContext } from 'react'
import { EffectCreative, Pagination, Autoplay, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
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
import useCountry from './GetCountry'
import customFetch from '../utils/customFetch';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import ProductCart from './ProductCart';
import SearchResultContainer from './SearchResultContainer';
import SeachContainer from './SeachContainer';
import { useFilter } from '../hooks/useFilter';
import { iMenuItem, menuItems } from '@/utils/MenuItems';
import { Button } from './ui/button';
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
    NavigationMenuViewport,
} from "@/components/ui/navigation-menu"
import { cn } from "@/lib/utils"
// import { Icons } from "@/components/icons"
import * as Icons from "lucide-react"
import { ListItem } from './ui/listem-item';

const searchProductQuery = (search: any) => {
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


const SearchContext = createContext(null) as any

const NavBar = ({ setIsOpen, queryClient, isOpen }: any) => {
    const components: { title: string; href: string; description: string }[] = [
        {
            title: "Alert Dialog",
            href: "/docs/primitives/alert-dialog",
            description:
                "A modal dialog that interrupts the user with important content and expects a response.",
        },
        {
            title: "Hover Card",
            href: "/docs/primitives/hover-card",
            description:
                "For sighted users to preview content available behind a link.",
        },
        {
            title: "Progress",
            href: "/docs/primitives/progress",
            description:
                "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
        },
        {
            title: "Scroll-area",
            href: "/docs/primitives/scroll-area",
            description: "Visually or semantically separates content.",
        },
        {
            title: "Tabs",
            href: "/docs/primitives/tabs",
            description:
                "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
        },
        {
            title: "Tooltip",
            href: "/docs/primitives/tooltip",
            description:
                "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
        },
    ]

    function NavigationMenuDemo() {
        return (
            <NavigationMenu>
                <NavigationMenuList className='flex flex-col'>
                    <NavigationMenuItem>
                        <NavigationMenuTrigger>Getting started</NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                                <li className="row-span-3">
                                    <NavigationMenuLink asChild>
                                        <a
                                            className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                                            href="/"
                                        >
                                            <Icons.Pen className="h-6 w-6" />
                                            <div className="mb-2 mt-4 text-lg font-medium">
                                                shadcn/ui
                                            </div>
                                            <p className="text-sm leading-tight text-muted-foreground">
                                                Beautifully designed components that you can copy and
                                                paste into your apps. Accessible. Customizable. Open
                                                Source.
                                            </p>
                                        </a>
                                    </NavigationMenuLink>
                                </li>
                                <ListItem href="/docs" title="Introduction">
                                    Re-usable components built using Radix UI and Tailwind CSS.
                                </ListItem>
                                <ListItem href="/docs/installation" title="Installation">
                                    How to install dependencies and structure your app.
                                </ListItem>
                                <ListItem href="/docs/primitives/typography" title="Typography">
                                    Styles for headings, paragraphs, lists...etc
                                </ListItem>
                            </ul>
                        </NavigationMenuContent>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <NavigationMenuTrigger>Components</NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                                {components.map((component) => (
                                    <ListItem
                                        key={component.title}
                                        title={component.title}
                                        href={component.href}
                                    >
                                        {component.description}
                                    </ListItem>
                                ))}
                            </ul>
                        </NavigationMenuContent>
                    </NavigationMenuItem>

                </NavigationMenuList>
            </NavigationMenu>
        )
    }
    const isUser = queryClient.getQueryState()?.data?.user
    console.log(isUser)
    const [querySearch] = useSearchParams()
    // const state = queryClient.getQueryState(["products",])
    const focusRef = useRef<any>(null)
    const [toggle, setToggle] = useState(false)
    const [search, setSeach] = useState(querySearch.get("search") || "")
    const searchQuery = useQuery(searchProductQuery(search))

    const { countryName, countryCapital } = useCountry() as any

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
    const { totalAmount } = useSelector(state => state?.cartItems) as any
    const [isCartEmpty, setIsCartEmpty] = useState(false)
    useEffect(() => {
        if (totalAmount > 0) {
            setIsCartEmpty(true)
        } else {
            setIsCartEmpty(false)
        }
    }, [totalAmount])

    const navigate = useNavigate()
    const NavItem = ({
        children, menu, url
    }: iMenuItem) => {
        return (
            <div className='links-container group relative flex flex-col justify-center items-center  px-2 '>

                <div className='flex space-x-2 items-center cursor-pointer '>
                    <Heading text={menu}
                        className="text-sm lg:text-[1rem]  !text-start group-hover:text-[#02b362]-- cursor-pointer"
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
top-[calc(100%+0.15rem)] bg-white px-2 pr-8'>
                    {
                        [...children, ...children, ...children].map(({
                            name, url

                        }, index) => <li
                            key={index}
                            className='pb-1.5 capitalize hover:text-[#02b362] cursor-pointer font-[600]'
                        >
                                <Link
                                    to={url}
                                >
                                    {name}
                                </Link>

                            </li>)

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
                            // title="shop now"
                            className="!inline-block !px-2 "
                        ></Button></p>
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
                                src='https://weed.com/wp-content/uploads/cache/thumbs_150x150/460862_cannabis-edibles-gummies-beverages.png'
                            />
                        </Link>
                        <div className=' flex-1   hidden lg:flex items-stretch justify-center '>
                            {
                                menuItems.map((menuItem, idx) =>
                                    <NavItem key={idx}
                                        {...menuItem}

                                    />)

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
                                                // title="log in "
                                                className="!block break-keep flex-1 
                                    !rounded-full !py-3 !px-4  !text-xs !min-w-[100px]
                                    !text-center
                                    !bg-white !text-black !font-medium uppercase
                                    "
                                            >
                                                Login
                                            </Button>

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
                                    className={`absolute scrollto bg-[#f9f5f5]
                                        h-[min(40rem,calc(100vh-4rem))]
                                     mx-auto max-w-6xl w-full  ${true ? "visible pointer-events-auto opacity-100" : "invsible pointer-events-none opacity-0"} duration-700 transition-all left-0  right-0 py-4 border top-full  bg-white`}
                                >
                                    <div
                                        className='flex pl-2 lg:pl-3 items-center border space-x-3 hover:outline-none focus:outline-none bg-white w-full '
                                    >
                                        <BsSearch
                                            size={20}
                                        />
                                        <SeachContainer />

                                    </div>
                                    {/* <NavigationMenuDemo /> */}
                                    <div
                                        className='grid h-full grid-cols-[auto,1fr]  '
                                    >
                                        <div className="bg-green-400 relative h-full
                                        
                                        w-72
                                        ">
                                            <ul className='flex flex-col h-full bg-white  cursor-pointer'>

                                                {
                                                    Array.from({ length: 5 }, (arr, idx) => <li
                                                        className='w-full group
                                                        '
                                                        key={idx}>
                                                        <Link
                                                            className=' w-full block
                                                            text-[1rem]
                                                            hover:bg-gray-200
                                                            '
                                                            to={`/${idx}`}

                                                        >
                                                            index-{idx}
                                                        </Link>
                                                        <div
                                                            className="absolute
                                                            px-4
                                                        left-72
                                                        bg-purple-300
                                                        top-0
                                                        h-96
                                                        w-[calc(72rem-18rem)]
                                                        opacity-0
                                                        invisible 
                                                        group-hover:visible
                                                        group-hover:opacity-100
                                                        duration-300
                                                        transition-all
                                                        ">
                                                            {idx}-element
                                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi quos sequi eveniet inventore aut molestiae incidunt assumenda necessitatibus veritatis at harum error quasi similique alias doloremque iure, optio maxime quam.

                                                        </div>

                                                    </li>)

                                                }

                                            </ul>
                                        </div>
                                        <div className="bg-red-200"></div>

                                    </div>


                                    {/* result of seaec here */}
                                    {/* <SearchResultContainer /> */}


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