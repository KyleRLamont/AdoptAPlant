import React from "react";
import logo from "../../images/CBP-Logo-Web.png"

export function PlantStream(props) {
    return(
        <img src={"http://adoptaplant.hopto.org:8081/" && logo} alt="plogo" style={{ height: "100%", width: "100%", marginBottom: "25px" }} />
    );
}

export default PlantStream;