import { redirect, defer } from "react-router-dom"
import customFetch from "./customFetch";

export default async function requireAurthed({ request }) {
    let params = new URLSearchParams();
    try {
        await customFetch.get("/users/current-user")
        return null
    } catch (err) {
        params.set("from", new URL(request.url).pathname);
        params.set("message", err?.response?.data?.msg);
        return redirect("/auth?" + params.toString());
    }


}