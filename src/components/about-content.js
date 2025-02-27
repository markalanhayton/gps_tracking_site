import { LitElement, html, css } from 'lit';

export class AboutContent extends LitElement {
  static styles = css`
    :host {
      display: block;
      padding: 2rem;
    }
    .about-container {
      max-width: 1200px;
      margin: 0 auto;
    }
    .section {
      margin-bottom: 3rem;
    }
    .team-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 2rem;
      margin-top: 2rem;
    }
    .team-member {
      text-align: center;
    }
    .team-member img {
      width: 150px;
      height: 150px;
      border-radius: 50%;
      margin-bottom: 1rem;
      background: #f5f5f5;
    }
    .stats-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 2rem;
      margin: 2rem 0;
      text-align: center;
    }
    .stat-item {
      padding: 2rem;
      background: #f5f5f5;
      border-radius: 8px;
    }
    .stat-number {
      font-size: 2.5rem;
      color: #646cff;
      font-weight: bold;
    }
    h2 {
      color: #213547;
      margin-bottom: 1rem;
    }
  `;

  render() {
    return html`
      <div class="about-container">
        <section class="section">
          <h2>Our Story</h2>
          <p>FleetTrack Pro was founded in 2015 with a mission to revolutionize fleet management through innovative technology solutions. We've grown from a small startup to an industry leader, serving thousands of businesses worldwide.</p>
          
          <div class="stats-grid">
            <div class="stat-item">
              <div class="stat-number">5000+</div>
              <div>Active Users</div>
            </div>
            <div class="stat-item">
              <div class="stat-number">50k+</div>
              <div>Vehicles Tracked</div>
            </div>
            <div class="stat-item">
              <div class="stat-number">25+</div>
              <div>Countries</div>
            </div>
          </div>
        </section>

        <section class="section">
          <h2>Our Mission</h2>
          <p>We're committed to providing cutting-edge fleet management solutions that help businesses optimize their operations, reduce costs, and improve efficiency. Our innovative technology and dedicated support team ensure that our clients always stay ahead of the curve.</p>
        </section>

        <section class="section">
          <h2>Leadership Team</h2>
          <div class="team-grid">
            <div class="team-member">
              <img src="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><rect fill='%23f5f5f5' width='100' height='100'/></svg>" alt="CEO">
              <h3>John Smith</h3>
              <p>CEO & Founder</p>
            </div>
            <div class="team-member">
              <img src="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><rect fill='%23f5f5f5' width='100' height='100'/></svg>" alt="CTO">
              <h3>Sarah Johnson</h3>
              <p>CTO</p>
            </div>
            <div class="team-member">
              <img src="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><rect fill='%23f5f5f5' width='100' height='100'/></svg>" alt="COO">
              <h3>Michael Chen</h3>
              <p>COO</p>
            </div>
          </div>
        </section>
      </div>
    `;
  }
}
customElements.define('about-content', AboutContent);
