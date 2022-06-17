import React, {useState, useEffect} from "react";
import { useNavigate, useParams } from "react-router-dom";
import Axios from "axios";


export function EditJob () {

  const { id } = useParams();
  const [job, setJob] = useState({})
 
const getJob = () => {

  Axios.get(`http://localhost:5000/api/user/${id}`).then((response)=>{
    // console.log(response)
    const myJob = response.data;
  setJob(myJob)
  })
}

useEffect(()=>getJob(), []);


let navigate = useNavigate()
 



  const handleSubmit = event => {
    event.preventDefault();
    update_User()
    navigate("/jobpostings")
  }

  const handleChange = e => setJob({ ...job, [e.target.name]: e.target.value });

    
    const update_User = () =>{ 
      Axios.put(`http://localhost:5000/api/user/${id}`, {
        ...job
      }).then((response)=>{
        console.log(response)
      }).then(data => console.log(data))
      .catch(err => console.error("Error:", err));
      navigate("/jobpostings")
  }



return (    <div>
    <div>
      <h1 className="text-center jobHeaderText">Edit Job</h1>
    </div>
    <div className="container">
      <div className="row">
        <div className="col-2"></div>
        <div className="col-8">
          <form onSubmit={handleSubmit}>
            <div class="mb-3">
              <label for="position" className="form-label">
                Position Title
              </label>
              <input
                type="text"
                className="form-control"
                name="position"
                id="position"
                // required
                onChange={handleChange}
                value={job.position}
              />
            </div>
            <div className="mb-3">
              <label for="company_name" className="form-label">
                Company Name
              </label>
              <input
                type="text"
                className="form-control"
                name="company_name"
                id="company_name"
                // required
                onChange={handleChange}
                value={job.company_name}
              />
            </div>
            <div className="mb-3">
              <label for="link" className="form-label">
                Link
              </label>
              <input
                type="text"
                className="form-control"
                name="link"
                id="link"
                onChange={handleChange}
                value={job.link}
              />
            </div>
            <div className="mb-3">
              <label for="date" className="form-label">
                Date
              </label>
              <input
                type="text"
                className="form-control"
                name="date"
                id="date"
                onChange={handleChange}
                value={job.date}
              />
            </div>
            <div className="mb-3">
              <label for="applied" className="form-label">
                Applied
              </label>
              <input
                type="text"
                className="form-control"
                name="applied"
                id="applied"
                onChange={handleChange}
                value={job.applied}
              />
            </div>
            <div className="mb-3">
              <label for="notes" className="form-label">
                Notes
              </label>
              <textarea
                className="form-control"
                rows="3"
                id="notes"
                name="notes"
                onChange={handleChange}
                value={job.notes}
              />
            </div>
        
            <button type="submit" className="btn btn-primary" onChange={()=>update_User(id)}>
              Save
            </button>
         
          </form>
          <div className="col-2"></div>
        </div>
      </div>
    </div>
  </div>)


}

