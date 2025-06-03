import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./LandingPage"; // Your existing landing page

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />  {/* Default Route (Landing Page) */}
      </Routes>
    </Router>
  );
}

export default App;
