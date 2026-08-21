import { useParams, Link, useSearchParams, useNavigate } from 'react-router-dom';
import { EXPERIENCES } from '../data/experiences';
import '../book.css';

export default function ExperiencePayment() {
  const { id } = useParams();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  
  const experience = EXPERIENCES.find(e => e.id === id);
  
  if (!experience) {
    return (
      <div style={{ padding: '100px', textAlign: 'center' }}>
        <h2>Experience not found</h2>
        <Link to="/experiences" className="brand-link">Back to all experiences</Link>
      </div>
    );
  }

  const guests = parseInt(searchParams.get('guests')) || 2;

  // Calculate prices
  const baseTotal = experience.price * guests;
  const bookingFee = 7 * guests;
  const taxes = 5 * guests;
  const total = baseTotal + bookingFee + taxes;

  const guestsText = `${guests} ${guests === 1 ? 'guest' : 'guests'}`;

  return (
    <div className="book-page">
      <Link to={`/experiences/${id}`} className="book-back-link">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
        Back to experience
      </Link>
      
      <h1 className="book-title">Confirm and reserve</h1>
      
      <div className="book-steps">
        <div className="book-step active">
          <div className="step-number">1</div>
          1. Your details
        </div>
        <div className="book-step active">
          <div className="step-number">2</div>
          2. Payment
        </div>
        <div className="book-step">
          <div className="step-number">3</div>
          3. Confirmed
        </div>
      </div>
      
      <div className="book-content">
        <div className="book-form-left">
          
          <div className="book-section">
            <h2>Payment method</h2>
            <div className="stripe-badge">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
              Secured by Stripe
            </div>
            
            <div className="book-input-group" style={{ marginBottom: '16px' }}>
              <span className="book-input-label">Card Number</span>
              <input type="text" className="book-input-value" defaultValue="4242 4242 4242 4242" />
            </div>
            
            <div className="book-grid-2" style={{ marginBottom: '16px' }}>
              <div className="book-input-group">
                <span className="book-input-label">Expiry</span>
                <input type="text" className="book-input-value" defaultValue="12 / 28" />
              </div>
              <div className="book-input-group">
                <span className="book-input-label">CVC</span>
                <input type="text" className="book-input-value" defaultValue="123" />
              </div>
            </div>
            
            <div className="book-input-group">
              <span className="book-input-label">Name on card</span>
              <input type="text" className="book-input-value" defaultValue="" />
            </div>
          </div>
          
          <div className="book-section">
            <h2>Cancellation</h2>
            <p style={{ fontSize: '14px', color: 'var(--color-text-text-grey-text-secondary)', lineHeight: '1.6' }}>
              Free cancellation up to 7 days before the experience. After that, 50% refund up to 24 hours before.
            </p>
          </div>
          
          <div className="book-guarantee">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
            </svg>
            You'll pay ${total.toLocaleString()} total — the same number you saw on the experience page.
          </div>
          
          <div className="book-actions-row">
            <button className="btn-outline" onClick={() => navigate(-1)}>Back</button>
            <button className="book-btn-submit" onClick={() => navigate(`/confirmed-experience/${id}?guests=${guests}`)}>Confirm & pay ${total.toLocaleString()}</button>
          </div>
          
        </div>
        
        <div className="book-summary-right">
          <div className="order-card-wrapper">
            <div className="order-card">
              <img src={experience.image} alt={experience.title} className="order-image" />
              
              <div className="order-details">
                <div className="order-type">EXPERIENCE</div>
                <div className="order-title">{experience.title}</div>
                <div className="order-location" style={{ marginBottom: '8px' }}>Hosted by {experience.hostName}</div>
                
                <div style={{ display: 'flex', gap: '12px', fontSize: '12px', color: 'var(--color-text-text-grey-text-secondary)', marginBottom: '24px', flexWrap: 'wrap' }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                    {experience.location}
                  </span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                    {experience.duration}
                  </span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                    {guestsText}
                  </span>
                </div>
                
                <div className="order-divider"></div>
                
                <div className="order-price-title">Price details</div>
                
                <div className="order-price-line">
                  <span>${experience.price} &times; {guests} guests</span>
                  <span>${baseTotal.toLocaleString()}</span>
                </div>
                <div className="order-price-line">
                  <span>Booking fee</span>
                  <span>${bookingFee}</span>
                </div>
                <div className="order-price-line">
                  <span>Taxes</span>
                  <span>${taxes}</span>
                </div>
                
                <div className="order-price-line total">
                  <span>Total (USD)</span>
                  <span>${total.toLocaleString()}</span>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
}
