import React from 'react'
import { forwardRef } from 'react'
const Button = forwardRef(({className, title,
  ...props

}, ref) => {
  return (
    <button
      {
      ...props
      }
      ref={ref}
      className={
        `
                ${className}
                border-transparent
                mb-1
                mt-0.5
                cursor-pointer
                text-white
                shadow 
                rounded-sm 
                outline-none
                border-none-
                px-10
                py-1.5
                pb-2
                bg-blue-700
                hover:bg-blue-800
                focus:bg-blue-800
                
                `
      }
      // onClick={onClick}
    >
      {title}
    </button>
  )
})
export const ButtonDanger = ({ onClick, className, title }) => {

  return (
    <button
      className={
        `
            ${className}
            mb-1
                mt-0.5
            cursor-pointer
            text-white
            shadow 
            rounded-sm 
            outline-none
            border-none 
            px-10
            py-1.5
            pb-2
            bg-rose-700
            hover:bg-rose-800
            focus:bg-rose-800
            
            `
      }
      onClick={onClick}
    >
      {title}
    </button>
  )
}
export default Button