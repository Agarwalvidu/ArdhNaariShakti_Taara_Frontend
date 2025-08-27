import React, { useState,useEffect,createContext, useContext } from "react";
import "./shelter.css";

export const Shelter = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterBy, setFilterBy] = useState("state");
 
 

  const shelterData = [
    {
      id: 1,
      shelterName: "Mitr Trust",
      address:
        "Mitr Trust Garima Greh B-51, B Block, SITA PURI, NEW DELHI-45 Landmark: Dabri police station",
      contactPerson: "Ms Rudrani Chhetri",
      phone: "9910899755",
      email: "mitrcbodelhi@gmail.com",
      state: "New Delhi",
      district: "South West Delhi",
      city: "Uttam Nagar",
      pincode: "110045",
      mapLink:
        "https://www.google.com/maps/d/viewer?mid=1QYgxDpzNZeicuh1Ru2bZLN3DnRWc3Qc&ll=28.555698400000008%2C77.1748359&z=8",
    },
    {
      id: 2,
      shelterName: "Sakha",
      address:
        "Sakha plot no-335/1080 Ebaranga, In front of Champati Petrol Pump Sundarpada,Bhubaneswar, Odisha pin-751002",
      contactPerson: "Mr. Saroj Kumar Hota",
      phone: "9437656639",
      email: "sakha.odisha@gmail.com",
      state: "Odisha",
      district: "Khordha",
      city: "Bhubaneswar",
      pincode: "751002",
      mapLink:
        "https://www.google.com/maps/d/viewer?mid=1QYgxDpzNZeicuh1Ru2bZLN3DnRWc3Qc&ll=20.226840099999997%2C85.81396219999998&z=8g",
    },
    {
      id: 3,
      shelterName: "Uttarayan",
      address: "Uttarayan, Old 21, New 23, Gurudwara Road, Hyderabad, Telangana",
      contactPerson: "Ms. Sneha",
      phone: "9848555677",
      email: "uttarayan@gmail.com",
      state: "Telangana",
      district: "Hyderabad",
      city: "Hyderabad",
      pincode: "500053",
      mapLink:
        "https://www.google.com/maps/d/viewer?mid=1QYgxDpzNZeicuh1Ru2bZLN3DnRWc3Qc&ll=17.385044%2C78.486671&z=10",
    },
    {
      id: 4,
      shelterName: "Snehagram",
      address:
        "Hosur Road, Poonamallee, Chennai, Tamil Nadu Landmark: Opposite to Apollo hospital",
      contactPerson: "Mr. Ramesh Kumar",
      phone: "9840004321",
      email: "snehagram.tn@gmail.com",
      state: "Tamil Nadu",
      district: "Chennai",
      city: "Poonamallee",
      pincode: "600056",
      mapLink:
        "https://www.google.com/maps/d/viewer?mid=1QYgxDpzNZeicuh1Ru2bZLN3DnRWc3Qc&ll=13.0826802%2C80.2707184&z=12",
    },
    {
      id: 5,
      shelterName: "Aastha",
      address:
        "House No. 14, Sector 23, Gurgaon, Haryana Landmark: Near MG Road Metro Station",
      contactPerson: "Ms. Anjali",
      phone: "9810123456",
      email: "aastha.hry@gmail.com",
      state: "Haryana",
      district: "Gurgaon",
      city: "Gurgaon",
      pincode: "122001",
      mapLink:
        "https://www.google.com/maps/d/viewer?mid=1QYgxDpzNZeicuh1Ru2bZLN3DnRWc3Qc&ll=28.4594965%2C77.0266383&z=13",
    },
    {
      id: 6,
      shelterName: "Parivartan",
      address:
        "Street 5, Sector 11, Noida, Uttar Pradesh Landmark: Near Sector 11 Metro Station",
      contactPerson: "Mr. Vikram Singh",
      phone: "9876543210",
      email: "parivartan.up@gmail.com",
      state: "Uttar Pradesh",
      district: "Noida",
      city: "Noida",
      pincode: "201301",
      mapLink:
        "https://www.google.com/maps/d/viewer?mid=1QYgxDpzNZeicuh1Ru2bZLN3DnRWc3Qc&ll=28.5355161%2C77.3910265&z=13",
    },
    {
      id: 7,
      shelterName: "Sahara",
      address:
        "Block A, Sector 4, Chandigarh Landmark: Opposite Rose Garden",
      contactPerson: "Ms. Meera",
      phone: "9988776655",
      email: "sahara.chd@gmail.com",
      state: "Chandigarh",
      district: "Chandigarh",
      city: "Chandigarh",
      pincode: "160017",
      mapLink:
        "https://www.google.com/maps/d/viewer?mid=1QYgxDpzNZeicuh1Ru2bZLN3DnRWc3Qc&ll=30.7333148%2C76.7794179&z=13",
    },
    {
      id: 8,
      shelterName: "Nirmal Jyoti",
      address:
        "Sector 7, Panjim, Goa Landmark: Near Panjim Bus Stand",
      contactPerson: "Mr. Ravi",
      phone: "9765432109",
      email: "nirmal.goa@gmail.com",
      state: "Goa",
      district: "North Goa",
      city: "Panjim",
      pincode: "403001",
      mapLink:
        "https://www.google.com/maps/d/viewer?mid=1QYgxDpzNZeicuh1Ru2bZLN3DnRWc3Qc&ll=15.4909309%2C73.8278499&z=14",
    },
    {
      id: 9,
      shelterName: "Gokhale Road Bandhan",
      address: "773 Purbalok Kalikapur Mukundapur, Kolkata",
      contactPerson: "Ranjita Sinha (Project Director)",
      phone: "9830027185",
      email: "garimagreh.astana@yahoo.com",
      state: "West Bengal",
      district: "Kolkata",
      city: "Kolkata",
      pincode: "700099",
      mapLink: "https://www.google.com/maps/d/viewer?mid=1QYgxDpzNZeicuh1Ru2bZLN3DnRWc3Qc&ll=22.5009134%2C88.39493449999998&z=8"
    },
    {
      id: 10,
      shelterName: "Kolkata Rista",
      address: "95/D77 Basundhara Chingrighata, Canal South Road, Lakshmimina Bhaban, Kolkata, West Bengal",
      contactPerson: "Dr. Santosh Kr. Giri (Project Director)",
      phone: "9339219696",
      email: "ristashelterhome@gmail.com",
      state: "West Bengal",
      district: "Kolkata",
      city: "Kolkata",
      pincode: "700105",
      mapLink: "https://www.google.com/maps/d/viewer?mid=1QYgxDpzNZeicuh1Ru2bZLN3DnRWc3Qc&ll=22.557509900000003%2C88.40955129999998&z=8"
    },
    {
      id: 11,
      shelterName: "Lakshya Trust",
      address: "302/303/304, Shilalekh Complex, Opp. To Ford Showroom, Munjmahuda, Vadodara, Gujarat – 390020",
      contactPerson: "Mr. Sylvester Merchant (Project Director)",
      phone: "9825311997",
      email: "lakshyagarimagreh@gmail.com",
      state: "Gujarat",
      district: "Vadodara",
      city: "Vadodara",
      pincode: "390020",
      mapLink: "https://www.google.com/maps/d/viewer?mid=1QYgxDpzNZeicuh1Ru2bZLN3DnRWc3Qc&ll=22.28683749999999%2C73.1672918&z=8"
    },
    {
      id: 12,
      shelterName: "Nai Bhor Sansta",
      address: "46, Marudhar Vihar, Khatipura Road, Jhotwara, Jaipur",
      contactPerson: "Pushpa Maai (Project Director)",
      phone: "9829291377",
      email: "naibhor.sanstha@gmail.com",
      state: "Rajasthan",
      district: "Jaipur",
      city: "Jaipur",
      pincode: "", // Pincode not provided in the HTML snippet
      mapLink: "https://www.google.com/maps/d/viewer?mid=1QYgxDpzNZeicuh1Ru2bZLN3DnRWc3Qc&ll=26.92346419999998%2C75.7478494&z=8"
    }

  ];

  // Filter shelterData based on searchTerm and filterBy field
  const filteredData = shelterData.filter((item) => {
    const value = item[filterBy]?.toLowerCase() || "";
    return value.includes(searchTerm.toLowerCase());
  });

  return (
    <div className="shelter-page">
      <div className="shelter-header">
        <h1>🏠 Shelter Houses Directory</h1>
        <p>
          Safe havens and support centers across India providing shelter, care,
          and assistance to those in need.
        </p>
      </div>

      {/* Search and filter controls */}
      <div className="search-filter-bar">
        <select
          value={filterBy}
          onChange={(e) => setFilterBy(e.target.value)}
          className="filter-dropdown"
        >
          <option value="state">State</option>
          <option value="city">City</option>
          <option value="district">District</option>
          <option value="shelterName">Shelter House</option>
          <option value="address">Address</option>
          <option value="contactPerson">Contact Person</option>
        </select>

        {/* Search Input with Icon */}
        <div className="search-input-wrapper">
          <span className="search-icon">🔍</span>
          <input
            type="text"
            placeholder={`Search by ${filterBy}`}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
        </div>
      </div>

      <div className="table-container">
        <table className="shelter-table">
          <thead>
            <tr>
              <th>S.no</th>
              <th>Location</th>
              <th>Shelter House</th>
              <th>Address</th>
              <th>Contact Person</th>
              <th>Phone</th>
              <th>Email</th>
              <th>State</th>
              <th>District</th>
              <th>City</th>
              <th>Pincode</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((item, index) => (
              <tr key={item.id}>
                <td>{index + 1}</td>
                <td>
                  <a
                    href={item.mapLink}
                    className="map-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Map
                  </a>
                </td>
                <td className="shelter-name">{item.shelterName}</td>
                <td>{item.address}</td>
                <td className="contact-person">
                  {item.contactPerson}
                  <br />
                  <small>Project Director</small>
                </td>
                <td className="contact-number" style={{ textAlign: "center" }}>
                  {item.phone}
                </td>
                <td>
                  <a href={`mailto:${item.email}`} className="email-link">
                    {item.email}
                  </a>
                </td>
                <td>{item.state}</td>
                <td>{item.district}</td>
                <td>{item.city}</td>
                <td>{item.pincode}</td>
              </tr>
            ))}
            {filteredData.length === 0 && (
              <tr>
                <td colSpan="11" style={{ textAlign: "center" }}>
                  No shelters found matching your criteria.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};