import { Link } from 'react-router-dom';
import ExperienceCard from '../components/ExperienceCard';

export default function Experiences() {
  return (
    <>
      <div className="experiences-header">
        <div className="experiences-overline">EXPERIENCES</div>
        <h1 className="experiences-title">Things to do, led by the people<br />who live there.</h1>
        <p className="experiences-subtitle">Every experience shows one price per guest — booking fee and taxes already<br />inside. No add-ons at checkout.</p>
      </div>

      <section className="experiences-grid">
        <ExperienceCard 
          image="/img/exp_pasta.png"
          hostName="Giulia"
          title="Handmade pasta on an Amalfi terrace"
          location="Amalfi, Italy"
          duration="3 hours"
          maxGuests="8"
          rating="4.96"
          reviewsCount="214"
          price="70"
        />
        <ExperienceCard 
          image="/img/exp_hike.png"
          hostName="Matthias"
          title="Sunrise ridge hike + thermos coffee"
          location="Interlaken, Switzerland"
          duration="6 hours"
          maxGuests="6"
          rating="4.91"
          reviewsCount="132"
          price="84"
        />
        <ExperienceCard 
          image="/img/exp_dyeing.png"
          hostName="Aya"
          title="Indigo dyeing in a machiya workshop"
          location="Kyoto, Japan"
          duration="2 hours"
          maxGuests="6"
          rating="4.90"
          reviewsCount="301"
          price="56"
        />
        <ExperienceCard 
          image="/img/exp_fado.png"
          hostName="Rui"
          title="Backstreet fado and petiscos crawl"
          location="Lisbon, Portugal"
          duration="4 hours"
          maxGuests="10"
          rating="4.88"
          reviewsCount="175"
          price="43"
        />
        <ExperienceCard 
          image="/img/exp_bread.png"
          hostName="Fatima"
          title="Village bread baking in the Atlas foothills"
          location="Imlil, Morocco"
          duration="3 hours"
          maxGuests="7"
          rating="4.94"
          reviewsCount="88"
          price="42"
        />
        <ExperienceCard 
          image="/img/exp_kayak.png"
          hostName="Ingrid"
          title="Quiet fjord kayak at golden hour"
          location="Ålesund, Norway"
          duration="3.5 hours"
          maxGuests="4"
          rating="4.89"
          reviewsCount="67"
          price="92"
        />
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
