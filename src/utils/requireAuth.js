import { redirect, defer } from "react-router-dom"
const loginUser = async (status) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (status) {
                return resolve("user  is valided")
            }
            return reject("something went wrong")
        }, 4000);
    })
}
export default async function requireAurthed(request) {
    const isLoggedIn = false
    return loginUser(isLoggedIn).then(() => {
        return defer({
            isLoggedIn
        });
    }).catch(() => {
        // throw new Error("some thing went worng")
        throw redirect("/auth?message=please login to accessed this protected route&age=y4y")
    })

}