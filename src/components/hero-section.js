import { LitElement, html, css } from 'lit';

export class HeroSection extends LitElement {
  static styles = css`
    :host {
      display: block;
      background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
                  url('https://images.unsplash.com/photo-1506012787146-f92b2d7d6d96?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2069&q=80');
      background-size: cover;
      background-position: center;
      padding: 6rem 2rem;
      text-align: center;
      color: white;
    }
    .hero-content {
      max-width: 800px;
      margin: 0 auto;
    }
    h1 {
      font-size: 3rem;
      margin-bottom: 1rem;
    }
    p {
      font-size: 1.2rem;
      margin-bottom: 2rem;
    }
    .cta-button {
      background: #646cff;
      color: white;
      padding: 1rem 2rem;
      border-radius: 4px;
      text-decoration: none;
      font-weight: bold;
      display: inline-block;
    }
  `;

  render() {
    return html`
      <div class="hero-content">
        <h1>Track Your Fleet in Real-Time</h1>
        <p>Optimize routes, reduce costs, and improve efficiency with our advanced GPS tracking solutions</p>
        <a href="/contact" class="cta-button">Get Started</a>
      </div>
    `;
  }
}
customElements.define('hero-section', HeroSection);
