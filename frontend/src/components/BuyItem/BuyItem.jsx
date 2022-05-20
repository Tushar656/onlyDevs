import React from 'react'
import "./BuyItem.css"

export default function BuyItem(fulldata) {
  // console.log(fulldata.fulldata);
  return (
    <div className='BuyItem'>
        <img src={`http://localhost:8000/images/${fulldata.fulldata.img}`} alt="" />
        <h3 className="price">{`$${fulldata.fulldata.price}`}</h3>
        <div className="itemDesc">{fulldata.fulldata.desc}</div>
    </div>
  )
}
