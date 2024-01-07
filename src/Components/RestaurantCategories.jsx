import { useState } from 'react';
import {DOWN_ARROW} from './../Utils/constants'
import ItemList from './ItemList';


const RestaurantCategories = ({data, setShowItem, showItem}) =>{

    const handleClick = () =>{
        setShowItem()
    }

    return (
        <div>
            <div className=" cursor-pointer bg-white w-full  mb-4 min-h-14 px-4">
                <div className='flex justify-between items-center cursor-pointer' onClick={handleClick}>
                    <span className="text-xl pt-5 font-semibold">{data.title} ({data.itemCards.length})</span>
                    <span className="text-2xl select-none">
                        <img src={DOWN_ARROW} className='w-10' alt="" />
                    </span>
                </div>
                {showItem && <ItemList items = {data.itemCards} />}
            </div>
        </div>
    )

}

export default RestaurantCategories;