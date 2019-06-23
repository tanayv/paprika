import React from "react";
import logo from "./logo.png"

const FourOThree = (props) => {

    return (
        <div className="content-wrapper">
            <div className="login-wrapper">
                <div className="login-box">
                    <img className="logo" src={logo} alt="Logo"/>
                    <h1 class="serif">Berlin Wall</h1>
                    <h2>Your session has expired</h2>
                    <a className="login-link" href="https://github.com/login/oauth/authorize?client_id=Iv1.ab929d25982c75d7&scope=repo"
                    ><button>Continue with GitHub</button></a>
                </div>
            </div>
        </div>
    )
}

export default FourOThree;