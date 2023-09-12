import React, { useMemo } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Link } from 'react-router-dom';
const Swipercroll = () => {

    const links = useMemo(() => [

        {
            name: "",
            href: "/",
            imgUrl: "https://weed.com/wp-content/uploads/cache/thumbs_150x150/460862_cannabis-edibles-gummies-beverages.png"
        }
    ], [])
    return (
        <div className='py-4 px-2 containet mx-auto lg:px-14'>
            <Swiper
                slidesPerView={3}
                breakpoints={{
                    640: {
                        slidesPerView: 5,
                    },
                    786: {
                        slidesPerView: 7,
                    },
                }}
                navigation={true}
                loop={true}
                modules={[Pagination, Autoplay, Navigation]} className="mySwiper">
                {
                    Array.from({ length: 10 }, (arr, index) => <SwiperSlide key={index}>
                        <Link to="product-category/Cannabis Flower and Prerolls" className='flex flex-col items-center justify-between px-1 '>
                            <img
                                className='w-14 h-14 rounded-full'
                                src='https://weed.com/wp-content/uploads/cache/thumbs_150x150/460863_cannabis-foower-pre-rolls.png'
                            />
                            <p className='text-xs font-medium md:text-sm leading-tighter text-center py-3 hover:text-[#4ca84a] transition duration-500'>flower & peer rose</p>
                        </Link>
                    </SwiperSlide>)

                }

            </Swiper>
        </div>
    )
}

export default Swipercroll