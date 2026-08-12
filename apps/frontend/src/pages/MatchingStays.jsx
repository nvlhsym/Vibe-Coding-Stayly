import { useLocation, useNavigate } from 'react-router-dom';
import PropertyCard from '../components/PropertyCard';
import { propertiesData } from '../data/properties';
import { useMemo } from 'react';

export default function MatchingStays() {
  const location = useLocation();
  const navigate = useNavigate();
  
  const searchParams = new URLSearchParams(location.search);
  const q = searchParams.get('q') || '';

  const matchedStays = useMemo(() => {
    if (!q) return propertiesData;
    const lowerQ = q.toLowerCase();
    
    return propertiesData.filter(prop => {
      let match = false;
      prop.keywords.forEach(kw => {
        if (lowerQ.includes(kw.toLowerCase())) {
          match = true;
        }
      });
      return match;
    });
  }, [q]);

  const handleShowEverything = () => {
    navigate('/stays');
  };

  return (
    <>
      <div className="page-header">
        <div className="page-header-text">
          <h1>{q ? `Stays matching "${q}"` : 'All stays'}</h1>
          <p>{matchedStays.length} places &middot; all prices include cleaning, service, and taxes.</p>
        </div>
        <button className="filters-btn">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon></svg>
          Filters
        </button>
      </div>
      
      <div className="filter-chips">
        <button className="chip">Cabins</button>
        <button className="chip">Under $150</button>
        <button className="chip">Sea view</button>
        <button className="chip">Superhost</button>
        <button className="chip">Wi-Fi</button>
        <button className="chip">Pool</button>
        <button className="chip">Ski-in/out</button>
      </div>
      
      <section className="properties-section">
        {matchedStays.length === 0 ? (
          <div className="empty-state">
            <h2>No stays match that yet.</h2>
            <p>Try a broader description or clear your query.</p>
            <button className="btn-primary" style={{ marginTop: '16px' }} onClick={handleShowEverything}>
              Show everything
            </button>
          </div>
        ) : (
          <div className="property-grid">
            {matchedStays.map((prop, idx) => (
              <PropertyCard 
                key={idx}
                image={prop.image}
                location={prop.title}
                rating={prop.rating}
                description={prop.desc}
                price={prop.price}
                isSuperhost={prop.superhost}
              />
            ))}
          </div>
        )}
      </section>
    </>
  );
}
