import { SwiperSlide, Swiper } from 'swiper/react'
import { Navigation, Pagination, A11y, Autoplay, Thumbs } from "swiper/modules";
import Input from '../components/Input';
// import Form from '../components/Form';
import Button from '../components/Button';
import { useLoaderData, Form } from 'react-router-dom';
import Heading from '../components/Heading';
export const loader = ({ request }) => {
    return new URL(request.url).searchParams.get("message")
}

export async function action({ request }) {
    console.log(await request.formData())
    return null
}
const Login = () => {
    const message = useLoaderData()
    return (
        <>

            <div
                className="min-h-screen flex items-center justify-center"
            >

                <div className='flex max-w-7xl mx-auto gap-x-4' >
                    <div
                        className='flex-1 hidden lg:block'
                    >
                        <img className='h-full w-full rounded-lg shadow'
                            src='https://weed.com/wp-content/uploads/2023/02/happy-black-woman-weed-love.jpg'
                        />
                    </div>
                    <Swiper
                        direction="vertical"
                        className=" max-h-[calc(100%-10px)] h-[500px]  relative group w-[min(30rem,calc(100vw-20px))]"
                        modules={[Navigation, Pagination, Autoplay, A11y]}
                        navigation={{
                            prevEl: ".arrow__left-",
                            nextEl: ".arrow__right-",
                        }}

                    >

                        <SwiperSlide
                            className="group"
                        >
                            <Form
                                className="max-w-sm !mx-auto flex-1 group-[.swiper-slide-active]:scale-100 transition-all duration-700 scale-[0.8]"
                            >
                                <Heading
                                    text={"Register"}
                                />
                                <Input
                                    name="Full name"
                                    type="text"
                                    required
                                    autoComplete
                                    className="bg-red-400 !border-none "
                                />
                                <Input
                                    autoComplete

                                    name="email address or phone"
                                    type="text"
                                    required
                                    className="bg-red-400 !border-none "
                                />
                                <Input
                                    autoComplete
                                    name="password"
                                    type="password"
                                    className="bg-red-400 !border-none "
                                />
                                <Button
                                    title="Register"
                                    className="!mx-auto !block w-[min(400px,calc(100%-29px))] !rounded-full !pb-4 !pt-3 min-h-[40px] group-[.swiper-slide-active]:scale-100 transition-all duration-700 scale-[0.8]  translate-y-12 group-[.swiper-slide-active]:translate-y-0"
                                />
                                <div
                                    className='flex text-lg flex-wrap justify-center items-center space-x-3 mt-10'
                                >
                                    <p
                                        className="text-center "
                                    >Already have an account?</p>
                                    <div className={`arrow__right- text-[#6708c5]`}> register  here</div>
                                </div>

                            </Form>
                        </SwiperSlide>
                        <SwiperSlide
                            className="group"
                        >
                            <Form

                                method='post'
                                className="max-w-sm !mx-auto flex-1 group-[.swiper-slide-active]:scale-100 transition-all duration-700 scale-[0.8]"
                            >
                                <Heading
                                    text={"Login"}
                                />
                                <Input
                                    name="email"
                                    type="text"
                                    required
                                    className="bg-red-400 !border-none "
                                />
                                <Input
                                    name="password"
                                    type="password"
                                    className="bg-red-400 !border-none "
                                />
                                <Button
                                    title="login"
                                    className="!mx-auto !block w-[min(400px,calc(100%-29px))] !rounded-full !pb-4 !pt-3 min-h-[40px] group-[.swiper-slide-active]:scale-100 transition-all duration-700 scale-[0.8]  translate-y-12 group-[.swiper-slide-active]:translate-y-0"
                                />
                                <div
                                    className='flex text-lg flex-wrap justify-center items-center space-x-3 mt-10'
                                >
                                    <p
                                        className="text-center "
                                    >Dont have an account ?</p>
                                    <div className={`arrow__left- text-[#6708c5]`}> login here</div>
                                </div>

                            </Form>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>

        </>
    )
}

export default Login