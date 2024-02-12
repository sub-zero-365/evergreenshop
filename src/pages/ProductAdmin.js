import React, { useEffect, useMemo, useState } from 'react'
import Button from '../components/Button'
import Heading from '../components/Heading'
import InputForm from '../components/InputForm'
import Input from '../components/Input'
import { Form, Link, useActionData, useNavigation } from 'react-router-dom'
import customFetch from '../utils/customFetch'
import BrandLink from '../components/BrandLink'

import CategorySelect from '../utils/CategorySelect'


export const action = (queryClient) => async ({ request, params }) => {
    try {
        const formData = await request.formData();
        const data = Object.fromEntries(formData);
        console.log(data)
        await customFetch.post("/products/new", data)
        // if the not error invalidate products query
        console.log("this is form data", data);
        await queryClient.invalidateQueries(['products'])
        return "close"

    } catch (err) {
        console.log("this is the error", err)
        return (err?.response?.data?.msg || "something went wrong!! try again later")
    }


}


const ProductAdmin = () => {
    const navigation = useNavigation()
    const [isOpen, setIsOpen] = useState(false)
    const productscategory = useMemo(() => [
        {
            name: "Total product ",
            count: 162
        },
        {
            name: "Total product ",
            count: 162
        },
        {
            name: "Total product ",
            count: 162
        },
    ], [])
    const ProductCard = ({ name, count }) => <div
        className='bg-white shadow min-h-[5rem] rounded-lg py-4   px-3 '
    >
        <Heading
            text="Total Product "
            className="!text-lg lg:!text-xl   !text-start !m-0 !py-1"
        />

        <Heading
            text={count ?? 0}
            className="!text-lg lg:!text-xl   !text-start !m-0 !py-1"
        />

    </div>
    const errrorMessage = useActionData()
    if (errrorMessage == "close" && isOpen) {
        setIsOpen(false)
    };
    // useEffect(() => {
    // }, [errrorMessage])
    return (

        <div className='h-[calc(100vh-4rem)] flex-1 w-full overflow-y-auto scrollto [--scroll-to-width:10px]'>
            <div
                className="flex justify-between items-center px-2 py-2"
            >
                <Heading
                    className={"!text-xl !font-semibold"}
                    text="Product Inventory"
                />
                <Link
                    to="/dashboard/addproduct?rd_from=product_page"
                >
                    <Button

                        className="!rounded-xl !text-xs lg:!text-sm !px-4 lllg:hidden"
                        title="Add Product "
                    />
                </Link>
            </div>



        </div>


    )
}

export default ProductAdmin