import './Legal.css';

const LAST_UPDATED = 'April 7, 2026';

export default function Terms() {
  return (
    <main className="legal-page">
      <div className="container">
        <div className="legal-header">
          <div className="chip">Legal</div>
          <h1>Terms of Service</h1>
          <p className="legal-meta">Last updated: {LAST_UPDATED}</p>
        </div>
        <div className="prose legal-body">
          <p>
            By downloading or using BusyHours, you agree to these Terms of Service. If you
            disagree, please uninstall the app.
          </p>

          <h2>1. Use of the App</h2>
          <p>
            BusyHours is provided for personal productivity purposes. You agree not to
            reverse-engineer, decompile, or distribute modified versions of the app.
          </p>

          <h2>2. Pro License</h2>
          <p>
            BusyHours Pro is a one-time, non-transferable, non-refundable in-app purchase
            that unlocks Pro features for a single Google account. The license is valid for
            as long as the app is available on your device.
          </p>

          <h2>3. No Warranty</h2>
          <p>
            BusyHours is provided "as is" without warranty of any kind. We do not guarantee
            that the app will be error-free, uninterrupted, or compatible with every Android
            device. Notification interception behavior may vary across Android OEMs.
          </p>

          <h2>4. Limitation of Liability</h2>
          <p>
            To the fullest extent permitted by law, The Coding Ant shall not be liable for
            any indirect, incidental, or consequential damages arising from your use of
            BusyHours.
          </p>

          <h2>5. Termination</h2>
          <p>
            We reserve the right to update, modify, or discontinue BusyHours at any time
            without notice.
          </p>

          <h2>6. Governing Law</h2>
          <p>
            These Terms are governed by the laws of India. Any disputes shall be resolved in
            the courts of India.
          </p>

          <h2>7. Contact</h2>
          <p>
            Questions? Email us at{' '}
            <a href="mailto:support@thecodingant.in">support@thecodingant.in</a>.
          </p>
        </div>
      </div>
    </main>
  );
}
