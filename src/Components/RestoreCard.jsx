import React from 'react'
import { IMG_URL } from '../Utils/constants'

const RestoreCard = ({items}) => {
    const {id,
         name, 
         cloudinaryImageId,
          cuisines, 
          avgRating, 
          sla
          } = items?.info
     return items.length === 0 ? <h1>There is no resturant Found</h1> : (
        <>
            <div className="res-card">
                <img className="res-logo" src={IMG_URL + cloudinaryImageId} alt="" />
                <h4>{name}</h4>
                <h5>{avgRating} </h5>
                <p>{cuisines.join(', ')} Star</p>
                <p>{sla.slaString}</p>
            </div>
        </>
    )
}

export default RestoreCard


