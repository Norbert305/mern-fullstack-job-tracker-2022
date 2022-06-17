import {BrowserRouter as Router, Routes, Route,Link} from "react-router-dom";
import {NavBar} from "./components/Nav";
import { AddNewJob } from "./pages/CreateJob";
import { EditJob } from "./pages/EditJob";
import { HomePage } from "./pages/Home";
import { JobsCard } from "./pages/JobsCard";

function App() {
  return (
    <div className="App">
     <Router>
      <NavBar />
       <Routes>
         <Route path="/editjobs/:id" element={<EditJob />}/>
      <Route path="/newjob" element={<AddNewJob />}/>
      <Route path="/jobpostings" element={<JobsCard />}/>
      <Route path="/" element={<HomePage />}/>
       </Routes>
     </Router>
    </div>
  );
}

export default App;
