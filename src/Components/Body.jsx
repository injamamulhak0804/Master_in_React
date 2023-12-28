import React, { useEffect, useState } from 'react'
import RestoreCard from './RestoreCard'

const Body = () => {
    const [Restaurants, setRestaurants] = useState([])
    const [filterResturant, setFilterResturant] = useState([])
    const [searchResult, setSearchResult] = useState("")

    useEffect(()=>{
        fetchData();
    },[])

    const fetchData = async() => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9811068&lng=80.159623&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        setRestaurants(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
        setFilterResturant(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants)
    }

      return (
        <>
            <div className="body">
                <div className="filter">
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
                </div>
                <div className="res-container">
                    {
                        filterResturant.map((items)=> (<RestoreCard key={items.info.id} items = {items} />))
                    }
                </div>
            </div>
        </>
    )
}

export default Body