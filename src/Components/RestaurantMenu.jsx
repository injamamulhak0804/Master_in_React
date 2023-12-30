import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MENU_API } from "../Utils/constants";

const RestaurantMenu = () => {

    const [resInfo, setResInfo] = useState(null);
    const {resId} = useParams();
    console.log(resId);

    useEffect(()=>{
        fetchMenu();
    },[]) 

    const fetchMenu = async() => {
        const data = await fetch(MENU_API + resId );
        const json = await data.json();
        setResInfo(json.data);
        // console.log(resInfo?.cards[0].card.card.info);
    }

    if(resInfo === null){return}

    const {name, cuisines, avgRatingString, costForTwoMessage} = resInfo?.cards[0]?.card?.card?.info;
    const {itemCards} = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
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
