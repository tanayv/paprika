import React from "react";
import bkDp from "./assets/bk.png";
import bishkDp from "./assets/bishk.png";
import ksheDp from "./assets/kshe.png";
import vardyDp from "./assets/vardy.png";
import sakDp from "./assets/sak.png";
import bhograDp from "./assets/bhogra.png";
import madhavDp from "./assets/madhav.png";

import { Link } from "react-router-dom";

const members = [
    {
        name: "bishk",
        count: 33,
        image: bishkDp
    },
    {
        name: "bk",
        count: 20,
        image: bkDp
    },
    {
        name: "kshe",
        count: 18,
        image: ksheDp
    },
    {
        name: "vardy",
        count: 14,
        image: vardyDp
    },
    {
        name: "bhogra",
        count: 12,
        image: bhograDp
    },
    {
        name: "madhav",
        count: 7,
        image: madhavDp
    },
    {
        name: "sak",
        count: 3,
        image: sakDp
    },
]

class Feed extends React.Component {
    render = () => {
        return (
            <div className="feed">
                <div className="nav">
                    <div className="content-wrapper">
                        <h1 className="serif">Berlin Wall</h1>
                    </div>
                </div>
                <div className="member-list">
                    <div className="content-wrapper">
                        <div className="member-flex">
                            {
                                members.map((member, index) => (
                                    <MemberTile name={member.name} count={member.count} image={member.image} key={index}/>
                                ))
                            }
                        </div>
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

export default Feed;



const MemberTile = (props) => {
    return (
        <div className="member-tile">
            <div className="thumbnail" style={{
                backgroundImage: `url(${props.image})`
            }
            }></div>
            <h1 className="serif">{props.name}</h1>
            <h2>{props.count} Contributions</h2>
        </div>
    )
}