import { LitElement, html, css } from 'lit';

export class PricingSection extends LitElement {
  static styles = css`
    :host {
      display: block;
      padding: 4rem 2rem;
      background: #f5f5f5;
    }
    .pricing-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 2rem;
      max-width: 1200px;
      margin: 0 auto;
    }
    .pricing-card {
      background: white;
      border-radius: 8px;
      padding: 2rem;
      text-align: center;
      box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    }
    .plan-name {
      font-size: 1.5rem;
      color: #213547;
      margin-bottom: 1rem;
    }
    .price {
      font-size: 2.5rem;
      color: #646cff;
      margin-bottom: 1.5rem;
    }
    .price span {
      font-size: 1rem;
      color: #666;
    }
    .features {
      list-style: none;
      padding: 0;
      margin: 0 0 1.5rem 0;
    }
    .features li {
      padding: 0.5rem 0;
      border-bottom: 1px solid #eee;
    }
    .cta-button {
      display: inline-block;
      background: #646cff;
      color: white;
      padding: 1rem 2rem;
      border-radius: 4px;
      text-decoration: none;
      transition: background 0.3s ease;
    }
    .cta-button:hover {
      background: #535bf2;
    }
    h2 {
      text-align: center;
      font-size: 2.5rem;
      margin-bottom: 3rem;
      color: #213547;
    }
  `;

  render() {
    return html`
      <h2>Simple, Transparent Pricing</h2>
      <div class="pricing-grid">
        <div class="pricing-card">
          <h3 class="plan-name">Basic</h3>
          <div class="price">$29<span>/mo</span></div>
          <ul class="features">
            <li>Up to 5 vehicles</li>
            <li>Real-time tracking</li>
            <li>Basic reporting</li>
            <li>Email support</li>
          </ul>
          <a href="/contact" class="cta-button">Get Started</a>
        </div>

        <div class="pricing-card">
          <h3 class="plan-name">Professional</h3>
          <div class="price">$49<span>/mo</span></div>
          <ul class="features">
            <li>Up to 15 vehicles</li>
            <li>Advanced analytics</li>
            <li>Fuel monitoring</li>
            <li>24/7 support</li>
          </ul>
          <a href="/contact" class="cta-button">Get Started</a>
        </div>

        <div class="pricing-card">
          <h3 class="plan-name">Enterprise</h3>
          <div class="price">$99<span>/mo</span></div>
          <ul class="features">
            <li>Unlimited vehicles</li>
            <li>Custom reporting</li>
            <li>API access</li>
            <li>Dedicated support</li>
          </ul>
          <a href="/contact" class="cta-button">Get Started</a>
        </div>
      </div>
    `;
  }
}
customElements.define('pricing-section', PricingSection);
