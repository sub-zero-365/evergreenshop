import React from 'react'
import mainbg from '../assets/images/main-bg-image.jpeg'
import AnimatedText from '../components/AnimateText'
import { GrDeliver } from 'react-icons/gr'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import Button from '../components/Button';
import { Link } from 'react-router-dom';
import ProductCart from '../components/ProductCart';
import { data } from '../constants/demoData';
const Home = () => {

  return (
    <div>
      <>

      </>
      <div className='bg-[#02101a]'>
        <Swiper
          loop
          autoplay={{
            delay: 1500, disableOnInteraction: false
          }}
          pagination={true} modules={[Pagination, Autoplay]} className="mySwiper">
          <SwiperSlide>
            {
              ({ isActive, isPrev }) => <div
                className='min-h-[739px] bg-cover bg-no-repeat flex items-center justify-center'
                style={{
                  backgroundImage: `url(${mainbg})`
                  , backgroundPosition: "center center"
                }}
              >
                <div>
                  {
                    isActive && <AnimatedText
                      text={"Buy Recreational Marijuana"}
                      className='text-center text-white !text-5xl lg:!text-8xl font-black !font-bricolage '
                    />
                  }
                  <Button
                    title="View Shop"
                    className={
                      `!block !mx-auto transition-all duration-700 !mt-5 !w-[min(400px,calc(100%-30px))] 
                      !py-3.5 !bg-blue-900 !uppercase !text-lg
                      !rounded-full  ${isActive ? "translate-y-0 opacity-100" : "translate-y-14 opacity-20"}`
                    }
                  />
                </div>
              </div>
            }
          </SwiperSlide>
          <SwiperSlide>
            {
              ({ isActive, isPrev }) => <div
                className='min-h-[739px] bg-cover bg-no-repeat flex items-center justify-center'
                style={{
                  backgroundImage: `url(${mainbg})`
                  , backgroundPosition: "center center"
                }}
              >
                <div>
                  {
                    isActive && <AnimatedText
                      text={"Buy Recreational Marijuana"}
                      className='text-center text-white !text-5xl lg:!text-8xl font-black !font-bricolage '
                    />
                  }
                  <Button
                    title="View Shop"
                    className={
                      `!block !mx-auto transition-all duration-700 !mt-5 !w-[min(400px,calc(100%-30px))] 
                      !py-3.5 !bg-blue-900 !uppercase !text-lg
                      !rounded-full  ${isActive ? "translate-y-0 opacity-100" : "translate-y-14 opacity-20"}`
                    }
                  />
                </div>
              </div>
            }
          </SwiperSlide>
          <SwiperSlide>
            {
              ({ isActive, isPrev }) => <div
                className='min-h-[739px] bg-cover bg-no-repeat flex items-center justify-center'
                style={{
                  backgroundImage: `url(${mainbg})`
                  , backgroundPosition: "center center"
                }}
              >
                <div>
                  {
                    isActive && <AnimatedText
                      text={"Buy Recreational Marijuana"}
                      className='text-center text-white !text-5xl lg:!text-8xl font-black !font-bricolage '
                    />
                  }
                  <Button
                    title="View Shop"
                    className={
                      `!block !mx-auto transition-all duration-700 !mt-5 !w-[min(400px,calc(100%-30px))] 
                      !py-3.5 !bg-blue-900 !uppercase !text-lg
                      !rounded-full  ${isActive ? "translate-y-0 opacity-100" : "translate-y-14 opacity-20"}`
                    }
                  />
                </div>
              </div>
            }
          </SwiperSlide>


        </Swiper>
        <section className='!py-5 bg-[#eef2f4]'>
          <div className='py-3'>
            <h1 className='text-4xl lg:text-5xl text-center leading-wider tracking-tight'>Our Promises</h1>
          </div>
          <div className='flex flex-center pb-10 justify-center items-center flex-wrap gap-x-6 lg:gap-x-20 space-y-6'>
            <div className='text-center'>
              <img
                src='https://cdn.builder.io/api/v1/image/assets%2FTEMP%2Fa45556acfa63450d95939e2453ef36b7'
              />
              <p className='text-sm'>Free Shipping Over <br /> $75</p>
            </div>
            <div className='text-center'>
              <img
                src='https://cdn.builder.io/api/v1/image/assets%2FTEMP%2F6abefec93ca344b88a99b94895299c6d'
              />
              <p className='text-sm'>Two Year<br />  Warranty</p>
            </div>
            <div className='text-center'>
              <img
                src='https://cdn.builder.io/api/v1/image/assets%2FTEMP%2F58ac5267ab954fdc9a42f70c0283f9d6'
              />
              <p className='text-sm'>Easy <br />  Returns</p>
            </div>
            <div className='text-center'>
              <img
                src='https://cdn.builder.io/api/v1/image/assets%2FTEMP%2F489caa6e827f4b16a911bef921893101'
              />
              <p className='text-sm'>1% Revenue to <br /> Charitable  <br /> Initiatives </p>
            </div>
          </div>
          <div
            className='lg:grid grid-cols-12 bg-white'
          >
            <div className='col-span-8 relative'>
              <img
                src='https://cdn.builder.io/api/v1/image/assets%2F8a0dd03ad52340849785aa8840f575d4%2F64c736e397154e9883a4919e626cf449'
                alt='someinage here'
              />
            </div>
            <div className='col-span-4 px-14'>
              <div className='py-3'>
                <h1 className='text-4xl  lg:text-5xl text-start leading-wider tracking-tight'>Give Back <br /> With Us</h1>
              </div>
              <p>We’re pledging 1% of all revenue to 4 partner charity organizations. You’ll be able to directly participate in this initiative at checkout, where you can choose which cause you'd like us
                to donate to!</p>
              <Link to="/store" >
                <Button
                  className="!bg-transparent
                                hover:!bg-blue-600
                                hover:underline underline-offset-8
                                transition duration-500
                                !uppercase !py-3 !mt-10 !mb-6 !rounded-full !border-2 !border-black !text-black"

                  title="Our Causes"
                />

              </Link>
            </div>
          </div>
        </section>


      </div>
      <section className='py-10'>
        <div className='py-3 font-bricolage'>
          <h1 className='text-4xl lg:text-5xl text-center leading-wider tracking-tight'>New Arrivals </h1>
        </div>
        <div className=" flex flex-nowrap gap-x-2 bg-white  overflow-x-auto overflow-y-hidden">
          {data.map((arr, index) => <ProductCart
        
            className="rounded-md !max-w-[13rem] md:!max-w-[14rem]"
            key={index}
            {
            ...arr
            }
          />)}
        </div>
      </section>

      <section>
        <div className='py-3 font-bricolage'>
          <h1 className='text-4xl lg:text-5xl text-center leading-wider tracking-tight'>Future Product</h1>
        </div>
        <div
          className='grid  grid-cols-[repeat(auto-fit,minmax(min(12rem,calc(100%-30px)),_1fr))]  lg:grid-cols-[repeat(auto-fit,minmax(min(17rem,calc(100%-30px)),_1fr))] !w-full   !container mx-auto lg:px-6 gap-x-1 lg:gap-x-0'
        >
          {data.map((item, index) => <ProductCart
            {
            ...item
            }
            className="rounded-md !w-full"
            key={index}

          />)}
        </div>
      </section>

      <div></div>

    </div>
  )
}

export default Home