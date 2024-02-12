import React from 'react'
import { AiOutlineMenu } from 'react-icons/ai'
import Button from './Button'
import { Link, useNavigate } from 'react-router-dom'
import Heading from './Heading'
import customFetch from '../utils/customFetch'
import { CiLogout } from "react-icons/ci"
import { useQueryClient } from '@tanstack/react-query'
const Dashboardheader = ({ close, open }) => {
    const navigate = useNavigate()
    const queryClient = useQueryClient()
    const handleLogOut = async () => {
        await customFetch("/auth/logout").then(() => {
            navigate("/")
            queryClient.removeQueries({ queryKey: ["user"] })
        })
    }
    return (
        <div className='py-3 px-2 sticky left-0 w-full bg-white z-50 right-0 min-h-[4rem] top-0  lg:px-20 shadow '>
            <div className='flex justify-between items-stretch lg:items-center gap-x-2 '>
                <Link to="/"

                    className='hidden lg:block'
                >

                    <Heading
                        className={"uppercase !text-xl !py-0"}

                        text={"Dashboard"}
                    />
                </Link>

                <div className='grid place-items-center'>
                    <AiOutlineMenu className='lg:hidden'
                        onClick={open}
                        size={25}
                    />
                </div>
                <div
                    className={` bg-[#f7f7f7] flex-1 max-w-4xl  lg:px-24 px-4 ${true ? "visible pointer-events-auto opacity-100" : "invsible pointer-events-none opacity-0"} duration-700 transition-all left-0  right-0 py-  rounded-lg border top-full  bg-white`}
                >
                    <form
                        onSubmit={e => {
                            e.preventDefault()
                            // setToggle(false)
                            // setText("")
                            // navigate(`/product-category/${text || "no"}?search=${text}&rd_from=${path}`)
                        }}
                        className='form-group flex-1   '>

                        <input required


                            placeholder='Search For Products ...'
                            className='w-full flex-1 outline-none   px-4  min-h-[40px] rounded-lg text-xs lg:text-sm '
                        />
                    </form>
                </div>
                <div className='flex gap-1 items-stretch'>

                    <Button
                        onClick={handleLogOut}
                        // title="logout"
                        className="!text-xs flex items-center gap-x-2 !px-4 rounded-full !my-1 !bg-red-700 hover:!bg-red-950 !transition duration-700"
                    >

                        <CiLogout />
                        <p>
                            logout
                        </p>
                    </Button>
                    <Link to={"/"}>
                        <Button
                            title="view site"
                            className="!text-xs hidden md:block  !px-4 rounded-full !my-1 !bg-blue-700 hover:!bg-blue-950 !transition duration-700"
                        />
                    </Link>

                </div>

            </div>
        </div>
    )
}

export default Dashboardheader