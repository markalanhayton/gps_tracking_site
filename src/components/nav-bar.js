import { LitElement, html, css } from 'lit';

export class NavBar extends LitElement {
  static styles = css`
    :host {
      display: block;
      background: white;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }
    nav {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 1rem 2rem;
      max-width: 1200px;
      margin: 0 auto;
    }
    .logo {
      font-size: 1.5rem;
      font-weight: bold;
      color: #646cff;
      text-decoration: none;
    }
    ul {
      display: flex;
      gap: 2rem;
      list-style: none;
      margin: 0;
      padding: 0;
    }
    a {
      color: #213547;
      text-decoration: none;
      font-weight: 500;
    }
    a:hover {
      color: #646cff;
    }
  `;

  render() {
    return html`
      <nav>
        <a href="/index.html" class="logo">FleetTrack Pro</a>
        <ul>
          <li><a href="/index.html">Home</a></li>
          <li><a href="/src/pages/products.html">Products</a></li>
          <li><a href="/src/pages/about.html">About</a></li>
          <li><a href="/src/pages/contact.html">Contact</a></li>
        </ul>
      </nav>
    `;
  }
}
customElements.define('nav-bar', NavBar);
