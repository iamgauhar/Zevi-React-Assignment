import React, { useEffect, useState } from 'react'
import SearchBox from '../components/SearchBox'
import ProductCard from '../components/ProductCard'
import { Filter } from 'lucide-react';
import { useAllContext } from '../context/allContext';
import { generateProducts } from '../utils/fakeProductData';
import FilterTab from '../components/FilterTab';

const Products = () => {
    const { filter, setFilter, randomProducts, setRandomProducts } = useAllContext()
    const productArray = []
    useEffect(() => {

        for (let i = 0; i < 25; i++) {
            const data = generateProducts()
            // setRandomProducts(randomProducts.push(data))
            productArray.push(data)
        }
        setRandomProducts(productArray)
    }, [])

    return (
        <div className=' px-4 sm:px-8 py-4'>
            <div className='border border-gray-400 m-auto md:w-2/5 rounded-md my-4'>
                <SearchBox />
            </div>
            <div className='flex justify-between items-center'>
                <h1 className='text-3xl my-4'>Search Results</h1>
                <Filter className=' md:hidden cursor-pointer' onClick={() => setFilter(true)} />
            </div>
            <div className='flex relative'>
                <FilterTab />
                <div className='w-full flex justify-center gap-3 flex-wrap'>
                    {
                        // randomProducts. ite
                        randomProducts?.map((el, i) => [
                            <ProductCard key={el.id} item={el} />
                        ])
                    }
                    <ProductCard />
                </div>
            </div>
        </div>
    )
}

export default Products