import React from "react";
import Axios from 'axios';
import { Redirect } from "react-router-dom";

class Callback extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            statusText: 'Loading...',
            statusValue: 0,
            redirect: false
        };
        const urlParams = new URLSearchParams(window.location.search);
        const code = urlParams.get('code');
    
        if (typeof code !== undefined && code !== null) {
            console.log("RECEIVED CODE", code);
            Axios.get("https://berlinwall.herokuapp.com/api/auth?code="+code)
            .then((response) => {
            console.log(response);
            this.setState({statusValue: 1});
            this.setState({statusText: response.data.hello});
            this.setState({redirect: true});
            }).catch((error) => {
            this.setState({statusText: error});
            })
        }
    }

    renderRedirect = () => {
        if (this.state.redirect) {
          return <Redirect to='/upload' />
        }
      }


    render() {
        

    return (
        <div className="login-wrapper">
            {this.renderRedirect()}
            <div className="login-box">
                <h1 className="serif">Berlin Wall</h1>
                {this.state.statusText}
                
            </div>
        </div>
    )
    }
    
}

export default Callback;