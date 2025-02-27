import { LitElement, html, css } from 'lit';

export class ContactForm extends LitElement {
  static styles = css`
    :host {
      display: block;
      padding: 2rem;
    }
    .contact-container {
      max-width: 1200px;
      margin: 0 auto;
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 3rem;
    }
    .contact-info {
      padding: 2rem;
      background: #f5f5f5;
      border-radius: 8px;
    }
    .contact-method {
      margin-bottom: 1.5rem;
    }
    .contact-method h3 {
      color: #646cff;
      margin-bottom: 0.5rem;
    }
    .form-group {
      margin-bottom: 1.5rem;
    }
    label {
      display: block;
      margin-bottom: 0.5rem;
      color: #213547;
    }
    input, textarea, select {
      width: 100%;
      padding: 0.8rem;
      border: 1px solid #ddd;
      border-radius: 4px;
      font-size: 1rem;
    }
    textarea {
      height: 150px;
      resize: vertical;
    }
    button {
      background: #646cff;
      color: white;
      padding: 1rem 2rem;
      border: none;
      border-radius: 4px;
      font-size: 1rem;
      cursor: pointer;
      transition: background-color 0.3s;
    }
    button:hover {
      background: #535bf2;
    }
  `;

  handleSubmit(e) {
    e.preventDefault();
    // Handle form submission logic here
    alert('Form submitted! We will contact you soon.');
  }

  render() {
    return html`
      <div class="contact-container">
        <div class="contact-info">
          <div class="contact-method">
            <h3>Address</h3>
            <p>123 Fleet Street<br>City, Country 12345</p>
          </div>
          <div class="contact-method">
            <h3>Phone</h3>
            <p>(555) 123-4567</p>
          </div>
          <div class="contact-method">
            <h3>Email</h3>
            <p>info@fleettrackpro.com</p>
          </div>
          <div class="contact-method">
            <h3>Business Hours</h3>
            <p>Monday - Friday: 9:00 AM - 6:00 PM<br>
            Saturday - Sunday: Closed</p>
          </div>
        </div>

        <form @submit=${this.handleSubmit}>
          <div class="form-group">
            <label for="name">Name</label>
            <input type="text" id="name" required>
          </div>
          
          <div class="form-group">
            <label for="email">Email</label>
            <input type="email" id="email" required>
          </div>

          <div class="form-group">
            <label for="company">Company</label>
            <input type="text" id="company">
          </div>

          <div class="form-group">
            <label for="interest">I'm interested in</label>
            <select id="interest">
              <option value="basic">Basic GPS Tracker</option>
              <option value="pro">Fleet Management Pro</option>
              <option value="enterprise">Enterprise Solution</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div class="form-group">
            <label for="message">Message</label>
            <textarea id="message" required></textarea>
          </div>

          <button type="submit">Send Message</button>
        </form>
      </div>
    `;
  }
}
customElements.define('contact-form', ContactForm);
