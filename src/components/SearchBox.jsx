import React from 'react'
import { Search } from 'lucide-react';
const SearchBox = () => {
    return (
        <div className='flex justify-center'>
            <div className='flex justify-between items-center rounded-xl bg-white shadow-sm px-4 w-3/5'>
                <div className='w-full'>
                    <input className='w-full py-4 outline-none' type="search" placeholder='Search' />
                </div>
                <div>
                    <Search className='text-slate-400' />
                </div>
            </div>
        </div>
    )
}

export default SearchBox