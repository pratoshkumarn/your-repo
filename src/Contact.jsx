import "./Contact.css"; // Add styling if needed

function Contact() {
  return (
    <div className="contact-page">
      <h2>Contact Us</h2>
      <p>Have questions? Get in touch with us!</p>
      <form>
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" rows="5" required></textarea>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
}

export default Contact;
