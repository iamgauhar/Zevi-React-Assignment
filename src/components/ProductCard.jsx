import React from 'react'
import { Star, Heart } from 'lucide-react';

const ProductCard = () => {
    const rate = 4
    return (
        <div className='p-2'>
            <div className='w-[190px] group cursor-pointer '>
                <div className='relative overflow-hidden '>
                    <img className='w-full h-full object-cover' src="https://images.pexels.com/photos/19531932/pexels-photo-19531932/free-photo-of-young-elegant-woman-in-a-white-dress.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
                    <div className='absolute group-hover:bottom-0 w-full bg-indigo-400 opacity-80 z-10 transition-all duration-500 ease-in-out'>
                        <button className=' text-white text-center w-full p-2 z-40'>View Product</button>
                    </div>
                    <div className='absolute top-1 right-1'>
                        <Heart className='text-white' />
                    </div>
                </div>
                <div>
                    <h3 className='pt-1'>young-elegant-woman</h3>
                    <p className='pt-1'><strike className="text-gray-400">Rs. 999</strike> <span className='font-semibold text-indigo-400' >Rs. 499</span></p>
                    <div className='flex gap-1 items-center py-1'>
                        <div className='flex gap-1 items-center'>
                            <Star className='text-amber-400 h-4 w-4' fill='#FFD700' />
                            <Star className='text-amber-400 h-4 w-4' fill='#FFD700' />
                            <Star className='text-amber-400 h-4 w-4' fill='#FFD700' />
                            <Star className='text-amber-400 h-4 w-4' fill='#FFD700' />
                            <Star className='text-amber-400 h-4 w-4' fill='#FFD700' />
                        </div>
                        <div className='text-xs'>(333)</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductCard