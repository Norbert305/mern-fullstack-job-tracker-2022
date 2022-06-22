import React from "react";
import { useNavigate } from "react-router-dom";

export function NavBar () {

    let navigate = useNavigate()

    return ( <div>
<nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#"  onClick={()=>{navigate("/")}}>Home</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <a className="nav-link active" aria-current="page" href="#" onClick={()=>{navigate("/newjob")}}>Job Form</a>
        <a className="nav-link" href="#" onClick={()=>{navigate("/jobpostings")}}>Job Cards</a>
        <a className="nav-link" href="#" onClick={()=>{navigate("/about")}}>About</a>
      </div>
    </div>
  </div>
</nav>
    </div>)
}

