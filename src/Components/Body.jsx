import React, { useEffect, useState } from 'react'
import RestoreCard from './RestoreCard'
import { Link } from 'react-router-dom'
import {IMG_URL} from './../Utils/constants'

const Body = () => {
    const [Restaurants, setRestaurants] = useState([])
    const [filterResturant, setFilterResturant] = useState([])
    const [searchResult, setSearchResult] = useState("")
    const [carousel, setCarousel] = useState([])
    const name = "Jamam"

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

      return (
        <>
            <div className="body">
                <div className="name">
                    <h2>{name}, What's on Your mind?</h2>
                </div>
                <div className="carousel">
                    {
                            carousel.map((item)=> (
                            <div key={item.id}>
                                <img className='img-carousel' src={IMG_URL + item.imageId} alt="" />
                            </div>
                        ))
                    }
                </div>
                <div className='line'></div>
                <h2 className="heading">Restaurants with online food delivery in Chennai</h2>
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
                    <div className="res-container">
                    {
                        filterResturant.map((items)=> (
                            <Link to={"/restaurant/" + items.info.id} key={items.info.id}>
                                <RestoreCard items = {items} />
                            </Link>
                        ))
                    }
                </div>
                <div className="btn_div">
                    <center><button
                    onClick={fetchData}
                    className='show_more'>Show More</button></center>
                </div>
            </div>
        </>
    )
}

export default Body