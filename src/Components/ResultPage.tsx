// import { useEffect,  useState
//  } from "react";
import { useNavigate } from "react-router-dom";
// import type { IFormResults } from "../Types/VotingTypes";
// import lodingIcon from "../assets/loading.png";
// import { ALL_TAMILNADU_DISTRICTS } from "../Constants/VotingConstants";
const ResultPage = () => {
  const navigate = useNavigate();
  // const [results, setResults] = useState<IFormResults[]>([]);
  // const [district, setDistrict] = useState("All");
  // const [fetchingResults, setFetchingResults] = useState(false);
  // const fetchResults = async (district: string) => {
  //   try {
  //     // setFetchingResults(true);
  //     const response = await fetch(
  //       `https://emaily-solm.onrender.com/api/results${
  //         district ? `?district=${district}` : ""
  //       }`,
  //       { method: "GET" }
  //     );
  //     const data = await response.json();

  //     if (data?.length) {
  //       data.unshift({
  //         voterDistrict: "District",
  //         voterPoliticalParty: "Party",
  //         count: 0,
  //       });
  //     }

  //     // setResults(data);
  //   } catch (err) {
  //     console.error("Error fetching results", err);
  //   } finally {
  //     setFetchingResults(false);
  //   }
  // };

  // useEffect(() => {
  //   fetchResults("");
  // }, []);

  // const handleSearchByDistrict = (value: string) => {
  //   setDistrict(value);
  //   fetchResults(value);
  // };
  return (
    <div className="temp">
      <span className="temp-text">Results will be published after data collection</span>
      <button onClick={() => navigate("/")}>Home</button>
    </div>
  );

  // return fetchingResults ? (
  //   <div className="results-loading">
  //     <img src={lodingIcon} />
  //   </div>
  // ) : (
  //   <div className="form-results">
  //     <div className="form-results-header">
  //       <div className="form-result-sub-header">
  //         <h2>Online Voting Results</h2>
  //         <div className="voter-district">
  //           <label>Voter District</label>
  //           <select
  //             value={district}
  //             onChange={(e) => {
  //               handleSearchByDistrict(e.target.value);
  //             }}
  //             required={true}
  //           >
  //             {ALL_TAMILNADU_DISTRICTS.map((dis, index) => (
  //               <option key={dis} value={index ? dis : ""}>
  //                 {dis}
  //               </option>
  //             ))}
  //           </select>
  //         </div>
  //       </div>
  //       <strong
  //         className="go-to-home-page-button"
  //         onClick={() => navigate("/")}
  //       >
  //         Home
  //       </strong>
  //     </div>
  //     <div className="form-results-container">
  //       {results.map((detail: IFormResults, index) => {
  //         const initialIndex = index === 0;
  //         return (
  //           <div className="form-results-sub-container">
  //             <span className="form-result">{detail.voterDistrict}</span>
  //             <span className="form-result">{detail.voterPoliticalParty}</span>
  //             <span className="form-result">
  //               {initialIndex ? "Count" : `${detail.count}`}
  //             </span>
  //           </div>
  //         );
  //       })}
  //     </div>
  //   </div>
  // );
};

// const getProcessedResults = (data: any[]) => {
//   const resultsMap = new Map();
//   data.forEach((detail) => {
//     const uniqueKey = `${detail.voterDistrict}_${detail.voterPoliticalParty}`;
//     const totalRowsCount = detail.totalRows;
//     const percentage = Math.round((detail.count / totalRowsCount) * 100);
//     resultsMap.set(uniqueKey, percentage);
//   });
//   return resultsMap;
// };

export default ResultPage;
