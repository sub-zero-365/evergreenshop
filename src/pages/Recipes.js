
import Heading from '../components/Heading'
import {motion} from "framer-motion"
const Recipes = () => {
    return (
        <div>
            <Heading
                className="!text-3xl lg:!text-4xl !my-5 !font-semibold !text-center"
                text="Recipes"
            />
   <div
                            className=' grid grid-cols-1 sm:grid-cols-2 mt-10 md:lg:grid-cols-3 gap-4 lg:gap-10 mx-auto container lg:px-22'
                        >
                            {
                                Array.from({ length: 6 }, (arr, index) => <motion.div

                                    initial={{ y: 40, opacity: 0.5 }}
                                    whileInView={{ y: 0, opacity: 1 }}
                                    className=' mx-5 lg:mx-0'>
                                    <img
                                        className='w-full h-[15rem] rounded-md'
                                        src='https://weed.com/wp-content/uploads/2023/09/Pie-Purple-9.png' />
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
    )
}

export default Recipes