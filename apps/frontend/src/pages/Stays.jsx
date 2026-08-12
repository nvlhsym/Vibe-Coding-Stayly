import PropertyCard from '../components/PropertyCard';

export default function Stays() {
  return (
    <>
      <div className="page-header">
        <div className="page-header-text">
          <h1>All stays</h1>
          <p>8 places &middot; all prices include cleaning, service, and taxes.</p>
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
        <button className="chip">Pet-friendly</button>
        <button className="chip">Kitchen</button>
      </div>

      <section className="featured-stays-section">
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
          <PropertyCard 
            image="/img/property_1_1785986918826.png"
            location="Oia, Santorini, Greece"
            rating="4.99"
            description="Whitewashed suite on the caldera"
            price="220"
            isSuperhost={true}
          />
          <PropertyCard 
            image="/img/property_2_1785986930295.png"
            location="Banff, Alberta, Canada"
            rating="4.85"
            description="A-frame cabin near Lake Louise"
            price="150"
            isSuperhost={false}
          />
          <PropertyCard 
            image="/img/property_3_1785986940180.png"
            location="Tuscany, Italy"
            rating="4.92"
            description="Historic farmhouse with vineyard views"
            price="280"
            isSuperhost={true}
          />
          <PropertyCard 
            image="/img/property_4_1785986953941.png"
            location="Zermatt, Switzerland"
            rating="4.96"
            description="Alpine chalet facing the Matterhorn"
            price="410"
            isSuperhost={true}
          />
        </div>
      </section>
    </>
  );
}
