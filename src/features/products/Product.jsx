import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProductsAsync } from './productSlice'
import { addItemsAsync } from '../cart/cartSlice'

function Product() {
    const dispatch = useDispatch()
    const products = useSelector(state => state.product.products)

    useEffect(()=>{
        dispatch(fetchProductsAsync())
    },[])
    return (
        <div>
            {/* <p><button onClick={() => dispatch(fetchProductsAsync())}>Fetch Product</button></p> */}
            <h2 style={{ textAlign: "center",textDecoration:"underline" }}>Product Card</h2>
            {
                products.map((product)=>(
                    <div style={{width:'350px'}} key={product.id} className="card my-3">
                    <img src={product.thumbnail} alt="Denim Jeans" />
                    <h1>{product.title}</h1>
                    <p className="price">${product.price}</p>
                    <p>{product.description}</p>
                    <p><button onClick={()=>dispatch(addItemsAsync(product))}>Add to Cart</button></p>
                </div>
                ))
            }
        </div>
    )
}

export default Product