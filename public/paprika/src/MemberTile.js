import React from "react";
import { Link } from "react-router-dom";



const MemberTile = (props) => {

    return (
        <Link to={`/profile/` + props.name}>
            <div className="member-tile">
                <div className="thumbnail" style={{
                    backgroundImage: `url(${props.image})`
                }
                }></div>
                <h1 className="serif">{props.name}</h1>
                <h2>{props.count} Contribution{checkIfSingularOrPlural(props.count)}</h2>
            </div>
        </Link>
    )
}

const checkIfSingularOrPlural = (count) => {
    if (count === 0 || count > 1)
        return "s";
    else 
        return ""
}

export default MemberTile;