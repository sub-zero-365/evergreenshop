import customFetch from "./customFetch";
import { redirect } from "react-router-dom";
import { toast } from 'react-toastify'

const action = (queryClient) => async ({ request, params }) => {
    try {
        const formData = await request.formData();
        const data = Object.fromEntries(formData);
        console.log("this is form data", data);
        return null
        await customFetch.post("/products/new", data)
        // this will invalidate the todos that matches this query 
        // using the exact keyword
        return null
        await queryClient.invalidateQueries({
            queryKey: ['products'],
            exact: true
        })
        return redirect("/dashboard/products")
    } catch (err) {
        console.log("this is the error", err)
        toast.error(err?.response?.data?.msg)
        return (err?.response?.data?.msg || "something went wrong!! try again later")
    }


}
export default action