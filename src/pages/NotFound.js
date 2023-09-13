import React from 'react'
import Heading from '../components/Heading'
import Button from '../components/Button'
import { Link } from 'react-router-dom'

const NotFound = () => {
    return (
        <div>
            <div className='max-w-4xl mx-auto'>
                <img
                    className='mx-auto'
                    src='https://flowbite.s3.amazonaws.com/blocks/marketing-ui/404/404-computer.svg'
                />
                <Heading
                    text="404 Not Found"
                    className="!font-semibold"
                />
                <Heading
                    text="Whoops! That page doesn’t exist."
                    className="!font-semibold"
                />
                <div className='flex  justify-center items-center  gap-x-4  flex-wrap'>
                    <Link
                        to="/"
                    >
                        <Button className="rounded-3xl !py-3.5 translate-y-[0.2rem] hover:translate-y-0 duration-300 transition-[transform]"
                            title="Home"
                        />
                    </Link>
                    <Button className="rounded-3xl !py-3.5 translate-y-[0.2rem] hover:translate-y-0 duration-300 transition-[transform]"
                        title="Contact Us"
                    />
                </div>
            </div>
        </div>
    )
}

export default NotFound