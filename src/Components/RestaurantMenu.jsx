import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../Utils/useRestaurantMenu.";
import Shimmer from "./Shimmer";
import RestaurantCategories from "./RestaurantCategories";
import { STAR_IN_CATEGORIES } from "../Utils/constants";

const RestaurantMenu = () => {
    const {resId} = useParams();
    const resInfo = useRestaurantMenu(resId)
    const [showItem, setShowItem] = useState(0)

    
    if(resInfo === null){return <Shimmer />}
    const {name, cuisines, avgRatingString} = resInfo?.cards[0]?.card?.card?.info;
    const categories = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR.cards.filter((c)=> c?.card?.card?.["@type"] == "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")
    return (
        <>
            <div className="max-w-[820px] px-2 mx-auto flex justify-between items-center mb-10">
                <div>
                    <h1 className="text-lg font-semibold ">{name}</h1>
                <p className="font-thin">{cuisines.join(", ")}</p>
                </div>
                <div className="px-5 py-4 rounded-lg boder border-solid border-2 border-gray-200">
                    <div className="flex justify-center items-center gap-2">
                        <img src={STAR_IN_CATEGORIES} className="w-4" alt="" />
                        <p className="font-bold">{avgRatingString}</p>
                    </div>
                </div>
            </div>
                    <hr className="max-w-[820px] mx-auto my-10 border21 border-gray-300 border-dotted" />
                <ul className="max-w-[820px] mx-auto bg-gray-100">
                    {categories.map((item, index)=> <RestaurantCategories showItem = {index === showItem ? true : false} setShowItem = {()=>setShowItem(index)}  key={item?.card?.card?.title}  data={item?.card?.card} />)}
                </ul>
        </>
    )
}

export default RestaurantMenu;
