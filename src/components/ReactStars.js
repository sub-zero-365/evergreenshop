import React, { useState } from 'react'
import ReactStars_ from 'react-rating-stars-component'

const ReactStars = ({ name }) => {
    const [value, setValue] = useState(3)
    return (
        <>
            <input
                name={name ?? "product_stars"}
                value={value}
                type='hidden'
            />
            <ReactStars_
                name="reactstars"
                onChange={(e) => setValue(e)}
                count={5}
                size={24}
                activeColor="#ffd700"
                edit
                value={3}
            />
        </>
    )
}

export default ReactStars