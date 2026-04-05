import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <main className="page">
      <section className="hero">
        <div className="hero-badge">Premium on-demand photography</div>
        <h1>Book creators. Capture moments. Deliver faster.</h1>
        <p>
          Capturr connects customers with creators for premium moments and fast
          delivery.
        </p>

        <div className="hero-actions">
          <Link className="btn primary" to="/customer">
            Book as Customer
          </Link>
          <Link className="btn secondary" to="/creator">
            Join as Creator
          </Link>
        </div>
      </section>
    </main>
  );
}