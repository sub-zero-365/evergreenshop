import React from 'react'
import { useLoaderData } from 'react-router-dom'
import Heading from '../components/Heading'


export const loader = ({ params }) => {
    return params.id

}
const ProductCategory = () => {
    const productdata = useLoaderData()
    return (
        <div>
            <div
                className='min-h-[20rem] lg:min-h-[18rem] relative py-10 mb-24'
            >
                <div className='relative z-[1]'>
                    <Heading
                        text={productdata ?? ""}
                        className={"!text-white !font-black"}
                    />
                    <p className='max-w-3xl mx-auto text-center px-4 lg:px-0 text-white text-lg leading-tight font-medium'>
                        Discover a wide selection of quality hemp and cannabis flower and pre-rolls at Weed.com. Choose from a variety of strains and Cannabinoids, including Delta 8 THC, Delta 9, HHC flower, THC-O flower, THCA, Hemp CBD flower, and more. For convenience, explore our selection of pre-rolled joints and blunts. For an unforgettable experience, try our Asteroids & Moon Rocks. Soon we will also offer Delta 9 THC flower and cannabis pre-rolls, so stay tuned! Shop our accessories for  the perfect grinder to go with your flower and the perfect lighter for those pre-rolls and enjoy! Shop Weed.com…& Enjoy!
                    </p>
                </div>
                <img
                    className='w-full h-full absolute inset-0 -z-[1]'
                    src='https://weed.com/wp-content/uploads/cache/thumbs_1920x360/459177_weed-flowers-cannabis-pre-rolls.jpg' />
            </div>
        </div>
    )
}

export default ProductCategory