import React from 'react'
import { IMG_URL, STAR_ICON } from '../Utils/constants'

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
                <h3>{name}</h3>
                <h5> <img className='star_icon' src={STAR_ICON} alt="" /> {avgRating} </h5>
                <p>{cuisines.join(', ')} Star</p>
                <p>{sla.slaString}</p>
            </div>
        </>
    )
}

export default RestoreCard


