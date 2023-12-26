import React from 'react'
import SearchBox from '../components/SearchBox'

const Home = () => {
    return (
        <div>
            <div className='h-screen relative'>
                <img className='h-full w-full object-cover' src="https://images.pexels.com/photos/934070/pexels-photo-934070.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
                <div className='h-screen w-full absolute top-0 bg-white opacity-30 '>
                </div>
                <div className='w-full absolute top-20 border '>
                    <SearchBox />
                </div>
            </div>
        </div>
    )
}

export default Home