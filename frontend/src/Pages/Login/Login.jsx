import React, { useRef } from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import axios from 'axios'

export default function Login(){
    const emailref = useRef();
    const passwordref = useRef();

    const loginHendler = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post("/auth/login", {
                email: emailref.current.value,
                password: passwordref.current.value,
            })
            localStorage.setItem('olyname', [res.data.username , res.data.password]);
            window.location.replace('/sell');
            // localStorage.setItem('olypass', res.data.password);
            console.log(res.data);
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <div class="login">
            <div class="login-main">
                <div class="login-detail">
                    <div class="login-detail-left">
                        <p class="signup-req">didn't have a account? <Link to={'/register'}>Sign up</Link></p>
                        <h1 class="login-heading">Welcome to oly</h1>
                        kindly Login with your Registered E-mail and password.
                        <div class="inputs-login">
                            <div class="input-email">
                                E-mail
                                <input type="text" ref={emailref} />
                            </div>
                            <div class="input-email">
                                Password
                                <input type="password" ref={passwordref} />
                            </div>
                            <button type="submit" class="login-button" onClick={loginHendler}>
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
