
import { useQuery } from "@tanstack/react-query"
import customFetch from "../utils/customFetch"
const productQuery = (params = {}) => {
    console.log("this is params ", params)
    return {
        queryKey: ["products", {
            ...params
        }],
        queryFn: async () => {
            console.log("params in the queryfunction", params)
            const { data } = await customFetch.get(`/products`, {
                params: {
                    ...params
                }
            });
            return data;
        },
    }

}
const useProduct = (params) => {
    const { data, isLoading } = useQuery(productQuery({ ...params }))
    var products = null, nHits = null
    if (!isLoading) {
        products = data.products
        nHits = data.nHits
    }

    return (
        {
            products,
            nHits
        }
    )
}

export default useProduct