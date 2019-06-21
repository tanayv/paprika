import React from "react";

const Login = (props) => {
    
    return (
        <div className="login-wrapper">
            <div className="login-box">
                <h1 class="serif">Berlin Wall</h1>
                <a className="login-link" href="https://github.com/login/oauth/authorize?client_id=Iv1.ab929d25982c75d7"
                ><button>Continue with GitHub</button></a>
            </div>
        </div>
    )
}

export default Login;