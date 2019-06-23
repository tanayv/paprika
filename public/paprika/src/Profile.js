import React from "react";
import bkDp from "./assets/bk.png";
import bishkDp from "./assets/bishk.png";
import ksheDp from "./assets/kshe.png";
import vardyDp from "./assets/vardy.png";
import sakDp from "./assets/sak.png";
import bhograDp from "./assets/bhogra.png";
import madhavDp from "./assets/madhav.png";
import MemberCircle from "./MemberCircle";
import { Link } from "react-router-dom";

class Profile extends React.Component {

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
            member: members.find((member, i) => this.props.match.params.name===member.name)
        };
    }

    render() {
        return (
            <div className="feed">
                <div className="nav">
                    <div className="content-wrapper">
                        <h1 className="serif">Berlin Wall</h1>
                    </div>
                </div>
                <div className="profile-area">
                    <div className="content-wrapper">
                        <MemberCircle name={this.state.member.name} count={this.state.member.contributions.length} image={this.state.member.image}/>
                        {this.state.member.contributions.map((cont, i) => (
                            <img src={cont.download_url} alt={cont.download_url}></img>
                        ))}
                    </div>
                    
                </div>
                <div className="tabuloid">
                    <div className="content-wrapper">
                        <Link to="/feed"><div className="tab active">List</div></Link>
                        <Link to="/upload"><div className="tab">Upload</div></Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default Profile;

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