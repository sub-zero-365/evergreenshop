import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { EffectCreative, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import "./productcart.css"
import Button from './Button';
import useItem from '../utils/checkInCart';
import { useDispatch } from 'react-redux';
import { addToCart, removeFromCart } from '../actions/cartItems'
import { useNavigate } from 'react-router-dom';

const variants = {
    show: {
        y: 0, opacity: 1,

    }, hidden: {
        y: 100, opacity: 0.3
    }
}
const ProductCart = (props) => {
    const { id = 1, className } = props
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const item = {
        ...props
    }
    const [activeSlide, setActiveSlide] = useState(0)
    const { incart } = useItem(id)
    return (
        <motion.div
            onClick={() => navigate("/product/2")}
            className={`productcart py-2 group flex-none w-full max-w-sm ${className}`}
            variants={variants}
            initial="hidden"
            whileInView="show"

        >

            <Swiper className="mySwiper"

                grabCursor={true}
                effect={'creative'}
                creativeEffect={{
                    prev: {
                        shadow: true,
                        translate: [0, 0, -400],
                    },
                    next: {
                        translate: ['100%', 0, 0],
                    },
                }}
                modules={[EffectCreative, Pagination]}
                pagination={true}
                onSlideChange={(e) => setActiveSlide(e.activeIndex)}
            // className=""
            >
                <SwiperSlide>
                    <img
                        src='https://evergreenhouseshop.com/wp-content/uploads/2021/08/image_search_1629557120822.jpg'
                        // src={"https://www.mvmt.com/dw/image/v2/BDKZ_PRD/on/demandware.static/-/Sites-mgi-master/default/dw3b08217b/images/products/28000088_fr.jpg?sw=512&sh=512&q=85"}
                        className='h-[12rem] md:h-[15rem] w-full '
                        alt="hair " />

                </SwiperSlide>
                <SwiperSlide>
                    <img
                        src='https://evergreenhouseshop.com/wp-content/uploads/2021/07/WhatsApp-Image-2021-10-28-at-14.44.56.jpeg'
                        // src={"https://www.mvmt.com/dw/image/v2/BDKZ_PRD/on/demandware.static/-/Sites-mgi-master/default/dw166f6ac7/images/products/28000211_fr.jpg?sw=512&sh=512&q=85"}
                        className='h-[12rem] md:h-[15rem] w-full '
                        alt="hair " />

                </SwiperSlide>
                <SwiperSlide>
                    <img
                        src={"https://evergreenhouseshop.com/wp-content/uploads/2021/08/image_search_1629558788712-500x500.jpg"}
                        className='h-[12rem] md:h-[15rem] w-full '
                        alt="hair " />

                </SwiperSlide>
            </Swiper>
            <div className='flex items-center justify-center py-1 mb-1 gap-x-1'>
                {
                    Array.from({ length: 4 }, (_, index) => <div className={`border-[#e0e0e0] border w-7 h-7 ${activeSlide == index ? "scale-150" : ""} `}><img
                        src='https://evergreenhouseshop.com/wp-content/uploads/2021/07/moon-rock-pre-rolled-blunt-510x383-1-500x375.jpg' /> </div>)
                }
            </div>
            <div>
                <p className='text-gray-400 text-sm font-medium '>DANKVAPE SHOP</p>
                <p className=' text-sm font-bold uppercase line-clamp-2 text-slate-900'>
                    3 bears refined live resong 0.5g cartridge
                </p>
                <h1
                    className='text-black leading-8 font-bold '
                >$25 – $1100</h1>
            </div>
            <div
                className='mt-5'
            >
                {
                    incart ? <Button
                        title="remove from cart"
                        className="!block lg:translate-y-10 lg:opacity-0 group-[:hover]:opacity-100  group-[:hover]:translate-y-0 !mx-auto !w-full hover:!bg-rose-900
!rounded-full !bg-rose-800 !text-xs !py-3 !transition-all !duration-[0.5s] md:!text-sm  group-[:hover]:visible lg:invisible

"
                        onClick={e => {
                            e.stopPropagation()
                            console.log(e)
                            dispatch(removeFromCart(id))
                        }}
                    /> : <Button
                        title="add to cart"
                        className="!block lg:translate-y-10 lg:opacity-0 group-[:hover]:opacity-100 y-0 group-[:hover]:translate-y-0 !mx-auto !w-full hover:!bg-blue-400
!rounded-full !bg-black !text-xs !py-3 !transition-all !duration-[0.5s] md:!text-sm  group-[:hover]:visible lg:invisible
"
                        onClick={e => {
                            e.stopPropagation()
                            dispatch(addToCart(item))
                        }}
                    />
                }
            </div>
        </motion.div>
    )
}

export default ProductCart