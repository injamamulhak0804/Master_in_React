import React, { lazy, useEffect, useState } from 'react'
const useRestaurantCard = () => {
    const [Restaurants, setRestaurants] = useState([])
    const [filterResturant, setFilterResturant] = useState([])
    const [searchResult, setSearchResult] = useState("")
    const [carousel, setCarousel] = useState([])

    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9801436&lng=77.5685724&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        console.log(json);
        setRestaurants(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
        setCarousel(json.data.cards[0].card.card.gridElements.infoWithStyle.info);
        setFilterResturant(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
    }

    return { Restaurants, filterResturant, searchResult, carousel, setRestaurants, setFilterResturant, setSearchResult };
}

export default useRestaurantCard