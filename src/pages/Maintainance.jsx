import React from "react";


export default function Maintainance() {
  return (
    <div className="maintenance-root" role="status" aria-live="polite">
      <style>{`
        .maintenance-root {
          --bg: #f7f7f8;
          --card: #ffffff;
          --accent: #f05a5a;
          --muted: #6b7280;
          font-family: Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial;
          min-height: 60vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 2rem;
          background: linear-gradient(180deg, var(--bg), #ffffff);
        }

        .maintenance-card {
          background: var(--card);
          box-shadow: 0 8px 30px rgba(17,24,39,0.06);
          border-radius: 12px;
          padding: 28px;
          max-width: 820px;
          width: 100%;
          display: flex;
          gap: 22px;
          align-items: center;
        }

        /* left: large hand symbol */
        .hand-wrap {
          flex: 0 0 170px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .hand-emoji {
          font-size: 86px; /* large hand */
          line-height: 1;
          filter: drop-shadow(0 6px 18px rgba(0,0,0,0.08));
          transform: translateY(-4px);
        }

        .hand-svg {
          width: 120px;
          height: 120px;
        }

        .content {
          flex: 1 1 auto;
          min-width: 0;
        }

        .title {
          font-size: 20px;
          font-weight: 700;
          margin: 0 0 6px 0;
          color: #0f172a;
        }

        .subtitle {
          margin: 0 0 14px 0;
          color: var(--muted);
          font-size: 14px;
          line-height: 1.45;
        }

        .persona {
          display: inline-block;
          font-size: 13px;
          color: #374151;
          background: #f3f4f6;
          padding: 6px 10px;
          border-radius: 9999px;
          margin-bottom: 12px;
        }

        .actions {
          display: flex;
          gap: 12px;
          align-items: center;
          margin-top: 8px;
        }

        .primary {
          background: var(--accent);
          color: white;
          border: 0;
          padding: 10px 14px;
          border-radius: 8px;
          font-weight: 600;
          cursor: not-allowed; /* intentionally disabled to reflect maintenance */
        }

        .secondary {
          background: transparent;
          color: var(--muted);
          border: 1px solid #e6e7ea;
          padding: 9px 12px;
          border-radius: 8px;
          font-weight: 600;
          cursor: pointer;
        }

        .muted-small {
          color: var(--muted);
          font-size: 13px;
          margin-top: 8px;
        }

        @media (max-width: 640px) {
          .maintenance-card {
            flex-direction: column;
            padding: 20px;
            gap: 14px;
          }
          .hand-wrap { flex: 0 0 auto; }
          .hand-emoji { font-size: 72px; }
        }
      `}</style>

      <div className="maintenance-card">
        <div className="hand-wrap" aria-hidden>
          {/* Large friendly hand symbol: fallback emoji + accessible SVG */}
          <div style={{ textAlign: "center" }}>
            <div className="hand-emoji" aria-hidden>
              ✋
            </div>
            {/* Decorative SVG outline (keeps look crisp on all screens) */}
            <svg className="hand-svg" viewBox="0 0 64 64" fill="none" aria-hidden>
              <path d="M22 12c0-2.2 1.8-4 4-4s4 1.8 4 4v6" stroke="#F05A5A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M34 12c0-2.2 1.8-4 4-4s4 1.8 4 4v12" stroke="#F05A5A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M16 20v18a12 12 0 0 0 12 12h8a12 12 0 0 0 12-12V20" stroke="#F05A5A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>

        <div className="content">
          <div className="persona">Official Notice</div>
          <h2 className="title">Server temporarily unavailable — Under maintenance</h2>
          <p className="subtitle">
            We're doing some important upgrades to improve performance and reliability.
            The service is temporarily paused. We know this is inconvenient — thank you for your patience.
          </p>

          <div className="actions">
            <button className="primary" disabled aria-disabled="true">Service paused</button>
            <button
              className="secondary"
              onClick={() => window.location.reload()}
              title="Try reloading later"
            >
              Try again
            </button>
          </div>

          {/* <div className="muted-small">Estimated downtime: a short while. If this persists, contact <a href="mailto:support@example.com">support@example.com</a>.</div> */}
        </div>
      </div>
    </div>
  );
}
