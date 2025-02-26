import { LitElement, html, css } from 'lit';

export class SiteFooter extends LitElement {
  static styles = css`
    :host {
      display: block;
      background: #213547;
      color: white;
      padding: 3rem 2rem;
    }
    .footer-content {
      max-width: 1200px;
      margin: 0 auto;
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 2rem;
    }
    h3 {
      color: #646cff;
      margin-bottom: 1rem;
    }
    ul {
      list-style: none;
      padding: 0;
      margin: 0;
    }
    li {
      margin-bottom: 0.5rem;
    }
    a {
      color: white;
      text-decoration: none;
    }
    a:hover {
      color: #646cff;
    }
    .social-links {
      display: flex;
      gap: 1rem;
      margin-top: 1rem;
    }
    .social-links a {
      font-size: 1.5rem;
    }
  `;

  render() {
    return html`
      <div class="footer-content">
        <div>
          <h3>FleetTrack Pro</h3>
          <p>Advanced GPS fleet tracking solutions for modern businesses.</p>
          <div class="social-links">
            <a href="#"><i class="fab fa-facebook"></i></a>
            <a href="#"><i class="fab fa-twitter"></i></a>
            <a href="#"><i class="fab fa-linkedin"></i></a>
          </div>
        </div>
        <div>
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/src/pages/products.html">Products</a></li>
            <li><a href="/src/pages/about.html">About Us</a></li>
            <li><a href="/src/pages/contact.html">Contact</a></li>
          </ul>
        </div>
        <div>
          <h3>Contact</h3>
          <ul>
            <li>Email: info@fleettrackpro.com</li>
            <li>Phone: (555) 123-4567</li>
            <li>Address: 123 Fleet Street, City, Country</li>
          </ul>
        </div>
      </div>
    `;
  }
}
customElements.define('site-footer', SiteFooter);
