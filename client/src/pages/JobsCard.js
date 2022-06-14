import React, { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom";
import Axios from "axios";



export function JobsCard() {

    const [jobs, setJobs] = useState([]);
    const [users, setUsers] = useState([]);

  useEffect(() => {

        Axios.get("http://localhost:5000/api/user/").then((response) => {
            setJobs(response.data)
        });
    }, [])

    let navigate = useNavigate();

    const delete_User = (id) => {
        Axios.delete(`http://localhost:5000/api/user/${id}`).then(() => {
            // navigate("/newjob")
            window.location.reload(false);
        setUsers(users.filter((val, index) => {
                return val._id !== id;
            }))
        })
        .then((response)=>{
            console.log(response)
          }).then(data => console.log(data))
          .catch(err => console.error("Error:", err));
      
    }

    



    return (<div className="">
        <h1 className="jobHeader">Job Listings</h1>
        {jobs.map((value, index) => {
            return (<div key={index}>
                <div className="container">
                    <div className="row">
                        <div className="col-2"></div>

                        <div className="card col-8">

                            <div className="card-header title">
                                Job Card
                            </div>
                            <div className="card-body cb">
                                <h5 className="card-title">Position Title: {value.position}</h5>
                                <h5 className="card-title">Company Name: {value.company_name}</h5>
                                <h5 className="card-title">Link: {value.link}</h5>
                                <h5 className="card-title">Date: {value.date}</h5>
                                <h5 className="card-title">Applied:{value.applied}</h5>
                                <h5 className="card-title">Notes:{value.notes}</h5>
                                <p></p>
                                <button className="btn btn-warning" onClick={()=>navigate("/editjobs")}>Edit</button>
                                <p></p>
                                <button className="btn btn-danger" onClick={() => {
                                    delete_User(value._id); 
                                }}>Delete</button>
                            </div>
                        </div>

                        <div className="col-2"></div>

                    </div>

                </div>


            </div>
            );
        })}
    </div>)


}

// onClick={() => { navigate(`/editjobs/${value._id}`) }}