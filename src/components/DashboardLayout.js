import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Dashboardsidebar from '../pages/Dashboardsidebar'
import Dashboardheader from './Dashboardheader'
const DashboardLayout = () => {
    const [isOpen, setIsOpen] = useState(false)
    const open = () => setIsOpen(true)
    const close = () => setIsOpen(false)
    return (
        <>
            <Dashboardheader
                open={open}
                close={close}
            />
            <div
                className='flex bg-[#fafbfc] '
            >
                <div className='flex-none'>
                    <Dashboardsidebar
                        isOpen={isOpen}
                        close={close}
                    />
                </div>
                    <Outlet 
                    />
            </div>

        </>
    )
}

export default DashboardLayout