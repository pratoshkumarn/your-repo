import { useState, useEffect } from "react";
import "./Home.css"; // Import the corresponding CSS file

function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedLocation, setSelectedLocation] = useState("");

  const plumbers = [
    { name: "John Doe", phone: "+91-1234567899", rating: "★★★★★" },
    { name: "Jane Smith", phone: "+91-1234567899", rating: "★★★★★" },
    { name: "Mark Taylor", phone: "+91-1234567899", rating: "★★★★☆" },
    { name: "Emily Johnson", phone: "+91-1234567899", rating: "★★★★★" },
    { name: "David Brown", phone: "+91-1234567899", rating: "★★★★☆" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % plumbers.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="home-container">
      {/* Hero Section */}
      <h1>Find the Best Plumbers in Your Locality</h1>

      {/* Location Dropdown */}
      <div className="location-selector">
        <label>Select Your Location: </label>
        <select value={selectedLocation} onChange={(e) => setSelectedLocation(e.target.value)}>
          <option value="">Choose Location</option>
          <option value="New York">New York</option>
          <option value="Los Angeles">Los Angeles</option>
          <option value="Chicago">Chicago</option>
          <option value="Houston">Houston</option>
          <option value="Miami">Miami</option>
        </select>
      </div>

      {/* Plumber Contact Slider */}
      <div className="slider-container">
        <button onClick={() => setCurrentIndex(prev => prev === 0 ? plumbers.length - 1 : prev - 1)}>‹</button>
        <div className="slider">
          {plumbers.map((plumber, index) => (
            <div
              key={index}
              className={`slide ${index === currentIndex ? "active" : ""}`}
            >
              <h3>{plumber.name}</h3>
              <p>📞 {plumber.phone}</p>
              <p>{plumber.rating}</p>
            </div>
          ))}
        </div>
        <button onClick={() => setCurrentIndex(prev => (prev + 1) % plumbers.length)}>›</button>
      </div>

      {/* Why Choose Us Section */}
      <div className="why-choose-us">
        <h2>Why Choose Us?</h2>
        <div className="features">
          <div className="feature">
            🛠️ <h3>Verified & Trusted Plumbers</h3>
            <p>We connect you with licensed and experienced plumbers.</p>
          </div>
          <div className="feature">
            🚀 <h3>Fast & Reliable Service</h3>
            <p>Get plumbers at your doorstep quickly for any emergency.</p>
          </div>
          <div className="feature">
            ⭐ <h3>Customer Ratings & Reviews</h3>
            <p>Check real reviews before hiring.</p>
          </div>
          <div className="feature">
            💰 <h3>Affordable Pricing</h3>
            <p>Compare prices and hire within your budget.</p>
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <div className="contact-form">
        <h2>Contact Us</h2>
        <p>Have questions? Get in touch with us!</p>
        <form>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" rows="5" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
}

export default Home;
