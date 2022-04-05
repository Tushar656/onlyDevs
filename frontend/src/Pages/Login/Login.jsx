import React from "react";
import "./Login.css";
export default function Login(){
    return(
        <div class="login">
        <div class="login-main">
            <div class="login-detail">
                <div class="login-detail-left">
                    <p class="signup-req">have a account? <a href="">Sign up</a></p>
                    <h1 class="login-heading">Welcome to oly</h1>
                    kindly Login with your Registered E-mail and password.
                    <div class="inputs-login">
                        <div class="input-email">
                             E-mail 
                            <input type="text" />
                        </div>
                        <div class="input-email">
                            Password 
                            <input type="password" />
                        </div>
                        <button type="submit" class="login-button">
                            Submit
                        </button>
                    </div>
                </div>
            </div>
            <div class="login-pic">
                <div className="login-quotes">
                <h1>Easy Buy and Sell!</h1>
                <p className="quotes-text">"The wisest rule in investment is: when others are selling, buy. When others are buying, sell."</p>
                </div>
            </div>       
        </div>
    </div>
    )
}
