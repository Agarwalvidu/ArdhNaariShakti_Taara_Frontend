import React from "react";
import "./Gallery.css";
import { images } from "../../assets/data/data"

export const Gallery = () => {
  return (
     <section className="gallery-page">
       <div className="scontainer">
        <h2 className="gallery-title">Our Social Work & Recognition</h2>
        <div className="gallery-grid">
          {images.map((img) => (
            <div key={img.id} className="gallery-item">
              <img src={img.src} alt={img.alt} />
              <p>{img.alt}</p>
            </div>
          ))}
        </div>
      </div>
     </section>
  );
};

