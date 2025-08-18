import React, { useState } from "react";

const NGOSubmitForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    type: [],
    lat: "",
    lng: "",
    trans_friendly: false,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch("/api/donation-centers", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
    alert("Submitted for review! Admin will verify.");
  };

  return (
    <form className="p-4 border rounded-lg shadow-md" onSubmit={handleSubmit}>
      <h2 className="text-xl font-bold mb-2">Add a Donation Center</h2>
      <input type="text" placeholder="Center Name" className="border p-2 w-full mb-2"
        onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
      <input type="text" placeholder="Address" className="border p-2 w-full mb-2"
        onChange={(e) => setFormData({ ...formData, address: e.target.value })} />
      <input type="text" placeholder="Latitude" className="border p-2 w-full mb-2"
        onChange={(e) => setFormData({ ...formData, lat: e.target.value })} />
      <input type="text" placeholder="Longitude" className="border p-2 w-full mb-2"
        onChange={(e) => setFormData({ ...formData, lng: e.target.value })} />

      <label className="block mb-2">
        <input type="checkbox" onChange={(e) =>
          setFormData({ ...formData, trans_friendly: e.target.checked })} />
        Trans-friendly
      </label>

      <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded">
        Submit
      </button>
    </form>
  );
};

export default NGOSubmitForm;
