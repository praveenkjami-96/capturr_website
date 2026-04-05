import React from "react";

const features = [
  {
    title: "Instant creator matching",
    description:
      "Get matched with the right photographer or videographer based on event type, location, and availability in minutes.",
    image:
      "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Live tracking",
    description:
      "Track your creator in real time with a premium arrival experience that feels intuitive and trustworthy.",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Live gallery uploads",
    description:
      "View fresh shots during the session instead of waiting until everything is over.",
    image:
      "https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Capturr Studio",
    description:
      "Creators can edit reels, shorts, and premium photos using templates, captions, music, and effects.",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80",
  },
];

function Features() {
  return (
    <section id="features" className="section section-soft">
      <div className="container">
        <div className="section-heading">
          <span className="eyebrow">Features</span>
          <h2>Everything feels faster, cleaner, and more premium</h2>
          <p>
            Built to feel like Apple, Stripe, Uber, and Instagram came together
            to redesign the photography and videography experience.
          </p>
        </div>

        <div className="features-grid">
          {features.map((feature) => (
            <article className="feature-card feature-card-rich glass-card" key={feature.title}>
              <div className="feature-image-wrap">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="feature-real-image"
                />
                <div className="feature-image-overlay" />
              </div>

              <div className="feature-card-content">
                <div className="feature-icon">
                  <span />
                </div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;