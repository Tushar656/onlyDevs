import React, { useState } from "react";
import Topbarelling from "../../components/topbarSelling/Topbarselling";
import Copyright from "../../components/Copyright/Copyright";
import "./Selling.css";
import axios from 'axios'
export default function (){
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [mobile, setMobile] = useState("");
    const [price, setPrice] = useState("");
    const [file, setFile] = useState(null);

    const sellHendler = async(e) =>{
        e.preventDefault();
        const newPost = {
            username : localStorage.getItem('olyname'),
            title,
            mobile,
            price,
            desc
        }
        // console.log(localStorage.getItem('olyname'))

        if(file){
            const data = new FormData();
            let filename = Date.now() + file.name;
            data.append("name", filename);
            data.append("file", file);
            newPost.img = filename;
            try{
                await axios.post('/upload', data);
                window.location.reload();
            }catch(err){
                console.log("Upload error")
            }
        }

        try{
            await axios.post('/product', newPost);
        }catch(err){
            console.log(err)
        }
    }
    return (
        <div className="Selling">
        <Topbarelling />
        <h3>Post Your Ad Here!</h3>
        <div className="Selling_details">
            <h4>Include Some Details</h4><br></br>
            Ad title*<br/>
            <input className="normal" onChange={(e)=> setTitle(e.target.value)}></input> <br/>
            Ad Discription
            <br/><textarea className="Disc"  onChange={(e)=> setDesc(e.target.value)}/> <br/>
            <hr></hr>
            <h4>Set Some Price !</h4><br />
            Price*<br/>
            <input className="normal" onChange={(e)=> setPrice(e.target.value)}></input>
            <hr></hr>
            <h4>Upload images !</h4>
            <label htmlFor="file" className="shareOption">
                {/* <PermMediaIcon htmlColor="tomato" className="ShareIcon"/> */}
                <img src="/Assets/add-image.png" className="sellingimage ShareIcon"></img>
                <span className="shareText">Photo or Video</span>
                <input style={{display:"none"}} type="file" id="file" name="file" accept=".jpg, .png, .jpeg" onChange={(e)=>{setFile(e.target.files[0]); console.log("file--"+e.target.files[0].name)}}/>
            </label>
            <hr />
            <h4>Confirm Mobile</h4><br></br>
            Mobile Number*<br/>
            <input className="normal" onChange={(e)=> setMobile(e.target.value)}></input> <br/>
            <button onClick={sellHendler}>Sell</button>
        </div>
        <Copyright />
        </div>
    );
}