import { useState } from "react";
import api from "../services/api";

const initialState = {
  full_name: "",
  email: "",
  phone: "",
  event_type: "",
  event_date: "",
  location: "",
  notes: "",
};

export default function CustomerFormPage() {
  const [form, setForm] = useState(initialState);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  function updateField(event) {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const response = await api.post("/customers", form);
      setMessage(`Customer request created: ${response.data.id}`);
      setForm(initialState);
    } catch (error) {
      setMessage(error?.response?.data?.detail || "Failed to submit form");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="page">
      <div className="form-card">
        <h2>Customer Booking Form</h2>
        <form onSubmit={handleSubmit} className="form-grid">
          <input name="full_name" placeholder="Full name" value={form.full_name} onChange={updateField} required />
          <input name="email" type="email" placeholder="Email" value={form.email} onChange={updateField} required />
          <input name="phone" placeholder="Phone" value={form.phone} onChange={updateField} required />
          <input name="event_type" placeholder="Event type" value={form.event_type} onChange={updateField} required />
          <input name="event_date" type="date" value={form.event_date} onChange={updateField} required />
          <input name="location" placeholder="Location" value={form.location} onChange={updateField} required />
          <textarea name="notes" placeholder="Notes" value={form.notes} onChange={updateField} rows="4" />
          <button className="btn primary" type="submit" disabled={loading}>
            {loading ? "Submitting..." : "Submit"}
          </button>
        </form>
        {message && <p className="message">{message}</p>}
      </div>
    </main>
  );
}