import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import PostReviews from "./components/postReviews/PostReviews";
import ViewReviews from "./components/viewReviews/ViewReviews";
import SingleReview from "./components/singleReview/SingleReview";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<PostReviews />} />
          <Route path="/reviews" element={<ViewReviews />} />
          <Route path="/review/:id" element={<SingleReview />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
