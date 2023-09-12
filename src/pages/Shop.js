import React from 'react'
import Heading from '../components/Heading'
import { data } from '../constants/demoData'
import ProductCart from '../components/ProductCart'
import { motion } from "framer-motion"
const Shop = () => {
    return (
        <div>
            <div
                className='min-h-[20rem] lg:min-h-[18rem] relative py-10 mb-24'
            >
                <div className='relative z-[1]'>
                    <Heading
                        text="Buy Weed Online
            "
                        className={"!text-white !font-black"}
                    />
                    <p className='max-w-3xl mx-auto text-center px-4 lg:px-0 text-white text-lg leading-tight font-medium'>
                        Your go-to source for CBD, THC, and other cannabis-related products and information. Our mission is to provide many people worldwide with safe and legal access to cannabis products and information. Buy weed online with weed.com – you will not be disappointed!
                    </p>
                </div>
                <img
                    className='w-full h-full absolute inset-0 -z-[1]'
                    src='https://weed.com/wp-content/uploads/cache/thumbs_1920x360/459862_shop-weed-online.jpg' />
            </div>

            <Heading text="Our Products" />
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
            <Heading
                text="Our Most Popular Categories"
            />
            <p className='text-center'>Choose from our growing selection of more than 900+ cannabis products.</p>
            <div
                className='grid grid-cols-1 sm:grid-col-2 mt-10 md:lg:grid-cols-3 gap-4 lg:gap-10 mx-auto container lg:px-22'
            >
                {
                    Array.from({ length: 6 }, (arr, index) => <motion.div

                        initial={{ y: 40, opacity: 0.5 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        className=' mx-5 lg:mx-0'>
                        <img
                            className='w-full h-[15rem]'
                            src='https://weed.com/wp-content/uploads/cache/thumbs_360x270/460875_flower-weed-buy-now.jpg' />
                        <Heading

                            className="!text-xl"
                            text="Our Most Popular Categories"
                        />
                    </motion.div>)

                }
            </div>
        </div>
    )
}

export default Shop