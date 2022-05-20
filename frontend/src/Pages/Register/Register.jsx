import React, { useState } from 'react'
import "./Register.css"
import { Link } from 'react-router-dom'
import axios from 'axios'
export default function Register() {
    const [fname, setFname] = useState("")
    const [lname, setLname] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const submitHendler = async(e) =>{
        e.preventDefault();

        try{
            const res = await axios.post('/auth/register', {
                username: fname + " " + lname,
                password, 
                email
        })
        res.data && window.location.replace('/login');
        console.log(res.data)
        }catch(err){
            console.log("upload product err")
        }
    }

    return (
        <div className='Register'>
            <div class="register-main">
                <div class="register-detail">
                    <div class="register-detail-left">
                        <p class="signup-req">have a account?<Link to={'/login'}>Sign in</Link></p>
                        <h1 class="register-heading">Welcome to oly</h1>
                        kindly fill the details to register your account.
                        <div class="input-register">
                            <div class="input-email">
                                First-name*
                                <input type="text" onChange={(e)=>{setFname(e.target.value)}}></input>
                            </div>
                            <div class="input-email">
                                Last-name*
                                <input type="text" onChange={(e)=>{setLname(e.target.value)}}></input>
                            </div>
                            <div class="input-email">
                                E-mail*
                                <input type="text" onChange={(e)=>{setEmail(e.target.value)}} />
                            </div>
                            <div class="input-email">
                                Password*
                                <input type="password" onChange={(e)=>{setPassword(e.target.value)}} />
                            </div>
                            <button type="submit" class="register-button" onClick={submitHendler}>
                                Submit
                            </button>
                        </div>
                    </div>
                </div>
                <div class="register-pic">
                    <div className="register-quotes">
                        <h1 className="quotes-text">""ALL YOU GOTTA DO IS GIVE AWAY STUFF THAT MAKES PEOPLE HAPPY ... AND THEN BUY STUFF THAT MAKES YOU EVEN HAPPIER.""</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}
