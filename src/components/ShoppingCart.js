import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { addToCart, removeFromCart, increaseItem, decreaseItem } from '../actions/cartItems'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
export default function ShoppingCart({ id = 1, total, price, productname }) {
    const dispatch = useDispatch()

    const incrementCounter = (id) => {
        dispatch(increaseItem(id))
    }
    const decrementCounter = (id) => {
        dispatch(decreaseItem(id))
    }
    return (
        <motion.div
            key={`${id}-${productname}-${price}`}
            initail={false}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ scale: 0.5, opacity: 0 }}
            className='border-[0.0925rem] border-[#e8e8e8]   w-full py-4 px-2 md:px-2.5 lg:px-3'
        >
            <div
                className='flex w-full h-full justify-between items-center'
            >

                <div
                    className='flex items-center'
                >
                    <img
                        className='w-20'
                        src='https://evergreenhouseshop.com/wp-content/uploads/2021/08/image_search_1629557120822.jpg'
                    />
                    <div
                        className='flex text-start flex-col gap-y-1 items-center- justify-center-'
                    >
                        <h3
                            className='uppercase line-clamp-2 text-xl mb-1 font-bold text-black'
                        >{productname || "n/a"}</h3>
                        <p
                            className='font-medium lg:hidden  uppercase leading-tight text-gray-500 text-sm'
                        >
                            ${price * total}
                        </p>
                        <p
                            className='font-medium -mt-0.5 uppercase text-black leading-tight text-sm'
                        >
                            color:gilden green
                        </p>
                        <span
                            onClick={() => dispatch(removeFromCart(id))}
                            className='text-rose-700 cursor-pointer uppercase text-xs font-medium lg:hidden '
                        >
                            remove
                        </span>
                    </div>

                </div>
                <div
                    className='flex items-center space-x-5 lg:px-12'
                >
                    <div
                        className='flex border space-x-3  items-center  px-4 py-1.5 rounded-full   '
                    >
                        <span>

                            <AiOutlineMinus
                                onClick={() => decrementCounter(id)}
                                size={16}
                            />
                        </span>
                        <span>{total}</span>
                        <span>
                            <AiOutlinePlus
                                onClick={() => incrementCounter(id)}

                                size={16}
                            />
                        </span>
                    </div>
                    <p
                        className='font-medium hidden lg:block uppercase leading-tight text-gray-500 text-sm'
                    >
                        ${price * total}
                    </p>
                    <span
                        onClick={() => dispatch(removeFromCart(id))}
                        className='text-rose-700 uppercase cursor-pointer text-xs font-medium hidden lg:block '
                    >
                        remove
                    </span>

                </div>
            </div>
        </motion.div>
    )
}
