import React from "react";
import { useNavigate } from "react-router-dom";

const FormSubmittedPage = () => {
  const navigate = useNavigate();

  return (
    <div className="voting-form-submitted-page">
      <h2>Thanks for submitting the form</h2>
      <div className="submitted-page-buttons">
        <button onClick={() => navigate("/form")}>
          Submit another response
        </button>
        <button onClick={() => navigate("/")}>Home</button>
      </div>
    </div>
  );
};

export default FormSubmittedPage;
