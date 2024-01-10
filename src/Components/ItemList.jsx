import { useDispatch } from 'react-redux'
import {ITEMLIST_IMG} from './../Utils/constants'
import { addItem } from '../Utils/cartSlice';


const ItemList = ({items}) =>{

    const dispatch = useDispatch();

    const handleClick = (itemName) =>{
        // Dispatch an action
        dispatch(addItem(itemName))
    }

    return (
        <div>
            {
                items.map((item)=>(
                    <div key={item.card.info.id} className='flex justify-between items-center gap-x-9 border-b-2 mt-5 pb-12'>
                        <div>
                            <span className='font-semibold text-md select-none duration-300'>{item.card.info.name}</span> <br />
                            <span className='font-normal pt-2'>&#8377; {item.card.info.price / 100}</span>
                            <p className='font-extrathin pt-5 text-gray-400 text-xs'>{item.card.info.description}</p>
                        </div>
                        <div className='shrink-0 relative'>
                            <img className='w-32 border h-32 object-cover rounded-lg' src={ITEMLIST_IMG + item.card.info.imageId} alt="" />
                            <button 
                            className='px-5 py-2 absolute -bottom-2 right-6 text-[11px]
                             bg-white text-lime-600 font-bold border rounded-sm outline-1 
                             duration-200 hover:shadow-lg shadow-lime-500'
                             onClick={() => handleClick(item)}
                             > ADD <sup>+</sup> </button>
                        </div>
                    </div>
                ))
            }
        </div>
    )

}

export default ItemList;
