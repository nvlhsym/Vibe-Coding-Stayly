export default function PropertyCard({ image, location, rating, description, price, isSuperhost }) {
  return (
    <div className="property-card">
      <div className="property-image-container">
        <img src={image} alt={location} />
        {isSuperhost && <div className="superhost-badge">Superhost</div>}
      </div>
      <div className="property-info">
        <div className="property-title-row">
          <h3>{location}</h3>
          <div className="property-rating">
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="currentColor" stroke="none">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
            </svg> {rating}
          </div>
        </div>
        <p className="property-desc">{description}</p>
        <p className="property-price"><strong>${price}</strong> total / night - all fees included</p>
      </div>
    </div>
  );
}
