import React from "react";
import Topbarelling from "../../components/topbarSelling/Topbarselling";
import Copyright from "../../components/Copyright/Copyright";
import "./Selling.css";
export default function (){
    return (
        <div className="Selling">
        <Topbarelling />
        <h3>Post Your Ad Here!</h3>
        <div className="Selling_details">
            <h4>Include Some Details</h4><br></br>
            Ad title*<br/>
            <input className="normal"></input> <br/>
            Ad Discription
            <br/><textarea className="Disc" /> <br/>
            <hr></hr>
            <h4>Set Some Price !</h4><br />
            Price*<br/>
            <input className="normal"></input>
            <hr></hr>
            <h4>Upload images !</h4>
            <img src="add-image.png" className="sellingimage"></img>
            <hr />
            <h4>Confirm Mobile</h4><br></br>
            Mobile Number*<br/>
            <input className="normal"></input> <br/>
        </div>
        <Copyright />
        </div>
    );
}