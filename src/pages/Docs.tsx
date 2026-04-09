import { useState } from 'react';
import './Docs.css';

const SECTIONS = [
  {
    id: 'getting-started',
    title: 'Getting Started',
    content: (
      <>
        <h2>Getting Started</h2>
        <p>Welcome to BusyHours! Follow these steps to set up your first focus session.</p>

        <h3>Step 1 — Install the app</h3>
        <p>Download BusyHours from the <a href="https://play.google.com/store/apps/details?id=com.busyhours" target="_blank" rel="noreferrer">Google Play Store</a>. The app is free to download.</p>

        <h3>Step 2 — Grant notification access</h3>
        <p>On first launch, BusyHours will ask you to grant Notification Listener access. This is required so the app can intercept and block incoming notifications.</p>
        <ol style={{ paddingLeft: 24, color: 'var(--on-surface-variant)', lineHeight: 2 }}>
          <li>Tap <strong>Grant Access</strong> on the permissions screen</li>
          <li>Find <strong>BusyHours</strong> in the list</li>
          <li>Toggle the switch to <strong>On</strong></li>
          <li>Confirm the dialog and return to the app</li>
        </ol>

        <h3>Step 3 — Start blocking</h3>
        <p>On the Dashboard, tap the switch to enable blocking. All incoming notifications will now be silently intercepted and stored for you to review later.</p>
      </>
    ),
  },
  {
    id: 'notification-blocking',
    title: 'Notification Blocking',
    content: (
      <>
        <h2>Notification Blocking</h2>

        <h3>How it works</h3>
        <p>BusyHours uses Android's Notification Listener Service to intercept notifications before they appear. When blocking is active, the notification is saved to your history and immediately cancelled — you won't see any banners, sounds, or badges.</p>

        <h3>Global vs per-app blocking</h3>
        <p>By default, BusyHours blocks notifications from all apps. To block only specific apps:</p>
        <ol style={{ paddingLeft: 24, color: 'var(--on-surface-variant)', lineHeight: 2 }}>
          <li>Go to the <strong>Apps</strong> tab</li>
          <li>Disable <strong>"Block all apps"</strong></li>
          <li>Toggle individual apps on to block them</li>
        </ol>

        <h3>Reviewing blocked notifications</h3>
        <p>Tap <strong>"See all"</strong> on the Dashboard to view the complete list of blocked notifications, grouped by date. Tap <strong>"Clear All"</strong> to dismiss them.</p>
      </>
    ),
  },
  {
    id: 'schedules',
    title: 'Schedules (Pro)',
    content: (
      <>
        <h2>Schedules</h2>
        <p>Schedules are a Pro feature. They automatically enable notification blocking during your chosen time windows.</p>

        <h3>Schedule types</h3>
        <ul>
          <li><strong>Daily</strong> — Repeats every day at the same time</li>
          <li><strong>Weekly</strong> — Choose specific days (e.g. Mon–Fri only)</li>
          <li><strong>Monthly Nth Weekday</strong> — Block on the 2nd Saturday, 4th Monday, etc.</li>
          <li><strong>One-time</strong> — A single specific date</li>
        </ul>

        <h3>Inverted schedules</h3>
        <p>Toggle <strong>Invert Schedule</strong> to block notifications OUTSIDE the time window instead of inside it. For example, an inverted 9am–5pm schedule blocks notifications before 9am and after 5pm.</p>

        <h3>Import & export</h3>
        <p>Go to <strong>Profile → Export Config</strong> to save your schedules as a JSON file. Share this file to import on another device or after reinstalling.</p>
      </>
    ),
  },
  {
    id: 'app-freeze',
    title: 'App Freeze (Pro)',
    content: (
      <>
        <h2>App Freeze</h2>
        <p>App Freeze is a Pro feature that blocks you from using specific apps during busy hours by showing a full-screen overlay instead of launching the app.</p>

        <h3>Setup</h3>
        <ol style={{ paddingLeft: 24, color: 'var(--on-surface-variant)', lineHeight: 2 }}>
          <li>Go to <strong>Apps → Manage Frozen Apps</strong></li>
          <li>Tap <strong>Enable</strong> to grant Accessibility Service permission</li>
          <li>Find BusyHours in the list and enable it</li>
          <li>Return to BusyHours and select the apps to freeze</li>
        </ol>

        <h3>How it works</h3>
        <p>BusyHours uses Android's Accessibility Service to detect when a frozen app comes to the foreground. It immediately shows a full-screen "App Frozen During Busy Hours" overlay with a Go Home button. The frozen app never actually launches.</p>

        <h3>Important notes</h3>
        <ul>
          <li>App Freeze works independently of notification blocking — you can use either or both</li>
          <li>BusyHours itself is never frozen</li>
          <li>Launcher apps and system UI are never blocked</li>
        </ul>
      </>
    ),
  },
  {
    id: 'custom-theme',
    title: 'Custom Theme (Pro)',
    content: (
      <>
        <h2>Custom Theme</h2>
        <p>Custom Theme is a Pro feature that lets you personalise BusyHours with your own color palette and font style. Changes apply instantly across the entire app.</p>

        <h3>Opening Custom Theme</h3>
        <ol style={{ paddingLeft: 24, color: 'var(--on-surface-variant)', lineHeight: 2 }}>
          <li>Go to the <strong>Profile</strong> tab</li>
          <li>Under <strong>Appearance</strong>, tap <strong>Custom Theme</strong></li>
          <li>Pro users are taken directly to the theme editor</li>
        </ol>

        <h3>Color palettes</h3>
        <p>Choose from 9 curated color palettes, each with full light and dark mode support:</p>
        <ul>
          <li><strong>Indigo</strong> (default) — classic blue-indigo</li>
          <li><strong>Ocean</strong> — deep teal-blue</li>
          <li><strong>Violet</strong> — vivid purple</li>
          <li><strong>Forest</strong> — rich green</li>
          <li><strong>Sunset</strong> — warm orange-red</li>
          <li><strong>Blossom</strong> — soft pink</li>
          <li><strong>Aqua</strong> — bright cyan</li>
          <li><strong>Crimson</strong> — deep red</li>
          <li><strong>Amber</strong> — golden amber</li>
        </ul>

        <h3>Font styles</h3>
        <p>Three font styles are available, each using a built-in Android typeface (no download needed):</p>
        <ul>
          <li><strong>Default</strong> — clean system sans-serif</li>
          <li><strong>Rounded</strong> — friendly rounded letterforms</li>
          <li><strong>Serif</strong> — classic editorial feel</li>
        </ul>

        <h3>Live preview</h3>
        <p>The top of the Custom Theme screen shows a live preview card that updates immediately as you tap different palettes or fonts — no need to go back and forth.</p>

        <h3>Reset</h3>
        <p>Tap <strong>Reset to Default</strong> at the bottom to restore both the color palette and font style to their original values.</p>
      </>
    ),
  },
  {
    id: 'troubleshooting',
    title: 'Troubleshooting',
    content: (
      <>
        <h2>Troubleshooting</h2>

        <h3>Notifications still showing even with blocking enabled</h3>
        <ul>
          <li>Some OEMs (Samsung, Xiaomi, etc.) kill background services aggressively. Go to <strong>Battery settings → BusyHours → Allow background activity</strong></li>
          <li>Ensure BusyHours is not in your device's battery optimization list</li>
          <li>On Xiaomi/MIUI devices, also enable <strong>Autostart</strong> for BusyHours</li>
        </ul>

        <h3>Schedules not triggering</h3>
        <ul>
          <li>Android 12+ requires SCHEDULE_EXACT_ALARM permission. Go to <strong>Settings → Apps → BusyHours → Alarms & reminders</strong> and enable it</li>
          <li>Make sure the schedule is toggled ON in the Schedules tab</li>
        </ul>

        <h3>App Freeze overlay not appearing</h3>
        <ul>
          <li>Confirm Accessibility Service is still enabled (it can be disabled by system updates)</li>
          <li>Ensure the app is in the frozen list and the list was saved</li>
        </ul>

        <h3>Contact support</h3>
        <p>Still having issues? Email <a href="mailto:support@thecodingant.in">support@thecodingant.in</a> with your device model and Android version.</p>
      </>
    ),
  },
];

export default function Docs() {
  const [active, setActive] = useState('getting-started');
  const current = SECTIONS.find(s => s.id === active)!;

  return (
    <main className="docs-page">
      <div className="container docs-layout">
        <aside className="docs-sidebar">
          <h4 className="sidebar-title">Documentation</h4>
          <nav>
            {SECTIONS.map(s => (
              <button
                key={s.id}
                className={`sidebar-link ${active === s.id ? 'active' : ''}`}
                onClick={() => setActive(s.id)}
              >
                {s.title}
              </button>
            ))}
          </nav>
        </aside>
        <article className="docs-content prose">{current.content}</article>
      </div>
    </main>
  );
}
