import { useDispatch, useSelector } from "react-redux"
import ItemList from "./ItemList";
import { clearCart } from "../Utils/cartSlice";

const Card = () =>{
    
    const cartItems = useSelector((store)=> store.cart.items);

    const dispatch = useDispatch()
    const handleClick = () =>{
        dispatch(clearCart())
    }

    return (
        <>
            <div className="max-w-[820px] mx-auto">
                <ItemList items = {cartItems} />
                <center>
                    <button
                onClick={handleClick}
                 className="px-6 font-semibold mt-5 py-2 bg-yellow-300 rounded-lg">
                    Clear Cart
                 </button>
                </center>
                {cartItems.length == 0 && <h1 className="text-3xl pt-40 text-center">Your Cart is Empty</h1>}
            </div> 

        </>
    )
}
export default Card
