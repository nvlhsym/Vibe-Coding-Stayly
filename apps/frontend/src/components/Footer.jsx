import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-brand">
          <Link to="/" className="logo">
            <div className="logo-icon">s</div>
            <span className="logo-text">stayly</span>
          </Link>
          <p>A short-term rental marketplace built on transparent pricing and human hosts.</p>
        </div>
        <div className="footer-links">
          <div className="footer-column">
            <h4>Support</h4>
            <Link to="#">Help center</Link>
            <Link to="#">Cancellation</Link>
            <Link to="#">Safety</Link>
            <Link to="#">Report a concern</Link>
          </div>
          <div className="footer-column">
            <h4>Hosting</h4>
            <Link to="#">Host your place</Link>
            <Link to="#">Host resources</Link>
            <Link to="#">Community</Link>
            <Link to="#">Responsible hosting</Link>
          </div>
          <div className="footer-column">
            <h4>Stayly</h4>
            <Link to="#">About</Link>
            <Link to="#">Newsroom</Link>
            <Link to="#">Careers</Link>
            <Link to="#">Investors</Link>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-copyright">
          © 2026 Stayly, Inc. All prices shown are total — no hidden fees.
        </div>
        <div className="footer-legal">
          <Link to="#">Privacy</Link>
          <Link to="#">Terms</Link>
          <Link to="#">Sitemap</Link>
        </div>
      </div>
    </footer>
  );
}
