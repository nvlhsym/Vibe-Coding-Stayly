import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PropertyCard from '../components/PropertyCard';
import { propertiesData } from '../data/properties';

export default function TripPlanner() {
  const [promptValue, setPromptValue] = useState('');
  const [showResults, setShowResults] = useState(false);
  const [draftPromptText, setDraftPromptText] = useState('');
  const [recommendedStays, setRecommendedStays] = useState([]);
  
  const navigate = useNavigate();

  const handleChipClick = (text) => {
    setPromptValue(text);
  };

  const handlePlanTrip = () => {
    const val = promptValue.trim().toLowerCase();
    if (!val) return;

    setDraftPromptText(promptValue.trim());
    setShowResults(true);

    const scoredProperties = propertiesData.map(prop => {
      let score = 0;
      prop.keywords.forEach(kw => {
        if (val.includes(kw.toLowerCase())) {
          score++;
        }
      });
      return { ...prop, score };
    });

    scoredProperties.sort((a, b) => {
      if (b.score !== a.score) return b.score - a.score;
      return parseFloat(b.rating) - parseFloat(a.rating);
    });

    setRecommendedStays(scoredProperties.slice(0, 4));
  };

  const handleSeeAll = () => {
    if (promptValue.trim()) {
      navigate(`/matching-stays?q=${encodeURIComponent(promptValue.trim())}`);
    } else {
      navigate('/matching-stays');
    }
  };

  return (
    <div className="trip-planner-section">
      <p className="overline">TRIP PLANNER</p>
      <h1>Describe the trip. We'll shape the rest.</h1>
      <p className="subtitle">Write it like you'd text a friend. We turn it into a night-by-night outline and pull<br />stays whose totals actually fit.</p>

      <div className="ai-prompt-card">
        <textarea 
          placeholder="Long weekend somewhere green, cabin with a fireplace, under $180 a night, dog comes along..."
          value={promptValue}
          onChange={(e) => setPromptValue(e.target.value)}
        ></textarea>
        
        <div className="prompt-suggestions">
          <button className="chip" onClick={() => handleChipClick('quiet cabin, fireplace, under $180, dog-friendly')}>quiet cabin, fireplace, under $180, dog-friendly</button>
          <button className="chip" onClick={() => handleChipClick('sea view for 4, walkable town, 3 nights')}>sea view for 4, walkable town, 3 nights</button>
          <button className="chip" onClick={() => handleChipClick('ski-in ski-out with a hot tub')}>ski-in ski-out with a hot tub</button>
          <button className="chip" onClick={() => handleChipClick('city loft near cafés, good wifi, monthly')}>city loft near cafés, good wifi, monthly</button>
        </div>
        
        <button className="btn-primary btn-plan" onClick={handlePlanTrip}>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/></svg>
          Plan my trip
        </button>
      </div>
      
      {showResults && (
        <div id="trip-results" style={{ marginTop: '48px' }}>
          <div className="plan-badge">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/></svg>
            Draft plan for "<span>{draftPromptText}</span>"
          </div>

          <div className="itinerary-list">
            <div className="itinerary-item">
              <div className="itinerary-day">01</div>
              <div className="itinerary-desc">Arrive, settle in, groceries and a slow evening at the place.</div>
            </div>
            <div className="itinerary-item">
              <div className="itinerary-day">02</div>
              <div className="itinerary-desc">Full day out — the walk or drive your host recommends most.</div>
            </div>
            <div className="itinerary-item">
              <div className="itinerary-day">03</div>
              <div className="itinerary-desc">Local morning: market, cafe, something handmade. Free afternoon.</div>
            </div>
            <div className="itinerary-item">
              <div className="itinerary-day">04</div>
              <div className="itinerary-desc">Late checkout if the calendar allows, then head home.</div>
            </div>
          </div>

          <div className="recommended-stays-section" style={{ marginTop: '64px' }}>
            <h2 style={{ fontSize: '24px', marginBottom: '24px' }}>Stays that fit this</h2>
            <div className="property-grid" style={{ marginBottom: '32px' }}>
              {recommendedStays.map((prop, idx) => (
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
            <div style={{ textAlign: 'center' }}>
              <button className="btn-secondary" onClick={handleSeeAll}>See all matching stays &rarr;</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
