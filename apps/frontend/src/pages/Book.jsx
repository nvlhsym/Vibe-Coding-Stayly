import { useParams, Link, useSearchParams, useNavigate } from 'react-router-dom';
import { ALL_STAYS } from '../data/stays';
import '../book.css';

export default function Book() {
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
  const guests = parseInt(searchParams.get('guests')) || 2;

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
  
  const formatDateShort = (date) => {
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', timeZone: 'UTC' });
  };

  const datesText = `${formatDateShort(checkInDate)} - ${formatDate(checkOutDate)} · ${nights} nights`;
  const guestsText = `${guests} ${guests === 1 ? 'adult' : 'adults'}`;

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
        <div className="book-step">
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
            <h2>Your trip</h2>
            <div className="book-grid-2">
              <div className="book-input-group">
                <span className="book-input-label">Dates</span>
                <span className="book-input-value">{datesText}</span>
              </div>
              <div className="book-input-group">
                <span className="book-input-label">Guests</span>
                <span className="book-input-value">{guestsText}</span>
              </div>
            </div>
          </div>
          
          <div className="book-section">
            <h2>Contact details</h2>
            <div className="book-grid-2" style={{ marginBottom: '16px' }}>
              <div className="book-input-group">
                <span className="book-input-label">First Name</span>
                <input type="text" className="book-input-value" defaultValue="Alex" />
              </div>
              <div className="book-input-group">
                <span className="book-input-label">Last Name</span>
                <input type="text" className="book-input-value" defaultValue="Rivera" />
              </div>
            </div>
            <div className="book-grid-2">
              <div className="book-input-group">
                <span className="book-input-label">Email</span>
                <input type="email" className="book-input-value" defaultValue="alex@example.com" />
              </div>
              <div className="book-input-group">
                <span className="book-input-label">Phone</span>
                <input type="tel" className="book-input-value" defaultValue="+1 555 0132" />
              </div>
            </div>
          </div>
          
          <div className="book-section" style={{ border: 'none', padding: 0, backgroundColor: 'transparent' }}>
            <h2>Message to host (optional)</h2>
            <textarea 
              className="book-textarea" 
              placeholder={`Hi ${stay.host.name}! We're arriving late — is a self check-in possible?`}
            ></textarea>
          </div>
          
          <div className="book-guarantee">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
            You'll pay ${total.toLocaleString()} total — the same number you saw on the listing.
          </div>
          
          <div className="book-actions">
            <button className="book-btn-submit" onClick={() => navigate(`/payment/${id}?nights=${nights}&guests=${guests}`)}>Continue to payment</button>
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
