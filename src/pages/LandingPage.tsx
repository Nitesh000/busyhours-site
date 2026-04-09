import Logo from '../components/Logo';
import GooglePlayBadge from '../components/GooglePlayBadge';
import './LandingPage.css';

const PLAY_URL = 'https://play.google.com/store/apps/details?id=com.busyhours';

const PRO_PRICE = '$6.99';

const FEATURES = [
  {
    icon: '🔕',
    title: 'Notification Blocking',
    color: '#DBE4FF',
    desc: 'Silence all or specific app notifications during focus sessions. Everything is saved so you can review it later.',
  },
  {
    icon: '📅',
    title: 'Smart Scheduling',
    color: '#EDE9FE',
    desc: 'Daily, weekly, monthly (2nd Saturday!), one-time or inverted schedules. Set it once, focus forever.',
  },
  {
    icon: '❄️',
    title: 'App Freeze',
    color: '#E0F7FF',
    desc: 'Opening a frozen app shows a calm "Busy Hours" screen instead. No willpower needed, no apps deleted.',
  },
  {
    icon: '🎯',
    title: 'Per-app Control',
    color: '#FEF9C3',
    desc: 'Block Instagram but let Slack through. Full granular control over which apps are silenced.',
  },
  {
    icon: '🔄',
    title: 'Inverted Schedules',
    color: '#DCFCE7',
    desc: 'Flip any schedule: block OUTSIDE the window. Perfect for protecting your evening wind-down time.',
  },
  {
    icon: '📤',
    title: 'Import & Export',
    color: '#FFE4E6',
    desc: 'Back up your full schedule config to an encrypted .bh file and restore it anytime.',
  },
  {
    icon: '🔔',
    title: 'Status Bar Toggle',
    color: '#FEF3C7',
    desc: 'A persistent notification lets you flip blocking on or off without even opening the app.',
  },
  {
    icon: '🎨',
    title: 'Custom Theme',
    color: '#F3E8FF',
    desc: 'Make BusyHours yours — choose from 9 color palettes and 3 font styles. Pro exclusive.',
  },
];

const STEPS = [
  {
    n: '1',
    title: 'Install free',
    desc: 'Download from Google Play — free forever for core features.',
  },
  {
    n: '2',
    title: 'Grant access',
    desc: 'Allow notification access so BusyHours can intercept distractions.',
  },
  {
    n: '3',
    title: 'Set a schedule',
    desc: 'Pick a time window or just toggle blocking manually anytime.',
  },
  {
    n: '4',
    title: 'Stay focused',
    desc: 'Work distraction-free. Review everything you missed after your session.',
  },
];

export default function LandingPage() {
  return (
    <main>
      {/* ── Hero ──────────────────────────────────────────────────── */}
      <section className="hero">
        <div className="container">
          <div className="hero-grid">
            {/* Left: copy */}
            <div className="hero-copy">
              <div className="hero-eyebrow">
                <Logo size={18} light />
                <span>Now on Google Play</span>
              </div>
              <h1 className="hero-title">
                Focus without
                <br />
                <span className="hero-gradient">the noise</span>
              </h1>
              <p className="hero-sub">
                BusyHours blocks notifications and freezes distracting apps
                during your focus hours — automatically, on your own schedule.
              </p>
              <div className="hero-actions">
                <GooglePlayBadge href={PLAY_URL} />
                <a href="#features" className="btn btn-ghost">
                  See features →
                </a>
              </div>
              <div className="hero-trust">
                <span>✓ Free to start</span>
                <span>✓ No data collected</span>
                <span>✓ Works offline</span>
              </div>
            </div>

            {/* Right: phone mockup */}
            <div className="hero-phone-wrap">
              <div className="phone">
                <div className="phone-notch" />
                <div className="phone-screen">
                  {/* Status bar */}
                  <div className="ps-bar">
                    <span className="ps-app">BusyHours</span>
                    <span className="ps-time">9:41</span>
                  </div>

                  {/* Toggle card */}
                  <div className="ps-card ps-card--active">
                    <div className="ps-ring">🔕</div>
                    <div className="ps-card-text">
                      <div className="ps-card-title">Blocking Active</div>
                      <div className="ps-card-sub">24 silenced today</div>
                    </div>
                    <div className="ps-toggle on" />
                  </div>

                  {/* Stats */}
                  <div className="ps-stats">
                    <div className="ps-stat">
                      <div className="ps-stat-n">24</div>
                      <div className="ps-stat-l">Today</div>
                    </div>
                    <div className="ps-stat-div" />
                    <div className="ps-stat">
                      <div className="ps-stat-n">312</div>
                      <div className="ps-stat-l">All Time</div>
                    </div>
                  </div>

                  {/* Mini bar chart */}
                  <div className="ps-chart-label">Last 7 days</div>
                  <div className="ps-chart">
                    {[4, 8, 6, 12, 9, 15, 24].map((v, i) => (
                      <div key={i} className="ps-bar-wrap">
                        <div
                          className={`ps-bar ${
                            i === 6 ? 'ps-bar--active' : ''
                          }`}
                          style={{ height: `${(v / 24) * 56}px` }}
                        />
                        <span className="ps-bar-label">
                          {['S', 'M', 'T', 'W', 'T', 'F', 'S'][i]}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* App rows */}
                  <div className="ps-section-label">Top Blocked</div>
                  {[
                    { name: 'Instagram', pct: 100 },
                    { name: 'WhatsApp', pct: 72 },
                    { name: 'YouTube', pct: 48 },
                  ].map(a => (
                    <div className="ps-app-row" key={a.name}>
                      <div className="ps-app-dot">{a.name[0]}</div>
                      <div className="ps-app-body">
                        <div className="ps-app-name">{a.name}</div>
                        <div className="ps-app-bar">
                          <div
                            className="ps-app-fill"
                            style={{ width: `${a.pct}%` }}
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              {/* glow */}
              <div className="phone-glow" />
            </div>
          </div>
        </div>
      </section>

      {/* ── Features ──────────────────────────────────────────────── */}
      <section
        className="section"
        id="features"
        style={{ background: 'var(--surface)' }}
      >
        <div className="container">
          <div className="section-header center">
            <div className="section-eyebrow">Features</div>
            <h2 className="section-title">Everything you need to focus</h2>
            <p className="section-sub">
              Powerful enough for deep work, simple enough to set up in 30
              seconds.
            </p>
          </div>
          <div className="grid-3">
            {FEATURES.map(f => (
              <div className="feat-card card" key={f.title}>
                <div className="feat-icon" style={{ background: f.color }}>
                  {f.icon}
                </div>
                <h3 className="feat-title">{f.title}</h3>
                <p className="feat-desc">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How it works ──────────────────────────────────────────── */}
      <section className="section">
        <div className="container">
          <div className="section-header center">
            <div className="section-eyebrow">How it works</div>
            <h2 className="section-title">Up and running in minutes</h2>
          </div>
          <div className="steps-grid">
            {STEPS.map((s, i) => (
              <div className="step" key={s.n}>
                <div className="step-num">{s.n}</div>
                {i < STEPS.length - 1 && <div className="step-line" />}
                <h3 className="step-title">{s.title}</h3>
                <p className="step-desc">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Pricing ───────────────────────────────────────────────── */}
      <section
        className="section"
        id="pricing"
        style={{ background: 'var(--surface)' }}
      >
        <div className="container">
          <div className="section-header center">
            <div className="section-eyebrow">Pricing</div>
            <h2 className="section-title">Simple, honest pricing</h2>
            <p className="section-sub">
              One-time purchase. No subscriptions. No hidden fees.
            </p>
          </div>
          <div className="pricing-grid">
            <div className="plan card">
              <p className="plan-tier">Free</p>
              <div className="plan-price">$0</div>
              <p className="plan-note">Core features, forever free</p>
              <ul className="plan-list">
                <li>
                  <span className="check">✓</span> Manual notification blocking
                </li>
                <li>
                  <span className="check">✓</span> Per-app blocking
                </li>
                <li>
                  <span className="check">✓</span> Blocked notification history
                </li>
                <li>
                  <span className="check">✓</span> Dashboard with charts
                </li>
              </ul>
              <a
                href={PLAY_URL}
                className="btn btn-outlined"
                target="_blank"
                rel="noreferrer"
              >
                Download Free
              </a>
            </div>

            <div className="plan plan--pro card">
              <div className="plan-badge">Most Popular</div>
              <p className="plan-tier">Pro</p>
              <div className="plan-price">{PRO_PRICE}</div>
              <p className="plan-note">One-time · No subscription</p>
              <ul className="plan-list">
                <li>
                  <span className="check">✓</span> Everything in Free
                </li>
                <li>
                  <span className="check">✓</span> Scheduled blocking
                </li>
                <li>
                  <span className="check">✓</span> Daily, weekly, monthly,
                  inverted
                </li>
                <li>
                  <span className="check">✓</span> App Freeze
                </li>
                <li>
                  <span className="check">✓</span> Import & export config (.bh
                  files)
                </li>
                <li>
                  <span className="check">✓</span> Status bar quick toggle
                </li>
                <li>
                  <span className="check">✓</span> Custom theme (9 colors + 3
                  fonts)
                </li>
              </ul>
              <a
                href={PLAY_URL}
                className="btn btn-primary"
                target="_blank"
                rel="noreferrer"
              >
                Get Pro — {PRO_PRICE}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────── */}
      <section className="cta-section">
        <div className="container cta-inner">
          {/* <Logo size={56} light /> */}
          <img
            src="/images/light-logo.png"
            alt="Busy Hours"
            style={{ height: '56px', aspectRatio: 'auto' }}
          />
          <h2 className="cta-title">Ready to reclaim your focus?</h2>
          <p className="cta-sub">
            Download BusyHours free. Upgrade to Pro any time.
          </p>
          <GooglePlayBadge href={PLAY_URL} />
        </div>
      </section>
    </main>
  );
}
