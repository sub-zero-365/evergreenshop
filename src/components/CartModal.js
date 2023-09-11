
import React, { useEffect } from 'react'
import Slider from './Slider'
import useToggleCartSlider from '../utils/useToggleCartSlider'
import { AnimatePresence, motion, useAnimate } from 'framer-motion'
import Button from './Button'
import Heading from './Heading'
import { AiOutlineClose } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'
import ShoppingCart from './ShoppingCart'
import { data } from '../constants/demoData'
import { useSelector, useDispatch } from 'react-redux'
import { calculateTotal, clearCart } from '../actions/cartItems'

const variants = {
    "show": {
        opacity: 1
        , y: 0
        ,
        transition: {
            duration: 1
        }
    },
    "hidden": {
        opacity: 0,
        y: 200

    }
}
const CartModal = () => {
    const { isOpen: active, close } = useToggleCartSlider()

    const { cartItem, amount, total } = useSelector(state => state.cartItems)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(calculateTotal())
    }, [cartItem, amount])
    const iscartempty = cartItem?.length > 0
    const navigate = useNavigate()
    
    const EmptyCart = () => {
        const navigate = useNavigate()
        return (
            <motion.div
                animate="show"
                initial="hidden"
                variants={variants}
                className=' w-full  h-full  flex-none'>
                <img
                    src='https://media.tenor.com/xzM6oRwPFrMAAAAj/rolling-jackass.gif'
                    className='mx-auto block'
                />
                <h1 className='text-lg text-center py-10  '>
                    Your Card is empty
                </h1>
                <Button
                    className="mx-auto block !w-[min(400px,calc(100%-20px))]  !bg-black !py-3.5 !rounded-full "
                    onClick={() => {
                        close()
                        navigate("/")
                    }}
                    title="go to store"
                />
            </motion.div>
        )
    }

    return (
        <>
            <Slider className2="!w-[min(40rem,calc(100%-3rem))] overflow-hidden !z-[100]"
                active={active}
                setActive={close}
            >
                <div
                    className='flex h-full w-full flex-col justify-between '
                >
                    <div className='flex items-center justify-between flex-none px-2 py-2 shadow '>
                        <div
                            className=' p-1.5 rounded-full  hover:bg-slate-400 transition duration-500'
                        >
                            <AiOutlineClose
                                className='text-rose-500 font-bold'
                                onClick={() => close()}
                                size={26}
                            />

                        </div>
                        <Heading
                            className="!text-2xl !flex-1"
                        >
                            Cart Items
                        </Heading>
                        {
                            iscartempty && <Button
                                onClick={() => dispatch(clearCart())}
                                title="clear items "
                                className="!px-2.5 !text-xs rounded-full !bg-rose-900 !py-2.5"
                            />
                        }

                    </div>
                    <div className='overflow-auto flex-1'>
                        {/* main screen here  */}
                        {/* <EmptyCart /> */}

                        {
                            iscartempty ?
                                cartItem.map((arr, index) => {
                                    return (
                                        <ShoppingCart key={index}
                                            {...arr}
                                        />
                                    )
                                }) : <EmptyCart />

                        }

                    </div>
                    <AnimatePresence>
                        {

                            iscartempty && <motion.div
                                key="somerandonidhere"

                                initial={{ y: 0, opacity: 1 }}
                                exit={{ opacity: 0, y: 200 }}

                                className="items-center bg-white
w-full md:flex- md:max-w-3xl md:rounded-lg mx-auto fixed-- -bg-white rounded-t-2xl py-4 pb-0 min-h-[100px] shadow-2xl  ">
                                <div className="flex items-center justify-between px-4 mb-6 md:gap-10 flex-none" >
                                    <h1 className="text-black text-xl font-semibold md:mb-4">Total</h1>
                                    <h1 className="text-3xl  font-medium  tracking-tight italic">${amount}</h1>
                                </div>

                                <Button title="Place Order"
                                    onClick={() => {
                                        // navigate("/shopping-bag")
                                        close()
                                    }}
                                    className="
!w-[min(400px,calc(100%-40px))] 
!rounded-full
block mx-auto
!bg-black hover:!bg-white 
hover:!text-black 
hover:!border-black
hover:!border-2
!border-2
!mb-5
transition-colors
focus:!border-2
focus:!border-black
duration-500
!pt-3 !pb-3.5
"
                                />

                            </motion.div>
                        }

                    </AnimatePresence>
                </div>
            </Slider>

        </>
    )
}

export default CartModal