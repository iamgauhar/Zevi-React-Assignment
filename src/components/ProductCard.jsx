import React from 'react'
import { Star, Heart } from 'lucide-react';
import { useAllContext } from '../context/allContext';

const ProductCard = ({ item }) => {
    // console.log(item.image)
    const { randomProducts, setRandomProducts } = useAllContext()
    const addToWishList = (id) => {

        const updatedProducts = randomProducts.map((pro) => {
            if (pro.id === id) {
                return { ...pro, whishList: !pro.whishList };
            }
            return pro;
        });

        setRandomProducts(updatedProducts);
        // const itemIndex = randomProducts.findIndex((pro) => {
        //     return pro.id == id
        // })
        // randomProducts[itemIndex].whishList = true

    }
    const rate = 4
    return (
        <div className='p-1 sm:p-2'>
            <div className=' w-[170px] sm:w-[190px] group cursor-pointer '>
                <div className='relative  overflow-hidden rounded-t-sm '>
                    <img className='w-full h-full object-cover' src={item?.image} alt="" />
                    <div className='absolute -bottom-10 group-hover:bottom-0 w-full bg-indigo-400 opacity-80 z-10 transition-all duration-300'>
                        <button className=' text-white text-center w-full p-2 z-40'>View Product</button>
                    </div>
                    <div className='absolute top-2 right-2  '>
                        <Heart onClick={() => addToWishList(item?.id)} className='text-white' fill={`${item?.whishList ? "#ff0000" : "#ffffff00"}`} stroke={`${item?.whishList ? "#ff0000" : "#ffffff"}`} />
                    </div>
                </div>
                <div>
                    <h3 className='pt-1'>{item?.title}</h3>
                    <p className='pt-1'><strike className="text-gray-400">Rs. {Math.floor(item?.price)}</strike> <span className='font-semibold text-indigo-400' >Rs. {Math.floor(item?.price - (item?.price * 0.10))}</span></p>
                    <div className='flex gap-1 items-center py-1'>
                        <div className='flex gap-1 items-center'>

                            {Array.from({ length: 5 }).map((_, index) => {
                                return <Star key={index} className={`text-amber-400 h-4 w-4 ${index < item?.rating ? 'fill-amber-400' : 'fill-transparent'}`} />
                            })}
                        </div>
                        <div className='text-xs'>({item?.ratingCount})</div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default ProductCard