import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MENU_API } from "../Utils/constants";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {

    const [resInfo, setResInfo] = useState(null);
    const {resId} = useParams();
    // console.log(resId);

    useEffect(()=>{
        fetchMenu();
    },[]) 

    const fetchMenu = async() => {
        const data = await fetch(MENU_API+resId);
        const json = await data.json();
        setResInfo(json.data);
    }
    
    if(resInfo === null){return <Shimmer />}
    
    const {name, cuisines, avgRatingString, costForTwoMessage} = resInfo?.cards[0]?.card?.card?.info;
    const {itemCards, categories} = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
    // console.log(categories);
    console.log(itemCards);
    // ?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card
    // console.log(itemCards);
    return (
        <>
            <div className="menu">
                <h1>{name}</h1>
                <p>{cuisines.join(", ")}</p>
                <p>{avgRatingString}</p>
                <p>{costForTwoMessage}</p>
                <ul>
                    {itemCards.map((item)=>(
                        <li key={item.card.info.id}>
                            {item.card.info.name} - {" "}
                            {item.card.info.price}
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}

export default RestaurantMenu;
