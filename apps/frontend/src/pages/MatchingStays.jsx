import { useLocation, useNavigate } from 'react-router-dom';
import PropertyCard from '../components/PropertyCard';
import { propertiesData } from '../data/properties';
import { useMemo, useState } from 'react';

const FILTERS = [
  'Cabins',
  'Under $150',
  'Sea view',
  'Superhost',
  'Wi-Fi',
  'Pool',
  'Ski-in/out'
];

export default function MatchingStays() {
  const location = useLocation();
  const navigate = useNavigate();
  
  const searchParams = new URLSearchParams(location.search);
  const q = searchParams.get('q') || '';

  const [activeFilters, setActiveFilters] = useState([]);

  const toggleFilter = (filter) => {
    setActiveFilters(prev => 
      prev.includes(filter)
        ? prev.filter(f => f !== filter)
        : [...prev, filter]
    );
  };

  const matchedStays = useMemo(() => {
    let result = propertiesData;
    
    // Filter by search query first
    if (q) {
      const lowerQ = q.toLowerCase();
      result = result.filter(prop => {
        let match = false;
        prop.keywords.forEach(kw => {
          if (lowerQ.includes(kw.toLowerCase())) {
            match = true;
          }
        });
        return match;
      });
    }

    // Filter by active multi-select filters
    if (activeFilters.length > 0) {
      result = result.filter(stay => {
        return activeFilters.every(filter => {
          if (filter === 'Under $150') return parseInt(stay.price) <= 150;
          if (filter === 'Superhost') return stay.superhost === true;
          if (filter === 'Cabins') return stay.keywords.some(k => k.toLowerCase().includes('cabin'));
          if (filter === 'Sea view') return stay.keywords.some(k => k.toLowerCase().includes('sea') || k.toLowerCase().includes('ocean'));
          if (filter === 'Wi-Fi') return stay.keywords.some(k => k.toLowerCase().includes('wifi'));
          if (filter === 'Pool') return stay.keywords.some(k => k.toLowerCase().includes('pool'));
          if (filter === 'Ski-in/out') return stay.keywords.some(k => k.toLowerCase().includes('ski'));
          return false;
        });
      });
    }

    return result;
  }, [q, activeFilters]);

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
      </div>
      
      <div className="filter-chips">
        {FILTERS.map(filter => (
          <button 
            key={filter}
            className={`chip ${activeFilters.includes(filter) ? 'active-filter' : ''}`}
            onClick={() => toggleFilter(filter)}
          >
            {filter}
          </button>
        ))}
      </div>
      
      <section className="properties-section">
        {matchedStays.length === 0 ? (
          <div className="empty-state">
            <h2>No stays match that yet.</h2>
            <p>Try a broader description or clear your query and filters.</p>
            <button className="btn-primary" style={{ marginTop: '16px' }} onClick={handleShowEverything}>
              Show everything
            </button>
          </div>
        ) : (
          <div className="property-grid">
            {matchedStays.map((prop, idx) => (
              <PropertyCard 
                key={idx}
                id={prop.id}
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
