import React, { Suspense } from 'react'
import customFetch from '../utils/customFetch'
import { useQueryClient } from '@tanstack/react-query'
import { Outlet, redirect, useLoaderData } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
const userQuery = {
    queryKey: ["user"],
    queryFn: async () => {
        const res = await customFetch.get("/users/current-user")
        return res.data
    }

}
export const loader = (queryClient) => async ({ request }) => {
    let params = new URLSearchParams();
    // const queryClient = useQueryClient()
    // const data = queryClient.getQueryState({ queryKey: ["post"] })
    // console.log("this is the query post here : ", data)

    try {
        return await queryClient.ensureQueryData(userQuery)
    } catch (err) {
        console.log(err)
        params.set("from", new URL(request.url).pathname);
        params.set("message", err?.response?.data?.msg);
        return redirect("/auth?" + params.toString());
    }
}

const User = () => {
    const { user } = useQuery(userQuery).data;
    console.log("this is the user", user)
    return (
        <div>
            <div>this is the user outlet</div>
            <Outlet context={{ user }} />
        </div>
    )
}

export default User