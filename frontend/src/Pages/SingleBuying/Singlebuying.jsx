import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Copyright from "../../components/Copyright/Copyright";
import Slider from "../../components/Sliders/Slider";
import Topbar from "../../components/topbar/Topbar";
import "./Singlebuying.css"
import axios from 'axios'

export default function SingleBuying(){
    const location = useLocation();
    const [snglpd, setSnglpd] = useState(null)
    const pdID = (location.pathname.split('/')[2]);
    useEffect(()=>{
        const getProduct = async() =>{
            try{
                const res = await axios.get(`/product/find/${pdID}`)
                // console.log(res.data);
                setSnglpd(res.data);
            }catch(err){
                console.log("Single product err")
            }
        }
        getProduct();
    }, [snglpd])
    // console.log(snglpd);
    return (
        <div className="SingleBuying">
            <Topbar/>
            <Slider/>
            <div className="selling-content">
            <div className="product-details">
                <div className="product-name"><h1>{snglpd? snglpd.title: "No Title"}</h1></div>
                <div className="product-price"><h1>{snglpd? `$${snglpd.price}`: "No price"}</h1><button className="btn-buy">Make A Deal</button> </div>
            </div>
            <div className="product-details">
                <div className="product-name"><h3>Discription</h3><hr /><p>{snglpd? snglpd.desc: "No Description"}</p></div>
                <div className="product-price"><h3>{snglpd? snglpd.username: "No name"}</h3><hr /><p><h1>FRIEND MOTOR</h1></p></div>
            </div>
            </div>
            <Copyright/>
        </div>
    );
}