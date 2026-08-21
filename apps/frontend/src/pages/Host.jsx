import React from 'react';
import { Link } from 'react-router-dom';
import '../for-hosts.css';

export default function Host() {
  return (
    <div className="host-page">
      <div className="host-page-container">
        
        {/* Hero Section */}
        <section className="host-hero">
          <div className="host-hero-content">
            <p className="host-overline">FOR HOSTS</p>
            <h1 className="host-title">Your listing, without the<br/>fee games.</h1>
            <p className="host-subtitle">
              A 3.1% average host fee, payouts the day after check-in, and<br/>a guest-facing total that matches exactly what you set.
            </p>
            <div className="host-actions">
              <Link to="/signup" className="btn-primary">Create a host account</Link>
              <button 
                className="btn-outline"
                onClick={() => document.getElementById('earnings-section')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Estimate earnings
              </button>
            </div>
          </div>
          
          <div className="host-hero-stats">
            <div className="stat-item">
              <h3>3.1%</h3>
              <p>avg. host fee</p>
            </div>
            <div className="stat-item">
              <h3>&lt; 1h</h3>
              <p>median host response</p>
            </div>
            <div className="stat-item">
              <h3>96%</h3>
              <p>guests would rebook</p>
            </div>
            <div className="stat-item">
              <h3>0</h3>
              <p>hidden fees</p>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="host-features">
          <div className="feature">
            <div className="feature-icon feature-icon-red">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 14.66V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h5.34"></path><polygon points="18 2 22 6 12 16 8 16 8 12 18 2"></polygon></svg>
            </div>
            <h3>Clear payouts</h3>
            <p>See the exact split before you publish. No surprise deductions.</p>
          </div>
          <div className="feature">
            <div className="feature-icon feature-icon-orange">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
            </div>
            <h3>One calendar</h3>
            <p>Sync availability, block dates, set seasonal rates in a click.</p>
          </div>
          <div className="feature">
            <div className="feature-icon feature-icon-purple">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
            </div>
            <h3>Direct messaging</h3>
            <p>Talk to guests before they book, with templates for the basics.</p>
          </div>
          <div className="feature">
            <div className="feature-icon feature-icon-red">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
            </div>
            <h3>Cover you can read</h3>
            <p>Damage protection terms written in plain language.</p>
          </div>
        </section>

        {/* Table Section */}
        <section id="earnings-section" className="host-table-section">
          <h2>What a month could look like</h2>
          <p className="table-subtitle">Based on typical occupancy for a two-bedroom place in each region.</p>
          <div className="table-responsive">
            <table className="host-table">
              <thead>
                <tr>
                  <th>REGION</th>
                  <th>NIGHTLY TOTAL</th>
                  <th>NIGHTS BOOKED</th>
                  <th>YOUR PROFIT</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Coastal Europe</td>
                  <td>$240</td>
                  <td>18</td>
                  <td><strong>$4,186</strong></td>
                </tr>
                <tr>
                  <td>Mountain / alpine</td>
                  <td>$310</td>
                  <td>14</td>
                  <td><strong>$4,205</strong></td>
                </tr>
                <tr>
                  <td>City centre</td>
                  <td>$165</td>
                  <td>22</td>
                  <td><strong>$3,542</strong></td>
                </tr>
                <tr>
                  <td>Countryside</td>
                  <td>$150</td>
                  <td>16</td>
                  <td><strong>$2,325</strong></td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="table-footnote">Payout shown after the 3.1% host fee. Estimates only — your rates and calendar decide the rest.</p>
        </section>

        {/* CTA Section */}
        <section className="host-cta">
          <h2>Ready when you are.</h2>
          <p>Setting up a listing takes about fifteen minutes. You can save<br/>and come back anytime.</p>
          <Link to="/signup" className="btn-primary">Create a host account</Link>
        </section>

      </div>
    </div>
  );
}
