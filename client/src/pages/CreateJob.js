import React, {useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import Axios from "axios";

export function AddNewJob () {

 
    const [user, setUser] = useState({
		position: "",
		company_name: "",
		link: "",
		date: "",
		applied: "",
		notes: ""
	})



          const createUser = ()=> {
            Axios.post("http://localhost:5000/api/user/", {
              ...user
            }).then((response)=>{
              console.log(response)
            }).then(data => console.log(data))
            .catch(err => console.error("Error:", err));
              }


              let navigate = useNavigate();

           const handleSubmit = event => {
                event.preventDefault();
                createUser();
                navigate("/jobpostings")
              }

    const handleChange = e => setUser({ ...user, [e.target.name]: e.target.value });


  

return (    <div>
    <div>
      <h1 className="text-center jobHeaderText">Add a Job</h1>
    </div>
    <div className="container">
      <div className="row">
        <div className="col-2"></div>
        <div className="col-8">
          <form onSubmit={handleSubmit}>
            <div class="mb-3">
              <label for="position_title" className="form-label">
                Position Title
              </label>
              <input
                type="text"
                className="form-control"
                name="position"
                id="position"
                value={user.position}
                onChange={handleChange}
                // required
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
                value={user.company_name}
                onChange={handleChange}
                // required
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
                value={user.link}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label for="date" className="form-label">
                Date
              </label>
              <input
                type="date"
                className="form-control"
                name="date"
                id="date"
                value={user.date}
                onChange={handleChange}
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
                value={user.applied}
                onChange={handleChange}
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
                value={user.notes}
                onChange={handleChange}
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
          <div className="col-2"></div>
        </div>
      </div>
    </div>
  </div>)


}