import { LitElement, html, css } from 'lit';

export class NavBar extends LitElement {
  static properties = {
    isMenuOpen: { type: Boolean }
  };

  constructor() {
    super();
    this.isMenuOpen = false;
  }

  static styles = css`
    :host {
      display: block;
      background: white;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      z-index: 1000;
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
    .hamburger {
      display: none;
      flex-direction: column;
      gap: 4px;
      cursor: pointer;
      background: none;
      border: none;
      padding: 0;
    }
    .hamburger span {
      display: block;
      width: 25px;
      height: 3px;
      background: #213547;
      transition: all 0.3s ease;
    }

    @media (max-width: 768px) {
      .hamburger {
        display: flex;
      }
      ul {
        display: none;
        position: absolute;
        top: 100%;
        left: 0;
        right: 0;
        flex-direction: column;
        background: white;
        padding: 1rem;
        box-shadow: 0 2px 4px rgba(0,0,0,0.1);
      }
      ul.open {
        display: flex;
      }
      nav {
        position: relative;
      }
      .hamburger.open span:first-child {
        transform: rotate(45deg) translate(5px, 5px);
      }
      .hamburger.open span:nth-child(2) {
        opacity: 0;
      }
      .hamburger.open span:last-child {
        transform: rotate(-45deg) translate(5px, -5px);
      }
    }
  `;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  render() {
    return html`
      <nav>
        <a href="/index.html" class="logo">FleetTrack Pro</a>
        <button class="hamburger ${this.isMenuOpen ? 'open' : ''}" @click=${this.toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </button>
        <ul class="${this.isMenuOpen ? 'open' : ''}">
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
