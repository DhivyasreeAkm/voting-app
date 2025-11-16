import React from "react";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();
  return (
    <div className="voting-home-page">
      <h2>Internet Voting Practice – TN 2026</h2>
      <div className="home-page-buttons">
        <button onClick={() => navigate("/form")}>Fill Form</button>
        <button onClick={() => navigate("/results")}>Results</button>
      </div>
    </div>
  );
};

export default HomePage;
