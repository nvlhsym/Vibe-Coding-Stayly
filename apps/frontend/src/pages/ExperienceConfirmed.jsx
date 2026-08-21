import { useParams, Link, useSearchParams, useNavigate } from 'react-router-dom';
import { EXPERIENCES } from '../data/experiences';
import '../book.css';

export default function ExperienceConfirmed() {
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
        <div className="book-step active">
          <div className="step-number">3</div>
          3. Confirmed
        </div>
      </div>
      
      <div className="book-content">
        <div className="book-form-left">
          
          <div className="book-section" style={{ padding: '48px', display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
            <div style={{ 
              width: '48px', height: '48px', borderRadius: '50%', backgroundColor: 'var(--color-bg-bg-grey-bg-secondary)', 
              display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '24px',
              border: '1px solid var(--color-border-border-grey-border-primary)', color: 'var(--color-text-text-color-text-brand-primary)'
            }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
            </div>
            
            <h2 style={{ fontSize: '28px', marginBottom: '16px' }}>You're going.</h2>
            <p style={{ fontSize: '16px', color: 'var(--color-text-text-grey-text-secondary)', marginBottom: '32px', lineHeight: '1.5' }}>
              {experience.hostName} has been notified. Meeting point and timing are in your inbox.
            </p>
            
            <div style={{ display: 'flex', gap: '16px' }}>
              <button className="book-btn-submit" onClick={() => navigate('/experiences')}>Browse more experiences</button>
              <button className="btn-outline" onClick={() => navigate('/stays')}>Find stays in {experience.location.split(',')[0]}</button>
            </div>
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
