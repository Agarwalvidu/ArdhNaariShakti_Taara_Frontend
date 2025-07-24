import React from "react";
import "./shelter.css";

export const Shelter = () => {
  return (
    <div className="shelter-page">
      <div className="shelter-header">
        <h1>🏠 Shelter Houses Directory</h1>
        <p>
          Safe havens and support centers across India providing shelter, care,
          and assistance to those in need.
        </p>
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
            <tr>
              <td>1</td>
              <td>
                <a
                  href="https://www.google.com/maps/d/viewer?mid=1QYgxDpzNZeicuh1Ru2bZLN3DnRWc3Qc&ll=28.555698400000008%2C77.1748359&z=8"
                  className="map-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Map
                </a>
              </td>
              <td className="shelter-name">Mitr Trust</td>
              <td>
                Mitr Trust Garima Greh B-51, B Block, SITA PURI, NEW DELHI-45
                Landmark: Dabri police station
              </td>
              <td className="contact-person">
                Ms Rudrani Chhetri
                <br />
                <small>Project Director</small>
              </td>
              <td className="contact-number">9910899755</td>
              <td>
                <a href="mailto:mitrcbodelhi@gmail.com" className="email-link">
                  mitrcbodelhi@gmail.com
                </a>
              </td>
              <td>
                <div className="location-info">
                  <span className="state">New Delhi</span>
                  <span className="district">South West Delhi</span>
                  <span className="city">Uttam Nagar</span>
                </div>
              </td>
              <td>South West Delhi</td>
              <td>Uttam Nagar</td>
              <td>
                <span className="pincode">110045</span>
              </td>
            </tr>

            <tr>
              <td>2</td>
              <td>
                <a
                  href="https://www.google.com/maps/d/viewer?mid=1QYgxDpzNZeicuh1Ru2bZLN3DnRWc3Qc&ll=20.226840099999997%2C85.81396219999998&z=8g"
                  className="map-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Map
                </a>
              </td>
              <td className="shelter-name">Sakha</td>
              <td>
                Sakha plot no-335/1080 Ebaranga, In front of Champati Petrol
                Pump Sundarpada,Bhubaneswar, Odisha pin-751002
              </td>
              <td className="contact-person">
                Mr. Saroj Kumar Hota
                <br />
                <small>Programme Manager</small>
              </td>
              <td className="contact-number">9437656639</td>
              <td>
                <a href="mailto:sakha.odisha@gmail.com" className="email-link">
                  sakha.odisha@gmail.com
                </a>
              </td>
              <td>
                <div className="location-info">
                  <span className="state">Odisha</span>
                  <span className="district">Khordha</span>
                  <span className="city">Bhubaneswar</span>
                </div>
              </td>
              <td>Khordha</td>
              <td>Bhubaneswar</td>
              <td>
                <span className="pincode">751002</span>
              </td>
            </tr>

            <tr>
              <td>3</td>
              <td>
                <a
                  href="https://www.google.com/maps/d/viewer?mid=1QYgxDpzNZeicuh1Ru2bZLN3DnRWc3Qc&ll=13.119766400000007%2C80.2215791&z=8"
                  className="map-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Map
                </a>
              </td>
              <td className="shelter-name">Transgender Rights Association</td>
              <td>
                No. c-122/69, Karthikeyan salai, Periyar nagar, Kolathur,
                Chennai
              </td>
              <td className="contact-person">
                R. Jeeva
                <br />
                <small>Project Director</small>
              </td>
              <td className="contact-number">8778569926</td>
              <td>
                <a href="mailto:garimagrehtra@gmail.com" className="email-link">
                  garimagrehtra@gmail.com
                </a>
              </td>
              <td>
                <div className="location-info">
                  <span className="state">Tamil Nadu</span>
                  <span className="district">Chennai</span>
                  <span className="city">Chennai</span>
                </div>
              </td>
              <td>Chennai</td>
              <td>Chennai</td>
              <td>
                <span className="pincode">600082</span>
              </td>
            </tr>

            <tr>
              <td>4</td>
              <td>
                <a
                  href="https://www.google.com/maps/d/viewer?mid=1QYgxDpzNZeicuh1Ru2bZLN3DnRWc3Qc&ll=25.790707600000033%2C85.2152891&z=8"
                  className="map-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Map
                </a>
              </td>
              <td className="shelter-name">Dostana Safar</td>
              <td>
                Gandhi High School campus, Model school building, Khagaul, Patna
              </td>
              <td className="contact-person">
                Reshma Prasad
                <br />
                <small>Project Director</small>
              </td>
              <td className="contact-number">8409834552</td>
              <td>
                <a href="mailto:dostanasafar@gmail.com" className="email-link">
                  dostanasafar@gmail.com
                </a>
              </td>
              <td>
                <div className="location-info">
                  <span className="state">Bihar</span>
                  <span className="district">Patna</span>
                  <span className="city">Patna</span>
                </div>
              </td>
              <td>Patna</td>
              <td>Patna</td>
              <td>
                <span className="pincode">801105</span>
              </td>
            </tr>

            <tr>
              <td>5</td>
              <td>
                <a
                  href="https://www.google.com/maps/d/viewer?mid=1QYgxDpzNZeicuh1Ru2bZLN3DnRWc3Qc&ll=19.20925000000001%2C73.10339710000001&z=8"
                  className="map-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Map
                </a>
              </td>
              <td className="shelter-name">Kinnar Asmita</td>
              <td>
                Tamanna Residency 3rd floor, near saibaba mandir, Hajimalang
                road, Dwarli pada, Kalyan east, Thane
              </td>
              <td className="contact-person">
                Neeta Kene
                <br />
                <small>Project Director</small>
              </td>
              <td className="contact-number">9167947771</td>
              <td>
                <a href="mailto:kinnar.asmita@gmail.com" className="email-link">
                  kinnar.asmita@gmail.com
                </a>
              </td>
              <td>
                <div className="location-info">
                  <span className="state">Maharashtra</span>
                  <span className="district">Thane</span>
                  <span className="city">Kalyan</span>
                </div>
              </td>
              <td>Thane</td>
              <td>Kalyan</td>
              <td>
                <span className="pincode">421306</span>
              </td>
            </tr>

            <tr>
              <td>6</td>
              <td>
                <a
                  href="https://www.google.com/maps/d/viewer?mid=1QYgxDpzNZeicuh1Ru2bZLN3DnRWc3Qc&ll=21.248940400000027%2C81.5788103&z=8"
                  className="map-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Map
                </a>
              </td>
              <td className="shelter-name">Mitwa Sankalp Samiti</td>
              <td>
                Chhattisgarh Mitwa Sankalp Samiti Garima Greh, Raipur Near
                Krishna Public School, Sarona, Raipur
              </td>
              <td className="contact-person">
                Ms. Vidya Rajput
                <br />
                <small>Project Director</small>
              </td>
              <td className="contact-number">9340444928</td>
              <td>
                <a href="mailto:cgmss69@yahoo.com" className="email-link">
                  cgmss69@yahoo.com
                </a>
              </td>
              <td>
                <div className="location-info">
                  <span className="state">Chhattisgarh</span>
                  <span className="district">Raipur</span>
                  <span className="city">Raipur</span>
                </div>
              </td>
              <td>Raipur</td>
              <td>Raipur</td>
              <td>
                <span className="pincode">492010</span>
              </td>
            </tr>

            <tr>
              <td>7</td>
              <td>
                <a
                  href="https://www.google.com/maps/d/viewer?mid=1QYgxDpzNZeicuh1Ru2bZLN3DnRWc3Qc&ll=19.1656353%2C72.842761&z=8"
                  className="map-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Map
                </a>
              </td>
              <td className="shelter-name">Tweet Foundation</td>
              <td>
                12, Road No-2, Teen Dongari, Yashwant Nagar, Goregoan (West)
                Mumbai
              </td>
              <td className="contact-person">
                Maya Awasthy
                <br />
                <small>Project Director</small>
              </td>
              <td className="contact-number">8375819008</td>
              <td>
                <a
                  href="mailto:garimamumbai.tweetfoundation@gmail.com"
                  className="email-link"
                >
                  garimamumbai.tweetfoundation@gmail.com
                </a>
              </td>
              <td>
                <div className="location-info">
                  <span className="state">Maharashtra</span>
                  <span className="district">Mumbai</span>
                  <span className="city">Mumbai</span>
                </div>
              </td>
              <td>Mumbai</td>
              <td>Mumbai</td>
              <td>
                <span className="pincode">400104</span>
              </td>
            </tr>

            <tr>
              <td>8</td>
              <td>
                <a
                  href="https://www.google.com/maps/d/viewer?mid=1QYgxDpzNZeicuh1Ru2bZLN3DnRWc3Qc&ll=19.00061309999998%2C73.131214&z=8"
                  className="map-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Map
                </a>
              </td>
              <td className="shelter-name">Aarju Foundation</td>
              <td>
                Banglow No. 17, HISSA number 26, Premnagri road, Pali Devad,
                Panvel
              </td>
              <td className="contact-person">
                Mansi Jani
                <br />
                <small>Project Director</small>
              </td>
              <td className="contact-number">9820173801</td>
              <td>
                <a
                  href="mailto:aarjufoundation2010@gmail.com"
                  className="email-link"
                >
                  aarjufoundation2010@gmail.com
                </a>
              </td>
              <td>
                <div className="location-info">
                  <span className="state">Maharashtra</span>
                  <span className="district">Raigarh</span>
                  <span className="city">Panvel</span>
                </div>
              </td>
              <td>Raigarh</td>
              <td>Panvel</td>
              <td>
                <span className="pincode">410206</span>
              </td>
            </tr>

            <tr>
              <td>9</td>
              <td>
                <a
                  href="https://www.google.com/maps/d/viewer?mid=1QYgxDpzNZeicuh1Ru2bZLN3DnRWc3Qc&ll=22.5009134%2C88.39493449999998&z=8"
                  className="map-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Map
                </a>
              </td>
              <td className="shelter-name">Gokhale Road Bandhan</td>
              <td>773 Purbalok Kalikapur Mukundapur, Kolkata</td>
              <td className="contact-person">
                Ranjita Sinha
                <br />
                <small>Project Director</small>
              </td>
              <td className="contact-number">9830027185</td>
              <td>
                <a
                  href="mailto:garimagreh.astana@yahoo.com"
                  className="email-link"
                >
                  garimagreh.astana@yahoo.com
                </a>
              </td>
              <td>
                <div className="location-info">
                  <span className="state">West Bengal</span>
                  <span className="district">Kolkata</span>
                  <span className="city">Kolkata</span>
                </div>
              </td>
              <td>Kolkata</td>
              <td>Kolkata</td>
              <td>
                <span className="pincode">700099</span>
              </td>
            </tr>

            <tr>
              <td>10</td>
              <td>
                <a
                  href="https://www.google.com/maps/d/viewer?mid=1QYgxDpzNZeicuh1Ru2bZLN3DnRWc3Qc&ll=22.557509900000003%2C88.40955129999998&z=8"
                  className="map-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Map
                </a>
              </td>
              <td className="shelter-name">Kolkata Rista</td>
              <td>
                95/D77 Basundhara Chingrighata, Canal South Road, Lakshmimina
                Bhaban, Kolkata, West Bengal
              </td>
              <td className="contact-person">
                Dr. Santosh kr. Giri
                <br />
                <small>Project Director</small>
              </td>
              <td className="contact-number">9339219696</td>
              <td>
                <a
                  href="mailto:ristashelterhome@gmail.com"
                  className="email-link"
                >
                  ristashelterhome@gmail.com
                </a>
              </td>
              <td>
                <div className="location-info">
                  <span className="state">West Bengal</span>
                  <span className="district">Kolkata</span>
                  <span className="city">Kolkata</span>
                </div>
              </td>
              <td>Kolkata</td>
              <td>Kolkata</td>
              <td>
                <span className="pincode">700105</span>
              </td>
            </tr>

            <tr>
              <td>11</td>
              <td>
                <a
                  href="https://www.google.com/maps/d/viewer?mid=1QYgxDpzNZeicuh1Ru2bZLN3DnRWc3Qc&ll=22.28683749999999%2C73.1672918&z=8"
                  className="map-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Map
                </a>
              </td>
              <td className="shelter-name">Lakshya Trust</td>
              <td>
                302/303/304, Shilalekh Complex, Opp. To Ford Showroom,
                Munjmahuda, Vadodara, Gujarat – 390020
              </td>
              <td className="contact-person">
                Mr. Sylvester Merchant
                <br />
                <small>Project Director</small>
              </td>
              <td className="contact-number">9825311997</td>
              <td>
                <a
                  href="mailto:lakshyagarimagreh@gmail.com"
                  className="email-link"
                >
                  lakshyagarimagreh@gmail.com
                </a>
              </td>
              <td>
                <div className="location-info">
                  <span className="state">Gujarat</span>
                  <span className="district">Vadodara</span>
                  <span className="city">Vadodara</span>
                </div>
              </td>
              <td>Vadodara</td>
              <td>Vadodara</td>
              <td>
                <span className="pincode">390020</span>
              </td>
            </tr>

            <tr>
              <td>12</td>
              <td>
                <a
                  href="https://www.google.com/maps/d/viewer?mid=1QYgxDpzNZeicuh1Ru2bZLN3DnRWc3Qc&ll=26.92346419999998%2C75.7478494&z=8"
                  className="map-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Map
                </a>
              </td>
              <td className="shelter-name">Nai Bhor Sansta</td>
              <td>46, Marudhar Vihar, Khatipura Road, Jhotwara, Jaipur</td>
              <td className="contact-person">
                Pushpa Maai
                <br />
                <small>Project Director</small>
              </td>
              <td className="contact-number">9829291377</td>
              <td>
                <a
                  href="mailto:naibhor.sanstha@gmail.com"
                  className="email-link"
                >
                  naibhor.sanstha@gmail.com
                </a>
              </td>
              <td>
                <div className="location-info">
                  <span className="state">Rajasthan</span>
                  <span className="district">Jaipur</span>
                  <span className="city">Jaipur</span>
                </div>
              </td>
              <td>Jaipur</td>
              <td>Jaipur</td>
              <td>
                <span className="pincode">302012</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
