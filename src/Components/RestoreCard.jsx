import React, { useContext } from 'react'
import { IMG_URL, STAR_ICON } from '../Utils/constants'
import UserContext from '../Utils/UserContext'

const RestoreCard = ({items}) => {
    const {id,
         name, 
         cloudinaryImageId,
          cuisines, 
          avgRating, 
          sla
          } = items?.info

          const {loggedInUser} = useContext(UserContext);

        return(
        <>
            <div className="hover:scale-95 select-none hover:shadow-md duration-200 w-[350px] min-h-[400] rounded-lg p-3 flex flex-col gap-y-3">
                <img className="w-full h-[200] object-cover rounded-lg" src={IMG_URL + cloudinaryImageId} alt="" />
                <h3 className='text-xl font-sans font-bold'>{name.length <= 15 ? name : `${name.slice(0,25)}...`}</h3>
                <div className='flex  gap-1 items-center'>
                    <img className='w-5' src={STAR_ICON} alt="" /> 
                <h5 className='font-semibold'>{avgRating} </h5>
                </div>
                <p className='font-light text-md'>{cuisines.length <= 1 ? cuisines.join(", ") : `${cuisines.slice(0,4).join(", ")}...`}</p>
                <p className='font-light text-md'>{sla.slaString}</p>
                <p className='font-light text-md'>{loggedInUser}</p>
            </div>
        </>
    )
}

/***if the average if greater tha and equal to 4.5 then add agreen color else add a red color or say this card is prormoted by swiggy*/
export const withColoured = (Restaurants) =>{
    return (props) =>{
        return(
            <div>
                <label className='absolute bg-black z-20 text-white px-2 py-1 rounded-lg'>Promoted</label>
                <RestoreCard {...props} />
            </div>
        )
    }
}

export default RestoreCard


