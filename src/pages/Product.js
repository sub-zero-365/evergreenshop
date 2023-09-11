import { useLoaderData } from "react-router-dom"
import { data } from '../constants/demoData';
import Heading from "../components/Heading"
import Button from "../components/Button"
import { FreeMode, Navigation, Pagination, Scrollbar, A11y, Autoplay, Thumbs } from "swiper/modules";
import { Swiper, SwiperSlide } from 'swiper/react'
import { useState, useRef } from 'react'
import ReactStars from 'react-rating-stars-component'
import Select from 'react-select'
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "swiper/css/autoplay"
import "swiper/css/a11y"
import "swiper/css/scrollbar"
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "swiper/css/scrollbar"
import ProductCart from '../components/ProductCart';

import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import ImageSlider from "../components/ImageSlider";
export const loader = ({ params }) => {

    const isProduct = data.find((elm) => elm.id == params.id)
    if (!isProduct) throw new Error("no items with id")
    return isProduct

}

const Product = () => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    // const data = useLoaderData()
    return (
        <div>

            <div className="container mx-auto lg:grid grid-cols-2 items-start ">

                <div
                    className="border "

                >
                    {/* swiper container here */}
                    <ImageSlider />
                </div>
                <div
                    className="border "

                >

                    <div className="px-2">

                        <Heading
                            className=""
                            text={"Indicar 4202"}
                        />
                        <Heading
                            className="!text-xl !py-1 !font-bold !text-start"
                            text={"$549,9"}
                        />
                        <Heading
                            className="!text-xl !text-rose-800 line-through !py-1 !font-bold !text-start"
                            text={"$549,9"}
                        />
                        {/* start of buttons  */}
                        <div className="flex items-center space-x-1">
                            <div
                                className='flex border space-x-2.5  items-center  px-4 py-1.5 rounded-full   '
                            >
                                <span>

                                    <AiOutlineMinus
                                        size={16}
                                    />
                                </span>
                                <span>2</span>
                                <span>
                                    <AiOutlinePlus
                                        size={16}
                                    />
                                </span>
                            </div>
                            <Button
                                title="add to cart"
                                className="!block !flex-1  !mx-auto  hover:!bg-blue-400
!rounded-full !bg-black !text-sm !font-bold uppercase !py-3 !transition-all !duration-[0.5s] md:!text-sm  !w-[min(30rem,calc(100%-2rem))]
"
                                onClick={e => {
                                    e.stopPropagation()
                                    // dispatch(addToCart(item))
                                }}
                            />

                        </div>
                    </div>

                    {/* product detail container here */}


                    <div className="flex justify-center max-w-2xl   mx-5 md:mx-auto gap-x-4 pb-4 border-b-2 border-slate-400">
                        <Swiper
                            onSwiper={setThumbsSwiper}
                            spaceBetween={10}
                            slidesPerView={3}
                            freeMode={true}
                            watchSlidesProgress={true}
                            scrollbar={{ draggable: true }}

                            modules={[FreeMode, Navigation, Thumbs, Scrollbar]}
                            className="mySwiper mt-4"
                        breakpoints={{
                            640: {
                                slidesPerView: 3,
                            },
                            786: {
                                slidesPerView: 3,
                            },
                        }}
                        >
                            {["Product Details", "Reviews", "Contact seller"].map((item, index) => (<SwiperSlide
                                key={index}
                                className="group">
                                <h1 style={{
                                    flex: "none"
                                }} className={`font-sm uppercase text-xs md:text-sm pb-2 group-[.swiper-slide-thumb-active]:!scale-125 group-[.swiper-slide-thumb-active]:!font-bold   cursor-pointer text-center  font-manrope ${({ isActive }) => isActive ? "font-medium text-orange-300" : "font-light"} `} onClick={() => {
                                }}>

                                    {item || "no service"}
                                </h1>
                            </SwiperSlide>))}
                        </Swiper>



                    </div>
                    <div />
                    <Swiper
                        style={{
                            "--swiper-navigation-color": "#fff",
                            "--swiper-pagination-color": "#fff",
                        }}
                        navigation={{
                            prevEl: ".swiper-button-pre",
                            nextEl: ".swiper-button-nxt",
                        }}
                        modules={
                            [Navigation, Pagination, Scrollbar, A11y, Autoplay, FreeMode, Thumbs]
                        }
                        // spaceBetween={10}
                        // navigation={true}
                        thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
                        scrollbar={true}
                        // modules={[FreeMode,  Thumbs]}
                        className="mySwiper2 max-w-6xl"
                        slidesPerView={1}
                    >

                        <SwiperSlide >
                            <div className=" ">

                                <h1 className="text-2xl font-medium font-montserrat text-center mt-2 mb-4 tracking-tighter italic">PRODUCT DETAILS</h1>
                                <h2 className="text-2xl text- pl-4 font-medium font-montserrat mb-4">Brazilian hair</h2>

                                <div className="px-4 tracking-tight leading-6 text-sm md:text-lg">
                                    <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, sint animi ab expedita tempore dolorem maxime cupiditate, consectetur eligendi magni laboriosam? Placeat, ex iste. A itaque molestias odit nostrum iure vel, blanditiis repellat repudiandae! Porro aperiam excepturi ipsum velit temporibus.</p>
                                    <h2 className="text-2xl text- pl-4 font-medium font-montserrat mb-2 mt-2">Information</h2>

                                    <ul className="pl-4 mb-4">
                                        <li className="list-disc ml-4">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam, est?</li>
                                        <li className="list-disc ml-4">Lor consectetur adipisicing elit. Ipsam, est?</li>
                                        <li className="list-disc ml-4">Lorem ipsumit. Ipsam, est?</li>
                                        <li className="list-disc ml-4">Lorem ipsum, dolor sit amet consectst?</li>

                                    </ul>

                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide >
                            <div className="border  flex flex-col pt-5 ">
                                <h2 className="text-montserrat text-lg text-center font-medium w-[400px] max-w-[calc(100%-2.5rem)] mx-auto mb-2 ">Write A Recieve about product</h2>

                                <form className="mx-4 my-10 mt-4 shadow pb-8 ">
                                    <h2 className="text-montserrat font-medium w-[400px] max-w-[calc(100%-2.5rem)] mx-auto mb-2 ">Select Star Rating</h2>

                                    <div class="form-group mb-6  
                    
                    w-[400px] mx-auto  gap-x-2 max-w-[calc(100%-2.5rem)]
                    
                    ">
                                        <textarea class="
                      form-control
                      block
                      w-full
                      px-3
                      py-1.5
                      text-base
                      font-normal
                      text-gray-700
                      bg-white bg-clip-padding
                      border border-solid border-gray-300
                      rounded
                      transition
                      ease-in-out
                      m-0
                      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
                    " id="exampleFormControlTextarea13" rows="3" placeholder="Message"></textarea>
                                    </div>

                                    <button type="submit" class="
                    block
                    px-6
                    py-2.5
                    bg-blue-600
                    text-white
                    font-medium
                    text-xs
                    leading-tight
                    uppercase
                    rounded
                    shadow-md
                    hover:bg-blue-700 hover:shadow-lg
                    focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
                    active:bg-blue-800 active:shadow-lg
                    transition
                    duration-150
                    w-[200px] mx-auto  gap-x-2 max-w-[calc(100%-2.5rem)]
                    
                    ease-in-out">Send</button>
                                </form>
                                <div className="flex flex-wrap flex-1 overflow-y-initial">

                                    {/* {
                                [1, 2, 4, 5].map((i) => <Review />)

                            } */}
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide >
                            <div className=" ">

                                CONTACT SELLTER
                            </div>
                        </SwiperSlide>


                    </Swiper>
                </div>
            </div>
            <section className='py-10'>
                <Heading
                    text={"Related Product"}
                />
                <div className=" flex flex-nowrap  lg:flex-wrap  lg:container lg:mx-auto gap-x-2 bg-white  overflow-x-auto overflow-y-hidden">
                    {data?.map((arr, index) => <ProductCart
                        className="rounded-md !max-w-[13rem] md:!max-w-[14rem]"
                        key={index}
                        {
                        ...arr
                        }
                    />)}
                </div>
                
            </section>
        </div>
    )
}

export default Product