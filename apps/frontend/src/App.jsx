import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Stays from './pages/Stays';
import Experiences from './pages/Experiences';
import TripPlanner from './pages/TripPlanner';
import Login from './pages/Login';
import Signup from './pages/Signup';
import MatchingStays from './pages/MatchingStays';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="stays" element={<Stays />} />
          <Route path="experiences" element={<Experiences />} />
          <Route path="trip-planner" element={<TripPlanner />} />
          <Route path="matching-stays" element={<MatchingStays />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
}

export default App;
