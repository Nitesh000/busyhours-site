import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Navbar.css';

const PLAY_URL = 'https://play.google.com/store/apps/details?id=com.busyhours';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <header className="navbar">
      <div className="container navbar-inner">
        <Link to="/" className="navbar-brand" onClick={close}>
          {/* <Logo size={34} /> */}
          <img
            src="/images/light-logo.png"
            alt="Busy Hours"
            style={{ height: '34px', aspectRatio: 'auto' }}
          />
          <span className="navbar-name">BusyHours</span>
        </Link>

        <nav className={`navbar-links ${open ? 'open' : ''}`}>
          <NavLink to="/" end onClick={close}>
            Home
          </NavLink>
          <NavLink to="/docs" onClick={close}>
            Docs
          </NavLink>
          <NavLink to="/privacy" onClick={close}>
            Privacy
          </NavLink>
          <a
            href={PLAY_URL}
            className="btn btn-primary btn-sm"
            target="_blank"
            rel="noreferrer"
            onClick={close}
          >
            ↓ Get the App
          </a>
        </nav>

        <button
          className={`navbar-hamburger ${open ? 'is-open' : ''}`}
          aria-label="Toggle menu"
          onClick={() => setOpen(o => !o)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}
