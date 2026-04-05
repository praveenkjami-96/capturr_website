import React from "react";

const events = [
  {
    title: "Proposals",
    image:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Weddings",
    image:
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Birthdays",
    image:
      "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Graduation",
    image:
      "https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Lifestyle",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Brand shoots",
    image:
      "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1200&q=80",
  },
];

function Events() {
  return (
    <section className="section">
      <div className="container">
        <div className="section-heading">
          <span className="eyebrow">Event types</span>
          <h2>Built for the moments people care about most</h2>
          <p>
            From personal milestones to brand storytelling, Capturr is designed
            for premium visual experiences that feel immediate and modern.
          </p>
        </div>

        <div className="events-grid">
          {events.map((event) => (
            <article className="event-card glass-card event-card-rich" key={event.title}>
              <div className="event-rich-image-wrap">
                <img
                  src={event.image}
                  alt={event.title}
                  className="event-rich-image"
                />
                <div className="event-rich-overlay" />
              </div>

              <div className="event-rich-content">
                <div className="event-icon-wrap">
                  <span className="event-icon-dot" />
                </div>
                <h3>{event.title}</h3>
                <p>
                  Premium creators, faster booking, live uploads, and polished
                  delivery for {event.title.toLowerCase()}.
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Events;