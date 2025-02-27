import { LitElement, html, css } from 'lit';

export class PricingSection extends LitElement {
  static styles = css`
    :host {
      display: block;
      padding: 2rem;
    }
    .pricing-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 2rem;
      max-width: 1200px;
      margin: 0 auto;
    }
    .pricing-card {
      padding: 2rem;
      background: white;
      border-radius: 8px;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
      text-align: center;
    }
    .price {
      font-size: 2.5rem;
      font-weight: bold;
      color: #646cff;
      margin: 1rem 0;
    }
    .features-list {
      list-style: none;
      padding: 0;
      margin: 1rem 0;
    }
    .features-list li {
      margin: 0.5rem 0;
    }
    .cta-button {
      background: #646cff;
      color: white;
      padding: 0.8rem 1.5rem;
      border-radius: 4px;
      text-decoration: none;
      display: inline-block;
      margin-top: 1rem;
    }
  `;

  render() {
    return html`
      <div class="pricing-grid">
        <div class="pricing-card">
          <h3>Basic</h3>
          <div class="price">$29/mo</div>
          <ul class="features-list">
            <li>Up to 5 vehicles</li>
            <li>Real-time tracking</li>
            <li>Basic reports</li>
          </ul>
          <a href="/contact" class="cta-button">Get Started</a>
        </div>
        <div class="pricing-card">
          <h3>Pro</h3>
          <div class="price">$49/mo</div>
          <ul class="features-list">
            <li>Up to 15 vehicles</li>
            <li>Advanced analytics</li>
            <li>Fuel management</li>
          </ul>
          <a href="/contact" class="cta-button">Get Started</a>
        </div>
        <div class="pricing-card">
          <h3>Enterprise</h3>
          <div class="price">$99/mo</div>
          <ul class="features-list">
            <li>Unlimited vehicles</li>
            <li>Custom solutions</li>
            <li>24/7 support</li>
          </ul>
          <a href="/contact" class="cta-button">Contact Sales</a>
        </div>
      </div>
    `;
  }
}
customElements.define('pricing-section', PricingSection);
