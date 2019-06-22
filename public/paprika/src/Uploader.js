import React from "react";
import axios from 'axios';
import { Link } from "react-router-dom";

class Uploader extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            file: null
        }
        this.onFormSubmit = this.onFormSubmit.bind(this)
        this.onChange = this.onChange.bind(this)
        this.fileUpload = this.fileUpload.bind(this)
    }
    onFormSubmit(e) {
        e.preventDefault() // Stop form submit
        this.fileUpload(this.state.file).then((response) => {
            console.log(response.data);
        })
    }
    onChange(e) {
        this.setState({ file: e.target.files[0] })
    }
    fileUpload(file) {
        const url = 'https://berlinwall.herokuapp.com/api/upload';
        const formData = new FormData();
        formData.append('example', file)
        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        }
        return axios.post(url, formData, config)
    }

    render() {
        return (
            <div className="feed">
                <div className="nav">
                    <div className="content-wrapper">
                        <h1 className="serif">Berlin Wall</h1>
                    </div>
                </div>
                <div className="member-list">
                    <div className="login-box">
                        <form onSubmit={this.onFormSubmit}>
                            <input type="file" name="example" onChange={this.onChange} />
                            <button type="submit">Upload</button>
                        </form>
                    </div>
                </div>
                <div className="tabuloid">
                    <div className="content-wrapper">
                        <Link to="/feed"><div className="tab">List</div></Link>
                        <Link to="/upload"><div className="tab active">Upload</div></Link>
                    </div>
                </div>
            </div>
        )
    }
}


export default Uploader;

