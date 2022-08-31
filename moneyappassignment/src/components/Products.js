import React, { useEffect, useState } from 'react'
import { useDispatch} from 'react-redux'
import styles from './Products.module.css'
import { addDataInCartHandler } from '../Redux/Products/action';

const Products = () => {
    const [products,setProducts] = useState([]);
    const dispatch = useDispatch();
    useEffect(()=>{
        async function getData()
        {
            let response = await fetch('https://fakestoreapi.com/products');
            let data = await response.json();
            console.log(data)
            setProducts(data);
        }
        getData();
    },[]);

  return (
    <div className={styles.boxes}>
        {products.map((item)=>{
            return (
            <div key={item.id}>
                <img src={item.image} alt=""/>
                <p>{item.title}</p>
                <p>Price: ${item.price}</p>
                <button onClick={()=>{dispatch(addDataInCartHandler(item))}}>Add to cart</button>
            </div>
            )
        })}
    </div>
  )
}

export default Products