import React from "react";

const CenterCard = ({ center }) => {
  return (
    <div className="p-4 border rounded-lg shadow-md mb-2">
      <h3 className="text-lg font-bold">{center.name}</h3>
      <p>{center.address}</p>
      <p>Type: {center.type.join(", ")}</p>
      <p>Status: {center.availability}</p>
      {center.trans_friendly && <p className="text-blue-600">🏳️‍⚧️ Trans-friendly</p>}
    </div>
  );
};

export default CenterCard;
