
import Heading from '../components/Heading'
import Button from '../components/Button'
import Accordians from "../components/Accordians"
import { motion } from "framer-motion"
const Strains = () => {
    return (
        <div>
            <div
                className="bg-[#ebebeb] py-14 "
            >
                <Heading
                    text="Strains"
                    className="!font-bold !text-3xl lg:!text-[2.755rem]"
                />
            </div>

            <section className="bg-white py-10">
                <div className="flex flex-col lg:flex-row items-start space-x-4 max-w-6xl mx-auto">
                    <div className="flex-none   lg:w-[min(18rem,100%)] px-2">
                        <Heading
                            text="Filter"
                            className="!text-lg !font-semibold !text-start !pl-1 !border-b !pb-2"
                        />

                        <Accordians
                            text="Effects"
                            show={true}
                        >
                            this is an accordians in react js
                            Company hrhhrrhujh hjoidhioad
                            Company hrhhrrhujh hjoidhioad
                            Company hrhhrrhujh hjoidhioad
                            Company hrhhrrhujh hjoidhioad
                            Company hrhhrrhujh hjoidhioad
                        </Accordians>
                        <Accordians
                            text="Effects"
                        >
                            this is an accordians in react js
                            Company hrhhrrhujh hjoidhioad
                            Company hrhhrrhujh hjoidhioad
                            Company hrhhrrhujh hjoidhioad
                            Company hrhhrrhujh hjoidhioad
                            Company hrhhrrhujh hjoidhioad
                        </Accordians>
                        <Accordians
                            text="Effects"
                        >
                            this is an accordians in react js
                            Company hrhhrrhujh hjoidhioad
                            Company hrhhrrhujh hjoidhioad
                            Company hrhhrrhujh hjoidhioad
                            Company hrhhrrhujh hjoidhioad
                            Company hrhhrrhujh hjoidhioad
                        </Accordians>
                        <Accordians
                            text="Effects"
                        >
                            this is an accordians in react js
                            Company hrhhrrhujh hjoidhioad
                            Company hrhhrrhujh hjoidhioad
                            Company hrhhrrhujh hjoidhioad
                            Company hrhhrrhujh hjoidhioad
                            Company hrhhrrhujh hjoidhioad
                        </Accordians>
                        <Accordians
                            text="Effects mariacoders"
                        >
                            this is an accordians in react js
                            Company hrhhrrhujh hjoidhioad
                            Company hrhhrrhujh hjoidhioad
                            Company hrhhrrhujh hjoidhioad
                            Company hrhhrrhujh hjoidhioad
                            Company hrhhrrhujh hjoidhioad
                        </Accordians>
                        <Accordians
                            text="Effects of void "
                        >
                            this is an accordians in react js
                            Company hrhhrrhujh hjoidhioad
                            Company hrhhrrhujh hjoidhioad
                            Company hrhhrrhujh hjoidhioad
                            Company hrhhrrhujh hjoidhioad
                            Company hrhhrrhujh hjoidhioad
                        </Accordians>
                    </div>
                    <div className="flex-1">
                        <div
                            className="flex items-stretch space-x-2 px-2"
                        >
                            <input
                                placeHolder="Search for strains"
                                className="flex-1 border-[#ebebeb] border rounded-sm min-h-[3rem] pl-2 outline-none hove:outline-none"
                            />
                            <Button
                                className="!flex-none !px-4 !mb-0"
                                title="Find Strains"
                            />

                        </div>
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
                                        src='https://weed.com/wp-content/uploads/2023/06/%E2%80%9888-G13-Hashplant-strain-360x360.jpg' />
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
                </div>
            </section>
        </div>
    )
}

export default Strains