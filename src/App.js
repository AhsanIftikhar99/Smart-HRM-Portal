import { Routes, Route, Link } from "react-router-dom";
import LoginForm from "./Pages/login";
import SignupForm from "./Pages/signup";
import Homepage from "./Pages/HR/homepage";
import JobAdd from "./Pages/HR/jobadd";
import "./App.css"
import ResumeSearch from "./Pages/HR/resumesearch";
import ProfileSearch from "./Pages/HR/profilesearch";
import Home from "./Pages/Candidate/home";
import BrowseJobs from "./Pages/Candidate/browsejobs";
import BuildResume from "./Pages/Candidate/buildresume";
import InterestandExperience from "./Pages/Candidate/interestnexp";


function App() {
  return (
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/sign-in" element={<LoginForm />} />
        <Route path="/sign-up" element={<SignupForm />} />
        <Route path="/homepage" element={<Homepage />} />
        <Route path="/job-add" element={<JobAdd />} />
        <Route path="/resume-search" element={<ResumeSearch />} />
        <Route path="/profile-search" element={<ProfileSearch />} />
        <Route path="/candidate-homepage" element={<Home />} />
        <Route path="/browse-jobs" element={<BrowseJobs />} />
        <Route path="/build-resume" element={<BuildResume />} />
        <Route path="/interest-and-experience" element={<InterestandExperience />} />
      </Routes>
      
  );
}

export default App;
