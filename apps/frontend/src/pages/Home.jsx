import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Header from '../components/Header';
import PropertyCard from '../components/PropertyCard';
import { ALL_STAYS } from '../data/stays';
import '../for-hosts.css';

export default function Home() {
  const navigate = useNavigate();
  const [showDates, setShowDates] = useState(false);
  const [showGuests, setShowGuests] = useState(false);
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [guests, setGuests] = useState(0);
  const [where, setWhere] = useState('');

  const handleSearch = () => {
    // Collect all inputs to build a query string
    let queryParts = [];
    if (where) queryParts.push(where);
    if (guests > 0) queryParts.push(`for ${guests}`);
    if (checkIn && checkOut) {
      // In a real app we'd calculate nights, but for the mockup we can just append "dates selected"
      queryParts.push('dates selected');
    }
    
    // If empty, use a default query that triggers the empty state as seen in Figma
    const qString = queryParts.length > 0 ? queryParts.join(', ') : 'sea view for 4, walkable town, 3 nights';
    navigate(`/matching-stays?q=${encodeURIComponent(qString)}`);
  };

  return (
    <>
      <div className="hero-section" style={{ backgroundImage: "url('/img/hero_image_1785986908371.png')" }}>
        <div className="hero-overlay"></div>
        <Header transparent={true} />
        
        <div className="hero-content">
          <p className="hero-overline">REAL PRICES. REAL HOSTS.</p>
          <h1 className="hero-title">Find a place that actually<br />costs what it says.</h1>
          <p className="hero-subtitle">Every listing on Stayly shows the full total upfront — cleaning, service and taxes included — before you even open checkout.</p>
          
          <div className="search-bar">
            <div className="search-field-wrapper">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
              <div className="search-field">
                <label>Where</label>
                <input type="text" value={where} onChange={(e) => setWhere(e.target.value)} placeholder="cabin near a lake, under $150..." />
              </div>
            </div>
            <div className="search-divider"></div>
            <div className="search-field-wrapper" style={{ position: 'relative', cursor: 'pointer' }} onClick={() => { setShowDates(!showDates); setShowGuests(false); }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
              <div className="search-field" style={{ overflow: 'hidden', minWidth: 0 }}>
                <label>Dates</label>
                <div 
                  className="hide-scrollbar"
                  style={{ 
                    color: (checkIn && checkOut) ? 'var(--color-text-text-grey-text-primary)' : 'var(--color-text-text-grey-text-secondary)', 
                    fontSize: '14px', 
                    marginTop: '4px', 
                    whiteSpace: 'nowrap', 
                    overflow: 'hidden',
                    textOverflow: 'ellipsis'
                  }}
                >
                  {checkIn && checkOut ? `${checkIn} to ${checkOut}` : 'Any week'}
                </div>
              </div>
              {showDates && (
                <div className="dropdown-popup" onClick={e => e.stopPropagation()} style={{ padding: '20px', minWidth: '320px' }}>
                  <div style={{ display: 'flex', gap: '16px' }}>
                    <div style={{ flex: 1 }}>
                      <label style={{ display: 'block', fontSize: '12px', fontWeight: 'bold', marginBottom: '8px', color: 'var(--color-text-text-grey-text-primary)' }}>Check in</label>
                      <input type="date" value={checkIn} onChange={e => setCheckIn(e.target.value)} style={{ padding: '10px', borderRadius: '8px', border: '1px solid var(--color-border-border-grey-border-primary)', width: '100%', background: 'var(--color-bg-bg-grey-bg-primary)', color: 'var(--color-text-text-grey-text-primary)', outline: 'none' }} />
                    </div>
                    <div style={{ flex: 1 }}>
                      <label style={{ display: 'block', fontSize: '12px', fontWeight: 'bold', marginBottom: '8px', color: 'var(--color-text-text-grey-text-primary)' }}>Check out</label>
                      <input type="date" value={checkOut} onChange={e => setCheckOut(e.target.value)} style={{ padding: '10px', borderRadius: '8px', border: '1px solid var(--color-border-border-grey-border-primary)', width: '100%', background: 'var(--color-bg-bg-grey-bg-primary)', color: 'var(--color-text-text-grey-text-primary)', outline: 'none' }} />
                    </div>
                  </div>
                </div>
              )}
            </div>
            <div className="search-divider"></div>
            <div className="search-field-wrapper" style={{ position: 'relative', cursor: 'pointer' }} onClick={() => { setShowGuests(!showGuests); setShowDates(false); }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
              <div className="search-field">
                <label>Guests</label>
                <div style={{ color: guests > 0 ? 'var(--color-text-text-grey-text-primary)' : 'var(--color-text-text-grey-text-secondary)', fontSize: '14px', marginTop: '4px' }}>
                  {guests > 0 ? `${guests} guests` : 'Add guests'}
                </div>
              </div>
              {showGuests && (
                <div className="dropdown-popup" onClick={e => e.stopPropagation()} style={{ padding: '20px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div>
                      <span style={{ display: 'block', fontWeight: '600', color: 'var(--color-text-text-grey-text-primary)' }}>Guests</span>
                      <span style={{ fontSize: '14px', color: 'var(--color-text-text-grey-text-secondary)' }}>Ages 2 or above</span>
                    </div>
                    <div className="guests-controls" style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <button className="guest-btn" onClick={() => setGuests(Math.max(0, guests - 1))} style={{ width: '32px', height: '32px', borderRadius: '50%', border: '1px solid var(--color-border-border-grey-border-primary)', background: 'transparent', color: 'var(--color-text-text-grey-text-primary)', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>-</button>
                      <span className="guest-count" style={{ width: '20px', textAlign: 'center', color: 'var(--color-text-text-grey-text-primary)' }}>{guests}</span>
                      <button className="guest-btn" onClick={() => setGuests(guests + 1)} style={{ width: '32px', height: '32px', borderRadius: '50%', border: '1px solid var(--color-border-border-grey-border-primary)', background: 'transparent', color: 'var(--color-text-text-grey-text-primary)', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>+</button>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <button className="btn-search" onClick={handleSearch}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
              Search
            </button>
          </div>
          <div className="search-hint">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="17 8 12 3 7 8"></polyline><line x1="12" y1="3" x2="12" y2="15"></line></svg>
            Try: "cabin near the lake, under $150, pet-friendly"
          </div>
        </div>
      </div>

      <main className="landing-main">
        {/* Features */}
        <section className="features-section">
          <div className="feature-item">
            <div className="feature-icon feature-icon-red">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
            </div>
            <h3>Transparent totals</h3>
            <p>Cleaning, service and taxes rolled into the nightly price you see. No surprises at checkout.</p>
          </div>
          <div className="feature-item">
            <div className="feature-icon feature-icon-orange">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
            </div>
            <h3>Talk to your host</h3>
            <p>Message hosts directly before you book. Real people, real answers, in under an hour on average.</p>
          </div>
          <div className="feature-item">
            <div className="feature-icon feature-icon-purple">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
            </div>
            <h3>AI-native discovery</h3>
            <p>Describe the trip you want in plain language. We surface stays that actually match — and tell you if they are likely to drop.</p>
          </div>
        </section>

        {/* Featured Stays */}
        <section className="featured-stays-section">
          <div className="section-header">
            <div className="section-title-wrap">
              <h2>Featured stays this week</h2>
              <p>Handpicked places our guests keep rebooking.</p>
            </div>
            <Link to="/stays" className="brand-link">See all stays &rarr;</Link>
          </div>
          <div className="property-grid">
            {ALL_STAYS.slice(0, 8).map(stay => (
              <PropertyCard
                key={stay.id}
                id={stay.id}
                image={stay.image}
                location={stay.location}
                rating={stay.rating}
                description={stay.description}
                price={stay.price}
                isSuperhost={stay.isSuperhost}
              />
            ))}
          </div>
        </section>

        {/* For Hosts */}
        <section className="for-hosts-section">
          <div className="for-hosts-card">
            <div className="for-hosts-content">
              <p className="for-hosts-overline">FOR HOSTS</p>
              <h2>Your listing, without the fee games.</h2>
              <p>One dashboard for calendar, messages, and payouts. A clear split on every booking — guests see the same total you do.</p>
              <button className="btn-primary" onClick={() => navigate('/host')}>Host with Stayly</button>
            </div>
            <div className="for-hosts-stats">
              <div className="stat-item">
                <h3>3.1%</h3>
                <p>avg host fee</p>
              </div>
              <div className="stat-item">
                <h3>&lt; 1h</h3>
                <p>median host response</p>
              </div>
              <div className="stat-item">
                <h3>96%</h3>
                <p>guest rebook rate</p>
              </div>
              <div className="stat-item">
                <h3>0</h3>
                <p>hidden fees</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
