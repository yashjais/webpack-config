import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
// import Dashboard from './Dashboard';
// import Profile from './Profile';
const Dashboard = lazy(() => import("./Dashboard"));
const Profile = lazy(() => import("./Profile"));

function App() {
  return (
    <Router>
      <div>
        <nav
          style={{
            padding: "20px",
            backgroundColor: "#f0f0f0",
            marginBottom: "20px",
          }}
        >
          <Link to="/" style={{ marginRight: "15px" }}>
            Home
          </Link>
          <Link to="/dashboard" style={{ marginRight: "15px" }}>
            Dashboard
          </Link>
          <Link to="/profile">Profile</Link>
        </nav>

        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </Suspense>
      </div>
    </Router>
  );
}

export default App;
