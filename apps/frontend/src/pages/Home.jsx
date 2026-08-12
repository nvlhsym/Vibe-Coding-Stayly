import { Link } from 'react-router-dom';
import Header from '../components/Header';
import PropertyCard from '../components/PropertyCard';

export default function Home() {
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
                <input type="text" placeholder="cabin near a lake, under $150..." />
              </div>
            </div>
            <div className="search-divider"></div>
            <div className="search-field-wrapper">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
              <div className="search-field">
                <label>Dates</label>
                <input type="text" placeholder="Any week" />
              </div>
            </div>
            <div className="search-divider"></div>
            <div className="search-field-wrapper">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
              <div className="search-field">
                <label>Guests</label>
                <input type="text" placeholder="Add guests" />
              </div>
            </div>
            <button className="btn-search">
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

      <div style={{ padding: '0 40px', maxWidth: '1440px', margin: '0 auto', width: '100%' }}>
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
            <PropertyCard 
              image="/img/property_1_1785986918826.png"
              location="Mallorca, Spain"
              rating="4.94"
              description="Cliffside villa with infinity pool"
              price="350"
              isSuperhost={true}
            />
            <PropertyCard 
              image="/img/property_2_1785986930295.png"
              location="Bend, Oregon, United States"
              rating="4.98"
              description="Wood-burning cabin among the pines"
              price="180"
              isSuperhost={true}
            />
            <PropertyCard 
              image="/img/property_3_1785986940180.png"
              location="Kyoto, Japan"
              rating="5.0"
              description="Restored 100-year-old machiya"
              price="210"
              isSuperhost={false}
            />
            <PropertyCard 
              image="/img/property_4_1785986953941.png"
              location="Ubud, Bali, Indonesia"
              rating="4.81"
              description="Villa above the rice terraces"
              price="90"
              isSuperhost={true}
            />
          </div>
        </section>

        {/* Destinations */}
        <section className="destinations-section">
          <div className="section-header">
            <h2>Popular destinations</h2>
          </div>
          <div className="destinations-grid">
            <div className="destination-card">
              <img src="/img/media__1785899944006.png" alt="London" />
              <div className="destination-info">
                <h3>London, UK</h3>
                <p>241 stays</p>
              </div>
            </div>
            <div className="destination-card">
              <img src="/img/media__1785899928020.png" alt="Paris" />
              <div className="destination-info">
                <h3>Paris, France</h3>
                <p>512 stays</p>
              </div>
            </div>
            <div className="destination-card">
              <img src="/img/media__1785986674660.png" alt="Tokyo" />
              <div className="destination-info">
                <h3>Tokyo, Japan</h3>
                <p>198 stays</p>
              </div>
            </div>
            <div className="destination-card">
              <img src="/img/media__1785986713537.png" alt="New York" />
              <div className="destination-info">
                <h3>New York, USA</h3>
                <p>420 stays</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
