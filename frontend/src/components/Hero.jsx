import React, { useEffect, useState } from "react";

const heroScreens = [
  {
    step: "01",
    label: "Booking",
    title: "Book a creator instantly",
    subtitle: "Proposal shoot • Jersey City • Today • 6:00 PM",
    type: "booking",
  },
  {
    step: "02",
    label: "Matching",
    title: "Searching nearby creators",
    subtitle: "Finding the best available photographer near you",
    type: "search",
  },
  {
    step: "03",
    label: "Matched",
    title: "Creator matched successfully",
    subtitle: "Daniel R. • Premium Creator • 4 mins away",
    type: "matched",
  },
  {
    step: "04",
    label: "Tracking",
    title: "Track live like Uber",
    subtitle: "Your creator is on the way to the shoot location",
    type: "tracking",
  },
  {
    step: "05",
    label: "Arrived",
    title: "Creator has arrived",
    subtitle: "Arrival confirmed. Session ready to begin.",
    type: "arrived",
  },
  {
    step: "06",
    label: "Shooting",
    title: "Shoot is now live",
    subtitle: "Capturing moments and syncing uploads in real time",
    type: "shooting",
  },
  {
    step: "07",
    label: "Gallery",
    title: "Live gallery is updating",
    subtitle: "Photos are appearing while the shoot is happening",
    type: "gallery",
  },
];

function Hero({ onBookCreatorClick, onBecomeCreatorClick }) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((previous) => (previous + 1) % heroScreens.length);
    }, 2600);

    return () => clearInterval(timer);
  }, []);

  const activeScreen = heroScreens[activeIndex];

  return (
    <section className="hero section">
      <div className="hero-orb hero-orb-left" />
      <div className="hero-orb hero-orb-right" />

      <div className="container hero-grid">
        <div className="hero-copy">
          <div className="hero-badge">
            <span className="hero-badge-dot" />
            <span>Premium on-demand photography + videography</span>
          </div>

          <h1>Capture premium moments without the slow booking mess</h1>

          <p className="hero-subtext">
            Instantly book creators, track them live like Uber, and receive a
            live gallery while the shoot is happening. Capturr makes booking,
            arrival, shooting, and delivery feel seamless.
          </p>

          <div className="hero-actions">
            <button
              type="button"
              className="button button-primary"
              onClick={onBookCreatorClick}
            >
              Book a creator
            </button>
            <button
              type="button"
              className="button button-secondary"
              onClick={onBecomeCreatorClick}
            >
              Become a creator
            </button>
          </div>

          <div className="hero-trust">
            <div className="trust-item">
              <strong>Instant</strong>
              <span>Creator matching</span>
            </div>
            <div className="trust-item">
              <strong>Live</strong>
              <span>Tracking + gallery</span>
            </div>
            <div className="trust-item">
              <strong>Studio</strong>
              <span>Editing workflow</span>
            </div>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-device-stage">
            <div className="iphone-frame">
              <div className="iphone-camera-island">
                <div className="island-pill" />
              </div>

              <div className="iphone-screen">
                <div className="phone-statusbar">
                  <span>9:41</span>
                  <span>Capturr</span>
                </div>

                <div className="phone-header">
                  <div>
                    <span className="phone-step-chip">
                      Step {activeScreen.step}
                    </span>
                    <h3>{activeScreen.title}</h3>
                    <p>{activeScreen.subtitle}</p>
                  </div>
                </div>

                <div className="phone-stage">
                  {activeScreen.type === "booking" && (
                    <div className="screen-block fade-in">
                      <div className="booking-card">
                        <div className="booking-top">
                          <span className="event-badge">Proposal</span>
                          <span className="price-pill">$149</span>
                        </div>

                        <div className="booking-image-wrap">
                          <img
                            src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1200&q=80"
                            alt="Proposal booking"
                            className="booking-image"
                          />
                        </div>

                        <div className="booking-details">
                          <div className="detail-row">
                            <span>Location</span>
                            <strong>Jersey City</strong>
                          </div>
                          <div className="detail-row">
                            <span>Time</span>
                            <strong>Today • 6:00 PM</strong>
                          </div>
                          <div className="detail-row">
                            <span>Creator</span>
                            <strong>Instant match</strong>
                          </div>
                        </div>

                        <button className="phone-primary-button" type="button">
                          Confirm booking
                        </button>
                      </div>
                    </div>
                  )}

                  {activeScreen.type === "search" && (
                    <div className="screen-block fade-in">
                      <div className="search-screen">
                        <div className="search-map">
                          <div className="search-grid-lines" />
                          <div className="pulse pulse-one" />
                          <div className="pulse pulse-two" />
                          <div className="pulse pulse-three" />
                          <div className="search-user-pin" />
                          <div className="search-creator-pin creator-one" />
                          <div className="search-creator-pin creator-two" />
                          <div className="search-creator-pin creator-three" />
                        </div>

                        <div className="search-status-card">
                          <div className="loading-dots">
                            <span />
                            <span />
                            <span />
                          </div>
                          <strong>Searching nearest creators</strong>
                          <p>Checking distance, availability, and event fit</p>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeScreen.type === "matched" && (
                    <div className="screen-block fade-in">
                      <div className="matched-card">
                        <div className="matched-avatar-wrap">
                          <img
                            src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80"
                            alt="Creator avatar"
                            className="matched-avatar"
                          />
                        </div>

                        <h4>Daniel R.</h4>
                        <p>Premium Photographer • 4 mins away</p>

                        <div className="matched-stats">
                          <div>
                            <strong>4.9</strong>
                            <span>Rating</span>
                          </div>
                          <div>
                            <strong>320+</strong>
                            <span>Shoots</span>
                          </div>
                          <div>
                            <strong>Fast</strong>
                            <span>Arrival</span>
                          </div>
                        </div>

                        <div className="matched-cta-row">
                          <button className="phone-primary-button" type="button">
                            View tracking
                          </button>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeScreen.type === "tracking" && (
                    <div className="screen-block fade-in">
                      <div className="tracking-screen">
                        <div className="tracking-map">
                          <div className="tracking-road route-one" />
                          <div className="tracking-road route-two" />
                          <div className="tracking-pin start-pin" />
                          <div className="tracking-pin end-pin" />
                          <div className="tracking-car moving-car" />
                        </div>

                        <div className="tracking-info-card">
                          <div className="tracking-info-top">
                            <div>
                              <span className="small-muted">
                                Creator en route
                              </span>
                              <h4>Daniel • 4 mins away</h4>
                            </div>
                            <span className="live-chip">Live</span>
                          </div>

                          <div className="tracking-meta">
                            <div>
                              <span>Session</span>
                              <strong>Proposal shoot</strong>
                            </div>
                            <div>
                              <span>ETA</span>
                              <strong>6:24 PM</strong>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeScreen.type === "arrived" && (
                    <div className="screen-block fade-in">
                      <div className="arrived-screen">
                        <div className="arrived-check">✓</div>
                        <h4>Creator has arrived</h4>
                        <p>
                          Your photographer is at the location and ready to
                          start.
                        </p>

                        <div className="arrival-code-card">
                          <span>Arrival code</span>
                          <strong>4821</strong>
                        </div>

                        <button className="phone-primary-button" type="button">
                          Start session
                        </button>
                      </div>
                    </div>
                  )}

                  {activeScreen.type === "shooting" && (
                    <div className="screen-block fade-in">
                      <div className="shoot-screen">
                        <div className="shoot-image-wrap">
                          <img
                            src="https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=1200&q=80"
                            alt="Live shoot"
                            className="shoot-image"
                          />
                          <div className="recording-pill">
                            <span className="record-dot" />
                            Shooting live
                          </div>
                        </div>

                        <div className="shoot-progress-card">
                          <div className="progress-row">
                            <span>Session progress</span>
                            <strong>68%</strong>
                          </div>
                          <div className="progress-bar">
                            <div className="progress-fill" />
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeScreen.type === "gallery" && (
                    <div className="screen-block fade-in">
                      <div className="gallery-screen">
                        <div className="gallery-header-row">
                          <div>
                            <span className="small-muted">Live gallery</span>
                            <h4>Photos uploading now</h4>
                          </div>
                          <span className="upload-chip">+12 new</span>
                        </div>

                        <div className="live-gallery-grid">
                          <img
                            src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80"
                            alt="Gallery 1"
                          />
                          <img
                            src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=900&q=80"
                            alt="Gallery 2"
                          />
                          <img
                            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=900&q=80"
                            alt="Gallery 3"
                          />
                          <img
                            src="https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=900&q=80"
                            alt="Gallery 4"
                          />
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                <div className="phone-pagination">
                  {heroScreens.map((screen, index) => (
                    <button
                      key={screen.step}
                      type="button"
                      className={`phone-dot ${index === activeIndex ? "active" : ""}`}
                      onClick={() => setActiveIndex(index)}
                      aria-label={`Go to step ${screen.step}`}
                    />
                  ))}
                </div>
              </div>
            </div>

            <div className="hero-side-floating hero-side-left glass-card">
              <span className="small-muted">Customer experience</span>
              <strong>Book → Track → Shoot → Gallery</strong>
            </div>

            <div className="hero-side-floating hero-side-right glass-card">
              <span className="small-muted">Creator experience</span>
              <strong>Accept → Navigate → Shoot → Upload</strong>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;