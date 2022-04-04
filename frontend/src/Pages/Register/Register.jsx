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
            <h6 className='company-heading'>Start for free</h6>
            <h1 className='company-heading-h1'>Create new Account.</h1>
            <h6 className='company-heading'>Already a customer? <a href="" className='link-register'>Login</a></h6>
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
                <button type="submit" class="button-submit"><b>Submit</b></button>
                </div>
            </div>
        </div>
        <div class="quotes">
            <h2 className='heading-quotes'>SELLING STUFF IS EASY.</h2>
            <br />
            <h4>"ALL YOU GOTTA DO IS GIVE AWAY STUFF THAT MAKES PEOPLE HAPPY ... AND THEN BUY STUFF THAT MAKES YOU EVEN HAPPIER."</h4>
        </div>
    </div>
    </div>
  )
}
