import React from "react"
import { useNavigate } from "react-router-dom";


export function JobsCard () {

    let navigate = useNavigate();

return (<div className="">
<h1 className="jobHeader">Job Listings</h1>
<div>
    <div className="container">
        <div className="row">
            <div className="col-2"></div>
            <div className="card col-8">
<div className="card-header title">
Job Card
</div>
<div className="card-body cb">
<h5 className="card-title">Position Title</h5>
<h5 className="card-title">Company Name</h5>
<h5 className="card-title">Link</h5>
<h5 className="card-title">Date</h5>
<h5 className="card-title">Applied</h5>
<h5 className="card-title">Notes</h5>

<p></p>
<button className="btn btn-warning" onClick={()=>{navigate("/editjobs")}}>Edit</button>
<p></p>
<button className="btn btn-danger">Delete</button>
</div>

</div>
            <div className="col-2"></div>

        </div>

    </div>
</div>
</div>)


}