import { LitElement, html, css } from 'lit';

export class FeaturesSection extends LitElement {
  static styles = css`
    :host {
      display: block;
      padding: 2rem;
    }
    .features-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 2rem;
      max-width: 1200px;
      margin: 0 auto;
    }
    .feature-card {
      padding: 1.5rem;
      background: #f5f5f5;
      border-radius: 8px;
      text-align: center;
    }
    .feature-icon {
      font-size: 2rem;
      color: #646cff;
      margin-bottom: 1rem;
    }
  `;

  render() {
    return html`
      <div class="features-grid">
        <div class="feature-card">
          <div class="feature-icon"><i class="fas fa-map-marked-alt"></i></div>
          <h3>Real-Time Tracking</h3>
          <p>Monitor your fleet's location and status in real-time</p>
        </div>
        <div class="feature-card">
          <div class="feature-icon"><i class="fas fa-chart-line"></i></div>
          <h3>Analytics</h3>
          <p>Detailed reports and insights for better decision making</p>
        </div>
        <div class="feature-card">
          <div class="feature-icon"><i class="fas fa-gas-pump"></i></div>
          <h3>Fuel Management</h3>
          <p>Optimize fuel consumption and reduce costs</p>
        </div>
      </div>
    `;
  }
}
customElements.define('features-section', FeaturesSection);
