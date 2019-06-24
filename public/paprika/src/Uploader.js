import React from "react";
import axios from 'axios';
import { Link } from "react-router-dom";


import bkDp from "./assets/bk.png";
import bishkDp from "./assets/bishk.png";
import ksheDp from "./assets/kshe.png";
import vardyDp from "./assets/vardy.png";
import sakDp from "./assets/sak.png";
import bhograDp from "./assets/bhogra.png";
import madhavDp from "./assets/madhav.png";

import MemberCircle from "./MemberCircle";
import FourOThree from "./403";


class Uploader extends React.Component {

    constructor(props) {
        super(props);
        members[0].contributions = props.data.bishk;
        members[1].contributions = props.data.bk;
        members[2].contributions = props.data.kshe;
        members[3].contributions = props.data.vardy;
        members[4].contributions = props.data.bhogra;
        members[5].contributions = props.data.madhav;
        members[6].contributions = props.data.sak;
        this.state = {
            file: null,
            selectedMember: ``,
            newFileName: -1
        }
        this.onFormSubmit = this.onFormSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
        this.fileUpload = this.fileUpload.bind(this);
        this.selectMember = this.selectMember.bind(this);
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

        if (this.state.selectedMember !== `` && this.state.newFileName !== -1)  {
            const url = 'https://berlinwall.herokuapp.com/api/upload/' + this.state.selectedMember + '/' + this.state.newFileName;
            const formData = new FormData();
            formData.append('example', file)
            const config = {
                headers: {
                    'content-type': 'multipart/form-data'
                }
            }
            return axios.post(url, formData, config)
        }
        
        else {
            console.log("Member not selected");
        }
        
    }

    selectMember = (e, member) => {
        e.preventDefault();
        this.setState({
            selectedMember: member.name,
            newFileName: member.contributions.length,
        })
    }

    render() {
        if (members[0].contributions === 0) {
            return (
                <div className="feed">
                    <div className="nav">
                        <div className="content-wrapper">
                            <h1 className="serif">Berlin Wall</h1>
                        </div>
                    </div>

                    <div className="uploader-container">
                        <h2 className="form-field">Select Contributor</h2>       
                        <div className="member-selector">
                            
                            {members.map((member, i) => (
                                    <div className="inline-container" onClick={(e) => this.selectMember(e, member)}key={i}>
                                        <MemberCircle name={member.name} count={member.contributions.length} image={member.image}/>
                                    </div>
                            ))}
                        </div>
                        <h2 className="form-field">{this.state.selectedMember}</h2>
                        <h2 className="form-field">{this.state.newFileName}</h2>
                        <div className="content-wrapper height-agnostic">
                            <div className="login-box">
                                <form onSubmit={this.onFormSubmit}>
                                    <input type="file" name="example" onChange={this.onChange} />
                                    <button type="submit">Upload</button>
                                </form>
                            </div>
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
        else {
            return <FourOThree/>
        }
    }
}


export default Uploader;

const members = [
    {
        name: "bishk",
        contributions: [],
        image: bishkDp
    },
    {
        name: "bk",
        contributions: [],
        image: bkDp
    },
    {
        name: "kshe",
        contributions: [],
        image: ksheDp
    },
    {
        name: "vardy",
        contributions: [],
        image: vardyDp
    },
    {
        name: "bhogra",
        contributions: [],
        image: bhograDp
    },
    {
        name: "madhav",
        contributions: [],
        image: madhavDp
    },
    {
        name: "sak",
        contributions: [],
        image: sakDp
    },
];

