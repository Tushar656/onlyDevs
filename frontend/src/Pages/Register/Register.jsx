import React from 'react'
import "./Register.css"
export default function Register() {
  return (
    <div className='Register'>
    
    <div class="register-main">
            <div class="register-detail">
                <div class="register-detail-left">
                    <p class="signup-req">have a account?<a href="">Sign in</a></p>
                    <h1 class="register-heading">Welcome to oly</h1>
                    kindly fill the details to register your account.
                    <div class="input-register">
                            <div class="input-email">
                                First-name
                                <input type="text"></input>
                            </div>
                            <div class="input-email">
                                Last-name
                                <input type="text"></input>
                            </div>
                        <div class="input-email">
                             E-mail 
                            <input type="text" />
                        </div>
                        <div class="input-email">
                            Password 
                            <input type="password" />
                        </div>
                        <button type="submit" class="register-button">
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
