import React, { useRef, useState } from 'react'
import mainbg from '../assets/images/main-bg-image.jpeg'
import AnimatedText from '../components/AnimateText'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectFade } from 'swiper/modules';
import { FiInstagram } from 'react-icons/fi'

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

const Home = () => {
  const ref = useRef(null)
  const main = useRef(null)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const mouseMove = e => {
    const { clientX, clientY } = e;
    const boxStyles = main.current.getBoundingClientRect()
    const { height, width, left, top } = ref.current.getBoundingClientRect()
    const x = clientX
    const y = clientY + (Math.abs(boxStyles.top))
    console.log(boxStyles)
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
        className='w-8 lg:block hidden
        h-8 bg-orange-900 rounded-full absolute z-[200] overflow-hidden'
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
      <motion.section
        initial={{ y: 200, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}

        className='!py-10'>
        <Heading
          className={"!font-medium !uppercase !font-bricolage !mb-10"}
          text={"the shop looks"}
        />
        <div className='lg:grid grid-cols-12 gap-2 items-stretch'>

          <div className='col-span-5 h-[min(calc(100vh-60px),25rem)]  lg:h-[min(calc(100vh-60px),32rem)]'>
            <Swiper
              loop
              autoplay={{
                delay: 1500, disableOnInteraction: false
              }}
              pagination={false}

              modules={[Pagination, Autoplay]} className="mySwiper h-full">
              <SwiperSlide>
                {
                  ({ isActive, isPrev }) =>
                    <div className='w-full h-full relative group'>
                      <img src='https://evergreenhouseshop.com/wp-content/uploads/2021/08/image_search_1629564589416-500x436.jpg'
                        className='w-full h-full'

                      />
                      <div className='flex items-center group-hover:visible
                            invisible group-hover:opacity-100 opacity-0
                            transition-all duration-300
                        justify-center bg-gray-700/75 absolute 
                        w-full inset-0 '>
                        <div>
                          <FiInstagram size={30}
                            className='mx-auto mb-3'
                            color='white'
                          />
                          <Button

                            className="capitalize text-lg"
                            title="shop now"
                          />
                        </div>
                      </div>
                    </div>
                }
              </SwiperSlide>
              <SwiperSlide>
                {
                  ({ isActive, isPrev }) =>
                    <div className='w-full h-full relative group'>
                      <img src='https://evergreenhouseshop.com/wp-content/uploads/2021/08/image_search_1629564589416-500x436.jpg'
                        className='w-full h-full'

                      />
                      <div className='flex items-center group-hover:visible
                            invisible group-hover:opacity-100 opacity-0
                            transition-all duration-300
                        justify-center bg-gray-700/75 absolute 
                        w-full inset-0 '>
                        <div>
                          <FiInstagram size={30}
                            className='mx-auto mb-3'
                            color='white'
                          />
                          <Button

                            className="capitalize text-lg"
                            title="shop now"
                          />
                        </div>
                      </div>
                    </div>
                }
              </SwiperSlide>
              <SwiperSlide>
                {
                  ({ isActive, isPrev }) =>
                    <div className='w-full h-full relative group'>
                      <img src='https://evergreenhouseshop.com/wp-content/uploads/2021/08/image_search_1629564589416-500x436.jpg'
                        className='w-full h-full'

                      />
                      <div className='flex items-center group-hover:visible
                            invisible group-hover:opacity-100 opacity-0
                            transition-all duration-300
                        justify-center bg-gray-700/75 absolute 
                        w-full inset-0 '>
                        <div>
                          <FiInstagram size={30}
                            className='mx-auto mb-3'
                            color='white'
                          />
                          <Button

                            className="capitalize text-lg"
                            title="shop now"
                          />
                        </div>
                      </div>
                    </div>
                }
              </SwiperSlide>




            </Swiper>



          </div>
          <div className='col-span-7 '>
            <div
              className='w-full h-full grid grid-cols-2 lg:grid-cols-3 gap-2'
            >
              <div className='w-full h-[calc((calc(32rem/2)-0.25rem))] relative group'>
                <img src='https://cdn-yotpo-images-production.yotpo.com/instagram/4/17979548147358104/low_resolution.jpg'
                  className='w-full h-full'

                />
                <div className='flex items-center group-hover:visible
                            invisible group-hover:opacity-100 opacity-0
                            transition-all duration-300
                        justify-center bg-gray-700/75 absolute 
                        w-full inset-0 '>
                  <div>
                    <FiInstagram size={30}
                      className='mx-auto mb-3'
                      color='white'
                    />
                    <Button

                      className="capitalize text-lg"
                      title="shop now"
                    />
                  </div>
                </div>
              </div>
              <div className='w-full h-[calc((calc(32rem/2)-0.25rem))] relative group'>
                <img src='data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4QCcRXhpZgAASUkqAAgAAAACAA4BAgBuAAAAJgAAABIBAwABAAAAAQAAAAAAAABNYWNybyBkZXRhaWwgb2YgQ2FubmFiaXMgZmxvd2VyIChzb3VyIGRpZXNlbCBzdHJhaW4pIGlzb2xhdGVkIG92ZXIgYmxhY2sgYmFja2dyb3VuZCwgbWVkaWNhbCBtYXJpanVhbmEgY29uY2VwdP/tALpQaG90b3Nob3AgMy4wADhCSU0EBAAAAAAAnRwCUAAIcmdic3BhY2UcAngAbk1hY3JvIGRldGFpbCBvZiBDYW5uYWJpcyBmbG93ZXIgKHNvdXIgZGllc2VsIHN0cmFpbikgaXNvbGF0ZWQgb3ZlciBibGFjayBiYWNrZ3JvdW5kLCBtZWRpY2FsIG1hcmlqdWFuYSBjb25jZXB0HAJuABhHZXR0eSBJbWFnZXMvaVN0b2NrcGhvdG8A/+EFcWh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8APD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyI+Cgk8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPgoJCTxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1sbnM6SXB0YzR4bXBDb3JlPSJodHRwOi8vaXB0Yy5vcmcvc3RkL0lwdGM0eG1wQ29yZS8xLjAveG1sbnMvIiAgIHhtbG5zOkdldHR5SW1hZ2VzR0lGVD0iaHR0cDovL3htcC5nZXR0eWltYWdlcy5jb20vZ2lmdC8xLjAvIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBsdXM9Imh0dHA6Ly9ucy51c2VwbHVzLm9yZy9sZGYveG1wLzEuMC8iICB4bWxuczppcHRjRXh0PSJodHRwOi8vaXB0Yy5vcmcvc3RkL0lwdGM0eG1wRXh0LzIwMDgtMDItMjkvIiB4bWxuczp4bXBSaWdodHM9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9yaWdodHMvIiBwaG90b3Nob3A6Q3JlZGl0PSJHZXR0eSBJbWFnZXMvaVN0b2NrcGhvdG8iIEdldHR5SW1hZ2VzR0lGVDpBc3NldElEPSIxMTYwODUzMTc5IiB4bXBSaWdodHM6V2ViU3RhdGVtZW50PSJodHRwczovL3d3dy5nZXR0eWltYWdlcy5jb20vZXVsYT91dG1fbWVkaXVtPW9yZ2FuaWMmYW1wO3V0bV9zb3VyY2U9Z29vZ2xlJmFtcDt1dG1fY2FtcGFpZ249aXB0Y3VybCIgPgo8ZGM6Y3JlYXRvcj48cmRmOlNlcT48cmRmOmxpPnJnYnNwYWNlPC9yZGY6bGk+PC9yZGY6U2VxPjwvZGM6Y3JlYXRvcj48ZGM6ZGVzY3JpcHRpb24+PHJkZjpBbHQ+PHJkZjpsaSB4bWw6bGFuZz0ieC1kZWZhdWx0Ij5NYWNybyBkZXRhaWwgb2YgQ2FubmFiaXMgZmxvd2VyIChzb3VyIGRpZXNlbCBzdHJhaW4pIGlzb2xhdGVkIG92ZXIgYmxhY2sgYmFja2dyb3VuZCwgbWVkaWNhbCBtYXJpanVhbmEgY29uY2VwdDwvcmRmOmxpPjwvcmRmOkFsdD48L2RjOmRlc2NyaXB0aW9uPgo8cGx1czpMaWNlbnNvcj48cmRmOlNlcT48cmRmOmxpIHJkZjpwYXJzZVR5cGU9J1Jlc291cmNlJz48cGx1czpMaWNlbnNvclVSTD5odHRwczovL3d3dy5nZXR0eWltYWdlcy5jb20vZGV0YWlsLzExNjA4NTMxNzk/dXRtX21lZGl1bT1vcmdhbmljJmFtcDt1dG1fc291cmNlPWdvb2dsZSZhbXA7dXRtX2NhbXBhaWduPWlwdGN1cmw8L3BsdXM6TGljZW5zb3JVUkw+PC9yZGY6bGk+PC9yZGY6U2VxPjwvcGx1czpMaWNlbnNvcj4KCQk8L3JkZjpEZXNjcmlwdGlvbj4KCTwvcmRmOlJERj4KPC94OnhtcG1ldGE+Cjw/eHBhY2tldCBlbmQ9InciPz4K/9sAhAAJBgcIBwYJCAcICgoJCw0WDw0MDA0bFBUQFiAdIiIgHR8f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'
                  className='w-full h-full'

                />
                <div className='flex items-center group-hover:visible
                            invisible group-hover:opacity-100 opacity-0
                            transition-all duration-300
                        justify-center bg-gray-700/75 absolute 
                        w-full inset-0 '>
                  <div>
                    <FiInstagram size={30}
                      className='mx-auto mb-3'
                      color='white'
                    />
                    <Button

                      className="capitalize text-lg"
                      title="shop now"
                    />
                  </div>
                </div>
              </div>
              <div className='w-full h-[calc((calc(32rem/2)-0.25rem))] relative group'>
                <img src='data:image/jpeg;base64,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'
                  className='w-full h-full'

                />
                <div className='flex items-center group-hover:visible
                            invisible group-hover:opacity-100 opacity-0
                            transition-all duration-300
                        justify-center bg-gray-700/75 absolute 
                        w-full inset-0 '>
                  <div>
                    <FiInstagram size={30}
                      className='mx-auto mb-3'
                      color='white'
                    />
                    <Button

                      className="capitalize text-lg"
                      title="shop now"
                    />
                  </div>
                </div>
              </div>
              <div className='w-full h-[calc((calc(32rem/2)-0.25rem))] relative group'>
                <img src='data:image/jpeg;base64,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'
                  className='w-full h-full'

                />
                <div className='flex items-center group-hover:visible
                            invisible group-hover:opacity-100 opacity-0
                            transition-all duration-300
                        justify-center bg-gray-700/75 absolute 
                        w-full inset-0 '>
                  <div>
                    <FiInstagram size={30}
                      className='mx-auto mb-3'
                      color='white'
                    />
                    <Button

                      className="capitalize text-lg"
                      title="shop now"
                    />
                  </div>
                </div>
              </div>
              <div className='w-full h-[calc((calc(32rem/2)-0.25rem))] relative group'>
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRagu87q6FmifbLjH3voEJ9L-D7gk7UbyyxdA&usqp=CAU'
                  className='w-full h-full'

                />
                <div className='flex items-center group-hover:visible
                            invisible group-hover:opacity-100 opacity-0
                            transition-all duration-300
                        justify-center bg-gray-700/75 absolute 
                        w-full inset-0 '>
                  <div>
                    <FiInstagram size={30}
                      className='mx-auto mb-3'
                      color='white'
                    />
                    <Button

                      className="capitalize text-lg"
                      title="shop now"
                    />
                  </div>
                </div>
              </div>
              <div className='w-full h-[calc((calc(32rem/2)-0.25rem))] relative group'>
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGaXZZOn1-ETjgBxFGZY7HcgpCWWVRHlaDuw&usqp=CAU'
                  className='w-full h-full'

                />
                <div className='flex items-center group-hover:visible
                            invisible group-hover:opacity-100 opacity-0
                            transition-all duration-300
                        justify-center bg-gray-700/75 absolute 
                        w-full inset-0 '>
                  <div>
                    <FiInstagram size={30}
                      className='mx-auto mb-3'
                      color='white'
                    />
                    <Button

                      className="capitalize text-lg"
                      title="shop now"
                    />
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
        <Button
          title="Load More"
          className="!block !mx-auto !my-10 !bg-transparent !text-black  !border !border-black !py-2 !px-6 !uppercase"
        />
      </motion.section>
      <section>
        <div className='py-5 font-bricolage'>
          {/* <h1 className='text-4xl lg:text-5xl text-center leading-wider tracking-tight'>Future Product</h1> */}
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
            delay: 1500,
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

                <figure class="max-w-screen-md mx-auto text-center">
                  <svg class="w-10 h-10 mx-auto mb-3 text-gray-400 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 14">
                    <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
                  </svg>
                  <blockquote>
                    <p class="text-2xl italic font-medium  text-black ">"Flowbite is just awesome. It contains tons of predesigned components and pages starting from login screen to complex dashboard. Perfect choice for your next SaaS application."</p>
                  </blockquote>
                  <figcaption class="flex items-center justify-center mt-6 space-x-3">
                    <img class="w-6 h-6 rounded-full" src="https://weed.com/wp-content/uploads/2021/07/THC-THC-O-2.jpg" alt="profile picture" />
                    <div class="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                      <cite class="pr-3 font-medium  text-black ">Micheal Gough</cite>
                      <cite class="pl-3 text-sm text-gray-500 dark:text-gray-400">CEO at Google</cite>
                    </div>
                  </figcaption>
                </figure>

            }
          </SwiperSlide>
          <SwiperSlide>
            {
              ({ isActive, isPrev }) =>

                <figure class="max-w-screen-md mx-auto text-center">
                  <svg class="w-10 h-10 mx-auto mb-3 text-gray-400 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 14">
                    <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
                  </svg>
                  <blockquote>
                    <p class="text-2xl italic font-medium  text-black ">"Flowbite is just awesome. It contains tons of predesigned components and pages starting from login screen to complex dashboard. Perfect choice for your next SaaS application."</p>
                  </blockquote>
                  <figcaption class="flex items-center justify-center mt-6 space-x-3">
                    <img class="w-6 h-6 rounded-full" src="https://weed.com/wp-content/uploads/2021/07/THC-THC-O-2.jpg" alt="profile picture" />
                    <div class="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                      <cite class="pr-3 font-medium  text-black ">Micheal Gough</cite>
                      <cite class="pl-3 text-sm text-gray-500 dark:text-gray-400">CEO at Google</cite>
                    </div>
                  </figcaption>
                </figure>

            }
          </SwiperSlide>
          <SwiperSlide>
            {
              ({ isActive, isPrev }) =>

                <figure class="max-w-screen-md mx-auto text-center">
                  <svg class="w-10 h-10 mx-auto mb-3 text-gray-400 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 14">
                    <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
                  </svg>
                  <blockquote>
                    <p class="text-2xl italic font-medium  text-black ">"Flowbite is just awesome. It contains tons of predesigned components and pages starting from login screen to complex dashboard. Perfect choice for your next SaaS application."</p>
                  </blockquote>
                  <figcaption class="flex items-center justify-center mt-6 space-x-3">
                    <img class="w-6 h-6 rounded-full" src="https://weed.com/wp-content/uploads/2021/07/THC-THC-O-2.jpg" alt="profile picture" />
                    <div class="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                      <cite class="pr-3 font-medium  text-black ">Micheal Gough</cite>
                      <cite class="pl-3 text-sm text-gray-500 dark:text-gray-400">CEO at Google</cite>
                    </div>
                  </figcaption>
                </figure>

            }
          </SwiperSlide>
          <SwiperSlide>
            {
              ({ isActive, isPrev }) =>

                <figure class="max-w-screen-md mx-auto text-center">
                  <svg class="w-10 h-10 mx-auto mb-3 text-gray-400 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 14">
                    <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
                  </svg>
                  <blockquote>
                    <p class="text-2xl italic font-medium  text-black ">"Flowbite is just awesome. It contains tons of predesigned components and pages starting from login screen to complex dashboard. Perfect choice for your next SaaS application."</p>
                  </blockquote>
                  <figcaption class="flex items-center justify-center mt-6 space-x-3">
                    <img class="w-6 h-6 rounded-full" src="https://weed.com/wp-content/uploads/2021/07/THC-THC-O-2.jpg" alt="profile picture" />
                    <div class="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                      <cite class="pr-3 font-medium  text-black ">Micheal Gough</cite>
                      <cite class="pl-3 text-sm text-gray-500 dark:text-gray-400">CEO at Google</cite>
                    </div>
                  </figcaption>
                </figure>

            }
          </SwiperSlide>
          <SwiperSlide>
            {
              ({ isActive, isPrev }) =>

                <figure class="max-w-screen-md mx-auto text-center">
                  <svg class="w-10 h-10 mx-auto mb-3 text-gray-400 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 14">
                    <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
                  </svg>
                  <blockquote>
                    <p class="text-2xl italic font-medium  text-black ">"Flowbite is just awesome. It contains tons of predesigned components and pages starting from login screen to complex dashboard. Perfect choice for your next SaaS application."</p>
                  </blockquote>
                  <figcaption class="flex items-center justify-center mt-6 space-x-3">
                    <img class="w-6 h-6 rounded-full" src="https://weed.com/wp-content/uploads/2021/07/THC-THC-O-2.jpg" alt="profile picture" />
                    <div class="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                      <cite class="pr-3 font-medium  text-black dark:text-white">Micheal Gough</cite>
                      <cite class="pl-3 text-sm text-gray-500 dark:text-gray-400">CEO at Google</cite>
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