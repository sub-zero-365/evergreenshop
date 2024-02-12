import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

import './imageslider.css';

// import required modules
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import ImageMagnifier from './ImageViewer';

export default function ImageSlider({imgUrl}) {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    return (
        <div className='image-slider'>
            <Swiper
                style={{
                    '--swiper-navigation-color': '#fff',
                    '--swiper-pagination-color': '#fff',
                }}
                loop={true}
                spaceBetween={10}
                navigation={true}
                thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}

                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper2"
            >
                <SwiperSlide>
                    <ImageMagnifier
                        magnifierHeight={200}
                        magnifieWidth={200}

                        src={"https://evergreenhouseshop.com/wp-content/uploads/2021/08/image_search_1629557120822-500x500.jpg"}
                    />
                </SwiperSlide>
                <SwiperSlide>
                <ImageMagnifier
                        magnifierHeight={200}
                        magnifieWidth={200}
                        src="https://evergreenhouseshop.com/wp-content/uploads/2021/08/image_search_1629558788712-500x500.jpg"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    
                <ImageMagnifier
                        magnifierHeight={200}
                        magnifieWidth={200}
                        src="https://evergreenhouseshop.com/wp-content/uploads/2021/07/moon-rock-pre-rolled-blunt-510x383-1-500x375.jpg"
                    />
                </SwiperSlide>
                <SwiperSlide>
                <ImageMagnifier
                        magnifierHeight={200}
                        magnifieWidth={200}
                        src="https://evergreenhouseshop.com/wp-content/uploads/2021/07/download-29.jpg"
                    />
                </SwiperSlide>


            </Swiper>
            <Swiper
                onSwiper={setThumbsSwiper}
                loop={true}
                spaceBetween={10}
                slidesPerView={4}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img src="https://evergreenhouseshop.com/wp-content/uploads/2021/08/image_search_1629557120822-500x500.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://evergreenhouseshop.com/wp-content/uploads/2021/08/image_search_1629558788712-500x500.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://evergreenhouseshop.com/wp-content/uploads/2021/07/moon-rock-pre-rolled-blunt-510x383-1-500x375.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://evergreenhouseshop.com/wp-content/uploads/2021/07/download-29.jpg" />
                </SwiperSlide>

            </Swiper>
        </div>
    );
}
