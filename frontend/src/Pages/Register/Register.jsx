import React from 'react'
import "./Register.css"
export default function Register() {
  return (
    <div className='Register'>
    
    <div class="company">
        <h1>oly</h1>
        <a href="" className='link-register'><h3>Log in</h3></a>
    </div>
    <div class="main">
        <div class="create">
            <h3>Start for free</h3>
            <h1>Create new Account.</h1>
            <h3>Already a customer? <a href="" className='link-register'>Login</a></h3>
            <div class="inputs">
                <div class="names">
                    <div class="name">
                        First name.
                        <input type="text" className='input-register'/>     
                    </div>
                    <div class="name">
                        Second name.
                        <input type="text" className='input-register'/>     
                    </div>
                </div>
                <div class="email-pass">
                    <div class="email">
                        Mobile 
                        <input type="text" className='input-register'/>     
                    </div>
                    <div class="email">
                        email id
                        <input type="text" className='input-register'/>     
                    </div>
                    <div class="email">
                        password
                        <input type="password" className='input-register'/>     
                    </div>
                </div>
                <button type="submit" class="button-submit"><b>Submit</b></button>
            </div>
        </div>
        <div class="quotes">
            <h1>SELLING STUFF IS EASY.</h1>
            <h3>"ALL YOU GOTTA DO IS GIVE AWAY STUFF THAT MAKES PEOPLE HAPPY ... <br />AND THEN BUY STUFF THAT MAKES YOU EVEN HAPPIER."</h3>
        </div>
    </div>
    </div>
  )
}
