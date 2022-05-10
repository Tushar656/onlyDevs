import React from "react";
import Copyright from "../../components/Copyright/Copyright";
import Slider from "../../components/Sliders/Slider";
import Topbar from "../../components/topbar/Topbar";
import "./Singlebuying.css"

export default function SingleBuying(){
    return (
        <div className="SingleBuying">
            <Topbar/>
            <Slider/>
            <div className="selling-content">
            <div className="product-details">
                <div className="product-name"><h1>Hyundai I10 (2010)</h1></div>
                <div className="product-price"><h1>₹ 2,70,000</h1><button className="btn-buy">Make A Deal</button> </div>
            </div>
            <div className="product-details">
                <div className="product-name"><h3>Discription</h3><hr /><p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, </p></div>
                <div className="product-price"><h3>Sold By</h3><hr /><p><h1>FRIEND MOTOR</h1></p></div>
            </div>
            </div>
            <Copyright/>
        </div>
    );
}