import React from 'react'
import { Link, useSearchParams } from 'react-router-dom'

const BrandLink = ({ brand, children, className, ...props }) => {
    const [searchParams] = useSearchParams()
    const isActive = searchParams.get("brand") == brand
    return (
        <Link
            className={`${ isActive ? "bg-blue-500" : "bg-slate-400"} px-10 text-sm text-white  transition duration-500 flex-none py-2 rounded-lg  `}
            to={`?brand=${brand}`}
        >{children}</Link>
    )
}

export default BrandLink