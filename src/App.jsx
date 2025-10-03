import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Welcome from "./componets/welcome/Welcome";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/game" element={<div className="min-h-screen flex items-center justify-center text-white">Game Page Placeholder</div>} />
        <Route path="/about" element={<div className="min-h-screen flex items-center justify-center text-white">About Page</div>} />
      </Routes>
    </Router>
  );
}