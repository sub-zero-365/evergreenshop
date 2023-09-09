import { useSelector, useDispatch } from "react-redux"

const useItem = (id) => {
    const dispatch = useDispatch()
    const { cartItem } = useSelector(state => state.cartItems);
    const incart = cartItem.some(({ id: cartId }) => cartId == id);
   
    return {
        incart,
    }

}
export default useItem