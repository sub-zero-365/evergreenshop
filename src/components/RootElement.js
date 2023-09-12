import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from './NavBar'
import SideBar from './SideBar'
import useToggleCartSlider from '../utils/useToggleCartSlider'
import CartModal from './CartModal'
import NotificationPopUp from './NotificationPopup'
import GreetingModal from './GreetingModal'
import Footer from './Footer'

const RootElement = () => {
    const { isOpen: active } = useToggleCartSlider()
    const [isOpen, setIsOpen] = useState(false)
    return (
        <>
            <GreetingModal />
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
            <Footer />
        </>
    )
}

export default RootElement