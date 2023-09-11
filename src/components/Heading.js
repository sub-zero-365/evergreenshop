import React from 'react'

const Heading = ({ text,children, className}) => {
    return (
            <h1 className={`${className} py-3 font-bricolage text-4xl lg:text-5xl text-center leading-wider tracking-tight`}>{children ?? text} </h1>
    )
}

export default Heading