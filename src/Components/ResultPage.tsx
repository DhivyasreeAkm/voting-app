import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import type { IFormResults } from "../Types/VotingTypes";
import lodingIcon from '../assets/loading.png'
const ResultPage = () => {
  const navigate = useNavigate();
  const [results, setResults] = useState<IFormResults[]>([]);
  const [fetchingResults, setFetchingResults] = useState(false);
  useEffect(() => {
    const fetchResults = async () => {
      try {
        setFetchingResults(true);
        const response = await fetch("http://localhost:4999/api/results", {
          method: "GET",
        });
        const data = await response.json();
        if (data?.length) {
          data.unshift({
            voterDistrict: "District",
            voterPoliticalParty: "Party",
            count: 0,
          });
        }
        setResults(data);
        console.log("results", data);
        setFetchingResults(false);
      } catch (err) {
        console.error("Error fetching results", err);
      } finally {
        setFetchingResults(false);
      }
    };
    fetchResults();
  },[]);

  return fetchingResults ? (
    <div className="results-loading"><img src={lodingIcon}/></div>
  ) : (
    <div className="form-results">
     <div className="form-results-header">
        <h2>Online Voting Results</h2>
        <strong
          className="go-to-home-page-button"
          onClick={() => navigate("/")}
        >
          Go to home
        </strong>
      </div>
      <div className="form-results-container">
        {results.map((detail: IFormResults, index) => {
          const initialIndex = index === 0;
          const totalRowsCount = detail.totalRows;
          const percentage = Math.round((detail.count / totalRowsCount) * 100);
          return (
            <div className="form-results-sub-container">
              <span className="form-result">{detail.voterDistrict}</span>
              <span className="form-result">{detail.voterPoliticalParty}</span>
              <span className="form-result">
                {initialIndex ? "Percentage" : `${percentage}%`}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};
const getProcessedResults = (data: any[]) => {
  const resultsMap = new Map();
  data.forEach((detail) => {
    const uniqueKey = `${detail.voterDistrict}_${detail.voterPoliticalParty}`;
    const totalRowsCount = detail.totalRows;
    const percentage = Math.round((detail.count / totalRowsCount) * 100);
    resultsMap.set(uniqueKey, percentage);
  });
  return resultsMap;
};

export default ResultPage;
