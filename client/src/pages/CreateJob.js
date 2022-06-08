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

    useEffect(()=>{

        Axios.get("http://localhost:5000/api/user/").then((response)=>{
              setUser(response.data)  
          });
          },[])


          const createUser = ()=> {
            Axios.post("http://localhost:5000/api/user/", {
              ...user
            }).then((response)=>{
              alert("User Created");
            }).then(data => console.log(data))
            .catch(err => console.error("Error:", err));
              }

    const handleChange = e => setUser({ ...user, [e.target.name]: e.target.value });


    let navigate = useNavigate();

return (    <div>
    <div>
      <h1 className="text-center jobHeaderText">Add a Job</h1>
    </div>
    <div className="container">
      <div className="row">
        <div className="col-2"></div>
        <div className="col-8">
          <form>
            <div class="mb-3">
              <label for="position_title" className="form-label">
                Position Title
              </label>
              <input
                type="text"
                className="form-control"
                name="position"
                id="position"
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
                onChange={handleChange}
              />
            </div>
            <button type="submit" className="btn btn-primary" onClick={()=>{navigate("/jobpostings");createUser()}}>
              Submit
            </button>
          </form>
          <div className="col-2"></div>
        </div>
      </div>
    </div>
  </div>)


}