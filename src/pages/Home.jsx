import React from 'react'
import SearchBox from '../components/SearchBox'
import LatestTrends from '../components/LatestTrends'
import { useAllContext } from '../context/allContext'
import Logo from '../components/Logo'

const Home = () => {
    const { isFocused } = useAllContext()
    return (
        <div>
            {/* Imported Brand Logo here */}
            <Logo />
            <div className='h-screen relative'>
                <img className='h-full w-full object-cover' src="https://images.pexels.com/photos/934070/pexels-photo-934070.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
                <div className='h-screen w-full absolute top-0 bg-white opacity-30 '>
                </div>
                <div className='w-full absolute top-20 '>
                    <div className='w-11/12 md:w-3/5 m-auto py-2 shadow-sm rounded-xl bg-white'>
                        {/* imported Search input here */}
                        <SearchBox />
                    </div>
                    {/* And based on condition showing Trends Tab here */}
                    {isFocused ? <LatestTrends /> : ""}
                </div>
            </div>
        </div>
    )
}

export default Home