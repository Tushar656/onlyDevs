import React from 'react'
import BuyItems from '../../components/BuyItems/BuyItems'
import Copyright from '../../components/Copyright/Copyright'
import Slider from '../../components/Sliders/Slider'
import Topbar from '../../components/topbar/Topbar'
import "./Home.css"


export default function Home() {
  return (
    <div><Topbar/>
    <Slider/>
    <BuyItems/>
    <Copyright/></div>
  )
}
