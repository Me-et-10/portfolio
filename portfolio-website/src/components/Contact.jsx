import './Contact.css';

function Contact() {
  return (
    <section id="contact" className="contact section">
      <h2 className="section-title">Contact Me</h2>
      <form action="https://formspree.io/f/mjkgbkbv" method="POST" className="contact-form">
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" placeholder="Your Name" required />
        
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" placeholder="Your Email" required />
        
        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" placeholder="Your Message" rows="5" required></textarea>
        
        <button type="submit">Send Message</button>
      </form>
      <p className="contact-info">
        You can also contact me at:{' '}
        <a href="mailto:meet100patankar@gmail.com">meet100patankar@gmail.com</a>
      </p>
    </section>
  );
}

export default Contact;
