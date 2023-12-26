import React from 'react'

const TrendCard = ({ title, image }) => {

    return (
        <div>
            <div className='min-w-[130px] cursor-pointer'>
                <img className='rounded-md' src={image} alt="" />
                <h2 className='text-xs my-2'>{title}</h2>
            </div>
        </div>
    )
}

export default TrendCard