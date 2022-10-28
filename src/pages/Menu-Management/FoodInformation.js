import React from 'react'

const FoodInformation = ({ foodInfo }) => {
    return (
        <>
            <div>
                {foodInfo.name}
                {foodInfo.description}
            </div>
            <h1>{console.table(foodInfo)}</h1>
            {/* <div key={foodInfo.name}>
                {foodInfo.name}
            </div> */}
        </>
    )
}

export default FoodInformation
