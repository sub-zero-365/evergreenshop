
import { useEffect, useRef } from 'react'
import { GoShare } from 'react-icons/go'
import { Link } from 'react-router-dom'
const NotificationPopUp = () => {
    const TIME_OUT = 10000

    useEffect(() => {
        const timerRef = setInterval(() => {

        }, TIME_OUT);
        return () => {
            clearInterval(timerRef)
        }
    }, [])



    const notRef = useRef(null)
    const handleCancel = () => {
        notRef.current.style.animationPlayState = "paused"
    }

    const onMouseEnter = () => {
        notRef.current.style.animationPlayState = "paused"
    }
    const onMouseLeave = () => {
        notRef.current.style.animationPlayState = "running"

    }
    return (
        <div

            onTouchStart={onMouseEnter}
            onTouchEnd={onMouseLeave}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            ref={notRef}
            to="shop?rd_from=popup"
            className='
            popup
    py-1 pb-1.5 px-2 rounded-lg shadow-xl bg-white
    top-4
    -translate-x-1/2
    left-1/2
    min-h-[50px]
    max-w-sm
    fixed
    z-[100]
    md:left-0
    top
    md:top-auto md:bottom-12
    flex 
    items-center
    md:translate-x-0
    justify-between
    w-full
    gap-x-2
    '
        >

            <div className="w-24 flex-none h-24 rounded-full ">
                <img
                    className='w-full h-full object-cover'
                    src='https://evergreenhouseshop.com/wp-content/uploads/2021/07/WhatsApp-Image-2021-10-28-at-14.44.56.jpeg'
                />
            </div>
            <div className="text flex-1 mb-2">
                <h4
                    className='font-bold'
                >rose mary</h4>
                <p
                    className='text-xs md:text-sm'
                >Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div
                onClick={handleCancel}
                className='flex-none grid place-items-center max-w-[40px] h-[40px] w-full '>
                <GoShare
                    size={25} />
            </div>

        </div>

    )
}

export default NotificationPopUp