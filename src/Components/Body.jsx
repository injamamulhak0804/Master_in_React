import RestoreCard,{withColoured} from './RestoreCard'
import { Link } from 'react-router-dom'
import useOnlineStatus from './../Utils/useOnlineStatus'
import {IMG_URL} from './../Utils/constants'
import useRestaurantCard from '../Utils/useRestaurantCard'
import Shimmer from './Shimmer'

const Body = () => {
    const name = "zamam";
    const { Restaurants, filterResturant, searchResult, carousel, setFilterResturant, setSearchResult } = useRestaurantCard()   
    const PromotedCard = withColoured(Restaurants);
    const onlineStatus = useOnlineStatus();

    if(onlineStatus === false){
        return <h1>Looks Like You are Offline Please Check your Internet Connection</h1>
    }
    if(Restaurants.length == 0) return <Shimmer />  
    return (
        <>
            <div className="container mx-auto">
                <div className="name">
                    <h2 className='md:text-3xl text-2xl pl-10 md:pl-5 font-sans font-bold mb-10'>{name}, What's on Your mind?</h2>
                </div>

                {/* CAROUSEL  */}
                <div className="flex gap-10 mb-5 max-w-[85%] mx-auto overflow-x-auto">
                    {
                            carousel.map((item)=> (
                            <div key={item.id} className='w-screen' >
                                <img className='min-w-36 cursor-pointer' src={IMG_URL + item.imageId} alt="" />
                            </div>
                        ))
                    }
                </div>
                <div className='w-[85%] mx-auto h-1 hidden md:block rounded-lg bg-gray-200 mb-10'></div>

                    {/* RENDER CARDS  */}

                <h2 className="text-xl sm:text-3xl pl-5 font-bold font-sans mb-10">Restaurants with online food delivery in Chennai</h2>
                    <div className="flex gap-10 justify-center flex-wrap">
                    {
                        filterResturant.map((items)=> (
                            <Link to={"/restaurant/" + items.info.id} key={items.info.id}>
                                {items.info.avgRating >= 4.5 ? <PromotedCard items = {items} /> : <RestoreCard items = {items} />}
                            </Link>
                        ))
                    }
                </div>
                <div className="btn_div my-10">
                    <center><button
                    className='px-20 py-2 text-md outline outline-1 rounded-sm hover:bg-gray-50 outline-offset-2 mb-5'>Show More</button></center>
                </div>
            </div>
        </>
    )
}

export default Body       






                {/* FILTER FUNCTION  */}

                {/* <div className="flex my-10 gap-4">
                        <div className='input-box'>
                            <input type="text" 
                            data-testid="searchInput"
                            className='w-[15rem] h-10 border placeholder:font-semibold rounded-lg pl-2'
                            value={searchResult}
                            onChange={(e)=> {
                                setSearchResult(e.target.value)
                            }}
                            placeholder='Enter Food' 
                            />
                        </div>
                            <button 
                            className='font-semibold px-6 py-2 bg-yellow-300 rounded-lg'
                            onClick={()=>{
                                setFilterResturant( Restaurants.filter((res)=> res.info.name.toLowerCase().includes(searchResult.toLowerCase())))
                            }}>Search</button>
                        <button 
                        onClick={()=> {
                            setFilterResturant(Restaurants.filter((items)=> items.info.avgRating >= 4.5))
                            setSearchResult('')
                        }}
                       className='font-semibold px-6 py-2 bg-yellow-300 rounded-lg'>Top Rated Resturant</button>
                    </div> */}