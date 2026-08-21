import { Link } from 'react-router-dom';
import ExperienceCard from '../components/ExperienceCard';
import { EXPERIENCES } from '../data/experiences';

export default function Experiences() {
  return (
    <>
      <div className="experiences-header">
        <div className="experiences-overline">EXPERIENCES</div>
        <h1 className="experiences-title">Things to do, led by the people<br />who live there.</h1>
        <p className="experiences-subtitle">Every experience shows one price per guest — booking fee and taxes already<br />inside. No add-ons at checkout.</p>
      </div>

      <section className="experiences-grid">
        {EXPERIENCES.map((exp) => (
          <ExperienceCard 
            key={exp.id}
            id={exp.id}
            image={exp.image}
            hostName={exp.hostName}
            title={exp.title}
            location={exp.location}
            duration={exp.duration}
            maxGuests={exp.maxGuests}
            rating={exp.rating}
            reviewsCount={exp.reviewsCount}
            price={exp.price}
          />
        ))}
      </section>

      {/* Call to Action Block */}
      <section className="cta-block">
        <h2>Want a stay to go with it?</h2>
        <p>Pair any experience with a nearby place — all in nightly totals, always.</p>
        <Link to="/stays" className="btn-primary">Browse stays</Link>
      </section>
    </>
  );
}
