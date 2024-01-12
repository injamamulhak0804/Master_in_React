import React, { lazy, useEffect, useState } from 'react'
import RestoreCard,{withColoured} from './RestoreCard'
import { Link } from 'react-router-dom'
import useOnlineStatus from './../Utils/useOnlineStatus'
import {IMG_URL} from './../Utils/constants'

const Body = () => {
    const [Restaurants, setRestaurants] = useState([])
    const [filterResturant, setFilterResturant] = useState([])
    const [searchResult, setSearchResult] = useState("")
    const [carousel, setCarousel] = useState([])
    const name = "zamam";

    
    
    useEffect(()=>{
        fetchData();
    },[])
    
    
    
    const fetchData = async() => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9801436&lng=77.5685724&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        setRestaurants(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
        setCarousel(json.data.cards[0].card.card.gridElements.infoWithStyle.info);
        setFilterResturant(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants)
    }
    
    const PromotedCard = withColoured(Restaurants);

    const onlineStatus = useOnlineStatus();

    if(onlineStatus === false){
        return <h1>Looks Like You are Offline Please Check your Internet Connection</h1>
    }

      return (
        <>
            <div className="container mx-auto">
                <div className="name">
                    <h2 className='text-3xl font-sans font-bold mb-10'>{name}, What's on Your mind?</h2>
                </div>
                <div className="flex gap-10 flex-wrap justify-center mb-5">
                    {
                            carousel.map((item)=> (
                            <div key={item.id} >
                                <img className='w-60 cursor-pointer' src={IMG_URL + item.imageId} alt="" />
                            </div>
                        ))
                    }
                </div>
                <div className='w-full h-1 hidden md:block rounded-lg bg-gray-200 mb-10'></div>
                <h2 className="text-xl sm:text-3xl  font-bold font-sans mb-10">Restaurants with online food delivery in Chennai</h2>
                    <div className="flex gap-10 justify-center md:justify-start flex-wrap">
                    {
                        filterResturant.map((items)=> (
                            <Link to={"/restaurant/" + items.info.id} key={items.info.id}>
                                {items.info.avgRating >= 4.5 ? <PromotedCard items = {items} /> : <RestoreCard items = {items} />}
                            </Link>
                        ))
                    }
                </div>
                <div className="btn_div">
                    <center><button
                    onClick={fetchData}
                    className='px-20 py-2 text-md outline outline-1 rounded-sm hover:bg-gray-50 outline-offset-2 mb-5'>Show More</button></center>
                </div>
            </div>
        </>
    )
}

export default Body

                    {/* <div className="filter">
                        <div className='input-box'>
                            <input type="text" 
                            className='input'
                            value={searchResult}
                            onChange={(e)=> {
                                setSearchResult(e.target.value)
                            }}
                            placeholder='Enter Food' 
                            />
                            <button 
                            className='btn-search'
                            onClick={()=>{
                                setFilterResturant( Restaurants.filter((res)=> res.info.name.toLowerCase().includes(searchResult.toLowerCase())))
                            }}>Search</button>
                        </div>
                        <button 
                        onClick={()=> {
                            setFilterResturant(Restaurants.filter((items)=> items.info.avgRating >= 4.5))
                            setSearchResult('')
                        }}
                        className='btn-search'>Top Rated Resturant</button>
                    </div> */}