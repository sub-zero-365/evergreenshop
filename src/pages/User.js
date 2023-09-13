import React, { Suspense } from 'react'
import { Await, useLoaderData } from 'react-router-dom'


const User = () => {
    const data = useLoaderData()
    return (
        <main>
            <h1>Let's locate your package {JSON.stringify(data)}</h1>
            <React.Suspense
                fallback={<p>Loading package location...</p>}
            >
                <Await
                    resolve={data.isLoggedIn}
                    errorElement={
                        <p className=''>Error loading package location!</p>
                    }
                >
                    {(isLoggedIn) => (
                        <p>
                            Your package is at
                            lat and  long.
                        </p>
                    )}
                </Await>
            </React.Suspense>
        </main>
    )
}

export default User