import { LitElement, html, css } from 'lit';

export class ProductCatalog extends LitElement {
  static styles = css`
    :host {
      display: block;
      padding: 2rem;
    }
    .products-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 2rem;
      max-width: 1200px;
      margin: 0 auto;
    }
    .product-card {
      background: white;
      border-radius: 8px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.1);
      overflow: hidden;
      transition: transform 0.3s ease;
    }
    .product-card:hover {
      transform: translateY(-5px);
    }
    .product-image {
      width: 100%;
      height: 200px;
      background: #f5f5f5;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .product-image svg {
      width: 64px;
      height: 64px;
      fill: #646cff;
    }
    .product-content {
      padding: 1.5rem;
    }
    h2 {
      margin: 0 0 1rem 0;
      color: #213547;
      font-size: 1.5rem;
    }
    .price {
      font-size: 1.25rem;
      color: #646cff;
      font-weight: bold;
      margin: 1rem 0;
    }
    .features {
      list-style: none;
      padding: 0;
      margin: 0;
    }
    .features li {
      margin: 0.5rem 0;
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }
    .features li::before {
      content: "✓";
      color: #646cff;
      font-weight: bold;
    }
    .cta-button {
      display: inline-block;
      background: #646cff;
      color: white;
      padding: 0.75rem 1.5rem;
      border-radius: 4px;
      text-decoration: none;
      margin-top: 1rem;
      transition: background 0.3s ease;
    }
    .cta-button:hover {
      background: #535bf2;
    }
  `;

  render() {
    return html`
      <div class="products-grid">
        <div class="product-card">
          <div class="product-image">
            <svg viewBox="0 0 24 24">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
            </svg>
          </div>
          <div class="product-content">
            <h2>Basic Tracker</h2>
            <p>Essential GPS tracking for small fleets</p>
            <div class="price">$29.99/mo</div>
            <ul class="features">
              <li>Real-time GPS tracking</li>
              <li>Basic reporting</li>
              <li>Mobile app access</li>
              <li>Email support</li>
            </ul>
            <a href="/contact" class="cta-button">Get Started</a>
          </div>
        </div>

        <div class="product-card">
          <div class="product-image">
            <svg viewBox="0 0 24 24">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
            </svg>
          </div>
          <div class="product-content">
            <h2>Pro Tracker</h2>
            <p>Advanced tracking for growing businesses</p>
            <div class="price">$49.99/mo</div>
            <ul class="features">
              <li>All Basic features</li>
              <li>Advanced analytics</li>
              <li>Fuel monitoring</li>
              <li>24/7 support</li>
            </ul>
            <a href="/contact" class="cta-button">Get Started</a>
          </div>
        </div>

        <div class="product-card">
          <div class="product-image">
            <svg viewBox="0 0 24 24">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
            </svg>
          </div>
          <div class="product-content">
            <h2>Enterprise Tracker</h2>
            <p>Complete fleet management solution</p>
            <div class="price">$99.99/mo</div>
            <ul class="features">
              <li>All Pro features</li>
              <li>Custom reporting</li>
              <li>API access</li>
              <li>Dedicated support</li>
            </ul>
            <a href="/contact" class="cta-button">Get Started</a>
          </div>
        </div>
      </div>
    `;
  }
}
customElements.define('product-catalog', ProductCatalog);
