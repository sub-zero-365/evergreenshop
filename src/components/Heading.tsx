import { cn } from '@/lib/utils'
import React from 'react'
type Props = {
    className?: String,
    text?: string,
    children?: React.ReactNode
}
const Heading = ({ text, children, className }: Props) => {
    return (
        <h1 className={cn(` py-3 font-bricolage text-4xl lg:text-5xl text-center leading-wider tracking-tight`, className)}>{children ?? text} </h1>
    )
}

export default Heading