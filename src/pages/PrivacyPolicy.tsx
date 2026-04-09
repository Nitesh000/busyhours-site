import './Legal.css';

const LAST_UPDATED = 'April 7, 2026';

export default function PrivacyPolicy() {
  return (
    <main className="legal-page">
      <div className="container">
        <div className="legal-header">
          <div className="chip">Legal</div>
          <h1>Privacy Policy</h1>
          <p className="legal-meta">Last updated: {LAST_UPDATED}</p>
        </div>
        <div className="prose legal-body">
          <p>
            BusyHours ("we", "us", "our") is developed by The Coding Ant. This Privacy Policy
            describes how BusyHours handles your information.
          </p>

          <h2>1. Data We Collect</h2>
          <p>BusyHours is designed with privacy as a core principle:</p>
          <ul>
            <li>
              <strong>Notification content</strong> — When blocking is active, notification
              metadata (app name, title, body text, timestamp) is stored <em>locally on your
              device only</em> in order to show you what was blocked. This data never leaves
              your device.
            </li>
            <li>
              <strong>App list</strong> — BusyHours reads the list of installed apps on your
              device solely to let you choose which apps to block or freeze. This list is
              never transmitted to any server.
            </li>
            <li>
              <strong>In-App Purchase</strong> — Purchase receipts are processed by Google
              Play. We do not store payment information.
            </li>
            <li>
              <strong>Usage data</strong> — We do not collect analytics, crash reports, or
              any telemetry data. There is no tracking SDK in the app.
            </li>
          </ul>

          <h2>2. Data Storage</h2>
          <p>
            All data (blocked notifications, schedules, app selections, preferences) is stored
            exclusively on your device using Android SharedPreferences and AsyncStorage. We do
            not operate any servers or cloud storage for user data.
          </p>

          <h2>3. Permissions Explained</h2>
          <ul>
            <li>
              <strong>Notification Listener Service</strong> — Required to intercept and
              optionally cancel incoming notifications during blocking sessions. BusyHours
              only reads notification metadata; it does not read message content from
              end-to-end encrypted apps.
            </li>
            <li>
              <strong>Accessibility Service</strong> — Used exclusively to detect when a
              frozen app comes to the foreground, so BusyHours can display the freeze
              overlay. This service does not read screen content, passwords, or any sensitive
              information.
            </li>
            <li>
              <strong>QUERY_ALL_PACKAGES</strong> — Needed to build the list of installed
              apps for per-app blocking and freeze configuration.
            </li>
            <li>
              <strong>SCHEDULE_EXACT_ALARM / USE_EXACT_ALARM</strong> — Required to trigger
              scheduled blocking at the precise time you configured.
            </li>
            <li>
              <strong>RECEIVE_BOOT_COMPLETED</strong> — Allows BusyHours to reschedule
              active alarms after the device reboots.
            </li>
          </ul>

          <h2>4. Third-Party Services</h2>
          <p>
            BusyHours uses Google Play Billing for in-app purchases. By purchasing BusyHours
            Pro, you agree to{' '}
            <a href="https://play.google.com/about/play-terms/" target="_blank" rel="noreferrer">
              Google Play's Terms of Service
            </a>.
          </p>

          <h2>5. Children's Privacy</h2>
          <p>
            BusyHours is not directed to children under 13. We do not knowingly collect
            information from children.
          </p>

          <h2>6. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy. The "Last updated" date at the top of this
            page will reflect any changes. Continued use of BusyHours after changes
            constitutes acceptance of the updated policy.
          </p>

          <h2>7. Contact Us</h2>
          <p>
            For privacy questions, contact us at{' '}
            <a href="mailto:privacy@thecodingant.in">privacy@thecodingant.in</a> or visit{' '}
            <a href="https://busyhours.thecodingant.in">busyhours.thecodingant.in</a>.
          </p>
        </div>
      </div>
    </main>
  );
}
