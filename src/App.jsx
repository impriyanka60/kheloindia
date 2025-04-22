import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FeedbackForm from "../src/components/FeedbackForm"
import ThankYou from "../src/components/Thankyou";
import AccommodationChecklistForm from "./components/AccomodationChecklistForm";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<FeedbackForm />} />
        <Route path="/thank-you" element={<ThankYou />} />
        
      </Routes>
      <AccommodationChecklistForm/>
    </Router>
  );
}

export default App;
