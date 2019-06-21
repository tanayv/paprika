import React from "react";

const Uploader = (props) => {
    
    return (
        <div className="login-wrapper">
            <div className="login-box">
            <><form action="https://berlinwall.herokuapp.com/api/upload" method="POST" enctype="multipart/form-data">
                <input type="file" name="example"/>
                <input type="submit" value="Upload File"/>
            </form></>
            </div>
        </div>
    )
}

export default Uploader;