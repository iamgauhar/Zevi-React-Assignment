import React, { useEffect } from 'react'
import { ChevronDown, Star, X } from 'lucide-react';
import { useAllContext } from '../context/allContext';

const FilterTab = () => {

    const { filter, setFilter, randomProducts, setFilterdProducts, selectedCategories, setSelectedCategories, selectedRatings, setSelectedRatings, priceFilters, setPriceFilters } = useAllContext()
    const fiveStars = 5;

    // Function to handle changes in categories checkboxes
    const handleCategoryChange = (category) => {
        if (selectedCategories.includes(category)) {
            // If category is already selected, remove it
            setSelectedCategories(selectedCategories.filter(selectedCategory => selectedCategory !== category));
        } else {
            // If category is not selected, add it
            setSelectedCategories([...selectedCategories, category]);
        }
    };

    // Function to handle changes in rating checkboxes
    const handleRatingChange = (rating) => {
        if (selectedRatings.includes(rating)) {
            setSelectedRatings(selectedRatings.filter((selectedRating) => selectedRating !== rating));
        } else {
            setSelectedRatings([...selectedRatings, rating]);
        }
        console.log(selectedRatings)
    };


    // Function to handle changes in price checkboxes
    const handlePriceFilterChange = (filterType) => {
        setPriceFilters((prevFilters) => ({
            ...prevFilters,
            [filterType]: !prevFilters[filterType],
        }));
    };

    const filterProducts = () => {
        // Apply category filter
        let filteredProducts = randomProducts;
        // if (selectedCategories.length > 0) {
        //     filteredProducts = filteredProducts.filter(product =>
        //         selectedCategories.includes(product.category)
        //     );
        // }

        // Apply rating filter
        if (selectedRatings.length > 0) {
            filteredProducts = filteredProducts.filter(product => selectedRatings.includes(product.rating));
        }

        // Apply price filter
        if (priceFilters.under500 || priceFilters.from1000to3000 || priceFilters.from3000to5000) {
            filteredProducts = filteredProducts.filter(product => {
                if (priceFilters.under500 && product.price <= 500) {
                    return true;
                }
                if (priceFilters.from1000to3000 && product.price >= 1000 && product.price <= 3000) {
                    return true;
                }
                if (priceFilters.from3000to5000 && product.price >= 3000 && product.price <= 5000) {
                    return true;
                }
                return false;
            });
        }

        // Set the filtered products
        setFilterdProducts(filteredProducts);
    };

    useEffect(() => {

        filterProducts()

    }, [selectedRatings, priceFilters, setFilterdProducts])

    return (
        <div className={`w-[300px] fixed top-0 h-screen p-4 sm:p-0 ${filter ? "left-0" : "-left-full"} transition-all duration-500  bg-white z-40 md:relative md:left-0 `} >
            <div className='flex justify-end pr-1'>
                <X onClick={() => setFilter(false)} className='text-indigo-400 cursor-pointer md:hidden' />
            </div>
            <div className='border-b pb-4 pr-2'>
                {/* Filter Based on BRANDs */}
                <div className='flex justify-between py-2 items-center'>
                    <h1 className='font-semibold'>BRAND</h1>
                    <ChevronDown className='w-4 h-4' />
                </div>
                <div>
                    <input type="checkbox" name="mango" id="" disabled />
                    <label className='ml-2 text-sm' htmlFor="mango">Mango</label>
                    <br />
                    <input type="checkbox" name="h&m" id="" disabled />
                    <label className='ml-2 text-sm' htmlFor="h&m">H&M</label>
                </div>
            </div>
            {/* Filter based on Price range */}
            <div className='border-b pb-4 pr-2'>
                <div className='flex justify-between py-2 items-center'>
                    <h1 className='font-semibold'>PRICE RANGE</h1>
                    <ChevronDown className='w-4 h-4' />
                </div>
                <div>
                    <input
                        type="checkbox"
                        id="under500"
                        checked={priceFilters.under500}
                        onChange={() => handlePriceFilterChange('under500')}
                    />
                    <label className='ml-2 text-sm' htmlFor="under500">Under 500</label>
                    <br />

                    <input
                        type="checkbox"
                        id="from1000to3000"
                        checked={priceFilters.from1000to3000}
                        onChange={() => handlePriceFilterChange('from1000to3000')}
                    />
                    <label className='ml-2 text-sm' htmlFor="from1000to3000">1000 To 3000</label>
                    <br />

                    <input
                        type="checkbox"
                        id="from3000to5000"
                        checked={priceFilters.from3000to5000}
                        onChange={() => handlePriceFilterChange('from3000to5000')}
                    />
                    <label className='ml-2 text-sm' htmlFor="from3000to5000">3000 To 5000</label>
                </div>
            </div>
            {/* Filter base on Ratings UI */}
            <div className=' pb-4 pr-2'>
                <div className='flex justify-between py-2 items-center'>
                    <h1 className='font-semibold'>RATINGS</h1>
                    <ChevronDown className='w-4 h-4' />
                </div>

                <div>
                    {/* Mapping UI for filtering based on ratings */}
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

            </div>
        </div>
    )
}

export default FilterTab