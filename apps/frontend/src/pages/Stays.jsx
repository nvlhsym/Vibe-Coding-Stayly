import { useState, useMemo } from 'react';
import PropertyCard from '../components/PropertyCard';

import { ALL_STAYS } from '../data/stays';

const FILTERS = [
  'Cabins',
  'Under $150',
  'Sea view',
  'Superhost',
  'Wi-Fi',
  'Pet-friendly',
  'Kitchen'
];

export default function Stays() {
  const [activeFilters, setActiveFilters] = useState([]);

  const toggleFilter = (filter) => {
    setActiveFilters(prev => 
      prev.includes(filter)
        ? prev.filter(f => f !== filter)
        : [...prev, filter]
    );
  };

  const filteredStays = useMemo(() => {
    return ALL_STAYS.filter(stay => {
      if (activeFilters.length === 0) return true;

      // Must match ALL active filters (AND logic)
      return activeFilters.every(filter => {
        if (filter === 'Under $150') return stay.price <= 150;
        if (filter === 'Superhost') return stay.isSuperhost === true;
        return stay.amenities.includes(filter);
      });
    });
  }, [activeFilters]);

  return (
    <>
      <div className="page-header">
        <div className="page-header-text">
          <h1>All stays</h1>
          <p>{filteredStays.length} places &middot; all prices include cleaning, service, and taxes.</p>
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

      <section className="featured-stays-section">
        <div className="property-grid">
          {filteredStays.length > 0 ? (
            filteredStays.map(stay => (
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
            ))
          ) : (
            <p style={{ gridColumn: '1 / -1', textAlign: 'center', padding: '40px', color: 'var(--text)' }}>
              No stays match all your selected filters. Try removing some.
            </p>
          )}
        </div>
      </section>
    </>
  );
}
