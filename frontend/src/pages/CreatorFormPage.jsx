import { useState } from "react";
import api from "../services/api";

const initialState = {
  full_name: "",
  email: "",
  phone: "",
  city: "",
  experience_years: 0,
  equipment: "",
  instagram_handle: "",
  portfolio_url: "",
};

export default function CreatorFormPage() {
  const [form, setForm] = useState(initialState);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  function updateField(event) {
    const { name, value } = event.target;
    setForm((prev) => ({
      ...prev,
      [name]: name === "experience_years" ? Number(value) : value,
    }));
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const response = await api.post("/creators", form);
      setMessage(`Creator application created: ${response.data.id}`);
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
        <h2>Creator Application Form</h2>
        <form onSubmit={handleSubmit} className="form-grid">
          <input name="full_name" placeholder="Full name" value={form.full_name} onChange={updateField} required />
          <input name="email" type="email" placeholder="Email" value={form.email} onChange={updateField} required />
          <input name="phone" placeholder="Phone" value={form.phone} onChange={updateField} required />
          <input name="city" placeholder="City" value={form.city} onChange={updateField} required />
          <input name="experience_years" type="number" placeholder="Experience years" value={form.experience_years} onChange={updateField} required />
          <input name="equipment" placeholder="Equipment" value={form.equipment} onChange={updateField} required />
          <input name="instagram_handle" placeholder="Instagram handle" value={form.instagram_handle} onChange={updateField} />
          <input name="portfolio_url" placeholder="Portfolio URL" value={form.portfolio_url} onChange={updateField} />
          <button className="btn primary" type="submit" disabled={loading}>
            {loading ? "Submitting..." : "Apply"}
          </button>
        </form>
        {message && <p className="message">{message}</p>}
      </div>
    </main>
  );
}