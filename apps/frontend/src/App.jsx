import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Layout from './components/Layout';
import Home from './pages/Home';
import Stays from './pages/Stays';
import Experiences from './pages/Experiences';
import ExperienceDetails from './pages/ExperienceDetails';
import TripPlanner from './pages/TripPlanner';
import Login from './pages/Login';
import Signup from './pages/Signup';
import MatchingStays from './pages/MatchingStays';
import Host from './pages/Host';
import StayDetails from './pages/StayDetails';
import Book from './pages/Book';
import Payment from './pages/Payment';
import Confirmed from './pages/Confirmed';
import ExperienceBook from './pages/ExperienceBook';
import ExperiencePayment from './pages/ExperiencePayment';
import ExperienceConfirmed from './pages/ExperienceConfirmed';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="stays" element={<Stays />} />
          <Route path="stays/:id" element={<StayDetails />} />
          <Route path="book/:id" element={<Book />} />
          <Route path="payment/:id" element={<Payment />} />
          <Route path="confirmed/:id" element={<Confirmed />} />
          <Route path="experiences" element={<Experiences />} />
          <Route path="experiences/:id" element={<ExperienceDetails />} />
          <Route path="book-experience/:id" element={<ExperienceBook />} />
          <Route path="payment-experience/:id" element={<ExperiencePayment />} />
          <Route path="confirmed-experience/:id" element={<ExperienceConfirmed />} />
          <Route path="trip-planner" element={<TripPlanner />} />
          <Route path="matching-stays" element={<MatchingStays />} />
          <Route path="host" element={<Host />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
}

export default App;
