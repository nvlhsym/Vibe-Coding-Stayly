import { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { EXPERIENCES } from '../data/experiences';
import '../experience-details.css';

export default function ExperienceDetails() {
  const [guests, setGuests] = useState(2);
  const { id } = useParams();
  const navigate = useNavigate();
  const experience = EXPERIENCES.find((exp) => exp.id === id);

  if (!experience) {
    return (
      <div className="experience-not-found">
        <h2>Experience not found</h2>
        <Link to="/experiences" className="btn-primary">Back to Experiences</Link>
      </div>
    );
  }

  return (
    <div className="exp-details-page">
      <div className="exp-details-container">
        
        <div className="exp-breadcrumb">
          <Link to="/experiences" className="breadcrumb-link">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
            All experiences
          </Link>
        </div>

        <h1 className="exp-title">{experience.title}</h1>
        
        <div className="exp-meta">
          <span className="exp-meta-item">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
            <strong>{experience.rating}</strong> ({experience.reviewsCount} reviews)
          </span>
          <span className="exp-meta-item">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
            {experience.location}
          </span>
          <span className="exp-meta-item">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
            {experience.duration}
          </span>
          <span className="exp-meta-item">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
            Up to {experience.maxGuests} guests
          </span>
        </div>

        <div className="exp-hero-image">
          <img src={experience.image} alt={experience.title} />
        </div>

        <div className="exp-content-grid">
          <div className="exp-main-content">
            
            <section className="exp-section">
              <h2>Hosted by {experience.hostName}</h2>
              <p className="exp-desc">{experience.hostDesc}</p>
            </section>

            <section className="exp-section">
              <h3>What's included</h3>
              <div className="exp-inclusions">
                {experience.inclusions.map((inc, i) => (
                  <div key={i} className="inclusion-item">
                    <svg className="check-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    {inc.text}
                  </div>
                ))}
              </div>
            </section>

            <section className="exp-section">
              <h3>How the day goes</h3>
              <div className="exp-schedule">
                {experience.schedule.map((item, i) => (
                  <div key={i} className="schedule-item">
                    <div className="schedule-time">{item.time}</div>
                    <div className="schedule-desc">{item.description}</div>
                  </div>
                ))}
              </div>
            </section>

            <section className="exp-section">
              <div className="guest-say-box">
                <div className="guest-say-header">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path></svg>
                  <h4>What guests say</h4>
                </div>
                <p>{experience.guestNotes}</p>
              </div>
            </section>

          </div>

          <div className="exp-sidebar">
            <div className="booking-widget">
              <div className="booking-price">
                <strong>${experience.price}</strong> <span>total / guest</span>
              </div>
              <p className="booking-subtext">All fees and taxes included.</p>
              
              <div className="booking-form">
                <div className="form-group">
                  <label>Guests</label>
                  <select 
                    className="form-select" 
                    value={guests} 
                    onChange={(e) => setGuests(parseInt(e.target.value))}
                  >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                  </select>
                </div>
                
                <div className="price-breakdown">
                  <div className="price-row">
                    <span>${experience.price} x {guests} {guests === 1 ? 'guest' : 'guests'}</span>
                    <span>${experience.price * guests}</span>
                  </div>
                  <div className="price-row">
                    <span>Booking fee</span>
                    <span>${7 * guests}</span>
                  </div>
                  <div className="price-row">
                    <span>Taxes</span>
                    <span>${5 * guests}</span>
                  </div>
                  <hr />
                  <div className="price-row total-row">
                    <span>Total</span>
                    <span>${(experience.price * guests) + (7 * guests) + (5 * guests)}</span>
                  </div>
                </div>

                <button className="btn-primary booking-btn" onClick={() => navigate(`/book-experience/${id}?guests=${guests}`)}>Reserve this experience</button>
                <button className="btn-outline booking-btn-alt" onClick={() => navigate('/stays')}>Find stays in {experience.location.split(',')[0]}</button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
