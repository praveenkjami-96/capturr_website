import React from "react";

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <a href="#" className="brand">
            <span className="brand-mark">C</span>
            <span className="brand-text">Capturr</span>
          </a>
          <p>
            Premium on-demand photography and videography with live tracking,
            live gallery delivery, and creator-first editing tools.
          </p>
        </div>

        <div className="footer-links">
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
          <a href="#">Contact</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;