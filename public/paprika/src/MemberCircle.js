import React from "react";

const MemberCircle = (props) => {

    return (
        <div className="member-circle">
            <div className="thumbnail" style={{
                backgroundImage: `url(${props.image})`
            }
            }></div>
            <h1 className="serif">{props.name}</h1>
            <h2>{props.count} Contribution{checkIfSingularOrPlural(props.count)}</h2>
        </div>
    )
}

const checkIfSingularOrPlural = (count) => {
    if (count === 0 || count > 1)
        return "s";
    else 
        return ""
}

export default MemberCircle;