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
      console.log(allproducts.data);
    }
    getProducts();
  })

  return (
    <div className='BuyItems'>
      <Link to={'/product/78979'} className="buyitmLink">
        <BuyItem/>
      </Link>
      <Link to={'/product/78979'} className="buyitmLink">
        <BuyItem/>
      </Link>
      <Link to={'/product/78979'} className="buyitmLink">
        <BuyItem/>
      </Link>
      <Link to={'/product/78979'} className="buyitmLink">
        <BuyItem/>
      </Link>
      <Link to={'/product/78979'} className="buyitmLink">
        <BuyItem/>
      </Link>
      <Link to={'/product/78979'} className="buyitmLink">
        <BuyItem/>
      </Link>
      <Link to={'/product/78979'} className="buyitmLink">
        <BuyItem/>
      </Link>
      <Link to={'/product/78979'} className="buyitmLink">
        <BuyItem/>
      </Link>
      <Link to={'/product/78979'} className="buyitmLink">
        <BuyItem/>
      </Link>
      <Link to={'/product/78979'} className="buyitmLink">
        <BuyItem/>
      </Link>
      <Link to={'/product/78979'} className="buyitmLink">
        <BuyItem/>
      </Link>
      <Link to={'/product/78979'} className="buyitmLink">
        <BuyItem/>
      </Link>
      <Link to={'/product/78979'} className="buyitmLink">
        <BuyItem/>
      </Link>
    </div>
  )
}
