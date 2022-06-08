import React from "react";
import { useNavigate } from "react-router-dom";

export function EditJob () {

    let navigate = useNavigate();


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
              />
            </div>
            <button type="submit" className="btn btn-primary" onClick={()=>{navigate("/jobpostings")}}>
              Save
            </button>
          </form>
          <div className="col-2"></div>
        </div>
      </div>
    </div>
  </div>)


}