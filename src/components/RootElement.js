import React, { useEffect, useState } from 'react'
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


const RootElement = ({ queryClient }) => {
    const [isOpen, setIsOpen] = useState(false)
    console.log("this is the fetching state of the application", queryClient.isFetching())
    return (
        <>
            <GreetingModal />
            <CartModal />
            <ScrollTop />
            <NavBar
                queryClient={queryClient}
                isOpen={isOpen}
                setIsOpen={setIsOpen}
            />
            <SideBar
                isOpen={isOpen}
                setIsOpen={setIsOpen}
            />
         
            <Outlet />
            <NavFooter />
            <Footer />
        </>
    )
}

export default RootElement