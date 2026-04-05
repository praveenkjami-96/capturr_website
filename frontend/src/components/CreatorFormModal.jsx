import React, { useState } from "react";
import api from "../services/api";

const initialState = {
  full_name: "",
  email: "",
  phone: "",
  city: "",
  specialty: "",
  instagram_url: "",
  portfolio_url: "",
  experience_years: "",
  equipment: "",
};

function CreatorFormModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  if (!isOpen) {
    return null;
  }

  const handleChange = (e) => {
    setFormData((previous) => ({
      ...previous,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      await api.post("/creators", formData);
      setMessage("Creator application submitted successfully.");
      setFormData(initialState);
    } catch (error) {
      setMessage("Failed to submit application. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal-shell glass-panel"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal-header">
          <div>
            <span className="eyebrow">Creator application</span>
            <h2 className="modal-title">Join Capturr as a creator</h2>
          </div>

          <button type="button" className="modal-close" onClick={onClose}>
            ×
          </button>
        </div>

        <form className="capturr-form" onSubmit={handleSubmit}>
          <div className="form-grid">
            <input
              type="text"
              name="full_name"
              placeholder="Full name"
              value={formData.full_name}
              onChange={handleChange}
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <input
              type="text"
              name="phone"
              placeholder="Phone number"
              value={formData.phone}
              onChange={handleChange}
              required
            />

            <input
              type="text"
              name="city"
              placeholder="City"
              value={formData.city}
              onChange={handleChange}
              required
            />

            <select
              name="specialty"
              value={formData.specialty}
              onChange={handleChange}
              required
            >
              <option value="">Select specialty</option>
              <option value="Photographer">Photographer</option>
              <option value="Videographer">Videographer</option>
              <option value="Photographer + Videographer">
                Photographer + Videographer
              </option>
            </select>

            <input
              type="number"
              name="experience_years"
              placeholder="Years of experience"
              value={formData.experience_years}
              onChange={handleChange}
              required
            />

            <input
              type="url"
              name="instagram_url"
              placeholder="Instagram URL"
              value={formData.instagram_url}
              onChange={handleChange}
            />

            <input
              type="url"
              name="portfolio_url"
              placeholder="Portfolio URL"
              value={formData.portfolio_url}
              onChange={handleChange}
            />
          </div>

          <textarea
            name="equipment"
            placeholder="Tell us about your camera, lenses, lights, drone, gimbal, etc."
            rows="5"
            value={formData.equipment}
            onChange={handleChange}
          />

          <button className="button button-primary" type="submit" disabled={loading}>
            {loading ? "Submitting..." : "Apply as creator"}
          </button>

          {message && <p className="form-message">{message}</p>}
        </form>
      </div>
    </div>
  );
}

export default CreatorFormModal;