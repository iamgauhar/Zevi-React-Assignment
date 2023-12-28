import React from 'react'
import TrendCard from './TrendCard'
import { Link } from 'react-router-dom'

const LatestTrends = () => {

    // Just created dummy JSON data to show on trends tab
    const products = [
        {
            id: 1,
            title: "Shirt with puffed sleeves",
            image: "https://images.pexels.com/photos/19537359/pexels-photo-19537359/free-photo-of-portrait-of-woman-in-traditional-clothing.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        },
        {
            id: 2,
            title: "Linen jumpsuit",
            image: "https://images.pexels.com/photos/19531932/pexels-photo-19531932/free-photo-of-young-elegant-woman-in-a-white-dress.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        },
        {
            id: 3,
            title: "White formal suit",
            image: "https://images.pexels.com/photos/19522523/pexels-photo-19522523/free-photo-of-woman-wearing-a-scarf.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        },
        {
            id: 4,
            title: "Pattern dresses",
            image: "https://images.pexels.com/photos/19522873/pexels-photo-19522873/free-photo-of-woman-wearing-hoodie-on-winter-day.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        },
        {
            id: 5,
            title: "Leather shirt dress",
            image: "https://images.pexels.com/photos/19401641/pexels-photo-19401641/free-photo-of-young-woman-posing-in-traditional-clothing.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        },
    ]
    return (
        <div className='flex justify-center mt-4'>
            <div className='w-11/12 bg-white rounded-sm p-6 shadow-lg md:w-8/12'>

                <div>
                    <div><h1 className=' text-lg font-semibold'>Latest Trends</h1></div>
                    <div className='flex gap-6 my-2 overflow-auto'>
                        {
                            products.map((el) => {
                                return <TrendCard title={el.title} image={el.image} key={el.id} />
                            })
                        }
                    </div>
                </div>
                <div>
                    <div><h1 className='font-semibold py-4 text-lg'>Popular suggestions</h1></div>
                    <div>
                        {
                            products.map((el, i) => {
                                return <Link to='/products'><p key={i} className='text-sm cursor-pointer'>{el.title}</p></Link>
                            })
                        }
                    </div>
                </div>

            </div>
        </div>
    )
}

export default LatestTrends