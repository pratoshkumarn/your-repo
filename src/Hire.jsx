import "./Hire.css"; // Add styling if needed

function Hire() {
  const plumbers = [
    { name: "Jane Smith", phone: "+91-1234567899", rating: "★★★★★" },
    { name: "Mark Taylor", phone: "+91-1234567899", rating: "★★★★☆" },
    { name: "Emily Johnson", phone: "+91-1234567899", rating: "★★★★★" },
    { name: "David Brown", phone: "+91-1234567899", rating: "★★★★☆" }
  ];

  return (
    <div>
      <ul class="hireul">
        {plumbers.map((plumber, index) => (
          <li key={index}>
            <h3>{plumber.name}</h3>
            <p>{plumber.phone}</p>
            <p>{plumber.rating}</p>
            <button>Contact</button>
          </li>
        ))}
      </ul>
  
      <div className="work-with-us">
        <h2>Are you a plumber?</h2>
        <p>Work with us and earn <strong>INR25,000 - 40,000</strong> per month!</p>
        
        <form className="plumber-form">
          <label htmlFor="name">Full Name:</label>
          <input type="text" id="name" name="name" required />
  
          <label htmlFor="phone">Phone Number:</label>
          <input type="tel" id="phone" name="phone" required />
  
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
  
          <label htmlFor="experience">Years of Experience:</label>
          <input type="number" id="experience" name="experience" min="0" required />
  
          <label htmlFor="location">Location:</label>
          <input type="text" id="location" name="location" required />
  
          <button type="submit">Apply Now</button>
        </form>
      </div>
    </div>
  );
  
}

export default Hire;
