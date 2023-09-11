import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from './NavBar'
import SideBar from './SideBar'
import useToggleCartSlider from '../utils/useToggleCartSlider'
import CartModal from './CartModal'
import NotificationPopUp from './NotificationPopup'

const RootElement = () => {
    const { isOpen: active } = useToggleCartSlider()
    const [isOpen, setIsOpen] = useState(false)
    return (
        <>
            <NotificationPopUp />
            <CartModal />
            <NavBar
                isOpen={isOpen}
                setIsOpen={setIsOpen}
            />
            <SideBar
                isOpen={isOpen}
                setIsOpen={setIsOpen}
            />
            <Outlet />
        </>
    )
}

export default RootElement