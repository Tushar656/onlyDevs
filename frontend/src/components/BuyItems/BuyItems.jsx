import React, { useEffect, useState } from 'react'
import BuyItem from '../BuyItem/BuyItem'
import "./BuyItems.css"
import {Link} from 'react-router-dom'
import axios from 'axios'

export default function BuyItems() {
  const [products, setProducts] = useState([]);

  useEffect(()=>{
    const getProducts = async() =>{
      const allproducts = await axios.get("/product")
      setProducts(allproducts.data);
    }
    getProducts();
  })

  return (
    <div className='BuyItems'>
      {
        products.map((p)=>{
          return (
        <Link to={`/product/${p._id}`} className="buyitmLink" key={p._id}>
          <BuyItem fulldata={p}/>
        </Link>
          )
        })
      }
      
    </div>
  )
}
