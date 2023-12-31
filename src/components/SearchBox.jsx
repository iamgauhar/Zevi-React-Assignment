import React from 'react'
import { Search } from 'lucide-react';
import { useAllContext } from '../context/allContext';
const SearchBox = () => {
    const { setIsFocused } = useAllContext()
    return (
        <div className='flex justify-center'>
            <div className='flex justify-between items-center rounded-xl bg-white px-4 w-full'>

                <div className='w-full'>
                    <input className='w-full h-full py-2 outline-none' onFocus={() => setIsFocused(true)} onBlur={() => {
                        // Not getting solution to hide trend tab and to handle click event
                        // This is the temperory solution
                        setTimeout(() => {
                            setIsFocused(false)
                        }, 400);
                    }} type="search" placeholder='Search' />
                </div>
                <div>
                    <Search className='text-slate-400' />
                </div>
            </div>
        </div>
    )
}

export default SearchBox