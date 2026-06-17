import React, { useMemo, useState } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const APP_URL = "https://buyer-persona-three.vercel.app/?lang=en";

function App() {
  const [loaded, setLoaded] = useState(false);
  const [failed, setFailed] = useState(false);
  const src = useMemo(() => APP_URL, []);

  return (
    <main className="app-shell">
      <header className="topbar">
        <a className="brand" href="https://docroi.marketing/" target="_blank" rel="noreferrer">
          <img src="https://docroi.marketing/wp-content/uploads/2026/04/Logo_1_Doc_ROI.png" alt="Doc ROI" />
          <span>AI Buyer Persona</span>
        </a>
        <nav>
          <a href={APP_URL} target="_blank" rel="noreferrer">Open full screen</a>
          <a href="https://docroi.marketing/aviso-legal/" target="_blank" rel="noreferrer">Legal notice</a>
        </nav>
      </header>

      {!loaded && !failed && (
        <section className="loader" aria-live="polite">
          <span>Doc ROI · English edition</span>
          <h1>AI Buyer Persona Profile Generation</h1>
          <p>Loading the English guided diagnostic experience.</p>
        </section>
      )}

      {failed && (
        <section className="fallback">
          <span>Doc ROI · English edition</span>
          <h1>Open the English Buyer Persona tool</h1>
          <p>If your browser blocks embedded apps, open the full version in a new tab.</p>
          <a href={APP_URL} target="_blank" rel="noreferrer">Open English version</a>
        </section>
      )}

      <iframe
        title="AI Buyer Persona Profile Generation · Doc ROI"
        src={src}
        onLoad={() => setLoaded(true)}
        onError={() => setFailed(true)}
        className={loaded && !failed ? "is-ready" : ""}
        allow="clipboard-write; fullscreen"
      />
    </main>
  );
}

createRoot(document.getElementById("root")!).render(<App />);
