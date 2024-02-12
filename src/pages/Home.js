import React, { useRef, useState } from 'react'
// import mainbg from '../assets/images/main-bg-image.jpeg'
// import AnimatedText from '../components/AnimateText'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectFade } from 'swiper/modules';
// import { FiInstagram } from 'react-icons/fi'
// import CustomAccordians from '../components/CustomAccordian';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import Button from '../components/Button';
import { Link } from 'react-router-dom';
import ProductCart from '../components/ProductCart';
import { data } from '../constants/demoData';
import Heading from '../components/Heading';
import { motion } from "framer-motion"
import Swipercroll from '../components/Swipercroll';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';
import { useQuery } from '@tanstack/react-query';
import customFetch from '../utils/customFetch';
const Home = ({ queryClient }) => {

  const productQuery = useQuery({
    queryFn: async () => {
      return data
      // const response = await customFetch.get('/products');
      // return response.data;
      
    },
    queryKey: ['products'],
  })
  const [swiperRef, setSwiperRef] = useState(null);

  const nextSlide = () => {
    swiperRef.slideNext();
  };
  const prevSlide = () => {
    swiperRef.slidePrev();
  };
  const ref = useRef(null)
  const main = useRef(null)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const mouseMove = e => {
    const { clientX, clientY } = e;
    const boxStyles = main.current.getBoundingClientRect()
    const { height, width, left, top } = ref.current.getBoundingClientRect()
    const x = clientX
    const y = clientY + (Math.abs(boxStyles.top))
    setPosition({ x, y })
  }
  const OverLay = () => {
    return <div className='absolute inset-0 cursor-pointer w-full h-full  bg-slate-200/50 hover:z-10 z-0 opacity-0 hover:opacity-100 duration transition-all'></div>
  }
  return (
    <div
      className='relative'
      ref={main}
      onMouseMove={mouseMove}
    >
      <motion.div
        transition={{ type: "spring", stiffness: 150 }}
        ref={ref}
        animate={{ left: position.x, y: position.y }}
        className='w-8 
        h-8 bg-orange-900 rounded-full hidden absolute z-[200] overflow-hidden'
      >
        <img
          className='w-full h-full'
          src='https://evergreenhouseshop.com/wp-content/uploads/2021/08/image_search_1629557120822.jpg'
        />
      </motion.div>
      <Swipercroll />

      <section>
        <div className='grid grid-cols-1 gap-1 lg:grid-cols-12 --h-[min(100vh,25rem)]'>

          <Link to="product-category/machine-code" className='col-span-6 relative'>
            <OverLay />
            <img className='w-full h-full object-c'
              src='https://weed.com/wp-content/uploads/2023/09/flower-weed-to-buy-online-800x500-1.webp'
            />

          </Link>
          <div className='col-span-6 grid grid-cols-2 gap-1 relative' >

            <Link to="product-category/machine-code" className='overflow-hidden relative'>
              <OverLay />
              <img
                className='w-full h-full object-c'
                src="https://weed.com/wp-content/uploads/2023/04/delta-8-thc-buy-online.jpg" />
            </Link>
            <div className='flex flex-col gap-1'>
              <Link to="product-category/machine-code" className='flex-1 relative'>
                <OverLay />
                <img
                  className='w-full h-full object-c'
                  src="https://weed.com/wp-content/uploads/2023/04/shop-delta-9-thc-online.jpg" />

              </Link>
              <Link to="product-category/machine-code" className='flex-1 relative'>
                <OverLay />
                <img
                  className='w-full h-full object-c'
                  src="https://weed.com/wp-content/uploads/2023/04/bongs-pipes-weed-buy.jpg" />

              </Link>
            </div>

          </div>
        </div>
      </section>
      <section>
        <Heading

          className={"!font-black !leading-loose !py-5 "}
          text={"Buy Weed Online"}

        />
        <div className='flex flex-center pb-10 justify-center items-center flex-wrap gap-x-6 lg:gap-x-20 space-y-6'>
          <motion.div
            initial={{ y: 60, opacity: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            className='text-center'>
            <motion.img
              whileHover={{ scale: 1.2 }}
              src='https://cdn.builder.io/api/v1/image/assets%2FTEMP%2Fa45556acfa63450d95939e2453ef36b7'
            />
            <p className='text-sm'>Free Shipping Over <br /> $75</p>
          </motion.div>
          <motion.div
            initial={{ y: 60, opacity: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            className='text-center'>
            <motion.img
              whileHover={{ scale: 1.2 }}
              src='https://cdn.builder.io/api/v1/image/assets%2FTEMP%2F6abefec93ca344b88a99b94895299c6d'
            />
            <p className='text-sm'>Two Year<br />  Warranty</p>
          </motion.div>
          <motion.div
            initial={{ y: 60, opacity: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            className='text-center'>
            <motion.img
              whileHover={{ scale: 1.2 }}
              src='https://cdn.builder.io/api/v1/image/assets%2FTEMP%2F58ac5267ab954fdc9a42f70c0283f9d6'
            />
            <p className='text-sm'>Easy <br />  Returns</p>
          </motion.div>
          <motion.div
            initial={{ y: 60, opacity: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            className='text-center'>
            <motion.img
              whileHover={{ scale: 1.2 }}
              src='https://cdn.builder.io/api/v1/image/assets%2FTEMP%2F489caa6e827f4b16a911bef921893101'
            />
            <p className='text-sm'>1% Revenue to <br /> Charitable  <br /> Initiatives </p>
          </motion.div>
        </div>
        <Heading
          text="Our Best Sellers & Your Favorite Products"
          className="mb-5 lg:!text-4xl"
        />
        <p className='max-w-3xl mb-10 font-bricolage text-center px-4 lg:px-0 mx-auto  text-lg leading-snug font-light'>
          Welcome to your one-stop shop for the best cannabis products on the market. We have a wide selection of high-quality products: from buds to edibles, concentrates, tinctures, and topicals. Buy weed online: we have something for everyone.

        </p>
      </section>
      <section className='py-10 max-w-6xl mx-auto'>
        <div className="flex items-center justify-between px-2">
          <Heading
            className="!text-4xl !font-bricolage"
            text={"New Arrival"}
          />
          <div className="flex items-center justify-center space-x-2">
            <div className="flex items-center justify-center border p-2 hover:border-green-500 transtition duration-500  rounded-full border-gray-500">
              <BsArrowLeft
                onClick={prevSlide}
                size={25}
              />
            </div>
            <div className="flex items-center  justify-center border p-2 hover:border-green-500 transtition duration-500 rounded-full border-gray-500">
              <BsArrowRight
                onClick={nextSlide}
                size={25}
              />
            </div>

          </div>

        </div>

        <Swiper
          // loop={true}
          // spaceBetween={30}

          // effect='fade'
          speed={1000}
          onSwiper={setSwiperRef}
          breakpoints={{
            640: {
              slidesPerView: 3,
            },
            786: {
              slidesPerView: 4,
            },

          }}

          slidesPerView={1.8}
          pagination={true}
          modules={[Pagination, Autoplay]}
          className="mySwiper my-10">
          {

            productQuery?.data?.products?.map((arr, index) => <SwiperSlide
              key={index}
            >
              {
                ({ isActive, isPrev }) =>
                  <ProductCart
                    className="rounded-md !max-w-[13rem] md:!max-w-[14rem]"
                    key={index}
                    {
                    ...arr
                    }
                  />

              }
            </SwiperSlide>)
          }


        </Swiper>



      </section>

      <section>
        <div className='py-5 font-bricolage'>
          {/* <h1 className='text-4xl lg:text-5xl text-center leading-wider tracking-tight'>Future Product</h1> */}
        </div>
        <div
          className='grid  grid-cols-[repeat(auto-fit,minmax(min(11rem,calc(100%-60px)),_1fr))]  lg:grid-cols-[repeat(auto-fit,minmax(min(17rem,calc(100%-30px)),_1fr))] !w-full   !container mx-auto lg:px-6 gap-x-1 lg:gap-x-0'
        >
          {productQuery?.data?.products?.map((item, index) => <ProductCart
            {
            ...item
            }
            className="rounded-md !w-full"
            key={index}

          />)}
        </div>
        <Link
          className=''
          to={"/shop"}
        >
          <Button
            title="See All"
            className="!block  !mx-auto !my-10 !bg-transparent !text-black  !border !border-black !py-2 !px-6 !uppercase"
          />

        </Link>
      </section>
      <motion.section
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ once: true }}
        viewport={{ once: true, amount: "some" }}
      >
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ once: true }}
          viewport={{ once: true, amount: 0.4 }}
        >
          <Heading

            className="!text-3xl md:!text-4xl !px-4 !mb-5 !font-semibold"
            text="Why Choose Weed.com As Your Online Weed Dispensary?"
          />

        </motion.div>
        <div className='max-w-6xl mx-auto'>
          <img className='mx-auto w-full'
            src='https://weed.com/wp-content/uploads/2023/02/happy-black-woman-weed-love.jpg'
          />

          <p className='py-6 px-4 lg:px-0'>
            Based in Los Angeles, Weed.com is one of the leading online cannabis stores for hemp and cannabis products and information. We provide comprehensive information about hemp, marijuana, and their potential health benefits as well as risks so that you are informed enough to make decisions about your own marijuana use. Here you are sure to find the perfect product for your needs with the finest lab results attached.

          </p>
          <p className='py-6 px-4 lg:px-0'>
            Our posts will keep you up to date on the latest trends and products. Whether you are a cannabis enthusiast, a medical marijuana patient, or looking to explore the potential health benefits of hemp and cannabis plant, you can read up on the latest cannabis legal, medical, and science news. Weed.com has the resources and information you need – and we carry more extensive medical-oriented information on our educational partner website in CannabisEdu – at Cannabis.org.

          </p>
          <p className='py-6 px-4 lg:px-0'>
            Explore our wide range of cannabis products, including hemp-derived cannabinoids such as CBD, CBG,  Delta 8, Delta 9, Delta 10, and many others. Delta 8 THC products, cannabis oil, vape carts, and many other popular products are here for you.
          </p>

          <Heading
            text="Special Offers"
            className="!text-3xl md:!text-4xl !px-4 !mb-5 !font-semibold"
          />
          <p className='py-6 px-4 lg:px-0'>
            Weed.com is sure to surprise you with special promos, free shipping, coupons for the first purchase, etc. Moreover, once you create your account, you will receive more and more benefits and freebies to enjoy your favorite products.
          </p>
          <p className='py-6 px-4 lg:px-0'>
            Our cannabis online store always has special offers with sales and bundles, where you can find a great variety of beloved by many products at a really good price or at great discounts.


          </p>

          <Heading
            text="Excellent Customer Service"
            className="!text-3xl md:!text-4xl !px-4 !mb-5 !font-semibold"
          />
          <p className='py-6 px-4 lg:px-0'>
            Our customer service team is well-trained and educated to help you solve any issues or chase away any concerns of yours. We work 24/7 to answer any questions you might have about buying weed products or cannabis in general. We are committed to providing excellent customer service from start to finish: from ordering to delivery of your order. Let us help you navigate the world of cannabis!

          </p>
          <Heading
            text="How To Buy Weed Online On Weed.com?"
            className="!text-3xl md:!text-4xl !px-4 !mb-5 !font-semibold"
          />
          <img className='mx-auto w-full'
            src='https://weed.com/wp-content/uploads/2023/02/how-to-buy-weed-asian-woman-think-about.jpg'
          />
          <p className='py-6 px-4 lg:px-0'>
            Based in Los Angeles, Weed.com is one of the leading online cannabis stores for hemp and cannabis products and information. We provide comprehensive information about hemp, marijuana, and their potential health benefits as well as risks so that you are informed enough to make decisions about your own marijuana use. Here you are sure to find the perfect product for your needs with the finest lab results attached.

          </p>
          <p className='py-6 px-4 lg:px-0'>
            Our posts will keep you up to date on the latest trends and products. Whether you are a cannabis enthusiast, a medical marijuana patient, or looking to explore the potential health benefits of hemp and cannabis plant, you can read up on the latest cannabis legal, medical, and science news. Weed.com has the resources and information you need – and we carry more extensive medical-oriented information on our educational partner website in CannabisEdu – at Cannabis.org.

          </p>
          <p className='py-6 px-4 lg:px-0'>
            Explore our wide range of cannabis products, including hemp-derived cannabinoids such as CBD, CBG,  Delta 8, Delta 9, Delta 10, and many others. Delta 8 THC products, cannabis oil, vape carts, and many other popular products are here for you.
          </p>

        </div>

      </motion.section>

      <section className='!py-10'>
        <Swiper
          loop
          effect='fade'
          autoplay={{
            delay: 100,
            disableOnInteraction: false
          }}
          pagination={true} modules={[Pagination, Autoplay, EffectFade]} className="mySwiper">
          <SwiperSlide>
            {
              ({ isActive, isPrev }) =>
                <div
                  className='h-[min(25rem,calc(100vh-3.5rem))] lg:h-[min(600px,calc(100vh-50px))] w-full relative flex items-center justify-start'
                >
                  <img className='w-full h-full object-c absolute inset-0 -z-[1]'
                    src='https://weed.com/wp-content/uploads/2023/02/how-to-buy-weed-asian-woman-think-about.jpg'
                  />
                  <div className='space-y-6 ml-14'>
                    <h1
                      className='lg:text-6xl text-white'
                    >Dreamed in <br className='hidden lg:block' />
                      California</h1>

                    <p
                      className='text-white text-lg'
                    >Bringing the unexpected to <br className='hidden lg:block' />

                      classic timekeeping since 2013.</p>
                    <div className='flex gap-x-1 text-white items-center  hover:text-blue-600 transition duration-200 font-medium leading-wider'>
                      <a href='#' className=''>
                        READ THE MVMT STORY
                      </a>
                      {/* <RiArrowRightSFill size={25} /> */}

                    </div>
                  </div>
                </div>
            }
          </SwiperSlide>

          <SwiperSlide>
            {
              ({ isActive, isPrev }) =>
                <div
                  className='h-[min(25rem,calc(100vh-3.5rem))] lg:h-[min(600px,calc(100vh-50px))] w-full relative flex items-center justify-start'
                >
                  <img className='w-full h-full object-c absolute inset-0 -z-[1]'
                    src='https://weed.com/wp-content/uploads/2023/02/happy-black-woman-weed-love.jpg'
                  />
                  <div className='space-y-6 ml-14'>
                    <h1
                      className='lg:text-6xl text-white'
                    >Dreamed in <br className='hidden lg:block' />
                      California</h1>

                    <p
                      className='text-white text-lg'
                    >Bringing the unexpected to <br className='hidden lg:block' />

                      classic timekeeping since 2013.</p>
                    <div className='flex gap-x-1 text-white items-center  hover:text-blue-600 transition duration-200 font-medium leading-wider'>
                      <a href='#' className=''>
                        READ THE MVMT STORY
                      </a>
                      {/* <RiArrowRightSFill size={25} /> */}

                    </div>
                  </div>
                </div>
            }
          </SwiperSlide>

          <SwiperSlide>
            {
              ({ isActive, isPrev }) =>
                <div
                  className='h-[min(25rem,calc(100vh-3.5rem))] lg:h-[min(600px,calc(100vh-50px))] w-full relative flex items-center justify-start'
                >
                  <img className='w-full h-full object-c absolute inset-0 -z-[1]'
                    src='https://weed.com/wp-content/uploads/2023/02/weed-satisfaction-smoke.jpg'
                  />
                  <div className='space-y-6 ml-14'>
                    <h1
                      className='lg:text-6xl text-white'
                    >Dreamed in <br className='hidden lg:block' />
                      California</h1>

                    <p
                      className='text-white text-lg'
                    >Bringing the unexpected to <br className='hidden lg:block' />

                      classic timekeeping since 2013.</p>
                    <div className='flex gap-x-1 text-white items-center  hover:text-blue-600 transition duration-200 font-medium leading-wider'>
                      <a href='#' className=''>
                        READ THE MVMT STORY
                      </a>
                      {/* <RiArrowRightSFill size={25} /> */}

                    </div>
                  </div>
                </div>
            }
          </SwiperSlide>






        </Swiper>


      </section>

      <section className='bg-[#f7f7f7] py-24'>
        <Heading
          text="Weed.com Education!"
          className="!text-3xl md:!text-4xl !px-4 !mb-5 !font-semibold"
        />
        <p className='py-6 px-4 lg:px-0 max-w-5xl text-center mx-auto'>
          Welcome to Weed.com Education, your online resource for all things cannabis. We believe in empowering our customers with knowledge and providing them with all the necessary information. We are dedicated to educating and informing the public about the safe and responsible use of medical cannabis and recreational marijuana; its medical, legal, and scientific aspects; cannabis cultivation & marijuana product news and reviews.
        </p>
        <div className=" mx-auto max-w-6xl">
          <div
            className=' grid grid-cols-1 sm:grid-col-2 mt-10 md:lg:grid-cols-3 gap-4 lg:gap-10 mx-auto container lg:px-22'
          >
            {
              Array.from({ length: 6 }, (arr, index) => <motion.div

                initial={{ y: 40, opacity: 0.5 }}
                whileInView={{ y: 0, opacity: 1 }}
                className=' mx-5 lg:mx-0'>
                <img
                  className='w-full h-[15rem] rounded-md'
                  src='https://weed.com/wp-content/uploads/2021/07/THC-THC-O-2.jpg' />
                <Heading

                  className="!text-xl lg:!text-start"
                  text="Our Most Popular Categories"
                />
                <p
                  className='line-clamp-4'
                >

                  Did you know there is a new cannabinoid that is causing quite a buzz within the hemp community? If your guess was THC-O-acetate (THC-O), you are absolutely correct....
                </p>
                <p className='text-slate-700'>March 8, 2023</p>
              </motion.div>)

            }
          </div>
        </div>
      </section>
      <section className='py-24'>
        <Heading
          text="What others are saying about us"
          className="!text-3xl md:!text-4xl !px-4 !mb-5 !font-semibold"
        />
        <motion.p
          initial={{
            x: -200,
            y: 100,
            opacity: 0.1
          }}
          whileInView={{
            x: 0, opacity: 1, y: 0,
          }}
          transition={{ mass: 10 }}
          viewport={{ once: true }}
          className='py-6 px-4 lg:px-0 max-w-5xl text-center mx-auto'>
          Welcome to Weed.com Education, your online resource for all things cannabis. We believe in empowering our customers with knowledge and providing them with all the necessary information. We are dedicated to educating and informing the public about the safe and responsible use of medical cannabis and
        </motion.p>
        <Swiper
          loop
          // effect='fade'
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            786: {
              slidesPerView: 2.5,
            },
          }}
          autoplay={{
            delay: 1500,
            disableOnInteraction: false
          }}
          slidesPerView={1}

          pagination={true} modules={[Pagination, Autoplay]} className="mySwiper my-10">
          <SwiperSlide>
            {
              ({ isActive, isPrev }) =>
                <figure className="max-w-screen-md mx-auto text-center">
                  <svg className="w-10 h-10 mx-auto mb-3 text-gray-400 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 14">
                    <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
                  </svg>
                  <blockquote>
                    <p className="text-2xl italic font-medium  text-black ">"Flowbite is just awesome. It contains tons of predesigned components and pages starting from login screen to complex dashboard. Perfect choice for your next SaaS application."</p>
                  </blockquote>
                  <figcaption className="flex items-center justify-center mt-6 space-x-3">
                    <img className="w-6 h-6 rounded-full" src="https://weed.com/wp-content/uploads/2021/07/THC-THC-O-2.jpg" alt="profile picture" />
                    <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                      <cite className="pr-3 font-medium  text-black ">Micheal Gough</cite>
                      <cite className="pl-3 text-sm text-gray-500 dark:text-gray-400">CEO at Google</cite>
                    </div>
                  </figcaption>
                </figure>

            }
          </SwiperSlide>
          <SwiperSlide>
            {
              ({ isActive, isPrev }) =>

                <figure className="max-w-screen-md mx-auto text-center">
                  <svg className="w-10 h-10 mx-auto mb-3 text-gray-400 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 14">
                    <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
                  </svg>
                  <blockquote>
                    <p className="text-2xl italic font-medium  text-black ">"Flowbite is just awesome. It contains tons of predesigned components and pages starting from login screen to complex dashboard. Perfect choice for your next SaaS application."</p>
                  </blockquote>
                  <figcaption className="flex items-center justify-center mt-6 space-x-3">
                    <img className="w-6 h-6 rounded-full" src="https://weed.com/wp-content/uploads/2021/07/THC-THC-O-2.jpg" alt="profile picture" />
                    <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                      <cite className="pr-3 font-medium  text-black ">Micheal Gough</cite>
                      <cite className="pl-3 text-sm text-gray-500 dark:text-gray-400">CEO at Google</cite>
                    </div>
                  </figcaption>
                </figure>

            }
          </SwiperSlide>
          <SwiperSlide>
            {
              ({ isActive, isPrev }) =>

                <figure className="max-w-screen-md mx-auto text-center">
                  <svg className="w-10 h-10 mx-auto mb-3 text-gray-400 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 14">
                    <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
                  </svg>
                  <blockquote>
                    <p className="text-2xl italic font-medium  text-black ">"Flowbite is just awesome. It contains tons of predesigned components and pages starting from login screen to complex dashboard. Perfect choice for your next SaaS application."</p>
                  </blockquote>
                  <figcaption className="flex items-center justify-center mt-6 space-x-3">
                    <img className="w-6 h-6 rounded-full" src="https://weed.com/wp-content/uploads/2021/07/THC-THC-O-2.jpg" alt="profile picture" />
                    <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                      <cite className="pr-3 font-medium  text-black ">Micheal Gough</cite>
                      <cite className="pl-3 text-sm text-gray-500 dark:text-gray-400">CEO at Google</cite>
                    </div>
                  </figcaption>
                </figure>

            }
          </SwiperSlide>
          <SwiperSlide>
            {
              ({ isActive, isPrev }) =>

                <figure className="max-w-screen-md mx-auto text-center">
                  <svg className="w-10 h-10 mx-auto mb-3 text-gray-400 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 14">
                    <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
                  </svg>
                  <blockquote>
                    <p className="text-2xl italic font-medium  text-black ">"Flowbite is just awesome. It contains tons of predesigned components and pages starting from login screen to complex dashboard. Perfect choice for your next SaaS application."</p>
                  </blockquote>
                  <figcaption className="flex items-center justify-center mt-6 space-x-3">
                    <img className="w-6 h-6 rounded-full" src="https://weed.com/wp-content/uploads/2021/07/THC-THC-O-2.jpg" alt="profile picture" />
                    <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                      <cite className="pr-3 font-medium  text-black ">Micheal Gough</cite>
                      <cite className="pl-3 text-sm text-gray-500 dark:text-gray-400">CEO at Google</cite>
                    </div>
                  </figcaption>
                </figure>

            }
          </SwiperSlide>
          <SwiperSlide>
            {
              ({ isActive, isPrev }) =>

                <figure className="max-w-screen-md mx-auto text-center">
                  <svg className="w-10 h-10 mx-auto mb-3 text-gray-400 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 14">
                    <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
                  </svg>
                  <blockquote>
                    <p className="text-2xl italic font-medium  text-black ">"Flowbite is just awesome. It contains tons of predesigned components and pages starting from login screen to complex dashboard. Perfect choice for your next SaaS application."</p>
                  </blockquote>
                  <figcaption className="flex items-center justify-center mt-6 space-x-3">
                    <img className="w-6 h-6 rounded-full" src="https://weed.com/wp-content/uploads/2021/07/THC-THC-O-2.jpg" alt="profile picture" />
                    <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                      <cite className="pr-3 font-medium  text-black dark:text-white">Micheal Gough</cite>
                      <cite className="pl-3 text-sm text-gray-500 dark:text-gray-400">CEO at Google</cite>
                    </div>
                  </figcaption>
                </figure>

            }
          </SwiperSlide>








        </Swiper>
      </section>
      <div></div>

    </div>
  )
}

export default Home