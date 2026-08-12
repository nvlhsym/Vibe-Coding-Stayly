import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Login() {
  return (
    <>
      <Header />
      <main className="main-content" style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '40px 20px' }}>
        <div className="auth-container">
          <h1 className="auth-title">Welcome back</h1>
          <p className="auth-subtitle">Sign in to keep your saved stays and bookings in one place.</p>

          <button className="btn-google">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.6402 9.2045C17.6402 8.56636 17.5829 7.95272 17.4765 7.36363H9V10.845H13.8436C13.635 11.9699 13.0009 12.9231 12.0477 13.5613V15.8195H14.9563C16.6582 14.2527 17.6402 11.9454 17.6402 9.2045Z" fill="#4285F4"/>
              <path d="M9.00001 18C11.43 18 13.4673 17.1941 14.9564 15.8195L12.0477 13.5613C11.2418 14.1013 10.2109 14.4204 9.00001 14.4204C6.65592 14.4204 4.67183 12.8372 3.9641 10.71H0.957275V13.0418C2.43818 15.9831 5.48183 18 9.00001 18Z" fill="#34A853"/>
              <path d="M3.96409 10.71C3.78409 10.17 3.68182 9.59318 3.68182 9C3.68182 8.40682 3.78409 7.82999 3.96409 7.28999V4.95817H0.957273C0.347727 6.17317 0 7.54772 0 9C0 10.4523 0.347727 11.8268 0.957273 13.0418L3.96409 10.71Z" fill="#FBBC05"/>
              <path d="M9.00001 3.57955C10.3214 3.57955 11.5077 4.03364 12.4405 4.92545L15.0218 2.34409C13.4632 0.891818 11.4259 0 9.00001 0C5.48183 0 2.43818 2.01682 0.957275 4.95818L3.9641 7.29C4.67183 5.16273 6.65592 3.57955 9.00001 3.57955Z" fill="#EA4335"/>
            </svg>
            Continue with Google
          </button>

          <div className="divider">
            <span>OR</span>
          </div>

          <form className="auth-form" onSubmit={(e) => e.preventDefault()}>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" placeholder="example@email.com" required />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" placeholder="At least 8 characters" required />
            </div>
            <button type="submit" className="btn-submit">Sign In</button>
          </form>

          <div className="auth-footer">
            <p>New to Stayly? <Link to="/signup" className="brand-link">Create an account</Link></p>
            <Link to="/" className="back-link">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
              Back to stays
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
