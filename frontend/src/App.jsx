import React, { useState } from "react";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Events from "./components/Events";
import Studio from "./components/Studio";
import Footer from "./components/Footer";
import CustomerFormModal from "./components/CustomerFormModal";
import CreatorFormModal from "./components/CreatorFormModal";

const howItWorks = [
  {
    number: "01",
    title: "Choose your event",
    description:
      "Select the kind of shoot you need, choose your location, and book in minutes.",
  },
  {
    number: "02",
    title: "Get matched instantly",
    description:
      "Capturr connects you with an available premium creator based on event type and availability.",
  },
  {
    number: "03",
    title: "Track + live gallery",
    description:
      "Track your creator live and start receiving fresh uploads while the shoot is happening.",
  },
  {
    number: "04",
    title: "Receive final delivery",
    description:
      "Get polished photos, reels, and short-form edits through a premium delivery experience.",
  },
];

function App() {
  const [isCustomerModalOpen, setIsCustomerModalOpen] = useState(false);
  const [isCreatorModalOpen, setIsCreatorModalOpen] = useState(false);

  return (
    <div className="site-shell">
      <header className="topbar">
        <div className="container topbar-inner">
          <a href="#" className="brand">
            <span className="brand-mark">C</span>
            <span className="brand-text">Capturr</span>
          </a>

          <nav className="nav">
            <a href="#features">Features</a>
            <a href="#how-it-works">How it works</a>
            <a href="#studio">Studio</a>
            <a href="#creators">Creators</a>
          </nav>

          <div className="topbar-actions">
            <button
              type="button"
              className="button button-ghost small"
              onClick={() => setIsCreatorModalOpen(true)}
            >
              Join now
            </button>
          </div>
        </div>
      </header>

      <main>
        <Hero
          onBookCreatorClick={() => setIsCustomerModalOpen(true)}
          onBecomeCreatorClick={() => setIsCreatorModalOpen(true)}
        />

        <Features />

        <section id="how-it-works" className="section">
          <div className="container">
            <div className="section-heading">
              <span className="eyebrow">How it works</span>
              <h2>From booking to delivery, everything feels premium</h2>
              <p>
                Capturr replaces the slow, outdated booking flow with instant
                matching, live tracking, and modern visual delivery.
              </p>
            </div>

            <div className="steps-grid">
              {howItWorks.map((step) => (
                <article className="step-card glass-card" key={step.number}>
                  <span className="step-number">{step.number}</span>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <Events />

        <section id="creators" className="section">
          <div className="container creator-section glass-panel">
            <div className="creator-copy">
              <span className="eyebrow">For creators</span>
              <h2>Get more bookings with better tools and a premium workflow</h2>
              <p>
                Capturr helps photographers and videographers focus on creating
                instead of chasing leads. Upload live, edit faster, and deliver
                premium results with a modern creator-first system.
              </p>

              <div className="creator-points">
                <div className="creator-point">
                  <span className="point-badge">01</span>
                  <div>
                    <h4>Get bookings automatically</h4>
                    <p>
                      Receive premium shoot requests without relying on DMs or
                      manual coordination.
                    </p>
                  </div>
                </div>

                <div className="creator-point">
                  <span className="point-badge">02</span>
                  <div>
                    <h4>Use Capturr Studio tools</h4>
                    <p>
                      Edit reels, shorts, and galleries with templates,
                      captions, music, and effects.
                    </p>
                  </div>
                </div>

                <div className="creator-point">
                  <span className="point-badge">03</span>
                  <div>
                    <h4>Upload live while shooting</h4>
                    <p>
                      Give customers a premium live-gallery experience that
                      feels fast and high value.
                    </p>
                  </div>
                </div>

                <div className="creator-point">
                  <span className="point-badge">04</span>
                  <div>
                    <h4>Earn more from every session</h4>
                    <p>
                      Stand out with speed, polish, and a more modern client
                      experience.
                    </p>
                  </div>
                </div>
              </div>

              <button
                type="button"
                className="button button-primary"
                onClick={() => setIsCreatorModalOpen(true)}
              >
                Apply as creator
              </button>
            </div>

            <div className="creator-visual">
              <div className="creator-stats glass-card">
                <div className="creator-stat-row">
                  <span>Today’s bookings</span>
                  <strong>08</strong>
                </div>
                <div className="creator-stat-row">
                  <span>Live uploads</span>
                  <strong>132</strong>
                </div>
                <div className="creator-stat-row">
                  <span>Short-form edits</span>
                  <strong>14</strong>
                </div>
                <div className="creator-stat-row">
                  <span>Estimated earnings</span>
                  <strong>$1,240</strong>
                </div>
              </div>

              <div className="creator-preview glass-card">
                <div className="creator-preview-top">
                  <span className="status-pill online">Studio active</span>
                  <span className="muted">Capturr Creator OS</span>
                </div>

                <div className="creator-preview-grid">
                  <img
                    src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=800&q=80"
                    alt="Creator work 1"
                    className="creator-real-image tall"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=80"
                    alt="Creator work 2"
                    className="creator-real-image"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=800&q=80"
                    alt="Creator work 3"
                    className="creator-real-image"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80"
                    alt="Creator work 4"
                    className="creator-real-image wide"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <Studio />

        <section id="cta" className="section">
          <div className="container">
            <div className="cta-panel">
              <span className="eyebrow">Start now</span>
              <h2>Ready to capture your moments?</h2>
              <p>
                Book premium creators on demand, track them live, and receive a
                faster, more modern visual experience from start to finish.
              </p>

              <div className="cta-actions">
                <button
                  type="button"
                  className="button button-primary"
                  onClick={() => setIsCustomerModalOpen(true)}
                >
                  Book now
                </button>
                <button
                  type="button"
                  className="button button-secondary"
                  onClick={() => setIsCreatorModalOpen(true)}
                >
                  Join as creator
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      <CustomerFormModal
        isOpen={isCustomerModalOpen}
        onClose={() => setIsCustomerModalOpen(false)}
      />

      <CreatorFormModal
        isOpen={isCreatorModalOpen}
        onClose={() => setIsCreatorModalOpen(false)}
      />
    </div>
  );
}

export default App;