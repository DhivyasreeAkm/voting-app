import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import type { IVotingForm } from "../Types/VotingTypes";
import googleQA from "../assets/GooglePay_QR.png";
import {
  INITIAL_VOTING_FORM_DETAILS,
  TAMILNADU_DISTRICTS,
  TAMILNADU_POLITICAL_PARTIES,
} from "../Constants/VotingConstants";
import "../Styles/VotingForm.less";

const VotingForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<IVotingForm>(
    INITIAL_VOTING_FORM_DETAILS
  );

  const onHandleChange = (key: string, value: unknown) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  };
  const onFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await fetch("https://emaily-solm.onrender.com/api/form", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      navigate("/submitted");
    } catch (err) {
      console.error("Error submitting form:", err);
    }
  };

  return (
    <div className="voting-form-container">
      <div className="voting-form-header">
        <h2>Internet Voting Practice – TN 2026</h2>
        <strong
          className="go-to-home-page-button"
          onClick={() => navigate("/")}
        >
          Home
        </strong>
      </div>
      <form onSubmit={onFormSubmit} className="voter-details">
        <div className="voter-detail">
          <label>Voter Id</label>
          <span>XYZ123456</span>
        </div>
        <div className="voter-detail">
          <label>Voter Name</label>
          <span>ABCD12345</span>
        </div>
        <div className="voter-detail">
          <label>Aadhar Number</label>
          <span>ABCD12345</span>
        </div>
        <div className="voter-detail">
          <label>Phone Number</label>
          <input
            required
            type="tel"
            value={formData.voterPhoneNumber}
            placeholder="Enter phone number"
            onChange={(e) => onHandleChange("voterPhoneNumber", e.target.value)}
          />
        </div>
        <div className="voter-detail">
          <label>Voter Age</label>
          <input
            required
            type="number"
            min={18}
            max={99}
            value={formData.voterAge}
            placeholder="Enter your age"
            onChange={(e) => onHandleChange("voterAge", e.target.value)}
          />
        </div>
        <div className="voter-detail">
          <label>Voter Gender</label>
          <select
            value={formData.voterSex}
            onChange={(e) => onHandleChange("voterSex", e.target.value)}
            required
          >
            <option value="">Select gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className="voter-detail">
          <label>Voter District</label>
          <select
            value={formData.voterDistrict}
            onChange={(e) => onHandleChange("voterDistrict", e.target.value)}
            required
          >
            {TAMILNADU_DISTRICTS.map((district, index) => (
              <option key={district} value={index ? district : ""}>
                {district}
              </option>
            ))}
          </select>
        </div>
        <div className="voter-detail">
          <label>Voter Political Party</label>
          <select
            value={formData.voterPoliticalParty}
            onChange={(e) =>
              onHandleChange("voterPoliticalParty", e.target.value)
            }
            required
          >
            {TAMILNADU_POLITICAL_PARTIES.map((party, index) => (
              <option key={party} value={index ? party : ""}>
                {party}
              </option>
            ))}
          </select>
        </div>
        <div className="voter-detail">
          <label>Voter fee: ₹1 — GPay to 9080358600</label>
          <img className="google-qr" src={googleQA} />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default VotingForm;
