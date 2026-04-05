import React, { useState } from "react";
import api from "../services/api";

const initialState = {
  full_name: "",
  email: "",
  phone: "",
  event_type: "",
  location: "",
  event_date: "",
  notes: "",
};

function CustomerFormModal({ isOpen, onClose }) {
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
      await api.post("/customers", formData);
      setMessage("Booking submitted successfully.");
      setFormData(initialState);
    } catch (error) {
      setMessage("Failed to submit booking. Please try again.");
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
            <span className="eyebrow">Customer booking</span>
            <h2 className="modal-title">Book a premium creator</h2>
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

            <select
              name="event_type"
              value={formData.event_type}
              onChange={handleChange}
              required
            >
              <option value="">Select event type</option>
              <option value="Proposal">Proposal</option>
              <option value="Wedding">Wedding</option>
              <option value="Birthday">Birthday</option>
              <option value="Graduation">Graduation</option>
              <option value="Lifestyle">Lifestyle</option>
              <option value="Brand Shoot">Brand Shoot</option>
            </select>

            <input
              type="text"
              name="location"
              placeholder="Event location"
              value={formData.location}
              onChange={handleChange}
              required
            />

            <input
              type="date"
              name="event_date"
              value={formData.event_date}
              onChange={handleChange}
              required
            />
          </div>

          <textarea
            name="notes"
            placeholder="Add notes about your event"
            rows="5"
            value={formData.notes}
            onChange={handleChange}
          />

          <button className="button button-primary" type="submit" disabled={loading}>
            {loading ? "Submitting..." : "Submit booking"}
          </button>

          {message && <p className="form-message">{message}</p>}
        </form>
      </div>
    </div>
  );
}

export default CustomerFormModal;