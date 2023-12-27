import React from 'react'
import SearchBox from '../components/SearchBox'
import ProductCard from '../components/ProductCard'

const Products = () => {
    return (
        <div>
            <div className='border border-gray-400 m-auto w-2/5 rounded-md my-6'>
                <SearchBox />
            </div>
            <div>
                <ProductCard />
            </div>
        </div>
    )
}

export default Products