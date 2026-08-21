import { Link } from 'react-router-dom';

export default function ExperienceCard({ id, image, hostName, title, location, duration, maxGuests, rating, reviewsCount, price }) {
  return (
    <Link to={`/experiences/${id}`} className="experience-card" style={{ textDecoration: 'none', color: 'inherit' }}>
      <div className="experience-image-wrapper">
        <img src={image} alt={title} className="experience-image" />
        <div className="host-badge">Hosted by {hostName}</div>
      </div>
      <div className="experience-info">
        <h3 className="experience-name">{title}</h3>
        <div className="experience-meta">
          <span className="meta-item">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg> 
            {location}
          </span>
          <span className="meta-item">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg> 
            {duration}
          </span>
          <span className="meta-item">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg> 
            Up to {maxGuests} guests
          </span>
        </div>
        <div className="experience-footer">
          <div className="experience-rating">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
            </svg>
            <span><strong>{rating}</strong> ({reviewsCount})</span>
          </div>
          <div className="experience-price"><strong>${price}</strong> total / guest</div>
        </div>
      </div>
    </Link>
  );
}
