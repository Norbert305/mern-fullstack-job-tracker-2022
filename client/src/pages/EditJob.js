import React, {useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
// import { Axios } from "axios";

export function EditJob () {

//   const [job, setJob] = useState([]);

//   useEffect((id) => {

//     Axios.get(`http://localhost:5000/api/user/${id}`).then((response) => {
//         setJob(response.data)
//     });
// }, [])


//   const [user, setUser] = useState({
// 		position: job.position,
// 		company_name: job.company_name,
// 		link: job.link,
// 		date: job.data,
// 		applied: job.applied,
// 		notes: job.notes
// 	})




  // const handleChange = e => setUser({ ...user, [e.target.name]: e.target.value });

    let navigate = useNavigate();

    // const update_User = (id) =>{

    //   Axios.put(`http://localhost:5000/api/user/${id}`, {
    //     ...user
    //   }).then((response)=>{
    //     console.log(response)
    //     navigate('/jobpostings')
    //   }).then(data => console.log(data))
    //   .catch(err => console.error("Error:", err));
    //     }
    
  //   const update_User = (id) =>{ 
  //     Axios.put("http://localhost:3001/updateAge", {    
  //     }).then(()=>{
  //       setUser(user.map((val,index)=>{
  //         return val._id === id ? {user : val.user} : val;
  //       }))
  //     })
  //     navigate("/")
  // }


return (    <div>
    <div>
      <h1 className="text-center jobHeaderText">Edit Job</h1>
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
                name="position_title"
                id="position_title"
                required
                // onChange={handleChange}
                // value={user.position}
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
                required
                // onChange={handleChange}
                // value={user.company_name}
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
                // onChange={handleChange}
                // value={user.link}
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
                // onChange={handleChange}
                // value={user.date}
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
                // onChange={handleChange}
                // value={user.applied}
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
                // onChange={handleChange}
                // value={user.notes}
              />
            </div>
            <button type="submit" className="btn btn-primary" onClick={()=>navigate("/jobpostings")} >
              Save
            </button>
          </form>
          <div className="col-2"></div>
        </div>
      </div>
    </div>
  </div>)


}