import React, { useState } from 'react'
import { Outlet, useNavigation } from 'react-router-dom'
import NavBar from './NavBar'
import SideBar from './SideBar'
import useToggleCartSlider from '../utils/useToggleCartSlider'
import CartModal from './CartModal'
import NotificationPopUp from './NotificationPopup'
import GreetingModal from './GreetingModal'
import Footer from './Footer'
import NavFooter from './NavFooter'
import ScrollTop from '../WithRouter'

const RootElement = () => {
    const { state } = useNavigation()
    const { isOpen: active } = useToggleCartSlider()
    const [isOpen, setIsOpen] = useState(false)
    return (
        <>
            <GreetingModal />
            {/* <NotificationPopUp /> */}
            <CartModal />
            <ScrollTop />
            <NavBar
                isOpen={isOpen}
                setIsOpen={setIsOpen}
            />
            <SideBar
                isOpen={isOpen}
                setIsOpen={setIsOpen}
            />
            {/* {
                state == "loading" ? "loading please wait " :
                    <Outlet />
            } */}
            <Outlet />
            <NavFooter />
            <Footer />
        </>
    )
}

export default RootElement