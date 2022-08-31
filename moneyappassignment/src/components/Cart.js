import React from 'react'
import { useSelector,useDispatch } from 'react-redux';
import { removeDataFromCartHandler } from '../Redux/Products/action';
import styles from './Cart.module.css'

const Cart = () => {
  const cart = useSelector(state=> state.cart);
  console.log(cart)
  const totalAmount = useSelector(state=> state.totalAmount);
  const dispatch = useDispatch();


  return (
    <div className={styles.cart}>
      <div className={styles.boxes}>
        {cart.length === 0 ?  <div>Empty Cart</div> : cart.map((item)=>{
        return (
        <div key={item.id}>
            <img src={item.image} alt="" />
            <p>{item.title}</p>
            <p>Price: ${item.price}</p>
            <p>Quantity: {item.quantity}</p>
            <button onClick={()=>{dispatch(removeDataFromCartHandler(item))}}>Delete</button>
        </div>
         )
        })}
      </div>
      <div className={styles.orderSummary}>
        <div>ORDER SUMMARY</div>
        <div>TOTAL AMOUNT: {totalAmount}</div>
      </div>
    </div>
  )
}

export default Cart