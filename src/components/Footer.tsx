import { Link } from 'react-router-dom';
import Logo from './Logo';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <div className="footer-logo">
            <img
              src="/images/light-logo.png"
              style={{ height: '40px', aspectRatio: 'auto' }}
            />
          </div>
          <span className="footer-name">BusyHours</span>
          <p className="footer-tagline">Stay focused. Block the noise.</p>
        </div>

        <div className="footer-links">
          <div className="footer-col">
            <h4>App</h4>
            <a
              href="https://play.google.com/store/apps/details?id=com.busyhours"
              target="_blank"
              rel="noreferrer"
            >
              Google Play
            </a>
            <Link to="/docs">Documentation</Link>
          </div>
          <div className="footer-col">
            <h4>Legal</h4>
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/terms">Terms of Service</Link>
          </div>
          <div className="footer-col">
            <h4>Contact</h4>
            <a href="mailto:support@thecodingant.in">support@thecodingant.in</a>
            <a href="https://busyhours.thecodingant.in">
              busyhours.thecodingant.in
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} BusyHours · Built by{' '}
          <a href="https://thecodingant.in">The Coding Ant</a>
        </p>
      </div>
    </footer>
  );
}
