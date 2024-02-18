import React from "react";
import logo from "./logo.svg";

function Header(){
    return(
        <div style={{backgroundColor:"#000009", textAlign: "center", margin:"0"}}>
            <img src= { logo } style={{height: "80px"}} alt="Logo"/>
        </div>
    );
}

export default Header;