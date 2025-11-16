import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import VotingForm from "./Components/VotingForm";
import HomePage from "./Components/HomePage";
import ResultPage from "./Components/ResultPage";
import FormSubmittedPage from "./Components/FormSubmittedPage";

const App = () => {
  return (
    <Router>
      <div className="app-wrapper">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/form" element={<VotingForm />} />
          <Route path="/results" element={<ResultPage />} />
          <Route path="/submitted" element={<FormSubmittedPage />} />
        </Routes>
      </div>
      <footer className="footer-container">
        <p>Developed by Dhivyasree, @Lumel USA</p>
      </footer>
    </Router>
  );
};

export default App;
