import { useParams, Link, useSearchParams, useNavigate } from 'react-router-dom';
import { ALL_STAYS } from '../data/stays';
import '../book.css';

export default function Confirmed() {
  const { id } = useParams();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  
  const stay = ALL_STAYS.find(s => s.id === parseInt(id));
  
  if (!stay) {
    return (
      <div style={{ padding: '100px', textAlign: 'center' }}>
        <h2>Stay not found</h2>
        <Link to="/stays" className="brand-link">Back to all stays</Link>
      </div>
    );
  }

  const nights = parseInt(searchParams.get('nights')) || 5;
  
  // Calculate prices
  const nightlyTotal = stay.price * nights;
  const cleaningFee = 65;
  const serviceFee = 109;
  const taxes = 144;
  const total = nightlyTotal + cleaningFee + serviceFee + taxes;

  return (
    <div className="book-page">
      <Link to={`/stays/${id}`} className="book-back-link">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
        Back to listing
      </Link>
      
      <h1 className="book-title">Confirm and book</h1>
      
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
            
            <h2 style={{ fontSize: '28px', marginBottom: '16px' }}>You're booked.</h2>
            <p style={{ fontSize: '16px', color: 'var(--color-text-text-grey-text-secondary)', marginBottom: '32px', lineHeight: '1.5' }}>
              {stay.host.name} has been notified. A confirmation is in your inbox with check-in details.
            </p>
            
            <div style={{ display: 'flex', gap: '16px' }}>
              <button className="book-btn-submit" onClick={() => navigate('/')}>Back to stays</button>
              <button className="btn-outline">Message host</button>
            </div>
          </div>
          
        </div>
        
        <div className="book-summary-right">
          <div className="order-card-wrapper">
            <div className="order-card">
              <img src={stay.image} alt={stay.description} className="order-image" />
              
              <div className="order-details">
                <div className="order-type">ENTIRE VILLA</div>
                <div className="order-title">{stay.description}</div>
                <div className="order-location">{stay.location}</div>
                
                <div className="order-divider"></div>
                
                <div className="order-price-title">Price details</div>
                
                <div className="order-price-line">
                  <span>${stay.price} &times; {nights} nights</span>
                  <span>${nightlyTotal.toLocaleString()}</span>
                </div>
                <div className="order-price-line">
                  <span>Cleaning fee</span>
                  <span>${cleaningFee}</span>
                </div>
                <div className="order-price-line">
                  <span>Service fee</span>
                  <span>${serviceFee.toLocaleString()}</span>
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
