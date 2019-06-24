import React from "react";
import logo from "./logo.png";

class GenericLoader extends React.Component {
    render = () => {
        return (
            <div className="content-wrapper">
                <div className="login-wrapper">
                    <div className="login-box">
                        <img className="logo" src={logo} alt="Logo"/>
                        <h1 className="serif">Berlin Wall</h1>
                        <div className="lds-ellipsis">
                            <div></div>
                            <div></div>
                            <div></div>
                        <div></div></div>
                    </div>
                </div>
            </div>
        )
    }
}

export default GenericLoader;