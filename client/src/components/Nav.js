import React from "react";
import { useNavigate } from "react-router-dom";

export function NavBar() {

  let navigate = useNavigate()

  return (<div className="i">
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <ul className="navbar-nav mr-auto" >
        <li className="nav-item active">
        <a className="nav-link" href="#" onClick={() => { navigate("/") }}>Home</a>
        </li>
          <li className="nav-item active">
            <a className="nav-link" href="#" onClick={() => { navigate("/newjob") }}>Job Form</a>
          </li>
          <li classNme="nav-item">
            <a className="nav-link" href="#" onClick={() => { navigate("/jobpostings") }}>Job Cards</a>
          </li>
          <li classNme="nav-item">
            <a className="nav-link" href="#" onClick={() => { navigate("/about") }}>About</a>
          </li>
        </ul>
      {/* <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button> */}
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
   
      </div>
    </nav>
  </div>)
}

