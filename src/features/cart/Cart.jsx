import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteItemsAsync, fetchItemsAsync, updateItemsAsync } from './cartSlice'

function Cart() {
    const dispatch = useDispatch()
    const cart = useSelector(state => state.cart.items)

    // useEffect(() => {
    //     dispatch(fetchItemsAsync())
    // }, [])

    const handleChange = (e, id) => {
        console.log(e.target.value);
        dispatch(updateItemsAsync({id:id, updatedItems:{ quantity: +e.target.value }}))
    }
    return (
        <div>
            <h2 style={{ textAlign: "center", textDecoration: "underline" }}>CART MENU</h2>
            {
                cart.map((cart) => (
                    <div style={{ width: '350px' }} key={cart.id} className="card my-3">
                        <img src={cart.thumbnail} alt="Denim Jeans" />
                        <h1>{cart.title}</h1>
                        <p className="price">${cart.price}</p>
                        {/* <p>Quantity:{cart.quantity}</p> */}
                        <select style={{ display: 'block', margin: '0 auto', textAlign: 'center', width: '180px' }} value={cart.quantity} onChange={(e) => handleChange(e, cart.id)}>
                            <option disabled>Select Quantity</option>
                            <option value={1}>1</option>
                            <option value={2}>2</option>
                            <option value={3}>3</option>
                        </select>
                        <p><button onClick={() => dispatch(deleteItemsAsync(cart.id))}>REMOVE</button></p>
                    </div>
                ))
            }
            <h2>Total : {cart.reduce((acc,item)=>item.price*item.quantity+acc,0)}</h2>
        </div>
    )
}

export default Cart