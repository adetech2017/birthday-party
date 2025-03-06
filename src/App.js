import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import MoreInfo from "./components/MoreInfo";
import "./App.css"; // Ensure your global styles are applied

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/more-info" element={<MoreInfo />} />
      </Routes>
    </Router>
  );
}