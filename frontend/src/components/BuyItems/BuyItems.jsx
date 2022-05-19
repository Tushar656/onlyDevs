import React from 'react'
import BuyItem from '../BuyItem/BuyItem'
import "./BuyItems.css"
import {Link} from 'react-router-dom'

export default function BuyItems() {
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
