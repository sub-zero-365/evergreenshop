import React from 'react'
import { useNavigate, useRouteError } from 'react-router-dom'
import Button from './Button'

const ErrorElement = () => {
    const error = useRouteError()
    const navigate = useNavigate()
    console.log(error)
    return (
        <div>something bad happened try again later : {error?.message}

            <Button
                title="go back"
                className="!block !w-[min(400px,calc(100%-30px))]  hover:!bg-blue-400
!rounded-full !bg-black !text-xs !py-4  md:!text-sm !mx-auto
"
                onClick={e => {
                    navigate(-1)
                }}
            />
        </div>
    )
}

export default ErrorElement