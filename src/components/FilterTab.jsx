import React, { useEffect } from 'react'
import { ChevronDown, Star, X } from 'lucide-react';
import { useAllContext } from '../context/allContext';

const FilterTab = () => {
    const { filter, setFilter, setRandomProducts, randomProducts, filterdProducts, setFilterdProducts, selectedRatings, setSelectedRatings } = useAllContext()
    const fiveStars = 5;
    // const filledStars = Math.min(rating, fiveStars);
    // Function to handle changes in rating checkboxes
    const handleRatingChange = (rating) => {
        if (selectedRatings.includes(rating)) {
            setSelectedRatings(selectedRatings.filter((selectedRating) => selectedRating !== rating));
        } else {
            setSelectedRatings([...selectedRatings, rating]);
        }
        console.log(selectedRatings)
    };
    const filterProductsByRating = () => {
        return randomProducts.filter((product) => selectedRatings.includes(product.rating));
    };
    useEffect(() => {
        setFilterdProducts(filterProductsByRating)
    }, [selectedRatings])

    return (
        <div className={`w-[300px] fixed top-0 h-screen p-4 sm:p-0 ${filter ? "left-0" : "-left-full"} transition-all duration-500  bg-white z-40 md:relative md:left-0 `} >
            <div className='flex justify-end pr-1'>
                <X onClick={() => setFilter(false)} className='text-indigo-400 cursor-pointer md:hidden' />
            </div>
            <div className='border-b pb-4 pr-2'>
                <div className='flex justify-between py-2 items-center'>
                    <h1 className='font-semibold'>BRAND</h1>
                    <ChevronDown className='w-4 h-4' />
                </div>
                <div>
                    <input type="checkbox" name="mango" id="" />
                    <label className='ml-2 text-sm' htmlFor="mango">Mango</label>
                    <br />
                    <input type="checkbox" name="h&m" id="" />
                    <label className='ml-2 text-sm' htmlFor="h&m">H&M</label>
                </div>
            </div>
            <div className='border-b pb-4 pr-2'>
                <div className='flex justify-between py-2 items-center'>
                    <h1 className='font-semibold'>PRICE RANGE</h1>
                    <ChevronDown className='w-4 h-4' />
                </div>
                <div>
                    <input type="checkbox" name="price" id="" />
                    <label className='ml-2 text-sm' htmlFor="price">Under 500</label>
                    <br />
                    <input type="checkbox" name="price" id="" />
                    <label className='ml-2 text-sm' htmlFor="price">1000 To 3000</label>
                    <br />
                    <input type="checkbox" name="price" id="" />
                    <label className='ml-2 text-sm' htmlFor="price">3000 To 5000</label>
                </div>
            </div>
            <div className=' pb-4 pr-2'>
                <div className='flex justify-between py-2 items-center'>
                    <h1 className='font-semibold'>RATINGS</h1>
                    <ChevronDown className='w-4 h-4' />
                </div>

                <div>
                    {[5, 4, 3, 2, 1].map((rating) => (
                        <div key={rating} className='flex items-center py-1'>
                            <input
                                className='mr-2'
                                type="checkbox"
                                name="rating"
                                id={`rating-${rating}`}
                                value={rating}
                                checked={selectedRatings.includes(rating)}
                                onChange={() => handleRatingChange(rating)}
                            />
                            <label className='flex gap-1' htmlFor={`rating-${rating}`}>
                                {[...Array(fiveStars)].map((_, index) => (
                                    <Star key={index} className='text-amber-400 h-4 w-4' fill={index < (Math.min(rating, fiveStars)) ? '#FFD700' : 'transparent'} />
                                ))}
                            </label>
                        </div>
                    ))}
                </div>

                {/* <div>
                    <div className='flex items-center py-1'>
                        <input className='mr-2' type="checkbox" name="mango" id="" value="5" />
                        <label className='flex gap-1' htmlFor="mango">
                            <Star className='text-amber-400 h-4 w-4' fill='#FFD700' />
                            <Star className='text-amber-400 h-4 w-4' fill='#FFD700' />
                            <Star className='text-amber-400 h-4 w-4' fill='#FFD700' />
                            <Star className='text-amber-400 h-4 w-4' fill='#FFD700' />
                            <Star className='text-amber-400 h-4 w-4' fill='#FFD700' />
                        </label>
                    </div>
                    <div className='flex items-center py-1'>
                        <input className='mr-2' type="checkbox" name="mango" id="" value="4" />
                        <label className='flex gap-1' htmlFor="mango">
                            <Star className='text-amber-400 h-4 w-4' fill='#FFD700' />
                            <Star className='text-amber-400 h-4 w-4' fill='#FFD700' />
                            <Star className='text-amber-400 h-4 w-4' fill='#FFD700' />
                            <Star className='text-amber-400 h-4 w-4' fill='#FFD700' />
                            <Star className='text-amber-400 h-4 w-4' />
                        </label>
                    </div>
                    <div className='flex items-center py-1'>
                        <input className='mr-2' type="checkbox" name="mango" id="" value="3" />
                        <label className='flex gap-1' htmlFor="mango">
                            <Star className='text-amber-400 h-4 w-4' fill='#FFD700' />
                            <Star className='text-amber-400 h-4 w-4' fill='#FFD700' />
                            <Star className='text-amber-400 h-4 w-4' fill='#FFD700' />
                            <Star className='text-amber-400 h-4 w-4' />
                            <Star className='text-amber-400 h-4 w-4' />
                        </label>
                    </div>
                    <div className='flex items-center py-1'>
                        <input className='mr-2' type="checkbox" name="mango" id="" value="2" />
                        <label className='flex gap-1' htmlFor="mango">
                            <Star className='text-amber-400 h-4 w-4' fill='#FFD700' />
                            <Star className='text-amber-400 h-4 w-4' fill='#FFD700' />
                            <Star className='text-amber-400 h-4 w-4' />
                            <Star className='text-amber-400 h-4 w-4' />
                            <Star className='text-amber-400 h-4 w-4' />
                        </label>
                    </div>
                    <div className='flex items-center py-1'>
                        <input className='mr-2' type="checkbox" name="mango" id="" value="1" />
                        <label className='flex gap-1' htmlFor="mango">
                            <Star className='text-amber-400 h-4 w-4' fill='#FFD700' />
                            <Star className='text-amber-400 h-4 w-4' />
                            <Star className='text-amber-400 h-4 w-4' />
                            <Star className='text-amber-400 h-4 w-4' />
                            <Star className='text-amber-400 h-4 w-4' />
                        </label>
                    </div>
                </div> */}
            </div>
        </div>
    )
}

export default FilterTab