import { useParams, Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { ALL_STAYS } from '../data/stays';
import '../stay-details.css';

export default function StayDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const stay = ALL_STAYS.find(s => s.id === parseInt(id));
  
  const [guests, setGuests] = useState(2);
  const [nights, setNights] = useState(5);
  const [isMessageModalOpen, setIsMessageModalOpen] = useState(false);
  const [messageStatus, setMessageStatus] = useState('idle');

  const closeMessageModal = () => {
    setIsMessageModalOpen(false);
    setTimeout(() => setMessageStatus('idle'), 300); // reset after animation
  };

  const handleSendMessage = () => {
    setMessageStatus('sending');
    setTimeout(() => {
      setMessageStatus('sent');
      setTimeout(() => {
        closeMessageModal();
      }, 600); // Show 'Sent' for a brief moment before closing
    }, 2000); // Simulate sending for 2 seconds
  };

  if (!stay) {
    return (
      <div style={{ padding: '100px', textAlign: 'center' }}>
        <h2>Stay not found</h2>
        <Link to="/stays" className="brand-link">Back to all stays</Link>
      </div>
    );
  }

  // Calculate prices
  const nightlyTotal = stay.price * nights;
  const cleaningFee = 65;
  const serviceFee = 109;
  const taxes = 144;
  const total = nightlyTotal + cleaningFee + serviceFee + taxes;

  const checkInDate = new Date("2026-08-12T12:00:00Z");
  const checkOutDate = new Date(checkInDate);
  checkOutDate.setDate(checkOutDate.getDate() + nights);
  
  const formatDate = (date) => {
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric', timeZone: 'UTC' });
  };

  return (
    <div className="stay-details-page">
        <div className="breadcrumbs">
          <Link to="/stays">Stays</Link>
          <span className="separator">&rsaquo;</span>
          <span>{stay.location.split(',').pop().trim()}</span>
          <span className="separator">&rsaquo;</span>
          <span style={{ color: 'var(--color-text-text-grey-text-primary)' }}>{stay.location.split(',')[0]}</span>
        </div>

        <div className="stay-header">
          <h1 className="stay-title">{stay.description}</h1>
          <div className="stay-meta">
            <div className="stay-rating">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor" stroke="none">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
              </svg>
              {stay.rating} <span className="stay-reviews">({stay.reviewsCount} reviews)</span>
            </div>
            <div className="stay-location">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
              {stay.location}
            </div>
            {stay.isSuperhost && <div className="stay-superhost-badge">Superhost</div>}
          </div>
        </div>

        <div className="stay-gallery">
          <div className="gallery-main">
            <img src={stay.image} alt={stay.description} />
          </div>
          <div className="gallery-grid">
            <img src="/img/property_1_1785986918826.png" alt="Gallery 1" />
            <img src="/img/property_2_1785986930295.png" alt="Gallery 2" />
            <img src="/img/property_3_1785986940180.png" alt="Gallery 3" />
            <img src="/img/property_4_1785986953941.png" alt="Gallery 4" />
          </div>
        </div>

        <div className="stay-content">
          <div className="stay-details-left">
            
            <div className="host-info-header">
              <div>
                <h2>Entire villa hosted by {stay.host.name}</h2>
                <p>{stay.capacity.guests} guests &middot; {stay.capacity.bedrooms} beds &middot; {stay.capacity.baths} baths &middot; Host since {stay.host.since}</p>
              </div>
              <div className="host-avatar">
                {stay.host.name.charAt(0)}
              </div>
            </div>

            <div className="stay-features-list">
              <div className="stay-feature-item">
                <div className="stay-feature-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
                </div>
                <div className="stay-feature-text">
                  <h3>All-in price</h3>
                  <p>The nightly rate you see already includes cleaning, service, and taxes.</p>
                </div>
              </div>
              <div className="stay-feature-item">
                <div className="stay-feature-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                </div>
                <div className="stay-feature-text">
                  <h3>Guest highlights</h3>
                  <p>Guests love the sunsets, 100s walk to a swimming cove. Self check in.</p>
                </div>
              </div>
              <div className="stay-feature-item">
                <div className="stay-feature-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
                </div>
                <div className="stay-feature-text">
                  <h3>Direct host chat</h3>
                  <p>{stay.host.name} typically replies within an hour.</p>
                </div>
              </div>
            </div>

            <div className="stay-description">
              Perched over the Mediterranean, this suite villa opens onto a wide terrace and a heated infinity pool. Sunsets face west across the bay.
            </div>

            <div className="stay-offers">
              <h2>What this place offers</h2>
              <div className="offers-grid">
                {stay.amenities.map((amenity, i) => (
                  <div key={i} className="offer-item">
                    <div className="offer-icon">
                      <svg width="6" height="6" viewBox="0 0 6 6" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="3" cy="3" r="3"/>
                      </svg>
                    </div>
                    {amenity}
                  </div>
                ))}
              </div>
            </div>

            <div className="ai-review-box">
              <div className="ai-review-header">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>
                AI REVIEW SUMMARY
              </div>
              <p>Guests consistently praise the view, the immaculate pool area, and {stay.host.name}'s fast, warm communication. A few noted the drive up is steep.</p>
              <p className="ai-footnote">Summarized from {stay.reviewsCount} reviews &middot; updated recently</p>
            </div>

            <div className="meet-host-box">
              <div className="meet-host-avatar">
                {stay.host.name.charAt(0)}
              </div>
              <div className="meet-host-info">
                <h3>Meet {stay.host.name}</h3>
                <p>Hosting on Stayly since {stay.host.since} &middot; Response time: within an hour</p>
                <div className="meet-host-actions">
                  <button className="btn-secondary" onClick={() => setIsMessageModalOpen(true)}>Message host</button>
                  <button className="btn-secondary" onClick={() => navigate('/stays')}>See other stays</button>
                </div>
              </div>
            </div>

          </div>

          <div className="stay-booking-right">
            <div className="booking-card-wrapper">
              <div className="booking-card">
                
                <div className="booking-card-header">
                  <div className="booking-price">
                    ${stay.price} <span>/ night</span>
                  </div>
                  <div className="booking-rating">
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="currentColor" stroke="none">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                    </svg>
                    {stay.rating}
                  </div>
                </div>

                <div className="booking-inputs">
                  <div className="booking-dates">
                    <div className="date-input">
                      <span className="input-label">CHECK-IN</span>
                      <div className="date-value">{formatDate(checkInDate)}</div>
                    </div>
                    <div className="date-input">
                      <span className="input-label">CHECK-OUT</span>
                      <div className="date-value">{formatDate(checkOutDate)}</div>
                    </div>
                  </div>
                  <div className="guests-input">
                    <div>
                      <span className="input-label">NIGHTS</span>
                      <div className="date-value">{nights} nights &middot; {guests} guests</div>
                    </div>
                    <div className="guests-controls">
                      <button className="guest-btn" onClick={() => setNights(Math.max(1, nights - 1))}>-</button>
                      <button className="guest-btn" onClick={() => setNights(nights + 1)}>+</button>
                    </div>
                  </div>
                </div>

                <button className="btn-reserve" onClick={() => navigate(`/book/${id}?nights=${nights}&guests=${guests}`)}>Reserve</button>
                <div className="reserve-note">You won't be charged yet</div>

                <div className="price-breakdown">
                  <div className="price-line">
                    <span>${stay.price} x {nights} nights</span>
                    <span>${nightlyTotal}</span>
                  </div>
                  <div className="price-line">
                    <span>Cleaning fee</span>
                    <span>${cleaningFee}</span>
                  </div>
                  <div className="price-line">
                    <span>Service fee</span>
                    <span>${serviceFee}</span>
                  </div>
                  <div className="price-line">
                    <span>Taxes</span>
                    <span>${taxes}</span>
                  </div>
                </div>

                <div className="price-line total">
                  <span>Total</span>
                  <span>${total.toLocaleString()}</span>
                </div>
                <div className="price-disclaimer">
                  All fees shown. This is what you pay.
                </div>

              </div>
            </div>
          </div>
        </div>

        {isMessageModalOpen && (
          <div className="message-modal-overlay" onClick={closeMessageModal}>
            <div className="message-modal-content" onClick={e => e.stopPropagation()}>
              <button className="message-modal-close" onClick={closeMessageModal}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
              </button>
              
              <h2 className="message-modal-title">Message {stay.host.name}</h2>
              <p className="message-modal-subtitle">
                About {stay.description.split(' with ')[0]}. {stay.host.name} replies by email &mdash; usually within an hour.
              </p>
              
              <div className="message-modal-form">
                <div className="modal-form-group">
                  <label>YOUR EMAIL FOR THE REPLY</label>
                  <input type="email" placeholder="example@gmail.com" />
                </div>
                <div className="modal-form-group">
                  <label>YOUR MESSAGE</label>
                  <textarea placeholder={`Hi ${stay.host.name}, is early check-in possible?`} rows="4"></textarea>
                </div>
                <div className="message-modal-footer">
                  <button 
                    className="btn-primary" 
                    onClick={handleSendMessage}
                    disabled={messageStatus !== 'idle'}
                  >
                    {messageStatus === 'idle' ? 'Send message' : messageStatus === 'sending' ? 'Sending...' : 'Sent'}
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
    </div>
  );
}
