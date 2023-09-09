import { useLoaderData } from "react-router-dom"
import { data } from "../constants/demoData"

export const loader = ({ params }) => {
    const isProduct = data.find((elm) => elm.id == params.id)
    if (!isProduct) throw new Error("no items with id")
    return isProduct

}

const Product = () => {
    const data = useLoaderData()
    return (
        <div>Product
            {data.productname}
        </div>
    )
}

export default Product